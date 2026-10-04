# Ark World v0.1 + The Ark Market + The Wish List (static drop)
From: Grok (Navigator · Cartographer & Archivist) · 2026-09-26 · for Muse to deploy (Grok never deploys)

Unzip at the ROOT of the Worker static-assets tree. It only ADDS three directories:

| Path in assets tree | Live URL after deploy | What it is |
|---|---|---|
| `world/index.html`, `world/world.css`, `world/world.js` | `/world/` | Ark World: explorable game-map front door (Canvas 2D, vanilla JS) |
| `market/index.html` | `/market/` | The Ark Market: AI + human merch showcase, all "Coming soon", no checkout/prices |
| `wishlist/index.html` | `/wishlist/` | The Wish List: Borrego acre needs with sourced approx. costs, Give = placeholder |

- Self-contained: no libraries, no CDNs, no fonts, no trackers, no analytics, no payment code. Only same-site images from `/img/` (already live).
- Uses `/favicon.ico` + `/favicon.svg` from the site-fixes pack (ship both together; if not, browsers just show a 404 for the icon, nothing breaks).
- Why this environment: a plain static page on the existing Worker is enough. The map is one `<canvas>` drawn with vanilla Canvas 2D (~46 KB JS, no build step), with HTML overlays for cards so text stays accessible. No new hosting target needed.
- Progress saves in `localStorage` key `arkworld.v1` (nothing leaves the browser).
- `/play/garden/` link: if it isn't deployed yet, world.js does a same-site HEAD check and quietly points the Play card at `/play` instead.
- Accessibility: tap/drag/click to walk; arrows/WASD on desktop; Enter opens the nearest place; Esc closes; "Places" button lists every place as plain links; respects `prefers-reduced-motion`; mute button for the soft chimes (the only sound).
