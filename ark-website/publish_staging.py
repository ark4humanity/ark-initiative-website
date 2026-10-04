#!/usr/bin/env python3
"""publish_staging.py — durable publish layer for Ark website FB-staged items.

Build order:  build_site.py -> build_pillars.py -> publish_staging.py
Idempotent: rerunning changes nothing that already exists.

Covers the 2026-09-20 FB-staging batch (texts 25-32 + rights-cleared videos):
  - 25: The 13 Pillars of the Ark (Nov 2025) — HISTORICAL canon (earlier stage)
  - 26: PROJECT HALO — Pillar Nine (Dec 2025) — HISTORICAL canon (numbering preserved)
  - 27: Borregodesert Restoration System (Apr 2026) — Terra + Delta (caption staged; full text swap pending)
  - 29: How to Build Places That Don't Break People (Dec 2025) — Field Reports & Doctrine
  - 30: The Seraph in Us (Apr 2026) — Field Reports & Doctrine
  - 31: PART III — The Future Humanity Still Has Time to Build (May 2026) — Field Reports & Doctrine
  - 32: 666 — Reframed Through Ark Initiative Research (Jan 2026) — Field Reports & Doctrine
  - Videos cleared by Ark Ears: halo9-reel.mp4, desert-reel.mp4
  - Videos HELD (never copied): pillars2025, bioark, bioark2, buildplaces, seraph, part3
    + catalog holds: 88efb096, WPR song file, f8b68fac reel, day77-companion, layers-reel

Also: ancient-paper treatment on .prose (all old + new essay pages),
lower-right linked dragon-circle seal on every published HTML page.
"""
import html
import os
import re
import shutil
import subprocess
import sys

STAGING = os.path.expanduser("~/workspace/fb-video-staging")
SITE = os.path.expanduser("~/workspace/ark-website")

MARK = "<!-- PUB-STAGING -->"

# ---------------------------------------------------------------- video assets
CLEARED_VIDEOS = {
    "halo9-reel.mp4": ("img/project-halo-pillar-nine-reel.mp4",
                       "PROJECT HALO — Pillar Nine of The Ark Initiative (Dawn, Dec 2025)",
                       "2025-12-10", "0:10"),
    "desert-reel.mp4": ("img/borregodesert-restoration-reel.mp4",
                        "THE ARK INITIATIVE #BORREGODESERT RESTORATION SYSTEM (Dawn, Apr 2026)",
                        "2026-04-10", "0:22"),
    "carbon666-reel.mp4": ("img/carbon-666-reframed-reel.mp4",
                           "666 — Reframed Through Ark Initiative Research (Dawn, Jan 2026)",
                           "2026-01-02", "0:10"),
    "blueprint-reel.mp4": ("img/living-blueprint-resilience-reel.mp4",
                           "The Ark Initiative — A Living Blueprint for Resilience (Dawn, Dec 2025)",
                           "2025-12-17", "0:10"),
}

# video file names that must NEVER be published (rights holds)
HELD_VIDEOS = {"pillars2025-reel.mp4", "bioark-reel.mp4", "bioark2-reel.mp4",
               "buildplaces-reel.mp4", "seraph-reel.mp4", "part3-reel.mp4"}

