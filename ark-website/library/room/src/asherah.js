import * as THREE from 'three';
import * as T from './textures.js';
import { createKit } from './kit.js';

// Asherah's Library: the first pillar library, built on the shared pattern.
// "The Mother. Memory kept." Honeycomb hall, the sacred tree, bees, the White Lion. Bright, warm, living.
export const ASHERAH_LION = { name: 'White Lion', rim: 0xffe2a0, rimI: 0.5, body: 0xefe8da, bodyE: 0x3a3226, cream: 0xf6efe0, creamE: 0x3a3424, mane: 0xf7d98a, maneE: 0xffc64a, eye: [1.6, 2.4, 2.2], halo: [2.4, 1.8, 0.6], tuft: [2.2, 1.7, 0.7], haloSides: 6, aura: 'rgba(255,230,160,.16)', light: 0xfff0c0 };

const RC = 11.5;                       // hex circumradius
const AP = RC * Math.cos(Math.PI / 6); // apothem ≈ 9.96
const rad = THREE.MathUtils.degToRad;
const P = (r, deg, y = 0) => new THREE.Vector3(r * Math.sin(rad(deg)), y, -r * Math.cos(rad(deg)));
// a point on the wall whose centre is at `deg`, `off` metres along it, `r` from the centre
const W = (deg, off, r, y = 0) => { const n = P(1, deg), t = new THREE.Vector3(-n.z, 0, n.x); return n.multiplyScalar(r).addScaledVector(t, off).setY(y); };
const faceIn = (deg, pos) => pos.clone().addScaledVector(P(1, deg), -6);

