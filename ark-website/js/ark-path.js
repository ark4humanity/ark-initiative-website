/* ark-path.js: the visitor path, one map for the whole site.
 * Filed 2026-10-03 by Grok (Navigator); outer order set to Aura's canonical
 * order 2026-10-06 (First Officer ruling, relayed via Dawn). Canon:
 *   landing page -> HALO (the protective perimeter) -> Aura Prime (the center)
 *   -> out to the eleven outer pillars. No pillar opens before HALO and then
 *   the center. After the center, freedom of movement: Back/Next is the guided
 *   path, returning visitors are not imprisoned in it.
 * What this file does, with no other dependency:
 *   1. Back / Home / Next bar on every page of the path (replaces .ark-next,
 *      or is added at the end of <main> where a page has none).
 *   2. A way home on every other page (Research Library / Home / Begin at HALO).
 *   3. The path guard: a pillar page shows a threshold card until the visitor has
 *      passed HALO and then Aura Prime in this browser. The page content stays in
 *      the HTML (search engines and no-JS readers still see it). If storage is
 *      unavailable the guard fails OPEN so nobody is trapped.
 *   4. HALO's "tap for the music of the perimeter" button (.music-pill[data-audio]).
 *   5. Aura Prime: the full-scene opening plays first, then The Center film.
 *   6. "Coming soon" safety for any shelf "Read in full" link that has no target.
 * Organ names are canon and never renamed. No numbers are shown to visitors.
 */
