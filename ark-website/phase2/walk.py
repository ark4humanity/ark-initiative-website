import json, subprocess, sys
def ls(fid, tok=None):
    p = {"q": f"'{fid}' in parents and trashed=false", "pageSize": 1000,
         "fields": "nextPageToken,files(id,name,mimeType,size,md5Checksum,modifiedTime)"}
    if tok: p["pageToken"] = tok
    r = subprocess.run(["hatch_gws_cli","drive","files","list","--params",json.dumps(p)], capture_output=True, text=True)
    return json.loads(r.stdout)
def walk(fid, path, out):
    d = ls(fid); tok = d.get("nextPageToken"); fs = d.get("files", [])
    while tok:
        d = ls(fid, tok); tok = d.get("nextPageToken"); fs += d.get("files", [])
    for f in fs:
        p = path + "/" + f["name"]
        if f["mimeType"] == "application/vnd.google-apps.folder":
            if f["name"] != "05 - Compliance - Not Public":
                walk(f["id"], p, out)
        else:
            out.append({"id": f["id"], "path": p, "mime": f["mimeType"],
                        "size": int(f.get("size", 0)), "md5": f.get("md5Checksum"),
                        "modified": f.get("modifiedTime", "")})
def fid(name):
    r = subprocess.run(["hatch_gws_cli","drive","files","list","--params",
        json.dumps({"q":f"mimeType='application/vnd.google-apps.folder' and name='{name}' and trashed=false","pageSize":5,"fields":"files(id,name)"})],
        capture_output=True, text=True)
    return json.loads(r.stdout)["files"][0]["id"]
names = ["Ark Visual Library","Field Reports & Doctrine","Rule of the Ark"] + \
    ["Pillar %02d — %s" % (i,n) for i,n in [(1,"Aura Prime"),(2,"Halo"),(3,"Vagus"),(4,"Delta"),(5,"Asherah"),(6,"Matrix"),(7,"Aeon"),(8,"Exchange"),(9,"Vega"),(10,"Ark"),(11,"Terra"),(12,"Soma"),(13,"Symbiosis")]]
out = []
for n in names:
    walk(fid(n), n, out)
json.dump(out, open(sys.argv[1],"w"))
print("entries:", len(out))
