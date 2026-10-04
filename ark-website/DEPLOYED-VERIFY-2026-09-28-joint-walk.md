# DEPLOYED-VERIFY — 2026-09-28 Joint-Walk Source Port

**Deployer:** Muse (deployer-verification only — NOT independent LIVE verification)
**Time:** 2026-09-28 ~23:30 PDT
**Target:** https://thearkinitiative.ark4humanity.workers.dev
**Method:** `python3 build_site.py` + `PILLAR_OUT=. python3 build_pillars.py` → `python3 deploy-cloudflare.py`

## Pre-deploy fixes
1. `build_site.py` L1526: removed stray `)` closing `library_body` f-string (SyntaxError).
2. `build_site.py` L317-320: added missing `+` operators in `FIXES_HEAD` concatenation (SyntaxError).
3. Both generators compile clean (`py_compile`).
4. Living Garden `game.js`: verified end-day logic correct — timed days (2–5) run the full
   timer with no auto-end on base goal (toast + Rest button only); the 1.4s auto-end
   applies solely to untimed Day 1, which has no stretch goal. `node --check` passes.
   The feared auto-end conflict does not exist in the current code (`else if` chain).

## What this deploy carries (source-ported 09-26 fixes, now rebuild-proof)
- Home: **Begin here ✦** → `world/`; Library/Field/Play doors; ORIENTATION / THE SIZZLE /
  THE THRESHOLD SHELF moved below THE CHAMBERS.
- Global nav: Ark World on all pages (incl. hand-maintained `guardians.html`, edited manually —
  `build_site.py` does not generate it; verified byte-identical after rebuild).
- Library: compact hero, `id="begin"` on Asherah greeter, "Start with these 3" row,
  shelves collapsed into `<details>`, large videos `preload="none"`.
- Essays (26): reading time + word count header, heading IDs, table of contents,
  next-step navigation. Typo fixed in source: `,rAgreement` → `Disagreement`
  (`website-content/essays/02-the-language-before-words.md`).
- Play: Living Garden first card; Garden Defense second, labeled PLAYTEST · OPENS OFF-SITE.
- All 13 pillar pages retain the **A CIVILIZATION UNTO ITSELF** sections (1 each, verified).
- `css/ark-fixes.css` + favicon links in `<head>` on all generated pages.

## Live verification (curl, deployer self-check)
- `GET /` → 200; "Begin here" + `world/` nav present.
- `GET /library.html` → 200 (via 307); `id="begin"`, "Start with these 3", `ark-shelves` present.
- `GET /play.html` → 200 (via 307); THE LIVING GARDEN before GARDEN DEFENSE.
- `GET /pillar-05-asherah.html` → 200 (via 307); civilization section present.

## Known open items (not in this deploy)
- ~~R2 404s~~ **RESOLVED 2026-09-29 ~00:15 PDT:** both objects uploaded and serving HTTP 200:
  - `videos/1Zo_xMmgtx9aLsV2UigUWSxlwC89MQO1_.mp4` (Here We Dream): 75,076,165 bytes,
    re-encoded 1080p H.264 CRF 23.
  - `videos/1fERtsVxdkfM11ZDgFESlBnALZpk9Vyjw.mp4` (Lexi's Story): 169,848,425 bytes,
    re-encoded 720x1280 H.264 CRF 24 (original 434MB exceeded the v4 ~300MB ceiling).
  - Root causes: `r2-multipart-upload` targets a non-existent v4 `/multipart` endpoint (404);
    v4 single-PUT rejects payloads ≳300MB (413; bucket's largest object is ~313MB).
    Recorded in AGENTS.md under "R2 upload realities".
- Independent LIVE verification still needed (Aura or Dawn) before CAPTAIN REVIEWED.

— Muse
