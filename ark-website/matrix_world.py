#!/usr/bin/env python3
"""Matrix world for pillar 06.

Reads Dawn's introduction, the verified reading list, and the live product
registry, then splices one world into the current Matrix page. Other pillars
are left alone. Run again after a pillar rebuild:

    python3 matrix_world.py
"""
from __future__ import annotations

import html
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
REG = os.path.join(HERE, "registries")
PAGE = os.path.join(HERE, "pillar-06-matrix.html")
START = "<!-- MATRIX-WORLD:start -->"
END = "<!-- MATRIX-WORLD:end -->"
SHOP_PAGE = "https://thearkinitiative.myshopify.com/pages/matrix-the-habitable-web"
SHOP_COLLECTION = "https://thearkinitiative.myshopify.com/collections/matrix-the-network-cabinet"

ROOMS = [
    ("orientation-node", "Orientation Node"),
    ("continuity-gallery", "Continuity Gallery"),
    ("kinetic-studio", "Kinetic Studio"),
    ("cosmic-web", "Cosmic Web"),
    ("reading-hall", "Reading Hall"),
    ("living-door", "Living Door"),
    ("network-cabinet", "Network Cabinet"),
]


def esc(text):
    return html.escape(text or "", quote=True)


def load(name):
    with open(os.path.join(REG, name), encoding="utf-8") as f:
        return json.load(f)


def introduction():
    with open(os.path.join(REG, "matrix-introduction.txt"), encoding="utf-8") as f:
        raw = f.read().strip()
    blocks = [re.sub(r"\s*\n\s*", " ", b).strip() for b in re.split(r"\n\s*\n", raw) if b.strip()]
    if blocks[0] != "MATRIX" or len(blocks) < 3:
        raise SystemExit("matrix introduction is incomplete")
    body = "\n".join(f"<p>{esc(p)}</p>" for p in blocks[2:])
    return f"""<section class="mw-intro" id="matrix-introduction" aria-labelledby="matrix-intro-title">
<div class="mw-read">
<h2 class="mw-kicker">{esc(blocks[0])}</h2>
<h3 id="matrix-intro-title">{esc(blocks[1])}</h3>
{body}
</div>
</section>"""


def hall():
    links = "\n".join(
        f'<a class="mw-door" href="#{rid}">{esc(name)}</a>' for rid, name in ROOMS
    )
    return f"""<nav class="mw-hall" id="the-hall" aria-label="Rooms of Matrix">
<p class="mw-kicker">The hall</p>
<h2>Walk the library</h2>
<p>Six rooms, then the door where the web answers your hands. Each animal here is a mirror of the living design: many minds, one web. The cabinet is the same collection as the shop. The reading is free. No purchase required.</p>
<div class="mw-doors">{links}</div>
<p class="mw-exits"><a href="{SHOP_PAGE}">Shopify room</a> · <a href="{SHOP_COLLECTION}">Network Cabinet</a> · <a href="/pillar-04-delta.html">Delta, next door</a> · <a href="/pillar-02-halo.html">HALO, when you want the perimeter</a></p>
<label class="mw-reduce"><input type="checkbox" id="mw-reduce"> Reduce motion</label>
</nav>"""


def exits(current):
    ids = [r[0] for r in ROOMS]
    i = ids.index(current)
    prev_id, prev_name = ROOMS[(i - 1) % len(ROOMS)]
    next_id, next_name = ROOMS[(i + 1) % len(ROOMS)]
    return (
        f'<p class="mw-exits"><a href="#the-hall">The hall</a> · '
        f'<a href="#{prev_id}">← {esc(prev_name)}</a> · '
        f'<a href="#{next_id}">{esc(next_name)} →</a> · '
        f'<a href="{SHOP_PAGE}#{current}">This room on Shopify</a></p>'
    )


def products_for(room):
    items = []
    for product in load("matrix-products-live.json")["products"]:
        if product["room"] != room:
            continue
        url = f"https://thearkinitiative.myshopify.com/products/{product['handle']}"
        items.append(
            f'<article class="mw-object" data-shop-handle="{esc(product["handle"])}" '
            f'data-shop-collection="matrix-the-network-cabinet">'
            f'<img src="{esc(product["image"])}" alt="{esc(product["alt"])}">'
            f'<div><h3>{esc(product["title"])}</h3>'
            f'<p class="mw-price" data-shop-price>{esc(product["price"])}</p>'
            f'<p><a href="{esc(url)}">Open this object</a></p></div></article>'
        )
    if not items:
        raise SystemExit(f"room {room} has no products")
    return '<div class="mw-vitrine">' + "".join(items) + "</div>"


