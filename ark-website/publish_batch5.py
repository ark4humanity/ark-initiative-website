#!/usr/bin/env python3
"""Phase-2 batch 5: build collection gallery pages from downloaded Drive images."""
import os, sys, json, re, html as hlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import publish_staging as ps
import publish_batch2 as b2
NAV_ROOT = [x.replace('href="../', 'href="/') for x in b2.NAV]

SITE = os.path.dirname(os.path.abspath(__file__))
DL = json.load(open(os.path.join(SITE, "phase2/gallery_dl.json")))

# collection folder -> (page slug, title, blurb, hub link)
COLLECTIONS = {
    "Wisdom Series": ("gallery-wisdom-series", "The Wisdom Series",
        "Numbered wisdom posters from the Ark's teaching wall.", "library.html"),
    "Dragons & Guardians": ("gallery-dragons-guardians", "Dragons & Guardians",
        "The dragons are guardianship symbolism — protection with teeth.", "index.html"),
    "Tree of Life & Wardrobe": ("gallery-tree-of-life", "Tree of Life & Wardrobe",
        "The Tree of Life, above and below — the Ark's evergreen motif line.", "index.html"),
    "Asherah Reports": ("gallery-ashera-reports", "Asherah Reports",
        "Field notes and artwork from the Asherah line.", "pillar-05-asherah.html"),
    "First Light & Coming 2026": ("gallery-first-light", "First Light — Coming 2026",
        "The coming-attraction posters.", "index.html"),
    "Manifesto & Core": ("gallery-manifesto-core", "Manifesto & Core",
        "The founding statements — what the Ark is and why it exists.", "index.html"),
    "Personal Storytelling": ("gallery-personal-storytelling", "Personal Storytelling",
        "Dawn's origin story, told in posters and photographs.", "field-reports.html"),
    "Poultry Palace — Building Eden for Hens": ("gallery-poultry-palace", "Poultry Palace — Building Eden for Hens",
        "The complete Eden for hens, sheet by sheet.", "field-reports.html"),
    "Rule of the Ark": ("gallery-rule-of-the-ark", "Rule of the Ark",
        "The numbered Rule of the Ark series.", "library.html"),
    "Field Reports & Doctrine": ("gallery-field-report-art", "Field Report Art",
        "Posters and plates from the field-report dossiers.", "field-reports.html"),
}

ARCHIVE = {
    "02 - Archive - 2024 TikTok Campaign": ("gallery-archive-2024", "Archive — 2024 TikTok Campaign",
        "The 2024 campaign posters, preserved as the archive.", "library.html"),
    "03 - Archive - 2023": ("gallery-archive-2023", "Archive — 2023",
        "The earliest posters, preserved as the archive.", "library.html"),
}

def collection_of(path):
    parts = path.split("/")
    try:
        i = parts.index("01 - Current Canon")
        return parts[i + 1]
    except (ValueError, IndexError):
        for a in ARCHIVE:
            if a in path:
                return a
    return None

def clean_caption(path):
    n = path.split("/")[-1]
    n = os.path.splitext(n)[0]
    n = re.sub(r"\s*\(?(19|20)\d\d[-/]\d\d[-/]\d\d\)?\s*$", "", n).strip()
    n = re.sub(r"^(POSTER|FIELD REPORT( IMAGE)?|ARTWORK|PLATE)\s*[—–-]\s*", "", n, flags=re.I).strip()
    return n[:90]

def build_gallery(slug, title, blurb, hub, items):
    cards = []
    for e in items:
        cap = clean_caption(e["path"])
        e_local = "/" + e["local"].lstrip("/")
        cards.append(
            f'<a class="gcard" href="{e_local}" target="_blank" rel="noopener">'
            f'<img loading="lazy" src="{e_local}" alt="{hlib.escape(cap)}">'
            f'<span>{hlib.escape(cap)}</span></a>')
    grid = "\n".join(cards)
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{hlib.escape(title)} &mdash; The Ark Initiative</title>
<meta name="description" content="{hlib.escape(blurb)}">
<link rel="stylesheet" href="/css/style.css">
<style>
.gal-grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-top:20px}}
.gcard{{display:block;background:#fbf6ea;border:1px solid #e2d5b8;border-radius:10px;overflow:hidden;text-decoration:none;color:#3a2f1a}}
.gcard img{{width:100%;height:220px;object-fit:cover;display:block;background:#efe7d2}}
.gcard span{{display:block;padding:10px 12px;font-size:.86em;line-height:1.4}}
.gcard:hover{{border-color:#b98a1f}}
@media(max-width:600px){{.gal-grid{{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}}.gcard img{{height:150px}}}}
</style><!-- ark-fixes-2026-09-26 --><link rel="stylesheet" href="/css/ark-fixes.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(NAV_ROOT)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(NAV_ROOT)}</nav></header>
<main>{ps.corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">THE GALLERIES &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{hlib.escape(title)}</h1>
<div class="by">{hlib.escape(blurb)}</div>
<div class="dt">{len(items)} pieces &middot; tap any piece to view full size</div>
</div>
<div class="gal-grid">
{grid}
</div>
<div class="pagenav"><a href="{hub}">&larr; Back</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""

def main():
    by_coll = {}
    misc = []
    for e in DL:
        if "local" not in e:
            continue
        c = collection_of(e["path"])
        if c and (c in COLLECTIONS or c in ARCHIVE):
            by_coll.setdefault(c, []).append(e)
        else:
            misc.append(e)
    print("misc (no collection):", len(misc))
    for m in misc[:10]:
        print("  ", m["path"][:80])
    index_entries = []
    for coll, items in sorted(by_coll.items()):
        meta = COLLECTIONS.get(coll) or ARCHIVE[coll]
        slug, title, blurb, hub = meta
        hub = hub if hub.startswith(("/","http","#")) else "/" + hub
        page = build_gallery(slug, title, blurb, hub, items)
        out = os.path.join(SITE, slug + ".html")
        open(out, "w", encoding="utf-8").write(page)
        index_entries.append((slug, title, blurb, len(items)))
        print(f"gallery {slug}.html ({len(items)} pieces)")
    # gallery index section on library.html
    t = open(os.path.join(SITE, "library.html"), encoding="utf-8").read()
    marker = "<!-- PUB-GALLERIES -->"
    cards = "\n".join(
        f'<a class="card" href="{s}.html"><div class="pad"><h3>{hlib.escape(ti)}</h3>'
        f'<p>{hlib.escape(b)} &mdash; {n} pieces.</p></div></a>'
        for s, ti, b, n in index_entries)
    block = (f'{marker}\n<section class="sec"><div class="wrap">\n'
             f'<div class="eyebrow reveal">THE GALLERIES</div>\n<h2 class="reveal">POSTER COLLECTIONS</h2>\n'
             f'<div class="cards">\n{cards}\n</div></div></section>')
    if marker not in t:
        t = t.replace("</main>", block + "\n</main>", 1)
    else:
        # replace existing block
        t = re.sub(re.escape(marker) + r".*?</section>", block, t, flags=re.S)
    open(os.path.join(SITE, "library.html"), "w", encoding="utf-8").write(t)
    print("patched library.html (gallery index)")
    ps.step_seals()
    ps.step_gate1()
    print("BATCH5 COMPLETE")

if __name__ == "__main__":
    main()
