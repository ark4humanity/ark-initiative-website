import * as THREE from 'three';
import * as T from './textures.js';
import { createKit } from './kit.js';
import { drawGlyph } from './asherah.js';
import * as G from './geometry2d.js';

// The central Library of the Ark, rebuilt on the shared kit (v0.3).
// A bright white-gold rotunda full of sunlight: sacred geometry in the floor, walls and dome,
// ancient letters and real science and maths drifting in the light, and six smart secrets that each teach a real fact.
const R = 13, WALL_H = 7.2;
const rad = THREE.MathUtils.degToRad;
const P = (r, deg, y = 0) => new THREE.Vector3(r * Math.sin(rad(deg)), y, -r * Math.cos(rad(deg)));
const GOLD = '#c9962a', GOLD_HI = '#ffe6a0';
// world (x, z) -> floor canvas pixel (see CircleGeometry UVs)
const FS = 2048, fx = (x) => FS * (x / R + 1) / 2, fz = (z) => FS * (z / R + 1) / 2, fm = FS / (2 * R);

// ---------- secrets: positions, facts and gentle hints ----------
const EYE = P(5.6, -75);             // the eye of the golden spiral in the floor
const SECRETS = [
  { key: 'paw', id: 'e14', name: 'HALO’s paw print', pos: P(6.4, 100), trigger: 'walk',
    hint: 'I left a paw print on the east side of the floor, near the glowing books. Walk me onto it.',
    fact: 'A lion’s roar can be heard up to about 8 km (5 miles) away. Lions roar to tell their pride, and rivals, where they are.' },
  { key: 'spiral', id: 's1', name: 'The eye of the golden spiral', pos: EYE, trigger: 'walk',
    hint: 'A golden spiral is inlaid in the floor on the west side, by the clay jars. Follow it inward to its eye.',
    fact: 'The golden ratio φ = (1 + √5) / 2 ≈ 1.618. Divide a Fibonacci number by the one before it (8/5, 13/8, 21/13…) and the answer closes in on φ. A golden spiral grows by a factor of φ every quarter turn.' },
  { key: 'fib', id: 's2', name: 'The Fibonacci tablet', pos: P(5.5, -142), trigger: 'manual',
    hint: 'The stone tablet by the south-west scrolls asks a question: 1, 1, 2, 3, 5… what comes next? Touch the right orb.',
    fact: 'Each Fibonacci number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21… Sunflower heads often show 34 and 55 spirals, neighbouring Fibonacci numbers, because each new seed turns by the golden angle, about 137.5°.' },
  { key: 'maxwell', id: 's3', name: 'Maxwell’s four columns', pos: P(5.2, 52), trigger: 'manual',
    hint: 'Four columns carry Maxwell’s four equations: two beside the Film Wall, two behind the jars and the glowing books. Walk me past each one.',
    fact: 'James Clerk Maxwell’s four equations (1860s) unite electricity and magnetism. They predict waves travelling at c = 1/√(μ₀ε₀) ≈ 299,792 km/s, the measured speed of light, which showed that light itself is an electromagnetic wave.' },
  { key: 'vega', id: 's4', name: 'Vega, the once and future pole star', pos: P(4.2, -35), trigger: 'manual',
    hint: 'Look up: drag upward to raise your eyes to the dome. One blue-white star shines brighter than the rest. Tap it.',
    fact: 'Earth’s axis slowly wobbles in a cycle of about 26,000 years (precession). Around 12,000 BCE the bright star Vega was near the north celestial pole, and it will be again around 13,700 CE. Today the pole star is Polaris.' },
  { key: 'chimes', id: 's5', name: 'The Pythagorean bowls', pos: P(5.5, 142), trigger: 'manual',
    hint: 'The singing bowls by the south-east scrolls: which string length sings one octave above the whole string?',
    fact: 'Pythagoras is credited with finding that halving a string raises its pitch one octave (2 : 1), two-thirds of it sounds a perfect fifth (3 : 2) and three-quarters a fourth (4 : 3). Simple whole-number ratios sound harmonious.' },
];