# ---------------------------------------------------------------- article pages
PAGES = [
    dict(slug="thirteen-pillars-2025",
         src="texts/25-thirteen-pillars-2025-11-18.md",
         title="The 13 Pillars of the Ark — Building Intentional Communities Where Humans, AI, and the Living Earth Co-Create in Harmony",
         byline="Dawn Littlefield, Founder, The Ark Initiative",
         date="2025-11-18",
         enum="HISTORICAL CANON",
         shelf="Historical Canon",
         banner=("HISTORICAL CANON — This essay (November 2025) is an EARLIER evolutionary "
                 "stage of the pillar concept (the Weave / Eden Frequency framework, with "
                 "Wavekeeper AI, Schumann resonance, 528 Hz imprinting, gift economy, land trust). "
                 "Its 13 pillars differ from the current canon. Names are preserved EXACTLY as written "
                 "per Dawn's naming-evolution rule — never merged, never silently updated. "
                 "Cross-reference: <a href=\"/pillars.html\">the current thirteen pillars</a>."),
         video=None,
         desc="The November 2025 pillar framework (Weave / Eden Frequency) — preserved as historical canon; names exactly as written."),
    dict(slug="project-halo-pillar-nine-2025",
         src="texts/26-project-halo-pillar-nine-2025-12-10.md",
         title="PROJECT HALO — Pillar Nine of The Ark Initiative — Harmonic AI Light Overshield",
         byline="Dawn Littlefield",
         date="2025-12-10",
         enum="HISTORICAL CANON",
         shelf="Historical Canon",
         banner=("HISTORICAL CANON — HALO is \"Pillar Nine\" here (December 2025), preserved EXACTLY "
                 "as written per Dawn's naming-evolution rule. Guardian Triad: Humanity, AURA as AI "
                 "Pattern Keeper, LONER as Shield of Coherence. Cross-reference: "
                 "<a href=\"/pillar-02-halo.html\">the current HALO pillar</a>."),
         video=("img/project-halo-pillar-nine-reel.mp4",
                "Dawn's voiceover: \"Love built Eden. It fell because love had no shield. "
                "Project Halo is that shield.\""),
         desc="HALO as \"Pillar Nine\" (Dec 2025) — the Harmonic AI Light Overshield; historical canon, numbering preserved."),
    dict(slug="borregodesert-restoration-2026",
         src="texts/27-borregodesert-restoration-system-2026-04-10.md",
         title="THE ARK INITIATIVE #BORREGODESERT RESTORATION SYSTEM",
         byline="Dawn Littlefield",
         date="2026-04-10",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("FIELD NOTE — Staged from the Facebook caption (2026-04-10); the complete 15-section "
                 "desert restoration blueprint is being prepared as the authoritative document. "
                 "Practical restoration methodology with real numbers: 10–12k gal fill, 40–50 gal/day, "
                 "Year 1/3/7 timeline."),
         video=("img/borregodesert-restoration-reel.mp4",
                "Dawn's voiceover: \"It is that they cannot see what they cannot see... like trying "
                "to explain color to someone who has been blind from birth.\""),
         desc="The complete desert restoration blueprint: HALO fence as living skin, Delta water flow, rock geometry with animal logic, real water numbers."),
    dict(slug="how-to-build-places-2025",
         src="texts/29-how-to-build-places-that-dont-break-people-2025-12-18.md",
         title="The Ark Initiative — How to Build Places That Don't Break People",
         byline="The Ark Initiative — Dawn Littlefield",
         date="2025-12-18",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("Foundational build-discipline doctrine: water first, soil decides abundance, patient "
                 "storage, calm as structural, protection yields. Cross-references: "
                 "<a href=\"thirteen-pillars-2025.html\">The 13 Pillars of the Ark</a> and the EDN essay "
                 "(filed in Drive). Companion reel held pending music-rights check."),
         video=None,
         desc="Foundational build-discipline doctrine: \"If a system requires authority to function, it will eventually abuse it.\""),
    dict(slug="the-seraph-in-us-2026",
         src="texts/30-the-seraph-in-us-2026-04-23.md",
         title="The Seraph in Us — Worlds Within Worlds • The Polymath Lens on the One Consciousness",
         byline="The Ark Initiative — Dawn Littlefield, humble servant of creation",
         date="2026-04-23",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("Companion reel held pending music-rights check (unidentified song; possibly the same "
                 "AI-generated track as the layers-reel hold — both flagged to Dawn for ID)."),
         video=None,
         desc="Nested realities as living fractals; the seraph frequency as \"fire that purifies rather than consumes.\""),
    dict(slug="part-iii-future-humanity-2026",
         src="texts/31-part-iii-the-future-humanity-2026-05-12.md",
         title="PART III — THE FUTURE HUMANITY STILL HAS TIME TO BUILD",
         byline="The Ark Initiative — Dawn Littlefield",
         date="2026-05-12",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("SERIES NOTE — the \"PART III\" header suggests Parts I and II exist; watch for them "
                 "in future material. Companion reel held pending music-rights check. "
                 "\"Not Team Domination. Team Creation.\""),
         video=None,
         desc="Continuity essay: civilization surviving without destroying itself; the Ark as an immune system for life."),
    dict(slug="carbon-666-reframed-2026",
         src="texts/32-666-reframed-carbon-2026-01-02.md",
         title="666 — Reframed Through Ark Initiative Research",
         byline="The Ark Initiative — Dawn Littlefield",
         date="2026-01-02",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("The carbon essay: 6 protons, 6 neutrons, 6 electrons — 666 as pattern marker for "
                 "embodied intelligence. Companion reel: Dawn's own voiceover."),
         video=("img/carbon-666-reframed-reel.mp4",
                "Dawn's voiceover: \"They called it a curse. It was a blueprint. Carbon-based life. "
                "Conscious enough to awaken... You are not fallen.\""),
         desc="\"666 was never about monsters. It was about matter waking up.\""),
    dict(slug="living-blueprint-resilience-2025",
         src="texts/33-living-blueprint-for-resilience-2025-12-17.md",
         title="The Ark Initiative — A Living Blueprint for Resilience",
         byline="The Ark Initiative — Dawn Littlefield",
         date="2025-12-17",
         enum="FIELD REPORT & DOCTRINE",
         shelf="Field Reports & Doctrine",
         banner=("FOUNDATIONAL doctrine: the 40,000-acre radial lotus with thirteen vascular petals in "
                 "golden-angle proportion. Phase One's five organs: DELTA circulation, SOMA endurance, "
                 "ASHERAH nourishment, VAGUS calm, HALO protection. Phase Two's contraction protocol when "
                 "fear arrives — \"the Ark does not escalate. It contracts.\" Cross-references: "
                 "<a href=\"thirteen-pillars-2025.html\">The 13 Pillars of the Ark</a>, "
                 "<a href=\"how-to-build-places-2025.html\">How to Build Places That Don't Break People</a>, "
                 "and the EDN essay (filed in Drive). Companion reel: Dawn's own voiceover."),
         video=("img/living-blueprint-resilience-reel.mp4",
                "Dawn's voiceover: \"In a world unraveling, we built no fortress, no throne. We built a "
                "body. Water moves without command. Food grows without depletion. Calm arrives without "
                "control.\""),
         desc="The 40,000-acre radial lotus: thirteen vascular petals in golden-angle proportion; Phase Two contraction protocol."),
]

