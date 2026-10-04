import json, subprocess, os, re, sys
rest = json.load(open("/home/hatch/workspace/ark-website/phase2/support_videos.json"))
d = "/home/hatch/workspace/ark-website/phase2/svids"
os.makedirs(d, exist_ok=True)
lo, hi = int(sys.argv[1]), int(sys.argv[2])
have = set(os.listdir(d))
ok = 0
for i in range(lo, hi):
    e = rest[i]
    safe = re.sub(r'[^\w\-.,() ]', '_', e["path"].split("/")[-1])[:60]
    dest = f"{d}/{i:03d}_{safe}.mp4"
    base = os.path.basename(dest)
    if base in have:
        ok += 1; continue
    r = subprocess.run(["hatch_gws_cli","drive","files","get","--params",
        json.dumps({"fileId":e["id"],"alt":"media"}),"--output",dest],
        capture_output=True, text=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 0: ok += 1
print(f"sv worker {lo}-{hi}: {ok}/{hi-lo}")
