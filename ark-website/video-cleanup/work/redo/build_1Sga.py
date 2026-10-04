#!/usr/bin/env python3
"""Rebuild 1Sga-8v8rwPhyGSdYjJNGgwZ3KDhpDPWy.mp4 with crop+blur+overlay. Redo v2 2026-09-26.
v2: complete rebuild from template-matcher detections (0.80 thresh, 66 hits).
Boxes corrected: MR was at x=370 (wrong), now x=420; all positions from detector."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1Sga-8v8rwPhyGSdYjJNGgwZ3KDhpDPWy.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, "work/redo/1Sga_vid.mp4")
FINAL = os.path.join(OUTDIR, "1Sga-8v8rwPhyGSdYjJNGgwZ3KDhpDPWy.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 720x1280 native, from detector icon positions
# Icon at (ix,iy); full mark = icon + "Sora" text (left) + handle (below)
BOXES = [
    (30, 15, 220, 95, [  # TL - icon@(63,55)
        (8.0, 11.0), (48.0, 52.0), (54.0, 58.0), (61.0, 64.0), (106.0, 110.0), (119.0, 123.0)]),
    (420, 15, 250, 95, [  # TR - icon@(602,55)
        (19.0, 20.0), (81.0, 82.0), (113.0, 116.0), (133.0, 134.0)]),
    (30, 580, 220, 110, [  # ML - icon@(63,618)
        (78.0, 80.0), (104.0, 106.0), (117.0, 118.0), (129.0, 132.0)]),
    (420, 580, 250, 110, [  # MR - icon@(602,618)
        (52.0, 54.0), (58.0, 61.0), (71.0, 74.0), (110.0, 113.0), (123.0, 126.0)]),
    (30, 1140, 220, 110, [  # BL - icon@(63,1182)
        (17.0, 19.0), (68.0, 71.0), (93.0, 95.0)]),
    (420, 1140, 250, 110, [  # BR - icon@(602,1182)
        (16.0, 17.0), (74.0, 78.0), (100.0, 104.0), (126.0, 129.0)]),
    (340, 1060, 60, 40, [(118.8, 119.3)]),  # green UI artifact
]
BLUR = "boxblur=luma_radius=14:luma_power=2:chroma_radius=3:chroma_power=1"

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

for crf in (20, 23, 26, 28):
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
    r3 = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", FINAL], capture_output=True, text=True)
    sz = os.path.getsize(FINAL)
    ok = r3.returncode == 0 and r3.stdout.strip() != ""
    print(f"crf={crf} size={sz} under={sz < LIMIT} playable={ok}", flush=True)
    if sz < LIMIT and ok:
        break
print("FINAL", FINAL, os.path.getsize(FINAL))
