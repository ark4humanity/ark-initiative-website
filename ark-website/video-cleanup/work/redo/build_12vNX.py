#!/usr/bin/env python3
"""Rebuild 12vNXnGRLPlAFGJViUymkti7TLjO0VnwZ.mp4 with crop+blur+overlay. Redo 2026-09-26."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/12vNXnGRLPlAFGJViUymkti7TLjO0VnwZ.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, "work/redo/12vNX_vid.mp4")
FINAL = os.path.join(OUTDIR, "12vNXnGRLPlAFGJViUymkti7TLjO0VnwZ.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 720x1280 native, boxes from visual grounding + 1s survey 2026-09-26
BOXES = [
    (432, 1148, 258, 90,  [(3.5, 6.8)]),    # BR mask/escalator scenes
    (30, 605, 260, 150,   [(6.8, 7.8)]),    # ML mask-side scene
    (40, 594, 250, 100,   [(7.8, 11.0)]),   # M aerial + garden scenes
    (435, 25, 230, 105,   [(10.8, 12.8)]),  # TR blue card
    (52, 1158, 210, 100,  [(13.5, 16.8)]),  # BL woman/pole scenes
    (390, 600, 180, 110,  [(16.8, 17.8)]),  # MR leaf scene, mark at (400-560,610-690)
    (350, 660, 220, 110,  [(17.8, 18.8)]),  # MR man-field, mark drifts down (360-560,670-750)
    (380, 720, 190, 100,  [(18.8, 20.8)]),  # MR picnic, mark at (390-560,730-810)
    (58, 45, 200, 82,     [(20.8, 23.5)]),  # TL dark card
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
    r3 = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", FINAL], capture_output=True, text=True)
    sz = os.path.getsize(FINAL)
    ok = r3.returncode == 0 and r3.stdout.strip() != ""
    print(f"crf={crf} size={sz} under={sz < LIMIT} playable={ok}", flush=True)
    if sz < LIMIT and ok:
        break
print("FINAL", FINAL, os.path.getsize(FINAL))
