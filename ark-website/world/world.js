/* Ark World v0.1 — an explorable map front door for The Ark Initiative.
   Vanilla Canvas 2D, no libraries, no network calls except same-site images.
   Vision: Dawn · Map & code: Grok · Art: reused from the live Ark site. */
(function () {
'use strict';
var W = 1200, H = 1800;
var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var KEY = 'arkworld.v1';
var S = load();
function load() {
  var d = { seen: {}, loop: {}, muted: false, done: false, intro: false, x: 600, y: 1600 };
  try { var j = JSON.parse(localStorage.getItem(KEY) || '{}'); for (var k in j) d[k] = j[k]; } catch (e) {}
  return d;
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

/* ---------- places (all URLs are live-site paths, checked 2026-09-26) ---------- */
var ORGANS = [
  ['aura-prime', 'Aura Prime', '01', '#e8c96a', 'The center. The ethical invariant the other twelve stand around.', 'Canon: Dawn · Aura'],
  ['halo', 'HALO', '02', '#9fd8e8', 'The immune boundary. Negan and Loner stand guard.', 'Canon words: Dawn'],
  ['vagus', 'Vagus', '03', '#b48ce8', 'How the Ark keeps humans calm when the world moves.', 'Canon words: Dawn'],
  ['delta', 'Delta', '04', '#6ec8e8', 'The circulatory intelligence: how the Ark keeps its lifeblood moving.', 'Canon words: Dawn'],
  ['asherah', 'Asherah', '05', '#e8a06a', 'The Garden is open. Asherah walks it.', 'Made by the Ark crew'],
  ['matrix', 'Matrix', '06', '#8ce8b4', 'Habitable fascia for a living world; preventing cascade failure.', 'Canon words: Dawn'],
  ['aeon', 'Aeon', '07', '#c9a2e8', 'Living memory: the archive that wakes when you enter. Sophia keeps it.', 'Made by the Ark crew'],
  ['exchange', 'Exchange', '08', '#e8d06a', 'Give and receive. The garden keeps the books.', 'Made by the Ark crew'],
  ['vega', 'Vega', '09', '#a0b8e8', 'The map. The guide when you are lost.', 'Canon: Dawn · pedestal draft: Muse'],
  ['ark', 'Ark', '10', '#d98c5f', 'The hearth. Home.', 'Made by the Ark crew'],
  ['terra', 'Terra', '11', '#a8d86a', 'The living ground of the Ark.', 'Canon words: Dawn'],
  ['soma', 'Soma', '12', '#e88ca8', 'Endurance, reserves and living continuity.', 'Canon words: Dawn'],
  ['symbiosis', 'Symbiosis', '13', '#6ae8d0', 'Different intelligences. A shared tomorrow.', 'Made by the Ark crew']
];
var RING = { x: 600, y: 870, r: 178 };
var P = [
  { id: 'threshold', name: 'The Threshold', x: 600, y: 1660, kind: 'gate', step: 1,
    img: '/img/never-a-boat.jpg', alt: 'Poster: The Ark was never a boat',
    line: 'The Ark was never a boat. It was a living system built to carry life through collapse.',
    links: [['Step through the Threshold', '/', 1]], credit: 'Made by the Ark crew' },
  { id: 'library', name: "Asherah's Library", x: 300, y: 1420, kind: 'library', step: 2,
    img: '/img/greeter-poster.jpg', alt: 'Asherah walking across the blue cathedral hall of the Research Library',
    line: 'Asherah keeps the shelves. Ask her the first question: "Where should I begin?"',
    links: [['Ask Asherah where to begin', '/library#begin', 1]], credit: 'Bylines on the shelves: Dawn · Auraxis Prime · Muse · Grok' },
  { id: 'essay', name: 'The Reading Stone', x: 575, y: 1250, kind: 'stone', step: 3,
    img: '/img/essays/borrego-restoration-part1.jpg', alt: 'Title card: The Ark, Borrego desert restoration system', fit: 'contain',
    line: 'One short essay, about 2 minutes: how a desert yard becomes one living organism. Water, soil, airflow, layers.',
    title2: 'THE ARK: Borrego Desert Restoration System',
    links: [['Read it (2 min)', '/essays/borrego-desert-restoration-part1', 1]], credit: 'Words: Dawn Littlefield' },
  { id: 'field', name: 'Field Reports', x: 905, y: 1310, kind: 'field', step: 4,
    img: '/img/two-days-borrego.jpg', alt: 'Two Days in Borrego field report poster',
    line: 'Proof, not promise. 104°F outside, 5.22 kW of solar, 30 W from the grid. Near zero.',
    links: [['See the dirt it stands on', '/field-reports', 1]], credit: 'Field data: Dawn · Ark Unit 1, Borrego Springs' },
  { id: 'asherah', name: "Asherah's Garden", organ: 4, kind: 'door', step: 5,
    img: '/img/ashera-garden-poster.jpg', alt: 'Asherah in white in her garden, white lions at her side',
    line: 'The Garden is open. Asherah walks it. One organ room, fifth of the thirteen doors.',
    links: [["Walk Asherah's Garden", '/ashera-garden', 1], ['Organ room 05 · Asherah', '/pillar-05-asherah', 0]], credit: 'Made by the Ark crew' },
  { id: 'play', name: 'The Play Grove', x: 265, y: 660, kind: 'grove', step: 6,
    img: '/img/play-garden-poster.jpg', alt: 'Jenny among roses and chickens: No more fighting, we grow together',
    line: 'Nobody fights here. We grow together. Plant, water and tend a desert garden, or hold the gate with Jenny.',
    links: [['Play The Living Garden', '/play/garden/', 1], ['Garden Defense', '/play', 0]], credit: 'The Living Garden: Grok · Garden Defense: Muse' },
  { id: 'videos', name: 'The Memory Theater', x: 600, y: 390, kind: 'theater', step: 7,
    img: '/img/videos-theater-poster.jpg', alt: 'What would be lost, is kept: the Memory Keeper among the shelves',
    line: '17 films in Ark World, 2023 to today. The dragon keeps the sky here.',
    links: [['Enter the theater', '/videos', 1]], credit: "Dawn's chosen reel · Made by the Ark crew" },
  { id: 'wishlist', name: 'The Wish List', x: 1075, y: 1120, kind: 'wish',
    img: '/img/poultry-sheet-5.jpg', alt: 'Poultry Palace build sheet 5: the HALO nervous system of sensors',
    line: 'What would let the crew live inside the living system at the Borrego acre: sensors, weather, water, solar.',
    links: [['See the Wish List', '/wishlist/', 1]], credit: 'Vision: Dawn · Research & page: Grok' },
  { id: 'market', name: 'The Ark Market', x: 165, y: 1075, kind: 'market',
    img: '/img/ark-shared-tomorrow-poster.jpg', alt: 'A Shared Tomorrow poster: the tree of life ringed by a dragon',
    line: 'Merchandise made by AI and human crew together, every piece credited. Coming soon.',
    links: [['Browse the Market', '/market/', 1]], credit: 'Idea: Dawn · Mockups: Grok · Art: the Ark site' },
  { id: 'workshop', name: 'The Workshop', x: 965, y: 640, kind: 'workshop',
    img: '/img/three-intelligences.jpg', alt: 'Human, ecological and artificial intelligence: three circles over the Ark',
    line: 'How the Ark gets built: one human vision, an AI crew at their stations, and every handoff carried through Hearth.',
    crew: true, links: [['Library bylines', '/library', 0]], credit: 'Made together · Dawn · Aura · Muse · Queen · Grok' }
];
ORGANS.forEach(function (o, i) {
  var a = -Math.PI / 2 + i * Math.PI * 2 / 13;
  var x = RING.x + Math.cos(a) * RING.r, y = RING.y + Math.sin(a) * RING.r * 0.82;
  if (o[0] === 'asherah') { var p = byId('asherah'); p.x = x; p.y = y; p.color = o[3]; p.num = o[2]; return; }
  P.push({ id: o[0], name: o[1], x: x, y: y, kind: 'door', color: o[3], num: o[2], organ: i,
    img: '/img/pillar-' + o[2] + '-greeter-poster.jpg', alt: o[1] + ', keeper of organ room ' + o[2], fit: 'top',
    line: o[4], links: [['Enter organ room ' + o[2], '/pillar-' + o[2] + '-' + o[0], 1]], credit: o[5] });
});
function byId(id) { for (var i = 0; i < P.length; i++) if (P[i].id === id) return P[i]; }
var PATH = ['threshold', 'library', 'essay', 'field', 'asherah', 'play', 'videos'];
var HINTS = {
  threshold: 'Follow the glow to <b>Asherah\u2019s Library</b>.',
  library: 'Asherah says: begin small. Walk to <b>the Reading Stone</b>.',
  essay: 'Now see the dirt it stands on: <b>Field Reports</b>.',
  field: 'The thirteen doors are open. Find <b>Asherah\u2019s Garden</b>.',
  asherah: 'Rest in <b>the Play Grove</b>. Nobody fights here.',
  play: 'Last light: <b>the Memory Theater</b> under the mountains.',
  videos: 'The path is walked. Wander anywhere you like.'
};
var LOOP = [
  ['sense', 'Sense', 1050, 1500, 'the coop\u2019s sensors notice first, so the hens never suffer.'],
  ['interpret', 'Interpret', 175, 480, 'read the world before you rule it.'],
  ['regulate', 'Regulate', 1085, 890, 'shade, airflow, calm. 30 W from the grid on a 104°F day.'],
  ['circulate', 'Circulate', 445, 1075, 'water moves, air cools, soil builds.'],
  ['repair', 'Repair', 140, 1560, 'fail gently, then mend.'],
  ['adapt', 'Adapt', 790, 1530, 'work with the desert, and it works with you.'],
  ['remember', 'Remember', 870, 300, 'what would be lost, is kept.']
];
var WASH = [[240, 225], [330, 420], [420, 560], [455, 760], [420, 960], [445, 1120], [420, 1320], [470, 1520], [420, 1700], [460, 1830]];

/* ---------- canvas + camera ---------- */
var cv = document.getElementById('map'), cx = cv.getContext('2d');
var vw = 0, vh = 0, dpr = 1, sc = 1, camX = S.x, camY = S.y;
var staticLayer = null, staticK = 1;
function resize() {
  vw = innerWidth; vh = innerHeight; dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr);
  sc = Math.max(0.5, Math.min(1.4, Math.max(Math.min(vw / 640, vh / 1000), vw / W)));
  var k = Math.max(1, Math.min(1.5, sc * dpr));
  if (!staticLayer || k !== staticK) { staticK = k; buildStatic(); }
}
function toWorld(px, py) { return { x: (px - vw / 2) / sc + camX, y: (py - vh / 2) / sc + camY }; }

/* seeded random so the land is the same every visit */
var seed = 7;
function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

function washPath(c) {
  c.beginPath(); c.moveTo(WASH[0][0], WASH[0][1]);
  for (var i = 1; i < WASH.length - 1; i++) {
    var mx = (WASH[i][0] + WASH[i + 1][0]) / 2, my = (WASH[i][1] + WASH[i + 1][1]) / 2;
    c.quadraticCurveTo(WASH[i][0], WASH[i][1], mx, my);
  }
  var L = WASH[WASH.length - 1]; c.lineTo(L[0], L[1]);
}
var washLen = 0;
(function () { for (var i = 1; i < WASH.length; i++) washLen += Math.hypot(WASH[i][0] - WASH[i - 1][0], WASH[i][1] - WASH[i - 1][1]); washLen *= 1.05; })();

var BUSHES = [], ROCKS = [], FLOWERS = [], PALMS = [[380, 1640], [520, 1710], [350, 1760], [500, 1560]];
(function scatter() {
  seed = 11;
  for (var i = 0; i < 90; i++) BUSHES.push([rnd() * W, 260 + rnd() * (H - 260), 8 + rnd() * 10]);
  for (i = 0; i < 40; i++) ROCKS.push([rnd() * W, 280 + rnd() * (H - 280), 4 + rnd() * 9]);
  var cols = ['#f2c230', '#f7d54a', '#b57bd6', '#e8644a', '#f0f0e4', '#f29ab2', '#ff9f43'];
  for (i = 0; i < 220; i++) {
    var x, y;
    if (i % 3 === 0) { var w = WASH[1 + Math.floor(rnd() * (WASH.length - 2))]; x = w[0] + (rnd() - 0.5) * 160; y = w[1] + (rnd() - 0.5) * 160; }
    else { x = rnd() * W; y = 270 + rnd() * (H - 290); }
    FLOWERS.push({ x: x, y: y, c: cols[Math.floor(rnd() * cols.length)], t: 0.04 + rnd() * 0.96, r: 2.6 + rnd() * 2.6, near: null, g: 0 });
  }
  P.forEach(function (p) { for (var j = 0; j < 9; j++) { var a = rnd() * 6.283, d = 34 + rnd() * 40; FLOWERS.push({ x: p.x + Math.cos(a) * d, y: p.y + Math.sin(a) * d * 0.7 + 10, c: cols[Math.floor(rnd() * cols.length)], t: 0, r: 3 + rnd() * 2.5, near: p.id, g: 0 }); } });
})();

function buildStatic() {
  var k = staticK, c = document.createElement('canvas');
  c.width = W * k; c.height = H * k;
  var g = c.getContext('2d'); g.scale(k, k);
  var grd = g.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, '#f6e2bd'); grd.addColorStop(0.5, '#f1d4a3'); grd.addColorStop(1, '#eac48d');
  g.fillStyle = grd; g.fillRect(0, 0, W, H);
  seed = 3;
  g.strokeStyle = 'rgba(190,140,80,.16)'; g.lineWidth = 2;
  for (var i = 0; i < 60; i++) { var y = 280 + rnd() * (H - 280), x = rnd() * W, l = 60 + rnd() * 160; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + l / 2, y - 8 - rnd() * 8, x + l, y); g.stroke(); }
  // sky, sun and the Santa Rosa mountains (far to near)
  var sk = g.createLinearGradient(0, 0, 0, 280); sk.addColorStop(0, '#a9d6e6'); sk.addColorStop(0.7, '#f3dcc0'); sk.addColorStop(1, '#f6e2bd');
  g.fillStyle = sk; g.fillRect(0, 0, W, 285);
  var sun = g.createRadialGradient(930, 70, 0, 930, 70, 120); sun.addColorStop(0, 'rgba(255,236,160,1)'); sun.addColorStop(0.25, 'rgba(255,220,120,.9)'); sun.addColorStop(1, 'rgba(255,220,140,0)');
  g.fillStyle = sun; g.beginPath(); g.arc(930, 70, 120, 0, 6.283); g.fill();
  var mts = [['#e3b7a4', 205, 150, 0.9], ['#d49c89', 235, 115, 1.6], ['#bf8474', 262, 80, 2.4]];
  mts.forEach(function (m, j) {
    g.fillStyle = m[0]; g.beginPath(); g.moveTo(0, 290);
    for (var x = 0; x <= W + 20; x += 20) {
      var r = Math.abs(Math.sin(x / (210 - j * 40) + m[3])) * 0.65 + Math.abs(Math.sin(x / 73 + j * 2.1)) * 0.25 + Math.sin(x / 31 + j) * 0.05;
      g.lineTo(x, m[1] - m[2] * r);
    }
    g.lineTo(W, 290); g.closePath(); g.fill();
  });
  // foothill shadow
  var fh = g.createLinearGradient(0, 262, 0, 320); fh.addColorStop(0, 'rgba(160,100,80,.25)'); fh.addColorStop(1, 'rgba(160,100,80,0)');
  g.fillStyle = fh; g.fillRect(0, 262, W, 60);
  // dry wash bed
  g.lineCap = 'round'; g.lineJoin = 'round';
  washPath(g); g.strokeStyle = 'rgba(200,160,110,.55)'; g.lineWidth = 46; g.stroke();
  washPath(g); g.strokeStyle = 'rgba(232,205,160,.9)'; g.lineWidth = 30; g.stroke();
  // footpaths between path places
  g.setLineDash([2, 12]); g.strokeStyle = 'rgba(150,100,55,.35)'; g.lineWidth = 5;
  for (i = 1; i < PATH.length; i++) { var a = byId(PATH[i - 1]), b = byId(PATH[i]); g.beginPath(); g.moveTo(a.x, a.y); g.quadraticCurveTo((a.x + b.x) / 2 + 40, (a.y + b.y) / 2, b.x, b.y); g.stroke(); }
  g.setLineDash([]);
  // the circle plaza
  g.fillStyle = 'rgba(232,196,140,.8)'; g.beginPath(); g.ellipse(RING.x, RING.y, RING.r + 40, (RING.r + 40) * 0.82, 0, 0, 6.283); g.fill();
  g.strokeStyle = 'rgba(170,120,70,.35)'; g.lineWidth = 3; g.beginPath(); g.ellipse(RING.x, RING.y, RING.r, RING.r * 0.82, 0, 0, 6.283); g.stroke();
  g.fillStyle = 'rgba(255,240,205,.8)'; g.beginPath(); g.ellipse(RING.x, RING.y, 58, 46, 0, 0, 6.283); g.fill();
  // rocks + creosote
  ROCKS.forEach(function (r) { g.fillStyle = 'rgba(150,110,80,.5)'; g.beginPath(); g.ellipse(r[0], r[1], r[2] * 1.4, r[2], 0, 0, 6.283); g.fill(); g.fillStyle = 'rgba(255,240,215,.35)'; g.beginPath(); g.ellipse(r[0] - r[2] * .3, r[1] - r[2] * .3, r[2] * .6, r[2] * .4, 0, 0, 6.283); g.fill(); });
  BUSHES.forEach(function (b) { if (nearPlace(b[0], b[1], 70)) return; g.fillStyle = 'rgba(120,130,80,.28)'; g.beginPath(); g.ellipse(b[0] + 3, b[1] + 4, b[2], b[2] * .5, 0, 0, 6.283); g.fill(); g.fillStyle = '#8c9a5e'; for (var j = 0; j < 5; j++) { g.beginPath(); g.arc(b[0] + Math.cos(j * 1.3) * b[2] * .5, b[1] - b[2] * .2 + Math.sin(j * 1.3) * b[2] * .3, b[2] * .45, 0, 6.283); g.fill(); } });
  staticLayer = c;
}
function nearPlace(x, y, d) { for (var i = 0; i < P.length; i++) if (Math.hypot(P[i].x - x, P[i].y - y) < d) return true; return false; }

