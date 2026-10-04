#!/usr/bin/env python3
"""Rebuild 1RC-5aRt0SzcKdNoieQubG2ssnIbxKCDX.mp4 with crop+blur+overlay. Redo v4 2026-09-26.
v4: generous union boxes to cover drifting marks (they move 50-100px within windows)."""
import subprocess, os, shutil
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1RC-5aRt0SzcKdNoieQubG2ssnIbxKCDX.mp4")
TMPV = os.path.join(BASE, "work/redo/1RC_vid.mp4")
FINAL = os.path.join(BASE, "cleaned/1RC-5aRt0SzcKdNoieQubG2ssnIbxKCDX.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 704x1280 native, union boxes for drifting marks
BOXES = [
    (425, 50, 230, 110, [(0.15, 3.7)]),    # TR Sora, static
    (20, 570, 260, 135, [(3.8, 4.3)]),     # ML red scene, drifts up
    (45, 595, 305, 95, [(4.25, 4.85)]),    # ML flower scene, drifts left
    (45, 585, 235, 130, [(4.85, 7.8)]),    # ML ALIGNMENT scenes, drifts down
    (360, 1135, 290, 105, [(7.8, 10.1)]),  # BR earth scene, drifts right
]
BLUR = "boxblur=luma_radius=16:luma_power=2:chroma_radius=3:chroma_power=1"

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

for crf in (20, 23, 26):
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
    shutil.copyfile(FINAL, TMPV)
    r3 = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", FINAL], capture_output=True, text=True)
    sz = os.path.getsize(FINAL)
    ok = r3.returncode == 0 and r3.stdout.strip() != ""
    print(f"crf={crf} size={sz} under={sz < LIMIT} playable={ok}", flush=True)
    if sz < LIMIT and ok:
        break
print("FINAL", FINAL, os.path.getsize(FINAL))
