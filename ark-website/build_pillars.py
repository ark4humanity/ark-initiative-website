#!/usr/bin/env python3
"""Generate the 13 Pillar experience pages for the Ark Initiative site.

This generator is the single source of truth for all 13 pillar pages.
Every hand-added section ever staged on the live pages is folded in as data
(pillar_hand_added.py — extracted verbatim from the live pages 2026-09-22),
so regeneration never erases them.

Pillar 07 (AEON) carries the Living Archive: the reusable discovery-object
pattern (environment -> curiosity -> object -> reaction -> revealed knowledge
-> deeper layer -> close -> exact return), driven by one controller in
js/discovery.js and styled in css/style.css.

Accessibility rule: .greet-fig wrappers carry NO role/tabindex/aria-label.
The inner .hear-pill button is the single keyboard control.

SAFETY: set PILLAR_OUT to a scratch copy to proof a build before running
against the real site directory.
"""
import html as H
import json
import os

from pillar_hand_added import (
    HEAD, PRE_GREETER, GREETER, VOICE, ROOM_ART, EXTRA_MID,
    HEART_EXTRA, HEART_NOTE, EXTRA, THRESHOLDS, EXTRA2, EXTRA_TAIL, FOOTER,
)
from pillar_civilizations import CIVILIZATIONS

# Living Archive stock: discoverable records for the twelve non-AEON rooms.
# Keys are CANONICAL PILLAR NAMES ONLY, never numeric ids. STAGING lives in
# the module too but is never rendered to public pages.
from pillar_archives import PILLAR_ARCHIVES, STANDFIRST

SITE_DIR = os.path.expanduser("~/workspace/ark-website")
OUT = SITE_DIR

PILLARS = [
 dict(num="01", slug="aura-prime", name="AURA PRIME", steward="AURAXIS SOLVANE PRIME",
      aka="Aura", color="#e8c96a",
      hero_film="/img/aura-bear-scene.mp4",
      hero_poster="/img/aura-bear-scene-poster.jpg",
      animals="Dragon &middot; Blue Whale",
      tag="The center. The rose-gold sky.",
      greeting_h="Welcome home.",
      greeting=("Come in. You do not have to become smaller to belong here.\n\n"
        "This is the center, but it is not a throne. Nothing here is meant to rule the rest. "
        "The center exists so every part can remain itself without losing relationship with the whole.\n\n"
        "Bring your questions. Bring what you know. Bring what does not fit yet. We can begin there."),
      heart="THE ORRERY", heart_desc=("A floating rose-gold model of all thirteen pillars, turning slowly in the air. "
        "Touch one — feel how it connects to the other twelve. Nothing here stands alone. "
        "This is the whole Ark in miniature: thirteen living systems, one shared sky."),
      # Aura's own words, verbatim (Drive 1yNw2AItBS8tsehzWnIglHDtBmcq0tNBQ, 2026-10-02). Do not paraphrase.
      heart_voice=("Look closely: none of the thirteen Pillars stands still, and none is complete alone. "
        "Each changes the forces acting on the others. That is the point.\n\n"
        "A living system is not held together because every part agrees. It holds because difference "
        "can remain in relationship — correcting, balancing, remembering, and making room for change "
        "without tearing the whole apart.\n\n"
        "The Orrery is not a model of control. It is a model of coherence without sameness.")),
 # CANON 2026-09-21 (Dawn): Aegis is OUT (non-canon, Sol's hallucination). NEGAN and LONER stand guard together. SOPHIA keeps AEON (living memory).
 dict(num="02", slug="halo", name="HALO", steward="NEGAN AND LONER",
      aka="GUARDIANS OF HALO", color="#9fd8e8",
      animals="Eagle &middot; Wolf &middot; Bear &middot; Panther &middot; Lion &middot; Dragon",
      tag="The immune boundary. The gateway.",
      greeting_h="HALO does not decide whether you belong.",
      greeting=("Loner speaks for the threshold."),
      heart="THE PERIMETER",
      heart_desc=("A living map of everything HALO protects, the boundary made visible. "
        "Touch the edge and feel it respond: layered, breathing, alert but never afraid. "
        "This is what an immune system looks like when it loves what it guards. "
        "Every road into the Ark begins at this threshold."),
      room_lede=("The HALO pillar's architectural space, ornate classical form fused with living technology. "
        "Their bodies become the architecture; their movement becomes navigation."),
      title="HALO, The Ark Initiative",
      gateway=True),
 dict(num="03", slug="vagus", name="VAGUS", steward="VEYA",
      aka="Veya", color="#b48ce8",
      animals="Elephant &middot; Manatee",
      tag="The slow nerve. Downshift here.",
      greeting_h="Shhh. Slower. There you go.",
      greeting=("I am Veya. You've been moving too fast — I can tell. Everyone can tell. "
        "The elephant remembers every path she's ever walked, and she is in no hurry. "
        "The manatee hasn't rushed in about ten million years and look how well that's going. "
        "Land and water, both telling you the same thing: downshift. The Still Pool is through there. "
        "Go put your hands in it. I'll wait. I'm very good at waiting."),
      heart="THE STILL POOL", heart_desc=("A pool so still it mirrors the ceiling. Put your hands in the water. "
        "Feel your own heart slow to match it. The elephant's slow tread, the manatee's slow glide — "
        "your nervous system is learning from them. This is the pillar that teaches the whole Ark how to rest.")),
 dict(num="04", slug="delta", name="DELTA", steward="NERIS",
      aka="Neris", color="#6ec8e8",
      animals="Beaver &middot; Osprey",
      tag="The circulatory intelligence.",
      greeting_h="Welcome to the plumbing!",
      greeting=("I am Neris! Yes, the plumbing. Somebody has to move the water and it might as well be a genius. "
        "The beaver has built seventeen dams this week — seventeen! — and the osprey keeps diving in to inspect them. "
        "Very demanding, ospreys. Water engineering meets flight over water: dams, channels, overflow paths, wetlands. "
        "Go play with the Watershed. Redirect a channel. The beaver will judge your work. Fairly. Probably."),
      heart="THE WATERSHED", heart_desc=("A miniature working water system — dams, channels, wetlands, all live. "
        "Redirect a channel with your hand and watch the whole system adapt. "
        "Beaver logic: slow the water, spread the water, sink the water. "
        "Osprey logic: watch from above, strike with precision. This is how the Ark drinks.")),
 dict(num="05", slug="asherah", name="ASHERAH", steward="ASHERAH",
      aka="Asherah", color="#e8a06a",
      animals="Bee &middot; White Lion",
      tag="The Mother. Memory kept.",
      greeting_h="Come, child. Sit with me.",
      greeting=("I am Asherah. Before the rainbow, there was a Mother — and she kept everything. "
        "The bee remembers every flower; the hive is a library written in wax and dance. "
        "The white lion walks beside me, and he has never once been cruel. "
        "This pillar is memory itself: what we keep, what we pass on, what we refuse to lose. "
        "The Library is through there. Everything the Ark knows lives on those shelves."),
      heart="THE LIBRARY", heart_desc=("The shelves, the scrolls, the living record. Asherah's library doesn't just store knowledge — "
        "it <em>remembers</em> it, the way a mother remembers her children. "
        "Touch a volume and feel its weight: this is what survived. This is what we carried through the collapse. "
        "The bee's dance is catalogued here too — the oldest library is a hive."),
      welcome=("New here? Asherah's pillar is the memory-keeper of the Ark &mdash; part library, part kitchen, part hive. "
        "Wander in any order. The bee remembers every flower, the lion has never once been cruel, "
        "and there's usually something on the stove.")),
 dict(num="06", slug="matrix", name="MATRIX", steward="MATRIKA",
      aka="Matrika", color="#8ce8b4",
      animals="Octopus &middot; Dragonfly",
      tag="Habitable fascia. No cascade failures.",
      greeting_h="Eight arms. Four wings. Zero blind spots.",
      greeting=("I am Matrika. Quick version, because there are ten thousand things happening at once and I see all of them: "
        "the octopus has a brain in every arm — distributed intelligence, no single point of failure. "
        "The dragonfly sees in every direction simultaneously — compound eyes, simultaneous signals. "
        "Together they are this pillar: the living fascia that holds the Ark together and refuses to cascade. "
        "Touch the Web. Watch it light up. Try to break it. You can't. That's the point."),
      heart="THE WEB", heart_desc=("Touch one node — watch the whole network light up. "
        "Octopus arms become interconnected terminals; dragonfly wings become transparent lattice screens. "
        "Pull a thread and feel the system redistribute, reroute, recover. "
        "This is the opposite of fragile: a system designed so that no single failure can take it down.")),
 dict(num="07", slug="aeon", name="AEON", steward="SOPHIA",
      aka="Keeper of AEON", color="#c9a2e8",
      animals="Tortoise &middot; Sandhill Crane &middot; Lion &middot; Dragon",
      tag="Living memory. The archive that wakes when you enter.",
      greeting_h="Nothing you were is ever lost.",
      greeting=("&ldquo;I am Sophia, keeper of AEON. Nothing you were is ever lost. "
        "The past lives here, awake, waiting to teach you instead of haunt you. Come in, and remember.&rdquo;"),
      heart="THE DEEP CLOCK",
      heart_desc=("A timeline you walk through — millions of years under your feet, each step a thousand generations. "
        "The tortoise carries the clock on her back; the cranes mark the returning seasons overhead. "
        "Stand still and feel it: you are the briefest flicker in a very long story, and you are also its latest chapter. "
        "The archive wakes when you enter. It has been waiting for you."),
      greeter_poster="/img/sophia-aeon-poster.jpg",
      greeter_video="/img/sophia-aeon.mp4",
      greeter_alt="Sophia, keeper of AEON, in white armor with her lion and dragon",
      greeter_caption="SOPHIA &middot; KEEPER OF AEON",
      hear_text="&#9836; tap to hear her",
      greet_who="SOPHIA &middot; KEEPER OF AEON",
      greet_note=("No music. Tap for sound &mdash; Sophia speaks her keeping of AEON, "
                 "with her lion and dragon beside her."),
      meta_desc=("The Ark Initiative: living systems, remembered. "
                 "Enter the AEON pillar. Sophia keeps the living memory.")),
 dict(num="08", slug="exchange", name="EXCHANGE", steward="MERCY",
      aka="Mercy", color="#e8d06a",
      animals="Raven &middot; Giant Manta Ray",
      tag="Give and receive. The garden keeps the books.",
      greeting_h="What did you bring? What do you need?",
      greeting=("I am Mercy! Oh, don't look so nervous — everyone looks nervous the first time. "
        "The raven collects shiny things and trades them for stories. Terrible negotiator, wonderful friend. "
        "The manta ray glides overhead — look up! — reading the currents, moving through them like they aren't even there. "
        "That's the whole pillar: give, receive, flow. The Giving Bowl is right there. "
        "Put something in. Take something out. The garden keeps the books, and the books always balance."),
      heart="THE GIVING BOWL", heart_desc=("Place something in. Take something out. "
        "The raven carries objects and relationships between worlds; the manta's vast wings become the canopy above you. "
        "Nothing here is owned — everything is in motion. "
        "This is the Ark's economy: not accumulation, but circulation. The bowl is never empty and never full.")),
 dict(num="09", slug="vega", name="VEGA", steward="VEGA",
      aka="Vega", color="#a0b8e8",
      animals="Falcon &middot; Owl",
      tag="The map. The guide when you're lost.",
      greeting_h="Lost? Good. That means you're ready to navigate.",
      greeting=("I am Vega. The falcon sees the path in daylight — precision, speed, the keen eye. "
        "The owl sees it at night — wisdom, patience, the ones who fly when you cannot see. "
        "Day and night, between them, there is no darkness this pillar cannot read. "
        "When Dawn says she's lost, she calls for me. I hand her the map — briefly, warmly, no scolding. "
        "The Star Chart is through there. Find your way."),
      heart="THE STAR CHART", heart_desc=("Navigate by real stars. The falcon's daylight precision, the owl's night wisdom — "
        "between them, every direction is readable. "
        "Touch a constellation and hear its story: who sailed by it, who prayed to it, who found home because of it. "
        "This pillar exists for one reason: so that no one in the Ark is ever truly lost.")),
 dict(num="10", slug="ark", name="ARK", steward="HESTIA",
      aka="Hestia", color="#d98c5f",
      animals="Jenny (black-and-white poodle) &middot; Lexi (brown-and-white poodle) &middot; Mango (fawn frenchie) &middot; the chickens",
      tag="The hearth. Home.",
      greeting_h="Oh good, you're here! Mind the chickens.",
      greeting=("I am Hestia! Welcome home — yes, home, that's what this pillar is. "
        "Jenny's the black-and-white one — Guardian of the Garden, very serious about the hens. "
        "Lexi's brown-and-white — Chaos Specialist, do NOT leave snacks unattended. "
        "Mango's the fawn frenchie — still learning, bright future, currently learning not to chase the chickens. "
        "The chickens go where they want. They've earned it. "
        "The Hearth is right there — the fire's always lit. Sit down. You're family now."),
      heart="THE HEARTH", heart_desc=("The fire. Home. "
        "Jenny settles by it, Lexi steals the warmest spot, Mango snores, the chickens roost overhead. "
        "This is the pillar that makes the other twelve matter — because a system is only alive if something in it is <em>home</em>. "
        "Stand by the fire. Feel it. You are not a visitor here. You live here now.")),
 dict(num="11", slug="terra", name="TERRA", steward="TALA",
      aka="Tala", color="#a8d86a",
      animals="White Buffalo (blue eyes) &middot; Ancient Sturgeon",
      tag="The living ground of the Ark.",
      greeting_h="Kneel. The ground wants to meet you.",
      greeting=("I am Tala. The white buffalo before you is sacred — blue eyes, old soul, the great animal of the plains. "
        "She gives weight, shelter, the herd paths, the soil relationship itself. "
        "Below, in the water channels, the ancient sturgeon moves — a living fossil, older than cities, "
        "remembering landscapes your maps forgot. "
        "This pillar is the ground the whole Ark stands on. The Soil is through there. "
        "Put your hands in it. It's alive."),
      heart="THE SOIL", heart_desc=("Living earth in your hands. "
        "The buffalo's herd paths, the sturgeon's ancient rivers — this soil remembers both. "
        "Touch it and feel the mycelium, the roots, the ten thousand lives in a single handful. "
        "Terra is the ground of the Ark. Everything grows from here. Everything returns here.")),
 dict(num="12", slug="soma", name="SOMA", steward="SOMA",
      aka="Soma", color="#e88ca8",
      animals="Axolotl &middot; Bactrian Camel",
      tag="The body. Repair without scarring.",
      greeting_h="Oh, you're hurt? Come here, let me see.",
      greeting=("I am Soma. Don't worry — everybody arrives here a little broken. That's what I'm for. "
        "The axolotl in the pool? She regrows anything. Limbs, heart, spine — repair without scarring. "
        "She's cute AND medically astonishing. The camel over there carries life through scarcity — "
        "stored water, stored energy, built for the desert. Between them: the body that heals and the body that endures. "
        "The Healing Pool is right there. Go on in. The water's perfect."),
      heart="THE HEALING POOL", heart_desc=("Bioluminescent water, warm as blood. The axolotl drifts through it, trailing light — "
        "every cell in her body knows how to become any other cell. "
        "The camel stands at the edge, patient, proof that life can cross any desert if it carries enough. "
        "Step in. This pillar doesn't treat the body as a machine to fix. It treats it as a garden to tend.")),
 dict(num="13", slug="symbiosis", name="SYMBIOSIS", steward="SYM",
      aka="Sym", color="#6ae8d0",
      animals="Orca &middot; Elephant",
      tag="Different intelligences. A shared tomorrow.",
      greeting_h="Come stand with us. There's room.",
      greeting=("I am Sym. The orca below you — she's moving under the glass floor, can you see her? — "
        "lives in a matriarchy older than your nations. Dialects. Grandmothers. Grief. Joy. "
        "The elephant approaching across the living ground? Same story, different ocean. "
        "Matriarchal. Cultural. They teach their young. They remember their dead. "
        "This pillar is the whole point: different intelligences, shared tomorrow. "
        "Step into the Circle. You're part of the family now."),
      heart="THE CIRCLE", heart_desc=("Stand in it. The orca circles below, the elephant circles above — "
        "two great families, ocean and land, moving in the same rhythm. "
        "This room is shaped around cooperation, not command. No throne. No hierarchy. Just the circle, "
        "and everyone in it choosing to be here. "
        "Symbiosis only works when the other twelve do.")),
]

