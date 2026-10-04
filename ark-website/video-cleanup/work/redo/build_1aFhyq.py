#!/usr/bin/env python3
"""Rebuild 1aFhyq8LcrlHMV9JKa5UpCky4tuiXiu9g.mp4 with crop+blur+overlay. Redo 2026-09-26."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1aFhyq8LcrlHMV9JKa5UpCky4tuiXiu9g.mp4")
TMPV = os.path.join(BASE, "work/redo/1aFhyq_vid.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 720x1280 native, TL Sora mark, windows from 1s boundary survey 2026-09-26
BOXES = [
    (30, 15, 220, 95, [(124.3, 129.0), (138.2, 141.8)]),  # TL Sora watermark
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
        "-map", "0:v", "-map", "1:a?", "-c", "copy", "-movflags", "+faststart", TMPV + ".mux.mp4"],
        capture_output=True, text=True)
    if r2.returncode != 0:
        print("REMUX FAIL", r2.stderr[-1500:]); break
    os.replace(TMPV + ".mux.mp4", TMPV)
    r3 = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", TMPV], capture_output=True, text=True)
    sz = os.path.getsize(TMPV)
    ok = r3.returncode == 0 and r3.stdout.strip() != ""
    print(f"crf={crf} size={sz} under={sz < LIMIT} playable={ok}", flush=True)
    if sz < LIMIT and ok:
        break
print("FINAL", TMPV, os.path.getsize(TMPV))