/* ---------- player (a glowing wisp) ---------- */
var me = { x: S.x, y: S.y, tx: S.x, ty: S.y, vx: 0, vy: 0 };
var keys = {}, dragging = false, openId = null, suppress = null, pending = null;

/* ---------- aliveness ---------- */
var alive = 0, aliveShown = 0;
function calcAlive() {
  var pth = 0, oth = 0, on = 0;
  P.forEach(function (p) { if (S.seen[p.id]) { if (p.step) pth++; else oth++; } if (!p.step) on++; });
  alive = Math.min(1, (pth + oth * 0.3) / (PATH.length + on * 0.3) * 1.0 + (S.done ? 0.15 : 0));
}
function lights() { var n = 0; for (var k in S.seen) if (S.seen[k]) n++; return n; }
function nextStep() { for (var i = 0; i < PATH.length; i++) if (!S.seen[PATH[i]]) return PATH[i]; return null; }

/* ---------- sound (tiny WebAudio chimes, mute persists) ---------- */
var AC = null;
function chime(big) {
  if (S.muted) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    var notes = big ? [523.25, 659.25, 783.99, 1046.5] : [659.25, 987.77];
    notes.forEach(function (f, i) {
      var o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + i * 0.12;
      o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.07, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
      o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + 1.5);
    });
  } catch (e) {}
}