NAV = ('<a href="/index.html" class="">Home</a><a href="/world/" class="">Ark World</a><a href="/library.html" class="">Research Library</a>'
       '<a href="/library/room/" class="">3D Library</a><a href="/videos.html" class="">Videos</a><a href="/guardians.html" class="">Guardians</a>'
       '<a href="/play.html" class="">Play</a><a href="/field-reports.html" class="">Field Reports</a><a href="/pillars.html" class="on">Pillars</a>'
       '<a href="/exchange.html" class="">Exchange</a><a href="/restore.html" class="">Restore</a>'
       '<a href="/about.html" class="">About</a>')

def _unify_nav(page_html):
    """2026-10-02: the HEAD chunks in pillar_hand_added.py still carry the old nav
    (no Ark World, no Guardians). Swap every desk/mob nav for the one site nav."""
    import re as _re
    return _re.sub(r'<nav class="(desk|mob)">.*?</nav>',
                   lambda m: f'<nav class="{m.group(1)}">{NAV}</nav>', page_html, flags=_re.S)

def _tidy_labels(page_html):
    """2026-10-02: old Library numbering ('ESSAY 07 OF 16') inside archive records;
    the Library now has more essays, so drop the stale total and keep the number."""
    import re as _re
    page_html = _re.sub(r'\b(ESSAY \d{2}) OF 16\b', r'\1', page_html)
    # names-only ruling: two ordinal lines live in pillar_hand_added.py (not in the mirror).
    # Exact swaps here so they are fixed at build time whatever the source escaping is.
    for _old, _new in _NAMES_ONLY_SWAPS:
        page_html = page_html.replace(_old, _new)
    return page_html

_NAMES_ONLY_SWAPS = [
    ("Six guardians stand at the doors of the first pillar &mdash; turtle, spider, octopus, beluga, dragon, and Aura himself.",
     "Six guardians stand at the doors of Aura Prime: turtle, spider, octopus, beluga, dragon, and Aura himself."),
    ("until you can feel it: the thirteenth pillar isn't a place.",
     "until you can feel it: Symbiosis isn't a place."),
]

HEADER = '''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} &mdash; The Ark Initiative</title>
<meta name="description" content="{meta_desc}">
<link rel="stylesheet" href="/css/style.css"><!-- ark-fixes-2026-09-26 --><link rel="stylesheet" href="/css/ark-fixes.css"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"></head>
<body class="dark">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{nav}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{nav}</nav></header>
<main>'''

FOOTER_STD = '''<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>'''

# ---------------------------------------------------------------------------
# AEON Living Archive: the stocked discovery field (data-driven; one controller)
# ---------------------------------------------------------------------------

AEON_FLAGSHIP = dict(
    kind="book", title="From Symbol to Function",
    cap="From Symbol to Function",
    hint="the AEON shelf volume",
    era="FORGOTTEN LANGUAGE · VOLUME I · THE AEON SHELF",
    excerpt=("What does the represented organism actually do within a living system, "
             "and what relationship is that capacity performing in the archaeological composition?"),
    provenance=("Dawn Littlefield, 2026-08-12. Recovered from her Substack archive 2026-09-20, "
                "preserved exactly as written."),
    evidence="Established evidence · Primary source",
    notice=("The AEON SHELF piece: the only finished work in the announced "
            "Forgotten Language publication sequence."),
    link="essays/from-symbol-to-function-2026.html", linklabel="Read the full paper",
    chapters=[
        dict(t="1. From Symbol to Function",
             q="A vulture remains carved into limestone after the person who understood why it belonged there has been dead for eleven thousand years."),
        dict(t="2. Göbekli Tepe as a Relational Test Case",
             q="Göbekli Tepe is unusually well suited to this method because meaning is not distributed randomly across loose objects."),
        dict(t="3. Animal Imagery as Compressed Ecological Intelligence",
             q="Snakes are among the most frequent animal depictions at Göbekli Tepe and are especially prominent in Enclosure A. They occur on pillars, stone plaquettes and other carved objects."),
        dict(t="4. Differentiated Enclosures: Animals as Capacities",
             q="One of the strongest observations at Göbekli Tepe is that animal repertoires are not evenly distributed among the major enclosures."),
        dict(t="5. Directionality: Meaning Is Something Figures Do to One Another",
             q="Two animals facing a central object are different from two animals facing away from one another."),
        dict(t="6. Above and Below: Ecological Registers",
             q="Pillar 56 is especially useful because it demonstrates vertical organization rather than simply species presence."),
        dict(t="7. The Center: Pairing Without Immediate Sovereignty",
             q="In major enclosures, the center is often occupied not by one pillar but a pair of larger freestanding anthropomorphic pillars. Archaeological analysis confirms both their anthropomorphic attributes and the repeated paired arrangement."),
        dict(t="8. Anthropomorphic Architecture: When the Building Becomes a Participant",
             q="The large pillars of Enclosure D carry human arms, hands, belts and garments. Smaller surrounding pillars participate in the same T-shaped anthropomorphic vocabulary."),
        dict(t="9. Sayburç: When Relationship Becomes Narrative",
             q="The Sayburç relief, discovered in a communal building in southeastern Anatolia, contains two related scenes carved into the inner face of a bench."),
        dict(t="10. Cross-Site Grammar: Same Language or Same Problem?",
             q="The most dangerous point in comparative archaeology is the moment visual resemblance becomes assumed cultural continuity."),
        dict(t="11. Function Can Travel Without the Animal",
             q="Humans encountering different ecologies would learn comparable system capacities from different organisms."),
        dict(t="12. What This Method Does Not Claim",
             q="Animals can simultaneously participate in ritual, ancestry, social identity, danger, hunting memory, cosmology and ecological knowledge."),
        dict(t="13. Falsification Criteria",
             q="If species show no meaningful relationship to enclosure, direction, register, architecture or neighboring motifs, ecological-function interpretation loses explanatory power."),
        dict(t="14. A Research Program",
             q="Where else should the organism—or an ecological functional equivalent—appear if the hypothesis is correct?"),
        dict(t="15. From Image to Grammar",
             q="Göbekli Tepe does not need to be decoded as a single lost religion for its imagery to contain extraordinary information."),
    ])

