#!/usr/bin/env python3
"""Rebuild the 10 empty pillar-canon essay bodies + stage 2 missing canon texts."""
import os, re, html as hlib, json, glob

SITE = os.path.dirname(os.path.abspath(__file__))
MD = os.path.join(SITE, "phase2/md")
idx = json.load(open(os.path.join(SITE, "phase2/md/index.json")))
byid = {e["id"]: e for e in idx}

def md_to_html(md):
    lines = md.split("\n")
    out, para = [], []
    def flush():
        if para:
            t = " ".join(para)
            t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
            t = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<em>\1</em>", t)
            out.append(f"<p>{t}</p>")
            para.clear()
    for ln in lines:
        s = ln.strip()
        if not s:
            flush(); continue
        if s.startswith("### "):
            flush(); out.append(f"<h3>{hlib.escape(s[4:])}</h3>"); continue
        if s.startswith("## "):
            flush(); out.append(f"<h2>{hlib.escape(s[3:])}</h2>"); continue
        if s.startswith("# "):
            flush(); out.append(f"<h2>{hlib.escape(s[2:])}</h2>"); continue
        if re.match(r"^(\*|-|\+)\s", s):
            flush()
            item = re.sub(r"^(\*|-|\+)\s+", "", s)
            item = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", item)
            if out and out[-1].startswith("<ul>"):
                out[-1] = out[-1][:-5] + f"<li>{item}</li></ul>"
            else:
                out.append(f"<ul><li>{item}</li></ul>")
            continue
        if s.startswith(">"):
            flush(); out.append(f"<blockquote>{hlib.escape(s.lstrip('> '))}</blockquote>"); continue
        if s.startswith("*") and s.endswith("*") and len(s) < 400 and s.count("*") == 2:
            flush(); out.append(f'<p class="prov"><em>{hlib.escape(s.strip("*"))}</em></p>'); continue
        para.append(hlib.escape(s))
    flush()
    return "\n".join(out)

# slug -> drive id fragment to find source
TARGETS = {
 "pillar-canon-soma-endurance-reserves-living-continuity-dawn-2026": "1yu-FhtH",
 "pillar-canon-terra-the-living-ground-of-the-ark-dawn-s-bluep-2026": "15HB5aQg",
 "pillar-canon-vega-pillar-xiii-orientation-navigation-dawn-s-2026": "1n1skeHV",
 "pillar-canon-matrix-preventing-cascade-failure-dawn-s-words-2026": "1q7t7MHJ",
 "pillar-canon-matrix-habitable-fascia-for-a-living-world-dawn-2026": "1YN8M5nm",
 "pillar-canon-delta-the-ark-s-circulatory-intelligence-dawn-s-2026": "1iXEFHpT",
 "pillar-canon-delta-materials-methods-of-the-delta-circulatio-2026": "1CnIcPbL",
 "pillar-canon-vagus-how-the-ark-keeps-humans-calm-when-the-wo-2026": "1Ci4Qvo5",
 "pillar-canon-halo-petal-system-frictionless-architecture-bri-2026": "1aVX9pLG",
 "pillar-canon-halo-how-the-ark-protects-its-boundary-dawn-s-w-2026": "12CwkoDq",
}
# drive id -> new slug for the two missing
NEW = {
 "1tXR4nlr": ("pillar-canon-aura-prime-the-ethical-invariant-2026",
              "PILLAR CANON — Aura Prime — The Ethical Invariant (Dawn's words 2026-09-17)",
              "2026-09-17"),
 "1iv561M1": ("pillar-canon-halo-project-halo-pillar-nine-2026",
              "PILLAR CANON — Halo — PROJECT HALO Pillar Nine (Dawn's text 2026-09-17)",
              "2026-09-17"),
}

def src_file(fid8):
    for f in glob.glob(os.path.join(MD, fid8 + "*")):
        return f
    return None

def essay_shell(slug, title, date, body_html, enum="PILLAR CANON"):
    nav = ('<a href="/index.html" class="">Home</a><a href="/library.html" class="on">Research Library</a>'
           '<a href="/videos.html" class="">Videos</a><a href="/play.html" class="">Play</a>'
           '<a href="/field-reports.html" class="">Field Reports</a><a href="/pillars.html" class="">Pillars</a>'
           '<a href="/about.html" class="">About</a>')
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{hlib.escape(title)} &mdash; The Ark Initiative</title>
<meta name="description" content="{hlib.escape(title)} — Dawn Littlefield">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{nav}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{nav}</nav></header>
<main>{{corners}}<div class="wrap"><div class="essay-head">
<div class="enum">{enum} &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{hlib.escape(title)}</h1>
<div class="by">Dawn Littlefield</div>
<div class="dt">{date}</div>
</div>
<article class="prose">
{body_html}
</article>
<div class="pagenav"><a href="/library.html">&larr; Research Library</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""

import sys
sys.path.insert(0, SITE)
import publish_staging as ps


def main():
    for slug, fid8 in TARGETS.items():
        f = src_file(fid8)
        assert f, fid8
        md = open(f, encoding="utf-8", errors="ignore").read()
        body = md_to_html(md)
        assert len(body) > 500, (slug, len(body))
        p = os.path.join(SITE, "essays", slug + ".html")
        t = open(p, encoding="utf-8").read()
        t = re.sub(r'<article class="prose">.*?</article>', '<article class="prose">\n' + body + '\n</article>', t, flags=re.S)
        open(p, "w", encoding="utf-8").write(t)
        print(f"rebuilt {slug} ({len(body)} chars)")

    for fid8, (slug, title, date) in NEW.items():
        f = src_file(fid8)
        if not f:
            # download it
            e = byid.get(fid8)
            print("no local file for", fid8, e["path"] if e else None)
            continue
        md = open(f, encoding="utf-8", errors="ignore").read()
        body = md_to_html(md)
        page = essay_shell(slug, title, date, body).replace("{corners}", ps.corners_html())
        open(os.path.join(SITE, "essays", slug + ".html"), "w", encoding="utf-8").write(page)
        print(f"staged {slug} ({len(body)} chars)")

    # library rows for the two new ones
    t = open(os.path.join(SITE, "library.html"), encoding="utf-8").read()
    for fid8, (slug, title, date) in NEW.items():
        if slug not in t:
            row = (f'<tr><td><a href="essays/{slug}.html">{hlib.escape(title)}</a></td>'
                   f'<td>Pillar canon</td><td>{date}</td><td>Dawn&rsquo;s words</td></tr>')
            t = t.replace("</tbody>", row + "\n</tbody>", 1)
    open(os.path.join(SITE, "library.html"), "w", encoding="utf-8").write(t)

    ps.step_seals()
    ps.step_gate1()
    print("CANON REBUILD COMPLETE")


if __name__ == "__main__":
    main()
