#!/usr/bin/env python3
"""Phase-2 batch 6: stage field-report videos (transcode >25MB, ears-gated, theater entries)."""
import os, sys, json, re, subprocess, html as hlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import publish_staging as ps

SITE = os.path.dirname(os.path.abspath(__file__))
PHASE2 = os.path.join(SITE, "phase2")
FR = json.load(open(os.path.join(PHASE2, "fr_videos.json")))
EARS = json.load(open(os.path.join(PHASE2, "ears_summary.json")))
VIDDIR = os.path.join(PHASE2, "frvids")
LIMIT = 26214400  # Cloudflare 25 MiB

# hard exclusions by filename fragment (music-rights / holds)
EXCLUDE = ["88efb096", "crucible", "anatomy-reel", "day77-companion", "layers-reel",
           "bioark-reel", "pillars2025-reel", "bioark2-reel", "buildplaces-reel",
           "seraph-reel", "part3-reel",
           # music-rights hold (ears: lyric soundtrack, third-party or murky AI song)
           "shadows in the feed", "comfrey",
           "a living blueprint that refus", "ai doesn't replace you",
           "blueprint for ark4 resilience", "cash up front",
           "humpback whale rescue", "jujube",
           "my kingdom for ferrofluid — build", "part iii the future humanity",
           "pillar xiii vega — orientation", "syllipsimopodi bideni",
           "the 13 pillars of an ark", "the miracle tree",
           "tonight's speech may be about", "wheels within wheels",
           "winter wisdom",
           "before the floods — part 2", "tartarian scythian", "buffered trinity", "this is not gardening", "the mother they couldn"]

def clean_title(path):
    n = path.split("/")[-1]
    n = os.path.splitext(n)[0]
    n = re.sub(r"^FIELD REPORT VIDEO\s*[—–-]\s*", "", n, flags=re.I)
    n = re.sub(r"\s*\(?(19|20)\d\d[-/]\d\d[-/]\d\d\)?\s*$", "", n).strip()
    n = re.sub(r"\s*\(\d of \d\)\s*$", "", n).strip()
    return n[:80]

def local_src(e, i):
    import glob
    cands = sorted(glob.glob(os.path.join(VIDDIR, f"{i:02d}_*.mp4")))
    # exclude ears sidecar files
    cands = [c for c in cands if not c.endswith((".txt", ".md", ".json"))]
    return cands[0] if cands else os.path.join(VIDDIR, f"{i:02d}_missing.mp4")

def transcode(src, dst):
    r = subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", src,
                        "-c:v", "libx264", "-crf", "28", "-preset", "medium",
                        "-vf", "scale=720:-2", "-c:a", "aac", "-b:a", "96k",
                        "-movflags", "+faststart", dst],
                       capture_output=True, text=True)
    return r.returncode == 0 and os.path.exists(dst)

