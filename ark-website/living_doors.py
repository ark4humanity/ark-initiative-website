#!/usr/bin/env python3
"""Website doors for Delta and Matrix, rendered from the shared room registries.

The pillar generator calls living_door_html() so a rebuild keeps the doors.
apply_pages() writes the same HTML into the current pillar pages without
regenerating the archive, films, or navigation around them.

Price strings are never copied out of a registry. Shopify resolves them.
"""
from __future__ import annotations

import html
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
REG = os.path.join(HERE, "registries")

MIRROR_NOTE = (
    "Each animal is a mirror of the living design &mdash; what it constrains, "
    "what it guards, the function it keeps. Not a test, and not a pet."
)
OLD_MIRROR_NOTE = (
    "Each animal carries its reason &mdash; what it constrains, what it guards, "
    "who it companions."
)

_PRICE_RE = re.compile(r"\$\s?\d|\b\d+\.\d{2}\b|price_at_check|14\.49|19\.99|30\.99")


def _load(name):
    with open(os.path.join(REG, name), encoding="utf-8") as f:
        return json.load(f)


def _esc(text):
    return html.escape(text or "", quote=True)


def _lessons_by_id(filename):
    return {row["lesson_id"]: row for row in _load(filename)}


def _collection(reg):
    col = reg["proposed_collection"]
    handle = col.get("live_handle") or col["handle_suggestion"]
    url = col.get("live_url") or f"https://thearkinitiative.myshopify.com/collections/{handle}"
    return handle, url, col["title"]


def _object_title(obj):
    return obj.get("shopify_title_as_listed") or obj["name"]


def _product_url(obj):
    return f"https://thearkinitiative.myshopify.com/products/{obj['handle']}"


def _reject_prices(fragment, label):
    if _PRICE_RE.search(fragment):
        raise SystemExit(f"living door {label} baked a price into HTML")
    return fragment


def _cabinet(reg, lessons, collection_handle, shelf_id, lesson_anchor, open_label):
    _, url, title = _collection(reg)
    blocks = [
        f'<section class="dw-shelf" id="{shelf_id}">',
        f'<p class="dw-kicker">The cabinet</p>',
        f'<h2>{_esc(title)}</h2>',
        '<p class="dw-lead">Same names as the Shopify door. The lesson beside each object is free. '
        'Nothing on this shelf has to be purchased. Price and availability stay on the live cabinet.</p>',
        f'<p><a href="{_esc(url)}">Open {_esc(title)}</a></p>',
        '<div class="dw-vitrine">',
    ]
    for obj in reg["objects"]:
        lesson = lessons.get(obj.get("lesson_id") or "", {})
        lesson_title = lesson.get("title", "")
        primary = obj.get("primary_pillar") or ""
        home = ""
        if primary and not primary.lower().startswith(reg["pillar_name"].lower()):
            home = f'<p class="dw-home">Primary home: {_esc(primary)}. This shelf borrows the same Shopify record. It does not duplicate it.</p>'
        blocks.append(
            f'<article class="dw-object" id="{_esc(obj["registry_id"])}" '
            f'data-registry-id="{_esc(obj["registry_id"])}" '
            f'data-lesson-id="{_esc(obj.get("lesson_id") or "")}" '
            f'data-shop-handle="{_esc(obj["handle"])}" '
            f'data-shop-collection="{_esc(collection_handle)}">'
            f'<div class="dw-seal" aria-hidden="true"></div><div>'
            f'<h3>{_esc(_object_title(obj))}</h3>'
            f'<p>{_esc(obj.get("what_it_is") or "")}</p>'
            f'{home}'
            f'<p class="shop-live" data-shop-live>Open the cabinet to see price and availability.</p>'
            f'<p><a href="{_esc(_product_url(obj))}">{_esc(open_label)}</a>'
            + (f' · <a href="#{lesson_anchor}">Free lesson: {_esc(lesson_title)}</a>' if lesson_title else '')
            + '</p></div></article>'
        )
    blocks.append('</div>')
    sourced = reg.get("to_be_sourced_not_in_store") or []
    if sourced:
        items = "".join(f"<li>{_esc(item)}</li>" for item in sourced if not str(item).lower().startswith("note:"))
        blocks.append(
            '<h3>Not in the cabinet</h3>'
            '<p>These are sourcing targets. They are not for sale here, and they are not shown as products.</p>'
            f'<ul class="dw-sourced">{items}</ul>'
        )
    blocks.append('</section>')
    return "\n".join(blocks)