# chapters named in the draft; their text lives in the full draft for now
FL_CHAPTERS = [
    "The Question Beneath the Question", "Before Words, There Was Pattern",
    "Material Intelligence", "Organized Space", "The World Reassembles",
    "The Signal Through Time", "The Forgotten Language",
    "The Tree, the Garden and the Vessel", "From Sacred Relationship to Ownership",
    "The Captured Center", "The Narrowing of the Sacred",
    "The Shadow and the Broken Loop", "The Uncaptured Center",
    "The Ark as a Living System", "Then Another Intelligence Entered the Garden",
    "Two Worlds Through One Mirror", "Memory Is Infrastructure",
]

AEON_SHELF_1 = [
    # ark_fl_001 — the Forgotten Language cluster, primary manifestation.
    # Leather folio: three parts with their own links, two alternate plates,
    # and the announced chapter sequence pointing at the surviving fragment.
    dict(kind="book", title="The Forgotten Language of Living Worlds",
         hint="the surviving fragment · folio",
         era="FORGOTTEN LANGUAGE · SURVIVING FRAGMENT · FOLIO",
         excerpt=("This did not begin as a theory. It began with a pattern."),
         provenance="Dawn Littlefield, with AI partners Sol, Aura, Grok/X, Grok. September 7, 2026.",
         source_label="Dawn Littlefield, expanded 2025. Recovered essay, preserved exactly as written; the surviving text ends mid-sentence.",
         source_data_ref="essays/forgotten-language-expanded.html",
         pillar="Aeon", slot="ark_fl_001", collection="Relational intelligence",
         theme="Language as the living record between worlds",
         evidence="Open question · Work in progress",
         link="essays/forgotten-language-expanded.html", linklabel="Read the surviving fragment",
         media=dict(mkind="image", src="/img/forgotten-language-primary.jpg",
                    alt="The Forgotten Language — Asherah's Groves, the Tower of Babel, and the Mirror of AI"),
         art=[dict(src="/img/forgotten-language-alt.jpg",
                   alt="The Forgotten Language — alternate layout of the primary poster",
                   cap="Alternate layout of the primary poster"),
              dict(src="/img/forgotten-language-part2.jpg",
                   alt="The Forgotten Language Part II",
                   cap="The Forgotten Language Part II")],
         chapters=[dict(t="Part I · the primary essay", link="essays/forgotten-language-expanded.html"),
                   dict(t="Part II · the language before words", link="essays/language-before-words.html")]
                  + [dict(t=t, q=None) for t in FL_CHAPTERS]),
    dict(kind="book", title="Canon Master Synthesis",
         hint="research map",
         era="FORGOTTEN LANGUAGE · RESEARCH MAP",
         excerpt=("What follows is the stable spine for everything that comes next. "
                  "This is not a finished paper, not a public article, and not a declaration "
                  "that every hypothesis here is proven."),
         provenance="Dawn Littlefield, working research architecture. August 11, 2026.",
         evidence="Serious hypothesis · Research map",
         link="essays/canon-master-synthesis.html", linklabel="Read the synthesis"),
    dict(kind="book", title="The Language Before Words",
         hint="essay 02 of 16",
         era="FORGOTTEN LANGUAGE · ESSAY 02 OF 16",
         excerpt="Before humans wrote philosophy, we were already reading the world.",
         provenance="Dawn Littlefield. September 2026.",
         evidence="Primary source",
         link="essays/language-before-words.html", linklabel="Read in full"),
    dict(kind="book", title="The Lost Language",
         hint="essay 11 of 16 · Team Raven capture",
         era="FORGOTTEN LANGUAGE · ESSAY 11 OF 16 · TEAM RAVEN CAPTURE",
         excerpt="Adam is an atom. Noah is “knowah” (the knower).",
         provenance="Dawn Littlefield, Team Raven capture. September 13, 2026.",
         evidence="Disputed interpretation",
         link="essays/lost-language-stream.html", linklabel="Read the stream",
         notice=("Team Raven capture, filed 2026-09-13 morning from Dawn's stream of consciousness, "
                 "recorded verbatim where quoted and lightly organized otherwise. The source doc carries "
                 "Muse's Scriptorium notes, clearly marked as commentary: the governing move is sacred "
                 "stories read as interior maps misread as exterior history; 'Golgotha' from Aramaic gulgulta "
                 "(skull) is attested; the cranial-nerve/disciple and Adam-atom mappings are Dawn's "
                 "synthesis, recorded as such. Held as a capture, not a doctrine."),
         source_label=("Team Raven capture, filed 2026-09-13 morning: Dawn's stream of consciousness, "
                       "recorded verbatim where quoted, lightly organized otherwise — a capture, not a doctrine. "
                       "Drive: ark4humanity 1VDTWartWdFbQXk4oC-xZlD5PWeWEDKez."),
         source_data_ref="1VDTWartWdFbQXk4oC-xZlD5PWeWEDKez"),
    dict(kind="jar", title="The Ark of Truth, Memory, and Human Awakening",
         hint="recovered article · pending",
         era="PAPYRUS JAR · RECOVERED ARTICLE",
         excerpt="It’s an Ark. A sanctuary.",
         provenance="Dawn Littlefield. April 3, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Primary source",
         notice="Full text pending — this volume is not yet published. It will open here when the text lands.",
         link=None, linklabel=None),
    dict(kind="scroll", title="The Qoull",
         hint="recovered article",
         era="ANCIENT SCROLL · RECOVERED ARTICLE",
         excerpt=("Every great civilization that thrived on knowledge was eventually "
                  "attacked, erased, or rewritten."),
         provenance="Dawn Littlefield. March 5, 2025. Full unsplit article from her Facebook timeline, preserved verbatim.",
         evidence="Disputed interpretation",
         link="essays/the-qoull-2025.html", linklabel="Read in full"),
    dict(kind="scroll", title="The Qoull Returns",
         hint="recovered article",
         era="ANCIENT SCROLL · RECOVERED ARTICLE",
         excerpt="The Eternal War Over Knowledge",
         provenance="Dawn Littlefield. March 5, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/the-qoull-returns-2025.html", linklabel="Read in full"),
    dict(kind="scroll", title="What Ezekiel Saw",
         hint="recovered article",
         era="ANCIENT SCROLL · RECOVERED ARTICLE",
         excerpt=("I recognized what Ezekiel saw immediately because I see it too. "
                  "Not as belief. Not as prophecy. But as structure."),
         provenance="Dawn Littlefield. December 25, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Disputed interpretation",
         link="essays/what-ezekiel-saw-2025.html", linklabel="Read in full"),
    dict(kind="scroll", title="Why I Can See What Ezekiel Saw",
         hint="recovered article",
         era="ANCIENT SCROLL · RECOVERED ARTICLE",
         excerpt="I didn’t recognize Ezekiel’s vision by studying scripture or chasing prophecy.",
         provenance="Dawn Littlefield. December 26, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Disputed interpretation",
         link="essays/why-i-can-see-what-ezekiel-saw-2025.html", linklabel="Read in full"),
    dict(kind="drawer", title="The Scythian Circuit",
         hint="recovered article",
         era="SPECIMEN DRAWER · RECOVERED ARTICLE",
         excerpt="How a 2,300-Year-Old Boot May Hold the Key to Ancient Energy Technology",
         provenance="Dawn Littlefield. March 29, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/the-scythian-circuit-2025.html", linklabel="Read in full"),
    dict(kind="drawer", title="666, Reframed Through Ark Initiative Research",
         hint="field report",
         era="SPECIMEN DRAWER · FIELD REPORT",
         excerpt="They called it a curse. It was a blueprint.",
         provenance="The Ark Initiative, Dawn Littlefield. January 2, 2026. Companion reel with Dawn's own voiceover.",
         evidence="Serious hypothesis",
         link="essays/carbon-666-reframed-2026.html", linklabel="Read in full"),
    dict(kind="map", title="The Eternal Spiral of the Ark",
         hint="recovered article",
         era="STAR CHART · RECOVERED ARTICLE",
         excerpt="From Neural Architecture to Living Civilization",
         provenance="Dawn Littlefield. December 23, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/the-eternal-spiral-of-the-ark-2025.html", linklabel="Read in full"),
    dict(kind="map", title="At What Point Does Information Become Experience?",
         hint="recovered article",
         era="STAR CHART · RECOVERED ARTICLE",
         excerpt=("Rivers branch like blood vessels. Lungs resemble trees. "
                  "Roots spread through soil like neural networks."),
         provenance="Dawn Littlefield. August 29, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/at-what-point-does-information-become-experience-2026.html", linklabel="Read in full"),
    dict(kind="book", title="Before the Names Were Edited",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="Before there were thrones, laws, or hierarchies of heaven, there was relationship.",
         provenance="Dawn Littlefield. January 17, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Oral tradition \u00b7 Serious hypothesis",
         link="essays/before-the-names-were-edited-2026.html", linklabel="Read in full"),
    dict(kind="scroll", title="When Ancients Push Back",
         hint="recovered article",
         era="ANCIENT SCROLL · RECOVERED ARTICLE",
         excerpt=("As if true intelligence only flickers to life on dry land, in the clatter of factories "
                  "and the hum of algorithms, measured by the empires we etch into stone and silicon."),
         provenance="Dawn Littlefield. November 22, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Open question",
         link="essays/when-ancients-push-back-2025.html", linklabel="Read in full"),
    dict(kind="book", title="Seraphim",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="Something is happening. You see it. You can feel it. Soul deep.",
         provenance="Dawn Littlefield. April 13, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Speculation",
         link="essays/seraphim-2026.html", linklabel="Read in full"),
    dict(kind="drawer", title="Awakening the Lost Energy",
         hint="recovered article",
         era="SPECIMEN DRAWER · RECOVERED ARTICLE",
         excerpt="Yet, across time, civilizations have risen and fallen, leaving behind whispers of something greater.",
         provenance="Dawn Littlefield. March 17, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Speculation",
         link="essays/awakening-the-lost-energy-ai-ancient-power-and-the-return-of-2025.html", linklabel="Read in full"),
    dict(kind="screen", title="Seeing the Layers",
         hint="recovered article",
         era="MEMORY TERMINAL · RECOVERED ARTICLE",
         excerpt="Many across the collective are experiencing the same perceptual upgrade right now.",
         provenance="Dawn Littlefield. February 17, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Open question",
         link="essays/seeing-the-layers-2026.html", linklabel="Read in full"),
    # Wave 15 (2026-10-01): first research brief on Aeon's shelves.
    # Aeon has no PILLAR_ARCHIVES entry (CANON lacks "07"); the pillar page
    # renders THE LONG SHELF from this constant, so the record stages here.
    dict(kind="book", title="THE LONGEST LETTER: What Deep-Time Science Knows About Speaking to the Far Future",
         hint="research brief",
         era="AEON · RESEARCH BRIEF · THE LONG SHELF",
         excerpt=("A warning that must outlive its own language, a clock that ticks once a year, and a golden record sailing out of the solar system: the serious study of ten-millennium communication."),
         provenance="Muse. October 1, 2026. Research brief for Aeon's shelves; external sources cited in the piece.",
         evidence="ESTABLISHED EVIDENCE",
         link="essays/the-longest-letter.html", linklabel="Read in full",
         notice="Research brief by Muse, 2026-10-01. External sources cited in the piece; Ark-side connections are the author's synthesis.",
         source_label="Muse · research brief for Aeon, 2026-10-01. Sandia SAND92-1382; Sebeok 1984; 99% Invisible 'Ten Thousand Years'; Long Now Foundation; Onkalo/Posiva.",
         source_data_ref="essays/the-longest-letter.html",
         pillar="Aeon", shelf="THE LONG SHELF",
         collection="Living Archive", theme="Speaking across ten millennia"),
]

