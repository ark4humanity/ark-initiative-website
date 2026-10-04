#!/usr/bin/env python3
"""Phase-2 batch 4: stage all new Drive essays (dedupe by content overlap)."""
import os, re, sys, json, html as hlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import publish_staging as ps
import publish_batch2 as b2
from publish_batch3 import md_to_html

SITE = os.path.dirname(os.path.abspath(__file__))
NEW = json.load(open(os.path.join(SITE, "phase2/md/new_index.json")))

# filename-keyword -> pillar page
PILLAR_MAP = [
    ("halo", "pillar-02-halo.html"), ("ark4 & halo", "pillar-02-halo.html"),
    ("pillar 9", "pillar-02-halo.html"), ("petal system", "pillar-02-halo.html"),
    ("matrix", "pillar-06-matrix.html"), ("vagus", "pillar-03-vagus.html"),
    ("living ground", "pillar-11-terra.html"), ("terra", "pillar-11-terra.html"),
    ("pillar xiii", "pillar-09-vega.html"), ("vega", "pillar-09-vega.html"),
    ("symbiosis", "pillar-13-symbiosis.html"), ("circulatory", "pillar-04-delta.html"),
    ("delta", "pillar-04-delta.html"), ("asherah", "pillar-05-asherah.html"),
    ("mother they couldn", "pillar-05-asherah.html"), ("soma", "pillar-12-soma.html"),
    ("exchange", "pillar-08-exchange.html"), ("aeon", "pillar-07-aeon.html"),
    ("ark pillar", "pillar-10-ark.html"),
]
FIELD_KEYS = ["captain", "biosphere report", "temperature", "soil is sour", "synkron",
              "frenchie", "egg that took", "feed itself", "garden corrects", "garden becomes a fortress",
              "one dead creature"]

def site_corpus():
    txt = []
    for root, _, fs in os.walk(SITE):
        if "__pycache__" in root or "phase2" in root or ".git" in root:
            continue
        for f in fs:
            if f.endswith(".html"):
                try:
                    txt.append(open(os.path.join(root, f), encoding="utf-8", errors="ignore").read())
                except Exception:
                    pass
    t = hlib.unescape(re.sub(r"\s+", " ", " ".join(txt).lower()))
    return t

def parse_frontmatter(t):
    meta = {}
    if t.startswith("---"):
        end = t.find("---", 3)
        if end > 0:
            for line in t[3:end].split("\n"):
                m = re.match(r'(\w+):\s*"?([^"]*)"?\s*$', line.strip())
                if m:
                    meta[m.group(1)] = m.group(2)
            t = t[end + 3:]
    return meta, t

def slugify(title):
    s = title.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:60].strip("-")

def overlap_ratio(t, corpus):
    sents = [s.strip() for s in re.split(r"[.!?]\s+", re.sub(r"\s+", " ", t)) if len(s.split()) >= 10]
    if not sents:
        return 0
    sample = sents[:40]
    hits = sum(1 for s in sample if re.sub(r"[^a-z0-9 ]", "", s.lower())[:80] in corpus)
    return hits / len(sample)

def main():
    corpus = site_corpus()
    staged, skipped = [], []
    lib_rows = []
    for e in NEW:
        raw = open(e["file"], encoding="utf-8", errors="ignore").read()
        meta, body_md = parse_frontmatter(raw)
        title = meta.get("title", "").strip() or re.sub(r"^ARTICLE\s*[—–-]\s*", "",
                 e["path"].split("/")[-1].rsplit(".", 1)[0]).strip()
        title = re.sub(r"\s*\(Dawn Littlefield[^)]*\)\s*$", "", title).strip()
        date = meta.get("date", "")
        if not date:
            m = re.search(r"(19|20)\d\d-\d\d-\d\d", e["path"])
            date = m.group(0) if m else ""
        # strip leading "# title" + byline from body
        body_md = re.sub(r"^# .*\n+", "", body_md, count=1)
        body_md = re.sub(r"^\*Dawn Littlefield.*\n+", "", body_md, count=1)
        ratio = overlap_ratio(body_md, corpus)
        if ratio > 0.5:
            skipped.append((title, f"content overlap {ratio:.0%}"))
            continue
        slug = slugify(title) + "-" + date[:4] if date else slugify(title)
        out = os.path.join(SITE, "essays", slug + ".html")
        if os.path.exists(out):
            skipped.append((title, "slug exists"))
            continue
        body = md_to_html(body_md)
        prov = meta.get("provenance", "")
        ctx = ""
        if "facebook" in prov.lower():
            ctx = ('<div class="archive-note"><p><strong>Archive context.</strong> '
                   'Recovered from Dawn\u2019s Facebook timeline and preserved verbatim.</p></div>\n')
        page = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{hlib.escape(title)} &mdash; The Ark Initiative</title>
<meta name="description" content="{hlib.escape(title)} — Dawn Littlefield">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(b2.NAV)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(b2.NAV)}</nav></header>
<main>{ps.corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">RECOVERED ARTICLE &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{hlib.escape(title)}</h1>
<div class="by">Dawn Littlefield</div>
<div class="dt">{hlib.escape(date)}</div>
</div>

<article class="prose">{ctx}{body}</article>
<div class="pagenav"><a href="/library.html">&larr; Research Library</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""
        open(out, "w", encoding="utf-8").write(page)
        staged.append((slug, title, date, e["path"]))
        shelf = "Essays & Meditations"
        low = (title + " " + e["path"]).lower()
        for key, pillar in PILLAR_MAP:
            if key in low:
                shelf = "Pillar Doctrine"
                break
        if any(k in low for k in FIELD_KEYS):
            shelf = "Field Reports & Doctrine"
        lib_rows.append(
            f'<tr><td data-label="Work"><a href="essays/{slug}.html">{hlib.escape(title)}</a></td>'
            f'<td data-label="Shelf">{shelf}</td><td data-label="Kind">RECOVERED ARTICLE</td>'
            f'<td data-label="Date">{hlib.escape(date)}</td></tr>')
        print("staged", slug)
    # library rows
    if lib_rows:
        t = open("library.html", encoding="utf-8").read()
        marker = "<!-- PUB-BATCH4 -->"
        block = marker + "\n" + "\n".join(lib_rows)
        if marker not in t:
            t = t.replace("</tbody>", block + "\n</tbody>", 1)
        else:
            t = t.replace(marker, block, 1)
        open("library.html", "w", encoding="utf-8").write(t)
        print("patched library.html (%d rows)" % len(lib_rows))
    # pillar placements
    for slug, title, date, path in staged:
        low = (title + " " + path).lower()
        for key, pillar in PILLAR_MAP:
            if key in low:
                p = os.path.join(SITE, pillar)
                t = open(p, encoding="utf-8").read()
                link = f'<a href="essays/{slug}.html">{hlib.escape(title)}</a>'
                if link not in t and slug not in t:
                    # append to a works list if present, else before </main>-ish anchor
                    item = f'<li>{link} <span class="dim">({hlib.escape(date)})</span></li>'
                    if '<ul class="works">' in t or "<ul>" in t:
                        t = t.replace("</ul>", item + "\n</ul>", 1)
                    open(p, "w", encoding="utf-8").write(t)
                    print(f"  -> {pillar}")
                break
    ps.step_seals()
    ps.step_gate1()
    print(f"BATCH4: staged {len(staged)}, skipped {len(skipped)}")
    for title, why in skipped:
        print("  skipped:", title[:60], "-", why)
    json.dump([s[0] for s in staged], open(os.path.join(SITE, "phase2/staged_essays.json"), "w"), indent=1)

if __name__ == "__main__":
    main()