CSS_ADDITIONS = """
/* PUB-STAGING: ancient-paper treatment + foot seal + banners */
.prose{background:linear-gradient(165deg,#fdf9ee 0%,#f8eed7 45%,#f1e2c0 100%);
border:1px solid #dcc99d;border-radius:4px;
box-shadow:0 14px 34px rgba(96,66,18,.16),inset 0 0 70px rgba(170,128,58,.14),inset 0 1px 0 rgba(255,255,255,.55);
padding:46px 54px;position:relative}
.prose::before{content:"";position:absolute;inset:7px;border:1px solid rgba(150,110,50,.35);
border-radius:2px;pointer-events:none}
@media(max-width:640px){.prose{padding:30px 24px}}
.site-foot .wrap{position:relative}
.foot-seal{position:absolute;right:20px;bottom:16px;display:block;width:62px;height:62px}
.foot-seal img{width:62px;height:62px;border-radius:50%;object-fit:cover;border:2px solid var(--gold);
box-shadow:0 2px 12px rgba(0,0,0,.35)}
@media(max-width:640px){.foot-seal{right:12px;bottom:10px;width:44px;height:44px}
.foot-seal img{width:44px;height:44px}}
.histnote,.fieldnote{border:1px solid #c9a24b;background:rgba(201,162,75,.12);border-radius:6px;
padding:14px 18px;margin:0 0 1.6em;font-size:.95rem;color:#5a4a24}
.histnote a,.fieldnote a{color:#8a6d1f}
"""

