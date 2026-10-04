#!/usr/bin/env python3
"""Detect Sora cloud-icon watermarks in a video via template matching.
Usage: python3 detect_sora.py <video> [step_seconds] [threshold]
Outputs: list of (t, x, y, score) detections."""
import cv2, sys, subprocess, os, numpy as np

TPL = "/home/hatch/workspace/ark-website/video-cleanup/work/redo/sweep/sora_icon_tpl.png"

def main():
    video = sys.argv[1]
    step = float(sys.argv[2]) if len(sys.argv) > 2 else 1.0
    thresh = float(sys.argv[3]) if len(sys.argv) > 3 else 0.65
    tpl = cv2.imread(TPL, cv2.IMREAD_GRAYSCALE)
    th, tw = tpl.shape

    # get duration
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", video], capture_output=True, text=True)
    dur = float(r.stdout.strip())

    detections = []
    t = 0.5
    while t < dur:
        # extract frame as raw gray via ffmpeg
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", str(t), "-i", video,
            "-frames:v", "1", "-vf", "scale=720:1280,format=gray",
            "-f", "rawvideo", "-pix_fmt", "gray", "-"],
            capture_output=True)
        if len(r.stdout) == 720 * 1280:
            img = np.frombuffer(r.stdout, dtype=np.uint8).reshape(1280, 720)
            res = cv2.matchTemplate(img, tpl, cv2.TM_CCOEFF_NORMED)
            # find peaks
            loc = np.where(res >= thresh)
            pts = list(zip(loc[1], loc[0]))  # (x,y)
            # non-max suppression: keep best in 30px radius
            scored = [(x, y, res[y, x]) for x, y in pts]
            scored.sort(key=lambda s: -s[2])
            kept = []
            for x, y, s in scored:
                if all(abs(x - kx) > 30 or abs(y - ky) > 30 for kx, ky, _ in kept):
                    kept.append((x, y, s))
            for x, y, s in kept:
                detections.append((round(t, 1), int(x), int(y), round(float(s), 3)))
        t += step

    for d in detections:
        print(f"{d[0]:6.1f}s  icon@({d[1]:3d},{d[2]:4d})  score={d[3]}")
    print(f"\n{len(detections)} detections")

if __name__ == "__main__":
    main()