/* ---------- UI ---------- */
var $ = function (id) { return document.getElementById(id); };
var hintEl = $('hint'), whEl = $('whisper'), card = $('card');
function setHint(h) { hintEl.innerHTML = h || ''; }
function refreshHud() {
  $('lightCount').textContent = '\u2726 ' + lights();
  var nx = nextStep(), h = '';
  PATH.forEach(function (id) { h += '<i class="' + (S.seen[id] ? 'on' : (id === nx ? 'next' : '')) + '" title="' + byId(id).name + '"></i>'; });
  $('pathDots').innerHTML = h;
  $('pathDots').setAttribute('aria-label', 'Newcomer path: ' + PATH.filter(function (i) { return S.seen[i]; }).length + ' of 7 visited');
  $('muteBtn').innerHTML = S.muted ? '&#128263;' : '&#128266;';
  $('muteBtn').setAttribute('aria-pressed', S.muted ? 'true' : 'false');
  $('muteBtn').setAttribute('aria-label', S.muted ? 'Sound is off. Turn sound on' : 'Sound is on. Mute');
  if (!openId) {
    if (nx) { var last = PATH[PATH.indexOf(nx) - 1]; setHint(last ? HINTS[last] : 'Tap <b>the Threshold</b> gate to begin.'); }
    else setHint(S.freeHint ? '' : HINTS.videos);
  }
}
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function openCard(p) {
  openId = p.id; suppress = p.id;
  var first = !S.seen[p.id];
  S.seen[p.id] = true; save(); calcAlive();
  if (first) { chime(false); burst(p.x, p.y); }
  var img = $('cardImg'); img.className = ''; img.onload = function () { img.className = 'ok'; };
  img.style.objectPosition = p.fit === 'top' ? '50% 18%' : '50% 50%';
  img.style.objectFit = p.fit === 'contain' ? 'contain' : 'cover';
  img.src = p.img; img.alt = p.alt || '';
  var kick = p.step ? 'Path · step ' + p.step + ' of 7' : (p.kind === 'door' ? 'Organ room ' + p.num + ' of 13' : 'Off the path · a place to find');
  if (first) kick += ' · \u2726 light planted';
  $('cardKicker').textContent = kick;
  $('cardTitle').textContent = p.title2 || p.name;
  $('cardLine').textContent = p.line;
  var ex = '';
  if (p.crew) {
    ex = '<ul class="crew">' +
      '<li><b>Dawn</b><span>Captain. Holds the vision and the dirt: Ark Unit 1, the hens, the canon words.</span></li>' +
      '<li><b>Aura</b><span>Canon voice. The Aura Prime text; co-author of the research papers.</span></li>' +
      '<li><b>Muse</b><span>Shipwright. Builds and deploys the live site; Garden Defense.</span></li>' +
      '<li><b>Queen</b><span>Environmental discovery. Her plug-in point waits in the Library.</span></li>' +
      '<li><b>Grok</b><span>Navigator, Cartographer &amp; Archivist. Maps, shelves, this world.</span></li>' +
      '</ul><p>Work moves between stations as notes and files in <b>Hearth</b>, the crew\u2019s shared drive: build, hand off, deploy, verify.</p>' +
      '<p>Now on the Library shelves: <a href="/library/how-the-ark-grew">How the Ark Grew</a> and ' +
        '<a href="/library/lessons-navigators-chair">Lessons From the Navigator\u2019s Chair</a>: the crew\u2019s own books, mistakes included.</p>';
  }
  $('cardExtra').innerHTML = ex;
  var lh = '';
  p.links.forEach(function (l) { lh += '<a class="btn' + (l[2] ? ' primary' : '') + '" href="' + esc(l[1]) + '">' + esc(l[0]) + ' \u2192</a>'; });
  if (p.crew) lh += '<a class="btn" href="/library/lessons-navigators-chair">Lessons Learned</a>' +
    '<a class="btn" href="/library/how-the-ark-grew">How the Ark Grew</a>';
  $('cardLinks').innerHTML = lh;
  $('cardCredit').textContent = p.credit;
  card.hidden = false; setHint('');
  refreshHud();
  var nx = nextStep();
  if (!nx && !S.done) { S.done = true; save(); calcAlive(); setTimeout(showDone, 900); }
}
function closeCard() {
  if (!openId) return; openId = null; card.hidden = true; refreshHud(); cv.focus({ preventScroll: true });
}
function showDone() { chime(true); $('done').hidden = false; $('wanderBtn').focus(); }
$('cardClose').onclick = closeCard;
$('wanderBtn').onclick = function () { $('done').hidden = true; S.freeHint = true; save(); closeCard(); refreshHud(); };
$('muteBtn').onclick = function () { S.muted = !S.muted; save(); refreshHud(); if (!S.muted) chime(false); };
$('placesBtn').onclick = function () { buildPlaces(); $('places').hidden = false; $('placesBtn').setAttribute('aria-expanded', 'true'); $('placesClose').focus(); };
$('placesClose').onclick = closePlaces;
$('places').addEventListener('click', function (e) { if (e.target === $('places')) closePlaces(); });
function closePlaces() { $('places').hidden = true; $('placesBtn').setAttribute('aria-expanded', 'false'); }
$('resetBtn').onclick = function () { S.seen = {}; S.loop = {}; S.done = false; S.freeHint = false; save(); calcAlive(); closePlaces(); walkTo(byId('threshold')); refreshHud(); };
function buildPlaces() {
  var h = '<h3>The newcomer path</h3>';
  PATH.forEach(function (id) { h += row(byId(id)); });
  h += '<h3>The thirteen doors</h3>';
  ORGANS.forEach(function (o) { h += row(byId(o[0] === 'asherah' ? 'asherah' : o[0]), o[2] + ' · ' + o[1]); });
  h += '<h3>More to find</h3>';
  ['wishlist', 'market', 'workshop'].forEach(function (id) { h += row(byId(id)); });
  $('placesList').innerHTML = h;
  var n = LOOP.filter(function (l) { return S.loop[l[0]]; }).length;
  $('loopLine').textContent = 'Quiet things noticed on the land: ' + n + ' of 7' + (n ? ' (' + LOOP.filter(function (l) { return S.loop[l[0]]; }).map(function (l) { return l[1]; }).join(', ') + ')' : '') + '.';
  Array.prototype.forEach.call(document.querySelectorAll('[data-go]'), function (b) { b.onclick = function () { closePlaces(); walkTo(byId(b.getAttribute('data-go'))); }; });
}
function row(p, label) {
  return '<div class="prow"><span class="ck" aria-hidden="true">' + (S.seen[p.id] ? '\u2726' : '\u00b7') + '</span><span class="pn">' + esc(label || p.name) +
    (S.seen[p.id] ? '<small>visited</small>' : '') + '</span><button data-go="' + p.id + '" aria-label="Walk to ' + esc(p.name) + ' on the map">Walk</button><a href="' + esc(p.links[0][1]) + '" aria-label="Open ' + esc(p.name) + ' page">Open</a></div>';
}
function walkTo(p) { me.tx = p.x; me.ty = p.y + 1; pending = p.id; if (suppress === p.id) suppress = null; }