// ---------- textures ----------
function goldPass(ctxs, fn) { for (const [x, glow] of ctxs) { x.save(); fn(x, glow); x.restore(); } }
function floorTex() {
  const [c, x] = T.canvas(FS, FS), [e, y] = T.canvas(FS, FS);
  // white marble with warm veins
  const g = x.createRadialGradient(FS / 2, FS / 2, 50, FS / 2, FS / 2, FS / 2); g.addColorStop(0, '#fffaf0'); g.addColorStop(1, '#f1e4c8'); x.fillStyle = g; x.fillRect(0, 0, FS, FS);
  let s = 11; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  x.strokeStyle = 'rgba(190,160,110,.18)'; x.lineWidth = 2;
  for (let i = 0; i < 70; i++) { let px = r() * FS, py = r() * FS; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 12; k++) { px += (r() - 0.5) * 120; py += (r() - 0.3) * 90; x.lineTo(px, py); } x.stroke(); }
  // marble rings of tiles
  x.strokeStyle = 'rgba(170,130,70,.35)'; x.lineWidth = 3;
  for (let rr = 3.6; rr < R; rr += 1.9) { G.circle(x, FS / 2, FS / 2, rr * fm); for (let k = 0; k < 48; k++) { const a = k / 48 * Math.PI * 2; x.beginPath(); x.moveTo(FS / 2 + Math.cos(a) * rr * fm, FS / 2 + Math.sin(a) * rr * fm); x.lineTo(FS / 2 + Math.cos(a) * (rr + 1.9) * fm, FS / 2 + Math.sin(a) * (rr + 1.9) * fm); x.stroke(); } }
  y.fillStyle = '#000'; y.fillRect(0, 0, FS, FS);
  goldPass([[x, 0], [y, 1]], (k, glow) => {
    k.strokeStyle = glow ? '#b8862a' : GOLD; k.fillStyle = k.strokeStyle; k.lineCap = 'round';
    k.translate(FS / 2, FS / 2);
    // central Flower of Life around the reading table
    k.lineWidth = 6; G.flowerOfLife(k, 0, 0, 0.95 * fm, 2);
    k.lineWidth = 9; G.circle(k, 0, 0, 3.3 * fm);
    // a twelve-pointed star rosette and a 24-ray compass
    k.lineWidth = 5; G.star(k, 0, 0, 5.4 * fm, 12, 5); G.circle(k, 0, 0, 5.5 * fm); G.circle(k, 0, 0, 5.7 * fm);
    k.lineWidth = 3; for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; k.beginPath(); k.moveTo(Math.cos(a) * 5.7 * fm, Math.sin(a) * 5.7 * fm); k.lineTo(Math.cos(a) * (i % 2 ? 7.2 : 8.2) * fm, Math.sin(a) * (i % 2 ? 7.2 : 8.2) * fm); k.stroke(); }
    // an outer ring of seed-of-life medallions and a phyllotaxis band
    k.lineWidth = 4; G.circle(k, 0, 0, 9.0 * fm); G.circle(k, 0, 0, 9.25 * fm);
    for (let i = 0; i < 12; i++) { const a = (i + 0.5) / 12 * Math.PI * 2; G.seedOfLife(k, Math.cos(a) * 11.6 * fm, Math.sin(a) * 11.6 * fm, 0.34 * fm); }
    k.globalAlpha = 0.7; G.phyllotaxis(k, 0, 0, 3.2 * fm, 420, 6); k.globalAlpha = 1;
    k.translate(-FS / 2, -FS / 2);
    // the golden spiral, converging on its eye
    k.lineWidth = 10; G.goldenSpiral(k, fx(EYE.x), fz(EYE.z), 2.6 * fm, 3.25, 0.9);
    k.lineWidth = 4; G.circle(k, fx(EYE.x), fz(EYE.z), 0.35 * fm);
    k.font = `italic ${Math.round(0.42 * fm)}px Georgia,serif`; k.textAlign = 'center';
    G.formula(k, 'φ ≈ 1.618', fx(EYE.x), fz(EYE.z) + 1.1 * fm, Math.round(0.36 * fm));
  });
  const t = T.tex(c), te = T.tex(e); t.anisotropy = te.anisotropy = 8; return [t, te];
}
function wallTex(small) {
  const W = small ? 2048 : 3072, H = W / 4, [c, x] = T.canvas(W, H), [e, y] = T.canvas(W, H);
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#fff8ea'); g.addColorStop(0.5, '#f7ebd0'); g.addColorStop(1, '#ead8b0');
  x.fillStyle = g; x.fillRect(0, 0, W, H); y.fillStyle = '#000'; y.fillRect(0, 0, W, H);
  // limestone blocks
  x.strokeStyle = 'rgba(160,125,70,.22)'; x.lineWidth = 2;
  const bh = H / 9; for (let row = 0; row < 9; row++) { x.beginPath(); x.moveTo(0, row * bh); x.lineTo(W, row * bh); x.stroke(); for (let k = 0; k < 16; k++) { const bx = (k + (row % 2) * 0.5) * W / 16; x.beginPath(); x.moveTo(bx, row * bh); x.lineTo(bx, row * bh + bh); x.stroke(); } }
  const fr = G.FORMULAS;
  goldPass([[x, 0], [y, 1]], (k, glow) => {
    k.strokeStyle = glow ? '#e0b050' : GOLD; k.fillStyle = k.strokeStyle; k.lineCap = 'round'; k.lineJoin = 'round';
    // formula frieze
    k.lineWidth = H * 0.004; for (const yy of [H * 0.025, H * 0.125]) { k.beginPath(); k.moveTo(0, yy); k.lineTo(W, yy); k.stroke(); }
    if (!glow) { k.fillStyle = 'rgba(201,150,42,.12)'; k.fillRect(0, H * 0.025, W, H * 0.1); k.fillStyle = '#9a6e14'; }
    else k.fillStyle = '#f0c060';
    let px = W * 0.01, i = 0; const fs = Math.round(H * 0.06);
    while (px < W * 0.97) { const f = fr[i++ % fr.length]; k.font = `italic ${fs}px Georgia,serif`; const wv = G.formula(k, f, px, H * 0.098, fs, 'left'); px += wv + W * 0.03; if (px < W * 0.97) { k.beginPath(); k.arc(px - W * 0.015, H * 0.08, H * 0.006, 0, 7); k.fill(); } }
    // medallions of sacred geometry
    k.lineWidth = H * 0.0045; const my = H * 0.25, mr = H * 0.075, n = 8;
    for (let m = 0; m < n; m++) {
      const cx = (m + 0.5) * W / n;
      if (!glow) { const rg = x.createRadialGradient(cx, my, 2, cx, my, mr * 1.6); rg.addColorStop(0, 'rgba(255,236,180,.8)'); rg.addColorStop(1, 'rgba(255,236,180,0)'); k.fillStyle = rg; k.fillRect(cx - mr * 1.7, my - mr * 1.7, mr * 3.4, mr * 3.4); }
      [() => G.flowerOfLife(k, cx, my, mr / 3, 2), () => G.metatron(k, cx, my, mr / 2.1), () => G.triangles(k, cx, my, mr * 0.9), () => G.seedOfLife(k, cx, my, mr / 2),
       () => { G.star(k, cx, my, mr, 12, 5); G.circle(k, cx, my, mr); }, () => { G.vesica(k, cx, my, mr * 0.9); G.circle(k, cx, my, mr * 1.05); }, () => { G.goldenSpiral(k, cx, my, mr, 3, 0); G.circle(k, cx, my, mr * 1.05); }, () => { G.star(k, cx, my, mr, 7, 3); G.star(k, cx, my, mr * 0.6, 5, 2); G.circle(k, cx, my, mr); }][m % 8]();
    }
    // band of ancient letters (early alphabet strokes and Greek letters)
    const gy = H * 0.395; k.lineWidth = H * 0.003; for (const yy of [gy - H * 0.035, gy + H * 0.035]) { k.beginPath(); k.moveTo(0, yy); k.lineTo(W, yy); k.stroke(); }
    const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ'; k.lineWidth = H * 0.004;
    for (let j = 0; j < 48; j++) { const gx = (j + 0.5) * W / 48; if (j % 2) drawGlyph(k, j * 3, gx, gy, H * 0.0011); else { k.font = `${Math.round(H * 0.045)}px Georgia,serif`; k.textAlign = 'center'; k.fillText(greek[(j / 2) % greek.length | 0], gx, gy + H * 0.016); } }
    // faint geometry on the lower panels
    k.globalAlpha = glow ? 0.35 : 0.5; k.lineWidth = H * 0.002;
    for (let m = 0; m < 16; m++) { const cx = (m + 0.5) * W / 16; G.seedOfLife(k, cx, H * 0.72, H * 0.05); }
    k.globalAlpha = 1;
  });
  const t = T.tex(c), te = T.tex(e);
  for (const tt of [t, te]) { tt.wrapS = THREE.RepeatWrapping; tt.repeat.set(-3, 1); tt.anisotropy = 8; } // negative repeat: text reads correctly from inside
  return [t, te];
}
function domeTex() {
  const W = 2048, H = 1024, [c, x] = T.canvas(W, H);
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#fffdf6'); g.addColorStop(0.55, '#fbf0d6'); g.addColorStop(1, '#efd9a4'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = '#d2a445'; x.fillStyle = '#d2a445'; x.lineWidth = 3;
  for (let i = 0; i < 24; i++) { const px = i / 24 * W; x.beginPath(); x.moveTo(px, H * 0.12); x.lineTo(px, H); x.stroke(); }
  for (const yy of [0.12, 0.3, 0.5, 0.68, 0.84, 0.97]) { x.lineWidth = yy > 0.9 ? 8 : 3; x.beginPath(); x.moveTo(0, yy * H); x.lineTo(W, yy * H); x.stroke(); }
  x.lineWidth = 2.5;
  for (let i = 0; i < 24; i++) { const cx = (i + 0.5) / 24 * W; G.seedOfLife(x, cx, H * 0.76, H * 0.035); G.star(x, cx, H * 0.59, H * 0.05, 8, 3); G.circle(x, cx, H * 0.905, H * 0.03); }
  // stars
  let s = 5; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 260; i++) { const px = r() * W, py = H * (0.13 + r() * 0.36), rr = 1 + r() * 2.6; x.fillStyle = `rgba(${200 + r() * 40},${150 + r() * 40},60,${0.55 + r() * 0.45})`; x.beginPath(); x.arc(px, py, rr, 0, 7); x.fill(); }
  return T.tex(c);
}
function roseTex() {
  const S = 1024, [c, x] = T.canvas(S, S); x.translate(S / 2, S / 2); x.strokeStyle = '#fff0c0'; x.lineCap = 'round';
  const k = S / 2 / 5.2; // canvas px per metre of the ring
  x.lineWidth = 4; G.metatron(x, 0, 0, 1.15 * k); x.lineWidth = 3; G.star(x, 0, 0, 4.9 * k, 12, 5); G.circle(x, 0, 0, 4.95 * k); G.circle(x, 0, 0, 5.1 * k);
  x.lineWidth = 2; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; G.circle(x, Math.cos(a) * 3.7 * k, Math.sin(a) * 3.7 * k, 0.55 * k); }
  G.circle(x, 0, 0, 3.1 * k); G.circle(x, 0, 0, 4.3 * k);
  return T.tex(c);
}
function textSprite(text, { w = 640, h = 140, size = 64, color = '#ffe3a0', glow = 'rgba(255,190,80,.9)' } = {}) {
  const [c, x] = T.canvas(w, h); x.fillStyle = color; x.shadowColor = glow; x.shadowBlur = 18; G.formula(x, text, w / 2, h * 0.62, size);
  return T.tex(c);
}
function glyphSprite(i) {
  const [c, x] = T.canvas(128, 128); x.strokeStyle = '#fff0c0'; x.fillStyle = '#fff0c0'; x.shadowColor = 'rgba(255,200,90,1)'; x.shadowBlur = 14; x.lineWidth = 5; x.lineCap = 'round';
  if (i < 8) drawGlyph(x, i, 64, 64, 2.2); else { x.font = '84px Georgia,serif'; x.textAlign = 'center'; x.fillText('ΑΩΦΔΣΠΛΘ'[i - 8], 64, 94); }
  return T.tex(c);
}
function glyphTex(draw) { const [c, x] = T.canvas(256, 256); x.translate(128, 128); x.strokeStyle = 'rgba(255,225,140,1)'; x.fillStyle = 'rgba(255,225,140,1)'; x.lineWidth = 7; x.lineCap = 'round'; draw(x); return T.tex(c); }
function plateTex(eq, name, sub) {
  const [c, x] = T.canvas(640, 380), [e, y] = T.canvas(640, 380);
  x.fillStyle = '#f6ecd4'; x.fillRect(0, 0, 640, 380); y.fillStyle = '#000'; y.fillRect(0, 0, 640, 380);
  for (const [k, glow] of [[x, 0], [y, 1]]) {
    k.strokeStyle = glow ? '#e8b850' : '#b8862a'; k.lineWidth = 6; T.roundRect(k, 14, 14, 612, 352, 26); k.stroke();
    k.fillStyle = glow ? '#ffd070' : '#7a520c'; G.formula(k, eq, 320, 190, eq.length > 16 ? 50 : 66);
    k.font = '600 30px Georgia,serif'; k.textAlign = 'center'; k.fillStyle = glow ? '#c89030' : '#5a3c08'; k.fillText(name, 320, 285);
    k.font = '22px system-ui,sans-serif'; k.fillText(sub, 320, 325);
  }
  return [T.tex(c), T.tex(e)];
}
function tabletTex(lines) {
  const [c, x] = T.canvas(768, 480); x.fillStyle = '#efe2c2'; x.fillRect(0, 0, 768, 480);
  x.strokeStyle = '#b8862a'; x.lineWidth = 8; T.roundRect(x, 16, 16, 736, 448, 30); x.stroke();
  x.fillStyle = '#5a3c08'; x.textAlign = 'center';
  lines.forEach(([t, size, yy]) => { x.font = `600 ${size}px Georgia,serif`; x.fillText(t, 384, yy); });
  return T.tex(c);
}
function orbTex(text) {
  const [c, x] = T.canvas(256, 256); const g = x.createRadialGradient(110, 100, 10, 128, 128, 124); g.addColorStop(0, '#fffaf0'); g.addColorStop(0.6, '#ffd978'); g.addColorStop(1, 'rgba(255,190,70,0)');
  x.fillStyle = g; x.beginPath(); x.arc(128, 128, 124, 0, 7); x.fill(); x.fillStyle = '#4a2c04'; x.font = '700 110px Georgia,serif'; x.textAlign = 'center'; x.fillText(text, 128, 166);
  return T.tex(c);
}