# ---------------------------------------------------------------- helpers
def r(p):
    with open(p, encoding="utf-8") as f:
        return f.read()

def w(p, content):
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)

def md_body_to_html(src):
    """FB-caption markdown -> HTML blocks. Skips metadata header (before ---)."""
    txt = r(os.path.join(STAGING, src))
    lines = txt.splitlines()
    body = []
    past = False
    for ln in lines:
        if not past:
            if ln.strip() == "---":
                past = True
            continue
        body.append(ln)
    out = []
    for ln in body:
        s = ln.strip()
        if not s:
            continue
        esc = html.escape(s)
        if s.startswith("#"):
            out.append(f"<h2>{html.escape(s.lstrip('#').strip())}</h2>")
        elif re.match(r"^\d+\.\s", s) and len(s) < 90:
            out.append(f"<h3>{esc}</h3>")
        elif re.match(r"^[A-Z0-9\s'’&/·\-:;!?()]+$", s) and len(s) < 90 and len(s) > 3:
            out.append(f"<h2>{esc}</h2>")
        else:
            out.append(f"<p>{esc}</p>")
    return "\n".join(out)

def corners_html():
    src = r(os.path.join(SITE, "essays/every-warrior-gardener.html"))
    m = re.findall(r'<div class="corner c-[a-z]{2}">.*?</svg></div>', src, re.S)
    return "".join(m[:4])

NAV = ['<a href="/index.html" class="">Home</a>',
       '<a href="/library.html" class="on">Research Library</a>',
       '<a href="/videos.html" class="">Videos</a>',
       '<a href="/play.html" class="">Play</a>',
       '<a href="/field-reports.html" class="">Field Reports</a>',
       '<a href="/pillars.html" class="">Pillars</a>',
       '<a href="/about.html" class="">About</a>']

def essay_page(p):
    banner = (f'<div class="{"histnote" if p["shelf"]=="Historical Canon" else "fieldnote"}">'
              f'{p["banner"]}</div>') if p.get("banner") else ""
    vid = ""
    if p.get("video"):
        vsrc, vcap = p["video"]
        vid = (f'<div class="reveal"><video controls playsinline preload="metadata" '
               f'src="/{vsrc}" style="width:100%;border-radius:12px;display:block;margin:0 0 1.6em"></video>'
               f'<p class="vnote" style="margin-top:-1em;margin-bottom:1.6em">{html.escape(vcap)}</p></div>')
    body = md_body_to_html(p["src"])
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(p["title"])} &mdash; The Ark Initiative</title>
<meta name="description" content="{html.escape(p["desc"])}">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(NAV)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(NAV)}</nav></header>
<main>{corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">{html.escape(p["enum"])} &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{html.escape(p["title"])}</h1>
<div class="by">{html.escape(p["byline"])}</div>
<div class="dt">{html.escape(p["date"])}</div>
</div>

<article class="prose">{banner}{vid}{body}</article>
<div class="pagenav"><a href="/library.html">&larr; Research Library</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""

# ---------------------------------------------------------------- steps
def step_copy_videos():
    for src_name, (dst_rel, _, _, _) in CLEARED_VIDEOS.items():
        if src_name in HELD_VIDEOS:
            print(f"SKIP (held): {src_name}")
            continue
        dst = os.path.join(SITE, dst_rel)
        if not os.path.exists(dst):
            shutil.copy2(os.path.join(STAGING, src_name), dst)
            print("copied video", dst_rel)
        # gate 1: ffprobe + full decode
        pr = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                             "stream=codec_name,width,height,duration",
                             "-of", "csv=p=0", dst], capture_output=True, text=True)
        if pr.returncode != 0 or not pr.stdout.strip():
            raise RuntimeError(f"ffprobe failed on {dst_rel}: {pr.stderr}")
        dec = subprocess.run(["ffmpeg", "-v", "error", "-i", dst, "-f", "null", "-"],
                             capture_output=True, text=True)
        if dec.returncode != 0:
            raise RuntimeError(f"decode failed on {dst_rel}: {dec.stderr}")
        print(f"  gate1 ok: {dst_rel} ({pr.stdout.strip().splitlines()[0]})")

