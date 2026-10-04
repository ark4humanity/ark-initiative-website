import json, os
SITE = "/home/hatch/workspace/ark-website"
keep = json.load(open(f"{SITE}/phase2/gallery_dl.json"))
d = f"{SITE}/img/g"
have = set(os.listdir(d)) if os.path.exists(d) else set()
n = 0
for i, e in enumerate(keep):
    ext = os.path.splitext(e["path"].split("/")[-1])[1].lower() or ".jpg"
    if ext not in (".jpg",".jpeg",".png",".webp",".gif"): ext = ".jpg"
    name = f"g{i:04d}{ext}"
    if name in have:
        e["local"] = f"img/g/{name}"; n += 1
    else:
        e.pop("local", None)
json.dump(keep, open(f"{SITE}/phase2/gallery_dl.json","w"))
print(f"{n}/{len(keep)} have local files")
