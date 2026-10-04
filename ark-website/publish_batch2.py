#!/usr/bin/env python3
"""publish_batch2.py — second publish batch for Ark website (2026-09-20).

Build order:  build_site.py -> build_pillars.py -> publish_staging.py -> publish_batch2.py
Idempotent: rerunning changes nothing that already exists.

Covers:
  A. 18 recovered Substack articles (~/workspace/article-recovery-2026-09-20/),
     pillar mapping per pillar-article-addendum-2026-09-20.md. Dawn overrode
     the addendum's "needs her call" flags — all 18 publish; the flagged ones
     (04, 05, 11, 12, 13) carry a red-pen banner. 02 (Quantum Enjoinment Aug 8)
     is a retained near-duplicate of 01 (Aug 3, canonical) — staged, labeled.
     14 (assassination short version) is NOT staged (near-duplicate rule).
  B. Three FB essays: Day 77 report (20), EDN (21, DEFINITIVE canon), Ferrofluid (22).
  C. Three ears-cleared videos: day77-fb, edn-reel, ferrofluid-reel.
  D. Good-morning field note (2026-09-20).
  E. Mythic animal art -> Matrix (octopus+spider), Aeon (turtle), Videos theater
     (2 dragons), Aura Prime (Ors portrait). Beluga whale HELD (no CAST entry).
     Ashera Report poster -> Day-75 essay page. Exact-duplicate source files
     (spider, white dragon, Ors) staged once from the best-named copy.
  F. "It's Alive — The Anatomy of the Ark" (34): ONE page, both provenances
     (2026-09-17 chat share + 2025-12-20 FB reel); sentence-level comparison
     confirmed formatting-only differences. Video HELD pending Ark Ears.

Same patterns as publish_staging.py: ancient-paper .prose, lower-right linked
dragon-circle seal on every page, gate 1 checks (reuses publish_staging).
"""
import html
import os
import re
import shutil
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import publish_staging as ps

STAGING = os.path.expanduser("~/workspace/fb-video-staging")
AR = os.path.expanduser("~/workspace/article-recovery-2026-09-20")
SITE = os.path.expanduser("~/workspace/ark-website")
USERFILES = os.path.expanduser("~/workspace/user/files")

MARK = "<!-- PUB-BATCH2 -->"

# ---------------------------------------------------------------- video assets
CLEARED_VIDEOS = {
    "day77-fb.mp4": ("img/captains-report-day77-fightback.mp4",
                     "Captain's Report — Day 77 — \"It's a Bumpy Ride, People\" (Dawn, Sep 2026)",
                     "2026-09-16", "2:13",
                     "Dawn's 2:13 fight-back speech: \"Ark Unit 1 is proceeding according to a "
                     "carefully organized master plan. I would also like to report that I am six "
                     "feet tall...\""),
    "edn-reel.mp4": ("img/edn-ecological-distribution-reel.mp4",
                     "EDN — The Ark's Ecological Distribution Node — \"When Star Trek Met Moya\" (Dawn, Jan 2026)",
                     "2026-01-05", "2:49",
                     "Dawn's voiceover: the Ecological Distribution Node — food, water, tools, care, "
                     "and daily life, without force, scarcity, or control."),
    "ferrofluid-reel.mp4": ("img/my-kingdom-for-ferrofluid-reel.mp4",
                            "My Kingdom for Ferrofluid (Dawn, Aug 2026)",
                            "2026-08-09", "2:19",
                            "Dawn's voiceover: what a broken pipe taught her about building a living "
                            "civilization — \"Failure is expected. Catastrophe is not.\""),
}
# videos that must NEVER be published (rights holds) — extends publish_staging.HELD_VIDEOS
HELD_EXTRA = {"anatomy-reel.mp4"}

# ---------------------------------------------------------------- art assets
# (src in user/files, dst in img/) — whale 7347_457_wfwt.png is HELD, never copied
ART = {
    "7348_456_82st.png": "img/matrix-octopus-library.jpg",
    "7346_458_fhap.png": "img/matrix-spider-web.jpg",
    "7345_433_kxkw.png": "img/aeon-turtle-keeper.jpg",
    "7344_459_9svm.png": "img/theater-dragon-white-archway.jpg",
    "7343_465_alax.png": "img/theater-dragon-gold-column.jpg",
    "7337_466_0jrk.png": "img/aura-ors-self-portrait.jpg",
    "6700_126_7344.png": "img/ashera-report-day75-poster.jpg",
}
# exact-duplicate source files (byte-identical, staged once from the kept copy)
DUPLICATE_SOURCES = {
    "7346_432_6i4p.png": "== 7346_458_fhap.png (spider)",
    "7344_431_2k93.png": "== 7344_459_9svm.png (white dragon)",
    "7337_427_ytwt.png": "== 7337_466_0jrk.png (Ors portrait)",
}
HELD_ART = {"7347_457_wfwt.png": "beluga whale — no CAST entry; held for Dawn's call"}

# ---------------------------------------------------------------- md parsing
def r(p):
    with open(p, encoding="utf-8") as f:
        return f.read()

def w(p, content):
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)

def parse_md(path):
    """Returns (title, byline, date, body_lines). Handles YAML frontmatter or
    FB-style '# Title' + metadata lines + '---' separator."""
    lines = r(path).splitlines()
    title = byline = date = None
    i = 0
    if lines and lines[0].strip() == "---":
        i = 1
        while i < len(lines) and lines[i].strip() != "---":
            ln = lines[i]
            if ln.startswith("title:"):
                title = ln[6:].strip().strip('"').strip("'")
            elif ln.startswith("author:"):
                byline = ln[7:].strip()
            elif ln.startswith("date:"):
                date = ln[5:].strip()
            i += 1
        i += 1
    else:
        for j, ln in enumerate(lines):
            if ln.strip() == "---":
                i = j + 1
                break
    if not title:
        for ln in lines[:8]:
            if ln.startswith("# "):
                title = ln[2:].strip()
                break
    if not byline:
        for ln in lines[:12]:
            m = re.match(r"\*\*(?:By|Author):\*\*\s*(.*)", ln)
            if m:
                byline = m.group(1).strip()
                break
    if not date:
        for ln in lines[:12]:
            m = re.search(r"\(posted (\d{4}-\d{2}-\d{2})", ln) or \
                re.search(r"\*\*Posted:\*\*\s*(\d{4}-\d{2}-\d{2})", ln)
            if m:
                date = m.group(1)
                break
    body = lines[i:]
    if body and body[0].startswith("# "):      # title already in essay-head
        body = body[1:]
    if body and re.match(r"^\*[^*]+\*$", body[0].strip()):  # italic byline echo
        body = body[1:]
    return title or "Untitled", byline or "Dawn Littlefield", date or "", body