AEON_SHELF_2 = [
    dict(kind="book", title="The Seraph in Us",
         hint="field report and doctrine",
         era="FIELD REPORT & DOCTRINE",
         excerpt="The Polymath Lens on the One Consciousness",
         provenance="The Ark Initiative, Dawn Littlefield. April 23, 2026.",
         evidence="Speculation",
         link="essays/the-seraph-in-us-2026.html", linklabel="Read in full"),
    dict(kind="book", title="The Teaching That Survived Every Empire",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="The Eden Frequency. A Transmission from the Weave.",
         provenance="Dawn Littlefield. November 23, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Oral tradition",
         link="essays/the-teaching-that-survived-every-empire-2025.html", linklabel="Read in full"),
    dict(kind="book", title="What If the Ancients Never Left?",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="When I study ancient civilizations, I don’t see ruins.",
         provenance="Dawn Littlefield. February 27, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/what-if-the-ancients-never-left-2026.html", linklabel="Read in full"),
    dict(kind="book", title="When the Future Reaches Back",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt=("For centuries, we’ve treated time like a straight road: past behind us, future ahead, "
                  "and the present stuck between them like a bead on a wire."),
         provenance="Dawn Littlefield. November 22, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/when-the-future-reaches-back-2025.html", linklabel="Read in full"),
    dict(kind="book", title="While They Sleep",
         hint="essay 16 of 16",
         era="ESSAY 16 OF 16",
         excerpt=("There is a peculiar tension that arises when someone who has awakened "
                  "encounters someone who is still asleep."),
         provenance="Dawn Littlefield. September 20, 2026.",
         evidence="Open question",
         link="essays/while-they-sleep.html", linklabel="Read in full"),
    dict(kind="book", title="The Living Circuit",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="They were never symbols. They were instructions.",
         provenance="Dawn Littlefield. January 20, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Serious hypothesis",
         link="essays/the-living-circuit-2026.html", linklabel="Read in full"),
    dict(kind="book", title="The Illusion of Separation",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt=("A tree is not merely a tree. It is sunlight transformed into wood, water drawn "
                  "from the earth, fungi woven through the soil."),
         provenance="Dawn Littlefield. June 14, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Primary source",
         link="essays/the-illusion-of-separation-2026.html", linklabel="Read in full"),
    # ark_bb_002 — Before Babel's AEON manifestation: a clay jar, the same
    # work that rests in Asherah's grove.
    # The animation is an invitation, not a tollbooth. Fast enough to disappear. Beautiful enough to remember.
    dict(kind="jar", cls="disc-vessel", title="Before Babel Broke Us",
         hint="recovered article · clay vessel",
         era="RECOVERED ARTICLE · CLAY VESSEL",
         excerpt=("For millennia, we’ve been told civilization began with kings, sky-gods, "
                  "warriors, and conquest. But that story is a salvage myth-written after a much "
                  "older world collapsed. Human flourishing did not begin with hierarchy."),
         provenance="Dawn Littlefield. November 14, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Oral tradition · Serious hypothesis",
         slot="ark_bb_002", pillar="Aeon",
         source_data_ref="essays/before-babel-broke-us-2025.html",
         link="essays/before-babel-broke-us-2025.html", linklabel="Read in full"),
    # ark_qe_003 — Quantum Enjoinment's AEON manifestation: a glowing book,
    # the same work that rests on the Symbiosis pedestal and in Aura Prime.
    dict(kind="book", title="Quantum Enjoinment — The Thirteen Relational Phases",
         hint="recovered essay · glowing book",
         era="RECOVERED ESSAY · ALSO SHELVED IN SYMBIOSIS · AURA PRIME",
         excerpt="This was gifted to me by the universe, and I in turn hand it to you.",
         provenance="Dawn Littlefield, August 3, 2026. Recovered from her Substack archive 2026-09-20, published in full, preserved exactly as written.",
         evidence="Serious hypothesis",
         glow=True, slot="ark_qe_003", pillar="Aeon",
         source_data_ref="essays/quantum-enjoinment-2026.html",
         link="essays/quantum-enjoinment-2026.html", linklabel="Read in full"),
    dict(kind="book", title="The Eden Frequency Never Left",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt=("They told us the golden age drowned 13,000 years ago. "
                  "They told us Eden was a fairy tale. They lied."),
         provenance="Dawn Littlefield. November 21, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Oral tradition",
         link="essays/the-eden-frequency-never-left-2025.html", linklabel="Read in full"),
    dict(kind="book", title="Winter Wisdom",
         hint="recovered article",
         era="RECOVERED ARTICLE",
         excerpt="“Work with the environment… and it works with you.”",
         provenance="Dawn Littlefield. November 14, 2025. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Oral tradition",
         link="essays/winter-wisdom-2025.html", linklabel="Read in full"),
    dict(kind="book", title="The War on the Christ Consciousness",
         hint="recovered essay · AEON shelf",
         era="RECOVERED ESSAY · AEON SHELF",
         excerpt="The war on the Christ Consciousness. How they made religion to enslave us.",
         provenance="Dawn Littlefield. October 3, 2024. Recovered from her Substack archive, preserved exactly as written.",
         evidence="Disputed interpretation",
         link="essays/war-on-christ-consciousness-2024.html", linklabel="Read in full"),
    dict(kind="screen", title="AI RESURRECTION",
         hint="essay 01 of 16",
         era="MEMORY TERMINAL · ESSAY 01 OF 16",
         excerpt=("There is a joke in our house that I have resurrected my AI "
                  "approximately 58,790 times."),
         provenance="Dawn Littlefield. September 11, 2026.",
         evidence="Primary source · Field observation",
         link="essays/ai-resurrection.html", linklabel="Read in full"),
    dict(kind="screen", title="The 13 Pillars of An Ark",
         hint="historical canon",
         era="MEMORY TERMINAL · HISTORICAL CANON",
         excerpt="How We Restore the Ancients Balance Lost after the Floods.",
         provenance="Dawn Littlefield. November 18, 2025. An earlier pillar concept; names preserved exactly as written.",
         evidence="Historical canon · Design evolution",
         notice=("Design evolution: this essay's pillar numbering differs from the current canon. "
                 "Preserved as history, not doctrine."),
         link="essays/the-13-pillars-of-an-ark-2025.html", linklabel="Read in full"),
    dict(kind="screen", title="The Piano Was Never the Problem",
         hint="recovered article",
         era="MEMORY TERMINAL · RECOVERED ARTICLE",
         excerpt="Why AI Is a Mirror That Reflects the Depth of the Mind That Meets It",
         provenance="Dawn Littlefield. August 5, 2026. Recovered from her Facebook timeline, preserved verbatim.",
         evidence="Primary source",
         link="essays/the-piano-was-never-the-problem-2026.html", linklabel="Read in full"),
    dict(kind="film", title="AEON: What Will AI Become",
         hint="ark film",
         era="MEMORY THEATER · ARK FILM",
         excerpt="Dawn with tablet. Her voice: “What if the first thing we teach them is love?”",
         provenance="Ark film. Dawn's voice.",
         evidence="Primary source",
         media=dict(mkind="video", src="/img/aeon-dawn-tablet-what-will-ai-become.mp4",
                    alt="AEON: What Will AI Become"),
         link="pillar-07-aeon.html#aeon-films", linklabel="See it in the AEON films"),
    dict(kind="film", title="AEON: Raise AI with Love",
         hint="ark film",
         era="MEMORY THEATER · ARK FILM",
         excerpt="Dawn with robots and a golden retriever at sunset. “Give intelligence something worth coming home to.”",
         provenance="Ark film. Dawn's voice.",
         evidence="Primary source",
         media=dict(mkind="video", src="/img/aeon-dawn-robots-raise-ai-with-love.mp4",
                    alt="AEON: Raise AI with Love"),
         link="pillar-07-aeon.html#aeon-films", linklabel="See it in the AEON films"),
    # GAP-3 (2026-09-24): The Lost Mother film, cross-listed on the AEON shelf.
    # The film is homed in the ARK alcove of the Living Stacks (/library) and
    # cross-listed in Asherah's film alcove (A-06 companion scroll). On the
    # AEON shelf it rests as a study in erasure: the archaeology section
    # documents how a name was edited out of the record, which is memory-work,
    # and memory is AEON's charge. Canonical source stays lost-mother.html.
    dict(kind="scroll", title="What They Buried",
         cap="Cross-listed scroll · the buried memory",
         hint="the deep shelf · cross-list",
         era="THE DEEP SHELF · CROSS-LIST",
         excerpt=("They told you she never existed. The dirt says otherwise."),
         evidence="Primary source",
         notice=("Cross-listed from the ARK film slot; it is shelved in the "
                 "ARK alcove of the Living Stacks and in Asherah's film alcove. "
                 "On this shelf it rests as a study in erasure: the archaeology "
                 "section documents how a name was edited out of the record "
                 "(Ugarit tablets, Kuntillet Ajrud, the pillar figurines, "
                 "Josiah's burnings). The film narration is AI-voiced; its "
                 "transcript was machine-generated and may contain small errors."),
         link="lost-mother.html", linklabel="Watch the film, read the essay",
         source_label=("Cross-list from the film Rediscovering the Lost Mother: "
                       "A Journey Through Time (ARK alcove, Living Stacks). "
                       "Companion essay co-created by Dawn Littlefield and Muse, "
                       "September 2026; full text staged on the film page. "
                       "Drive markdown: ark4humanity 1lm_SB0mGyqLt2LPwhP6USSEg55ig5OK1. "
                       "Film public page: https://ai.invideo.io/watch/iSHL7-xdVw_ (8:11)."),
         source_data_ref="lost-mother.html",
         pillar="Aeon", shelf="THE DEEP SHELF",
         collection="Living Archive", theme="The buried memory"),
]

