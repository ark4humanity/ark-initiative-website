#!/usr/bin/env python3
"""Rebuild 1nZekZwReKmrdPjwviTOH4bKKOXayY5Hl.mp4 with crop+blur+overlay. Redo 2026-09-26.
From template-matcher detections (0.80 thresh, 49 hits, 2s sampling)."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1nZekZwReKmrdPjwviTOH4bKKOXayY5Hl.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, "work/redo/1nZekZ_vid.mp4")
FINAL = os.path.join(OUTDIR, "1nZekZwReKmrdPjwviTOH4bKKOXayY5Hl.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 720x1280 native
BOXES = [
    (30, 15, 220, 95, [  # TL
        (13.5, 15.5), (29.5, 31.5), (47.5, 49.5), (71.5, 73.5),
        (101.5, 107.5), (133.5, 137.5)]),
    (420, 15, 250, 95, [  # TR
        (61.5, 65.5), (125.5, 129.5)]),
    (30, 580, 220, 110, [  # ML
        (53.5, 57.5), (65.5, 69.5), (85.5, 89.5), (97.5, 101.5),
        (117.5, 121.5), (129.5, 133.5)]),
    (420, 580, 250, 110, [  # MR
        (19.5, 23.5), (33.5, 37.5), (43.5, 47.5), (75.5, 79.5),
        (107.5, 109.5), (137.5, 141.5)]),
    (30, 1140, 220, 110, [  # BL
        (15.5, 19.5), (39.5, 43.5), (59.5, 61.5), (79.5, 81.5)]),
    (420, 1140, 250, 110, [  # BR
        (27.5, 29.5), (51.5, 53.5), (69.5, 71.5), (93.5, 97.5), (123.5, 125.5)]),
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