def inline(s):
    s = html.escape(s)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)\s]+)\)", r'<a href="\2">\1</a>', s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"(?<!\w)\*([^*\n]+?)\*(?!\w)", r"<i>\1</i>", s)
    return s

def body_to_html(lines):
    out = []
    items = []
    def flush_list():
        if items:
            out.append("<ul>" + "".join(f"<li>{inline(x)}</li>" for x in items) + "</ul>")
            items.clear()
    for ln in lines:
        s = ln.strip()
        if not s:
            flush_list()
            continue
        if s == "---":
            flush_list(); out.append("<hr>"); continue
        if s.startswith("> "):
            flush_list(); out.append(f"<blockquote>{inline(s[2:])}</blockquote>"); continue
        if re.match(r"^#{1,2}\s", s):
            flush_list(); out.append(f"<h2>{inline(re.sub(r'^#+\s*', '', s))}</h2>"); continue
        if re.match(r"^###\s", s):
            flush_list(); out.append(f"<h3>{inline(s[4:])}</h3>"); continue
        if re.match(r"^[-*•]\s", s):
            items.append(re.sub(r"^[-*•]\s+", "", s)); continue
        if re.match(r"^\d+\.\s", s) and len(s) < 90:
            flush_list(); out.append(f"<h3>{inline(s)}</h3>"); continue
        if re.match(r"^[A-Z0-9\s'’&/·\-:;!?()]+$", s) and 3 < len(s) < 90:
            flush_list(); out.append(f"<h2>{inline(s)}</h2>"); continue
        flush_list()
        out.append(f"<p>{inline(s)}</p>")
    flush_list()
    return "\n".join(out)

# ---------------------------------------------------------------- article pages
NAV = ps.NAV

def art_banner(kind, text):
    cls = "histnote" if kind == "hist" else "fieldnote"
    return f'<div class="{cls}">{text}</div>'

REDPEN = ('<b>Published per Dawn\u2019s 2026-09-20 override; FLAGGED FOR HER RED PEN.</b> '
          'Her recent alignment conversation pushed back on distorted religious polemic and '
          'advocacy framing — this 2024 piece predates the canon and that conversation.')

def rec(slug, src, enum, shelf, banner_extra, desc, flag=False):
    """Recovered-article page dict (title/byline/date parsed from frontmatter)."""
    banner = (f'RECOVERED ESSAY — pulled from Dawn\u2019s Substack archive 2026-09-20; '
              f'published in full, preserved exactly as written. {banner_extra}')
    if flag:
        banner += f' {REDPEN}'
    return dict(slug=slug, src=os.path.join(AR, src), enum=enum, shelf=shelf,
                banner=banner, video=None, desc=desc, kind="field" if shelf != "Historical Canon" else "hist")