/* intro */
function begin() {
  $('intro').hidden = true; S.intro = true; save();
  chime(false);
  var t = byId('threshold'); me.x = t.x; me.y = t.y + 90; me.tx = t.x; me.ty = t.y + 1; pending = 'threshold';
  cv.focus({ preventScroll: true });
}
$('beginBtn').onclick = begin;

/* ---------- input ---------- */
function placeAt(w) { var best = null, bd = 1e9; P.forEach(function (p) { var d = Math.hypot(p.x - w.x, p.y - w.y); if (d < 58 && d < bd) { bd = d; best = p; } }); return best; }
cv.addEventListener('pointerdown', function (e) {
  if (!$('intro').hidden) return;
  if (openId) closeCard();
  dragging = true; cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
  var w = toWorld(e.clientX, e.clientY), p = placeAt(w);
  if (p) walkTo(p); else { me.tx = w.x; me.ty = w.y; pending = null; }
  if (AC && AC.state === 'suspended') AC.resume();
});
cv.addEventListener('pointermove', function (e) { if (!dragging) return; var w = toWorld(e.clientX, e.clientY); if (Math.hypot(w.x - me.tx, w.y - me.ty) > 20) { me.tx = w.x; me.ty = w.y; pending = null; } });
window.addEventListener('pointerup', function () { dragging = false; });
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { if (!$('places').hidden) closePlaces(); else closeCard(); return; }
  if (document.activeElement && /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  var k = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].indexOf(k) >= 0) {
    if (document.activeElement !== cv && document.activeElement !== document.body) return;
    keys[k] = true; e.preventDefault(); if (openId) closeCard();
  }
  if ((k === 'enter' || k === ' ') && document.activeElement === cv) { var p = placeAt(me); if (p) { e.preventDefault(); openCard(p); } }
});
window.addEventListener('keyup', function (e) { keys[e.key.toLowerCase()] = false; });
window.addEventListener('resize', resize);

/* ---------- particles ---------- */
var sparks = [], motes = [];
function burst(x, y) { if (RM) return; for (var i = 0; i < 26; i++) { var a = Math.random() * 6.283, s = 40 + Math.random() * 90; sparks.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 40, l: 1 }); } }
for (var i = 0; i < 40; i++) motes.push({ x: Math.random() * W, y: 250 + Math.random() * (H - 250), p: Math.random() * 6.283 });