export function buildLibrary(ctx) {
  const { scene, register, makeLabel, std, glowColor, small, obstacles, api } = ctx;
  const kit = createKit(ctx);
  const ITEMS = window.ARK_LIBRARY || [];
  const by = (id) => ITEMS.find((d) => d.id === id);
  const byKind = (k) => ITEMS.filter((d) => d.kind === k);
  scene.background = new THREE.Color(0xfff6e2);
  scene.fog = new THREE.FogExp2(0xfbefd6, 0.011);

  // ---------- light: sunlight through the oculus, warm fill everywhere (no dim corners) ----------
  scene.add(new THREE.HemisphereLight(0xfffaf0, 0xd8bf90, 1.0));
  scene.add(new THREE.AmbientLight(0xfff2dc, 0.28));
  const sun = new THREE.DirectionalLight(0xfff0d0, 0.9); sun.position.set(2, 20, 3); scene.add(sun);
  const core = new THREE.PointLight(0xffe2a8, 11, 18, 1.5); core.position.set(0, 5.5, 0); scene.add(core);
  for (const deg of [0, 90, 180, 270]) { const l = new THREE.PointLight(0xfff0d4, 5, 12, 1.6); l.position.copy(P(8.2, deg + 45, 4.2)); scene.add(l); }

  // ---------- the rotunda ----------
  const [ft, fe] = floorTex();
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 72), std({ map: ft, emissive: 0xffc860, emissiveMap: fe, emissiveIntensity: 0.45, roughness: 0.62, metalness: 0.02 }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const [wt, we] = wallTex(small);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, WALL_H, 72, 1, true), std({ map: wt, emissive: 0xffd070, emissiveMap: we, emissiveIntensity: 0.55, roughness: 0.8, side: THREE.BackSide }));
  wall.position.y = WALL_H / 2; scene.add(wall);
  const domeM = new THREE.MeshBasicMaterial({ map: domeTex(), side: THREE.BackSide, fog: false }); domeM.color.setScalar(0.94);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 56, 24, 0, Math.PI * 2, 0, Math.PI / 2), domeM); dome.position.y = WALL_H; scene.add(dome);
  const rose = new THREE.Mesh(new THREE.RingGeometry(1.75, 5.2, 96, 1), new THREE.MeshBasicMaterial({ map: roseTex(), color: glowColor(0xffc050, 1.2), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, side: THREE.DoubleSide }));
  rose.rotation.x = Math.PI / 2; rose.position.y = 18.85; scene.add(rose);
  const trimM = kit.trimM;
  for (const y of [0.08, 4.75, WALL_H]) { const t = new THREE.Mesh(new THREE.TorusGeometry(R - 0.05, y === WALL_H ? 0.16 : 0.07, 6, 96), trimM); t.rotation.x = Math.PI / 2; t.position.y = y; scene.add(t); }
  const oculus = new THREE.Mesh(new THREE.CircleGeometry(1.7, 40), new THREE.MeshBasicMaterial({ color: glowColor(0xfff6dc, 3.2), fog: false }));
  oculus.rotation.x = Math.PI / 2; oculus.position.y = WALL_H + R - 0.2; scene.add(oculus);
  const shaftM = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(1.0, 0.9, 0.66) } },
    vertexShader: 'varying vec2 vUv; varying vec3 vP; varying float vF; void main(){ vUv=uv; vP=position; vec4 mv=modelViewMatrix*vec4(position,1.0); vec3 n=normalize(normalMatrix*normal); vF=abs(dot(n, normalize(-mv.xyz))); gl_Position=projectionMatrix*mv;}',
    fragmentShader: `uniform float uTime; uniform vec3 uColor; varying vec2 vUv; varying vec3 vP; varying float vF;
      void main(){ float a = atan(vP.x, vP.z); float stripes = 0.6 + 0.4*sin(a*9.0 + uTime*0.15) * sin(a*23.0 - uTime*0.1);
        float fade = smoothstep(0.0, 0.3, vUv.y) * (1.0 - smoothstep(0.88, 1.0, vUv.y));
        gl_FragColor = vec4(uColor * stripes * fade * pow(vF, 2.0) * 0.09, 1.0); }`,
  });
  const shaftH = WALL_H + R - 1.5;
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 3.4, shaftH, 40, 1, true), shaftM); shaft.position.y = shaftH / 2 + 0.2; scene.add(shaft);

  // ---------- columns: four carry Maxwell's equations, two by the door carry E = mc² and Euler's identity ----------
  const colM = std({ color: 0xfbf3e0, roughness: 0.5, emissive: 0x3a2a10, emissiveIntensity: 0.12 });
  const colG = new THREE.CylinderGeometry(0.34, 0.4, WALL_H, 24); const capG = new THREE.CylinderGeometry(0.62, 0.42, 0.34, 24); const baseG = new THREE.CylinderGeometry(0.5, 0.56, 0.3, 24);
  const COLS = [
    { deg: -47, eq: '∇ · E = ρ / ε_{0}', name: 'Gauss’s law', sub: 'Electric charge is the source of electric fields', maxwell: true },
    { deg: 47, eq: '∇ · B = 0', name: 'Gauss’s law for magnetism', sub: 'There are no magnetic monopoles', maxwell: true },
    { deg: -124, eq: '∇ × E = −∂B/∂t', name: 'Faraday’s law', sub: 'A changing magnetic field makes an electric field', maxwell: true },
    { deg: 124, eq: '∇ × B = μ_{0}J + μ_{0}ε_{0} ∂E/∂t', name: 'Ampère–Maxwell law', sub: 'Currents and changing electric fields make magnetism', maxwell: true },
    { deg: -170, eq: 'E = mc^{2}', name: 'Mass–energy equivalence', sub: 'Einstein, 1905' },
    { deg: 170, eq: 'e^{iπ} + 1 = 0', name: 'Euler’s identity', sub: 'Five fundamental constants in one line' },
  ];
  const plates = [];
  for (const C of COLS) {
    const p = P(12.0, C.deg);
    const col = new THREE.Mesh(colG, colM); col.position.set(p.x, WALL_H / 2, p.z); scene.add(col);
    const cap = new THREE.Mesh(capG, trimM); cap.position.set(p.x, WALL_H - 0.17, p.z); scene.add(cap);
    const b = new THREE.Mesh(baseG, trimM); b.position.set(p.x, 0.15, p.z); scene.add(b);
    obstacles.push({ x: p.x, z: p.z, r: 0.6 });
    const [pt, pe] = plateTex(C.eq, C.name, C.sub);
    const pm = std({ map: pt, emissive: 0xffc860, emissiveMap: pe, emissiveIntensity: C.maxwell ? 0.35 : 0.6, roughness: 0.5 });
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.8), pm); plate.position.copy(P(11.55, C.deg, 2.05)); plate.lookAt(0, 2.05, 0); scene.add(plate);
    if (C.maxwell) plates.push({ ...C, pos: p, pm, visited: false });
  }
  // the glowing doorway (south) behind the portal
  const door = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 5.2), new THREE.MeshBasicMaterial({ map: T.radial('rgba(255,250,230,1)', 'rgba(255,220,150,0.15)', 256), color: glowColor(0xffffff, 1.3), transparent: true }));
  door.position.copy(P(12.9, 180, 2.6)); door.lookAt(0, 2.6, 0); scene.add(door);

  // ---------- white-gold bookcases (instanced) ----------
  {
    const caseM = std({ color: 0xeadcc0, roughness: 0.6, emissive: 0x2a1c08, emissiveIntensity: 0.1 });
    const units = []; for (let a = -164; a <= -54; a += 10.5) units.push(a); for (let a = 54; a <= 164; a += 10.5) units.push(a);
    const books = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), std({ roughness: 0.6 }), units.length * 48);
    const boards = new THREE.InstancedMesh(new THREE.BoxGeometry(2.1, 0.06, 0.45), trimM, units.length * 4);
    const backs = new THREE.InstancedMesh(new THREE.BoxGeometry(2.2, 4.6, 0.5), caseM, units.length);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pos = new THREE.Vector3(), col = new THREE.Color();
    const pal = [0x8a3a22, 0x2e6a5a, 0xb08a3a, 0x4a3a7a, 0xc0562a, 0x7a6a40, 0x2a4a8a, 0xd0a040, 0x6a2a4a, 0x3a7a3a];
    let bi = 0, bo = 0, rs = 3; const r = () => ((rs = (rs * 16807) % 2147483647) / 2147483647);
    units.forEach((a, ui) => {
      const base = P(12.62, a); const obj = new THREE.Object3D(); obj.position.set(base.x, 2.3, base.z); obj.lookAt(0, 2.3, 0); obj.updateMatrix();
      backs.setMatrixAt(ui, obj.matrix);
      for (let sh = 0; sh < 4; sh++) { const b = obj.clone(); b.translateY(-2.0 + sh * 1.25); b.translateZ(0.05); b.updateMatrix(); boards.setMatrixAt(bo++, b.matrix); }
      for (let sh = 0; sh < 3; sh++) { let x = -1.0; for (let k = 0; k < 16 && x < 0.98; k++) {
        const w = 0.07 + r() * 0.06, h = 0.7 + r() * 0.35; const b = obj.clone(); b.translateX(x + w / 2); b.translateY(-1.97 + sh * 1.25 + h / 2); b.translateZ(0.12); b.rotateZ(r() < 0.08 ? 0.15 : 0);
        b.updateMatrix(); m4.copy(b.matrix); m4.decompose(pos, q, s); s.set(w, h, 0.32); m4.compose(pos, q, s); books.setMatrixAt(bi, m4); col.setHex(pal[(r() * pal.length) | 0]).multiplyScalar(0.8 + r() * 0.5); books.setColorAt(bi, col); bi++; x += w + 0.008; } }
    });
    books.count = bi; boards.count = bo; scene.add(backs, boards, books);
  }

  // ---------- the DNA double helix rising from the reading table ----------
  const helix = new THREE.Group(); helix.position.y = 2.3; scene.add(helix);
  {
    const N = 30, H = 4.3, Rr = 0.5, turns = N / 10.5; // B-DNA: about 10.5 base pairs per turn
    const ball = new THREE.InstancedMesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), N * 2);
    const rung = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), N);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
    const pairCol = [0xffa830, 0x3fb0ff, 0xff6a90, 0x5fd070];
    for (let i = 0; i < N; i++) {
      const a = i / N * turns * Math.PI * 2, y = i / (N - 1) * H;
      const p1 = new THREE.Vector3(Math.cos(a) * Rr, y, Math.sin(a) * Rr), p2 = new THREE.Vector3(Math.cos(a + Math.PI * 0.8) * Rr, y, Math.sin(a + Math.PI * 0.8) * Rr);
      m.makeTranslation(p1.x, p1.y, p1.z); ball.setMatrixAt(i * 2, m); ball.setColorAt(i * 2, c.setRGB(1.25, 0.82, 0.25));
      m.makeTranslation(p2.x, p2.y, p2.z); ball.setMatrixAt(i * 2 + 1, m); ball.setColorAt(i * 2 + 1, c.setRGB(0.35, 0.8, 1.25));
      const mid = p1.clone().add(p2).multiplyScalar(0.5), dir = p2.clone().sub(p1); q.setFromUnitVectors(up, dir.clone().normalize());
      m.compose(mid, q, new THREE.Vector3(1, dir.length(), 1)); rung.setMatrixAt(i, m); rung.setColorAt(i, c.setHex(pairCol[i % 4]).multiplyScalar(1.05));
    }
    helix.add(ball, rung);
    const hg = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,240,200,.5)', 'rgba(255,220,150,0)'), blending: THREE.AdditiveBlending, depthWrite: false })); hg.position.y = H / 2; hg.scale.set(2.2, 4.6, 1); hg.material.opacity = 0.5; helix.add(hg);
  }

  // ---------- formulas drifting in the light, and glowing ancient letters rising in the sun shaft ----------
  const drift = [];
  const DRIFT = ['E = mc^{2}', 'φ = (1 + √5) / 2', 'F_{n} = F_{n−1} + F_{n−2}', 'e^{iπ} + 1 = 0', 'a^{2} + b^{2} = c^{2}', '∇ · E = ρ / ε_{0}', 'c ≈ 299,792 km/s', '1, 1, 2, 3, 5, 8, 13…', '137.5°', 'E = hν', 'π ≈ 3.14159', 'A–T · G–C', 'λ = h / p', '2 : 1 · 3 : 2 · 4 : 3', 'C = 2πr', 'i^{2} = −1'];
  const nd = small ? 9 : DRIFT.length;
  for (let i = 0; i < nd; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: textSprite(DRIFT[i]), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.85, fog: false }));
    s.scale.set(2.2, 0.48, 1); scene.add(s); drift.push({ s, a: i / nd * Math.PI * 2, r: 4.3 + (i % 3) * 1.3, y: 3.6 + (i % 4) * 0.55, sp: 0.03 + (i % 5) * 0.006 });
  }
  const letters = [];
  const lt = Array.from({ length: 16 }, (_, i) => glyphSprite(i));
  const nl = small ? 14 : 26;
  for (let i = 0; i < nl; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: lt[i % 16], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: glowColor(0xffe0a0, 1.4), fog: false }));
    s.scale.setScalar(0.42); scene.add(s); letters.push({ s, a: i * 2.39996, r: 1.2 + (i % 5) * 0.35, y0: (i / nl) * 9, sp: 0.35 + (i % 3) * 0.12 });
  }

  // ---------- section banners ----------
  const big = (text, sub, pos) => makeLabel(text, sub, pos, { width: small ? 3.4 : 3.0, always: true, big: true });
  big('The Film Wall', 'The Library’s films', P(11.2, 0, 5.45));
  big('Clay Jars', 'Old wisdom & history', P(10.6, -90, 4.55));
  big('Glowing Books', 'What humans & AI build together', P(10.6, 89, 4.55));
  big('Scrolls & Leather Books', 'Essays and lessons', P(10.2, -148, 4.55));
  big('Scrolls & Leather Books', 'Essays and lessons', P(10.2, 148, 4.55));

  // ---------- the shelves, built with the kit ----------
  byKind('jar').forEach((d, i, arr) => kit.jar(d, P(10.6, -118 + i * (56 / (arr.length - 1))), { seed: i + 1, hue: 14 + i * 4, scale: 0.95 + (i % 3) * 0.12, labelY: 2.55 + (i % 2) * 0.35, plinthColor: 0xe8d7b4 }));
  byKind('future').forEach((d, i, arr) => kit.glowBook(d, P(10.4, 62 + i * (54 / (arr.length - 1))), { seed: i, labelY: 2.95 + (i % 2) * 0.3 }));
  const SC = [-130, 130, -139, 139, -148, 148, -157, 157, -166, 166];
  byKind('scroll').forEach((d, i) => kit.lectern(d, P(10.3, SC[i % SC.length]), { seed: i, leather: i % 4 === 1 || i % 4 === 2, hue: [8, 22, 30][i % 3], labelY: 2.25 + (i % 3) * 0.28 }));
  // reading table (white marble, gold rim) with the crew reports
  {
    const table = new THREE.Group(); scene.add(table);
    const topM = std({ color: 0xf8f0e0, roughness: 0.3, metalness: 0.05 });
    const tt = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.1, 48), topM); tt.position.y = 0.9; table.add(tt);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.035, 6, 64), trimM); rim.rotation.x = Math.PI / 2; rim.position.y = 0.95; table.add(rim);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.5, 0.85, 16), topM); leg.position.y = 0.43; table.add(leg);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), new THREE.MeshBasicMaterial({ color: glowColor(0xffe0a0, 3) })); lamp.position.y = 1.2; table.add(lamp);
    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 0.2, 10), trimM); lampBase.position.y = 1.04; table.add(lampBase);
    obstacles.push({ x: 0, z: 0, r: 1.75 });
    byKind('table').forEach((d, i) => { const deg = 45 + i * 90 + 180; const it = kit.doc(d, P(0.95, deg), { face: P(5, deg), seed: i, rot: (i - 1.5) * 0.12, labelY: 1.75 + (i % 2) * 0.3, stand: P(2.45, deg) }); it.near = 1.0; });
    makeLabel('The Reading Table', 'Crew articles & reports', new THREE.Vector3(0, 2.0, 0), { width: small ? 2.8 : 2.4, always: true, big: true }).table = true;
  }
  // the Film Wall: every film, laid out by its real poster shape
  {
    const vids = byKind('video'); const Hd = 2.1, gap = 0.5, r = 12.35;
    const dims = vids.map((d) => { const asp = d.aspect || (d.id === 'v1' ? 0.92 : 0.568); const H = asp > 1.2 ? 1.5 : Hd; return { d, H, W: Math.min(2.8, H * asp) }; });
    const total = dims.reduce((a, x) => a + x.W + 0.24, 0) + gap * (dims.length - 1);
    let sx = -total / 2;
    for (const x of dims) { const mid = sx + (x.W + 0.24) / 2; sx += x.W + 0.24 + gap; kit.screen(x.d, P(r, THREE.MathUtils.radToDeg(mid / r)), { H: x.H, W: x.W, y: 2.55, labelY: 2.55 + x.H / 2 + 0.75 }); }
  }

  // ---------- the six secrets ----------
  const secretStyle = { color: 0xffd890, coverBg: '#5a3a08', coverInk: '#fff1c0', small, makeLabel };
  const drawn = {
    paw: T.pawPrint(),
    spiral: glyphTex((x) => { G.goldenSpiral(x, 0, 0, 110, 3, 0); G.circle(x, 0, 0, 118); }),
    fib: glyphTex((x) => { x.font = '600 44px Georgia,serif'; x.textAlign = 'center'; x.fillText('1 1 2 3 5 ?', 0, 14); G.circle(x, 0, 0, 118); }),
    maxwell: glyphTex((x) => { x.font = '600 150px Georgia,serif'; x.textAlign = 'center'; x.fillText('∇', 0, 52); G.circle(x, 0, 0, 118); }),
    vega: glyphTex((x) => { G.star(x, 0, 0, 100, 8, 3); G.circle(x, 0, 0, 118); }),
    chimes: glyphTex((x) => { for (let k = 1; k <= 4; k++) G.circle(x, 0, 0, k * 28); x.font = '600 34px Georgia,serif'; x.textAlign = 'center'; x.fillText('2 : 1', 0, 12); }),
  };
  const HINT_LABEL = { paw: ['HALO’s paw print', 'Only the guardian can wake it'], spiral: ['A golden spiral', 'Follow it to its eye'], fib: ['The Fibonacci tablet', 'What comes next?'], maxwell: ['Maxwell’s columns', 'Visit all four'], vega: ['A star in the dome', 'Look up'], chimes: ['The Pythagorean bowls', 'Find the octave'] };
  const secrets = [];
  for (const S of SECRETS) {
    const d = by(S.id); if (!d) continue;
    d.fact = S.fact; d.secretName = S.name;
    const h = kit.secret(d, S.pos, { ...secretStyle, glyphTex: drawn[S.key], hintTitle: HINT_LABEL[S.key][0], hintSub: HINT_LABEL[S.key][1] });
    Object.assign(h, { key: S.key, name: S.name, fact: S.fact, hintText: S.hint, trigger: S.trigger, ready: () => true });
    if (S.key === 'spiral') { h.glyph.scale.setScalar(0.8); }
    if (S.key === 'vega' || S.key === 'maxwell') h.hint.sprite.visible = false; // their clues are elsewhere (the dome, the columns)
    secrets.push(h);
  }
  const sec = (k) => secrets.find((h) => h.key === k);
  const aux = (id, title, pos, hitSize, extra = {}) => { const g = new THREE.Group(); g.position.copy(pos); scene.add(g); const it = register({ id, kind: 'aux', title, by: '', blurb: '', url: '' }, g, hitSize, pos.y + 0.6, { aux: true, standDist: 1.8, ...extra }); it.label.sprite.visible = false; it.obstacle = 0; return { g, it }; };

  // Fibonacci tablet: 1, 1, 2, 3, 5, ? and three number orbs
  const fibAt = P(7.5, -142), fibFace = new THREE.Vector3(0, 0, 0);
  {
    const g = new THREE.Group(); g.position.copy(fibAt); g.lookAt(fibFace.x, 0, fibFace.z); scene.add(g);
    const post = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.05, 0.2), std({ color: 0xe8dcc0, roughness: 0.7 })); post.position.y = 0.52; g.add(post);
    const slab = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0), std({ map: tabletTex([['1 · 1 · 2 · 3 · 5 · ?', 84, 200], ['What comes next?', 46, 300], ['Touch the right orb.', 36, 380]]), roughness: 0.7, emissive: 0x3a2a10, emissiveIntensity: 0.2 }));
    slab.position.set(0, 1.07, 0.02); slab.rotation.x = -0.35; slab.position.z = 0.12; g.add(slab);
    obstacles.push({ x: fibAt.x, z: fibAt.z, r: 0.75 });
  }
  const orbs = [];
  [7, 8, 9].forEach((n, k) => {
    const off = new THREE.Vector3((1 - k) * 0.72, 1.95, 0.35).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(fibFace.x - fibAt.x, fibFace.z - fibAt.z));
    const { g, it } = aux('fib-' + n, 'the number ' + n, fibAt.clone().add(off), [0.6, 0.6, 0.6], { hitY: -0.3, near: 3.2 });
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: orbTex(String(n)), transparent: true, depthWrite: false })); m.scale.setScalar(0.52); g.add(m);
    it.stand = P(5.6, -142 + (k - 1) * 6);
    it.onTap = () => {
      const h = sec('fib'); if (!h || h.revealed) return;
      if (n === 8) { api.tone(432, 1.6); api.reveal(h); orbs.forEach((o) => { o.it.locked = true; }); }
      else { api.tone(n === 7 ? 190 : 250, 0.8, 0.06); api.say(n === 7 ? 'Close! Each number is the sum of the two before it: 3 + 5 = …?' : 'Not quite. Add the last two: 3 + 5.'); }
      m.scale.setScalar(0.7); setTimeout(() => m.scale.setScalar(0.52), 250);
    };
    orbs.push({ g, it, m, n });
  });
  // Pythagorean bowls: which length sings an octave above the whole string?
  const chAt = P(7.5, 142);
  const bowls = [];
  {
    const g = new THREE.Group(); g.position.copy(chAt); g.lookAt(0, 0, 0); scene.add(g);
    const box = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 0.6), kit.woodM); box.position.y = 0.4; g.add(box);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), std({ map: tabletTex([['Which string length', 60, 150], ['sings one octave above', 60, 240], ['the whole string (1)?', 60, 330]]), roughness: 0.7 }));
    sign.position.set(0, 1.55, -0.2); g.add(sign);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), kit.woodM); post.position.set(0, 1.0, -0.26); g.add(post);
    obstacles.push({ x: chAt.x, z: chAt.z, r: 0.9 });
  }
  const bowlG = new THREE.SphereGeometry(0.2, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  [['3/4', 0.75, 'a fourth'], ['2/3', 2 / 3, 'a fifth'], ['1/2', 0.5, 'the octave']].forEach(([lab, len, name], k) => {
    const off = new THREE.Vector3((1 - k) * 0.7, 0.95, 0.12).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(-chAt.x, -chAt.z));
    const { g, it } = aux('bowl-' + k, 'the ' + lab + ' bowl', chAt.clone().add(off), [0.6, 0.7, 0.6], { hitY: -0.2, near: 3.2 });
    const bowl = new THREE.Mesh(bowlG, std({ color: 0xe8b850, metalness: 0.85, roughness: 0.25, emissive: 0x7a5010, emissiveIntensity: 0.4, side: THREE.DoubleSide })); bowl.position.y = 0.12; g.add(bowl);
    const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: orbTex(lab), transparent: true, depthWrite: false })); tag.position.y = 0.55; tag.scale.setScalar(0.42); g.add(tag);
    it.stand = P(5.6, 142 - (k - 1) * 6);
    it.onTap = () => {
      api.tone(216 / len, 2.2, 0.12); bowl.material.emissiveIntensity = 1.6; setTimeout(() => (bowl.material.emissiveIntensity = 0.4), 500);
      const h = sec('chimes'); if (!h || h.revealed) return;
      if (lab === '1/2') api.reveal(h);
      else api.say(`That one sings ${name} (${lab === '3/4' ? '4 : 3' : '3 : 2'}). Lovely, but the octave is the ratio 2 : 1.`);
    };
    bowls.push({ g, it, bowl });
  });
  // Vega in the dome (with the little parallelogram of Lyra)
  const vDir = new THREE.Vector3(Math.sin(rad(-20)) * Math.sin(rad(40)), Math.cos(rad(40)), -Math.cos(rad(-20)) * Math.sin(rad(40))).normalize();
  const vegaPos = new THREE.Vector3(0, WALL_H, 0).addScaledVector(vDir, R * 0.95);
  const vega = aux('vega-star', 'the brightest star', vegaPos, [2.0, 2.0, 2.0], { hitY: -1.0, near: 99, noPrompt: true });
  const vegaGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(235,245,255,1)', 'rgba(160,200,255,0)'), color: glowColor(0x9cc8ff, 2.4), blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  vegaGlow.scale.setScalar(2.2); vega.g.add(vegaGlow);
  const lyra = (() => { const [c, x] = T.canvas(256, 256); x.strokeStyle = 'rgba(200,225,255,.8)'; x.fillStyle = '#eaf4ff'; x.lineWidth = 2; const pts = [[128, 60], [150, 110], [118, 118], [134, 190], [168, 180]]; x.beginPath(); x.moveTo(...pts[0]); x.lineTo(...pts[1]); x.lineTo(...pts[2]); x.lineTo(...pts[0]); x.moveTo(...pts[1]); x.lineTo(...pts[4]); x.lineTo(...pts[3]); x.lineTo(...pts[2]); x.stroke(); pts.slice(1).forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 4, 0, 7); x.fill(); }); return T.tex(c); })();
  const lyraS = new THREE.Sprite(new THREE.SpriteMaterial({ map: lyra, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })); lyraS.scale.setScalar(3.2); lyraS.position.set(0, -1.0, 0); vega.g.add(lyraS);
  vega.it.onTap = () => { const h = sec('vega'); if (!h || h.revealed) return; api.tone(648, 2.5, 0.1); api.reveal(h); vega.it.locked = true; };

  // restoring secrets found on an earlier visit
  if (sec('fib')) sec('fib').onRestore = () => orbs.forEach((o) => { o.it.locked = true; });
  if (sec('vega')) sec('vega').onRestore = () => { vega.it.locked = true; };
  if (sec('maxwell')) sec('maxwell').onRestore = () => plates.forEach((p) => { p.visited = true; p.pm.emissiveIntensity = 1.4; });

  // ---------- the doorway to Asherah's Library ----------
  const to = new URL(location.href); to.searchParams.set('room', 'asherah'); to.searchParams.set('via', 'portal');
  const portal = kit.portal({ id: 'portal-asherah', kind: 'portal', title: 'Asherah’s Library', by: 'The Mother · Memory kept', blurb: '', url: to.toString() }, P(11.7, 180), { color: 0xc8f0a0, makeLabel, href: to.toString() });
  portal.stand = P(10.2, 180);

  let maxwellCount = 0;
  const lp2 = new THREE.Vector3();
  function tick(t, dt, S) {
    shaftM.uniforms.uTime.value = t;
    helix.rotation.y = t * 0.25;
    core.intensity = 11 + Math.sin(t * 1.1) * 1.2;
    rose.rotation.z = t * 0.02;
    for (const f of drift) { f.a += dt * f.sp; f.s.position.set(Math.cos(f.a) * f.r, f.y + Math.sin(t * 0.5 + f.a * 3) * 0.25, Math.sin(f.a) * f.r); f.s.material.opacity = 0.62 + Math.sin(t * 0.8 + f.a * 5) * 0.2; }
    for (const L of letters) { const y = (L.y0 + t * L.sp) % 9; const a = L.a + t * 0.15; L.s.position.set(Math.cos(a) * L.r, 1.2 + y, Math.sin(a) * L.r); L.s.material.opacity = Math.min(1, y / 1.5) * (1 - THREE.MathUtils.smoothstep(y, 6.5, 9)); }
    for (const o of orbs) o.g.position.y = 1.95 + Math.sin(t * 1.6 + o.n) * 0.06;
    vegaGlow.scale.setScalar(2.1 + Math.sin(t * 2.3) * 0.25);
    // Maxwell's columns: walk past each of the four
    const hM = sec('maxwell');
    if (hM && !hM.revealed && S) {
      lp2.copy(S.lion.root.position);
      for (const p of plates) {
        if (p.visited) continue;
        if (Math.hypot(lp2.x - p.pos.x, lp2.z - p.pos.z) < 2.6) {
          p.visited = true; maxwellCount++; p.pm.emissiveIntensity = 1.4; api.tone(324 + maxwellCount * 54, 1.4, 0.08);
          if (maxwellCount < 4) api.toast(`${p.name}: column ${maxwellCount} of 4 ✓`, 2600); else api.reveal(hM);
        }
      }
    }
  }
  const say = {
    lines: ['Rrrrr… that was my friendly roar.', 'I keep the door. You keep reading.', 'Six secrets hide in this room. Tap the ✦ Secrets pill if you want a hint.', 'The glowing books hum when you come close.', 'Every title here is real. Go on, touch one.', 'The glowing arch by the door leads to Asherah’s Library.', 'Look up now and then. The dome has stars.'],
    third: 'Psst. Six secrets are hidden in this room. Tap the ✦ Secrets pill if you want a hint.',
    reveal: 'A secret, found!',
  };
  return { tick, hidden: sec('paw'), secrets, say, maxR: 11.3, camR: 12.3, lionStart: new THREE.Vector3(0, 0, 4.6), exposure: 0.74, bloomStrength: 0.42, bloomThreshold: 0.96, portals: [portal], maxwell: () => maxwellCount };
}