// ---------- procedural textures in the shared symbol language ----------
function hexPath(x, cx, cy, r, rot = Math.PI / 6) { x.beginPath(); for (let i = 0; i < 6; i++) { const a = rot + i * Math.PI / 3; x[i ? 'lineTo' : 'moveTo'](cx + r * Math.cos(a), cy + r * Math.sin(a)); } x.closePath(); }
function floorTex() {
  const S = 2048, [c, x] = T.canvas(S, S);
  x.fillStyle = '#f3e3bb'; x.fillRect(0, 0, S, S);
  const hr = 46, w = Math.sqrt(3) * hr;
  let n = 0;
  for (let row = -1; row * hr * 1.5 < S + hr; row++) for (let col = -1; col * w < S + w; col++) {
    const cx = col * w + (row % 2 ? w / 2 : 0), cy = row * hr * 1.5; n++;
    const d = Math.hypot(cx - S / 2, cy - S / 2) / (S / 2);
    const honey = (Math.sin(cx * 0.013) + Math.cos(cy * 0.011) + (n * 7919 % 13) / 6) > 1.4;
    hexPath(x, cx, cy, hr - 3); x.fillStyle = honey ? `hsl(40,${70 - d * 20}%,${62 - d * 8}%)` : `hsl(44,${45 - d * 15}%,${86 - d * 10}%)`; x.fill();
    x.strokeStyle = 'rgba(160,110,30,.55)'; x.lineWidth = 4; x.stroke();
  }
  // Flower of Life inlay at the centre (the tree stands inside it)
  x.save(); x.translate(S / 2, S / 2); x.strokeStyle = 'rgba(190,130,20,.95)'; x.lineWidth = 7;
  const fr = 150; const pts = [[0, 0]];
  for (let ring = 1; ring <= 2; ring++) for (let i = 0; i < 6 * ring; i++) { const k = Math.floor(i / ring), f = (i % ring) / ring; const a1 = k * Math.PI / 3, a2 = (k + 1) * Math.PI / 3; pts.push([ring * fr * ((1 - f) * Math.cos(a1) + f * Math.cos(a2)), ring * fr * ((1 - f) * Math.sin(a1) + f * Math.sin(a2))]); }
  for (const [px, py] of pts) { if (Math.hypot(px, py) > fr * 2.01) continue; x.beginPath(); x.arc(px, py, fr, 0, Math.PI * 2); x.stroke(); }
  x.lineWidth = 10; x.beginPath(); x.arc(0, 0, fr * 3, 0, Math.PI * 2); x.stroke();
  // phyllotaxis seed spiral (the golden angle) around the inlay
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 60; i < 900; i++) { const r = 26 * Math.sqrt(i), a = i * ga; if (r > S * 0.47) break; x.fillStyle = `rgba(${150 + (i % 5) * 12},${100 + (i % 3) * 10},20,${0.55})`; x.beginPath(); x.arc(r * Math.cos(a), r * Math.sin(a), 5 + (i % 4), 0, Math.PI * 2); x.fill(); }
  x.restore();
  return T.tex(c);
}
// ancient letters, drawn as strokes (early alphabet shapes: ox, house, water, eye, hand, door, seed, tree)
const GLYPHS = [
  (x) => { x.moveTo(-14, -10); x.lineTo(0, 10); x.lineTo(14, -10); x.moveTo(-14, -10); x.lineTo(-18, -18); x.moveTo(14, -10); x.lineTo(18, -18); },
  (x) => { x.moveTo(-12, 14); x.lineTo(-12, -12); x.lineTo(12, -12); x.lineTo(12, 14); x.moveTo(-4, 14); x.lineTo(-4, 2); x.lineTo(4, 2); x.lineTo(4, 14); },
  (x) => { x.moveTo(-18, 0); for (let i = 0; i < 5; i++) x.lineTo(-18 + (i + 0.5) * 7.2, i % 2 ? 6 : -6); x.lineTo(18, 0); },
  (x) => { x.ellipse(0, 0, 15, 9, 0, 0, Math.PI * 2); x.moveTo(5, 0); x.arc(0, 0, 5, 0, Math.PI * 2); },
  (x) => { x.moveTo(-10, 14); x.lineTo(0, -4); x.lineTo(10, 14); x.moveTo(0, -4); x.lineTo(0, -16); x.moveTo(-8, -12); x.lineTo(0, -4); x.lineTo(8, -12); },
  (x) => { x.moveTo(-10, 16); x.lineTo(-10, -14); x.lineTo(10, -14); x.moveTo(-10, -2); x.lineTo(6, -2); },
  (x) => { x.moveTo(0, -14); x.bezierCurveTo(14, -6, 14, 8, 0, 14); x.bezierCurveTo(-14, 8, -14, -6, 0, -14); x.moveTo(0, -14); x.lineTo(0, 14); },
  (x) => { x.moveTo(0, 16); x.lineTo(0, -16); x.moveTo(0, -4); x.lineTo(-10, -14); x.moveTo(0, -4); x.lineTo(10, -14); x.moveTo(0, 6); x.lineTo(-12, -2); x.moveTo(0, 6); x.lineTo(12, -2); },
];
export function drawGlyph(x, i, cx, cy, s) { x.save(); x.translate(cx, cy); x.scale(s, s); x.beginPath(); GLYPHS[i % GLYPHS.length](x); x.restore(); x.stroke(); }
function wallTex() {
  const Wd = 2048, H = 1024, [c, x] = T.canvas(Wd, H);
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#dfeec4'); g.addColorStop(0.55, '#a8cf88'); g.addColorStop(1, '#6f9a52');
  x.fillStyle = g; x.fillRect(0, 0, Wd, H);
  // climbing vines and leaves
  for (let v = 0; v < 26; v++) {
    let px = (v + 0.5) * Wd / 26, py = H; x.strokeStyle = 'rgba(70,110,40,.55)'; x.lineWidth = 5; x.beginPath(); x.moveTo(px, py);
    for (let k = 0; k < 18; k++) { px += Math.sin(k * 0.9 + v) * 16; py -= H / 20; x.lineTo(px, py);
      x.save(); x.translate(px, py); x.rotate(Math.sin(k + v) * 1.4); x.fillStyle = k % 5 === 0 ? 'rgba(255,238,170,.9)' : `rgba(${80 + (k * 13 % 60)},${140 + (k * 7 % 50)},60,.8)`; x.beginPath(); x.ellipse(14, 0, 16, 6, 0, 0, Math.PI * 2); x.fill(); x.restore(); }
    x.stroke();
  }
  // golden band of ancient letters
  const by = H * 0.3; x.fillStyle = 'rgba(120,80,20,.55)'; x.fillRect(0, by - 46, Wd, 92);
  x.strokeStyle = '#ffe3a0'; x.lineWidth = 3; x.beginPath(); x.moveTo(0, by - 46); x.lineTo(Wd, by - 46); x.moveTo(0, by + 46); x.lineTo(Wd, by + 46); x.stroke();
  x.lineWidth = 4.5; x.lineCap = 'round'; x.strokeStyle = '#fff0c4';
  for (let i = 0; i < 40; i++) drawGlyph(x, (i * 5) % 8, (i + 0.5) * Wd / 40, by, 1.35);
  const t = T.tex(c); t.wrapS = THREE.RepeatWrapping; return t;
}
function ceilTex() {
  const S = 1024, [c, x] = T.canvas(S, S); x.fillStyle = '#fff4d6'; x.fillRect(0, 0, S, S);
  const hr = 34, w = Math.sqrt(3) * hr;
  for (let row = -1; row * hr * 1.5 < S + hr; row++) for (let col = -1; col * w < S + w; col++) {
    const cx = col * w + (row % 2 ? w / 2 : 0), cy = row * hr * 1.5; hexPath(x, cx, cy, hr - 2);
    const gg = x.createRadialGradient(cx, cy, 2, cx, cy, hr); gg.addColorStop(0, '#ffd772'); gg.addColorStop(1, '#e0a73a'); x.fillStyle = gg; x.fill(); x.strokeStyle = '#fff1c8'; x.lineWidth = 4; x.stroke();
  }
  return T.tex(c);
}
function honeyGlyph() {
  const S = 256, [c, x] = T.canvas(S, S); x.translate(S / 2, S / 2);
  x.strokeStyle = 'rgba(255,220,120,1)'; x.lineWidth = 9; hexPath(x, 0, 0, 110); x.stroke();
  x.lineWidth = 5; hexPath(x, 0, 0, 78); x.stroke();
  for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; hexPath(x, Math.cos(a) * 45, Math.sin(a) * 45, 20); x.stroke(); }
  x.fillStyle = 'rgba(255,230,150,1)'; hexPath(x, 0, 0, 22); x.fill();
  return T.tex(c);
}