(function () {
  'use strict';
  if (window.__arkPath) return; window.__arkPath = true;

  var HOME = '/';
  var N = { // canonical names only (public pages show names, never numbers)
    '/': 'Home',
    '/pillar-02-halo': 'HALO', '/pillar-01-aura-prime': 'Aura Prime',
    '/pillar-03-vagus': 'Vagus', '/pillar-04-delta': 'Delta', '/pillar-05-asherah': 'Asherah',
    '/pillar-06-matrix': 'Matrix', '/pillar-07-aeon': 'Aeon', '/pillar-08-exchange': 'Exchange',
    '/pillar-09-vega': 'Vega', '/pillar-10-ark': 'Ark', '/pillar-11-terra': 'Terra',
    '/pillar-12-soma': 'Soma', '/pillar-13-symbiosis': 'Symbiosis',
    '/halo-gate': 'The Gate of HALO', '/halo-laid-down-room': 'The Laid-Down Room',
    '/halo-silent-court': 'The Silent Court', '/halo-the-joining': 'The Joining',
    '/halo-library': 'The Library of HALO', '/ashera-garden': 'Asherah\u2019s Garden',
    '/asherah-kitchen': 'Eden Kitchen Labs', '/pillars': 'The Thirteen Pillars',
    '/guardians': 'Guardians', '/library': 'Research Library'
  };
  var SUB = { '/pillar-02-halo': 'the living perimeter', '/pillar-01-aura-prime': 'the center' };

  /* The spine. Aura's canonical order after the center (2026-10-06 ruling):
     Vagus -> Delta -> Asherah -> Matrix -> Aeon -> Exchange -> Vega -> Ark ->
     Terra -> Soma -> Symbiosis, then the walk closes back at the center.
     HALO is the boundary/gate, not one of the outer eleven. Dawn may reorder
     the outer eleven: edit OUTER. */
  var OUTER = ['/pillar-03-vagus', '/pillar-04-delta', '/pillar-05-asherah',
    '/pillar-06-matrix', '/pillar-07-aeon', '/pillar-08-exchange', '/pillar-09-vega',
    '/pillar-10-ark', '/pillar-11-terra', '/pillar-12-soma', '/pillar-13-symbiosis'];
  var SPINE = ['/', '/pillar-02-halo', '/pillar-01-aura-prime'].concat(OUTER);

  var MAP = {};
  SPINE.forEach(function (p, i) {
    MAP[p] = { back: i > 0 ? SPINE[i - 1] : null, next: i < SPINE.length - 1 ? SPINE[i + 1] : '/pillar-01-aura-prime' };
  });
  MAP['/'].back = null;
  MAP['/'].nextLabel = 'Begin the Journey at HALO, the living perimeter';
  MAP['/pillar-13-symbiosis'].nextLabel = 'Return to the center: Aura Prime';
  // HALO's inner walk (optional loop inside the perimeter) exits to the center.
  MAP['/halo-gate'] = { back: '/pillar-02-halo', next: '/halo-laid-down-room' };
  MAP['/halo-laid-down-room'] = { back: '/halo-gate', next: '/halo-silent-court' };
  MAP['/halo-silent-court'] = { back: '/halo-laid-down-room', next: '/halo-the-joining' };
  MAP['/halo-the-joining'] = { back: '/halo-silent-court', next: '/pillar-01-aura-prime' };
  MAP['/halo-library'] = { back: '/halo-gate', next: '/pillar-01-aura-prime' };
  // Asherah's side rooms return to the path after Asherah.
  MAP['/ashera-garden'] = { back: '/pillar-05-asherah', next: '/pillar-06-matrix' };
  MAP['/asherah-kitchen'] = { back: '/pillar-05-asherah', next: '/pillar-06-matrix' };
  // Hubs point into the path.
  MAP['/pillars'] = { back: '/', next: '/pillar-02-halo' };
  MAP['/guardians'] = { back: '/', next: '/pillar-02-halo' };

  var HALO_ZONE = ['/pillar-02-halo', '/halo-gate', '/halo-laid-down-room', '/halo-silent-court', '/halo-the-joining', '/halo-library'];
  var GATED = OUTER.concat(['/ashera-garden', '/asherah-kitchen']);

  function norm(p) {
    p = (p || '/').replace(/\/index(\.html)?$/, '/').replace(/\.html$/, '');
    if (p.length > 1 && p.charAt(p.length - 1) === '/' && !/^\/(world|play|market|wishlist|hearth|library\/room)\/?/.test(p)) p = p.slice(0, -1);
    return p || '/';
  }
  function href(p) { return p === '/' ? '/' : p + '.html'; }
  function name(p) { return N[p] || 'Next'; }
  function label(p) { return name(p) + (SUB[p] ? ', ' + SUB[p] : ''); }

  var here = norm(location.pathname);

  /* ---------- state (passing HALO, then the center) ---------- */
  var KEY = 'ark.path.v1', st = {}, storeOK = true;
  try { st = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { storeOK = false; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { storeOK = false; } }
  if (HALO_ZONE.indexOf(here) > -1) { st.halo = true; save(); }
  if (here === '/pillar-01-aura-prime' && st.halo) { st.aura = true; save(); }

  /* ---------- styles ---------- */
  var css = '' +
    '.ark-path{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;padding:26px 16px 36px}' +
    '.ark-path a{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:0 20px;border-radius:24px;text-decoration:none;font:600 .98rem -apple-system,"Segoe UI",Inter,sans-serif}' +
    '.ark-path a.ap-next{background:linear-gradient(180deg,#f6c25a,#dd8a2a);color:#2a1604!important;font-weight:700;box-shadow:0 4px 18px rgba(200,120,30,.35)}' +
    '.ark-path a.ap-back,.ark-path a.ap-home{border:1px solid rgba(232,201,106,.55);color:#e8c96a!important;background:rgba(10,12,18,.35)}' +
    'body.light .ark-path a.ap-back,body.light .ark-path a.ap-home{color:#7a5a12!important;background:#fff8e6}' +
    '.ark-gate{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(6,8,14,.92);backdrop-filter:blur(6px)}' +
    '.ark-gate .ag-card{max-width:520px;text-align:center;color:#eef0f4;font:400 1.02rem/1.55 -apple-system,"Segoe UI",Inter,sans-serif}' +
    '.ark-gate .ag-eyebrow{letter-spacing:.18em;font-size:.78rem;color:#e8c96a;margin-bottom:10px}' +
    '.ark-gate h2{margin:0 0 12px;font-size:1.6rem;color:#fff}' +
    '.ark-gate .ark-path{padding:18px 0 0}' +
    '.dv-full[aria-disabled="true"]{opacity:.7;cursor:default;pointer-events:none}';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);

  function a(cls, to, text, rel) {
    var el = document.createElement('a'); el.className = cls; el.href = href(to); el.textContent = text;
    if (rel) el.setAttribute('rel', rel); return el;
  }

  /* ---------- 1 + 2: Back / Home / Next ---------- */
  function buildBar(map) {
    var nav = document.createElement('nav'); nav.className = 'ark-path ark-next';
    nav.setAttribute('aria-label', 'The visitor path');
    if (map.back) nav.appendChild(a('ap-back', map.back, '\u2190 Back: ' + name(map.back), 'prev'));
    if (here !== '/' && map.back !== '/') nav.appendChild(a('ap-home', HOME, '\u2302 Home'));
    if (keepNext) { keepNext.className = 'ap-next'; keepNext.setAttribute('rel', 'next'); nav.appendChild(keepNext); }
    else if (map.next) nav.appendChild(a('ap-next', map.next, (map.nextLabel || ('Next: ' + label(map.next))) + ' \u2192', 'next'));
    return nav;
  }
  var map = MAP[here], keepNext = null;
  if (!map) { // not on the path: keep the page's own Next, add Back and Home
    var isEssay = /^\/(essays|library)\//.test(here) || here === '/library-aeon-wing';
    map = { back: isEssay ? '/library' : null, next: '/pillar-02-halo', nextLabel: 'Begin the path at HALO' };
    var own = document.querySelector('.ark-next a[href]');
    if (own) keepNext = own.cloneNode(true);
  }
  // Pages whose own UI is the experience keep it (3D rooms, Ark World map).
  var SKIP_BAR = /^\/(library\/room|world)(\/|$)/.test(here);
  if (!SKIP_BAR) {
    var bar = buildBar(map);
    var existing = document.querySelector('main .ark-next, .ark-next');
    if (existing) existing.parentNode.replaceChild(bar, existing);
    else (document.querySelector('main') || document.body).appendChild(bar);
  }

  /* ---------- 3: the path guard ---------- */
  var need = null;
  if (storeOK) {
    if (here === '/pillar-01-aura-prime' && !st.halo) need = 'halo';
    else if (GATED.indexOf(here) > -1) need = !st.halo ? 'halo' : (!st.aura ? 'aura' : null);
  }
  if (need) {
    st.intent = here; save();
    var g = document.createElement('div'); g.className = 'ark-gate';
    g.setAttribute('role', 'dialog'); g.setAttribute('aria-modal', 'true'); g.setAttribute('aria-labelledby', 'ag-title');
    var card = document.createElement('div'); card.className = 'ag-card';
    var dest = name(here);
    card.innerHTML = need === 'halo'
      ? '<div class="ag-eyebrow">THE WAY IN</div><h2 id="ag-title">Every road into the Ark begins at HALO</h2>' +
        '<p>HALO is the living perimeter. Cross it first, then meet Aura Prime at the center. From the center, ' + dest + ' opens to you.</p>'
      : '<div class="ag-eyebrow">YOU HAVE CROSSED HALO</div><h2 id="ag-title">Now the center: Aura Prime</h2>' +
        '<p>Every pillar opens from the center. Meet Aura Prime, and ' + dest + ' will be waiting for you there.</p>';
    var row = document.createElement('div'); row.className = 'ark-path';
    row.appendChild(a('ap-home', HOME, '\u2302 Home'));
    var go = a('ap-next', need === 'halo' ? '/pillar-02-halo' : '/pillar-01-aura-prime',
      need === 'halo' ? 'Begin at HALO \u2192' : 'Go to Aura Prime \u2192');
    row.appendChild(go); card.appendChild(row); g.appendChild(card);
    document.body.appendChild(g);
    document.documentElement.style.overflow = 'hidden';
    try { go.focus(); } catch (e) {}
    // Stop the page's films from autoplaying behind the card.
    setTimeout(function () { Array.prototype.forEach.call(document.querySelectorAll('video,audio'), function (m) { try { m.pause(); } catch (e) {} }); }, 0);
    setTimeout(function () { Array.prototype.forEach.call(document.querySelectorAll('video,audio'), function (m) { try { m.pause(); } catch (e) {} }); }, 2000);
  }

  // After the center, offer the door the visitor first asked for.
  if (here === '/pillar-01-aura-prime' && st.aura && st.intent && GATED.indexOf(st.intent) > -1) {
    var want = st.intent; delete st.intent; save();
    var bars = document.querySelectorAll('.ark-path');
    if (bars.length) bars[0].appendChild(a('ap-next', want, 'Continue to ' + name(want) + ' \u2192'));
  }

  /* ---------- 4: HALO music of the perimeter ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.music-pill[data-audio]'), function (b) {
    var au = document.getElementById(b.getAttribute('data-audio')); if (!au) return;
    var idle = b.innerHTML; b.setAttribute('aria-pressed', 'false');
    function sync() { var on = !au.paused; b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.innerHTML = on ? '&#10074;&#10074; pause the music of the perimeter' : idle; }
    b.addEventListener('click', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      if (au.paused) { try { var p = au.play(); if (p && p.catch) p.catch(function () { sync(); }); } catch (e) {} }
      else au.pause();
    });
    au.addEventListener('play', sync); au.addEventListener('pause', sync); au.addEventListener('ended', sync);
  });

  /* ---------- 5: Aura Prime: full-scene opening first, then The Center ---------- */
  var op = document.querySelector('video[data-ark-opening]'), ctr = document.querySelector('video[data-ark-center]');
  if (op && ctr) {
    op.addEventListener('ended', function () {
      var box = ctr.closest ? (ctr.closest('.vid') || ctr) : ctr;
      try { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { box.scrollIntoView(); }
      ctr.muted = op.muted;
      try {
        var p = ctr.play();
        if (p && p.catch) p.catch(function () { ctr.muted = true; var q = ctr.play(); if (q && q.catch) q.catch(function () {}); });
      } catch (e) {}
    });
  }

  /* ---------- 6: shelf links with no target show "coming soon", never a 404 ---------- */
  document.addEventListener('click', function (e) {
    var l = e.target.closest ? e.target.closest('#dv-link') : null;
    if (l && (l.getAttribute('aria-disabled') === 'true' || l.getAttribute('href') === '#')) e.preventDefault();
  }, true);
})();