def main():
    staged = []
    results = []
    for i, e in enumerate(FR):
        low = e["path"].lower()
        if any(x in low for x in EXCLUDE):
            print("excluded:", e["path"].split("/")[-1][:60]); continue
        src = local_src(e, i)
        if not os.path.exists(src):
            print("missing download:", e["path"].split("/")[-1][:60]); continue
        key = os.path.basename(src)[3:]
        ear = EARS.get(key, {})
        # fallback: try without .mp4.mp4 artifacts
        if not ear:
            for k in EARS:
                if k.startswith(key[:40]):
                    ear = EARS[k]; break
        title = clean_title(e["path"])
        # ears required: no ears result -> hold, do not publish
        if not ear or not isinstance(ear, dict) or not ear.get("segments"):
            print(f"ears pending: {title[:50]}")
            results.append(("ears-pending", title[:50], ""))
            continue
        # music-rights gate: soundtrack with lyrics -> HOLD, do not publish
        segs = ear.get("segments", [])
        songs = [s for s in segs if s.get("kind") == "soundtrack" and len(s.get("text", "")) > 20]
        if songs:
            print(f"music hold (lyric soundtrack): {title[:50]}")
            results.append(("music-hold", title[:50], songs[0]["text"][:60]))
            continue
        slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")[:50]
        dst_name = f"fr-{i:02d}-{slug}.mp4"
        dst = os.path.join(SITE, "img", dst_name)
        if os.path.getsize(src) > LIMIT or not os.path.exists(dst):
            if os.path.getsize(src) > LIMIT:
                print(f"transcoding {title[:50]} ({os.path.getsize(src)/1e6:.0f}MB)...")
                if not transcode(src, dst):
                    print("  transcode FAILED, skipping"); continue
            else:
                import shutil
                shutil.copy2(src, dst)
        # verify
        r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                            "-of", "csv=p=0", dst], capture_output=True, text=True)
        if r.returncode != 0:
            print("  probe failed:", dst_name); continue
        r = subprocess.run(["ffmpeg", "-v", "error", "-i", dst, "-f", "null", "-"],
                           capture_output=True, text=True, timeout=300)
        if r.returncode != 0:
            print("  decode failed:", dst_name); continue
        # caption from ears
        cap_bits = []
        for s in segs[:4]:
            if s.get("kind") == "speech" and len(s.get("text", "")) > 15:
                cap_bits.append(s["text"])
        cap = " ".join(cap_bits)[:220] or "Field report film from the Ark Visual Library."
        if songs:
            cap = ("[Music-rights review pending — " + songs[0]["text"][:80] + "] " + cap)
        m = re.search(r"(19|20)\d\d[-/]\d\d[-/]\d\d", e["path"])
        date = m.group(0) if m else ""
        staged.append({"src": "img/" + dst_name, "title": title, "cap": cap, "date": date,
                       "music_flag": bool(songs)})
        print(f"staged {dst_name}")
    # sort newest first by date
    staged.sort(key=lambda x: x["date"], reverse=True)
    # patch videos.html: new section after the reels section
    t = open(os.path.join(SITE, "videos.html"), encoding="utf-8").read()
    marker = "<!-- PUB-FR-FILMS -->"
    blocks = []
    for s in staged:
        flag = '<p class="vnote">Music-rights review pending.</p>' if s["music_flag"] else ""
        blocks.append(
            f'<div class="vid reveal">\n<div class="vwrap"><video controls playsinline preload="metadata" src="{s["src"]}"></video></div>\n'
            f'<div class="vpad"><h3>{hlib.escape(s["title"])}</h3>'
            f'<p class="rmeta">FIELD REPORT FILM{s["date"] and " · " + hlib.escape(s["date"])}</p>'
            f'<p>{hlib.escape(s["cap"])}</p>{flag}</div></div>')
    section = (f'{marker}\n<section class="sec"><div class="wrap">\n'
               f'<div class="eyebrow reveal">THE FIELD REPORT FILMS</div>\n'
               f'<h2 class="reveal">{len(staged)} FIELD REPORTS ON FILM</h2>\n'
               f'<p class="lede reveal">The canon field-report films, newest first. Every reel plays in place.</p>\n'
               + "\n".join(blocks) + '\n</div></section>')
    if marker not in t:
        # insert before the theater dragons section or at end of main
        t = t.replace("</main>", section + "\n</main>", 1)
    else:
        t = re.sub(re.escape(marker) + r".*?</section>", section, t, flags=re.S)
    open(os.path.join(SITE, "videos.html"), "w", encoding="utf-8").write(t)
    print(f"patched videos.html ({len(staged)} field-report films)")
    json.dump([s["src"] for s in staged], open(os.path.join(PHASE2, "staged_frvids.json"), "w"), indent=1)
    flagged = [s["title"] for s in staged if s["music_flag"]]
    if flagged:
        print("MUSIC-FLAGGED (needs Dawn review):")
        for f in flagged: print("  ", f[:70])
    ps.step_seals()
    ps.step_gate1()
    print("BATCH6 COMPLETE")

if __name__ == "__main__":
    main()
