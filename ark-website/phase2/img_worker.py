import json, subprocess, os, sys
keep = json.load(open("/home/hatch/workspace/ark-website/phase2/gallery_dl.json"))
d = "/home/hatch/workspace/ark-website/img/g"
os.makedirs(d, exist_ok=True)
lo, hi = int(sys.argv[1]), int(sys.argv[2])
have = set(os.listdir(d))
ok = 0
for i in range(lo, hi):
    e = keep[i]
    ext = os.path.splitext(e["path"].split("/")[-1])[1].lower() or ".jpg"
    if ext not in (".jpg",".jpeg",".png",".webp",".gif"): ext = ".jpg"
    dest = f"{d}/g{i:04d}{ext}"
    e["local"] = f"img/g/g{i:04d}{ext}"
    if os.path.basename(dest) in have:
        ok += 1; continue
    r = subprocess.run(["hatch_gws_cli","drive","files","get","--params",
        json.dumps({"fileId":e["id"],"alt":"media"}),"--output",dest],
        capture_output=True, text=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 0: ok += 1
json.dump(keep, open("/home/hatch/workspace/ark-website/phase2/gallery_dl.json","w"))
print(f"img worker {lo}-{hi}: {ok}/{hi-lo}")
