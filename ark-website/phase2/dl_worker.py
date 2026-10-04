import json, subprocess, os, re, sys
fr = json.load(open("/home/hatch/workspace/ark-website/phase2/fr_videos.json"))
d = "/home/hatch/workspace/ark-website/phase2/frvids"
lo, hi = int(sys.argv[1]), int(sys.argv[2])
have = set(os.listdir(d))
ok = 0
for i in range(lo, hi):
    e = fr[i]
    safe = re.sub(r'[^\w\-.,() ]', '_', e["path"].split("/")[-1])[:70]
    dest = f"{d}/{i:02d}_{safe}.mp4"
    base = os.path.basename(dest)
    if base in have or base[:-4] in have:
        ok += 1; continue
    r = subprocess.run(["hatch_gws_cli","drive","files","get","--params",
        json.dumps({"fileId":e["id"],"alt":"media"}),"--output",dest],
        capture_output=True, text=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 0: ok += 1
print(f"worker {lo}-{hi}: {ok}/{hi-lo}")
