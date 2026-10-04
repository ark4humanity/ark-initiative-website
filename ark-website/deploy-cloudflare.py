#!/usr/bin/env python3
"""Deploy ~/workspace/ark-website to the Cloudflare Worker 'thearkinitiative'
via Workers Static Assets (direct upload, no wrangler needed).

Flow mirrors Wrangler (workers-sdk packages/deploy-helpers/src/deploy/helpers/assets.ts):
  1. POST assets-upload-session with manifest {"/path": {"hash": blake3_32, "size": n}}
     where hash = blake3(base64(file_bytes) + extension_without_dot).hexdigest()[:32]
  2. POST /workers/assets/upload?base64=true (Bearer: session jwt) with multipart
     fields named by file hash, each carrying the BASE64-ENCODED file content
  3. PUT /workers/scripts/{name} multipart with metadata + main module,
     metadata.assets.jwt = completion jwt from the upload response

Usage: python3 deploy-cloudflare.py
Auth: uses the stored custom.cloudflare credential via dynamic_credentials.
"""
import base64
import json
import mimetypes
import os
import sys
import urllib.request

import blake3

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_response_body

SITE_DIR = os.path.dirname(os.path.abspath(__file__))
ACCOUNT_ID = "1f510d341f61f6dedd9634d7c156c84f"
SCRIPT_NAME = "thearkinitiative"
BASE = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}"
ALLOWED = ["api.cloudflare.com"]

WORKER_JS = """export default {\n  async fetch(request, env) {\n    return new Response("not found", { status: 404 });\n  }\n};\n"""

SKIP = {".git", "deploy-cloudflare.py", "__pycache__", "phase2", "r2-staging", "video-cleanup", "backups"}


def api_request(url, data=None, method="GET", content_type=None, auth_bearer=None):
    # NOTE: add_surrogate_to_request REPLACES the Authorization header, so a
    # session-JWT bearer must be applied after the surrogate, not before.
    headers = {"User-Agent": "muse-cloudflare-deploy"}
    if content_type:
        headers["Content-Type"] = content_type
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    add_surrogate_to_request(req, "custom.cloudflare", allowed_hosts=ALLOWED)
    if auth_bearer:
        req.add_header("Authorization", f"Bearer {auth_bearer}")
    with urllib.request.urlopen(req, timeout=180) as resp:
        return json.loads(read_response_body(resp).decode())


def collect_files():
    files = {}
    for root, dirs, names in os.walk(SITE_DIR):
        dirs[:] = [d for d in dirs if d not in SKIP]
        for n in names:
            if n in SKIP or n.endswith(".json") and "media-generation" in n:
                continue
            full = os.path.join(root, n)
            rel = os.path.relpath(full, SITE_DIR).replace(os.sep, "/")
            files["/" + rel] = full
    return files


def asset_hash(data: bytes, full: str) -> str:
    b64 = base64.b64encode(data).decode("ascii")
    ext = os.path.splitext(full)[1][1:]  # extension without the dot
    return blake3.blake3((b64 + ext).encode("utf-8")).hexdigest()[:32]


def encode_multipart(fields):
    """fields: list of (name, filename, content_type, bytes) or (name, bytes) for plain fields."""
    boundary = "----muse-deploy-boundary-7d9f2c"
    body = bytearray()
    for f in fields:
        body += f"--{boundary}\r\n".encode()
        if len(f) == 2:
            name, data = f
            body += f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode()
            body += data if isinstance(data, bytes) else data.encode()
        else:
            name, filename, ctype, data = f
            body += (f'Content-Disposition: form-data; name="{name}"; filename="{filename}"\r\n').encode()
            body += f"Content-Type: {ctype}\r\n\r\n".encode()
            body += data
        body += b"\r\n"
    body += f"--{boundary}--\r\n".encode()
    return bytes(body), f"multipart/form-data; boundary={boundary}"


def main():
    # Always stamp a tiny version file so the upload session has at least one
    # changed file; otherwise no completion JWT is issued and the worker
    # script itself can never be updated on asset-unchanged deploys (2026-09-20).
    import datetime
    with open(os.path.join(SITE_DIR, "deploy-stamp.txt"), "w") as f:
        f.write("deployed " + datetime.datetime.now(datetime.timezone.utc).isoformat() + "\n")
    files = collect_files()
    print(f"Collected {len(files)} files")
    manifest = {}
    by_hash = {}
    for path, full in files.items():
        with open(full, "rb") as f:
            data = f.read()
        h = asset_hash(data, full)
        manifest[path] = {"hash": h, "size": len(data)}
        by_hash[h] = (path, full, data)

    print("Creating assets upload session...")
    res = api_request(
        f"{BASE}/workers/scripts/{SCRIPT_NAME}/assets-upload-session",
        data=json.dumps({"manifest": manifest}).encode(),
        method="POST",
        content_type="application/json",
    )
    if not res.get("success"):
        print("Session failed:", json.dumps(res.get("errors"))[:500])
        sys.exit(1)
    result = res["result"]
    jwt = result["jwt"]
    buckets = result.get("buckets") or []
    needed = [h for b in buckets for h in b]
    print(f"Session created; {len(needed)} files need uploading")

    completion_jwt = None
    for i, bucket in enumerate(buckets):
        fields = []
        for h in bucket:
            path, full, data = by_hash[h]
            ctype = mimetypes.guess_type(full)[0] or "application/octet-stream"
            if full.endswith(".js"):
                ctype = "application/javascript"
            fields.append((h, h, ctype, base64.b64encode(data)))
        body, ctype = encode_multipart(fields)
        res = api_request(
            f"{BASE}/workers/assets/upload?base64=true",
            data=body, method="POST", content_type=ctype, auth_bearer=jwt,
        )
        if res.get("result", {}).get("jwt"):
            completion_jwt = res["result"]["jwt"]
        print(f"  bucket {i + 1}/{len(buckets)} uploaded ({len(bucket)} files)")

    if not completion_jwt:
        print("Upload finished without a completion JWT; aborting deploy.")
        sys.exit(1)

    print("Deploying worker with assets...")
    metadata = {
        "main_module": "worker.js",
        "compatibility_date": "2026-09-18",
        "assets": {
            "jwt": completion_jwt,
            "config": {
                "html_handling": "auto-trailing-slash",
                "not_found_handling": "none",
            },
        },
    }
    fields = [
        ("metadata", json.dumps(metadata).encode()),
        ("worker.js", "worker.js", "application/javascript+module", WORKER_JS.encode()),
    ]
    body, ctype = encode_multipart(fields)
    res = api_request(
        f"{BASE}/workers/scripts/{SCRIPT_NAME}",
        data=body, method="PUT", content_type=ctype,
    )
    print("Deploy result:", res.get("success"))
    if not res.get("success"):
        print(json.dumps(res.get("errors"))[:800])
    else:
        print(json.dumps(res.get("result"), indent=1)[:600])


if __name__ == "__main__":
    main()
