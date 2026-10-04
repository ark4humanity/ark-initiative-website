#!/usr/bin/env python3
"""Rebuild moosh-film.mp4 with crop+blur+overlay watermark removal. Persistent copy."""
import subprocess, os
SRC = "/home/hatch/workspace/ark-website/video-cleanup/originals/moosh-film.mp4"
OUTDIR = "/home/hatch/workspace/ark-website/video-cleanup/cleaned"
TMPV = "/home/hatch/workspace/ark-website/video-cleanup/work/moosh_vid.mp4"
FINAL = os.path.join(OUTDIR, "moosh-film.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - all coords even for yuv420p boxblur
# Boxes widened after dense drift analysis (marks move within windows).
# BL window [7.5,10.5] added after rescan found marks at t=8,9,10 missed in 1s scan.
BOXES = [
    (18, 12, 128, 52,  [(0,3.75),(30.25,34.75)]),                    # top-left
    (232, 284, 128, 88,[(3,7.75),(34.25,35.75),(36.25,37.75)]),     # mid-right (drifts down to y~366)
    (212, 516, 148, 120,[(9.75,14.25),(19.75,24.25)]),              # bottom-right (drifts down to y~630)
    (20, 292, 126, 60, [(13.75,17.75),(24.25,27.75)]),              # mid-left
    (214, 14, 146, 52, [(17.25,20.75),(27.25,30.75)]),              # top-right (logo to x~355)
    (14, 540, 140, 100,[(7.5,10.5),(37.25,40.75)]),                 # bottom-left
]
BLUR = "boxblur=luma_radius=12:luma_power=2:chroma_radius=3:chroma_power=1"

n = len(BOXES)
parts = [f"[0:v]split={n}" + "".join(f"[s{i}]" for i in range(n))]
for i,(x,y,w,h,wins) in enumerate(BOXES):
    parts.append(f"[s{i}]crop={w}:{h}:{x}:{y},{BLUR}[b{i}]")
prev = "[0:v]"
for i,(x,y,w,h,wins) in enumerate(BOXES):
    en = "+".join(f"between(t,{s},{e})" for s,e in wins)
    out = "[outv]" if i == n-1 else f"[m{i}]"
    parts.append(f"{prev}[b{i}]overlay={x}:{y}:enable='{en}'{out}")
    prev = f"[m{i}]"
fc = ";".join(parts)

for crf in (20, 23, 26):
    r = subprocess.run(["ffmpeg","-y","-v","error","-i",SRC,"-filter_complex",fc,
        "-map","[outv]","-c:v","libx264","-crf",str(crf),"-preset","medium",
        "-pix_fmt","yuv420p","-movflags","+faststart",TMPV], capture_output=True, text=True)
    if r.returncode != 0:
        print("ENCODE FAIL", r.stderr[-1500:]); break
    r2 = subprocess.run(["ffmpeg","-y","-v","error","-i",TMPV,"-i",SRC,
        "-map","0:v","-map","1:a?","-c","copy","-movflags","+faststart",FINAL],
        capture_output=True, text=True)
    if r2.returncode != 0:
        print("REMUX FAIL", r2.stderr[-1500:]); break
    sz = os.path.getsize(FINAL)
    print(f"crf={crf} size={sz} under={sz<LIMIT}", flush=True)
    if sz < LIMIT: break
print("FINAL", FINAL, os.path.getsize(FINAL))
