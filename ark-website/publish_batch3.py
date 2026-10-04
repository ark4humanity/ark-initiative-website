#!/usr/bin/env python3
"""Phase-2 batch 3: four new essays from the Drive sweep + two PDF links.
Reuses build_pillars.render + publish_staging seals/gate1."""
import os, re, sys, shutil
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_pillars as bp
import publish_staging as ps

SITE = os.path.dirname(os.path.abspath(__file__))
SRC = "/tmp/p2"

def md_to_html(md):
    lines = md.split("\n")
    # drop the header block (title/source/note lines) up to first ---
    out = []
    i = 0
    while i < len(lines) and lines[i].strip() != "---":
        i += 1
    i += 1  # skip ---
    body = lines[i:]
    # also cut everything after a trailing "---\n## Attached" etc is kept; fine.
    html = []
    in_ul = False
    in_ol = False
    def close_lists():
        nonlocal in_ul, in_ol
        if in_ul: html.append("</ul>"); in_ul = False
        if in_ol: html.append("</ol>"); in_ol = False
    def fmt(t):
        t = t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
        t = re.sub(r"\*(.+?)\*", r"<em>\1</em>", t)
        return t
    for ln in body:
        s = ln.strip()
        if not s:
            close_lists(); continue
        if s == "---":
            close_lists(); html.append("<hr>"); continue
        if s.startswith("# "):
            close_lists(); continue  # title handled separately
        if s.startswith("## "):
            close_lists(); html.append(f"<h3>{fmt(s[3:])}</h3>"); continue
        if re.match(r"^SECTION \d+", s):
            close_lists(); html.append(f"<h3>{fmt(s)}</h3>"); continue
        if s.startswith("- "):
            if not in_ul: html.append("<ul>"); in_ul = True
            html.append(f"<li>{fmt(s[2:])}</li>"); continue
        if re.match(r"^\d+\.\s", s):
            if not in_ol: html.append("<ol>"); in_ol = True
            html.append(f"<li>{fmt(re.sub(r'^\\d+\\.\\s*', '', s))}</li>"); continue
        if s.startswith("**") and s.endswith("**") and len(s) > 4 and ":" not in s[:40]:
            close_lists(); html.append(f"<h3>{fmt(s.strip('*'))}</h3>"); continue
        close_lists()
        html.append(f"<p>{fmt(s)}</p>")
    close_lists()
    return "\n".join(html)

PAGES = [
    dict(slug="two-days-in-borrego-2026",
         file=f"{SRC}/two-days-borrego.md",
         title="Two Days in Borrego — Ark Unit 1 Systems Report, Days 55–56",
         meta="Field Report · Ark Unit 1, Borrego Springs · 2026-07-27",
         context=("The first proof-of-work field dossier: real Ark Unit 1 data across July 26–27, 2026 — "
                   "107.6°F heat, a battery reconfiguration, coop cooling, four hens, and one autonomous vacuum "
                   "with questionable mission discipline."),
         banner_img="img/two-days-borrego.jpg",
         library=("FIELD REPORTS", "Field Reports & Doctrine"),
         pillars=["pillar-11-terra.html", "pillar-04-delta.html"],
         crosslinks=[("field-reports.html", "Field Reports"),
                     ("pillar-11-terra.html", "Terra")]),
    dict(slug="raising-aura-part1-2026",
         file=f"{SRC}/raising-aura-1.md",
         title="Raising Aura, Part 1 of 3 — Love Is Infrastructure",
         meta="Ark Report · X @CreationsArk · 2026-09-05",
         context=("Part 1 of Dawn's three-part Raising Aura series: what if the first thing we teach "
                   "artificial intelligence is love? Love, like peace, is infrastructure — you have to build it."),
         banner_img=None,
         library=("DOCTRINE", "Foundational Doctrine"),
         pillars=["pillar-01-aura-prime.html"],
         crosslinks=[("index.html", "Home"), ("pillar-01-aura-prime.html", "Aura Prime")]),
    dict(slug="thirteen-pillars-intentional-2025",
         file=f"{SRC}/thirteen-pillars-intentional.md",
         title="The 13 Pillars of the Ark — Building Intentional Communities",
         meta="Dawn Littlefield · November 2025 · Historical canon",
         context=("An earlier evolutionary stage of the pillar concept — the Weave / Eden Frequency framework. "
                   "Preserved exactly as written per the naming-evolution rule; its thirteen pillars differ from "
                   "the current canon. Filed as historical canon, cross-referenced, never merged."),
         banner_img=None,
         library=("DOCTRINE", "Pillar Doctrine — Historical Canon"),
         pillars=[],
         crosslinks=[("pillars.html", "The Thirteen Pillars")]),
    dict(slug="seeing-the-layers-2026",
         file=f"{SRC}/seeing-the-layers.md",
         title="You're Not Crazy, You're Seeing the Layers",
         meta="Dawn Littlefield · 2026-02-17",
         context=("The awakening piece: the veil thinning, layered consciousness, déjà vu, actor-and-observer "
                   "dual awareness — and a practical guide to navigating multiple realities. Ends with tea."),
         banner_img=None,
         library=("ESSAYS", "Essays & Meditations"),
         pillars=[],
         crosslinks=[("index.html", "Home")]),
]

