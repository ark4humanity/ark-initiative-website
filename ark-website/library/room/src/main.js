import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import * as T from './textures.js';
import { buildLion } from './lion.js';
import { createKit } from './kit.js';
import { buildAsherah, ASHERAH_LION } from './asherah.js';
import { buildLibrary } from './library.js';
import { setSound, soundIsOn, tone, arpeggio } from './audio.js';
import { createPather } from './path.js';

const ROOM = new URLSearchParams(location.search).get('room') === 'asherah' ? 'asherah' : 'library';
document.body.dataset.room = ROOM;

const ITEMS = (ROOM === 'asherah' ? window.ARK_ASHERAH : window.ARK_LIBRARY) || [];
const KIND = window.ARK_KIND || {};
const $ = (id) => document.getElementById(id);
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const small = Math.min(innerWidth, innerHeight) < 600;
const HQ = /[?&]hq=1/.test(location.search);
if (isTouch) document.body.classList.add('touch');

// ---------- renderer ----------
const canvasEl = $('scene');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: false, powerPreference: 'high-performance' });
} catch (e) { window.arkFallback && window.arkFallback('webgl-context'); throw e; }
canvasEl.addEventListener('webglcontextlost', (e) => { e.preventDefault(); window.arkFallback && window.arkFallback('context-lost'); });
let pixelRatio = Math.min(devicePixelRatio || 1, small ? 1.5 : 1.75);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a1a10);
scene.fog = new THREE.FogExp2(0x3a2616, 0.028);
const camera = new THREE.PerspectiveCamera(small ? 62 : 55, innerWidth / innerHeight, 0.1, 80);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.75, 0.5, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());
let useBloom = true;

const progress = (p) => { const b = $('loadbar'); if (b) b.style.width = Math.round(p * 100) + '%'; };
progress(0.15);

// ---------- helpers ----------
const R = 13, WALL_H = 7.2;
const P = (r, deg, y = 0) => { const d = THREE.MathUtils.degToRad(deg); return new THREE.Vector3(r * Math.sin(d), y, -r * Math.cos(d)); };
const faceCenter = (o) => o.lookAt(0, o.position.y, 0);
const std = (o) => new THREE.MeshStandardMaterial(o);
const glowColor = (hex, k) => new THREE.Color(hex).multiplyScalar(k);
const obstacles = [];

// ---------- dust motes ----------
const moteCount = small ? 420 : 900;
const motes = (() => {
  const g = new THREE.BufferGeometry(), p = new Float32Array(moteCount * 3), rnd = new Float32Array(moteCount);
  for (let i = 0; i < moteCount; i++) {
    const r = Math.sqrt(Math.random()) * 11.5, a = Math.random() * Math.PI * 2;
    p[i * 3] = Math.cos(a) * r; p[i * 3 + 1] = Math.random() * 7; p[i * 3 + 2] = Math.sin(a) * r; rnd[i] = Math.random();
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPR: { value: pixelRatio } },
    vertexShader: `uniform float uTime; uniform float uPR; attribute float aRnd; varying float vA;
      void main(){ vec3 p = position; float t = uTime*0.12 + aRnd*40.0;
        p.x += sin(t*1.3)*0.5; p.z += cos(t*1.1)*0.5; p.y = mod(p.y + uTime*0.05*(0.3+aRnd), 7.0) + 0.1;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = (0.4 + 0.6*sin(uTime*1.5 + aRnd*30.0)) * smoothstep(7.0, 5.0, p.y);
        gl_PointSize = (2.0 + aRnd*3.5) * uPR * (8.0 / -mv.z); }`,
    fragmentShader: `varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d);
        gl_FragColor = vec4(vec3(1.0,0.82,0.5)*1.4, a*vA*0.8); }`,
  });
  const pts = new THREE.Points(g, m); scene.add(pts); return m;
})();

