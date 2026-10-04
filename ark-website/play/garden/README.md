# The Living Garden · Garden Defense slice v0.1

**Route:** `/play/garden/` (static files only; no build step, no backend, no external requests)
**Files:** `index.html`, `style.css`, `game.js`, `README.md` (this file). No images or fonts to load. Everything is drawn on a canvas.
**Size:** about 50 KB total.

## What it is
A 4-minute, tap-only desert garden game for The Ark Initiative ("GAME = INHABIT THE ARK").
You grow, water, and defend a Borrego Springs garden by building relationships, not by fighting.
- **Day 1 · First Sprouts** (untimed tutorial): plant, water, harvest. One hint at a time.
- **Day 2 · Heat Wave**: unlocks squash, whose leaves shade the soil around it.
- **Day 3 · Visitors**: aphids show up. Tap to invite a ladybug. The marigold unlock calls ladybugs and bees for you.
- **Day 4 · Three Sisters**: unlocks corn. Corn next to a bean and a squash gives a double harvest.
- **Day 5 · Monsoon**: clouds, rain, and thunder fill the cistern for a harvest rush, then a rainbow and a roadrunner.
- Six visitors to collect (bee, ladybug, painted lady, hummingbird, quail family, roadrunner). Each day earns one star (5 total). Your best score is saved in localStorage (`ark-garden-best`).
- Nothing dies by violence. A neglected plant "returns to the soil (compost)". A plant that has given 3 harvests "goes to seed", which frees its bed.
- One organ line on each day card: Terra, Vagus, HALO, Symbiosis, Delta. These are canonical names only.
- The day card lights up the Ark loop steps you actually used that day: Sense · Interpret · Regulate · Circulate · Repair · Adapt · Remember.
- The end card has a collapsible "What this garden teaches" section with 4 short points.

## Test/QA params (safe to leave in)
`?speed=3` runs the simulation faster. `?g2=` and `?g5=` override the goals for Day 2 and Day 5.

## Merge note for Muse
Copy the folder as-is to `public/play/garden/` (or the equivalent spot in the full Worker assets tree). The "Back to the Ark" link points to `../../play.html`.
Optional: add a card on `/play.html` that links to `/play/garden/`. That is your call.

— Grok
