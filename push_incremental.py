#!/usr/bin/env python3
"""Incremental GitHub push for ark-initiative-website via Git Database API.
Usage: python3 push_incremental.py "<commit message>"
Syncs ~/workspace/repo-staging -> GitHub main by uploading only changed/new blobs SEQUENTIALLY.
Lessons baked in: sequential blob uploads (~1.5s spacing), retry net errors + 502/503/504,
retry transient 422 on tree POST, never use push_via_api.py (re-uploads everything).
"""
import sys, os, hashlib, base64, json, time, http.client, shutil, subprocess
sys.path.insert(0, '/opt/hatch/skills/skill-creator/bin')
from dynamic_credentials import add_surrogate_to_request, read_response_body
import urllib.request, urllib.error

OWNER, REPO = "ark4humanity", "ark-initiative-website"
API = f"https://api.github.com/repos/{OWNER}/{REPO}"
ROOT = os.path.expanduser("~/workspace/repo-staging")
SRC = os.path.expanduser("~/workspace/ark-website")
ESSAY_SRC = os.path.expanduser("~/workspace/website-content")
NET_ERRS = (http.client.RemoteDisconnected, http.client.IncompleteRead, ConnectionResetError, TimeoutError)

COMMIT_MSG = sys.argv[1] if len(sys.argv) > 1 else "Incremental update"

def api(method, path, data=None, tries=8):
    body = json.dumps(data).encode() if data is not None else None
    for a in range(tries):
        req = urllib.request.Request(API + path, data=body, method=method,
            headers={"Accept": "application/vnd.github+json", "Content-Type": "application/json",
                     "User-Agent": "muse-push-incremental"})
        add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(read_response_body(resp).decode() or "{}")
        except urllib.error.HTTPError as e:
            eb = read_response_body(e).decode(errors="replace")[:300]
            if e.code == 403 and "rate limit" in eb.lower():
                rl = e.headers.get("X-RateLimit-Reset")
                wait = max(int(rl) - int(time.time()) + 10, 30) if rl else 60
                print(f"[api] rate-limited, sleeping {wait}s", flush=True); time.sleep(wait); continue
            if e.code in (502, 503, 504) and a < tries - 1:
                time.sleep(5 * (a + 1)); continue
            raise RuntimeError(f"HTTP {e.code} on {method} {path}: {eb}")
        except NET_ERRS as e:
            print(f"[api] net error {type(e).__name__}, retry {a+1}", flush=True); time.sleep(5 * (a + 1)); continue

def blob_sha_of(path):
    with open(path, 'rb') as f: data = f.read()
    return hashlib.sha1(b"blob %d\0" % len(data) + data).hexdigest()

# 1. rsync local sources into staging
subprocess.run(["rsync", "-a", "--delete", "--exclude=*.mp4", "--exclude=__pycache__",
                "--exclude=*.pyc", "--exclude=.git", SRC + "/", ROOT + "/ark-website/"], check=True)
subprocess.run(["rsync", "-a", "--delete", "--exclude=*.mp4", "--exclude=__pycache__",
                "--exclude=*.pyc", "--exclude=.git", ESSAY_SRC + "/", ROOT + "/website-content/"], check=True)
print("[sync] staging refreshed", flush=True)

# 2. index local files
local = {}
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in ('.git', '__pycache__')]
    for fn in filenames:
        if fn.endswith('.pyc'): continue
        full = os.path.join(dirpath, fn)
        rel = os.path.relpath(full, ROOT)
        if rel.startswith('.git/'): continue
        local[rel] = (full, blob_sha_of(full))

# 3. diff against remote
ref = api("GET", "/git/ref/heads/main")
parent = ref["object"]["sha"]
tree = api("GET", f"/git/trees/{parent}?recursive=1")
remote_blobs = {t["path"]: t["sha"] for t in tree.get("tree", []) if t["type"] == "blob"}
need = [rel for rel, (full, sha) in local.items() if remote_blobs.get(rel) != sha]
print(f"[push] parent {parent[:12]}; changed/new blobs: {len(need)}", flush=True)

# 4. upload changed blobs sequentially.
# For each changed file: GET the blob by its content sha first — if GitHub already
# has it (uploaded by an earlier interrupted run), skip; else upload. Never trust
# a local cache for existence: only a 200 from the API proves the blob is there.
import urllib.error as _urlerr
def blob_exists(sha):
    req = urllib.request.Request(API + f"/git/blobs/{sha}", method="GET",
        headers={"Accept": "application/vnd.github+json", "User-Agent": "muse-push-incremental"})
    add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
    try:
        with urllib.request.urlopen(req, timeout=30):
            return True
    except _urlerr.HTTPError as e:
        if e.code == 404: return False
        raise
    except NET_ERRS:
        return None  # unknown — upload to be safe
blob_sha = {}
for i, rel in enumerate(need):
    full, lsha = local[rel]
    ex = blob_exists(lsha)
    if ex:
        blob_sha[rel] = lsha
    else:
        with open(full, 'rb') as f: content = base64.b64encode(f.read()).decode()
        r = api("POST", "/git/blobs", {"content": content, "encoding": "base64"})
        blob_sha[rel] = r["sha"]
        assert r["sha"] == lsha, f"sha mismatch for {rel}"
    if (i + 1) % 40 == 0: print(f"[push] blob {i+1}/{len(need)}", flush=True)
    time.sleep(0.4)
for rel, (full, sha) in local.items():
    if rel not in blob_sha: blob_sha[rel] = sha
print("[push] blobs ready", flush=True)

# 5. build trees bottom-up
from collections import defaultdict
dir_children = defaultdict(lambda: {"files": [], "dirs": []})
dirs = set()
for rel in local:
    d = os.path.dirname(rel)
    parts = d.split(os.sep) if d else []
    for i in range(len(parts) + 1): dirs.add(os.sep.join(parts[:i]))
for rel in local:
    dir_children[os.path.dirname(rel)]["files"].append(rel)
for d in dirs:
    if not d: continue
    p = os.path.dirname(d)
    if d not in dir_children[p]["dirs"]: dir_children[p]["dirs"].append(d)

def build_tree(d):
    entries = []
    for rel in sorted(dir_children.get(d, {}).get("files", [])):
        entries.append({"path": os.path.basename(rel), "mode": "100644", "type": "blob", "sha": blob_sha[rel]})
    for sub in sorted(dir_children.get(d, {}).get("dirs", [])):
        entries.append({"path": os.path.basename(sub), "mode": "040000", "type": "tree", "sha": build_tree(sub)})
    if not entries: return None
    for a in range(5):  # transient/flaky 422 retry with growing backoff
        try:
            sha = api("POST", "/git/trees", {"tree": entries})["sha"]
            time.sleep(0.5)  # keep tree-creation rate gentle
            return sha
        except RuntimeError as e:
            if "422" in str(e) and a < 4:
                wait = 15 * (2 ** a)
                print(f"[tree] 422 on {d!r}, backoff {wait}s (try {a+1})", flush=True)
                time.sleep(wait); continue
            raise
    raise RuntimeError("tree build failed after retries")

root = build_tree("")
print(f"[push] root tree {root}", flush=True)

# 6. commit + move ref
commit = api("POST", "/git/commits", {"message": COMMIT_MSG, "tree": root, "parents": [parent],
    "author": {"name": "Muse", "email": "ark4humanity@gmail.com"}})
print(f"[push] commit {commit['sha']}", flush=True)
api("PATCH", "/git/refs/heads/main", {"sha": commit["sha"]})
print(f"[push] DONE main -> {commit['sha'][:12]}", flush=True)