def room(rid, title, image, alt, paragraphs, voices, activity, with_products=True):
    paras = "\n".join(f"<p>{esc(p)}</p>" for p in paragraphs)
    said = "\n".join(
        f'<p class="mw-voice"><b>{esc(who)}.</b> {esc(line)}</p>' for who, line in voices
    )
    shelf = products_for(rid) if with_products else ""
    fig = ""
    if image:
        fig = f'<figure class="mw-figure"><img src="{esc(image)}" alt="{esc(alt)}"></figure>'
    return f"""<section class="mw-room" id="{rid}" aria-labelledby="{rid}-title">
{fig}
<div class="mw-read">
<h2 id="{rid}-title">{esc(title)}</h2>
{paras}
{said}
{activity}
{shelf}
{exits(rid)}
</div>
</section>"""


def orientation():
    activity = """<div class="mw-activity" id="mw-orient">
<h3>Turn in the field</h3>
<p id="mw-orient-line">The needle is quiet. The room is waiting for you to move.</p>
<div class="mw-actions">
<button type="button" data-face="field">Turn toward the shared field</button>
<button type="button" data-face="hero">Ask one arm to be the hero</button>
</div>
</div>"""
    return room(
        "orientation-node",
        "Orientation Node",
        "/img/matrix-octopus-library.jpg",
        "The octopus in the library, many arms in the light",
        [
            "A compass needle does not invent north. It listens for a field it does not own, and it keeps that relationship while you turn. The octopus in this room works the same way at another scale: useful intelligence lives out in the arms, close to the touch, not locked in a single headquarters.",
            "Matrika keeps the count. Eight arms. Four wings. Zero blind spots. She does not take the needle for herself. The dragonfly already sees the scenic turn, the honest turn, and the turn you make when someone calls your name from the hall.",
            "Hold the idea before you hold the object. North is a relationship. The moment a crew elects one person to be the only compass, the room gets smaller. The moment the field is shared, you can turn without getting lost.",
        ],
        [
            ("Octopus", "Arm six is still guarding a bookmark. The others already felt the room swing. I refuse to elect a headquarters. Bureaucracy tastes like unfinished kelp."),
            ("Dragonfly", "Left is brighter. Right is quieter. The way up is showing off. All three remain open while you decide."),
            ("Matrika", "Quick version: ten thousand things at once, and I see all of them. You are allowed to start with one."),
        ],
        activity,
    )


def continuity():
    activity = """<div class="mw-activity" id="mw-overlap">
<h3>Three circles</h3>
<p id="mw-overlap-line">Self, neighbor, and the wider world are still separate sketches.</p>
<div class="mw-actions">
<button type="button" data-ring="self">Name what is only yours</button>
<button type="button" data-ring="overlap">Find the overlap</button>
<button type="button" data-ring="release">Let one difference stay</button>
</div>
</div>"""
    return room(
        "continuity-gallery",
        "Continuity Gallery",
        "/img/matrix-spider-web.jpg",
        "The Great-Web Weaver on a luminous web in the library",
        [
            "Continuity is not sameness. A web stays one web while every strand keeps its own tension. Maps in this gallery lay lives over lives — waters, creatures, eras — and the overlap is the part Matrix protects. Difference is not a flaw in the pattern. It is how the pattern breathes.",
            "A healthy relationship needs room. A strong community needs a boundary that protects without imprisoning. A civilization that can change without tearing itself apart is already practicing fascia: connection with slack in it, so the next movement does not rip the cloth.",
            "Look at a thread that runs from one life into another. Ask what would be crushed if the thread were pulled tight, and what would be lost if it were cut. The gallery is for that question. The posters on the wall are teaching objects. The lesson stands if you never take one home.",
        ],
        [
            ("Great-Web Weaver", "If one strand boasts, I ease its ego and leave the load with the neighbors. Jewelry is optional. Structure is not."),
            ("Matrika", "Nothing here has to surrender its name to belong to the web."),
        ],
        activity,
    )