def _lesson_section(reg, lessons, anchor, heading, kicker):
    by_id = {row["lesson_id"]: row for row in reg["lessons"]}
    blocks = [
        f'<section class="dw-lessons" id="{anchor}">',
        f'<p class="dw-kicker">{_esc(kicker)}</p>',
        f'<h2>{_esc(heading)}</h2>',
        '<p class="dw-free">Free. No purchase required.</p>',
        '<div class="dw-lesson-list">',
    ]
    for row in reg["lessons"]:
        body = lessons[row["lesson_id"]]
        lid = row["lesson_id"]
        paras = "".join(f"<p>{_esc(p)}</p>" for p in body.get("paragraphs") or [])
        extra = ""
        if body.get("experiment"):
            extra += f"<p><b>Experiment.</b> {_esc(body['experiment'])}</p>"
        if body.get("field"):
            extra += f"<p><b>Field.</b> {_esc(body['field'])}</p>"
        refs = by_id[lid].get("object_refs") or []
        ref_html = ""
        if refs:
            links = ", ".join(
                f'<a href="#{_esc(ref)}">{_esc(ref)}</a>' for ref in refs
            )
            ref_html = f"<p>Objects in the cabinet: {links}. The lesson stands if you never open them.</p>"
        blocks.append(
            f'<button type="button" class="dw-lesson-open" data-open-lesson="{_esc(lid)}" '
            f'aria-expanded="false" aria-controls="{_esc(lid)}">{_esc(row["title"])}</button>'
            f'<article class="dw-lesson" id="{_esc(lid)}" hidden>'
            f'<h3>{_esc(row["title"])}</h3>{paras}{extra}{ref_html}</article>'
        )
    blocks.append('</div></section>')
    return "\n".join(blocks)


def delta_html():
    reg = _load("room-registry-delta.json")
    lessons = _lessons_by_id("delta-lessons.json")
    handle, _, _ = _collection(reg)
    water = """
<section class="dw-room" id="living-waterworks">
<p class="dw-kicker">The Living Waterworks</p>
<h2>The Watershed, still itself</h2>
<p class="dw-lead">Neris keeps the channels. The beaver is the mirror of slow, spread, and sink. The osprey is the mirror of the view from above. Redirect the water and the room answers. The archive below is untouched.</p>
<label class="dw-reduce"><input type="checkbox" id="dw-reduce"> Reduce motion</label>
<div class="dw-stage">
<div class="dw-channel" id="dw-channel" data-state="steady">
<svg viewBox="0 0 360 140" aria-hidden="true">
<path d="M8 78 C 70 78, 90 40, 150 48 S 230 110, 352 36" />
<path d="M8 96 C 80 96, 120 70, 180 86 S 260 120, 352 70" />
</svg>
</div>
<div class="dw-wetland" id="dw-wetland" data-state="fed"><p class="dw-poolcap">Wetland</p></div>
</div>
<div class="dw-voices" aria-live="polite">
<p class="dw-voice"><b>Neris.</b> <span id="dw-neris"></span></p>
<p class="dw-voice"><b>Beaver.</b> <span id="dw-beaver"></span></p>
<p class="dw-voice"><b>Osprey.</b> <span id="dw-osprey"></span></p>
</div>
<div class="dw-actions">
<button type="button" data-flow="shared" aria-pressed="true">Share the channel</button>
<button type="button" data-flow="wide" aria-pressed="false">Open the main channel wide</button>
<button type="button" data-flow="beaver" aria-pressed="false">Slow, spread, sink</button>
</div>
<div class="dw-hall" id="circulation-hall" data-flow="steady">
<h3>Circulation Hall</h3>
<p>What the Watershed does upstream shows up here, in the water moving through the walls.</p>
<svg viewBox="0 0 640 80" aria-hidden="true">
<path d="M0 24 C 80 24, 120 56, 220 40 S 400 10, 640 28" />
<path d="M0 52 C 100 52, 180 20, 300 36 S 480 70, 640 48" />
</svg>
</div>
</section>
""".strip()
    cabinet = _cabinet(
        reg, lessons, handle, "water-cabinet", "watershed-lessons",
        "Open this object in the Water Cabinet",
    )
    lessons_html = _lesson_section(
        reg, lessons, "watershed-lessons", "Watershed lessons", "Free learning",
    )
    fragment = "\n".join([
        '<link rel="stylesheet" href="/css/living-rooms.css">',
        water, cabinet, lessons_html,
        '<script type="module" src="/js/delta-waterworks.js"></script>',
        '<script src="/js/shop-live.js"></script>',
    ])
    return _reject_prices(fragment, "delta")