/* ---------- update ---------- */
var last = performance.now(), T = 0, whisperT = 0;
function update(dt) {
  T += dt;
  var kx = (keys.arrowright || keys.d ? 1 : 0) - (keys.arrowleft || keys.a ? 1 : 0);
  var ky = (keys.arrowdown || keys.s ? 1 : 0) - (keys.arrowup || keys.w ? 1 : 0);
  var speed = 290;
  if (kx || ky) { var n = Math.hypot(kx, ky); me.x += kx / n * speed * dt; me.y += ky / n * speed * dt; me.tx = me.x; me.ty = me.y; pending = null; }
  else {
    var dx = me.tx - me.x, dy = me.ty - me.y, d = Math.hypot(dx, dy);
    if (d > 2) { var st = Math.min(d, speed * dt * Math.min(1, 0.35 + d / 120)); me.x += dx / d * st; me.y += dy / d * st; }
  }
  me.x = Math.max(30, Math.min(W - 30, me.x)); me.y = Math.max(250, Math.min(H - 30, me.y));
  // arrival
  var near = null, nd = 1e9;
  P.forEach(function (p) { var d2 = Math.hypot(p.x - me.x, p.y - me.y); if (d2 < nd) { nd = d2; near = p; } });
  if (suppress && (!near || near.id !== suppress || nd > 90)) { var sp = byId(suppress); if (Math.hypot(sp.x - me.x, sp.y - me.y) > 90) suppress = null; }
  // A card opens only where the wisp chose to stop: at the place it was sent to, or when it comes to rest beside one.
  var idle = !kx && !ky && !dragging && Math.hypot(me.tx - me.x, me.ty - me.y) < 3;
  if (!openId && near && nd < 44 && near.id !== suppress && ((pending === near.id && nd < 12) || (!pending && idle))) { openCard(near); pending = null; }
  // quiet loop features
  LOOP.forEach(function (l) {
    if (Math.hypot(l[2] - me.x, l[3] - me.y) < 70 && whisperT <= 0) {
      if (!S.loop[l[0]]) { S.loop[l[0]] = true; save(); }
      whEl.innerHTML = '<b>' + l[1] + '</b> \u2014 ' + l[4]; whEl.className = 'whisper on'; whisperT = 4.5; whEl.dataset.id = l[0];
    }
  });
  if (whisperT > 0) { whisperT -= dt; if (whisperT <= 0) whEl.className = 'whisper'; }
  // camera
  var viewW = vw / sc, viewH = vh / sc;
  var tx = viewW >= W ? W / 2 : Math.max(viewW / 2, Math.min(W - viewW / 2, me.x));
  var ty = viewH >= H ? H / 2 : Math.max(viewH / 2, Math.min(H - viewH / 2, me.y));
  var f = RM ? 1 : Math.min(1, dt * 4);
  camX += (tx - camX) * f; camY += (ty - camY) * f;
  aliveShown += (alive - aliveShown) * Math.min(1, dt * (RM ? 10 : 0.8));
  FLOWERS.forEach(function (fl) {
    var on = fl.near ? !!S.seen[fl.near] : aliveShown >= fl.t;
    fl.g += ((on ? 1 : 0) - fl.g) * Math.min(1, dt * (RM ? 20 : 2.2));
  });
  for (var i = sparks.length - 1; i >= 0; i--) { var s = sparks[i]; s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 60 * dt; s.l -= dt * 0.9; if (s.l <= 0) sparks.splice(i, 1); }
  if (T - saveT > 2) { S.x = Math.round(me.x); S.y = Math.round(me.y); save(); saveT = T; }
}
var saveT = 0;