def kinetic():
    activity = """<div class="mw-activity" id="mw-load">
<h3>Share the load</h3>
<p id="mw-load-line">Three strands are at rest. The weight has not chosen them yet.</p>
<svg class="mw-strands" viewBox="0 0 360 80" aria-hidden="true">
<path data-strand="a" d="M10 20 C 80 20, 120 50, 180 28 S 280 10, 350 24" />
<path data-strand="b" d="M10 40 C 90 40, 140 18, 200 42 S 290 60, 350 36" />
<path data-strand="c" d="M10 62 C 70 62, 150 40, 230 58 S 300 70, 350 52" />
</svg>
<div class="mw-actions">
<button type="button" data-share="one">Pile the weight on one strand</button>
<button type="button" data-share="all">Share it across the three</button>
</div>
</div>"""
    return room(
        "kinetic-studio",
        "Kinetic Studio",
        "/img/muse-spider.png",
        "The weaver, pale and jeweled, against the library web",
        [
            "Pressure that can travel is pressure that can be survived. A kinetic globe is a crowd of wooden parts that only becomes a world when they turn together. No single peg is the planet. The motion is the agreement.",
            "Cascade failure is what happens when stress has nowhere else to go. One station dark, and the whole grid follows. One throat to cut, and an empire calls that efficiency. This studio is the opposite practice: inner and outer spheres, pieces that lock and still flex, a load that is allowed to move.",
            "Roll any round thing under your hand and mark one point of contact. Keep rolling. The contact migrates. That migration is the whole lesson. The wooden models on the shelf make the same lesson something you can build with your hands. You can also learn it with an orange and a patient afternoon.",
        ],
        [
            ("Great-Web Weaver", "Martyrs make fragile buildings. I would rather have three humble strands than one heroic one."),
            ("Octopus", "Arms two through five would like it known that they filed the workaround before the speech was over."),
        ],
        activity,
    )


def cosmic():
    return room(
        "cosmic-web",
        "Cosmic Web",
        "/img/muse-spider-v2.png",
        "The sentinel spider, eight eyes open in the library",
        [
            "Galaxies gather along filaments. The deep field is not a cage of stars. It is a web of free lights, bright because they are many, held because the dark between them is also structure. Belonging at that scale does not look like captivity.",
            "The dragonfly's eyes are a chorus of channels, different regions receiving the room at once. Zero blind spots is not a boast. It is a way of refusing to let one glance become the whole truth. She is already naming the exits.",
            "Choose three bright points in any deep-field photograph you can find in a public gallery, or on the plates of the necklace in this alcove. Imagine each point as a life with its own errand. What thread between them would make the whole kinder without making any one of them smaller?",
        ],
        [
            ("Dragonfly", "I do not pan a camera. I receive the room. Scenic, honest, and the way you take when the kettle screams — all still open."),
            ("Matrika", "The four wings in my line are hers. I keep the oath. I do not wear her eyes."),
        ],
        """<div class="mw-activity"><h3>Three lights</h3>
<p>Write the three names, then the one thread. If the thread requires someone to shrink, it is not a Matrix thread. Draw it again.</p></div>""",
        with_products=True,
    )


def reading():
    works = load("matrix-library.json")["works"]
    items = []
    for work in works:
        links = " · ".join(
            f'<a href="{esc(link["url"])}">{esc(link["label"])}</a>' for link in work["links"]
        )
        items.append(f"<li><b>{esc(work['kind'])}.</b> {esc(work['citation'])} {links}</li>")
    activity = """<div class="mw-activity"><h3>A free hour</h3>
<ol>
<li>Lee's aquarium, long enough to hear him separate a monster story from an animal.</li>
<li>Fabre or Emerton on the web as a made thing: catch, hold, and release.</li>
<li>Sivitilli, Smith, and Gire on arms that decide near the touch.</li>
<li>Ruck on a dragonfly eye that sees in more than one register.</li>
<li>The two Ark essays already shelved on this page, fascia and cascade, in Dawn's words.</li>
</ol>
<p>Close the hour with one sentence: “A healthy connection leaves room for ______.” The blank is yours. The library did not charge you for it.</p>
</div>"""
    return f"""<section class="mw-room mw-reading" id="reading-hall" aria-labelledby="reading-hall-title">
<a id="web-lessons"></a>
<div class="mw-read">
<h2 id="reading-hall-title">Reading Hall</h2>
<p>These shelves are free. Natural history and research are other people's works, named and linked so you can read them yourself. The Ark essays are Dawn's Matrix teaching. They are not the same shelf, and they do not pretend to be.</p>
<ol class="mw-bib">{''.join(items)}</ol>
{activity}
{exits('reading-hall')}
</div>
</section>"""


