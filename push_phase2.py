#!/usr/bin/env python3
"""Phase 2: build trees, commit, and point main at it.

Blob SHAs are recomputed locally (git blob sha1 is deterministic) since all
3251 blobs were already uploaded via the API in phase 1.
"""
import hashlib
import json
import os
import sys
import time
import urllib.request
import urllib.error

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_response_body

OWNER = "ark4humanity"
REPO = "ark-initiative-website"
ROOT = os.path.expanduser("~/workspace/repo-staging")
API = f"https://api.github.com/repos/{OWNER}/{REPO}"


def api(method, path, data=None):
    url = API + path
    body = json.dumps(data).encode() if data is not None else None
    wait = 5
    for attempt in range(8):
        req = urllib.request.Request(
            url, data=body, method=method,
            headers={"Accept": "application/vnd.github+json",
                     "Content-Type": "application/json",
                     "User-Agent": "muse-github-push"})
        add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
        try:
            with urllib.request.urlopen(req, timeout=90) as resp:
                raw = read_response_body(resp).decode()
                return json.loads(raw) if raw else {}
        except urllib.error.HTTPError as e:
            raw = read_response_body(e).decode(errors="replace")[:200]
            if e.code in (403, 429, 500, 502, 503, 504) or (e.code == 422 and "timed out" in raw):
                print(f"[retry] {method} {path} -> {e.code}, sleeping {wait}s", flush=True)
                time.sleep(wait)
                wait = min(wait * 2, 120)
                continue
            raise RuntimeError(f"{method} {path} -> {e.code}: {raw}")
    raise RuntimeError(f"{method} {path}: retries exhausted")


def blob_sha(full):
    with open(full, "rb") as f:
        data = f.read()
    h = hashlib.sha1()
    h.update(f"blob {len(data)}\0".encode())
    h.update(data)
    return h.hexdigest()


def main():
    files = []
    for dirpath, _, filenames in os.walk(ROOT):
        parts = dirpath.split(os.sep)
        if ".git" in parts or "__pycache__" in parts:
            continue
        for fn in filenames:
            if fn in ("push_via_api.py", "push_phase2.py"):
                continue
            if fn.endswith((".pyc", ".log")):
                continue
            full = os.path.join(dirpath, fn)
            files.append((os.path.relpath(full, ROOT), full))
    print(f"[p2] hashing {len(files)} files locally", flush=True)
    blob = {rel: blob_sha(full) for rel, full in files}

    dir_children = {}
    for rel in blob:
        d = os.path.dirname(rel)
        dir_children.setdefault(d, {"files": [], "dirs": []})
        dir_children[d]["files"].append(rel)
    for rel in blob:
        parts = rel.split(os.sep)
        for i in range(1, len(parts)):
            d = os.sep.join(parts[:i])
            parent = os.path.dirname(d)
            dir_children.setdefault(parent, {"files": [], "dirs": []})
            if d not in dir_children[parent]["dirs"]:
                dir_children[parent]["dirs"].append(d)

    sys.setrecursionlimit(10000)

    def build_tree(d):
        entries = []
        for rel in sorted(dir_children.get(d, {}).get("files", [])):
            entries.append({"path": os.path.basename(rel), "mode": "100644",
                            "type": "blob", "sha": blob[rel]})
        for sub in sorted(dir_children.get(d, {}).get("dirs", [])):
            entries.append({"path": os.path.basename(sub), "mode": "040000",
                            "type": "tree", "sha": build_tree(sub)})
        r = api("POST", "/git/trees", {"tree": entries})
        return r["sha"]

    root_sha = build_tree("")
    print(f"[p2] root tree {root_sha}", flush=True)

    # parent = current main (the README seed commit)
    ref = api("GET", "/git/ref/heads/main")
    parent_sha = ref["object"]["sha"]
    commit = api("POST", "/git/commits", {
        "message": "Initial website source: generators, essays, deployment script (videos and credentials excluded)",
        "tree": root_sha,
        "parents": [parent_sha],
        "author": {"name": "Muse", "email": "ark4humanity@gmail.com"},
    })
    print(f"[p2] commit {commit['sha']}", flush=True)
    api("PATCH", "/git/refs/heads/main", {"sha": commit["sha"]})
    print("[p2] DONE — main updated", flush=True)


if __name__ == "__main__":
    main()