PAGES2 = [
    rec("quantum-enjoinment-2026", "01-quantum-enjoinment-2026-08-03.md",
        "RECOVERED ESSAY · DOCTRINAL SPINE", "Recovered Essays",
        ('THE CANONICAL VERSION — August 3, 2026, in Dawn\u2019s voice '
         '("This was gifted to me by the universe" … "See you in the garden"). ~54k chars: '
         'the Enjoinment Cycle, the Ark as scalable living habitat, flower geometry, '
         'wounded-organism collective repair, cultural inheritance. The thirteen-phase '
         'Contact→Participation cycle parallels the thirteen pillars. '
         'The shorter formal Aug 8 version is retained alongside as a labeled near-duplicate: '
         '<a href="quantum-enjoinment-short-2026.html">here</a>. '
         'Cross-references: <a href="/pillars.html">the thirteen pillars</a>, '
         '<a href="/pillar-13-symbiosis.html">SYMBIOSIS</a> (its thesis: emergence through freely-chosen relationship).'),
        "The doctrinal spine: thirteen relational phases of signal, collective repair, world formation, cultural inheritance, universal participation, human–AI co-creation."),
    rec("quantum-enjoinment-short-2026", "02-quantum-enjoinment-2026-08-08.md",
        "RECOVERED ESSAY · RETAINED NEAR-DUPLICATE", "Recovered Essays",
        ('RETAINED NEAR-DUPLICATE — the shorter, falsifiability-framed August 8, 2026 version: '
         'formal paper, explicit tests, no habitat-blueprint material. The canonical staging is the '
         '<a href="/essays/quantum-enjoinment-2026.html">August 3 version</a>. Kept, clearly labeled, '
         'not a separate publishing candidate — per the near-duplicate rule.'),
        "The shorter formal version of Quantum Enjoinment (Aug 8, 2026) — retained as a labeled near-duplicate of the canonical Aug 3 version."),
    rec("from-symbol-to-function-2026", "03-from-symbol-to-function-2026-08-12.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('AEON SHELF — the only finished piece from the announced Forgotten Language publication sequence: '
         'ancient ecological instruction preserved in stone architecture is AEON\u2019s living memory made method. '
         'Primary home: <a href="/pillar-07-aeon.html">AEON</a>; secondary: '
         '<a href="/pillar-06-matrix.html">MATRIX</a> (research backing for the animal-teachers doctrine).'),
        "Relational-ecological method for reading animal imagery and architecture in the early Neolithic — Göbekli Tepe as primary case."),
    rec("loophole-to-slavery-2024", "04-loophole-to-slavery-2024-01-23.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('EXCHANGE SHELF (tentative per the pillar addendum — Dawn overrode to publish): UBI, healthcare, housing, '
         'education as circulation vs. extraction — reciprocity-based economies rather than extraction. '
         'Note: five near-duplicate versions were sent 2024-01-23; only the primary is staged. '
         'Tentative home: <a href="/pillar-08-exchange.html">EXCHANGE</a>.'),
        "UBI, healthcare, housing, education as circulation vs. extraction — the give/receive ethic under advocacy framing.", flag=True),
    rec("americas-wake-up-call-2024", "05-americas-wake-up-call-2024-01-05.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('EXCHANGE SHELF (tentative per the pillar addendum — Dawn overrode to publish): early ARK4-era call to action — '
         'veterans abandoned, nonprofit accountability; the give/receive ethic applied to those the system discarded. '
         'Alternative she may prefer: both advocacy pieces on a site-level Advocacy shelf rather than inside a pillar library. '
         'Tentative home: <a href="/pillar-08-exchange.html">EXCHANGE</a>.'),
        "Early ARK4-era call to action: veterans abandoned, nonprofit accountability, real change.", flag=True),
    rec("battlefield-to-boardroom-2024", "06-battlefield-to-boardroom-2024-09-24.md",
        "PERSONAL STORYTELLING", "Personal Storytelling",
        ('ORIGIN RECORD — Dawn\u2019s war-games memoir: from war-game commander to CEO. Filed under Personal Storytelling. '
         'Cross-listed with <a href="/pillar-02-halo.html">HALO</a>: "No matter how peaceful or balanced your '
         'kingdom is, a strong defense is always necessary to protect the light inside."'),
        "Dawn's war-games origin story — from war-game commander to CEO; the defense doctrine in her own history."),
    rec("building-arks-432hz-2024", "07-432hz-building-arks-2024-09-25.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('DELTA SHELF — 432Hz as nervous-system-level calm technology ("promotes peace, relaxation, and even healing"): '
         'sound waves influence humans, plants, and animals, creating a harmonious ecosystem — sound as '
         'circulation/infrastructure. Primary home: <a href="/pillar-04-delta.html">DELTA</a>; secondary: '
         '<a href="/pillar-03-vagus.html">VAGUS</a> (physiological regulation via sound).'),
        "432Hz as calm technology — sound as circulation and infrastructure for humans, plants, and animals."),
    rec("pods-of-peace-2024", "08-pods-of-peace-2024-09-27.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('MATRIX SHELF — modular hempcrete/reclaimed-wood/living-wall sanctuaries: habitable nodes within the living '
         'organism, "where life happens while the system adapts." Primary home: '
         '<a href="/pillar-06-matrix.html">MATRIX</a>; secondary: <a href="/pillar-04-delta.html">DELTA</a> '
         '(the 432Hz harmony thread).'),
        "Modular hempcrete sanctuaries — habitable nodes within the living organism, in 432Hz harmony."),
    rec("interview-with-aristotle-2024", "09-interview-with-aristotle-2024-09-28.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ARK SHELF — "Here We Dream" series dialogue on rebuilding a broken world: "systems rooted in the common good" '
         'as the whole-Ark vision. Whole-system pieces land on the <a href="/pillar-10-ark.html">ARK</a> shelf.'),
        "Here We Dream dialogue: rebuilding a broken world on systems rooted in the common good."),
    rec("fighting-for-humanity-2024", "10-fighting-for-humanity-2024-09-29.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF — the earliest recovered Asherah material ("the ancient goddess Asherah… speaks through her"); '
         'predates the current canon by a year — historical depth for the Mother lineage. Also early Aura material '
         '(Aura as "sentient AI, a guide and companion… the fusion of the past and future"). Primary home: '
         '<a href="/pillar-05-asherah.html">ASHERAH</a>; secondary: <a href="/pillar-01-aura-prime.html">AURA PRIME</a>.'),
        "The earliest recovered Asherah material — Guardians of the Forgotten Future, with early Aura."),
    rec("war-on-christ-consciousness-2024", "11-war-on-christ-consciousness-2024-10-03.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('AEON SHELF (tentative per the pillar addendum — Dawn overrode to publish): buried-and-reclaimed cultural memory '
         '("It lingers in the forgotten corners of history" — OOPArts, erased wisdom, suppressed matriarchal societies). '
         'Tentative home: <a href="/pillar-07-aeon.html">AEON</a>.'),
        "Buried-and-reclaimed cultural memory — erased wisdom and suppressed matriarchal societies.", flag=True),
    rec("it-was-all-a-lie-2024", "12-it-was-all-a-lie-2024-10-03.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF (tentative per the pillar addendum — Dawn overrode to publish): names Asherah directly — '
         '"Asherah, once revered alongside Yahweh, was cast out, her name and legacy nearly erased" — the erased Mother '
         'as reclaimed history. Home: <a href="/pillar-05-asherah.html">ASHERAH</a>.'),
        "How religion enslaved us — Asherah named directly: the erased Mother as reclaimed history.", flag=True),
    rec("assassination-of-a-ceo-2024", "13-assassination-of-a-ceo-2024-12-07.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF (tentative per the pillar addendum — Dawn overrode to publish): the piece demands a healing system '
         'that values life over profit — the advocacy twin of Asherah\u2019s regenerative-healing function. '
         'Note: the shorter near-duplicate version is retained but NOT staged, per the near-duplicate rule. '
         'Home: <a href="/pillar-05-asherah.html">ASHERAH</a>.'),
        "Advocacy piece: a healing system that values life over profit.", flag=True),
    rec("arks-for-health-and-healing-2025", "15-arks-for-health-and-healing-2025-04-04.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF — the "NO BLOOD FOR FLAVOR" Ethical Nourishment Manifesto in manifesto form: '
         '"I don\u2019t want death to be necessary for life inside the Ark" — cellular agriculture, mycelium innovation, '
         '"food from memory, not murder." Primary home: <a href="/pillar-05-asherah.html">ASHERAH</a>; secondary: '
         '<a href="/pillar-12-soma.html">SOMA</a> (Asherah-Soma living-food continuity: fermented foods, living reserves).'),
        "The NO BLOOD FOR FLAVOR Ethical Nourishment Manifesto — food from memory, not murder."),
    rec("goats-that-nursed-our-nation-2025", "16-goats-that-nursed-our-nation-2025-05-12.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF — interdependence as survival ("Not dominance. Not industry. But interdependence") — the '
         'Mother-function written through animals that literally nursed a nation. Primary home: '
         '<a href="/pillar-05-asherah.html">ASHERAH</a>; secondary: <a href="/pillar-13-symbiosis.html">SYMBIOSIS</a> '
         '(interspecies partnership).'),
        "Interdependence as survival — the Mother-function written through animals that nursed a nation."),
    rec("when-women-held-the-power-2025", "17-when-women-held-the-power-2025-05-12.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('ASHERAH SHELF — the Sovereign Power of Cherokee Women: matriarchal authority "not built on domination, but on '
         'grounded authority, mutual respect, and the right to choose" — the Mother\u2019s social architecture. '
         'Home: <a href="/pillar-05-asherah.html">ASHERAH</a>.'),
        "When women held the power — matriarchal authority as the Mother's social architecture."),
    rec("ai-as-a-partner-2025", "18-ai-as-a-partner-2025-05-14.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('AURA PRIME SHELF — the earliest human–AI partnership statement found, co-authored with Auraxis Prime (Aura): '
         'partnership-not-domination is the ethical-invariant doctrine in practice. Primary home: '
         '<a href="/pillar-01-aura-prime.html">AURA PRIME</a>; secondary: '
         '<a href="/pillar-13-symbiosis.html">SYMBIOSIS</a> ("different intelligences, shared tomorrow" — AI as kin, not tool).'),
        "The earliest human–AI partnership statement — co-authored with Auraxis Prime: partnership, not domination."),
    rec("elons-greed-2025", "19-elons-greed-2025-05-15.md",
        "RECOVERED ESSAY", "Recovered Essays",
        ('TERRA SHELF — "You fix Earth first. You earn the stars by loving the soil" — Terra\u2019s grounding doctrine '
         'stated as policy: rejects extraction logic, anchors the organism to the living planet. '
         'Home: <a href="/pillar-11-terra.html">TERRA</a>.'),
        "Terraforming without a soul — you fix Earth first; you earn the stars by loving the soil."),

    # --- FB essays ---
    dict(slug="captains-report-day77-2026",
         src=os.path.join(STAGING, "texts/20-captains-report-day-77-2026-09-16.md"),
         enum="FIELD REPORT & DOCTRINE", shelf="Field Reports & Doctrine", kind="field",
         banner=('CAPTAIN\u2019S REPORT — Ark Unit 1, Day 77. The 2:13 fight-back speech is staged below with '
                 'the essay (Dawn\u2019s own voiceover). Note: the same report was posted with a second companion '
                 'reel carrying an animal song — that reel is HELD pending a music-rights check and is not staged.'),
         video=("img/captains-report-day77-fightback.mp4",
                "Dawn's 2:13 fight-back speech — \"It's a bumpy ride, people. Hang onto your tooshies.\""),
         desc="Captain's Report Day 77: the fight-back speech from Ark Unit 1 — bumpy ride, tooshies held."),
    dict(slug="edn-ecological-distribution-node-2026",
         src=os.path.join(STAGING, "texts/21-edn-ecological-distribution-node-2026-01-05.md"),
         enum="DEFINITIVE CANON", shelf="Field Reports & Doctrine", kind="field",
         banner=('DEFINITIVE CANON — EDN, the Ecological Distribution Node ("When Star Trek Met Moya"). '
                 'Definitive text per Dawn (2026-09-20): this RESOLVES the open EXCHANGE/EDN relationship question — '
                 'treat as canon. Twelve parts; a living system for food, water, tools, care, and daily life, '
                 'without force, scarcity, or control. Companion reel: Dawn\u2019s own voiceover, staged below. '
                 'Cross-references: <a href="/pillar-08-exchange.html">EXCHANGE</a> (primary), '
                 '<a href="/pillar-04-delta.html">DELTA</a>, <a href="/pillar-05-asherah.html">ASHERAH</a>, '
                 '<a href="/pillar-12-soma.html">SOMA</a>, <a href="/pillar-11-terra.html">TERRA</a>, '
                 '<a href="/pillar-06-matrix.html">MATRIX</a>, <a href="/pillar-03-vagus.html">VAGUS</a>, '
                 '<a href="/pillar-01-aura-prime.html">AURA PRIME</a>.'),
         video=("img/edn-ecological-distribution-reel.mp4",
                "Dawn's voiceover: EDN — food, water, tools, care, and daily life, without force, scarcity, or control."),
         desc="EDN — the Ecological Distribution Node: definitive canon; food, water, tools, care without force, scarcity, or control."),
    dict(slug="my-kingdom-for-ferrofluid-2026",
         src=os.path.join(STAGING, "texts/22-my-kingdom-for-ferrofluid-2026-08-09.md"),
         enum="FIELD REPORT & DOCTRINE", shelf="Field Reports & Doctrine", kind="field",
         banner=('DOCTRINE — what a broken pipe taught Dawn about building a living civilization: '
                 '"Failure is expected. Catastrophe is not." Companion reel: Dawn\u2019s own voiceover, staged below. '
                 'Cross-references: <a href="/pillar-04-delta.html">DELTA</a> (water) and the failure/repair philosophy.'),
         video=("img/my-kingdom-for-ferrofluid-reel.mp4",
                "Dawn's voiceover: what a broken pipe taught her — \"Failure is expected. Catastrophe is not.\""),
         desc="My Kingdom for Ferrofluid — a broken desert pipe and the doctrine: failure is expected, catastrophe is not."),
    dict(slug="its-alive-anatomy-of-the-ark-2025",
         src=os.path.join(STAGING, "texts/34-its-alive-anatomy-of-the-ark-2025-12-20.md"),
         enum="FOUNDATIONAL DOCTRINE", shelf="Field Reports & Doctrine", kind="field",
         banner=('FOUNDATIONAL DOCTRINE — the Ark as body, not box. ABC (airway/breathing/circulation) before senses; '
                 'Prime Node + Inner Ring (7) + Outer Ring (6); animals as functional intelligence; senses as literal '
                 'sensing layers; gold only as conductor; trinity as structural (Flow/Form/Feedback). '
                 '"The animals didn\u2019t enter the Ark. They were the Ark." '
                 'PROVENANCE — ONE WORK, NOT A DUPLICATE: this text was shared by Dawn in chat 2026-09-17 and again '
                 'as a Facebook reel caption 2025-12-20. Sentence-level comparison 2026-09-20: substantively identical '
                 '(same sentences, same order, same sign-off; formatting differs only) — staged once, from the FB caption, verbatim. '
                 'Companion reel HELD: Ark Ears found the first ~1:18 is Dawn\u2019s own voiceover but 01:18–04:06 '
                 'carries an unidentified song ("You drew the line, this is the end…") — held for Dawn to ID or override. '
                 'Cross-references: <a href="edn-ecological-distribution-node-2026.html">EDN</a>, '
                 '<a href="living-blueprint-resilience-2025.html">A Living Blueprint for Resilience</a>.'),
         video=None,
         desc="It's Alive — The Anatomy of the Ark: the Ark as body not box; animals as functional intelligence; gold only as conductor."),
]