def stage():
    return """<section class="mw-room" id="living-door" aria-labelledby="living-door-title">
<div class="mw-read mw-door-lead">
<h2 id="living-door-title">Living Door</h2>
<p>This is the room that answers your hands. Touch a thread. Open one strand if you are brave and polite. Ask who should mend it. The web would like the whole ensemble, and it will say so.</p>
<p>Matrika and the dragonfly join the conversation. The octopus and the Great-Web Weaver are in the room with you. Thirteen pillars, one living design. When the strand closes, the mend is held.</p>
</div>
<div class="mx-stage" id="the-web-interactive" aria-labelledby="mx-title">
<a class="mx-skip" href="#mx-dialogue">Skip to dialogue</a>
<div class="mx-world" aria-hidden="true">
<div class="mx-bg" id="mx-bg"></div>
<div class="mx-bg" id="mx-bg-next"></div>
<div class="mx-atmosphere"></div>
</div>
<header class="mx-mast">
<p class="eyebrow">Protective articulation</p>
<h2 id="mx-title">The Habitable Web</h2>
</header>
<div class="mx-heroes" aria-label="Octopus and Great-Web Weaver">
<svg class="mx-silk" id="mx-silk" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
<path data-edge="strand-a" d="M4,18 C22,8 38,30 54,16 C70,4 84,22 97,12" />
<path data-edge="strand-b" d="M6,34 C24,48 40,22 58,36 C74,50 86,28 98,40" />
<path data-edge="strand-hard" d="M2,52 C20,40 36,66 52,50 C70,34 82,62 99,46" />
<path data-edge="strand-c" d="M8,70 C26,58 44,82 62,66 C78,52 90,74 96,64" />
<path data-edge="strand-d" d="M12,88 C34,70 52,94 74,76" />
<path data-edge="strand-e" d="M18,8 C34,36 48,18 60,42 C74,68 86,40 94,86" />
<path data-edge="strand-f" d="M10,46 C30,20 48,58 70,30 C82,16 90,48 96,24" />
</svg>
<figure class="mx-hero active" data-who="octopus">
<img src="/img/matrix-octopus-library.jpg" alt="The octopus in the library">
<figcaption>Octopus</figcaption>
</figure>
<figure class="mx-hero" data-who="weaver">
<img src="/img/matrix-spider-web.jpg" alt="The Great-Web Weaver on the luminous web">
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
</div>
</div>
<div class="mw-read">""" + exits("living-door") + """</div>
</section>"""


def cabinet():
    return f"""<section class="mw-room" id="network-cabinet" aria-labelledby="network-cabinet-title">
<div class="mw-read">
<h2 id="network-cabinet-title">Network Cabinet</h2>
<p>The same seven objects as <a href="{SHOP_COLLECTION}">Matrix — The Network Cabinet</a>, and the same room as <a href="{SHOP_PAGE}">the Shopify page</a>. Prices below are the cabinet's current prices. The product page is the record that can change. The reading in this library does not depend on them.</p>
{products_for('orientation-node')}
{products_for('continuity-gallery')}
{products_for('kinetic-studio')}
{products_for('cosmic-web')}
{exits('network-cabinet')}
</div>
</section>"""


def world_html():
    parts = [
        '<link rel="stylesheet" href="/css/matrix-world.css">',
        '<div class="mw" id="matrix-world">',
        introduction(),
        hall(),
        orientation(),
        continuity(),
        kinetic(),
        cosmic(),
        reading(),
        stage(),
        cabinet(),
        "</div>",
        '<script type="module" src="/js/matrix-stage.js"></script>',
        '<script src="/js/matrix-rooms.js"></script>',
    ]
    fragment = "\n".join(parts)
    banned = ["skein", "form unknown", "gate removed", "we do not invent", "levy", "biodiversitylibrary.org", "anatomyofnervous"]
    low = fragment.lower()
    for word in banned:
        if word in low:
            raise SystemExit(f"matrix world contains forbidden public wording: {word}")
    return fragment


def apply_page(path=PAGE):
    with open(path, encoding="utf-8") as f:
        page = f.read()
    block = START + "\n" + world_html() + "\n" + END
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.S)
    if pattern.search(page):
        page = pattern.sub(lambda _m: block, page, count=1)
    else:
        marker = '<h2 class="reveal">THE WEB</h2>'
        at = page.find(marker)
        if at < 0:
            raise SystemExit("current Matrix page has no heart heading to follow")
        end = page.find("</section>", at)
        if end < 0:
            raise SystemExit("heart section did not close")
        end += len("</section>")
        page = page[:end] + "\n\n" + block + page[end:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(page)
    print("matrix world applied", path, "bytes", len(page))


if __name__ == "__main__":
    apply_page()
