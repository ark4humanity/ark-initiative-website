#!/usr/bin/env python3
"""Rebuild bodies for all thin/empty essays from their source markdown."""
import os, re, html as hlib, json, glob, difflib
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rebuild_canon import md_to_html
import publish_staging as ps

SITE = os.path.dirname(os.path.abspath(__file__))
MD = os.path.join(SITE, "phase2/md")
idx = json.load(open(os.path.join(SITE, "phase2/md/index.json")))

def drive_title(path):
    n = path.split("/")[-1]
    n = os.path.splitext(n)[0]
    n = re.sub(r"\s*\(?(19|20)\d\d[-/]\d\d[-/]\d\d\)?\s*$", "", n).strip()
    return n

def local_md_for(drive_path):
    # find index entry, then local file
    for e in idx:
        if e["path"] == drive_path:
            fid = e["id"]
            for f in glob.glob(os.path.join(MD, fid + "*")):
                return f
    return None

thin = []
for f in glob.glob(os.path.join(SITE, "essays/*.html")):
    t = open(f, encoding="utf-8").read()
    m = re.search(r'<article class="prose">(.*?)</article>', t, re.S)
    if not m: continue
    text = re.sub(r"<[^>]+>", "", m.group(1)).strip()
    # subtract the archive-note boilerplate
    text2 = re.sub(r"Archive context\.\s*Recovered from Dawn.s Facebook timeline and preserved verbatim\.", "", text).strip()
    if len(text2) < 200:
        h1 = re.search(r"<h1>(.*?)</h1>", t, re.S)
        title = hlib.unescape(h1.group(1)) if h1 else "?"
        thin.append((f, title, m.group(1)))

print(len(thin), "thin essays to rebuild")
# build candidate list of drive titles
cands = [(drive_title(e["path"]), e["path"]) for e in idx]

fixed, missing = 0, []
for f, title, old_inner in thin:
    # fuzzy match title to drive filename
    best, bestr = None, 0
    for dt, dp in cands:
        r = difflib.SequenceMatcher(None, title.lower(), dt.lower()).ratio()
        if r > bestr:
            best, bestr = (dt, dp), r
    if bestr < 0.45:
        missing.append((os.path.basename(f), title, round(bestr, 2)))
        continue
    mf = local_md_for(best[1])
    if not mf:
        missing.append((os.path.basename(f), title, "no local md"))
        continue
    md = open(mf, encoding="utf-8", errors="ignore").read()
    body = md_to_html(md)
    if len(body) < 200:
        missing.append((os.path.basename(f), title, "md too short"))
        continue
    t = open(f, encoding="utf-8").read()
    # preserve the archive-note ctx div, append body after it
    new_inner = old_inner.rstrip() + "\n" + body + "\n" if old_inner.strip() else body
    t = t.replace('<article class="prose">' + old_inner + '</article>',
                  '<article class="prose">' + new_inner + '</article>', 1)
    open(f, "w", encoding="utf-8").write(t)
    fixed += 1

print(f"fixed {fixed}, missing {len(missing)}")
for m in missing: print("  MISSING:", m)
ps.step_seals()
ps.step_gate1()
print("THIN REBUILD COMPLETE")
