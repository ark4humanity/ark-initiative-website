#!/usr/bin/env python3
"""BR-only scan with bright icon template. Catches bright BR Sora marks.
Usage: br_scan.py <video> <outfile>"""
import cv2, sys, subprocess, numpy as np

BASE = "/home/hatch/workspace/ark-website/video-cleanup/work/redo/sweep"
TPL = cv2.imread(f"{BASE}/sora_icon_13WntK.png", cv2.IMREAD_GRAYSCALE)

def main():
    video, outp = sys.argv[1], sys.argv[2]
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", video], capture_output=True, text=True)
    dur = float(r.stdout.strip())
    out = open(outp, "w")
    out.write("t,br_icon\n")
    t = 0.5
    while t < dur:
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{t:.1f}",
            "-i", video, "-frames:v", "1", "-vf", "crop=360:200:680:1400,format=gray",
            "-f", "rawvideo", "-pix_fmt", "gray", "-"], capture_output=True)
        if len(r.stdout) == 360 * 200:
            img = np.frombuffer(r.stdout, dtype=np.uint8).reshape(200, 360)
            res = cv2.matchTemplate(img, TPL, cv2.TM_CCOEFF_NORMED)
            out.write(f"{t:.1f},{res.max():.3f}\n")
        else:
            out.write(f"{t:.1f},0.000\n")
        out.flush()
        t += 1.0
    out.close()
    print("done", outp)

if __name__ == "__main__":
    main()
