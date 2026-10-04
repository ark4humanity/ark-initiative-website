#!/usr/bin/env python3
"""Push repo-staging to GitHub via the Git Database API (no git protocol needed).

Uses the stored custom.github credential via dynamic surrogate.
Handles rate limits by sleeping until reset.
"""
import base64
import json
import os
import sys
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_response_body

OWNER = "ark4humanity"
REPO = "ark-initiative-website"
ROOT = os.path.expanduser("~/workspace/repo-staging")
API = f"https://api.github.com/repos/{OWNER}/{REPO}"
WORKERS = 6


def api(method, path, data=None):
    url = API + path
    body = json.dumps(data).encode() if data is not None else None
    for attempt in range(6):
        req = urllib.request.Request(
            url, data=body, method=method,
            headers={"Accept": "application/vnd.github+json",
                     "Content-Type": "application/json",
                     "User-Agent": "muse-github-push"})
        add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                raw = read_response_body(resp).decode()
                remaining = int(resp.headers.get("X-RateLimit-Remaining", "5000"))
                reset = int(resp.headers.get("X-RateLimit-Reset", "0"))
                if remaining < 50:
                    wait = max(reset - int(time.time()), 0) + 5
                    print(f"[rate] low ({remaining}), sleeping {wait}s", flush=True)
                    time.sleep(wait)
                return json.loads(raw) if raw else {}
        except urllib.error.HTTPError as e:
            if e.code in (403, 429):
                try:
                    reset = int(e.headers.get("X-RateLimit-Reset", "0"))
                except Exception:
                    reset = 0
                wait = max(reset - int(time.time()), 0) + 10
                print(f"[rate] hit {e.code}, sleeping {wait}s (attempt {attempt+1})", flush=True)
                time.sleep(wait)
                continue
            raw = read_response_body(e).decode(errors="replace")[:300]
            raise RuntimeError(f"{method} {path} -> {e.code}: {raw}")
    raise RuntimeError(f"{method} {path}: retries exhausted")


def upload_blob(full):
    with open(full, "rb") as f:
        content = base64.b64encode(f.read()).decode()
    r = api("POST", "/git/blobs", {"content": content, "encoding": "base64"})
    return r["sha"]


def main():
    # 1. Collect files
    files = []
    for dirpath, _, filenames in os.walk(ROOT):
        if ".git" in dirpath:
            continue
        for fn in filenames:
            if fn == "push_via_api.py":
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, ROOT)
            files.append((rel, full))
    print(f"[push] {len(files)} files to upload", flush=True)

    # 2. Upload blobs concurrently -> {rel: sha}
    blob_sha = {}
    done = [0]

    def one(item):
        rel, full = item
        sha = upload_blob(full)
        done[0] += 1
        if done[0] % 500 == 0:
            print(f"[push] {done[0]}/{len(files)} blobs", flush=True)
        return rel, sha

    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        for rel, sha in ex.map(one, files):
            blob_sha[rel] = sha
    print(f"[push] all {len(blob_sha)} blobs uploaded", flush=True)

    # 3. Build trees bottom-up
    dir_children = {}
    all_dirs = set()
    for rel in blob_sha:
        parts = rel.split(os.sep)
        for i in range(len(parts)):
            all_dirs.add(os.sep.join(parts[:i]))
    all_dirs.discard("")
    for rel in blob_sha:
        d = os.path.dirname(rel)
        dir_children.setdefault(d, {"files": [], "dirs": []})
        dir_children[d]["files"].append(rel)
    for d in all_dirs:
        if not d:
            continue
        parent = os.path.dirname(d)
        dir_children.setdefault(parent, {"files": [], "dirs": []})
        if d not in dir_children[parent]["dirs"]:
            dir_children[parent]["dirs"].append(d)

    def build_tree(d):
        entries = []
        for rel in sorted(dir_children.get(d, {}).get("files", [])):
            entries.append({"path": os.path.basename(rel), "mode": "100644",
                            "type": "blob", "sha": blob_sha[rel]})
        for sub in sorted(dir_children.get(d, {}).get("dirs", [])):
            entries.append({"path": os.path.basename(sub), "mode": "040000",
                            "type": "tree", "sha": build_tree(sub)})
        if not entries:
            return None
        r = api("POST", "/git/trees", {"tree": entries})
        return r["sha"]

    root_sha = build_tree("")
    print(f"[push] root tree {root_sha}", flush=True)

    # 4. Commit + ref
    commit = api("POST", "/git/commits", {
        "message": "Initial website source: generators, essays, deployment script (videos and credentials excluded)",
        "tree": root_sha,
        "author": {"name": "Muse", "email": "ark4humanity@gmail.com"},
    })
    print(f"[push] commit {commit['sha']}", flush=True)
    api("POST", "/git/refs", {"ref": "refs/heads/main", "sha": commit["sha"]})
    print(f"[push] DONE — main -> {commit['sha']}", flush=True)


if __name__ == "__main__":
    main()
