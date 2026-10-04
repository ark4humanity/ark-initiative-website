#!/usr/bin/env python3
"""Rebuild 1mM-8j (retry). Prior run died mid-CRF26. Jump to CRF 28/30."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1mM-8jJKeJ5zpzUCi6Wm2MZJkEUuWrHHq.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, "work/redo/1mM8j_vid2.mp4")
FINAL = os.path.join(OUTDIR, "1mM-8jJKeJ5zpzUCi6Wm2MZJkEUuWrHHq.mp4")
LIMIT = 26214400

BOXES = [
    (740, 120, 280, 90, [(0, 282.3)]),
    (30, 110, 270, 110, [(143.5, 145.5)]),
    (70, 790, 240, 180, [(149.5, 153.5), (159.5, 163.5), (169.0, 171.0)]),
    (70, 1470, 240, 180, [(137.5, 141.5)]),
    (750, 1470, 260, 180, [(145.5, 149.5), (163.5, 169.5)]),
]
BLUR = "boxblur=luma_radius=16:luma_power=2:chroma_radius=4:chroma_power=1"

n = len(BOXES)
parts = ["[0:v]split=" + str(n) + "".join(f"[s{i}]" for i in range(n))]
for i, (x, y, w, h, wins) in enumerate(BOXES):
    parts.append(f"[s{i}]crop={w}:{h}:{x}:{y},{BLUR}[b{i}]")
prev = "[0:v]"
for i, (x, y, w, h, wins) in enumerate(BOXES):
    en = "+".join(f"between(t,{s},{e})" for s, e in wins)
    out = "[outv]" if i == n - 1 else f"[m{i}]"
    parts.append(f"{prev}[b{i}]overlay={x}:{y}:enable='{en}'{out}")
    prev = f"[m{i}]"
fc = ";".join(parts)

for crf in (28, 30):
    print(f"starting crf={crf}", flush=True)
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
    print(f"crf={crf} size={sz} under={sz < LIMIT}", flush=True)
    if sz < LIMIT:
        break
print("FINAL", FINAL, os.path.getsize(FINAL))
