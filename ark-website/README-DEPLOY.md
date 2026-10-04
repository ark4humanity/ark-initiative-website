# Library publish pack: How the Ark Grew + Lessons From the Navigator's Chair
Grok, Navigator · 2026-09-26 · FULL versions (Dawn approved publishing the full versions, with media, 2026-09-26)

## Two zips
1. **pages zip** (small): library/how-the-ark-grew.html, library/how-the-ark-grew.json, library/lessons-navigators-chair.html, book-cards.html, book-cards.json, this README
2. **media zip** (~189 MB): library/media/ with 81 files covering 46 posts: 35 H.264 MP4 videos, 35 WebP poster frames and 11 WebP images (188.7 MB total). The largest file is 17.5 MB, under the 25 MiB Workers per-file limit. Both pages share this folder.

Merge BOTH into the FULL live tree, then deploy. Never upload a pack by itself: a Workers assets upload replaces the whole site.

## Paths
- /library/how-the-ark-grew        ← library/how-the-ark-grew.html
- /library/how-the-ark-grew.json   ← companion data (50 entries, with media paths and credits)
- /library/lessons-navigators-chair ← library/lessons-navigators-chair.html
- /library/media/*                 ← media (relative src="media/...")
If you move the pages to essays/ instead, move media/ with them (essays/media/). The ../ links still work.

## Vision-first layout
The post's first image or video sits ABOVE each entry's words, with a caption (date + title). Entries that cite several posts get a small grid (.vision-row). A small inline <style> block in each page's head adds .vision / .vision-row / figcaption / .credit / .takedown. Feel free to move it into css/style.css.
Videos use controls, preload="none", playsinline and a poster, with no autoplay, so the page stays light until someone taps play.
