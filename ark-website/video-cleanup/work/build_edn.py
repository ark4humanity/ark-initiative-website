#!/usr/bin/env python3
"""Rebuild edn-ecological-distribution-reel.mp4 with crop+blur+overlay. Persistent copy."""
import subprocess, os
SRC = "/home/hatch/workspace/ark-website/video-cleanup/originals/edn-ecological-distribution-reel.mp4"
OUTDIR = "/home/hatch/workspace/ark-website/video-cleanup/cleaned"
TMPV = "/home/hatch/workspace/ark-website/video-cleanup/work/edn_vid.mp4"
FINAL = os.path.join(OUTDIR, "edn-ecological-distribution-reel.mp4")
LIMIT = 26214400

# (x,y,w,h, [(start,end),...]) - 720x1280 native, objectively measured 2026-09-26
BOXES = [
    (55, 41, 205, 92,   [(78.5,81.5),(114.5,119.5),(138.5,143.5),(162.5,167.5)]),   # TL
    (435, 45, 232, 96,  [(6.5,9.5),(20.5,25.5),(32.5,35.5),(66.5,71.5),(108.5,111.5),(128.5,131.5)]),  # TR
    (48, 598, 225, 115, [(2.5,7.5),(24.5,29.5),(34.5,39.5),(58.5,61.5),(70.5,73.5),(112.5,115.5),(124.5,129.5)]),  # ML
    (433, 598, 232, 110,[(46.5,49.5),(82.5,85.5),(90.5,93.5),(118.5,121.5),(134.5,139.5),(142.5,145.5),(166.5,169.2)]),  # MR
    (48, 1118, 225, 110,[(42.5,47.5),(84.5,87.5),(130.5,135.5)]),  # BL
    (405, 1092, 235, 88,[(0.5,3.5),(54.5,59.5),(120.5,125.5)]),    # BR
]
BLUR = "boxblur=luma_radius=20:luma_power=2:chroma_radius=3:chroma_power=1"

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

# crf=20 gave 39.4MB, crf=23 gave 31.5MB; need < 26.21MB
for crf in (25, 27, 29):
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