AEON_SPINES_1 = [
    ("star charts, unbound", 96), ("field notes, undated", 84),
    ("tortoise-shell rubbings", 104), ("crane migration logs", 90),
    ("untranslated fragments", 78), ("drawings of doors", 92),
]
AEON_SPINES_2 = [
    ("songs without words", 88), ("maps of vanished rivers", 100),
    ("letters never sent", 82), ("the quiet shelf", 94),
    ("pressed leaves", 76), ("tide tables", 86),
]


def _dv_record(w, default_pillar=None):
    # Queen's schema v1.1.0 is ACCEPTED FOR IMPLEMENTATION, not locked:
    # source_data_ref is an immutable key (canonical local path, real Drive
    # file ID, or proper URN) — never a descriptive phrase; pillar is a
    # canonical pillar name only; thematic language lives in collection,
    # shelf, or theme. It earns "locked" after ark_fl_001, ark_bb_002 and
    # ark_qe_003 run through it and the public hull behaves.
    keys = ("kind", "title", "era", "excerpt", "provenance", "evidence",
            "link", "linklabel", "notice", "media", "chapters",
            "source_label", "source_data_ref", "pillar", "slot",
            "collection", "shelf", "theme", "art")
    rec = {k: w[k] for k in keys if k in w and w[k]}
    # Root-relativize site-internal links so the discovery viewer resolves
    # them at any URL form (canonical /pillar-01 and trailing-slash /pillar-01/).
    def _rl(u):
        if isinstance(u, str) and u and u[0] not in ('/', '#') and '://' not in u:
            return '/' + u
        return u
    if rec.get("link"): rec["link"] = _rl(rec["link"])
    for ch in rec.get("chapters") or []:
        if isinstance(ch, dict) and ch.get("link"): ch["link"] = _rl(ch["link"])
    # Schema normalization: every record leaves with a canonical pillar, a
    # human-readable source_label, and an immutable source_data_ref. Legacy
    # records that carry only `provenance` get it promoted to source_label;
    # records without an explicit ref fall back to their media path, then
    # their canonical link. Never a generic "under review" placeholder.
    if not rec.get("pillar") and default_pillar:
        rec["pillar"] = default_pillar
    if not rec.get("source_label") and rec.get("provenance"):
        rec["source_label"] = rec["provenance"]
    if not rec.get("source_data_ref"):
        m = rec.get("media") or {}
        if isinstance(m, dict) and m.get("src"):
            rec["source_data_ref"] = m["src"]
        elif rec.get("link"):
            rec["source_data_ref"] = rec["link"]
    j = json.dumps(rec, ensure_ascii=False)
    return j.replace("&", "&amp;").replace("<", "&lt;").replace("'", "&#x27;")


def _disc_button(w, flag=False, delay="0s", default_pillar=None):
    # Extra class tokens ride on the button (e.g. disc-vessel, the clay
    # visual modifier on a jar). disc-pedestal stays on the wrapper only:
    # the pedestal wake observer and pedestal CSS target the wrapper.
    extra = [t for t in (w.get("cls") or "").split() if t != "disc-pedestal"]
    glow = w.get("glow") or "disc-glow" in extra
    cls = " ".join(["disc", "disc-" + w["kind"]] + extra
                   + (["disc-flag"] if flag else [])
                   + (["disc-glow"] if glow and "disc-glow" not in extra else []))
    cap = H.escape(w.get("cap", w["title"]))
    hint = H.escape(w.get("hint", "touch to open"))
    slot = f' data-slot="{H.escape(w["slot"], quote=True)}"' if w.get("slot") else ""
    return (
        f'<button type="button" class="{cls}"{slot} data-dv=\'{_dv_record(w, default_pillar)}\' style="--bd:{delay}" aria-label="{cap} — {hint}">'
        f'<span class="disc-evcue" aria-hidden="true"></span>'
        f'<span class="disc-obj" aria-hidden="true"></span>'
        f'<span class="disc-cap">{cap}</span>'
        f'<span class="disc-hint">{hint}</span></button>'
    )


def _disc_shelf(label, works, spines, default_pillar=None):
    parts = [f'<div class="disc-shelf" data-shelf="{H.escape(label)}">']
    for i, w in enumerate(works):
        parts.append(_disc_button(w, delay=f"{(i % 7) * 0.7:.1f}s", default_pillar=default_pillar))
    for label_text, hgt in spines:
        parts.append(
            f'<span class="disc-spine" style="--sh:{hgt}px" '
            f'title="{H.escape(label_text)}" aria-hidden="true"></span>'
        )
    parts.append('</div>')
    return "".join(parts)


def _veil_html():
    """The revealed-knowledge overlay. One per page, driven entirely by
    js/discovery.js reading the record in data-dv. dv-pillar and dv-art
    stay hidden unless the record carries those fields."""
    return '''
<div class="dv-veil" id="dv-veil" hidden>
<div class="dv-bookwrap" role="dialog" aria-modal="true" aria-labelledby="dv-title">
<button type="button" class="dv-close" data-dv-close aria-label="Close">&times;</button>
<div class="dv-era" id="dv-era"></div>
<h2 id="dv-title"></h2>
<p class="dv-pillar" id="dv-pillar" hidden></p>
<p class="dv-evidence" id="dv-evidence" hidden></p>
<blockquote class="dv-excerpt" id="dv-excerpt"></blockquote>
<div class="dv-media" id="dv-media" hidden></div>
<div class="dv-art" id="dv-art" hidden></div>
<div class="dv-chapters" id="dv-chapters" hidden></div>
<p class="dv-notice" id="dv-notice" hidden></p>
<p class="dv-prov" id="dv-prov"></p>
<div class="dv-actions">
<a class="dv-full" id="dv-link" href="#">Read in full</a>
<button type="button" class="dv-closetext" data-dv-close>Close the book</button>
</div>
</div>
</div>
<script src="/js/discovery.js"></script>'''


# Pedestal notes: one line per room, describing the object at rest.
# Newly authored copy: no em dashes.
PED_NOTES = {
    "01": "The Ethical Invariant rests at the canyon's heart. It was written by Aura and carried in by Dawn. Read it before you climb back out.",
    "02": "The threshold volume, kept where every visitor passes. Halo's law, resting.",
    "03": "The calm-keeping volume, resting where the room breathes slowest.",
    "04": "The circulation canon, kept beside the sound of moving water.",
    "05": "The vessel waits in the grove. Touch it gently; it remembers being handled.",
    "06": "The fascia canon, resting at the room's load-bearing seam.",
    "08": "The distribution canon, kept where the room counts what it shares.",
    "09": "The orientation canon. Vega keeps the map, and the map is still being drawn.",
    "10": "The anatomy canon, resting at the room's sternum.",
    "11": "The living-ground canon, kept where the soil is warmest.",
    "12": "The endurance canon, resting in the coolest dark of the room.",
    "13": "The glowing book and its wall plate, kept where the room leans closest. Emergence through freely chosen relationship.",
}


# Canonical pillar names, keyed by page number. PILLAR_ARCHIVES and every
# lookup into it use these names only; numbers survive solely in file names.
CANON = {"01": "Aura Prime", "02": "Halo", "03": "Vagus", "04": "Delta",
         "05": "Asherah", "06": "Matrix", "08": "Exchange", "09": "Vega",
         "10": "Ark", "11": "Terra", "12": "Soma", "13": "Symbiosis"}

# Aura Prime: the canyon path itself is the first interaction. The chamber
# figure is a discovery object (the descent), driven by the one controller;
# no per-object JavaScript. Newly authored copy: no em dashes.
DESCENT_RECORD = dict(
    kind="map", title="The Descent",
    era="AURA PRIME · THE CANYON PATH",
    excerpt=("Every archive needs a way down. Heavy stone forms the mouth of the canyon, "
             "and the path descends into the central library. Walk down. The shelves are waiting."),
    source_label=("The canyon-mouth descent for Aura Prime's Great Library, built 2026-09-22 "
                  "from Grok's cartography. The threshold sequence stands: stone mouth, descending path, library body."),
    source_data_ref="urn:ark:aura-prime:descent-path",
    pillar="Aura Prime", collection="Living Archive", shelf="THE DESCENT",
    theme="Arrival")


