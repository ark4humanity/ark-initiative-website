#!/usr/bin/env python3
"""Per-region Sora mark scanner. For each 1s timestamp, records max template
score in TL/TR/BL/BR regions. Output: t, tl, tr, bl, br scores (CSV).
Usage: region_scan.py <video> <outfile>"""
import cv2, sys, subprocess, numpy as np

BASE = "/home/hatch/workspace/ark-website/video-cleanup/work/redo/sweep"
TPL_ICON = cv2.imread(f"{BASE}/sora_icon_13WntK.png", cv2.IMREAD_GRAYSCALE)
TPL_BR = cv2.imread(f"{BASE}/sora_faint_BR.png", cv2.IMREAD_GRAYSCALE)

# (name, crop_filter, crop_w, crop_h, template)
REGIONS = [
    ("tl", "crop=360:220:60:20", 360, 220, TPL_ICON),
    ("tr", "crop=400:220:480:20", 400, 220, TPL_ICON),
    ("bl", "crop=360:220:60:1390", 360, 220, TPL_ICON),
    ("br", "crop=360:200:680:1400", 360, 200, TPL_BR),
]

def main():
    video, outp = sys.argv[1], sys.argv[2]
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", video], capture_output=True, text=True)
    dur = float(r.stdout.strip())
    out = open(outp, "w")
    out.write("t,tl,tr,bl,br\n")
    t = 0.5
    while t < dur:
        scores = []
        for name, crop, cw, ch, tpl in REGIONS:
            r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{t:.1f}",
                "-i", video, "-frames:v", "1", "-vf", f"{crop},format=gray",
                "-f", "rawvideo", "-pix_fmt", "gray", "-"], capture_output=True)
            if len(r.stdout) == cw * ch:
                img = np.frombuffer(r.stdout, dtype=np.uint8).reshape(ch, cw)
                res = cv2.matchTemplate(img, tpl, cv2.TM_CCOEFF_NORMED)
                scores.append(f"{res.max():.3f}")
            else:
                scores.append("0.000")
        out.write(f"{t:.1f}," + ",".join(scores) + "\n")
        out.flush()
        t += 1.0
    out.close()
    print("done", outp)

if __name__ == "__main__":
    main()
