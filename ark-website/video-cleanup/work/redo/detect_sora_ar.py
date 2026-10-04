#!/usr/bin/env python3
"""Aspect-preserving Sora icon detection for 1080x1602 videos.
Scales to 720 wide (uniform), matches template, reports NATIVE coords (x1.5).
Usage: detect_sora_ar.py <video> [step_seconds] [threshold] [outfile]"""
import cv2, sys, subprocess, numpy as np

CV = "/home/hatch/workspace/.venv-cv/bin/python3"
TPL = "/home/hatch/workspace/ark-website/video-cleanup/work/redo/sweep/sora_icon_tpl.png"
SCALE = 1.5  # native = detected * 1.5

def main():
    video = sys.argv[1]
    step = float(sys.argv[2]) if len(sys.argv) > 2 else 2.0
    thresh = float(sys.argv[3]) if len(sys.argv) > 3 else 0.75
    out = open(sys.argv[4], "w") if len(sys.argv) > 4 else sys.stdout
    tpl = cv2.imread(TPL, cv2.IMREAD_GRAYSCALE)
    th, tw = tpl.shape

    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", video], capture_output=True, text=True)
    dur = float(r.stdout.strip())

    total = 0
    t = 0.5
    while t < dur:
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{t:.1f}", "-i", video,
            "-frames:v", "1", "-vf", "scale=720:-2,format=gray",
            "-f", "rawvideo", "-pix_fmt", "gray", "-"],
            capture_output=True)
        # 720 x 1068
        if len(r.stdout) == 720 * 1068:
            img = np.frombuffer(r.stdout, dtype=np.uint8).reshape(1068, 720)
            res = cv2.matchTemplate(img, tpl, cv2.TM_CCOEFF_NORMED)
            loc = np.where(res >= thresh)
            scored = sorted([(int(x), int(y), float(res[y, x]))
                             for y, x in zip(loc[0], loc[1])], key=lambda s: -s[2])
            kept = []
            for x, y, s in scored:
                if all(abs(x - kx) > 40 or abs(y - ky) > 40 for kx, ky, _ in kept):
                    kept.append((x, y, s))
            for x, y, s in kept:
                nx, ny = int(x * SCALE), int(y * SCALE)
                out.write(f"{t:6.1f}s  native@({nx:4d},{ny:4d})  score={s:.3f}\n")
                total += 1
        t += step
    out.write(f"\n{total} detections\n")
    if out is not sys.stdout:
        out.close()

if __name__ == "__main__":
    main()