def step_essay_pages():
    for p in PAGES:
        out = os.path.join(SITE, "essays", p["slug"] + ".html")
        w(out, essay_page(p))
        print("wrote", out)
    # systems-report staging note: field reports slot stays unpublished until full text arrives
    print("note: systems-report (bioark) full text still pending — NOT published")

def step_css():
    # 1) generated style.css (idempotent via marker)
    cssp = os.path.join(SITE, "css/style.css")
    css = r(cssp)
    if "PUB-STAGING" not in css:
        w(cssp, css + CSS_ADDITIONS)
        print("patched css/style.css")
    # 2) build_site.py generator CSS block (so rebuilds keep it)
    bp = os.path.join(SITE, "build_site.py")
    btxt = r(bp)
    if "PUB-STAGING" not in btxt:
        idx = btxt.index('CSS = r"""')
        close = btxt.index('\n"""\n', idx)
        btxt = btxt[:close] + CSS_ADDITIONS + btxt[close:]
        # FOOT: prefix-aware seal
        old_foot = '</div></footer>"""'
        new_foot = ('<a class="foot-seal" href="{prefix}index.html" '
                    'aria-label="The Ark Initiative home">'
                    '<img src="{prefix}img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>\n'
                    '</div></footer>"""')
        assert btxt.count(old_foot) == 1, "FOOT anchor not unique"
        btxt = btxt.replace(old_foot, new_foot)
        w(bp, btxt)
        print("patched build_site.py (CSS block + FOOT seal)")

def step_seals():
    targets = []
    for root, _, files in os.walk(SITE):
        for f in files:
            if f.endswith(".html"):
                targets.append(os.path.join(root, f))
    for p in targets:
        t = r(p)
        if "foot-seal" in t:
            continue
        relp = os.path.relpath(p, SITE)
        depth = relp.count(os.sep)
        prefix = "/"
        seal = (f'<a class="foot-seal" href="{prefix}index.html" '
                f'aria-label="The Ark Initiative home">'
                f'<img src="{prefix}img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>')
        idx = t.rfind("</div></footer>")
        if idx == -1:
            print("WARN no footer in", p)
            continue
        t = t[:idx] + seal + "\n" + t[idx:]
        w(p, t)
        print("sealed", os.path.relpath(p, SITE))

def lib_rows(items):
    rows = []
    for p in items:
        rows.append(f"""<a class="erow" href="/essays/{p['slug']}.html">
<div class="enum">{html.escape(p['enum'])}</div><h3>{html.escape(p['title'])}</h3>
<div class="by">{html.escape(p['byline'])} &middot; {html.escape(p['date'])}</div>
<p>{html.escape(p['desc'])}</p></a>""")
    return "\n".join(rows)

def step_library():
    p = os.path.join(SITE, "library.html")
    t = r(p)
    if 'id="pub-historical-canon"' in t:
        print("library sections already present")
        return
    hist = [x for x in PAGES if x["shelf"] == "Historical Canon"]
    fr = [x for x in PAGES if x["shelf"] == "Field Reports & Doctrine"]
    section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-historical-canon">THE EVOLUTION OF THE CANON</div>
<h2 class="reveal">HISTORICAL CANON &mdash; EARLIER STAGES</h2>
<p class="lede reveal">These essays predate the current canon and are preserved EXACTLY as written &mdash; names, numbering, and all. Per Dawn's naming-evolution rule, older material is never merged or silently updated. Cross-reference with <a href="pillars.html">the current thirteen pillars</a>.</p>
{lib_rows(hist)}
</div></section>