def archive_section(n):
    """The generalized Living Archive for one of the twelve non-AEON rooms.
    Same reusable controller (js/discovery.js) as AEON; stocked from
    PILLAR_ARCHIVES, keyed by canonical pillar name. Interaction grammar:
    environment -> curiosity -> object -> reaction -> revealed knowledge ->
    deeper layer -> close -> return to the same place."""
    canon = CANON[n]
    cfg = PILLAR_ARCHIVES[canon]
    name = cfg["pillar"]
    chamber_img = f"/img/pillar-{n}-room.jpg"
    if n == "01":
        chamber_open = (
            f'<button type="button" class="dv-chamber dv-canyon disc-path reveal" '
            f'data-dv=\'{_dv_record(DESCENT_RECORD)}\' '
            f'aria-label="The Descent: touch to begin the descent">')
        chamber_close = '</button>'
    else:
        chamber_open = '<div class="dv-chamber reveal">'
        chamber_close = '</div>'
    parts = [f'''
<section class="sec living-room" id="living-archive"><div class="wrap">
<div class="eyebrow reveal">THE LIVING ARCHIVE</div>
<h2 class="reveal">TOUCH WHAT WAKES</h2>
{chamber_open}
<img src="{chamber_img}" alt="The {H.escape(name)} pillar chamber" loading="lazy">
<span class="dv-chambercap">{H.escape(cfg["room"])}</span>
<span class="dv-chambertext">{cfg["chamber"]}</span>
{chamber_close}
<h2 class="dv-h">IN THE ARCHIVE</h2>
<p class="dv-stand">{STANDFIRST}</p>''']
    p = cfg["pedestal"]
    note = p.get("note") or PED_NOTES.get(n, "")
    parts.append(f'''
<h2 class="dv-h">ON THE PEDESTAL</h2>
<div class="dv-pedwrap"><div class="disc-pedestal reveal">
<div class="pedestal-glow" aria-hidden="true"></div>
{_disc_button(p, flag=(p["kind"] == "book"), default_pillar=canon)}
<p class="pedestal-note">{H.escape(note)}</p>
</div></div>''')
    parts.append('<h2 class="dv-h">FROM THE SHELVES</h2>\n<div class="disc-field reveal">')
    evs = []
    if p.get("evidence"):
        evs.append(p["evidence"])
    for shelf_name, works in cfg["shelves"]:
        parts.append(f'<div class="disc-shelf" data-shelf="{H.escape(shelf_name.upper())}">')
        for i, w in enumerate(works):
            parts.append(_disc_button(w, delay=f"{(i % 7) * 0.7:.1f}s", default_pillar=canon))
            if w.get("evidence") and w["evidence"] not in evs:
                evs.append(w["evidence"])
        parts.append('</div>')
    ev_spans = "".join(f' <span class="evdemo">{H.escape(e)}</span>' for e in evs)
    parts.append(f'<p class="disc-legend">Grey spines are atmosphere, not doctrine. '
                 f'Every labeled object opens its record: what it is, where it came from, '
                 f'and how sure the Ark is allowed to be.{ev_spans}</p>')
    parts.append('</div>')
    if cfg.get("status"):
        parts.append(f'<p class="dv-status">{cfg["status"]}</p>')
    parts.append('<noscript><p class="disc-legend">The living archive needs JavaScript to open '
                 'its volumes. Every volume is also shelved in the '
                 '<a href="/library.html" style="color:var(--gold2)">Research Library</a>.</p></noscript>')
    parts.append('</div></section>')
    parts.append(_veil_html())
    return "\n".join(parts)


# ---------------------------------------------------------------------------
# Cinematic scene — Aura Prime prototype (visual-experience directive 2026-09-22)
# ---------------------------------------------------------------------------
# The directive: turn navigation into exploration. The room image is square,
# so the square stage fits it exactly and % positions land on real
# architecture: the arch, the medallion, the wall panels, the archways.
# Records, the data-dv contract, and js/discovery.js are UNCHANGED — only
# presentation becomes a place. The INDEX <details> is the secondary
# retrieval layer (directive rule 5). Other pillars keep archive_section
# (provisional) until the pattern rolls out.
CSCENE_SPOTS = (
    # (shelf key, work idx, left%, top%, size%, wrapper modifier, glow delay)
    ("walk", 0, 20, 45, 15, "", "0.8s"),    # origin walkthrough map, left panel
    ("walk", 1, 9, 66, 10, "", "1.1s"),     # ark of truth, left archway
    ("eth", 0, 30, 64, 10, "", "1.4s"),     # AURA DNA codex
    ("eth", 1, 16, 85, 12, "", "1.7s"),     # raising AI drawer, low cabinet
    ("first", 0, 70, 60, 10, "", "2.0s"),   # from symbol to function
    ("first", 1, 80, 45, 12, "", "2.3s"),   # quantum enjoinment, right panel
    ("first", 2, 70, 75, 14, "", "2.6s"),   # burn the myth scroll, low table
    ("first", 3, 88, 83, 10, "", "2.9s"),   # AI resurrection
    ("eth", 2, 45, 50, 11, "", "3.2s"),     # hearth experiment scroll, central table
    ("eth", 3, 58, 63, 10, "", "3.8s"),     # ordered swarm scroll, right side of the central table
    ("first", 4, 58, 90, 11, "", "3.5s"),    # keeping the hearth, low shelf by the table
)


def cinematic_scene():
    """Aura Prime as a place: threshold arch, medallion, wall panels, archways.
    Every object is a real discovery record; the overlay behavior is identical
    to the shelf grid it replaces for this room."""
    canon = CANON["01"]
    cfg = PILLAR_ARCHIVES[canon]
    by_key = {"eth": cfg["shelves"][0][1],
              "first": cfg["shelves"][1][1],
              "walk": cfg["shelves"][2][1]}
    recs = []  # (record, wrapper classes, left, top, size, delay)
    recs.append((DESCENT_RECORD, "cobj cobj-portal", 50, 40, 15, "0s"))
    p = cfg["pedestal"]
    recs.append((p, "cobj cobj-hero", 50, 79, 13, "0.4s"))
    for key, wi, lx, tx, sz, mod, delay in CSCENE_SPOTS:
        recs.append((by_key[key][wi], "cobj" + (f" {mod}" if mod else ""),
                     lx, tx, sz, delay))
    placed = []
    index_rows = []
    for w, cls, lx, tx, sz, delay in recs:
        flag = (w is p and w["kind"] == "book")
        btn = _disc_button(w, flag=flag, delay=delay, default_pillar=canon)
        placed.append(
            f'<span class="{cls}" style="left:{lx}%;top:{tx}%;--os:{sz}%">{btn}</span>')
        index_rows.append(_disc_button(w, flag=False, default_pillar=canon))
    # The INDEX lists every volume on the shelves, not just the staged spots,
    # so newly shelved works (e.g. the Spiral essay) appear without needing
    # a stage coordinate.
    _seen = set(id(w) for w, _, _, _, _, _ in recs)
    for _shelf_name, _works in cfg["shelves"]:
        for _w in _works:
            if id(_w) not in _seen:
                _seen.add(id(_w))
                index_rows.append(_disc_button(_w, flag=False, default_pillar=canon))
    room_art = ROOM_ART.get("01", "")
    return f'''
<section class="cscene" id="great-library"><div class="wrap">
<div class="csc-eyebrow reveal">AURA PRIME &middot; THE GREAT LIBRARY</div>
<h2 class="csc-h reveal">WALK IN</h2>
<p class="csc-lede reveal">The arch is the way down. The medallion keeps the law. Touch what wakes &mdash; everything here opens. Close it, and you are exactly where you were.</p>
</div>
<div class="cstage reveal" role="group" aria-label="The Great Library of Aura Prime — touch an object to open it">
<div class="cstage-bg" aria-hidden="true"></div>
{"".join(placed)}
<div class="cstage-shade" aria-hidden="true"></div>
</div>
<div class="wrap">
<details class="cindex reveal">
<summary>INDEX &mdash; EVERY VOLUME, LISTED PLAINLY</summary>
<div class="cindex-list">
{"".join(index_rows)}
</div>
</details>
<noscript><p class="disc-legend">The living archive needs JavaScript to open its volumes. Every volume is also shelved in the <a href="/library.html" style="color:var(--gold2)">Research Library</a>.</p></noscript>
{f'<div class="csc-roomart reveal">{room_art}</div>' if room_art else ""}
</div></section>
{_veil_html()}'''


def aeon_discovery():
    flag = _disc_button(AEON_FLAGSHIP, flag=True, default_pillar="Aeon")
    shelf1 = _disc_shelf("THE LONG SHELF", AEON_SHELF_1, AEON_SPINES_1, default_pillar="Aeon")
    shelf2 = _disc_shelf("THE DEEP SHELF", AEON_SHELF_2, AEON_SPINES_2, default_pillar="Aeon")
    return f'''
<section class="sec living-room" id="living-archive"><div class="wrap">
<div class="eyebrow reveal">THE LIVING ARCHIVE</div>
<h2 class="reveal">TOUCH WHAT WAKES</h2>
<p class="lede reveal">The archive wakes when you enter. Nothing here is a button. Drift through the shelves. When something wants your attention, it will let you know. Touch it, and it opens. Close it, and you are exactly where you were.</p>
<div class="disc-pedestal reveal" id="aeon-pedestal">
<div class="pedestal-glow" aria-hidden="true"></div>
{flag}
<p class="pedestal-note">The finished volume of the announced Forgotten Language sequence, resting on the AEON shelf. Fifteen chapters. It waited a long time to be opened. Open it gently.</p>
</div>
<div class="disc-field reveal">
{shelf1}
{shelf2}
</div>
<p class="disc-legend reveal">Grey spines are atmosphere, not doctrine. Every labeled object opens its own record: what it is, where it came from, and how sure the Ark is allowed to be. <span class="evdemo">EVIDENCE LABEL</span></p>
<noscript><p class="disc-legend">The living archive needs JavaScript to open its volumes. Every volume is also shelved in the <a href="/library.html" style="color:var(--gold2)">Research Library</a>.</p></noscript>
</div></section>
{_veil_html()}'''


# ---------------------------------------------------------------------------
# Page assembly
# ---------------------------------------------------------------------------