def build_pages():
    import publish_batch2 as b2
    for p in PAGES:
        md = open(p["file"], encoding="utf-8").read()
        body = md_to_html(md)
        ctx = (f'<div class="archive-note"><p><strong>Archive context.</strong> {p["context"]}</p></div>\n'
               if p["context"] else "")
        banner = f'<img src="/{p["banner_img"]}" alt="" style="width:100%;border-radius:12px;display:block;margin:0 0 1.6em">' if p["banner_img"] else ""
        enum = p["library"][0]
        page = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]} &mdash; The Ark Initiative</title>
<meta name="description" content="{p["context"][:150]}">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(b2.NAV)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(b2.NAV)}</nav></header>
<main>{ps.corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">{enum} &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{p["title"]}</h1>
<div class="by">Dawn Littlefield</div>
<div class="dt">{p["meta"]}</div>
</div>

<article class="prose">{banner}{ctx}{body}</article>
<div class="pagenav"><a href="/library.html">&larr; Research Library</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""
        open(os.path.join(SITE, "essays", p["slug"] + ".html"), "w", encoding="utf-8").write(page)
        print("wrote essays/" + p["slug"] + ".html |", p["title"][:50])

def step_pdfs():
    os.makedirs("files", exist_ok=True)
    for src, dst in [("night-packet.pdf", "doctrine-thirteen-pillars-night-packet-2026-09-18.pdf"),
                     ("nonprofit-manifesto.pdf", "ark-nonprofit-manifesto-2026-09-16.pdf")]:
        shutil.copy2(f"{SRC}/{src}", f"files/{dst}")
        print("copied files/" + dst)
    # link night packet from pillars.html
    t = open("pillars.html", encoding="utf-8").read()
    link = ('<p class="lede reveal">The interactive blueprint — the full Night Packet as a PDF: '
            '<a href="files/doctrine-thirteen-pillars-night-packet-2026-09-18.pdf">Thirteen Pillars Night Packet '
            '(2026-09-18)</a>. Dawn\u2019s rulings on the canon, preserved as decided.</p>')
    if "night-packet" not in t:
        t = t.replace("</h2>", "</h2>\n" + link, 1)
        open("pillars.html", "w", encoding="utf-8").write(t)
        print("patched pillars.html (night packet PDF)")
    # link manifesto from index
    t = open("index.html", encoding="utf-8").read()
    mlink = '<a href="files/ark-nonprofit-manifesto-2026-09-16.pdf">Nonprofit Manifesto (2026-09-16)</a>'
    if "nonprofit-manifesto" not in t:
        # append near footer mission area; simple: before </main> or at end of a section
        t = t.replace("</main>", f'<p style="text-align:center">{mlink}</p>\n</main>', 1) if "</main>" in t else t + mlink
        open("index.html", "w", encoding="utf-8").write(t)
        print("patched index.html (manifesto PDF)")

def step_field_reports_link():
    t = open("field-reports.html", encoding="utf-8").read()
    if "two-days-in-borrego-2026.html" not in t:
        old = "<p>Two days of real data from the desert test site. 104&deg;F outside; the living systems barely touched the grid.</p>"
        new = (old + '\n<p><a href="essays/two-days-in-borrego-2026.html">Read the full ten-section systems report &rarr;</a></p>')
        assert old in t
        t = t.replace(old, new, 1)
        open("field-reports.html", "w", encoding="utf-8").write(t)
        print("patched field-reports.html (two-days essay link)")

def step_library():
    t = open("library.html", encoding="utf-8").read()
    rows = []
    for p in PAGES:
        cat, shelf = p["library"]
        rows.append(
            f'<tr><td data-label="Work"><a href="essays/{p["slug"]}.html">{p["title"]}</a></td>'
            f'<td data-label="Shelf">{shelf}</td>'
            f'<td data-label="Kind">{cat}</td>'
            f'<td data-label="Date">{p["meta"].split("·")[-1].strip()}</td></tr>')
    marker = "<!-- PUB-BATCH3 -->"
    block = marker + "\n" + "\n".join(rows)
    if marker not in t:
        t = t.replace("</tbody>", block + "\n</tbody>", 1)
    else:
        t = t.replace(marker, block, 1)
    open("library.html", "w", encoding="utf-8").write(t)
    print("patched library.html (4 rows)")

def main():
    build_pages()
    step_pdfs()
    step_field_reports_link()
    step_library()
    ps.step_seals()
    ps.step_gate1()
    print("PUBLISH BATCH3 COMPLETE")

if __name__ == "__main__":
    main()
