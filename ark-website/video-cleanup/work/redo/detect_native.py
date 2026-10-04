#!/usr/bin/env python3
"""Native-res Sora detection with video-specific 70x70 template.
Usage: detect_native.py <video> <template> [step] [thresh] [outfile]"""
import cv2, sys, subprocess, numpy as np

def main():
    video, tplp = sys.argv[1], sys.argv[2]
    step = float(sys.argv[3]) if len(sys.argv) > 3 else 2.0
    thresh = float(sys.argv[4]) if len(sys.argv) > 4 else 0.80
    out = open(sys.argv[5], "w") if len(sys.argv) > 5 else sys.stdout
    tpl = cv2.imread(tplp, cv2.IMREAD_GRAYSCALE)
    th, tw = tpl.shape
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", video], capture_output=True, text=True)
    dur = float(r.stdout.strip())
    total = 0
    t = 0.5
    while t < dur:
        r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", f"{t:.1f}", "-i", video,
            "-frames:v", "1", "-vf", "format=gray",
            "-f", "rawvideo", "-pix_fmt", "gray", "-"], capture_output=True)
        if len(r.stdout) == 1080 * 1602:
            img = np.frombuffer(r.stdout, dtype=np.uint8).reshape(1602, 1080)
            res = cv2.matchTemplate(img, tpl, cv2.TM_CCOEFF_NORMED)
            loc = np.where(res >= thresh)
            scored = sorted([(int(x), int(y), float(res[y, x]))
                             for y, x in zip(loc[0], loc[1])], key=lambda s: -s[2])
            kept = []
            for x, y, s in scored:
                if all(abs(x - kx) > 60 or abs(y - ky) > 60 for kx, ky, _ in kept):
                    kept.append((x, y, s))
            for x, y, s in kept:
                out.write(f"{t:6.1f}s  icon@({x:4d},{y:4d})  score={s:.3f}\n")
                total += 1
        t += step
    out.write(f"\n{total} detections\n")
    if out is not sys.stdout:
        out.close()

if __name__ == "__main__":
    main()