// ---------- sparks (bursts, trails) ----------
const SPARKS = 160;
const sparks = (() => {
  const g = new THREE.BufferGeometry(), p = new Float32Array(SPARKS * 3), c = new Float32Array(SPARKS * 3), a = new Float32Array(SPARKS);
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.setAttribute('aLife', new THREE.BufferAttribute(a, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uPR: { value: pixelRatio } },
    vertexShader: `uniform float uPR; attribute float aLife; attribute vec3 color; varying vec3 vC; varying float vL;
      void main(){ vC = color; vL = aLife; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 6.0*uPR*aLife*(8.0 / -mv.z); }`,
    fragmentShader: `varying vec3 vC; varying float vL; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(vC*2.2, smoothstep(0.5,0.0,d)*vL); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; scene.add(pts);
  const vel = new Float32Array(SPARKS * 3); let head = 0;
  return {
    emit(pos, n, color, speed = 2, up = 1.5) {
      const col = new THREE.Color(color);
      for (let i = 0; i < n; i++) {
        const k = head++ % SPARKS;
        p[k * 3] = pos.x; p[k * 3 + 1] = pos.y; p[k * 3 + 2] = pos.z;
        vel[k * 3] = (Math.random() - 0.5) * speed; vel[k * 3 + 1] = Math.random() * up + 0.2; vel[k * 3 + 2] = (Math.random() - 0.5) * speed;
        c[k * 3] = col.r; c[k * 3 + 1] = col.g; c[k * 3 + 2] = col.b; a[k] = 1;
      }
    },
    update(dt) {
      for (let k = 0; k < SPARKS; k++) {
        if (a[k] <= 0) continue;
        a[k] = Math.max(0, a[k] - dt * 0.9);
        p[k * 3] += vel[k * 3] * dt; p[k * 3 + 1] += vel[k * 3 + 1] * dt; p[k * 3 + 2] += vel[k * 3 + 2] * dt;
        vel[k * 3 + 1] -= dt * 0.8; vel[k * 3] *= 0.98; vel[k * 3 + 2] *= 0.98;
      }
      g.attributes.position.needsUpdate = true; g.attributes.aLife.needsUpdate = true; g.attributes.color.needsUpdate = true;
    },
  };
})();

// ---------- labels ----------
const labels = [];
function makeLabel(title, kind, pos, { width = 1.7, always = false, big = false } = {}) {
  const c = T.labelCanvas(title, kind, false);
  const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const m = new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false, depthTest: true, fog: false });
  m.color.setScalar(1);
  const s = new THREE.Sprite(m); s.position.copy(pos);
  s.scale.set(width, width * c.height / c.width, 1); s.renderOrder = 10;
  scene.add(s);
  const L = { sprite: s, title, kind, width, always, big, canvas: c, tex: tx, aspect: c.height / c.width };
  labels.push(L); return L;
}
function markLabelFound(L) {
  const c = T.labelCanvas(L.title, L.kind, true);
  L.tex.dispose(); const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = L.sprite.material.map.anisotropy; L.sprite.material.map = tx; L.tex = tx;
  L.aspect = c.height / c.width; L.sprite.scale.set(L.width, L.width * L.aspect, 1);
}
progress(0.5);

// ---------- items ----------
const items = []; // {data, group, hit, label, stand, open(), close(), found}
const hitM = new THREE.MeshBasicMaterial({ visible: false });
function register(data, group, hitSize, labelY, extra = {}) {
  const hit = new THREE.Mesh(new THREE.BoxGeometry(hitSize[0], hitSize[1], hitSize[2]), hitM);
  hit.position.y = hitSize[1] / 2 + (extra.hitY || 0); group.add(hit);
  const wp = group.position.clone();
  const toC = new THREE.Vector3(-wp.x, 0, -wp.z).normalize();
  const stand = wp.clone().addScaledVector(toC, extra.standDist || 1.7); stand.y = 0;
  const lp = wp.clone(); lp.y = labelY;
  const label = makeLabel(data.title, data.labelKind || (KIND[data.kind] ? KIND[data.kind].split(' · ')[0] : ''), lp, { width: small ? 2.1 : 1.9 });
  const it = { data, group, hit, label, stand, found: false, anim: 0, animDir: 0, ...extra };
  hit.userData.item = it; items.push(it);
  return it;
}
const api = {}; // filled in below; rooms call these at run time (reveal a secret, speak, play a tone)
const roomCtx = { scene, register, makeLabel, std, glowColor, small, obstacles, pixelRatio, api };
const room = ROOM === 'asherah' ? buildAsherah(roomCtx) : buildLibrary(roomCtx);
const hidden = room.hidden;
const secrets = room.secrets || (hidden ? [hidden] : []);
if (room.exposure) renderer.toneMappingExposure = room.exposure;
if (room.bloomStrength !== undefined) { bloom.strength = room.bloomStrength; bloom.threshold = room.bloomThreshold; }
const countable = items.filter((it) => !it.isPortal && !it.aux);
for (const it of items) obstacles.push({ x: it.group.position.x, z: it.group.position.z, r: it.obstacle !== undefined ? it.obstacle : (it.data.kind === 'table' || it.data.kind === 'video') ? 0 : 0.55, item: it });

$('total').textContent = String(countable.length);
$('stotal').textContent = String(secrets.length);
const pather = createPather(room.maxR || 11.3, obstacles);
progress(0.75);

// ---------- the guardian ----------
const lion = buildLion(ROOM === 'asherah' ? ASHERAH_LION : {});
lion.root.position.copy(room.lionStart || new THREE.Vector3(0, 0, 6.2)); lion.root.rotation.y = Math.PI;
scene.add(lion.root);
let heading = Math.PI;
let camYaw = Math.PI, camPitch = 0.24, camDist = small ? 7 : 6.2, camLook = 0; // camLook 0..1 raises the eyes toward the dome
const camTarget = new THREE.Vector3();

// ---------- words (each library's guardian speaks in its own voice) ----------
const SAY = Object.assign({
  name: 'HALO',
  welcome: "Welcome, reader. I'm HALO. Touch anything that glows.",
  lines: ['Rrrrr… that was my friendly roar.', 'I keep the door. You keep reading.', 'The clay jars lift their lids for you.', 'The glowing books hum when you come close.', 'Every title here is real. Go on, touch one.', 'The glowing arch by the door leads to Asherah’s Library.'],
  first: 'One found! The shelves are waking up.',
  third: 'Psst. I left a paw print somewhere. Only I can wake it.',
  reveal: 'My gift to you: a hidden title!',
  all: 'Every shelf, found. The Library remembers you.',
  idle: 'Pick one. The jars are older than they look.',
  walk: 'HALO is walking you to',
  hint: 'HALO',
}, room.say || {});
if (ROOM === 'asherah') {
  document.title = 'Asherah’s Library: walk-in prototype';
  const ic = document.querySelector('.intro-card');
  ic.querySelector('.eyebrow').textContent = 'THE ARK INITIATIVE · THE MOTHER · MEMORY KEPT';
  ic.querySelector('h1').textContent = 'Asherah’s Library';
  ic.querySelector('p').innerHTML = 'Walk in as the <b>White Lion</b>, with the bee beside you. Everything that glows opens a real piece from Asherah’s living archive.';
  const plainUrl = 'https://thearkinitiative.ark4humanity.workers.dev/pillar-05-asherah.html';
  $('plain').href = plainUrl; $('plain').textContent = 'Asherah’s page'; $('r-back').textContent = 'Back to the shelves';
  const sm = ic.querySelector('.small a'); if (sm) { sm.href = plainUrl; sm.textContent = 'Read Asherah’s archive as a plain page'; }
}
// ---------- UI state ----------
let started = false, readerOpen = false, opening = null, autoGoal = null, lastInput = performance.now();
let foundCount = 0, moved = 0, openedAny = false, hintTimer = 0;
const keys = new Set();
const joy = { x: 0, y: 0, active: false };

function toast(msg, ms = 2200) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => (t.hidden = true), ms); }
let speechT = 0;
function say(msg, ms = 3800) { const s = $('speech'); s.textContent = msg; s.hidden = false; speechT = ms / 1000; }
function showHint() {
  const h = $('hint');
  h.innerHTML = isTouch
    ? 'Drag the <b>walk</b> circle to move ' + SAY.hint + ' · <b>Tap</b> anything glowing to open it'
    : '<b>WASD</b> or <b>arrow keys</b> to walk · <b>Click</b> anything glowing to open it · drag to look around';
  h.hidden = false;
}
const hideHint = () => { $('hint').hidden = true; };

// ---------- input ----------
addEventListener('keydown', (e) => {
  if (readerOpen) { if (e.key === 'Escape') closeReader(); return; }
  const k = e.key.toLowerCase();
  if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'shift'].includes(k)) { keys.add(k); autoGoal = null; lastInput = performance.now(); if (k.startsWith('arrow')) e.preventDefault(); }
  if ((k === 'e' || k === 'enter' || k === ' ') && started) { const n = nearest(); if (n) openItem(n); e.preventDefault(); }
});
addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
addEventListener('blur', () => keys.clear());

// joystick
const joyEl = $('joy'), knob = $('knob');
let joyId = null;
joyEl.addEventListener('pointerdown', (e) => { joyId = e.pointerId; joyEl.setPointerCapture(e.pointerId); joy.active = true; autoGoal = null; joyMove(e); e.preventDefault(); });
joyEl.addEventListener('pointermove', (e) => { if (e.pointerId === joyId) joyMove(e); });
const joyEnd = (e) => { if (e.pointerId !== joyId) return; joyId = null; joy.active = false; joy.x = joy.y = 0; knob.style.transform = ''; };
joyEl.addEventListener('pointerup', joyEnd); joyEl.addEventListener('pointercancel', joyEnd);
function joyMove(e) {
  const r = joyEl.getBoundingClientRect(); let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
  const max = r.width / 2 - 10, len = Math.hypot(dx, dy); if (len > max) { dx *= max / len; dy *= max / len; }
  knob.style.transform = `translate(${dx}px,${dy}px)`; joy.x = dx / max; joy.y = -dy / max; lastInput = performance.now();
}

// look-drag + tap
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
const lionHit = new THREE.Mesh(new THREE.BoxGeometry(1, 1.6, 1.8), hitM); lionHit.position.y = 0.8; lion.root.add(lionHit);
let drag = null;
canvasEl.addEventListener('pointerdown', (e) => { if (!started || readerOpen) return; drag = { id: e.pointerId, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), moved: 0 }; canvasEl.setPointerCapture(e.pointerId); });
canvasEl.addEventListener('pointermove', (e) => {
  if (!started || readerOpen) return;
  if (drag && e.pointerId === drag.id) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
    if (drag.moved > 8) {
      camYaw -= dx * 0.006; const v = dy * 0.003;
      if (v < 0 && camPitch <= 0.081) camLook = THREE.MathUtils.clamp(camLook - v * 1.6, 0, 1); // keep dragging up: look up at the dome
      else if (v > 0 && camLook > 0) camLook = THREE.MathUtils.clamp(camLook - v * 1.6, 0, 1);
      else camPitch = THREE.MathUtils.clamp(camPitch + v, 0.08, 0.75);
      lastInput = performance.now();
    }
  } else if (!isTouch) {
    const h = pick(e.clientX, e.clientY); canvasEl.style.cursor = h ? 'pointer' : 'grab';
  }
});
canvasEl.addEventListener('pointerup', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const isTap = drag.moved < 12 && performance.now() - drag.t < 800; drag = null;
  if (!isTap) return;
  const h = pick(e.clientX, e.clientY);
  if (h === 'lion') { lionTapped(); return; }
  if (h) tapItem(h);
});
function pick(cx, cy) {
  ndc.set(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const targets = items.filter((it) => !it.locked).map((it) => it.hit); targets.push(lionHit);
  const hits = ray.intersectObjects(targets, false);
  if (!hits.length) return null;
  // several objects can overlap on a narrow phone screen: pick the one whose centre is nearest the finger
  let best = null, bd = 1e9; const v = new THREE.Vector3();
  const lionFirst = hits[0].object === lionHit;
  for (const h of hits) {
    if (h.object === lionHit) continue;
    h.object.getWorldPosition(v); v.project(camera);
    const d = Math.hypot((v.x + 1) / 2 * innerWidth - cx, (1 - v.y) / 2 * innerHeight - cy);
    if (d < bd) { bd = d; best = h.object.userData.item; }
  }
  // the guardian often stands in front of what you're reaching for: prefer an item whose centre is right under the finger
  if (lionFirst && (!best || bd > (isTouch ? 60 : 40))) return 'lion';
  return best;
}
$('prompt').addEventListener('click', () => { const n = nearest(); if (n) openItem(n); });

function distXZ(a, b) { return Math.hypot(a.x - b.x, a.z - b.z); }
function reach(it) { return it.near || 2.2; }
function nearest() {
  let best = null, bd = 1e9; const lp = lion.root.position;
  for (const it of items) {
    if (it.locked || it.aux || it.noPrompt) continue;
    const d = distXZ(lp, it.stand);
    if (d < reach(it) && d < bd) { bd = d; best = it; }
  }
  return best;
}
function tapItem(it) {
  if (distXZ(lion.root.position, it.stand) < reach(it) + 0.4) { openItem(it); return; }
  setGoal(it); toast(SAY.walk + ' “' + shortTitle(it.data.title) + '”');
}
const shortTitle = (t) => (t.length > 44 ? t.slice(0, 42).replace(/\s+\S*$/, '') + '…' : t);

// ---------- remembered finds (per library, on this device only) ----------
const STORE = 'ark3d-found-' + ROOM;
function saveFound() { try { localStorage.setItem(STORE, JSON.stringify(countable.filter((i) => i.found).map((i) => i.data.id))); } catch (e) {} }
function goPortal(it) {
  autoGoal = null; opening = it; it.animDir = 1; saveFound();
  sparks.emit(it.group.position.clone().setY(1.8), 80, it.color || 0xffe0a0, 3, 3);
  document.body.classList.add('leaving'); toast('Stepping through to ' + it.data.title + '…', 1500);
  setTimeout(() => { location.href = it.portal; }, 900);
}
// ---------- open / read ----------
function openItem(it) {
  if (opening || readerOpen) return;
  if (it.aux) { autoGoal = null; it.onTap && it.onTap(); lastInput = performance.now(); return; }
  if (it.isPortal) { goPortal(it); return; }
  autoGoal = null; opening = it; it.animDir = 1;
  // face the item
  const d = new THREE.Vector3().subVectors(it.group.position, lion.root.position); heading = Math.atan2(d.x, d.z);
  const wp = it.group.position.clone(); wp.y = 1.6;
  sparks.emit(wp, 40, it.color || 0xffd080, 2.2, 2.2);
  hideHint();
  setTimeout(() => showReader(it), 950);
}
function showReader(it) {
  opening = null; readerOpen = true;
  const d = it.data; const media = $('r-media'); media.innerHTML = '';
  const kindLabel = KIND[d.kind] || '';
  const coverCanvas = () => T.readerCover(d, kindLabel);
  const addImg = (src, withPlay) => {
    const wrapEl = document.createElement('div'); wrapEl.className = withPlay ? 'playwrap' : '';
    let el;
    if (src) { el = new Image(); el.alt = d.title; el.src = src; el.onerror = () => { el.replaceWith(coverCanvas()); }; }
    else el = coverCanvas();
    wrapEl.appendChild(el);
    if (withPlay) {
      const b = document.createElement('button'); b.className = 'play'; b.setAttribute('aria-label', 'Play film: ' + d.title); b.textContent = '▶'; wrapEl.appendChild(b);
      wrapEl.addEventListener('click', () => {
        const v = document.createElement('video'); v.controls = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto';
        if (src) v.poster = src; v.src = d.video; wrapEl.replaceWith(v); v.play().catch(() => {});
      }, { once: true });
    }
    media.appendChild(wrapEl);
  };
  addImg(d.image || d.poster || null, !!d.video);
  $('r-kind').textContent = kindLabel.toUpperCase();
  $('r-title').textContent = d.title;
  $('r-by').textContent = d.by;
  $('r-blurb').textContent = d.blurb;
  const ev = $('r-evidence'); if (ev) { ev.textContent = d.evidence ? 'Evidence: ' + d.evidence : ''; ev.hidden = !d.evidence; }
  const fact = $('r-fact'); fact.innerHTML = ''; fact.hidden = !d.fact;
  if (d.fact) { const h = secrets.find((x) => x.it === it); const l = document.createElement('span'); l.className = 'lbl'; l.textContent = '✦ SECRET' + (h && h.order ? ' ' + h.order + ' OF ' + secrets.length : '') + ' · ' + (d.secretName || '').toUpperCase(); fact.appendChild(l); const p = document.createElement('p'); p.textContent = d.fact; fact.appendChild(p); }
  const full = $('r-full'); full.innerHTML = ''; full.hidden = true;
  const ex = $('r-excerpt'); ex.innerHTML = ''; ex.hidden = false;
  if (d.excerpt && d.excerpt.length) {
    const l = document.createElement('span'); l.className = 'lbl'; l.textContent = 'OPENING LINES'; ex.appendChild(l);
    d.excerpt.forEach((p) => { const e = document.createElement('p'); e.textContent = p; ex.appendChild(e); });
  }
  const o = $('r-open'); o.href = d.url; o.textContent = d.kind === 'video' ? 'See it on the Library page ↗' : d.kind === 'film' ? 'See it on the site ↗' : d.full ? 'Open on the live site ↗' : 'Read the full piece ↗';
  $('reader').hidden = false; $('prompt').hidden = true; $('r-card').scrollTop = 0;
  if (d.full) loadFullText(d, full, ex, media);
  $('r-close').focus({ preventScroll: true });
  if (!it.found) {
    it.found = true; foundCount++; $('found').textContent = String(foundCount); markLabelFound(it.label);
    const c = $('counter'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
    lion.hop = 0.001; lionHappy();
    saveFound();
    if (!openedAny) { openedAny = true; setTimeout(() => say(SAY.first), 600); }
    else if (foundCount === countable.length) setTimeout(() => say(SAY.all, 5000), 600);
    else if (foundCount === 3 && hidden && !hidden.revealed) setTimeout(() => say(SAY.third, 5000), 600);
  }
  window.__arkLastOpened = d.id;
}
// the full text of each essay, saved from the live site at build time (text/<id>.json), shown after the media and summary
const fullCache = {};
function loadFullText(d, full, ex, media) {
  const done = (j) => {
    if (!j || !readerOpen || window.__arkLastOpened !== d.id) return;
    const head = document.createElement('div'); head.className = 'lbl'; head.textContent = 'FULL TEXT · ' + (j.words ? j.words.toLocaleString() + ' WORDS · ' : '') + 'SAVED FROM THE LIVE SITE'; full.appendChild(head);
    let ul = null, skipped = false; const norm = (x) => (x || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
    for (const b of j.blocks) {
      if (!skipped && (b.t === 'h' || b.t === 'p') && norm(b.x) === norm(d.title)) { skipped = true; continue; }
      if (b.t !== 'li') ul = null;
      let el;
      if (b.t === 'img') {
        const noArt = !d.image && !d.poster && !media.dataset.art;
        el = document.createElement('figure'); const im = new Image(); im.loading = 'lazy'; im.alt = b.alt || ''; im.src = b.src; im.onerror = () => el.remove(); el.appendChild(im);
        if (noArt) { media.dataset.art = '1'; const top = new Image(); top.alt = d.title; top.src = b.src; top.onload = () => { media.innerHTML = ''; media.appendChild(top); }; continue; }
      } else if (b.t === 'li') { if (!ul) { ul = document.createElement('ul'); full.appendChild(ul); } el = document.createElement('li'); el.textContent = b.x; ul.appendChild(el); continue; }
      else if (b.t === 'p' && b.x.length > 900) { // a very long source paragraph: break it at sentence ends for easier reading (words unchanged)
        const sents = b.x.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) || [b.x]; let buf = '';
        for (const st of sents) { buf += st; if (buf.length > 380) { const q = document.createElement('p'); q.textContent = buf.trim(); full.appendChild(q); buf = ''; } }
        if (buf.trim()) { const q = document.createElement('p'); q.textContent = buf.trim(); full.appendChild(q); }
        continue;
      } else { el = document.createElement({ h: 'h3', h3: 'h4', q: 'blockquote', cap: 'figcaption' }[b.t] || 'p'); el.textContent = b.x; }
      full.appendChild(el);
    }
    const end = document.createElement('a'); end.className = 'r-end'; end.href = d.url; end.target = '_blank'; end.rel = 'noopener'; end.textContent = 'Read it on the live site ↗'; full.appendChild(end);
    full.hidden = false; ex.hidden = true; window.__arkFullShown = d.id;
  };
  if (fullCache[d.id]) { done(fullCache[d.id]); return; }
  fetch('text/' + d.id + '.json').then((r) => (r.ok ? r.json() : null)).then((j) => { if (j) fullCache[d.id] = j; done(j); }).catch(() => {});
}
function closeReader() {
  if (!readerOpen) return;
  const media = $('r-media'); media.querySelectorAll('video').forEach((v) => { v.pause(); v.removeAttribute('src'); v.load(); });
  media.innerHTML = ''; delete media.dataset.art;
  $('reader').hidden = true; readerOpen = false;
  for (const it of items) if (it.animDir > 0) it.animDir = -1;
}
$('r-close').addEventListener('click', closeReader);
$('r-back').addEventListener('click', closeReader);
$('reader').addEventListener('click', (e) => { if (e.target.id === 'reader') closeReader(); });

let happyT = 0;
function lionHappy() { happyT = 0.9; sparks.emit(lion.root.position.clone().setY(1.6), 50, 0xffd070, 2.5, 2.5); }
const lionLines = SAY.lines;
let lineI = 0;
function lionTapped() { lion.roar = 1.2; sparks.emit(lion.root.position.clone().setY(1.7), 40, 0xffb040, 2.4, 2); say(lionLines[lineI++ % lionLines.length]); }

// ---------- movement ----------
const tmp = new THREE.Vector3();
function collide(p) {
  const len = Math.hypot(p.x, p.z), maxR = room.maxR || 11.3; if (len > maxR) { p.x *= maxR / len; p.z *= maxR / len; }
  for (const o of obstacles) {
    if (!o.r) continue; const dx = p.x - o.x, dz = p.z - o.z, d = Math.hypot(dx, dz), m = o.r + 0.45;
    if (d < m && d > 1e-4) { p.x = o.x + dx / d * m; p.z = o.z + dz / d * m; }
  }
}
let stuckT = 0, lastD = 0, path = null, replanned = false, pathsPlanned = 0;
function setGoal(it) { autoGoal = it; path = null; replanned = false; stuckT = 0; pathsPlanned++; }
function updateMove(dt) {
  let ix = 0, iy = 0;
  if (keys.has('w') || keys.has('arrowup')) iy += 1;
  if (keys.has('s') || keys.has('arrowdown')) iy -= 1;
  if (keys.has('a') || keys.has('arrowleft')) ix -= 1;
  if (keys.has('d') || keys.has('arrowright')) ix += 1;
  if (joy.active) { ix += joy.x; iy += joy.y; }
  const run = keys.has('shift') ? 1.7 : 1;
  let vx = 0, vz = 0;
  const f = new THREE.Vector3(Math.sin(camYaw), 0, Math.cos(camYaw)), r = new THREE.Vector3(-Math.cos(camYaw), 0, Math.sin(camYaw));
  if (readerOpen || opening) { ix = iy = 0; }
  const mag = Math.min(1, Math.hypot(ix, iy));
  if (mag > 0.08) {
    tmp.set(0, 0, 0).addScaledVector(f, iy).addScaledVector(r, ix).normalize();
    vx = tmp.x * 3.1 * mag * run; vz = tmp.z * 3.1 * mag * run; autoGoal = null;
  } else if (autoGoal && !readerOpen && !opening) {
    const g = autoGoal.stand, lp = lion.root.position, d = distXZ(lp, g);
    const arrive = autoGoal.point ? d < 0.4 : (d < 0.35 || d < reach(autoGoal) * 0.5);
    if (arrive) { const it = autoGoal; autoGoal = null; path = null; if (!it.point) openItem(it); }
    else {
      // follow the A* path (string-pulled into straight legs) around the table, puzzles and shelves
      if (!path) path = pather.find(lp.x, lp.z, g.x, g.z) || [{ x: g.x, z: g.z }];
      while (path.length > 1 && Math.hypot(path[0].x - lp.x, path[0].z - lp.z) < 0.35) path.shift();
      const w = path[0], td = Math.hypot(w.x - lp.x, w.z - lp.z) || 1;
      vx = (w.x - lp.x) / td * 3.2; vz = (w.z - lp.z) / td * 3.2;
      if (Math.abs(lastD - d) < dt * 0.6) stuckT += dt; else stuckT = Math.max(0, stuckT - dt * 0.5); lastD = d;
      if (stuckT > 0.8 && !replanned) { path = null; replanned = true; stuckT = 0; }
      if (stuckT > 1.6) { const it = autoGoal; autoGoal = null; path = null; stuckT = 0; if (!it.point && d < reach(it) + 1.8) openItem(it); else toast('Walk a little closer, then tap again'); }
    }
  }
  const sp = Math.hypot(vx, vz);
  if (sp > 0.5 && camLook > 0) camLook = Math.max(0, camLook - dt * 0.9);
  lion.speed += (sp - lion.speed) * Math.min(1, dt * 8);
  if (sp > 0.05) {
    const p = lion.root.position; const before = p.clone();
    p.x += vx * dt; p.z += vz * dt; collide(p);
    moved += distXZ(before, p);
    const target = Math.atan2(vx, vz);
    let dh = target - heading; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); heading += dh * Math.min(1, dt * 10);
    // camera slowly swings behind while walking
    if (mag > 0.08 && iy > -0.2) { let dc = heading - camYaw; dc = Math.atan2(Math.sin(dc), Math.cos(dc)); camYaw += dc * Math.min(1, dt * 0.9) * Math.min(1, Math.abs(ix) + 0.3); }
    else if (autoGoal) { let dc = heading - camYaw; dc = Math.atan2(Math.sin(dc), Math.cos(dc)); camYaw += dc * Math.min(1, dt * 1.5); }
    if (Math.random() < dt * 10) sparks.emit(p.clone().setY(0.1), 1, 0xffc070, 0.4, 0.5);
    lastInput = performance.now();
  }
  lion.root.rotation.y = heading;
}

function updateCamera(dt) {
  const lp = lion.root.position;
  camTarget.lerp(tmp.set(lp.x, 1.35, lp.z), Math.min(1, dt * 6));
  const cd = camDist * Math.cos(camPitch);
  const want = new THREE.Vector3(camTarget.x - Math.sin(camYaw) * cd, camTarget.y + Math.sin(camPitch) * camDist + 0.25, camTarget.z - Math.cos(camYaw) * cd);
  const len = Math.hypot(want.x, want.z); const CR = room.camR || 12.3;
  if (len > CR) { // shorten the camera boom toward the guardian instead of sliding sideways along the wall
    const ax = camTarget.x, az = camTarget.z, dx = want.x - ax, dz = want.z - az;
    const A = dx * dx + dz * dz, B = 2 * (ax * dx + az * dz), C = ax * ax + az * az - CR * CR;
    const disc = B * B - 4 * A * C; const k = disc > 0 && A > 1e-6 ? Math.max(0.15, (-B + Math.sqrt(disc)) / (2 * A)) : CR / len;
    want.x = ax + dx * k; want.z = az + dz * k;
  }
  // gentle over-the-shoulder offset so HALO doesn't hide what's ahead
  const ox = -Math.cos(camYaw) * 0.75, oz = Math.sin(camYaw) * 0.75;
  want.x += ox; want.z += oz;
  { const l2 = Math.hypot(want.x, want.z); if (l2 > CR - 0.1) { want.x *= (CR - 0.1) / l2; want.z *= (CR - 0.1) / l2; } }
  if (room.camMaxY) want.y = Math.min(want.y, room.camMaxY(want.x, want.z)); // e.g. stay under the canopy of Asherah's tree
  camera.position.lerp(want, Math.min(1, dt * 5));
  camera.lookAt(camTarget.x + ox, camTarget.y + 0.35 + camLook * camLook * 11, camTarget.z + oz);
}

// ---------- secrets: reveal, count, hint ----------
const SSTORE = 'ark3d-secrets-' + ROOM;
let secretsFound = 0, hintI = 0, lastHintAt = 0;
function updateSecretsPill() { $('sfound').textContent = String(secretsFound); }
function saveSecrets() { try { localStorage.setItem(SSTORE, JSON.stringify(secrets.filter((h) => h.revealed).map((h) => h.it.data.id))); } catch (e) {} }
function wake(h) { h.revealed = true; h.it.locked = false; h.it.label.sprite.visible = true; h.hint.sprite.visible = false; secretsFound++; h.order = secretsFound; updateSecretsPill(); }
function revealSecret(h) {
  if (h.revealed) return;
  wake(h); saveSecrets();
  sparks.emit(new THREE.Vector3(h.pos.x, 0.5, h.pos.z), 90, 0xffd070, 3, 4); lion.roar = 1.2;
  const c = $('secrets'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
  arpeggio([432, 540, 648, 864], 0.14, 0.09);
  if (h.trigger === 'walk' || !h.trigger) { // step the guardian aside so the rising volume is in view
    const p = lion.root.position; const dx = p.x - h.pos.x, dz = p.z - h.pos.z, d = Math.hypot(dx, dz) || 1; p.x = h.pos.x + dx / d * 1.35; p.z = h.pos.z + dz / d * 1.35;
    h.it.stand = new THREE.Vector3(p.x, 0, p.z);
  }
  { // turn the view so the rising volume is in front of the guardian
    const d = new THREE.Vector3().subVectors(h.pos, lion.root.position); camYaw = Math.atan2(d.x, d.z); heading = camYaw; camLook = 0; camPitch = 0.3;
  }
  say(SAY.reveal + (secrets.length > 1 ? ' ' + secretsFound + ' of ' + secrets.length + '.' : ''), 4200);
  if (h.fact) showFact(h);
}
function showFact(h) {
  const f = $('fact'); $('f-title').textContent = '✦ Secret ' + h.order + ' of ' + secrets.length + ' · ' + (h.name || 'A hidden title');
  $('f-text').textContent = h.fact; $('f-reveal').textContent = 'It reveals: “' + shortTitle(h.it.data.title) + '”. Tap the rising volume to read it.';
  f.hidden = false; clearTimeout(showFact._t); showFact._t = setTimeout(() => (f.hidden = true), 14000);
}
$('fact').addEventListener('click', () => ($('fact').hidden = true));
function nextHint() {
  const left = secrets.filter((h) => !h.revealed); if (!left.length) return 'Every secret in this room is found. Well read!';
  const h = left[hintI++ % left.length];
  return typeof h.hintText === 'function' ? h.hintText(foundCount) : h.hintText || 'Something here is waiting to be found.';
}
$('secrets').addEventListener('click', () => { if (!started) return; say(nextHint(), 7000); lastHintAt = performance.now(); lastInput = performance.now(); });
// optional ambient sound (off by default)
$('sound').addEventListener('click', () => { const on = setSound(!soundIsOn()); $('sound').textContent = on ? '♪ Sound on' : '♪ Sound off'; $('sound').setAttribute('aria-pressed', on ? 'true' : 'false'); });
Object.assign(api, { reveal: revealSecret, say: (m, ms) => say(m, ms || 4800), toast: (m, ms) => toast(m, ms), tone: (f, d, v) => tone(f, d, v) });

// ---------- frame loop ----------
let lastNow = performance.now(), elapsed = 0;
const roomState = { lion, camera, get found() { return foundCount; }, onDance() { say(SAY.third, 5000); } };
let fpsFrames = 0, fpsT = 0, fps = 60, lowT = 0, quality = 0;
const fpsLog = [];
const sp = new THREE.Vector3();
function frame() {
  const now = performance.now(), dt = Math.min(0.05, (now - lastNow) / 1000); lastNow = now; elapsed += dt; const t = elapsed;
  fpsFrames++; fpsT += dt;
  if (fpsT >= 1) {
    fps = fpsFrames / fpsT; fpsLog.push(Math.round(fps)); if (fpsLog.length > 60) fpsLog.shift(); fpsFrames = 0; fpsT = 0;
    // adaptive quality: lower resolution first, then drop bloom
    if (started && fps < 30) lowT++; else lowT = 0;
    if (lowT >= 3 && quality < 2 && !HQ) {
      quality++; lowT = 0;
      if (quality === 1) { pixelRatio = Math.max(0.75, pixelRatio * 0.7); renderer.setPixelRatio(pixelRatio); composer.setPixelRatio(pixelRatio); resize(); }
      else { useBloom = false; }
    }
  }
  if (started) updateMove(dt);
  updateCamera(dt);
  lion.hop = happyT > 0 ? Math.abs(Math.sin((0.9 - happyT) / 0.9 * Math.PI * 2)) * 0.28 : 0; happyT = Math.max(0, happyT - dt);
  // look toward the nearest item
  let look = 0; const n = started ? nearest() : null;
  if (n) { const d = new THREE.Vector3().subVectors(n.group.position, lion.root.position); let a = Math.atan2(d.x, d.z) - heading; look = Math.atan2(Math.sin(a), Math.cos(a)); }
  lion.update(dt, t, n ? look : null);
  // items
  for (const it of items) {
    if (it.animDir) {
      it.anim = THREE.MathUtils.clamp(it.anim + it.animDir * dt / 0.9, 0, 1);
      if (it.anim === 0 && it.animDir < 0) it.animDir = 0;
      it.animate && it.animate(THREE.MathUtils.smoothstep(it.anim, 0, 1));
    }
    it._dt = dt; it.idle && it.idle(t);
  }
  // secrets that wake when the guardian steps onto them
  if (started) for (const h of secrets) {
    if (h.revealed || (h.trigger && h.trigger !== 'walk')) continue;
    if (distXZ(lion.root.position, h.pos) < 1.3) {
      if (!h.ready || h.ready(foundCount)) revealSecret(h);
      else if (h.notReady && performance.now() - (h._nr || 0) > 9000) { h._nr = performance.now(); say(h.notReady, 4200); }
    }
  }
  // labels: fade with distance from HALO
  const lp = lion.root.position;
  for (const L of labels) {
    const d = distXZ(lp, L.sprite.position);
    const o = L.always ? 1 : THREE.MathUtils.clamp(1.25 - (d - 4) / 9, 0.72, 1);
    const dc = camera.position.distanceTo(L.sprite.position);
    L.sprite.material.opacity = o * THREE.MathUtils.clamp((dc - 1.6) / 1.6, 0, 1);
    // grow a little with distance so far labels stay legible (crisp 2x canvases carry the detail)
    const k = THREE.MathUtils.clamp(dc / 8, 1, L.big ? 1.35 : 1.6); L.sprite.scale.set(L.width * k, L.width * k * L.aspect, 1);
    if (L.table) L.sprite.position.y = (L.baseY || (L.baseY = L.sprite.position.y)) + Math.sin(t) * 0.03;
  }
  // orb & world
  room.tick(t, dt, roomState);
  motes.uniforms.uTime.value = t;
  sparks.update(dt);
  // prompt
  if (started && !readerOpen && !opening) {
    const pEl = $('prompt');
    if (n) { const lbl = (isTouch ? 'Tap to open: ' : 'Open (E): ') + shortTitle(n.data.title); if (pEl.textContent !== lbl) pEl.textContent = lbl; pEl.hidden = false; }
    else pEl.hidden = true;
  }
  // speech bubble follows HALO's head
  if (speechT > 0) {
    speechT -= dt; const s = $('speech');
    if (speechT <= 0) s.hidden = true;
    else { sp.copy(lion.root.position); sp.y += 2.35; sp.project(camera); const hw = (s.offsetWidth || 200) / 2 + 8; s.style.left = THREE.MathUtils.clamp((sp.x + 1) / 2 * innerWidth, hw, innerWidth - hw) + 'px'; s.style.top = ((1 - sp.y) / 2 * innerHeight) + 'px'; }
  }
  // hint: show only when needed
  if (started) {
    hintTimer += dt;
    const h = $('hint');
    if (!h.hidden && ((moved > 2.5 && hintTimer > 5) || openedAny)) hideHint();
    if (h.hidden && foundCount === 0 && performance.now() - lastInput > 25000) { showHint(); lastInput = performance.now(); say(SAY.idle); }
    else if (foundCount > 0 && secretsFound < secrets.length && performance.now() - lastInput > 35000 && performance.now() - lastHintAt > 60000) { lastHintAt = performance.now(); lastInput = performance.now(); say(nextHint(), 7000); }
  }
  if (useBloom) composer.render(); else renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

function resize() {
  camera.aspect = innerWidth / innerHeight; camera.fov = innerWidth < innerHeight ? 64 : 55; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
  bloom.resolution.set(innerWidth / 2, innerHeight / 2);
  camDist = innerWidth < innerHeight ? 7 : 6.2;
}
addEventListener('resize', resize); resize();

// initial camera: high in the dome, then flies down on Enter
camera.position.set(0, 12, 14); camTarget.set(0, 3, 0); camera.lookAt(0, 3, 0);
let intro = true;
const introUpdate = updateCamera;
// warm-up render so shaders compile before Enter
composer.render();
progress(1);
window.__arkReady = true; clearTimeout(window.__arkTimer);
const enterBtn = $('enter'); enterBtn.disabled = false; enterBtn.textContent = ROOM === 'asherah' ? 'Enter Asherah’s Library' : 'Enter the Library';
enterBtn.addEventListener('click', start);
function start() {
  if (started) return; started = true; intro = false;
  $('intro').classList.add('gone'); setTimeout(() => ($('intro').hidden = true), 1200);
  $('counter').hidden = false; $('secrets').hidden = !secrets.length; $('sound').hidden = false; if (isTouch) $('joy').hidden = false;
  showHint(); lastInput = performance.now();
  setTimeout(() => say(SAY.welcome, 5000), 1200);
}
// remembered finds from an earlier visit on this device
try {
  const ids = JSON.parse(localStorage.getItem(STORE) || '[]');
  for (const it of countable) {
    if (!ids.includes(it.data.id)) continue;
    it.found = true; foundCount++; markLabelFound(it.label);
  }
  $('found').textContent = String(foundCount); if (foundCount) openedAny = true;
  const sids = JSON.parse(localStorage.getItem(SSTORE) || '[]');
  for (const h of secrets) if (!h.revealed && (sids.includes(h.it.data.id) || h.it.found)) { wake(h); h.onRestore && h.onRestore(); }
} catch (e) {}
// arriving through a portal: step straight in
if (new URLSearchParams(location.search).get('via') === 'portal') setTimeout(start, 150);
requestAnimationFrame(frame);

// test / debug hooks (read-only helpers used by the headless checks)
window.__ark = {
  get fps() { return fps; }, fpsLog, get quality() { return quality; }, get found() { return foundCount; }, total: countable.length, room: ROOM,
  get readerOpen() { return readerOpen; }, get lion() { const p = lion.root.position; return { x: p.x, z: p.z, heading, sit: lion.sit }; },
  get revealed() { return hidden ? hidden.revealed : false; },
  items: () => items.map((it) => ({ id: it.data.id, kind: it.data.kind, title: it.data.title, found: it.found, locked: !!it.locked, portal: !!it.isPortal })),
  screenPos(id) { const it = items.find((i) => i.data.id === id); if (!it) return null; const v = it.hit.getWorldPosition(new THREE.Vector3()); v.project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight, onScreen: Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1 }; },
  faceItem(id) { const it = items.find((i) => i.data.id === id); const d = new THREE.Vector3().subVectors(it.group.position, lion.root.position); camYaw = Math.atan2(d.x, d.z); },
  lionScreen() { const v = lion.root.position.clone().setY(1); v.project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight }; },
  info: () => renderer.info.render,
  sceneInfo() { renderer.setRenderTarget(null); renderer.info.autoReset = false; renderer.info.reset(); renderer.render(scene, camera); const r = renderer.info.render; const o = { calls: r.calls, triangles: r.triangles, points: r.points }; renderer.info.autoReset = true; return o; },
  secretReady() { const h = secrets[0]; return h && h.ready ? !!h.ready(foundCount) : null; },
  pickAt(x, y) { const h = pick(x, y); return h === 'lion' ? 'lion' : h ? h.data.id : null; },
  secrets: () => secrets.map((h) => ({ key: h.key || 'secret', id: h.it.data.id, revealed: h.revealed, x: h.pos.x, z: h.pos.z, order: h.order || 0 })),
  get secretsFound() { return secretsFound; },
  facePoint(x, z) { const p = lion.root.position; camYaw = Math.atan2(x - p.x, z - p.z); },
  walkTo(x, z) { setGoal({ point: true, stand: new THREE.Vector3(x, 0, z), data: { title: 'there' } }); },
  get path() { return path ? path.map((w) => ({ x: +w.x.toFixed(2), z: +w.z.toFixed(2) })) : null; },
  get walking() { return !!autoGoal; },
  look(v) { camLook = v; },
  get sound() { return soundIsOn(); },
  maxwell: () => (room.maxwell ? room.maxwell() : null),
};