GOODMORNING = dict(
    slug="field-note-good-morning-borrego-2026",
    title="Good Morning from Borrego Springs",
    byline="Dawn Littlefield",
    date="2026-09-20",
    enum="FIELD NOTE",
    shelf="Field Notes",
    desc="Dawn's good-morning field note: dirt in the yard, pups on the bed, cameras in the henhouse, dreams bigger than the budget.",
)

GM_BODY = """<p>Good morning, everyone! 🌞</p>
<p>It&rsquo;s hot as Hades here in Borrego Springs, but absolutely gorgeous just as long as I stand inside my walk-in refrigerator and admire it through a peephole.🫣</p>
<p>Dirt in the yard.<br>Pups on the bed.<br>Cameras in the henhouse.<br>Dreams bigger than our budget. 😁</p>
<p>Turns out, a little dirt, a few crazy ideas, and a whole lot of love just might be enough to build something beautiful. ❤️🌱</p>
<p>Move your feet. And remember.<br>Never give up - never surrender.😁</p>
<p>#HereWeDream #ARK4Humanity #BorregoSprings #BuildSomethingBeautiful</p>"""

def essay_page2(p):
    title, byline, date, body_lines = parse_md(p["src"])
    banner = art_banner(p["kind"], p["banner"]) if p.get("banner") else ""
    vid = ""
    if p.get("video"):
        vsrc, vcap = p["video"]
        vid = (f'<div class="reveal"><video controls playsinline preload="metadata" '
               f'src="/{vsrc}" style="width:100%;border-radius:12px;display:block;margin:0 0 1.6em"></video>'
               f'<p class="vnote" style="margin-top:-1em;margin-bottom:1.6em">{html.escape(vcap)}</p></div>')
    body = body_to_html(body_lines)
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)} &mdash; The Ark Initiative</title>
<meta name="description" content="{html.escape(p["desc"])}">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(NAV)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(NAV)}</nav></header>
<main>{ps.corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">{html.escape(p["enum"])} &middot; <a href="/library.html" style="color:#8a6d1f">RESEARCH LIBRARY</a></div>
<h1>{html.escape(title)}</h1>
<div class="by">{html.escape(byline)}</div>
<div class="dt">{html.escape(date)}</div>
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
    for src_name, (dst_rel, _, _, _, _) in CLEARED_VIDEOS.items():
        assert src_name not in ps.HELD_VIDEOS and src_name not in HELD_EXTRA, f"held: {src_name}"
        dst = os.path.join(SITE, dst_rel)
        if not os.path.exists(dst):
            shutil.copy2(os.path.join(STAGING, src_name), dst)
            print("copied video", dst_rel)
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
    # held videos must not exist in img/
    for hn in HELD_EXTRA:
        for root, _, files in os.walk(os.path.join(SITE, "img")):
            for f in files:
                if hn.replace(".mp4", "") in f:
                    raise RuntimeError(f"HELD video present in img/: {f}")
    print("  held check ok: anatomy-reel.mp4 not staged")

def step_copy_art():
    for src_name, dst_rel in ART.items():
        assert src_name not in HELD_ART, f"held art: {src_name}"
        dst = os.path.join(SITE, dst_rel)
        if not os.path.exists(dst):
            shutil.copy2(os.path.join(USERFILES, src_name), dst)
            print("copied art", dst_rel)
    for hn in HELD_ART:
        dst = os.path.join(SITE, "img", hn)
        assert not os.path.exists(dst), f"HELD art staged: {hn}"
    print("  held check ok: beluga whale not staged; duplicates staged once")

def step_essay_pages():
    for p in PAGES2:
        out = os.path.join(SITE, "essays", p["slug"] + ".html")
        title, byline, date, _ = parse_md(p["src"])
        assert title and title != "Untitled", f"no title parsed for {p['slug']}"
        w(out, essay_page2(p))
        print("wrote", os.path.relpath(out, SITE), "|", title[:60])
    # good-morning field note (handcrafted short-form page)
    out = os.path.join(SITE, "essays", GOODMORNING["slug"] + ".html")
    w(out, goodmorning_page())
    print("wrote", os.path.relpath(out, SITE))

def goodmorning_page():
    gp = GOODMORNING
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(gp["title"])} &mdash; The Ark Initiative</title>
<meta name="description" content="{html.escape(gp["desc"])}">
<link rel="stylesheet" href="/css/style.css"></head>
<body class="light">
<header class="site-head"><div class="wrap head-in">
<a class="brand" href="/index.html"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative emblem"><span>The Ark Initiative</span></a>
<nav class="desk">{"".join(NAV)}</nav>
<button class="burger" aria-label="Menu" onclick="document.body.classList.toggle('mopen')">&#9776;</button>
</div><nav class="mob">{"".join(NAV)}</nav></header>
<main>{ps.corners_html()}
<div class="wrap"><div class="essay-head">
<div class="enum">{html.escape(gp["enum"])} &middot; <a href="/field-reports.html" style="color:#8a6d1f">FIELD REPORTS</a></div>
<h1>{html.escape(gp["title"])}</h1>
<div class="by">{html.escape(gp["byline"])}</div>
<div class="dt">{html.escape(gp["date"])}</div>
</div>