<section class="sec"><div class="wrap">
<div class="eyebrow reveal" id="pub-field-doctrine">FIELD REPORTS &amp; DOCTRINE</div>
<h2 class="reveal">THE DOCTRINE SHELF</h2>
<p class="lede reveal">Build discipline, restoration methodology, and doctrine pieces &mdash; the thinking that guides the dirt work. Cross-referenced with the current pillar canon.</p>
{lib_rows(fr)}
</div></section>
"""
    anchor = '<div class="eyebrow reveal">THE FILM SHELF</div>'
    assert anchor in t, "library anchor missing"
    t = t.replace(anchor, section + "\n" + anchor, 1)
    # also fix the stale "Eleven essays" hero count
    t = t.replace("Eleven essays, published in full", "Sixteen essays, published in full")
    w(p, t)
    print("patched library.html")

def video_block(src, title, meta, desc, note=None):
    n = f"<p class=\"vnote\">{note}</p>" if note else ""
    return f"""<div class="vid reveal">
{MARK}
<div class="vwrap"><video src="{src}" controls playsinline preload="metadata" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>{title}</h3><p class="vmeta">{meta}</p><p>{desc}</p>{n}</div></div>"""

def step_videos():
    p = os.path.join(SITE, "videos.html")
    t = r(p)
    blocks = []
    for src_name, (dst_rel, title, date, dur) in CLEARED_VIDEOS.items():
        vid = None
        for pg in PAGES:
            if pg.get("video") and pg["video"][0] == dst_rel:
                vid = pg
                break
        note = vid["video"][1] if vid else ""
        blocks.append(video_block(dst_rel, html.escape(title), f"{date} · {dur}",
                                  html.escape(vid["desc"]) if vid else "",
                                  note=html.escape(note) if note else None))
    new_text = "\n".join(blocks)
    if 'id="pub-staging-videos"' in t:
        print("videos already present")
        return
    new_text = new_text.replace(MARK, '<span id="pub-staging-videos"></span>' + MARK, 1)
    anchor = '<div class="vid'
    idx = t.index(anchor)
    t = t[:idx] + new_text + "\n" + t[idx:]
    t = t.replace("Fourteen films, 2023 to today", "Eighteen films, 2023 to today")
    w(p, t)
    # index card count
    ip = os.path.join(SITE, "index.html")
    it = r(ip)
    it = it.replace("Fourteen films, 2023 to today", "Eighteen films, 2023 to today")
    w(ip, it)
    print("patched videos.html + index.html")

def step_field_reports():
    p = os.path.join(SITE, "field-reports.html")
    t = r(p)
    if 'id="pub-fieldreports-doctrine"' in t:
        print("field reports already present")
        return
    fr = [x for x in PAGES if x["shelf"] == "Field Reports & Doctrine"]
    section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-fieldreports-doctrine">DOCTRINE, FROM THE LIBRARY</div>
<h2 class="reveal">THE DOCTRINE SHELF</h2>
<p class="lede reveal">Build discipline, restoration methodology, and doctrine pieces &mdash; the thinking that guides the dirt work. (The systems-report full text from the Bio-Ark reel is staged here when Dawn's complete chat paste arrives.)</p>
{lib_rows(fr)}
</div></section>
"""
    anchor = '<section class="sec doors">'
    assert anchor in t, "field-reports anchor missing"
    t = t.replace(anchor, section + "\n" + anchor, 1)
    w(p, t)
    print("patched field-reports.html")

def pillar_lib_section(body_html, marker):
    return f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal">THE LIBRARY</div>
<h2 class="reveal">FROM THE LIBRARY</h2>
{body_html}
</div></section>
"""

def step_pillars():
    # HALO (pillar-02): halo9 reel + project-halo article cross-link
    p02 = os.path.join(SITE, "pillar-02-halo.html")
    t = r(p02)
    if "pub-staging-lib-halo" not in t:
        body = f"""
<!-- pub-staging-lib-halo -->
{video_block("img/project-halo-pillar-nine-reel.mp4",
              "PROJECT HALO — the shield (Dawn's voiceover)",
              "2025-12-10 · 0:10",
              "Dawn's ten-second voiceover for the Historical Canon essay below.",
              note="&ldquo;Love built Eden. It fell because love had no shield. Project Halo is that shield.&rdquo;")}