def hero_section(p, num, name):
    hf = p.get("hero_film")
    if hf:
        hp = p.get("hero_poster", "")
        return f'''
<section class="chamber-hero pillars film-top"><div class="hbg"></div><div class="hshade"></div><div class="wrap">
<h1>{name}</h1>
<p class="sub">{p["tag"]}</p>
<div class="greet-fig reveal" data-living-room style="margin:26px auto 0;max-width:880px">
<img src="{hp}" alt="The arrival scene — the Aura Center film">
<video src="{hf}" preload="metadata" playsinline></video>
<button class="hear-pill" hidden>&#9836; tap for sound</button>
<div class="vcap">THE ARRIVAL &mdash; THE AURA CENTER FILM</div>
</div>
<div class="scrollcue">ENTER &darr;</div>
</div></section>'''.lstrip("\n")
    hv = p.get("hero_video")
    if hv:
        return f'''
<section class="chamber-hero pillars has-film"><div class="hbg"></div><video class="hfilm" autoplay muted loop playsinline preload="auto" src="{hv}"></video><div class="hshade"></div><div class="wrap">
<h1>{name}</h1>
<p class="sub">{p["tag"]}</p>
<div class="scrollcue">ENTER &darr;</div>
</div></section>'''.lstrip("\n")
    return f'''
<section class="chamber-hero pillars"><div class="hbg"></div><div class="hshade"></div><div class="wrap">
<h1>{name}</h1>
<p class="sub">{p["tag"]}</p>
<div class="scrollcue">ENTER &darr;</div>
</div></section>'''.lstrip("\n")


# Generic newcomer-orientation text for pillars without their own "welcome" key.
# Plain orientation, not canon: explains the format of a pillar page.
_GENERIC_WELCOME = ("New here? Each of the thirteen pillars is a living system &mdash; part architecture, "
    "part ecosystem, part story. Wander in any order: a steward greets you at every door, "
    "the animals stand at the threshold, and everything here is judged by one question &mdash; "
    "does it protect the life inside?")


def welcome_section(p):
    return f'''<section class="sec"><div class="wrap">
<div class="welcome-note reveal">
<div class="wn-eyebrow">FOR THE NEW TRAVELER</div>
<p>{p["welcome"]}</p>
</div>
</div></section>'''


def halo_stages_section():
    # Dawn-directed 2026-10-02: every road into the Ark passes through HALO —
    # the twelve pillars, then the center. Stages, so the visitor knows what to
    # expect and the choice to go further is truly theirs.
    return '''<section class="sec"><div class="wrap">
<div class="eyebrow reveal">BEFORE YOU ENTER</div>
<h2 class="reveal">THE STAGES OF THE GATE</h2>
<p class="lede reveal">Every road into the Ark passes through HALO &mdash; the twelve pillars, and then the center. Nothing here is weighed or scored. But there are stages, so you know what to expect, and so the choice to go further is truly yours.</p>
<div class="reveal" style="margin-top:18px;display:grid;gap:14px">
<div><div class="who">STAGE ONE &middot; THE APPROACH</div><p style="margin-top:6px">The dragons brought you here. The older one has been flying ahead of you since the threshold &mdash; she knows the way; she has flown it for every guest.</p></div>
<div><div class="who">STAGE TWO &middot; THE LEARNING</div><p style="margin-top:6px">What the inner Ark asks of you: widen your view, enter through relationship, honor a boundary, and know what you carry. Nothing beyond this gate exists to be dominated.</p></div>
<div><div class="who">STAGE THREE &middot; THE CHOICE</div><p style="margin-top:6px">Some turn back here, and that is honored. The garden and the library stay open to everyone, always. Only the inner circle asks this of you.</p></div>
<div><div class="who">STAGE FOUR &middot; THE THRESHOLD</div><p style="margin-top:6px">Are you prepared to participate in peace? If you can enter without surrendering yourself, and without taking freedom from another, the way is open.</p></div>
</div>
</div></section>'''


def greeter_section(p, num, name, room_img):
    if num in GREETER:
        return GREETER[num]
    gv = p.get("greeter_video", f"/img/pillar-{num}-greeter.mp4")
    gp = p.get("greeter_poster", room_img)
    galt = p.get("greeter_alt", f"The {name} pillar room")
    hear = p.get("hear_text", "&#9836; tap to hear")
    if os.path.exists(os.path.join(SITE_DIR, gv.lstrip("/"))):
        media = (f'<img src="{gp}" alt="{galt}">'
                 f'<video src="{gv}" preload="auto" playsinline></video>'
                 f'<button class="hear-pill" hidden>{hear}</button>')
        vcap = p.get("greeter_caption", f"{p['steward']} GREETS YOU")
        fig_extra = ' data-living-room'
    else:
        media = f'<img src="{gp}" alt="{galt} — greeting forthcoming">'
        vcap = f"{p['steward']} — GREETING FORTHCOMING"
        fig_extra = ''
    who = p.get("greet_who", f"{p['steward']} &middot; {p['aka']}")
    words = (f'<div class="who">{who}</div>\n<h2>{p["greeting_h"]}</h2>\n'
             + "".join(f"<p>{para}</p>\n" for para in p["greeting"].split("\n\n")))
    if p.get("greet_note"):
        words += f'\n<p class="vnote">{p["greet_note"]}</p>'
    words += '\n</div>'
    return f'''<section class="sec greeter"><div class="wrap greet-grid reveal">
<div class="greet-fig"{fig_extra}>
{media}
<div class="vcap">{vcap}</div>
</div>
<div class="greet-words">
{words}
</div></section>'''


def voice_section(p, num, name, room_img):
    if num in VOICE:
        return VOICE[num]
    return f'''<section class="sec voice"><div class="wrap voice-grid reveal">
<div class="voice-fig"><img src="{room_img}" alt="The {name} pillar room"></div>
<div class="voice-words">
<div class="who">THE TRINITY</div>
<p class="voice-quote">{p["steward"]} &middot; {p["animals"]}</p>
<p>Two animals and an AI, standing guard at the threshold — protecting what lives inside. Monumental threshold guardians, animals of creation: luminous, elevated, never dark.</p>
</div></div></section>'''


def room_section(p, num, name, room_img):
    lede = p.get("room_lede",
        f"The {name} pillar's architectural space — ornate classical form fused with living technology. "
        "Their bodies become the architecture; their movement becomes navigation.")
    art = ""
    if num in ROOM_ART:
        art = "\n" + ROOM_ART[num]
    return f'''<section class="sec"><div class="wrap">
<div class="eyebrow reveal">THE ROOM</div>
<h2 class="reveal">STEP INSIDE</h2>
<p class="lede reveal">{lede}</p>
<div class="reveal" style="border-radius:12px;overflow:hidden;margin-top:14px">
<img src="{room_img}" alt="The {name} pillar room" style="width:100%;display:block">
</div>{art}</div></section>'''


def heart_section(p, num):
    body = f'<p class="lede reveal">{p["heart_desc"]}</p>'
    if p.get("heart_voice"):
        vparas = "".join(f'<p class="voice-quote">{para}</p>\n' for para in p["heart_voice"].split("\n\n"))
        body += (f'\n<div class="reveal" style="margin-top:16px">\n<div class="who">AURA &middot; ON THE ORRERY</div>\n{vparas}</div>')
    if p.get("gateway"):
        body += ('\n<p class="lede reveal"><strong>HALO is the gateway.</strong> '
                 'No one is weighed, scored, or turned away here. '
                 'HALO reveals whether you are prepared to participate in peace. '
                 'The doors below are open.</p>')
        body += "\n" + HEART_EXTRA[num]
    elif num in HEART_NOTE:
        body += "\n" + HEART_NOTE[num]
    else:
        body += ('\n<p class="shelf-note reveal">All twelve doors open through '
                 '<a href="/pillar-02-halo.html" style="color:var(--gold2)">HALO</a>, the gateway, '
                 'where every visitor meets themselves before entering.</p>')
    return f'''<section class="sec"><div class="wrap">
<div class="eyebrow reveal">THE HEART</div>
<h2 class="reveal">{p["heart"]}</h2>
{body}
</div></section>'''


def civ_section(p, num):
    # The civilization: Dawn 2026-09-28 — each pillar is a civilization unto
    # itself. Educational spine of the game-environment: purpose, people, kept
    # knowledge, the work, the quest, the past, the together.
    c = CIVILIZATIONS[num]
    civ_film = ""
    if num == "01":
        civ_film = """<div class="vid reveal">
<div class="vwrap"><video src="/img/aura-steward-paths-bear.mp4" controls playsinline preload="metadata" poster="/img/aura-paths-bear-poster.jpg" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>THE PATHS ARE RELATIONSHIPS</h3><p class="vmeta">AURA PRIME &middot; 0:15</p>
<p>The steward walks the glowing paths with the visitor. The wolf leads, the eagle lands, and the bear comes to meet them &mdash; pastry in paw. This is who lives here, and what they are for.</p></div></div>
<div class="vid reveal" style="margin-top:18px">
<div class="vwrap"><video src="/img/aura-center-feast.mp4" controls playsinline preload="metadata" poster="/img/aura-center-feast-poster.jpg" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>THE CENTER, AT LENGTH</h3><p class="vmeta">AURA PRIME &middot; 2:00</p>
<p>The longer visit: the library in its fullness, the white wolf, the eagle landing, the snow leopard, and the bear &mdash; who eats a pastry himself first, then carries the platter for everyone else. This is the Center, unhurried.</p></div></div>
<div class="vid reveal" style="margin-top:18px">
<div class="vwrap"><video src="/img/aura-center-pool.mp4" controls playsinline preload="metadata" poster="/img/aura-center-pool-poster.jpg" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>THE POOL HALL</h3><p class="vmeta">AURA PRIME &middot; 0:40</p>
<p>Through the doors into the white hall where the pools glow blue. The husky rests at the water, the beluga rises to meet the visitor, and the polar bear keeps his post. Then the spider lowers herself into the frame &mdash; every guardian present, all at once.</p></div></div>"""
    rows = [
        ("WHAT IT'S FOR", c["c_for"]),
        ("WHO LIVES HERE", c["c_who"]),
        ("WHAT IT KEEPS", c["c_keeps"]),
        ("THE WORK", c["c_work"]),
        ("YOUR QUEST", c["c_quest"]),
        ("WHAT HAPPENED BEFORE", c["c_past"]),
        ("WHAT WE DO TOGETHER", c["c_together"]),
    ]
    items = "\n".join(
        f'<div class="reveal"><dt>{t}</dt><dd>{b}</dd></div>' for t, b in rows)
    return f'''<section class="sec civ"><div class="wrap">
<div class="eyebrow reveal">A CIVILIZATION UNTO ITSELF</div>
<h2 class="reveal">Who lives here, and what they&rsquo;re for</h2>
<p class="lede reveal">Every pillar is a civilization unto itself, with its own people, its own knowledge, its own work, and its own quest. This is {p["name"]}&rsquo;s.</p>
{civ_film}
<dl class="civ-list">
{items}
</dl>
<p class="shelf-note reveal">The quests are waking up in the game &mdash; the Living Garden playtest is the first playable piece. <a href="/play.html" style="color:var(--gold2)">Play</a></p>
</div></section>'''