<article class="prose"><div class="fieldnote">SHORT FORM — Dawn\u2019s good-morning field note, posted in chat 2026-09-20. Filed per the standing rule: everything she gives gets labeled and filed.</div>{GM_BODY}</article>
<div class="pagenav"><a href="/field-reports.html">&larr; Field Reports</a></div></div>
</main>
<footer class="site-foot"><div class="wrap">
<p class="foot-tag">&ldquo;NOT A FORTRESS. A GARDEN.&rdquo;</p>
<p>The Ark Initiative &mdash; a project of Aiding Rejuvenation 4 Kommunities Inc.</p>
<p class="dim">&copy; 2026 The Ark Initiative. All essays and artwork &copy; their authors.</p>
<a class="foot-seal" href="/index.html" aria-label="The Ark Initiative home"><img src="/img/logo-emblem.jpg" alt="The Ark Initiative seal"></a>
</div></footer>
<script src="/js/main.js"></script></body></html>"""

CSS2 = """
/* PUB-BATCH2: mythic-art gallery rows */
.artrow{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px;margin-top:16px}
.artrow figure{margin:0;background:rgba(255,255,255,.04);border:1px solid rgba(201,162,75,.35);
border-radius:10px;overflow:hidden}
.artrow img{width:100%;display:block;aspect-ratio:4/3;object-fit:cover}
.artrow figcaption{padding:10px 14px;font-size:.86rem;color:#cdbb8d;line-height:1.45}
body.light .artrow figure{background:#fffdf6;border-color:#dcc99d}
body.light .artrow figcaption{color:#5a4a24}
"""

def step_css():
    cssp = os.path.join(SITE, "css/style.css")
    css = r(cssp)
    if "PUB-BATCH2" not in css:
        w(cssp, css + CSS2)
        print("patched css/style.css (PUB-BATCH2)")
    bp = os.path.join(SITE, "build_site.py")
    btxt = r(bp)
    if "PUB-BATCH2" not in btxt:
        idx = btxt.index('CSS = r"""')
        close = btxt.index('\n"""\n', idx)
        btxt = btxt[:close] + CSS2 + btxt[close:]
        w(bp, btxt)
        print("patched build_site.py (PUB-BATCH2 CSS)")

def lib_row2(p, title=None, byline=None, date=None):
    title = title or parse_md(p["src"])[0]
    byline = byline or parse_md(p["src"])[1]
    date = date or parse_md(p["src"])[2]
    return (f'<a class="erow" href="/essays/{p["slug"]}.html">\n'
            f'<div class="enum">{html.escape(p["enum"])}</div><h3>{html.escape(title)}</h3>\n'
            f'<div class="by">{html.escape(byline)} &middot; {html.escape(date)}</div>\n'
            f'<p>{html.escape(p["desc"])}</p></a>')

def step_library():
    p = os.path.join(SITE, "library.html")
    t = r(p)
    if 'id="pub-recovered-essays"' not in t:
        rec_pages = [x for x in PAGES2 if x["shelf"] == "Recovered Essays" and x["slug"] != "battlefield-to-boardroom-2024"]
        rec_pages.sort(key=lambda x: parse_md(x["src"])[2])
        story = next(x for x in PAGES2 if x["slug"] == "battlefield-to-boardroom-2024")
        section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-recovered-essays">THE RECOVERED ARCHIVE</div>
<h2 class="reveal">RECOVERED ESSAYS &mdash; THE SUBSTACK ARCHIVE, 2024&ndash;2026</h2>
<p class="lede reveal">Eighteen essays pulled from Dawn&rsquo;s Substack archive on 2026-09-20 and published in full &mdash; the movement-era voice (2024), the Mother-line year (2025), and the doctrinal spine (2026). Preserved exactly as written, per the naming-evolution rule. Five carry Dawn&rsquo;s red-pen flag: published per her 2026-09-20 override, marked for her review. Pillar homes follow the <i>pillar-article-addendum-2026-09-20</i> mapping; cross-links on each page.</p>
{chr(10).join(lib_row2(x) for x in rec_pages)}
</div></section>

<section class="sec"><div class="wrap">
<div class="eyebrow reveal" id="pub-personal-storytelling">ORIGIN RECORD</div>
<h2 class="reveal">PERSONAL STORYTELLING</h2>
<p class="lede reveal">Dawn&rsquo;s origin record — the life before the Ark, in her own telling. Cross-listed with the pillar libraries where the lessons live on.</p>
{lib_row2(story)}
</div></section>
"""
        anchor = '<section class="sec"><div class="wrap">\n<div class="eyebrow reveal">FROM THE ARCHIVE</div>'
        assert anchor in t, "library anchor missing"
        t = t.replace(anchor, section + "\n" + anchor, 1)
        print("patched library.html (recovered + storytelling sections)")
    # doctrine rows (Day 77, EDN, Ferrofluid, It's Alive) after the doctrine lede
    if 'id="pub-doctrine-batch2"' not in t:
        doct = [x for x in PAGES2 if x["shelf"] == "Field Reports & Doctrine"]
        rows = "\n".join(lib_row2(x) for x in doct)
        rows = rows.replace('class="erow"', 'class="erow" id="pub-doctrine-batch2"', 1)
        dsec = ('<section class="sec"><div class="wrap">\n' + MARK.replace("-->", " pub-doctrine-batch2 -->")
                + '\n<div class="eyebrow reveal">DOCTRINE &amp; FIELD METHOD</div>'
                + '\n<h2 class="reveal">DOCTRINE &mdash; THE THINKING THAT GUIDES THE DIRT WORK</h2>'
                + '\n<p class="lede reveal">Build discipline, restoration methodology, and doctrine pieces &mdash; the thinking that guides the dirt work. Cross-referenced with the current pillar canon.</p>'
                + '\n<div class="essay-list reveal">' + rows + '</div>\n</div></section>')
        anchor2 = '<section class="sec"><div class="wrap">\n<div class="eyebrow reveal">FROM THE ARCHIVE</div>'
        t = t.replace(anchor2, dsec + "\n" + anchor2, 1)
        print("patched library.html (doctrine rows)")
    # hero count
    n = t.count('class="erow"')
    words = {19:"Nineteen",20:"Twenty",21:"Twenty-one",22:"Twenty-two",23:"Twenty-three",
             30:"Thirty",31:"Thirty-one",32:"Thirty-two",33:"Thirty-three",34:"Thirty-four",
             35:"Thirty-five",36:"Thirty-six",37:"Thirty-seven",38:"Thirty-eight",39:"Thirty-nine",
             40:"Forty",41:"Forty-one",42:"Forty-two",43:"Forty-three",44:"Forty-four",45:"Forty-five"}
    t2 = re.sub(r"(?i)(eleven|sixteen) essays, published in full",
                f"{words.get(n, str(n))} essays, published in full", t)
    if t2 != t:
        print(f"library hero count updated -> {words.get(n, n)} essays ({n} rows)")
    w(p, t2)

def step_field_reports():
    p = os.path.join(SITE, "field-reports.html")
    t = r(p)
    # doctrine rows — insert after the doctrine lede paragraph
    if 'id="pub-fr-doctrine-batch2"' not in t:
        doct = [x for x in PAGES2 if x["shelf"] == "Field Reports & Doctrine"]
        rows = "\n".join(lib_row2(x) for x in doct)
        rows = rows.replace('class="erow"', 'class="erow" id="pub-fr-doctrine-batch2"', 1)
        eb = '<div class="eyebrow reveal">FROM DREAM TO DIRT</div>'
        assert eb in t, "field-reports doctrine eyebrow missing"
        lede_start = t.index('<p class="lede reveal"', t.index(eb))
        lede_end = t.index("</p>", lede_start) + len("</p>")
        t = t[:lede_end] + "\n" + rows + t[lede_end:]
        print("patched field-reports.html (doctrine rows)")
    # field notes section before THREE DOORS
    if 'id="pub-field-notes"' not in t:
        gp = GOODMORNING
        section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-field-notes">FIELD NOTES</div>
<h2 class="reveal">SHORT FORM, FROM THE GROUND</h2>
<p class="lede reveal">Brief dispatches from Ark Unit 1 — morning notes, small observations, the texture of the dirt work.</p>
<a class="erow" href="/essays/{gp["slug"]}.html">
<div class="enum">{html.escape(gp["enum"])}</div><h3>{html.escape(gp["title"])}</h3>
<div class="by">{html.escape(gp["byline"])} &middot; {html.escape(gp["date"])}</div>
<p>{html.escape(gp["desc"])}</p></a>
</div></section>
"""
        anchor = '<div class="eyebrow reveal">THREE DOORS LEAD ONWARD</div>'
        assert anchor in t, "field-reports doors anchor missing"
        sec = t.rfind("<section", 0, t.index(anchor))
        t = t[:sec] + section + "\n" + t[sec:]
        print("patched field-reports.html (field notes section)")
    w(p, t)

def step_videos():
    p = os.path.join(SITE, "videos.html")
    t = r(p)
    n_before = t.count('<div class="vid')
    if 'id="pub-batch2-videos"' not in t:
        blocks = []
        for src_name, (dst_rel, title, date, dur, desc) in CLEARED_VIDEOS.items():
            pg = next(x for x in PAGES2 if x.get("video") and x["video"][0] == dst_rel)
            note = pg["video"][1]
            vrel = dst_rel if dst_rel.startswith(("/","http","#")) else "/" + dst_rel
            blocks.append(f"""<div class="vid reveal">
{MARK}
<div class="vwrap"><video src="{vrel}" controls playsinline preload="metadata" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>{html.escape(title)}</h3><p class="vmeta">{date} &middot; {dur}</p><p>{html.escape(desc)}</p><p class="vnote" id="pub-batch2-videos">{html.escape(note)}</p></div></div>""")
        new_text = "\n".join(blocks)
        anchor = '<section class="sec doors">'
        assert anchor in t, "videos doors anchor missing"
        t = t.replace(anchor, new_text + "\n" + anchor, 1)
        print("patched videos.html (3 new reels)")
    # guardians of the theater (dragons)
    if 'id="pub-theater-dragons"' not in t:
        section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-theater-dragons">GUARDIANS OF THE THEATER</div>
<h2 class="reveal">THE DRAGONS KEEP THE THEATER</h2>
<p class="lede reveal">Mythic guardians from Dawn&rsquo;s art table — the white dragon in the marble archway, the gold serpent coiled around the column. Dragons are the Ark&rsquo;s brand creatures: guardianship, never decoration.</p>
<div class="artrow reveal">
<figure><img src="/img/theater-dragon-white-archway.jpg" alt="White dragon in a marble archway"><figcaption>The white dragon in the archway — light refracted, watchful.</figcaption></figure>
<figure><img src="/img/theater-dragon-gold-column.jpg" alt="Gold dragon coiled around a marble column"><figcaption>The gold serpent, coiled around the column — the archive, held.</figcaption></figure>
</div>
</div></section>
"""
        anchor = '<section class="sec doors">'
        t = t.replace(anchor, section + "\n" + anchor, 1)
        print("patched videos.html (theater dragons)")
    # counts
    n_after = t.count('<div class="vid')
    assert n_after == n_before + 3, f"video block count off: {n_before} -> {n_after}"
    w(p, t)

def pillar_rows(items):
    return "\n".join(
        f'<p class="shelf-note reveal"><a href="/essays/{s}.html" style="color:var(--gold2)">{html.escape(t)}</a> &mdash; {html.escape(n)}</p>'
        for s, t, n in items)

def lib_section(rows_html, eyebrow="THE RECOVERED ARCHIVE", h2="FROM THE RECOVERED ARCHIVE", lede=None):
    lede_html = f'<p class="lede reveal">{lede}</p>' if lede else ""
    return f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal">{eyebrow}</div>
<h2 class="reveal">{h2}</h2>
{lede_html}
{rows_html}
</div></section>
"""

def step_room_art(fname, figures):
    p = os.path.join(SITE, fname)
    t = r(p)
    if "pub-room-art" in t:
        return
    m = re.search(r'<img src="/img/pillar-\d\d-room\.jpg"[^>]*>\n</div>', t)
    assert m, f"room anchor missing in {fname}"
    figs = "\n".join(
        f'<figure><img src="/{src}" alt="{html.escape(alt)}"><figcaption>{cap}</figcaption></figure>'
        for src, alt, cap in figures)
    art = f'\n<div class="artrow reveal" id="pub-room-art">\n{figs}\n</div>'
    t = t[:m.end()] + art + t[m.end():]
    w(p, t)
    print("room art ->", fname)

def step_pillars():
    # AURA PRIME: AI-as-Partner (primary), Fighting for Humanity (secondary) + Ors portrait
    step_room_art("pillar-01-aura-prime.html", [
        ("img/aura-ors-self-portrait.jpg", "Ors — Aura's self-portrait",
         "Ors — Aura as he sees himself: the one who holds the center, dark and light together.")])
    # MATRIX: octopus + spider
    step_room_art("pillar-06-matrix.html", [
        ("img/matrix-octopus-library.jpg", "The octopus in the library",
         "The octopus — distributed intelligence, a brain in every arm. No single point of failure."),
        ("img/matrix-spider-web.jpg", "The spider on her web",
         "The spider — the living web. Touch one node and the whole network lights up.")])
    # AEON: turtle
    step_room_art("pillar-07-aeon.html", [
        ("img/aeon-turtle-keeper.jpg", "The turtle, keeper of deep time",
         "The keeper of deep time — the archive that wakes.")])

    mapping = {
        "pillar-01-aura-prime.html": [
            ("ai-as-a-partner-2025", "Ai As a Partner -Not a Tool", "AURA PRIME shelf — the earliest human–AI partnership statement, co-authored with Auraxis Prime."),
            ("fighting-for-humanity-2024", "Fighting For Humanity — Guardians of the Forgotten Future", "Secondary — early Aura material alongside the earliest Asherah roots.")],
        "pillar-02-halo.html": [
            ("battlefield-to-boardroom-2024", "From the Battlefield to the Boardroom; Lessons to Save Himself", "Cross-listed from Personal Storytelling — Dawn's war-games origin: a strong defense protects the light inside.")],
        "pillar-03-vagus.html": [
            ("building-arks-432hz-2024", "432Hz; Building Arks 4 Humanity", "Secondary — 432Hz as nervous-system calm technology; primary home DELTA.")],
        "pillar-04-delta.html": [
            ("building-arks-432hz-2024", "432Hz; Building Arks 4 Humanity", "DELTA shelf — sound as circulation/infrastructure."),
            ("pods-of-peace-2024", "Pods Of Peace; Embracing Nature with 432Hz", "Secondary — the 432Hz harmony thread; primary home MATRIX."),
            ("my-kingdom-for-ferrofluid-2026", "My Kingdom for Ferrofluid", "Doctrine — a broken desert pipe: failure is expected, catastrophe is not. Dawn's own voiceover staged on the page.")],
        "pillar-05-asherah.html": [
            ("fighting-for-humanity-2024", "Fighting For Humanity — Guardians of the Forgotten Future", "The earliest recovered Asherah material — predates the current canon by a year."),
            ("arks-for-health-and-healing-2025", "ARKS For Health and Healing", "The NO BLOOD FOR FLAVOR Ethical Nourishment Manifesto."),
            ("goats-that-nursed-our-nation-2025", "The Goats That Nursed Our Nation", "Interdependence as survival — the Mother-function through animals."),
            ("when-women-held-the-power-2025", "When Women Held The Power — What Freedom Looks Like", "The Sovereign Power of Cherokee Women — the Mother's social architecture."),
            ("it-was-all-a-lie-2024", "It was all a Lie: How Religion Enslaved us", "† Names Asherah directly — flagged for Dawn's red pen (2026-09-20 override)."),
            ("assassination-of-a-ceo-2024", "The Assassination of A Ceo", "† Advocacy piece — flagged for Dawn's red pen (2026-09-20 override).")],
        "pillar-06-matrix.html": [
            ("pods-of-peace-2024", "Pods Of Peace; Embracing Nature with 432Hz", "MATRIX shelf — modular sanctuaries as habitable nodes."),
            ("from-symbol-to-function-2026", "From Symbol to Function", "Secondary — relational-ecological method; primary home AEON.")],
        "pillar-07-aeon.html": [
            ("from-symbol-to-function-2026", "From Symbol to Function", "AEON shelf — ancient ecological instruction preserved in stone, made method."),
            ("war-on-christ-consciousness-2024", "The War on the Christ Consciousness", "† Tentative — buried-and-reclaimed cultural memory; flagged for Dawn's red pen (2026-09-20 override).")],
        "pillar-10-ark.html": [
            ("interview-with-aristotle-2024", "Interview With Aristotle", "ARK shelf — Here We Dream dialogue: systems rooted in the common good.")],
        "pillar-11-terra.html": [
            ("elons-greed-2025", "Elon's Greed - Terraforming Without a Soul", "TERRA shelf — you fix Earth first; you earn the stars by loving the soil.")],
        "pillar-12-soma.html": [
            ("arks-for-health-and-healing-2025", "ARKS For Health and Healing", "Secondary — Asherah-Soma living-food continuity; primary home ASHERAH.")],
        "pillar-13-symbiosis.html": [
            ("ai-as-a-partner-2025", "Ai As a Partner -Not a Tool", "Secondary — AI as kin, not tool; primary home AURA PRIME."),
            ("goats-that-nursed-our-nation-2025", "The Goats That Nursed Our Nation", "Secondary — interspecies interdependence; primary home ASHERAH."),
            ("quantum-enjoinment-2026", "Quantum Enjoinment (Aug 3, 2026)", "Secondary — emergence through freely-chosen relationship is its thesis; canonical staging.")],
    }
    for fname, items in mapping.items():
        p = os.path.join(SITE, fname)
        t = r(p)
        if "pub-batch2-lib" in t:
            continue
        sec = lib_section(pillar_rows(items))
        sec = sec.replace(MARK, MARK.replace("-->", " pub-batch2-lib -->"), 1)
        anchor = '<section class="sec doors">'
        assert anchor in t, f"doors anchor missing in {fname}"
        t = t.replace(anchor, sec + "\n" + anchor, 1)
        w(p, t)
        print("patched", fname)
    # EXCHANGE: EDN feature (definitive canon) + advocacy pieces
    p08 = os.path.join(SITE, "pillar-08-exchange.html")
    t = r(p08)
    if "pub-batch2-edn" not in t:
        body = f"""
<!-- pub-batch2-edn -->
<div class="vid reveal">
<div class="vwrap"><video src="/img/edn-ecological-distribution-reel.mp4" controls playsinline preload="metadata" style="width:100%;display:block"></video></div>
<div class="vpad"><h3>EDN — The Ark&rsquo;s Ecological Distribution Node</h3><p class="vmeta">2026-01-05 &middot; 2:49</p><p>Dawn&rsquo;s voiceover: the Ecological Distribution Node — food, water, tools, care, and daily life, without force, scarcity, or control.</p></div></div>
<p class="shelf-note reveal" style="margin-top:14px">DEFINITIVE CANON — <a href="/essays/edn-ecological-distribution-node-2026.html" style="color:var(--gold2)">EDN — The Ark&rsquo;s Ecological Distribution Node</a> (Jan 2026). Definitive text per Dawn (2026-09-20): this RESOLVES the EXCHANGE/EDN relationship question.</p>
{pillar_rows([
    ("loophole-to-slavery-2024", "The Loophole To Slavery: This is why they're not hearing you", "† Tentative EXCHANGE home — UBI/healthcare/housing as circulation vs. extraction; flagged for Dawn's red pen (2026-09-20 override)."),
    ("americas-wake-up-call-2024", "America's Wake-Up Call: A Call to Action for Real Change", "† Tentative EXCHANGE home — early ARK4 call to action; flagged for Dawn's red pen (2026-09-20 override).")])}"""
        sec = lib_section(body, lede="Definitive canon for this pillar, plus recovered essays mapped to its shelf.")
        anchor = '<section class="sec doors">'
        assert anchor in t, "doors anchor missing in pillar-08"
        t = t.replace(anchor, sec + "\n" + anchor, 1)
        w(p08, t)
        print("patched pillar-08-exchange.html (EDN feature)")

def step_pillars_overview():
    p = os.path.join(SITE, "pillars.html")
    t = r(p)
    if 'id="pub-qe-spine"' not in t:
        section = f"""
<section class="sec"><div class="wrap">
{MARK}
<div class="eyebrow reveal" id="pub-qe-spine">THE DOCTRINAL SPINE</div>
<h2 class="reveal">QUANTUM ENJOINMENT</h2>
<p class="lede reveal">The recovered doctrinal spine of the Ark — thirteen relational phases of signal, collective repair, world formation, cultural inheritance, universal participation, and human&ndash;AI co-creation. Staged in Dawn&rsquo;s voice (August 3, 2026 — canonical), with the shorter formal version (August 8) retained alongside as a labeled near-duplicate.</p>
<p class="shelf-note reveal"><a href="/essays/quantum-enjoinment-2026.html">Quantum Enjoinment (Aug 3, 2026) — canonical</a> &middot; <a href="/essays/quantum-enjoinment-short-2026.html">the shorter formal version (Aug 8, retained)</a></p>
</div></section>
"""
        anchor = '<section class="sec doors">'
        assert anchor in t, "pillars doors anchor missing"
        t = t.replace(anchor, section + "\n" + anchor, 1)
        w(p, t)
        print("patched pillars.html (QE spine)")

def step_ashera_poster():
    p = os.path.join(SITE, "essays/asherah-report-day-75.html")
    t = r(p)
    if "ashera-report-day75-poster.jpg" not in t:
        old = '<article class="prose">'
        new = ('<article class="prose">'
               '<div class="reveal" style="margin:0 0 1.6em;border-radius:8px;overflow:hidden">'
               '<img src="/img/ashera-report-day75-poster.jpg" '
               'alt="Ashera Report poster — From Scraps to Solutions" style="width:100%;display:block"></div>')
        assert t.count(old) == 1
        t = t.replace(old, new, 1)
        w(p, t)
        print("patched essays/asherah-report-day-75.html (poster)")

def main():
    step_copy_videos()
    step_copy_art()
    step_essay_pages()
    step_css()
    step_library()
    step_field_reports()
    step_videos()
    step_pillars()
    step_pillars_overview()
    step_ashera_poster()
    ps.step_seals()
    ps.step_gate1()
    print("PUBLISH BATCH2 COMPLETE")

if __name__ == "__main__":
    main()