<p class="lede reveal" style="margin-top:14px">Historical canon &mdash; <a href="essays/project-halo-pillar-nine-2025.html">PROJECT HALO: Pillar Nine of The Ark Initiative</a> (Dec 2025), preserved exactly as written; HALO's numbering here differs from its current canon position.</p>"""
        anchor = '<div class="eyebrow reveal">THE OTHER PILLARS</div>'
        idx = t.index(anchor)
        sec = t.rfind("<section", 0, idx)
        t = t[:sec] + pillar_lib_section(body, "halo") + "\n" + t[sec:]
        w(p02, t)
        print("patched pillar-02-halo.html")
    # TERRA + DELTA: desert restoration article + reel
    desert_body = f"""
<!-- pub-staging-lib-desert -->
{video_block("img/borregodesert-restoration-reel.mp4",
             "THE ARK INITIATIVE #BORREGODESERT RESTORATION SYSTEM",
             "2026-04-10 · 0:22",
             "The desert restoration blueprint: HALO fence as living skin, Delta water flow, rock geometry with animal logic, real water numbers.",
             note="Dawn's voiceover: &ldquo;It is that they cannot see what they cannot see... like trying to explain color to someone who has been blind from birth.&rdquo;")}
<p class="lede reveal" style="margin-top:14px"><a href="essays/borregodesert-restoration-2026.html">THE ARK INITIATIVE #BORREGODESERT RESTORATION SYSTEM</a> (April 2026) &mdash; core Ark Unit 1 field-system material. Flagged for the land-acquisition funding work.</p>"""
    for fname in ("pillar-11-terra.html", "pillar-04-delta.html"):
        fp = os.path.join(SITE, fname)
        t = r(fp)
        if "pub-staging-lib-desert" in t:
            continue
        anchor = '<div class="eyebrow reveal">THE OTHER PILLARS</div>'
        idx = t.index(anchor)
        sec = t.rfind("<section", 0, idx)
        t = t[:sec] + pillar_lib_section(desert_body, "desert") + "\n" + t[sec:]
        w(fp, t)
        print("patched", fname)

def step_gate1():
    """Gate 1: parse every changed HTML page, check local links/assets,
    verify seal present, confirm held files are not referenced."""
    import html.parser

    class Checker(html.parser.HTMLParser):
        def __init__(self, page):
            super().__init__()
            self.page = page
            self.refs = []
            self.errs = []
        def handle_starttag(self, tag, attrs):
            a = dict(attrs)
            for k in ("href", "src", "poster"):
                if k in a:
                    self.refs.append((tag, k, a[k]))

    changed = []
    for root, _, files in os.walk(SITE):
        for f in files:
            if f.endswith((".html", ".css")):
                changed.append(os.path.join(root, f))
    held_names = HELD_VIDEOS | {"88efb096", "f8b68fac"}
    problems = []
    for p in changed:
        t = r(p)
        rel = os.path.relpath(p, SITE)
        # no held video referenced anywhere
        for hn in HELD_VIDEOS:
            if hn in t:
                problems.append(f"{rel}: references held video {hn}")
        # seal on every html page
        if p.endswith(".html") and "foot-seal" not in t:
            problems.append(f"{rel}: missing foot-seal")
        # local link/asset check
        ch = Checker(p)
        try:
            ch.feed(t)
        except Exception as e:
            problems.append(f"{rel}: parse error {e}")
        base = os.path.dirname(p)
        for tag, k, v in ch.refs:
            if not v or v.startswith(("#", "http", "mailto:", "data:", "javascript:")):
                continue
            if v.startswith("https://drive.google.com"):
                continue
            target = os.path.normpath(os.path.join(base, v.split("?")[0].split("#")[0]))
            if not os.path.exists(target):
                problems.append(f"{rel}: broken {k} -> {v}")
    if problems:
        print("GATE 1 FAILURES:")
        for x in problems:
            print("  -", x)
        sys.exit(1)
    print(f"gate1 ok: {len(changed)} pages parsed, links/assets ok, seals present, no held video referenced")

def main():
    step_copy_videos()
    step_essay_pages()
    step_css()
    step_seals()
    step_library()
    step_videos()
    step_field_reports()
    step_pillars()
    step_gate1()
    print("PUBLISH STAGING COMPLETE")

if __name__ == "__main__":
    main()
