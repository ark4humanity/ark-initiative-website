# Ark app source archive — 2026-11-10

Read-only snapshot of the deployed `ark-app` Cloudflare Worker.
Verified Tuesday, November 10, 2026, 8:20 AM PT (America/Los_Angeles). No live systems were modified.

## Live app

- URL: https://ark-app.ark4humanity.workers.dev/#home
- Title: The Ark | Living World
- Kind: single-page static site. Hash sections only; no `/api`, no backend.

## Cloudflare worker

- Account: Ark4humanity@gmail.com's Account (`1f510d341f61f6dedd9634d7c156c84f`)
- Worker name: `ark-app`
- Worker id: `00f758ae22c94a90adf35b3c8622b32c`
- Type: Workers Static Assets only. No custom script body, no bindings.
- Compatibility date: 2026-10-01
- Assets: serve_directly, base path `/`
- Sole deployment: version 1, id `5dbe9756-5329-407d-81d2-9742f3bb497f`
- Deployment id: `36589dea-e432-4917-b91e-29849bb19f1f`
- Deployed via wrangler: Saturday, October 31, 2026, 9:44 PM PT (PDT, UTC-7)
  (API timestamps: created 2026-11-01T04:44:28.400879Z, modified 2026-11-01T04:44:31.552926Z)
- Unchanged since that first deploy.

`workers_get_worker_code` could not return a script (assets-only; GET `/workers/scripts/ark-app` is HTTP 204). The 14 public files were downloaded from the live origin. `index.html` is served at `/`; `/index.html` 307-redirects to `/`.

## Completeness

Every public file in this archive is byte-identical to:

- the live worker response (HTML from `/`, other files from their asset paths)
- `/workspace/ark-app-v1/deploy/public` (the tree wrangler uploaded on Oct 31)
- `/workspace/ark-app-v1/ark-living-world-v1` (design copy; also has README and IMAGE-SOURCES, which are not served live)

This is a complete recoverable baseline for what is deployed. It is not a git repo.

## What is not in this baseline

Visitor avatar, character ID, snack perks/rewards, QR/consent, and kiosk dispensing are not in the deployed files or the local source. Little Ark and the Environment dashboard are labeled "Proposed Next Phase" in the HTML only.