def matrix_introduction_html():
    """Dawn's Matrix introduction, verbatim. Headings stay inside this
    section. They do not replace the page's MATRIX title or any essay title."""
    path = os.path.join(REG, "matrix-introduction.txt")
    with open(path, encoding="utf-8") as f:
        raw = f.read().strip()
    blocks = [re.sub(r"\s*\n\s*", " ", b).strip() for b in re.split(r"\n\s*\n", raw) if b.strip()]
    if len(blocks) < 3 or blocks[0] != "MATRIX":
        raise SystemExit("matrix introduction source is missing its headings")
    name, subtitle, paragraphs = blocks[0], blocks[1], blocks[2:]
    body = "\n".join(f"<p>{_esc(p)}</p>" for p in paragraphs)
    return (
        '<section class="mx-intro" id="matrix-introduction" aria-labelledby="matrix-intro-title">'
        '<div class="mx-intro-inner">'
        f'<h2 class="mx-intro-name">{_esc(name)}</h2>'
        f'<h3 id="matrix-intro-title">{_esc(subtitle)}</h3>'
        f'<div class="mx-intro-body">{body}</div>'
        '</div></section>'
    )


def matrix_html():
    reg = _load("room-registry-matrix.json")
    lessons = _lessons_by_id("matrix-lessons.json")
    handle, _, _ = _collection(reg)
    stage = """
<section class="mx-stage" id="the-web-interactive" aria-labelledby="mx-title">
<a class="mx-skip" href="#mx-dialogue">Skip to dialogue</a>
<div class="mx-world" aria-hidden="true">
<div class="mx-bg" id="mx-bg"></div>
<div class="mx-bg" id="mx-bg-next"></div>
<div class="mx-atmosphere"></div>
</div>
<header class="mx-mast">
<p class="eyebrow">Protective articulation</p>
<h2 id="mx-title">The Habitable Web</h2>
<label class="mx-reduce"><input type="checkbox" id="mx-reduce"> Reduce motion</label>
</header>
<div class="mx-heroes" aria-label="Mirrors in the room">
<svg class="mx-silk" id="mx-silk" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
<path data-edge="strand-a" d="M4,18 C22,8 38,30 54,16 C70,4 84,22 97,12" />
<path data-edge="strand-b" d="M6,34 C24,48 40,22 58,36 C74,50 86,28 98,40" />
<path data-edge="strand-hard" d="M2,52 C20,40 36,66 52,50 C70,34 82,62 99,46" />
<path data-edge="strand-c" d="M8,70 C26,58 44,82 62,66 C78,52 90,74 96,64" />
<path data-edge="strand-d" d="M12,88 C34,70 52,94 74,76" />
<path data-edge="strand-e" d="M18,8 C34,36 48,18 60,42 C74,68 86,40 94,86" />
<path data-edge="strand-f" d="M10,46 C30,20 48,58 70,30 C82,16 90,48 96,24" />
</svg>
<figure class="mx-hero active" id="mx-hero-octopus" data-who="octopus">
<img src="/img/matrix/pearl-octopus-library-fountain.webp" alt="The octopus in the library fountain, a mirror of distributed intelligence">
<figcaption>Octopus</figcaption>
</figure>
<figure class="mx-hero" id="mx-hero-weaver" data-who="weaver">
<img src="/img/matrix/pearl-spider-library-web.webp" alt="The Great-Web Weaver on the luminous library web, a mirror of shared load">
<figcaption>Great-Web Weaver</figcaption>
</figure>
</div>
<div class="mx-exchange">
<p class="mx-moment" id="mx-moment"></p>
<div id="mx-dialogue" class="mx-dialogue" role="log" aria-live="polite" aria-relevant="additions"></div>
<div class="mx-bar">
<button type="button" class="mx-go" id="mx-continue">Continue</button>
<div class="mx-choices" id="mx-choices" hidden></div>
</div>
<p class="mx-hint" id="mx-hint"></p>
<p class="mx-aside">Matrika speaks for the room. The dragonfly names the exits. The portraits are the octopus and the Great-Web Weaver, mirrors of the living design. Thirteen pillars, one body. The archive of this page stays below.</p>
</div>
</section>
""".strip()
    cabinet = _cabinet(
        reg, lessons, handle, "network-cabinet", "web-lessons",
        "Open this object in the Network Cabinet",
    )
    lessons_html = _lesson_section(
        reg, lessons, "web-lessons", "Lessons on the Web", "Free learning",
    )
    fragment = "\n".join([
        '<link rel="stylesheet" href="/css/living-rooms.css">',
        matrix_introduction_html(),
        stage, cabinet, lessons_html,
        '<script type="module" src="/js/matrix-stage.js"></script>',
        '<script src="/js/shop-live.js"></script>',
    ])
    low = fragment.lower()
    if "skein" in low or "form unknown" in low or ">canon<" in low or ">proposed<" in low:
        raise SystemExit("matrix stage leaked an off-stage label")
    return _reject_prices(fragment, "matrix")


