#!/usr/bin/env python3
"""Build 13WntK and 1awj0Q (visually identical videos, same filter map).
1080x1602 native. Downscale to 540x801 for size. Blur boxes at native res.
Usage: build_13WntK.py [13WntK|1awj0Q]"""
import subprocess, os, sys

BASE = "/home/hatch/workspace/ark-website/video-cleanup"
WHICH = sys.argv[1] if len(sys.argv) > 1 else "13WntK"
IDS = {
    "13WntK": "13WntKh00Fn7OOfQOCHPfvtN3wak6QZ8n",
    "1awj0Q": "1awj0Q9-5ONN8Ue1Wn0vd-hvyrsGKqfnq",
}
FID = IDS[WHICH]
SRC = os.path.join(BASE, f"originals/{FID}.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, f"work/redo/{WHICH}_vid.mp4")
FINAL = os.path.join(OUTDIR, f"{FID}.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 1080x1602 native coords
BOXES = [
    (810, 60, 240, 80, [(0, 338.3)]),  # UpScrolled TR - PERSISTENT
    (60, 20, 400, 190, [(21, 27), (173, 177), (204, 211), (236.5, 243.5), (247, 251)]),  # Sora TL
    (605, 55, 250, 105, [(12.5, 16.5)]),  # Sora TR
    (60, 1390, 400, 190, [(28, 34), (166.5, 171), (211.5, 216.5), (245, 247), (254, 257)]),  # Sora BL
    (680, 1460, 380, 115, [(0, 13), (19.5, 22.5), (196, 201), (289, 304)]),  # Sora BR (faint+bright)
]
BLUR = "boxblur=luma_radius=16:luma_power=2:chroma_radius=4:chroma_power=1"

n = len(BOXES)
parts = ["[0:v]split=" + str(n) + "".join(f"[s{i}]" for i in range(n))]
for i, (x, y, w, h, wins) in enumerate(BOXES):
    parts.append(f"[s{i}]crop={w}:{h}:{x}:{y},{BLUR}[b{i}]")
prev = "[0:v]"
for i, (x, y, w, h, wins) in enumerate(BOXES):
    en = "+".join(f"between(t,{s},{e})" for s, e in wins)
    out = "[mout]" if i == n - 1 else f"[m{i}]"
    parts.append(f"{prev}[b{i}]overlay={x}:{y}:enable='{en}'{out}")
    prev = f"[m{i}]"
parts.append("[mout]scale=540:800[outv]")
fc = ";".join(parts)

for crf in (30, 32, 34):
    print(f"{WHICH}: starting crf={crf}", flush=True)
    r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", SRC, "-filter_complex", fc,
        "-map", "[outv]", "-c:v", "libx264", "-crf", str(crf), "-preset", "medium",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", TMPV], capture_output=True, text=True)
    if r.returncode != 0:
        print("ENCODE FAIL", r.stderr[-1500:]); break
    r2 = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", TMPV, "-i", SRC,
        "-map", "0:v", "-map", "1:a?", "-c", "copy", "-movflags", "+faststart", FINAL],
        capture_output=True, text=True)
    if r2.returncode != 0:
        print("REMUX FAIL", r2.stderr[-1500:]); break
    sz = os.path.getsize(FINAL)
    print(f"{WHICH}: crf={crf} size={sz} under={sz < LIMIT}", flush=True)
    if sz < LIMIT:
        break
print("FINAL", FINAL, os.path.getsize(FINAL))