export function buildAsherah(ctx) {
  const { scene, register, makeLabel, std, glowColor, small, obstacles } = ctx;
  const kit = createKit(ctx);
  scene.background = new THREE.Color(0xf6ecd0);
  scene.fog = new THREE.FogExp2(0xf1e6c2, 0.018);

  // ---------- light: warm, dappled, bright ----------
  scene.add(new THREE.HemisphereLight(0xfff4d6, 0x6a8a4a, 1.25));
  scene.add(new THREE.AmbientLight(0xfff0d0, 0.35));
  const sun = new THREE.DirectionalLight(0xfff0c8, 1.2); sun.position.set(3, 14, 2); scene.add(sun);
  const treeLight = new THREE.PointLight(0xffd680, 26, 16, 1.4); treeLight.position.set(0, 4.2, 0); scene.add(treeLight);
  const gardenLight = new THREE.PointLight(0xbfff9a, 10, 10, 1.6); gardenLight.position.copy(P(7, 60, 2.8)); scene.add(gardenLight);
  const niche = new THREE.PointLight(0xff9a50, 9, 9, 1.6); niche.position.copy(P(7, 300, 2.6)); scene.add(niche);

  // ---------- the hex hall ----------
  const WALL_H = 6.4;
  const floor = new THREE.Mesh(new THREE.CircleGeometry(RC, 6, Math.PI / 6 + Math.PI / 2), std({ map: floorTex(), roughness: 0.55, metalness: 0.05 }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const wt = wallTex(); wt.repeat.set(3, 1);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(RC, RC, WALL_H, 6, 1, true), std({ map: wt, roughness: 0.85, side: THREE.BackSide, emissive: 0x2a3a18, emissiveIntensity: 0.25 }));
  wall.rotation.y = Math.PI / 6; wall.position.y = WALL_H / 2; scene.add(wall);
  const ceil = new THREE.Mesh(new THREE.CylinderGeometry(3.2, RC, 3.6, 6, 1, true), new THREE.MeshStandardMaterial({ map: ceilTex(), side: THREE.BackSide, emissive: 0xffb84a, emissiveIntensity: 0.45, roughness: 0.6 }));
  ceil.rotation.y = Math.PI / 6; ceil.position.y = WALL_H + 1.8; scene.add(ceil);
  const sky = new THREE.Mesh(new THREE.CircleGeometry(3.2, 6, Math.PI / 6 + Math.PI / 2), new THREE.MeshBasicMaterial({ color: glowColor(0xfff6dc, 2.2), fog: false }));
  sky.rotation.x = Math.PI / 2; sky.position.y = WALL_H + 3.6; scene.add(sky);
  // golden hex pilasters at each corner + honey lanterns
  const gold = std({ color: 0xe0b050, metalness: 0.8, roughness: 0.3, emissive: 0x5a3a08, emissiveIntensity: 0.4 });
  const honeyM = new THREE.MeshStandardMaterial({ color: 0xffc040, emissive: 0xffa010, emissiveIntensity: 1.6, transparent: true, opacity: 0.9, roughness: 0.2 });
  const lanterns = [];
  for (let i = 0; i < 6; i++) {
    const deg = 30 + i * 60, p = P(RC - 0.35, deg);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, WALL_H, 6), gold); col.position.set(p.x, WALL_H / 2, p.z); scene.add(col);
    const lp = P(RC - 1.6, deg, 4.3);
    const lan = new THREE.Group(); lan.position.copy(lp); scene.add(lan);
    lan.add(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.5, 6), honeyM));
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.2, 6), gold); cap.position.y = 0.35; lan.add(cap);
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.6, 4), gold); chain.position.y = 1.2; lan.add(chain);
    const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,210,110,.8)', 'rgba(255,170,40,0)'), blending: THREE.AdditiveBlending, depthWrite: false })); gl.scale.set(1.6, 1.6, 1); lan.add(gl);
    lanterns.push(lan);
  }
  // wall trims: gold rails top and bottom
  for (const y of [0.06, WALL_H - 0.05]) { const t = new THREE.Mesh(new THREE.TorusGeometry(RC - 0.08, 0.07, 4, 6), gold); t.rotation.x = Math.PI / 2; t.rotation.z = Math.PI / 6 + Math.PI / 2; t.position.y = y; scene.add(t); }

  // ---------- the sacred tree ----------
  const bark = std({ color: 0x8a6440, roughness: 0.8, emissive: 0x2a1a08, emissiveIntensity: 0.3 });
  const tree = new THREE.Group(); scene.add(tree);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.8, 2.8, 14, 6), bark); trunk.position.y = 1.4; tree.add(trunk);
  const tip = [];
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2 + 0.3, len = 2.2 + (i % 3) * 0.5;
    const c = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 2.5, 0), new THREE.Vector3(Math.cos(a) * 0.8, 3.2, Math.sin(a) * 0.8), new THREE.Vector3(Math.cos(a) * len, 3.7 + (i % 2) * 0.5, Math.sin(a) * len)]);
    tree.add(new THREE.Mesh(new THREE.TubeGeometry(c, 10, 0.16, 6), bark)); tip.push(c.getPoint(1));
  }
  for (let i = 0; i < 9; i++) { // roots over the Flower of Life
    const a = i / 9 * Math.PI * 2, len = 1.6 + (i % 3) * 0.35;
    const c = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(Math.cos(a) * 0.9, 0.18, Math.sin(a) * 0.9), new THREE.Vector3(Math.cos(a) * len, 0.02, Math.sin(a) * len)]);
    tree.add(new THREE.Mesh(new THREE.TubeGeometry(c, 8, 0.13, 5), bark));
  }
  // glowing leaves (instanced) and blossoms
  const leafN = small ? 520 : 900;
  const leafG = new THREE.PlaneGeometry(0.22, 0.13);
  const leafM = new THREE.MeshStandardMaterial({ color: 0x9fdc6a, emissive: 0x5aa830, emissiveIntensity: 0.55, side: THREE.DoubleSide, roughness: 0.6 });
  const leaves = new THREE.InstancedMesh(leafG, leafM, leafN);
  const o = new THREE.Object3D(), col = new THREE.Color();
  for (let i = 0; i < leafN; i++) {
    const tp = tip[i % tip.length]; const r = Math.cbrt(Math.random()) * 1.6;
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    o.position.set(tp.x * 0.8 + r * Math.sin(ph) * Math.cos(th), tp.y + 0.2 + r * Math.cos(ph) * 0.7, tp.z * 0.8 + r * Math.sin(ph) * Math.sin(th));
    o.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); o.updateMatrix(); leaves.setMatrixAt(i, o.matrix);
    col.setHSL(0.2 + Math.random() * 0.1, 0.6, 0.45 + Math.random() * 0.25); if (Math.random() < 0.12) col.setHSL(0.13, 0.9, 0.62); leaves.setColorAt(i, col);
  }
  tree.add(leaves);
  const blossomTex = T.radial('rgba(255,250,235,1)', 'rgba(255,200,220,0)');
  const blossoms = [];
  for (let i = 0; i < 40; i++) { const tp = tip[i % tip.length]; const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: blossomTex, color: i % 3 ? 0xffe6f0 : 0xfff2b0, blending: THREE.AdditiveBlending, depthWrite: false })); s.position.set(tp.x * 0.8 + (Math.random() - 0.5) * 2.4, tp.y + (Math.random() - 0.3) * 1.4, tp.z * 0.8 + (Math.random() - 0.5) * 2.4); s.scale.setScalar(0.35 + Math.random() * 0.25); tree.add(s); blossoms.push(s); }
  const crown = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,240,170,.55)', 'rgba(255,220,120,0)'), blending: THREE.AdditiveBlending, depthWrite: false })); crown.position.y = 4.2; crown.scale.set(6, 4, 1); tree.add(crown);
  obstacles.push({ x: 0, z: 0, r: 1.3 });
  makeLabel('The Sacred Tree', 'Seed, story, song', new THREE.Vector3(0, 2.9, 1.2), { width: small ? 2.6 : 2.2, always: true, big: true }).table = true;

  // ---------- the golden bee swarm (particles) ----------
  const BEES = small ? 90 : 160;
  const beeGeo = new THREE.BufferGeometry(), bp = new Float32Array(BEES * 3), br = new Float32Array(BEES);
  for (let i = 0; i < BEES; i++) { br[i] = Math.random(); bp[i * 3] = 0; bp[i * 3 + 1] = 0; bp[i * 3 + 2] = 0; }
  beeGeo.setAttribute('position', new THREE.BufferAttribute(bp, 3)); beeGeo.setAttribute('aRnd', new THREE.BufferAttribute(br, 1));
  const beeM = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: { value: 0 }, uPR: { value: ctx.pixelRatio } },
    vertexShader: `uniform float uTime; uniform float uPR; attribute float aRnd; varying float vA;
      void main(){ float t = uTime*(0.25+aRnd*0.35) + aRnd*60.0; float home = floor(aRnd*6.0);
        float ang = home*1.0472; vec3 c = mix(vec3(0.0,3.9,0.0), vec3(sin(ang)*7.5, 1.6, -cos(ang)*7.5), step(0.55, fract(aRnd*7.0)));
        vec3 p = c + vec3(sin(t*1.7)*(1.2+aRnd), sin(t*2.3)*0.6 + cos(t*0.7)*0.4, cos(t*1.3)*(1.2+aRnd));
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; vA = 0.7+0.3*sin(uTime*20.0+aRnd*40.0);
        gl_PointSize = (3.0+aRnd*2.0)*uPR*(8.0/-mv.z); }`,
    fragmentShader: `varying float vA; void main(){ float d=length(gl_PointCoord-0.5); gl_FragColor=vec4(vec3(1.0,0.78,0.25)*1.6, smoothstep(0.5,0.1,d)*vA); }`,
  });
  const swarm = new THREE.Points(beeGeo, beeM); swarm.frustumCulled = false; scene.add(swarm);

  // ---------- the bee companion (orbits the White Lion; dances the secret) ----------
  const bee = new THREE.Group(); scene.add(bee);
  const stripe = document.createElement('canvas'); stripe.width = 64; stripe.height = 8; { const x = stripe.getContext('2d'); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#2a1a08' : '#ffc830'; x.fillRect(i * 8, 0, 8, 8); } }
  const stT = new THREE.CanvasTexture(stripe); stT.colorSpace = THREE.SRGBColorSpace;
  const beeBody = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshStandardMaterial({ map: stT, emissive: 0xffa000, emissiveIntensity: 0.6 })); beeBody.scale.set(1, 1, 1.5); beeBody.rotation.y = Math.PI / 2; bee.add(beeBody);
  const wingM = new THREE.MeshBasicMaterial({ color: glowColor(0xeaffff, 1.4), transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false });
  const wings = [-1, 1].map((s) => { const w = new THREE.Mesh(new THREE.CircleGeometry(0.09, 10), wingM); w.position.set(0.07 * s, 0.07, 0); w.rotation.x = -Math.PI / 2; bee.add(w); return w; });
  const beeGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,210,90,.9)', 'rgba(255,170,40,0)'), blending: THREE.AdditiveBlending, depthWrite: false })); beeGlow.scale.set(0.45, 0.45, 1); beeGlow.material.opacity = 0.6; bee.add(beeGlow);

  // ---------- stations: each labelled with the archive's own shelf name ----------
  const banner = (text, sub, deg, off = 0) => makeLabel(text, sub, W(deg, off, AP - 1.1, 4.7), { width: small ? 3.2 : 2.8, always: true, big: true });
  const by = (id) => (window.ARK_ASHERAH || []).find((d) => d.id === id);
  const at = (deg, off, r = 8.3) => W(deg, off, r);
  const put = (fn, id, deg, off, opts = {}, r) => { const d = by(id); if (!d) return null; const p = at(deg, off, r); return fn(d, p, { face: faceIn(deg, p), ...opts }); };
  const leaf = 0xffd27a;
  // North: The Goddess Webs
  banner('The Goddess Webs', 'Where the old world is remembered', 0);
  put(kit.jar, 'a03', 0, -4.2, { seed: 3, hue: 24, labelY: 2.55 });
  put(kit.lectern, 'a04', 0, -1.7, { seed: 4, labelY: 2.3 });
  put(kit.glowBook, 'a02', 0, 0.9, { seed: 1, color: leaf, cover: 0x14301c, labelY: 3.05 });
  put(kit.lectern, 'a05', 0, 3.6, { seed: 5, leather: true, hue: 32, labelY: 2.5, stamp: '#ffe08a' });
  // North-east: The Kitchen Garden (raised herb beds behind)
  banner('The Kitchen Garden', 'Seed, soil, repair', 60);
  put(kit.glowBook, 'a07', 60, -3.6, { seed: 2, color: 0xb6ff8a, cover: 0x18361a, labelY: 3.0 });
  { const d = by('a08'); const p = at(60, -0.9); const g = new THREE.Group(); g.position.copy(p); g.lookAt(faceIn(60, p).setY(0)); scene.add(g);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.9, 0.7), kit.woodM); cab.position.y = 0.45; g.add(cab);
    const dr = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.5), std({ color: 0x7a4a24, roughness: 0.6 })); dr.position.set(0, 0.62, 0.35); g.add(dr);
    const kn = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), kit.knobM); kn.position.set(0, 0.62, 0.61); g.add(kn);
    const it = kit.doc(d, p, { face: faceIn(60, p), seed: 8, sub: 'research drawer', y: 0.93, labelY: 1.95, stand: at(60, -0.9, 6.7) });
    it.obstacle = 0.55; it.near = 1.3; }
  put(kit.lectern, 'a09', 60, 1.6, { seed: 9, labelY: 2.35 });
  put(kit.jar, 'a10', 60, 4.0, { seed: 10, hue: 30, labelY: 2.6, scale: 1.05 });
  for (const off of [-2.3, 2.8]) { const p = W(60, off, AP - 0.6); const bed = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.7), kit.woodM); bed.position.copy(p).setY(0.25); bed.lookAt(faceIn(60, p).setY(0.25)); scene.add(bed);
    for (let k = 0; k < 7; k++) { const s = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 5), std({ color: 0x6fbf4a, emissive: 0x2a6a10, emissiveIntensity: 0.4 })); s.position.copy(p).add(new THREE.Vector3((Math.random() - 0.5) * 1.1, 0.7, (Math.random() - 0.5) * 0.5)); scene.add(s); } }
  // South-east: The Name Tablet & The Sand Urn
  banner('The Name Tablet · The Sand Urn', 'Names, and the green Sahara', 120);
  { const p = W(120, -2.2, AP - 0.35, 0); const tab = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.4, 0.25), std({ color: 0xd8c8a4, roughness: 0.9 })); tab.position.copy(p).setY(1.9); tab.lookAt(faceIn(120, p).setY(1.9)); scene.add(tab);
    const [c, x] = T.canvas(256, 384); x.fillStyle = '#d8c8a4'; x.fillRect(0, 0, 256, 384); x.strokeStyle = '#6a4a20'; x.lineWidth = 5; x.lineCap = 'round'; for (let i = 0; i < 12; i++) drawGlyph(x, i * 3 + 1, 52 + (i % 3) * 76, 60 + Math.floor(i / 3) * 90, 1.4);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.3), std({ map: T.tex(c), roughness: 0.9 })); face.position.z = 0.13; tab.add(face); }
  put(kit.lectern, 'a17', 120, -2.2, { seed: 17, labelY: 2.35 });
  put(kit.lectern, 'a25', 120, 0, { seed: 25, leather: true, hue: 44, labelY: 2.75, stamp: '#fff0b0' }, 9.0);
  put(kit.jar, 'a18', 120, 2.2, { seed: 18, hue: 38, labelY: 2.6, scale: 1.15, plinthColor: 0xd9bf8a });
  // South: The Doorway (greeter film) and the way back to the Library
  banner('The Doorway', 'Welcome to the Mother’s library', 180, 3.6);
  put(kit.screen, 'a01', 180, 3.6, { H: 2.3, W: 1.3, y: 2.5, labelY: 4.0 }, AP - 0.2);
  // South-west: The Canyon Threshold
  banner('The Canyon Threshold', 'Charts left on the canyon floor', 240);
  put(kit.lectern, 'a23', 240, -2.4, { seed: 23, labelY: 2.35 });
  put(kit.jar, 'a26', 240, 4.3, { seed: 26, hue: 34, labelY: 2.6, scale: 1.0, plinthColor: 0xe0cc9a });
  put(kit.screen, 'a20', 240, 1.3, { H: 2.3, W: 1.3, y: 2.5, labelY: 4.0 }, AP - 0.2);
  // North-west: The Scorched Niche, The Myth Chair, The Groves
  banner('The Scorched Niche · The Myth Chair · The Groves', 'What was burned, and what grew back', 300);
  put(kit.lectern, 'a15', 300, -3.9, { seed: 15, leather: true, hue: 14, labelY: 2.4, stamp: '#ffb070', candle: true });
  put(kit.screen, 'a11', 300, -0.3, { H: 2.3, W: 1.3, y: 2.5, labelY: 4.0 }, AP - 0.2);
  { const p = at(300, 3.4, 8.9); const chair = new THREE.Group(); chair.position.copy(p); chair.lookAt(faceIn(300, p).setY(0)); scene.add(chair);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.8), kit.woodM); seat.position.y = 0.55; chair.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 0.12), kit.woodM); back.position.set(0, 1.2, -0.38); chair.add(back);
    const crest = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 6, 6), gold); crest.position.set(0, 1.7, -0.3); chair.add(crest); }
  put(kit.lectern, 'a24', 300, 3.4, { seed: 24, leather: true, hue: 340, labelY: 2.5, stamp: '#ffd0e0', candle: false }, 7.6);

  // ---------- the secret: Lost Mother, at the roots, shown by the bee ----------
  const sd = by('a00');
  const gp = P(2.9, 140);
  const hidden = sd ? kit.secret(sd, gp, { glyphTex: honeyGlyph(), hintTitle: 'A honey cell at the roots', hintSub: 'The bee is dancing here', color: 0xffc860, coverBg: '#3a4a18', coverInk: '#ffeeb0', small, makeLabel }) : null;
  let beeMode = 'follow', danceT = 0, danceSeen = 0;
  if (hidden) {
    hidden.hint.sprite.visible = false; hidden.it.stand = P(4.4, 140);
    // v0.3: the honey cell wakes only after the bee's dance has been seen (3 s on screen, close enough) or has finished (12 s)
    hidden.ready = () => beeMode === 'dance' && (danceSeen >= 3 || danceT >= 12);
    hidden.notReady = 'Wait. Watch the bee dance first. She is telling us where to look.';
    hidden.name = 'The bee’s waggle dance';
    hidden.fact = sd.fact = 'Honeybees really do dance directions. In the waggle dance, the angle of the straight run from vertical matches the direction of the flowers from the sun, and the length of the run tells the distance. Karl von Frisch decoded it and shared the 1973 Nobel Prize.';
    sd.secretName = hidden.name;
    hidden.hintText = (found) => found < 3 ? 'Open three pieces from the shelves, then watch the bee. She knows where something was lost.' : 'The bee is dancing at the roots of the tree. Watch her dance, then walk me to the honey cell.';
  }

  // ---------- portal back to the central Library ----------
  const back = new URL(location.href); back.searchParams.delete('room'); back.searchParams.set('via', 'portal');
  const portalIt = kit.portal({ id: 'portal-library', kind: 'portal', title: 'Back to the Library', by: 'The Library of the Ark · Center of the Ark', blurb: '', url: back.toString() }, W(180, -0.8, AP - 0.3), { face: faceIn(180, W(180, -0.8, AP - 0.3)), color: 0xffe0a0, makeLabel, href: back.toString() });
  portalIt.stand = W(180, -0.8, AP - 2.0);

  const tmpV = new THREE.Vector3();
  function tick(t, dt, S) {
    beeM.uniforms.uTime.value = t;
    for (let i = 0; i < 6; i++) lanterns[i].rotation.y = Math.sin(t * 0.6 + i) * 0.15;
    leafM.emissiveIntensity = 0.5 + Math.sin(t * 0.9) * 0.12;
    blossoms.forEach((b, i) => { b.material.opacity = 0.7 + Math.sin(t * 1.5 + i) * 0.3; });
    crown.material.opacity = 0.8 + Math.sin(t * 0.7) * 0.2;
    treeLight.intensity = 26 + Math.sin(t * 1.1) * 3;
    // bee companion
    const lp = S.lion.root.position;
    if (hidden && !hidden.revealed && S.found >= 3) { if (beeMode !== 'dance') { beeMode = 'dance'; danceT = 0; hidden.hint.sprite.visible = true; S.onDance && S.onDance(); } }
    else if (hidden && hidden.revealed) beeMode = 'follow';
    if (beeMode === 'dance') {
      danceT += dt;
      if (S.camera) { tmpV.set(gp.x, 1.0, gp.z); const dc = S.camera.position.distanceTo(tmpV); tmpV.project(S.camera); if (Math.abs(tmpV.x) < 0.92 && Math.abs(tmpV.y) < 0.92 && tmpV.z < 1 && dc < 9.5) danceSeen += dt; }
      // waggle dance: a figure-eight with a waggling straight run, over the honey cell
      const ph = (danceT * 0.9) % 2, side = ph < 1 ? 1 : -1, u = ph % 1;
      const loop = u < 0.5 ? (u / 0.5) * Math.PI : Math.PI;
      tmpV.set(gp.x + side * 0.35 * Math.sin(loop) * (u < 0.5 ? 1 : 0), 1.0 + Math.sin(danceT * 3) * 0.05, gp.z + (u < 0.5 ? 0.35 * Math.cos(loop) : 0.35 - (u - 0.5) * 1.4));
      if (u >= 0.5) tmpV.x += Math.sin(danceT * 40) * 0.07;
      bee.position.lerp(tmpV, Math.min(1, dt * 6));
      hidden.glyph.material.opacity = 0.55 + Math.sin(t * 5) * 0.25;
    } else {
      tmpV.set(lp.x + Math.cos(t * 1.6) * 0.9, 2.1 + Math.sin(t * 2.7) * 0.2, lp.z + Math.sin(t * 1.6) * 0.9);
      bee.position.lerp(tmpV, Math.min(1, dt * 3));
    }
    const v = tmpV.sub(bee.position); if (v.lengthSq() > 1e-4) bee.rotation.y = Math.atan2(v.x, v.z);
    wings.forEach((w, i) => { w.rotation.z = (i ? -1 : 1) * (0.4 + Math.sin(t * 60) * 0.5); });
  }

  const say = {
    name: 'White Lion',
    welcome: 'Welcome, reader. I’m the White Lion. Something on the shelves has gone missing. Help me find it.',
    lines: ['The bee remembers every flower.', 'The oldest library is a hive.', 'Seed, story, song. That is what she kept.', 'Something on the shelves has gone missing. Help me find it.', 'Every title here is real. Go on, touch one.'],
    first: 'One found. The groves are waking up.',
    third: 'Look, the bee is dancing at the roots of the tree. Follow her.',
    reveal: 'You found what was lost.',
    all: 'Every shelf, found. The Mother remembers you.',
    idle: 'Pick one. The clay vessels are older than they look.',
    walk: 'The White Lion is walking you to',
    hint: 'the White Lion',
  };
  const camMaxY = (x, z) => { const d = Math.hypot(x, z); return d > 4.8 ? 99 : 2.15 + THREE.MathUtils.smoothstep(d, 3.8, 4.8) * 3; };
  return { tick, hidden, say, camMaxY, maxR: 8.2, camR: 9.3, lionStart: new THREE.Vector3(0, 0, 5.0), exposure: 0.72, bloomStrength: 0.45, bloomThreshold: 0.95, portals: [portalIt] };
}
