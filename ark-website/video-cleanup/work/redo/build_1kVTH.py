#!/usr/bin/env python3
"""Rebuild 1kVTHfTi1TJpo83QKG2YKIHxEBclhqpDn.mp4 with crop+blur+overlay. Redo 2026-09-26."""
import subprocess, os
BASE = "/home/hatch/workspace/ark-website/video-cleanup"
SRC = os.path.join(BASE, "originals/1kVTHfTi1TJpo83QKG2YKIHxEBclhqpDn.mp4")
OUTDIR = os.path.join(BASE, "cleaned")
TMPV = os.path.join(BASE, "work/redo/1kVTH_vid.mp4")
FINAL = os.path.join(OUTDIR, "1kVTHfTi1TJpo83QKG2YKIHxEBclhqpDn.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 704x1280 native, boxes from visual grounding 2026-09-26
BOXES = [
    (55, 58, 225, 55,   [(0.3, 3.7)]),              # TL Sora mark (tight: ASHERAH title below)
    (425, 548, 245, 140,  [(3.7, 4.9)]),             # MR VAGUS scene (full mark extent)
    (430, 580, 225, 105, [(4.9, 5.6), (5.9, 7.6)]), # BR t=5,7 + MR t=6
    (50, 1160, 225, 105, [(7.9, 10.1)]),            # BL t=8,9 (full mark extent)
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
