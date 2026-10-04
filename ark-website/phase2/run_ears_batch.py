#!/usr/bin/env python3
"""Run Ark Ears on each downloaded field-report video; write summary JSON."""
import os, sys, json, subprocess, glob, time, re

PHASE2 = "/home/hatch/workspace/ark-website/phase2"
VIDDIR = os.path.join(PHASE2, "frvids")
EARS = "/home/hatch/workspace/tools/.venv-ears/bin/python3"
SCRIPT = "/home/hatch/workspace/tools/ark_ears.py"
SUMMARY = os.path.join(PHASE2, "ears_summary.json")
FR = json.load(open(os.path.join(PHASE2, "fr_videos.json")))
META = {re.sub(r'[^\w\-.,() ]', '_', e["path"].split("/")[-1])[:70]: e for e in FR}

def done_set():
    if os.path.exists(SUMMARY):
        return set(json.load(open(SUMMARY)).keys())
    return set()

def main():
    summary = json.load(open(SUMMARY)) if os.path.exists(SUMMARY) else {}
    deadline = time.time() + 5400  # 90 min max
    while time.time() < deadline:
        files = sorted(glob.glob(os.path.join(VIDDIR, "*.mp4")))
        pending = [f for f in files if os.path.basename(f)[3:] not in done_set() | set(summary.keys())]
        # map: filename is NN_safename; key on safename part
        todo = []
        for f in files:
            base = os.path.basename(f)
            key = base[3:]  # strip NN_
            if key in summary:
                continue
            # file may still be downloading (size changing); skip if modified in last 20s
            if time.time() - os.path.getmtime(f) < 20:
                continue
            todo.append((f, key))
        if not todo:
            # check if downloader still running by looking for new files
            time.sleep(30)
            files2 = sorted(glob.glob(os.path.join(VIDDIR, "*.mp4")))
            if len(files2) == len(files):
                print("no more files arriving; done")
                break
            continue
        f, key = todo[0]
        print(f"ears on {os.path.basename(f)}", flush=True)
        r = subprocess.run([EARS, SCRIPT, f], capture_output=True, text=True, cwd=PHASE2, timeout=600)
        rep = f[:-4] + ".listening-report.md"
        txt = f[:-4] + ".txt"
        info = {"rc": r.returncode, "report": os.path.basename(rep) if os.path.exists(rep) else None}
        if os.path.exists(rep):
            t = open(rep, encoding="utf-8", errors="ignore").read()
            # extract key facts
            m = re.search(r"Duration: (\S+)", t); info["duration"] = m.group(1) if m else "?"
            m = re.search(r"Spoken words: (\d+)", t); info["spoken_words"] = m.group(1) if m else "0"
            m = re.search(r"Lyric words: (\d+)", t); info["lyric_words"] = m.group(1) if m else "0"
            info["has_soundtrack"] = "soundtrack" in t.lower().split("timestamped speech")[ -1] if "timestamped speech" in t.lower() else False
            # grab transcript lines
            segs = re.findall(r"\*\*([\d:–-]+)\*\* \*\[(\w+)\]\* (.+)", t)
            info["segments"] = [{"t": s[0], "kind": s[1], "text": s[2][:120]} for s in segs[:12]]
        summary[key] = info
        json.dump(summary, open(SUMMARY, "w"), indent=1)
    print(f"ears summary: {len(summary)} videos")

if __name__ == "__main__":
    main()