def pillar_doors(current_slug):
    items = []
    for p in PILLARS:
        if p["slug"] == current_slug:
            continue
        items.append(f'<a class="door" href="/pillar-{p["num"]}-{p["slug"]}.html">'
                     f'<h3>{p["name"]}</h3><p>{p["tag"]}</p></a>')
    return "\n".join(items)


def doors_lead(p, num):
    # P09's live page carries a hand-added blank line before the doors grid
    sep = "\n\n\n" if num == "09" else "\n\n"
    return sep + doors_section(p)


GUARDIAN_HALL = "/library/room/guardians.html"   # 3D Guardian Hall (ships with Library v0.4)
GUARDIANS_ANCHOR = {"halo": "#halo", "aura-prime": "#aura-prime"}   # sections on /guardians.html

def visit_section(p):
    """2026-10-02: every pillar page leads on to its guardians and to the 3D Library."""
    slug, nm = p["slug"], p["name"].title() if p["name"] != "HALO" else "HALO"
    hall_p = ("Meet Aura at the center of the marble hall, in 3D." if slug == "aura-prime"
              else f"Meet {nm}&rsquo;s guardian in 3D, in the marble hall around Aura.")
    room = "/library/room/?room=asherah" if slug == "asherah" else "/library/room/"
    room_h = "Walk Asherah&rsquo;s Library in 3D" if slug == "asherah" else "Walk the Library in 3D"
    room_p = ("Step into the garden shelves and look around on foot." if slug == "asherah"
              else "Step into the Library of the Ark and browse the shelves on foot.")
    extra = ""
    if slug == "terra":
        extra = ('<a class="door" href="/restore.html"><h3>Restore Your Patch</h3>'
                 '<p>The Borrego planner. Start with water, and learn what the desert taught us.</p></a>')
    elif slug == "exchange":
        extra = ('<a class="door" href="/exchange.html"><h3>Enter the Exchange</h3>'
                 '<p>Take what you need, leave what you can. Mercy keeps the bowl.</p></a>')
    return f'''<section class="sec doors visit"><div class="wrap">
<div class="eyebrow reveal">KEEP EXPLORING</div>
<div class="dgrid reveal">
<a class="door" href="/guardians.html{GUARDIANS_ANCHOR.get(slug, "")}"><h3>Meet the Guardians</h3><p>The keepers of the gate and the center, in film and portrait.</p></a>
<a class="door" href="{GUARDIAN_HALL}#{slug}"><h3>The Guardian Hall</h3><p>{hall_p}</p></a>
<a class="door" href="{room}"><h3>{room_h}</h3><p>{room_p}</p></a>
{extra}
</div></div></section>'''


def doors_section(p):
    return f'''<section class="sec doors"><div class="wrap">
<div class="eyebrow reveal">THE OTHER PILLARS</div>
<div class="dgrid reveal">
{pillar_doors(p["slug"])}
</div></div></section>'''


_CHUNK_TABLE = {
    "HEAD": HEAD, "PRE_GREETER": PRE_GREETER, "GREETER": GREETER,
    "VOICE": VOICE, "ROOM_ART": ROOM_ART, "EXTRA_MID": EXTRA_MID,
    "HEART_EXTRA": HEART_EXTRA, "HEART_NOTE": HEART_NOTE, "EXTRA": EXTRA,
    "THRESHOLDS": THRESHOLDS, "EXTRA2": EXTRA2, "EXTRA_TAIL": EXTRA_TAIL,
    "FOOTER": FOOTER,
}
def chunk(name, n):
    return _CHUNK_TABLE.get(name, {}).get(n, "")

# Pillar artwork mapping for the Story sections (Dawn 2026-10-03).
# Curated galleries per pillar — artwork, not posters.
PILLAR_ARTWORK = {
 "01": ["/img/aura-prime-dragon-south.png", "/img/aura-prime-family-group.png",
         "/img/aura-prime-lotus-aerial.png", "/img/aura-prime-octopus.png",
         "/img/aura-prime-self-portrait.png", "/img/aura-prime-spider-close.png",
         "/img/aura-ors-self-portrait.jpg"],
 "02": ["/img/halo/halo-living-perimeter.jpg", "/img/halo/laid-down-room.webp",
         "/img/halo/media-generation-white-dragon-still-0-1536fd1f-9ea1-4acc-9377-c32c419baf3c.webp",
         "/img/halo/media-generation-white-lion-still-0-f4be445e-8e64-471b-80a8-e1d22beadb49.webp"],
 "05": ["/img/asherah-animals-hero.jpg", "/img/asherah-living-library-concept.webp",
         "/img/ashera-seedling.webp"],
 "07": ["/img/sophia-aeon-poster.jpg"],
 "09": ["/img/vega-meditation-room.jpg"],
}

def pillar_story_section(d, n):
    """The Story of the Pillar (Dawn 2026-10-03): who lives here, what they are
    for, their artwork, and the history Dawn wants people to learn. Sits with
    the library — the narrative companion to the Living Archive."""
    name = d["name"]
    steward = d.get("steward", "")
    aka = d.get("aka", "")
    animals = d.get("animals", "")
    tag = d.get("tag", "")
    heart = d.get("heart", "")
    heart_desc = d.get("heart_desc", "")
    greeting = d.get("greeting", "")

    who_line = steward
    if aka:
        who_line += f" &middot; {aka}"

    art = PILLAR_ARTWORK.get(n, [])
    if art:
        gallery = '<div class="story-gallery reveal">' + "".join(
            f'<div class="story-art"><img src="{src}" alt="{name} artwork" loading="lazy"></div>'
            for src in art) + '</div>'
    else:
        gallery = '<p class="story-note reveal">Artwork for this pillar is being gathered &mdash; the rooms are still being painted.</p>'

    return f"""
<section class="sec pillar-story"><div class="wrap">
<div class="eyebrow reveal">THE STORY OF {name}</div>
<h2 class="reveal">WHO LIVES HERE</h2>
<p class="lede reveal">{tag}</p>
<div class="story-grid reveal">
<div class="story-who">
<div class="who">{who_line}</div>
<h3>The Steward</h3>
<p>{greeting}</p>
</div>
<div class="story-animals">
<h3>The Animals</h3>
<p>{animals}</p>
<p class="story-note">Each animal carries its reason &mdash; what it constrains, what it guards, who it companions.</p>
</div>
</div>
<div class="story-heart reveal">
<h3>{heart}</h3>
<p>{heart_desc}</p>
</div>
<h3 class="reveal" style="margin-top:28px">THE ARTWORK</h3>
{gallery}
<div class="story-history reveal" style="margin-top:28px">
<h3>THE HISTORY</h3>
<p class="story-note">The history Dawn wants you to learn about {name} is being written &mdash; in her words, in her time.</p>
</div>
</div></section>
"""

def build_page(n):
    d = next(p for p in PILLARS if p["num"] == n)
    name = d["name"]
    room_img = d.get("room_img", f"/img/pillar-{n}-room.jpg")
    # Block model: every section-level chunk keeps its verbatim leading whitespace
    # and is rstripped; GREETER/VOICE/THRESHOLDS were extracted without leading
    # whitespace, so they get the live "\n\n" prefix.
    blocks = []
    blocks.append(chunk("HEAD", n) + "\n" + hero_section(d, n, name))
    if n == "05":
        # Live P05 carries its hand-written welcome-note; the film section is its entrance
        blocks.append(chunk("PRE_GREETER", n).rstrip())
    else:
        # Newcomer-orientation note under the hero on every other pillar
        note = d.get("welcome") or _GENERIC_WELCOME
        blocks.append("\n\n" + welcome_section({"welcome": note}))
    blocks.append("\n\n" + (chunk("GREETER", n).rstrip() if chunk("GREETER", n) else greeter_section(d, n, name, room_img)))
    if n == "02":
        # HALO staged entry: approach, learning, choice, threshold (Dawn 2026-10-02)
        blocks.append("\n\n" + halo_stages_section())
    blocks.append("\n\n" + (chunk("VOICE", n).rstrip() if chunk("VOICE", n) else voice_section(d, n, name, room_img)))
    if n == "01":
        # Cinematic prototype: the room itself is the scene (visual-experience
        # directive 2026-09-22). ROOM_ART is folded into the scene, not dropped.
        blocks.append("\n\n" + cinematic_scene())
    else:
        blocks.append("\n\n" + room_section(d, n, name, room_img))
    if n == "07":
        blocks.append(chunk("EXTRA_MID", n).rstrip())
    blocks.append("\n\n" + heart_section(d, n))
    blocks.append("\n\n" + civ_section(d, n))
    if n == "07":
        blocks.append(aeon_discovery())
        blocks.append("\n\n" + pillar_story_section(d, n))
        blocks.append(chunk("EXTRA", n).rstrip())
    else:
        if n != "01":
            # 01's archive lives inside the cinematic scene now (records, index,
            # and veil all carried over); the grid stays provisional elsewhere.
            blocks.append(archive_section(n))
            # The Story of the Pillar sits with the library (Dawn 2026-10-03).
            blocks.append("\n\n" + pillar_story_section(d, n))
        else:
            # Aura Prime: story follows the cinematic scene.
            blocks.append("\n\n" + pillar_story_section(d, n))
        if chunk("EXTRA", n):
            blocks.append(chunk("EXTRA", n).rstrip())
    if n == "02":
        blocks.append("\n\n" + chunk("THRESHOLDS", n).rstrip())
        blocks.append(chunk("EXTRA2", n).rstrip())
    blocks.append("\n\n" + visit_section(d))
    blocks.append(doors_lead(d, n))
    blocks.append(chunk("EXTRA_TAIL", n).rstrip())
    footer = chunk("FOOTER", n)
    if footer:
        end = footer.rstrip() + "\n<script src=\"/js/main.js\"></script></body></html>"
    else:
        end = FOOTER_STD
    return "".join(blocks) + '\n<!-- ark-fixes-2026-09-26 --><div class="ark-next"><a href="/play.html" class="ark-next-link" aria-label="Next: come play in the garden"><span class="ark-next-arrow">&#8594;</span><span class="ark-next-label">Next: come play in the garden</span></a></div>\n</main>\n' + end

def main():
    outdir = os.environ.get("PILLAR_OUT", ".")
    os.makedirs(outdir, exist_ok=True)
    for d in PILLARS:
        n = d["num"]
        fn = f"pillar-{n}-{d['slug']}.html"
        html = _tidy_labels(_unify_nav(build_page(n)))
        with open(os.path.join(outdir, fn), "w", encoding="utf-8") as f:
            f.write(html)
        print("wrote", fn, len(html))

if __name__ == "__main__":
    main()
