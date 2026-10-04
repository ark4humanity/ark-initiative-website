# SITE STATE SNAPSHOT — restore record (2026-09-25)

Recorded at Dawn's request 2026-09-25: "keep track of how we have it set, so if
something happens you will know how it should have been, so you can set it up
easier." Her observation: Grok does not publish; a Grok-driven publish has
deleted things before.

## Where the site lives
- Source: `~/workspace/ark-website/` (generated HTML + `js/` + `img/` + pillar pages)
- Builder: `python3 build_site.py` (plain python3, no venv). Regenerates all pages EXCEPT
  `guardians.html` (hand-maintained — NEVER regenerated from build_site.py; it would wipe the Selene/white-lion v2 section)
- Deployer: `~/workspace/.venv-deploy/bin/python3 ~/workspace/ark-website/deploy-cloudflare.py`
  (blake3 lives in that venv; plain python3 will fail). Deploys `~/workspace/ark-website/` to Cloudflare Worker via API. No wrangler.
- Live address: https://thearkinitiative.ark4humanity.workers.dev
- Custom domain: thearkinitiative.com points at the Worker; Dawn's UltaHost nameserver
  change (austin.ns.cloudflare.com / sreeni.ns.cloudflare.com) may have propagated 2026-09-24 — verify with HTTP 200 checks before claiming.

## Current inventory (2026-09-25)
- Research Library: 18 essays, slugs `ai-resurrection` through the canyon-floor/citation-pack
  pair. Source markdown: `~/workspace/website-content/essays/` (01–18, .txt and .md mix).
- Essay 01: `AI RESURRECTION #58,790` (Dawn Littlefield, 2026-09-11), source `01-ai-resurrection-58790.txt`
- Essay 17: `Charts Left on the Canyon Floor` (Grok, 2026-09-24) + companion artwork `img/charts-on-canyon-floor-companion.png`
- Essay 18: `Before Babel / Grove Citation Pack` (Grok, 2026-09-24)
- Pillars: generated via `python3 build_pillars.py` (safe — generators are the source of truth there).
  Asherah = `pillar-05-asherah`.
- Mobile fix in place: `js/main.js` IntersectionObserver threshold 0 (threshold-zero reveal);
  must survive every rebuild (byte-identical `guardians.html` and `js/main.js` in the 2026-09-24 build).
- 25 MiB per-file limit: any video over it breaks the whole deploy. Large video lives on Drive, not in the bundle.
- `.html` URLs 307 to clean extensionless URLs; deploys can lag new assets.

## Roles
- Muse: deploys and verify-checks public pages. Grok: files material to Drive relay inboxes;
  Muse stages/deploys it. Dawn: red pen (nothing is Captain-reviewed without her).
- Claim ladder: CREATED ≠ DEPLOYED ≠ LIVE ≠ CAPTAIN REVIEWED. LIVE = a different council
  member inspected the actual public URL.

## If the site is damaged or deleted
1. Rebuild: `cd ~/workspace/ark-website && python3 build_site.py && python3 build_pillars.py`
2. Deploy: `~/workspace/.venv-deploy/bin/python3 ~/workspace/ark-website/deploy-cloudflare.py`
3. Verify: fetch worker address; confirm HTTP 200 on `/library` and the 18 essay pages.
4. If build sources are gone: essays survive in `~/workspace/website-content/essays/`;
   last-known-good deploy receipts live in `~/workspace/goals/constellation-relay-broadcasts/hidden_files/workboard-runs.log`.