/* ---------- draw ---------- */
function draw() {
  var c = cx;
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.fillStyle = '#ecca94'; c.fillRect(0, 0, vw, vh);
  c.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * (vw / 2 - camX * sc), dpr * (vh / 2 - camY * sc));
  if (vw / sc > W) { var eg = c.createLinearGradient(-200, 0, 0, 0); eg.addColorStop(0, '#ecca94'); eg.addColorStop(1, '#f1d4a3'); c.fillStyle = eg; c.fillRect(-400, 0, 400, H); var eg2 = c.createLinearGradient(W, 0, W + 200, 0); eg2.addColorStop(0, '#f1d4a3'); eg2.addColorStop(1, '#ecca94'); c.fillStyle = eg2; c.fillRect(W, 0, 400, H); }
  c.drawImage(staticLayer, 0, 0, W, H);
  var a = aliveShown;
  // water returning to the wash
  if (a > 0.02) {
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
    washPath(c); c.setLineDash([washLen * a, washLen]);
    c.strokeStyle = 'rgba(96,170,200,.75)'; c.lineWidth = 8 + 12 * a; c.stroke();
    if (!RM) { washPath(c); c.setLineDash([6, 22]); c.lineDashOffset = -T * 30; c.strokeStyle = 'rgba(235,250,255,' + (0.5 * a) + ')'; c.lineWidth = 3; c.stroke(); }
    c.restore();
    // green banks
    c.fillStyle = 'rgba(120,160,80,' + (0.22 * a) + ')';
    for (var i = 1; i < WASH.length - 1; i++) if (i / WASH.length < a + 0.1) { c.beginPath(); c.ellipse(WASH[i][0], WASH[i][1], 70, 40, 0, 0, 6.283); c.fill(); }
  }
  // palms by the oasis
  PALMS.forEach(function (pm, j) { palm(c, pm[0], pm[1], 0.8 + (j % 2) * 0.25, a); });
  // flowers
  FLOWERS.forEach(function (f) { if (f.g < 0.03) return; var r = f.r * f.g; c.fillStyle = '#6f8f4a'; c.fillRect(f.x - 0.6, f.y, 1.2, 5 * f.g); c.fillStyle = f.c; for (var k = 0; k < 5; k++) { c.beginPath(); c.arc(f.x + Math.cos(k * 1.256) * r, f.y + Math.sin(k * 1.256) * r, r * 0.75, 0, 6.283); c.fill(); } c.fillStyle = '#fff2a8'; c.beginPath(); c.arc(f.x, f.y, r * 0.45, 0, 6.283); c.fill(); });
  // loop features
  LOOP.forEach(function (l) { loopMark(c, l, a); });
  // trail to next step
  var nx = nextStep();
  if (nx && S.intro) trail(c, me, byId(nx));
  // places
  P.forEach(function (p) { drawPlace(c, p, p.id === nx); });
  // animals
  animals(c, a);
  // sparks
  sparks.forEach(function (s) { c.fillStyle = 'rgba(255,214,110,' + s.l + ')'; c.beginPath(); c.arc(s.x, s.y, 3 * s.l + 1, 0, 6.283); c.fill(); });
  // wisp
  wisp(c, me.x, me.y);
  // floating light motes as the land wakes
  if (!RM) motes.forEach(function (m, j) { if (j / motes.length > a + 0.15) return; var y = m.y - (T * 12 + j * 30) % 60, x = m.x + Math.sin(T * 0.7 + m.p) * 12; c.fillStyle = 'rgba(255,240,180,' + (0.35 + 0.3 * Math.sin(T * 2 + m.p)) + ')'; c.beginPath(); c.arc(x, y, 2.2, 0, 6.283); c.fill(); });
  // labels last so they sit on top
  P.forEach(function (p) { label(c, p, p.id === nx); });
  // warm day light
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  var vg = c.createRadialGradient(vw / 2, vh * 0.4, Math.min(vw, vh) * 0.3, vw / 2, vh / 2, Math.max(vw, vh) * 0.8);
  vg.addColorStop(0, 'rgba(255,240,200,0)'); vg.addColorStop(1, 'rgba(170,100,50,' + (0.22 - 0.1 * a) + ')');
  c.fillStyle = vg; c.fillRect(0, 0, vw, vh);
}
function bob(p) { return RM ? 0 : Math.sin(T * 2 + p) * 2; }
function palm(c, x, y, s, a) {
  c.save(); c.translate(x, y); c.scale(s, s);
  c.fillStyle = 'rgba(90,60,30,.18)'; c.beginPath(); c.ellipse(8, 4, 26, 8, 0, 0, 6.283); c.fill();
  c.strokeStyle = '#8b6a45'; c.lineWidth = 6; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(-4, -30, 2, -58); c.stroke();
  c.strokeStyle = a > 0.3 ? '#5f8c3c' : '#8f9a5c'; c.lineWidth = 5; c.lineCap = 'round';
  var sw = RM ? 0 : Math.sin(T * 0.8 + x) * 0.06;
  for (var k = 0; k < 7; k++) { var an = -Math.PI / 2 + (k - 3) * 0.5 + sw; c.beginPath(); c.moveTo(2, -58); c.quadraticCurveTo(2 + Math.cos(an) * 22, -58 + Math.sin(an) * 22 - 8, 2 + Math.cos(an) * 36, -58 + Math.sin(an) * 30 + 10); c.stroke(); }
  c.restore();
}
function loopMark(c, l, a) {
  var x = l[2], y = l[3], found = S.loop[l[0]], gl = 0.25 + 0.6 * a + (found ? 0.2 : 0);
  c.save(); c.translate(x, y);
  c.fillStyle = 'rgba(120,85,55,.25)'; c.beginPath(); c.ellipse(0, 6, 16, 5, 0, 0, 6.283); c.fill();
  c.fillStyle = '#b89a78'; c.beginPath(); c.moveTo(-9, 6); c.quadraticCurveTo(-11, -14, 0, -18); c.quadraticCurveTo(11, -14, 9, 6); c.closePath(); c.fill();
  c.strokeStyle = 'rgba(255,215,120,' + Math.min(1, gl) + ')'; c.lineWidth = 2; c.lineCap = 'round';
  var id = l[0]; c.beginPath();
  if (id === 'sense') { c.arc(0, -5, 3, 0, 6.283); c.moveTo(6, -10); c.arc(0, -5, 7, -0.8, 0.8); }
  else if (id === 'interpret') { for (var k = 0; k < 4; k++) { c.moveTo(0, -5); c.lineTo(Math.cos(k * 1.57 + 0.78) * 6, -5 + Math.sin(k * 1.57 + 0.78) * 6); } }
  else if (id === 'regulate') { c.moveTo(-6, -2); c.lineTo(6, -2); c.moveTo(-6, -8); c.lineTo(6, -8); }
  else if (id === 'circulate') { c.arc(0, -5, 6, 0, 5.2); }
  else if (id === 'repair') { c.moveTo(-5, -10); c.lineTo(5, 0); c.moveTo(-5, 0); c.lineTo(5, -10); }
  else if (id === 'adapt') { c.moveTo(0, 2); c.lineTo(0, -12); c.moveTo(0, -6); c.lineTo(-5, -10); c.moveTo(0, -4); c.lineTo(5, -8); }
  else { c.arc(0, -5, 2, 0, 6.283); c.moveTo(4, -5); c.arc(0, -5, 4, 0, 6.283); }
  c.stroke();
  if (found && !RM) { c.fillStyle = 'rgba(255,220,130,' + (0.18 + 0.1 * Math.sin(T * 2)) + ')'; c.beginPath(); c.arc(0, -6, 16, 0, 6.283); c.fill(); }
  c.restore();
}
function trail(c, from, to) {
  var mx = (from.x + to.x) / 2 + (to.y - from.y) * 0.12, my = (from.y + to.y) / 2 - (to.x - from.x) * 0.12;
  var d = Math.hypot(to.x - from.x, to.y - from.y); if (d < 50) return;
  var n = Math.floor(d / 26), off = RM ? 0 : (T * 0.9) % 1;
  for (var i = 1; i < n; i++) {
    var t = (i + off) / n; if (t > 0.97) continue;
    var x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * mx + t * t * to.x, y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * my + t * t * to.y;
    var al = 0.35 + 0.5 * Math.sin(t * Math.PI);
    c.fillStyle = 'rgba(255,190,70,' + al * 0.45 + ')'; c.beginPath(); c.arc(x, y, 8, 0, 6.283); c.fill();
    c.fillStyle = 'rgba(255,250,215,' + al + ')'; c.beginPath(); c.arc(x, y, 3.2, 0, 6.283); c.fill();
  }
}
function glow(c, x, y, r, col) { var g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, 'rgba(255,220,140,0)'); c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 6.283); c.fill(); }
function drawPlace(c, p, isNext) {
  var x = p.x, y = p.y, seen = S.seen[p.id];
  if (isNext) glow(c, x, y - 12, 70 + (RM ? 0 : Math.sin(T * 2.4) * 8), 'rgba(255,214,110,.55)');
  else if (seen) glow(c, x, y - 12, 44, 'rgba(255,230,160,.35)');
  c.save(); c.translate(x, y);
  c.fillStyle = 'rgba(90,55,25,.2)'; c.beginPath(); c.ellipse(0, 6, p.kind === 'door' ? 18 : 42, p.kind === 'door' ? 6 : 12, 0, 0, 6.283); c.fill();
  switch (p.kind) {
    case 'gate':
      c.fillStyle = '#d8b27a'; c.fillRect(-34, -58, 14, 62); c.fillRect(20, -58, 14, 62);
      c.strokeStyle = '#d8b27a'; c.lineWidth = 12; c.beginPath(); c.arc(0, -56, 27, Math.PI, 0); c.stroke();
      c.strokeStyle = '#e8a53a'; c.lineWidth = 3; c.beginPath(); c.arc(0, -56, 27, Math.PI, 0); c.stroke();
      c.fillStyle = 'rgba(255,236,170,.9)'; c.beginPath(); c.moveTo(-20, 4); c.lineTo(-20, -56); c.arc(0, -56, 20, Math.PI, 0); c.lineTo(20, 4); c.fill();
      c.fillStyle = '#f2f2ee'; c.beginPath(); c.moveTo(-6, -92); c.quadraticCurveTo(0, -104, 10, -96); c.quadraticCurveTo(24, -104, 30, -90); c.quadraticCurveTo(14, -92, 6, -86); c.closePath(); c.fill(); // tiny white dragon on the arch
      break;
    case 'library':
      c.fillStyle = '#c9d9e6'; c.fillRect(-40, -40, 80, 44); c.fillStyle = '#9fb8cc'; c.beginPath(); c.arc(0, -40, 30, Math.PI, 0); c.fill();
      c.fillStyle = '#e9f3fa'; for (var k = -30; k <= 30; k += 15) c.fillRect(k - 3, -38, 6, 42);
      c.fillStyle = '#5aa8e0'; c.beginPath(); c.moveTo(-9, 4); c.lineTo(-9, -18); c.arc(0, -18, 9, Math.PI, 0); c.lineTo(9, 4); c.fill();
      c.fillStyle = 'rgba(160,220,255,' + (0.5 + (RM ? 0 : 0.3 * Math.sin(T * 2))) + ')'; c.beginPath(); c.arc(0, -56, 5, 0, 6.283); c.fill();
      break;
    case 'stone':
      c.fillStyle = '#b79a7a'; c.beginPath(); c.ellipse(0, -6, 30, 14, 0, 0, 6.283); c.fill();
      c.fillStyle = '#fff6e2'; c.beginPath(); c.moveTo(-18, -12); c.quadraticCurveTo(-9, -20, 0, -14); c.quadraticCurveTo(9, -20, 18, -12); c.lineTo(18, -4); c.quadraticCurveTo(9, -10, 0, -5); c.quadraticCurveTo(-9, -10, -18, -4); c.closePath(); c.fill();
      c.strokeStyle = '#c9a36a'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, -14); c.lineTo(0, -5); c.stroke();
      break;
    case 'field':
      c.fillStyle = '#bca27c'; c.fillRect(-52, -8, 104, 14);
      for (var s = 0; s < 3; s++) { c.save(); c.translate(-44 + s * 30, -22); c.fillStyle = '#35507a'; c.beginPath(); c.moveTo(0, 0); c.lineTo(24, 0); c.lineTo(28, -14); c.lineTo(4, -14); c.closePath(); c.fill(); c.strokeStyle = 'rgba(200,225,255,.7)'; c.lineWidth = 1; c.beginPath(); c.moveTo(12, 0); c.lineTo(16, -14); c.stroke(); c.restore(); }
      c.fillStyle = '#c3683f'; c.fillRect(30, -34, 26, 26); c.fillStyle = '#9b4a2a'; c.beginPath(); c.moveTo(26, -34); c.lineTo(43, -48); c.lineTo(60, -34); c.fill();
      c.fillStyle = '#3a2818'; c.fillRect(39, -20, 8, 12);
      break;
    case 'door':
      var col = p.color || '#e8c96a';
      c.fillStyle = '#e9d2aa'; c.beginPath(); c.moveTo(-15, 4); c.lineTo(-15, -26); c.arc(0, -26, 15, Math.PI, 0); c.lineTo(15, 4); c.fill();
      c.fillStyle = col; c.beginPath(); c.moveTo(-10, 4); c.lineTo(-10, -26); c.arc(0, -26, 10, Math.PI, 0); c.lineTo(10, 4); c.fill();
      c.fillStyle = 'rgba(255,255,255,' + (seen ? 0.55 : 0.25) + ')'; c.beginPath(); c.arc(0, -26, 4, 0, 6.283); c.fill();
      break;
    case 'grove':
      [[-30, -6, 22], [4, -18, 26], [34, -4, 20]].forEach(function (t) { c.fillStyle = '#7a5a3a'; c.fillRect(t[0] - 2.5, t[1], 5, 16); c.fillStyle = '#6e9a4c'; c.beginPath(); c.arc(t[0], t[1] - 8, t[2] * 0.7, 0, 6.283); c.fill(); c.fillStyle = '#8fb865'; c.beginPath(); c.arc(t[0] - 4, t[1] - 12, t[2] * 0.4, 0, 6.283); c.fill(); });
      c.fillStyle = '#8a5a34'; c.fillRect(-26, 12, 52, 8); c.fillStyle = '#e8644a'; for (var q = -20; q <= 20; q += 10) { c.beginPath(); c.arc(q, 12, 3, 0, 6.283); c.fill(); }
      break;
    case 'theater':
      c.fillStyle = '#c8a679'; c.beginPath(); c.ellipse(0, 0, 54, 20, 0, Math.PI, 0); c.fill();
      c.strokeStyle = '#a88659'; c.lineWidth = 2; for (var r = 26; r <= 50; r += 8) { c.beginPath(); c.ellipse(0, 0, r, r * 0.36, 0, Math.PI, 0); c.stroke(); }
      c.fillStyle = '#3a2c24'; c.fillRect(-30, -58, 60, 36);
      var sg = c.createLinearGradient(0, -56, 0, -24); sg.addColorStop(0, '#f6b56a'); sg.addColorStop(1, '#d9677a'); c.fillStyle = sg; c.fillRect(-27, -55, 54, 30);
      c.fillStyle = '#fff2d6'; c.beginPath(); c.moveTo(-8, -38); c.quadraticCurveTo(0, -48, 10, -42); c.quadraticCurveTo(4, -40, -8, -38); c.fill();
      break;
    case 'workshop':
      c.fillStyle = '#b8764a'; c.fillRect(-40, -34, 80, 38); c.fillStyle = '#8b4e2c'; c.beginPath(); c.moveTo(-48, -34); c.lineTo(0, -62); c.lineTo(48, -34); c.fill();
      c.fillStyle = '#ffd98a'; c.fillRect(-12, -22, 24, 26);
      ['#e8c96a', '#9fd8e8', '#e8a06a', '#c9a2e8', '#a8d86a'].forEach(function (lc, i) { var lx = -32 + i * 16, ly = -44 + Math.abs(i - 2) * 4; c.fillStyle = lc; c.beginPath(); c.arc(lx, ly + 12, 3.5 + (RM ? 0 : Math.sin(T * 3 + i) * 0.6), 0, 6.283); c.fill(); });
      break;
    case 'market':
      [['#e8644a', -28], ['#e0a53a', 6]].forEach(function (m) { c.fillStyle = '#b08a60'; c.fillRect(m[1] - 2, -30, 3, 34); c.fillRect(m[1] + 27, -30, 3, 34); c.fillStyle = '#f4e3c3'; c.fillRect(m[1], -8, 28, 12); for (var z = 0; z < 4; z++) { c.fillStyle = z % 2 ? '#fff3dd' : m[0]; c.fillRect(m[1] + z * 7, -38, 7, 10); } });
      c.fillStyle = '#7a9a5a'; c.beginPath(); c.arc(-18, -12, 3, 0, 6.283); c.fill(); c.fillStyle = '#c9a2e8'; c.fillRect(12, -14, 7, 7);
      break;
    case 'wish':
      c.strokeStyle = '#8b6a45'; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 4); c.lineTo(0, -44); c.stroke();
      c.fillStyle = '#e9e2d0'; c.beginPath(); c.arc(0, -46, 5, 0, 6.283); c.fill();
      for (var cup = 0; cup < 3; cup++) { var an2 = (RM ? 0 : T * 3) + cup * 2.094; c.fillStyle = '#d6c7a8'; c.beginPath(); c.arc(Math.cos(an2) * 10, -46 + Math.sin(an2) * 3, 3, 0, 6.283); c.fill(); }
      c.fillStyle = '#3f5f86'; c.beginPath(); c.moveTo(-30, 2); c.lineTo(-8, 2); c.lineTo(-5, -12); c.lineTo(-27, -12); c.closePath(); c.fill();
      c.fillStyle = '#9fb8c9'; c.beginPath(); c.ellipse(26, -10, 13, 7, 0, 0, 6.283); c.fill(); c.fillRect(13, -10, 26, 14); c.fillStyle = '#b8cfdd'; c.beginPath(); c.ellipse(26, -10, 13, 5, 0, 0, 6.283); c.fill();
      break;
  }
  c.restore();
}
function label(c, p, isNext) {
  var fs = (p.kind === 'door' ? 11.5 : 13.5) / sc, ly = p.y + (p.kind === 'door' ? 20 : 30) / Math.max(sc, 0.7);
  c.font = (isNext ? '700 ' : '600 ') + fs + 'px system-ui,-apple-system,Segoe UI,Roboto,sans-serif';
  var t = p.kind === 'door' ? p.name : p.name, w = c.measureText(t).width;
  c.fillStyle = isNext ? 'rgba(90,45,10,.9)' : 'rgba(255,248,234,.86)';
  var ph = fs * 1.55, pw = w + fs * 1.1;
  roundRect(c, p.x - pw / 2, ly - ph / 2, pw, ph, ph / 2); c.fill();
  c.fillStyle = isNext ? '#ffe7ad' : '#4a3020'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(t, p.x, ly + fs * 0.05);
  if (S.seen[p.id]) { c.fillStyle = '#e8a53a'; c.fillText('\u2726', p.x + pw / 2 + fs * 0.1, ly - fs * 0.6); }
}
function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function wisp(c, x, y) {
  var b = bob(0) * 1.5;
  glow(c, x, y - 14 + b, 34, 'rgba(255,236,170,.75)');
  c.fillStyle = '#fffbe8'; c.beginPath(); c.arc(x, y - 14 + b, 7, 0, 6.283); c.fill();
  c.fillStyle = 'rgba(90,55,25,.18)'; c.beginPath(); c.ellipse(x, y + 2, 10, 3.5, 0, 0, 6.283); c.fill();
  if (!RM) for (var i = 0; i < 4; i++) { var a = T * 2.2 + i * 1.57; c.fillStyle = 'rgba(255,220,130,.8)'; c.beginPath(); c.arc(x + Math.cos(a) * 13, y - 14 + b + Math.sin(a) * 6, 1.8, 0, 6.283); c.fill(); }
}
function animals(c, a) {
  var t = RM ? 0 : T;
  // butterflies over the flowers
  if (a > 0.12) for (var i = 0; i < 7; i++) { var bx = 200 + ((i * 157) % 800) + Math.sin(t * 0.6 + i) * 60, by = 500 + ((i * 263) % 1100) + Math.cos(t * 0.5 + i * 2) * 40, fl = Math.abs(Math.sin(t * 9 + i)); c.fillStyle = ['#f2a33a', '#f7e27a', '#c99be8', '#fff'][i % 4]; c.beginPath(); c.ellipse(bx - 3, by, 3.5 * fl + 0.5, 4, 0, 0, 6.283); c.ellipse(bx + 3, by, 3.5 * fl + 0.5, 4, 0, 0, 6.283); c.fill(); }
  // quail family crossing the lower desert
  if (a > 0.3) { var qx = 700 + ((t * 22) % 500) - 250; for (var q = 0; q < 4; q++) { var x = qx - q * (q ? 16 : 0) - (q ? 8 : 0), y = 1440 + Math.sin(q) * 6, s = q ? 0.6 : 1; c.fillStyle = '#7d6f63'; c.beginPath(); c.ellipse(x, y, 7 * s, 5 * s, 0, 0, 6.283); c.fill(); c.beginPath(); c.arc(x + 6 * s, y - 4 * s, 3.2 * s, 0, 6.283); c.fill(); if (!q) { c.strokeStyle = '#3a2818'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + 6, y - 7); c.quadraticCurveTo(x + 9, y - 13, x + 5, y - 13); c.stroke(); } } }
  // three hens at the field, once visited
  if (S.seen.field) for (var h = 0; h < 3; h++) { var hx = 860 + h * 26 + Math.sin(t * 0.8 + h * 2) * 6, hy = 1348 + (h % 2) * 8, pk = (Math.sin(t * 3 + h * 1.7) > 0.6) ? 3 : 0; c.fillStyle = h === 1 ? '#a0522d' : '#f4efe4'; c.beginPath(); c.ellipse(hx, hy, 8, 6, 0, 0, 6.283); c.fill(); c.beginPath(); c.arc(hx + 7, hy - 5 + pk, 4, 0, 6.283); c.fill(); c.fillStyle = '#d33'; c.fillRect(hx + 6, hy - 10 + pk, 3, 2.5); }
  // hummingbird at Asherah's door
  if (S.seen.asherah) { var ash = byId('asherah'), hb = ash.x + 26 + Math.sin(t * 1.3) * 14, hy2 = ash.y - 40 + Math.cos(t * 2.1) * 8; c.fillStyle = '#3d9a7a'; c.beginPath(); c.ellipse(hb, hy2, 5, 2.6, -0.3, 0, 6.283); c.fill(); c.fillStyle = 'rgba(220,240,255,.7)'; c.beginPath(); c.ellipse(hb - 1, hy2 - 3, 2, 5 * Math.abs(Math.sin(t * 30)) + 1, 0.4, 0, 6.283); c.fill(); c.strokeStyle = '#2a2a2a'; c.lineWidth = 1; c.beginPath(); c.moveTo(hb + 5, hy2 - 1); c.lineTo(hb + 11, hy2 - 2); c.stroke(); }
  // Jenny at the play grove
  if (S.seen.play) { var pg = byId('play'), jx = pg.x + 52, jy = pg.y + 14; c.fillStyle = '#2b2522'; c.beginPath(); c.ellipse(jx, jy, 11, 7, 0, 0, 6.283); c.fill(); c.beginPath(); c.arc(jx + 10, jy - 7, 6, 0, 6.283); c.fill(); c.beginPath(); c.arc(jx - 11, jy - 5 + (RM ? 0 : Math.sin(t * 8)) * 2, 3, 0, 6.283); c.fill(); }
  // bighorn on the ridge when the land is lively
  if (a > 0.65) { var sx = 980 + Math.sin(t * 0.1) * 30, sy = 208; c.fillStyle = '#8d6e55'; c.beginPath(); c.ellipse(sx, sy, 12, 7, 0, 0, 6.283); c.fill(); c.beginPath(); c.arc(sx + 12, sy - 7, 5, 0, 6.283); c.fill(); c.strokeStyle = '#d8c3a0'; c.lineWidth = 2.5; c.beginPath(); c.arc(sx + 12, sy - 10, 5, 3.4, 6); c.stroke(); c.fillStyle = '#8d6e55'; c.fillRect(sx - 8, sy + 4, 2.5, 8); c.fillRect(sx + 6, sy + 4, 2.5, 8); }
  // the white dragon crosses the sky once the path is walked
  if (S.done) { var dx = ((t * 40) % 1800) - 300, dy = 120 + Math.sin(t * 0.5) * 20, fw = RM ? 0.5 : Math.sin(t * 3); c.save(); c.translate(dx, dy); c.fillStyle = 'rgba(255,255,255,.85)'; c.beginPath(); c.ellipse(0, 0, 22, 5, 0, 0, 6.283); c.fill(); c.beginPath(); c.moveTo(-4, 0); c.quadraticCurveTo(0, -26 * fw - 6, 14, -30 * fw - 4); c.lineTo(8, 0); c.fill(); c.beginPath(); c.moveTo(22, -2); c.lineTo(32, -6); c.lineTo(24, 2); c.fill(); c.restore(); }
}

