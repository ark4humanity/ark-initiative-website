#!/bin/bash
cd ~/workspace/ark-website/r2-staging
IDS=/home/hatch/workspace/ark-website/r2-staging/ids.txt
LOG=/home/hatch/workspace/ark-website/r2-staging/download.log
python3 - "$IDS" << 'PYEOF' >> "$LOG" 2>&1
import json, subprocess, os, sys
ids = open(sys.argv[1]).read().split()
expected = {}
for fid in ids:
    out = subprocess.run(["hatch_gws_cli","drive","files","get","--params",
                          json.dumps({"fileId":fid,"fields":"size"})],
                         capture_output=True, text=True, timeout=60).stdout
    try: expected[fid] = int(json.loads(out).get("size",0))
    except Exception: expected[fid] = 0
ok, fail, skipped = 0, [], 0
for fid in ids:
    out = f"{fid}.mp4"
    if os.path.exists(out) and expected.get(fid,0) and abs(os.path.getsize(out)-expected[fid]) < 1024:
        skipped += 1; continue
    subprocess.run(["hatch_gws_cli","drive","files","get","--params",
                    json.dumps({"fileId":fid,"alt":"media"}),"--output",out],
                   capture_output=True, text=True, timeout=1800)
    if os.path.exists(out) and expected.get(fid,0) and abs(os.path.getsize(out)-expected[fid]) < 1024:
        ok += 1; print(f"OK {fid} {os.path.getsize(out)/1e6:.1f}MB", flush=True)
    else:
        fail.append(fid); print(f"FAIL {fid}", flush=True)
print(f"DONE ok={ok} skipped={skipped} fail={fail}", flush=True)
PYEOF