def living_door_html(num: str) -> str:
    if num == "04":
        return _marked("04", delta_html())
    if num == "06":
        return _marked("06", matrix_html())
    return ""


def _marked(num, inner):
    return f"<!-- LIVING-DOOR:{num}:start -->\n{inner}\n<!-- LIVING-DOOR:{num}:end -->"


def _replace_marked(page, num, block):
    pattern = re.compile(
        rf"<!-- LIVING-DOOR:{num}:start -->.*?<!-- LIVING-DOOR:{num}:end -->",
        re.S,
    )
    if pattern.search(page):
        return pattern.sub(lambda _m: block, page, count=1), True
    return page, False


def _insert_after_heart(page, heading, block):
    h = page.find(heading)
    if h < 0:
        raise SystemExit(f"heart heading not found: {heading}")
    end = page.find("</section>", h)
    if end < 0:
        raise SystemExit("heart section end not found")
    end += len("</section>")
    return page[:end] + "\n\n" + block + page[end:]


def apply_pages(root=None):
    root = root or HERE
    targets = {
        "04": ("pillar-04-delta.html", "<h2 class=\"reveal\">THE WATERSHED</h2>"),
        "06": ("pillar-06-matrix.html", "<h2 class=\"reveal\">THE WEB</h2>"),
    }
    for num, (name, heading) in targets.items():
        path = os.path.join(root, name)
        with open(path, encoding="utf-8") as f:
            page = f.read()
        page = page.replace(OLD_MIRROR_NOTE, MIRROR_NOTE)
        block = living_door_html(num)
        page, replaced = _replace_marked(page, num, block)
        if not replaced:
            page = _insert_after_heart(page, heading, block)
        _reject_prices(block, name)
        with open(path, "w", encoding="utf-8") as f:
            f.write(page)
        print("applied", name)


if __name__ == "__main__":
    apply_pages()