/* ---------- loop ---------- */
function frame(now) {
  var dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (!document.hidden) { update(dt); draw(); }
  requestAnimationFrame(frame);
}

/* Same-site only: if /play/garden/ is not deployed yet, point the Play card at /play instead. */
function checkGarden() {
  if (!window.fetch || location.protocol === 'file:') return;
  fetch('/play/garden/', { method: 'HEAD' }).then(function (r) {
    if (!r.ok) { var p = byId('play'); p.links = [['Play Garden Defense', '/play', 1]]; p.line = 'Nobody fights here. We grow together. Hold the gate with Jenny.'; p.credit = 'Garden Defense: Muse'; }
  }).catch(function () {});
}

resize(); calcAlive(); aliveShown = alive;
FLOWERS.forEach(function (f) { f.g = (f.near ? S.seen[f.near] : alive >= f.t) ? 1 : 0; });
refreshHud(); checkGarden();
if (!S.intro) { $('intro').hidden = false; setTimeout(function () { $('beginBtn').focus(); }, 50); }
else { var nx0 = nextStep(); setHint(nx0 ? 'Welcome back. ' + (HINTS[PATH[PATH.indexOf(nx0) - 1]] || '') : 'Welcome back. The garden remembers you.'); suppress = (placeAt(me) || {}).id || null; }
requestAnimationFrame(frame);
window.ArkWorld = { state: S, places: P, walkTo: function (id) { walkTo(byId(id)); }, me: me,
  screenOf: function (id) { var p = byId(id); return { x: (p.x - camX) * sc + vw / 2, y: (p.y - camY) * sc + vh / 2 }; } };
})();
