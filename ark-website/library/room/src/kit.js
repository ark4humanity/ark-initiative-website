import * as THREE from 'three';
import * as T from './textures.js';

// A kit of openable objects shared by every library (the central Library and the thirteen pillar libraries).
// Each factory builds one object at a position, faces it toward `face` (default: room centre) and registers it.
export function createKit(ctx) {
  const { scene, register, std, glowColor } = ctx;
  const place = (pos, face) => { const g = new THREE.Group(); g.position.copy(pos); const f = face || new THREE.Vector3(0, 0, 0); g.lookAt(f.x, pos.y, f.z); scene.add(g); return g; };
  const woodM = std({ color: 0x5a3418, roughness: 0.7 });
  const knobM = std({ color: 0xc9a043, metalness: 0.7, roughness: 0.35 });
  const trimM = std({ color: 0xd7a847, metalness: 0.85, roughness: 0.3, emissive: 0x4a2c05, emissiveIntensity: 0.4 });

  // ----- clay jar: lid lifts, papyrus rises and unrolls -----
  const jarProfile = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; const r = 0.12 + Math.sin(Math.min(1, t * 1.15) * Math.PI) * 0.36 + (t > 0.85 ? (t - 0.85) * 0.6 : 0); jarProfile.push(new THREE.Vector2(Math.max(0.1, r), t * 1.25)); }
  const jarGeo = new THREE.LatheGeometry(jarProfile, 22);
  const lidGeo = new THREE.LatheGeometry([new THREE.Vector2(0.0, 0.1), new THREE.Vector2(0.2, 0.06), new THREE.Vector2(0.23, 0.0), new THREE.Vector2(0.2, -0.03)], 18);
  const knobGeo = new THREE.SphereGeometry(0.05, 10, 8);
  function jar(d, pos, { face, seed = 1, hue = 18, scale = 1, labelY = 2.6, plinthColor = 0x9b7650, glow = 'rgba(255,190,100,.9)' } = {}) {
    const g = place(pos, face);
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.4, 16), std({ color: plinthColor, roughness: 0.85 })); plinth.position.y = 0.2; g.add(plinth);
    const s = scale;
    const jm = std({ map: T.terracotta(seed, hue), roughness: 0.75, emissive: 0x3a1204, emissiveIntensity: 0.25 });
    const body = new THREE.Mesh(jarGeo, jm); body.position.y = 0.4; body.scale.setScalar(s); g.add(body);
    const lid = new THREE.Group(); lid.position.y = 0.4 + 1.25 * s; g.add(lid);
    lid.add(new THREE.Mesh(lidGeo, jm)); const kn = new THREE.Mesh(knobGeo, jm); kn.position.y = 0.12; lid.add(kn);
    const mouthGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial(glow, 'rgba(255,140,40,0)'), blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.35 }));
    mouthGlow.position.y = lid.position.y + 0.05; mouthGlow.scale.set(0.9, 0.9, 1); g.add(mouthGlow);
    const pap = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), new THREE.MeshStandardMaterial({ map: T.parchment(d.title, '', { w: 512, h: 640, seed: seed + 20 }), side: THREE.DoubleSide, emissive: 0x6a4a20, emissiveIntensity: 0.4, roughness: 0.9 }));
    pap.position.set(0, lid.position.y + 0.6, 0.1); pap.scale.set(0.001, 0.001, 1); pap.visible = false; g.add(pap);
    const it = register(d, g, [1.1, 2.1, 1.1], labelY, { standDist: 1.75 });
    it.animate = (k) => {
      lid.position.y = 0.4 + 1.25 * s + k * 0.55; lid.rotation.z = k * 0.7; lid.position.x = k * 0.25;
      pap.visible = k > 0.05; const u = THREE.MathUtils.smoothstep(k, 0.3, 1);
      pap.scale.set(Math.max(0.001, u), Math.max(0.001, Math.min(1, k * 1.6)), 1); pap.position.y = lid.position.y - 0.1 + u * 0.55;
      mouthGlow.material.opacity = 0.35 + k * 0.9; mouthGlow.scale.setScalar(0.9 + k * 1.2);
    };
    it.idle = (t) => { if (it.anim === 0) mouthGlow.material.opacity = 0.3 + Math.sin(t * 2 + seed) * 0.12; };
    it.color = 0xffb060; it.obstacle = 0.55;
    return it;
  }

  // ----- glowing future book with glowing spine letters -----
  function glowBook(d, pos, { face, seed = 0, color = 0x9ff4ff, cover = 0x0b1633, labelY = 2.95 } = {}) {
    const g = place(pos, face);
    const futM = std({ color: cover, metalness: 0.7, roughness: 0.28, emissive: 0x0a2a55, emissiveIntensity: 0.5 });
    const pageM = std({ color: 0xdff6ff, emissive: 0x9fe8ff, emissiveIntensity: 0.6, roughness: 0.5 });
    const crystalM = std({ color: 0x7fdcff, emissive: 0x2aa8ff, emissiveIntensity: 1.1, roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.85, flatShading: true });
    const ped = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), crystalM); ped.position.y = 0.55; ped.scale.set(1, 1.6, 1); g.add(ped);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.015, 6, 40), new THREE.MeshBasicMaterial({ color: glowColor(color, 2.4) })); ring.rotation.x = Math.PI / 2; ring.position.y = 1.15; g.add(ring);
    const book = new THREE.Group(); book.position.y = 1.75; book.scale.setScalar(1.25); g.add(book);
    const W = 0.62, H = 0.9, D = 0.16;
    const hex = '#' + new THREE.Color(color).getHexString();
    const spineTex = T.spineText(d.title, { color: hex });
    const spine = new THREE.Mesh(new THREE.PlaneGeometry(D, H), new THREE.MeshStandardMaterial({ color: cover, emissive: 0xffffff, emissiveMap: spineTex, emissiveIntensity: 2.4, map: spineTex, roughness: 0.3 }));
    spine.position.set(0, 0, W / 2 + 0.002); book.add(spine);
    book.add(new THREE.Mesh(new THREE.BoxGeometry(D * 0.8, H * 0.94, W * 0.96), pageM));
    const backC = new THREE.Mesh(new THREE.BoxGeometry(0.02, H, W), futM); backC.position.x = -D / 2; book.add(backC);
    const coverPivot = new THREE.Group(); coverPivot.position.set(D / 2, 0, W / 2); book.add(coverPivot);
    const cv = new THREE.Mesh(new THREE.BoxGeometry(0.02, H, W), futM); cv.position.set(0, 0, -W / 2); coverPivot.add(cv);
    const emblem = new THREE.Mesh(new THREE.RingGeometry(0.09, 0.12, 24), new THREE.MeshBasicMaterial({ color: glowColor(color, 2.6), side: THREE.DoubleSide }));
    emblem.position.set(0.012, 0.1, -W / 2); emblem.rotation.y = Math.PI / 2; coverPivot.add(emblem);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(120,230,255,.7)', 'rgba(60,160,255,0)'), color, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55 }));
    glow.scale.set(1.8, 1.8, 1); book.add(glow);
    book.rotation.y = -0.5;
    const it = register(d, g, [1.0, 2.5, 1.0], labelY, { standDist: 1.7 });
    it.animate = (k) => { coverPivot.rotation.y = k * 1.9; book.rotation.y = -0.5 + k * 0.5; glow.material.opacity = 0.55 + k; };
    it.idle = (t) => { book.position.y = 1.75 + Math.sin(t * 1.2 + seed) * 0.07; if (it.anim === 0) book.rotation.y = -0.5 + Math.sin(t * 0.5 + seed) * 0.35; ring.rotation.z = t * 0.8; ped.rotation.y = t * 0.4; };
    it.color = color; it.obstacle = 0.55;
    return it;
  }

  // ----- lectern with an open scroll, or an old leather book on a stand -----
  function lectern(d, pos, { face, seed = 0, leather = false, hue = 20, labelY = 2.3, candle = true, stamp = '#f0cf79' } = {}) {
    const g = place(pos, face);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.05, 8), woodM); post.position.y = 0.52; g.add(post);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.08, 12), woodM); foot.position.y = 0.04; g.add(foot);
    const top = new THREE.Group(); top.position.set(0, 1.12, 0); top.rotation.x = -0.75; g.add(top);
    top.add(new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.62), woodM));
    let fl = null;
    if (candle) {
      fl = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,210,130,1)', 'rgba(255,150,50,0)'), blending: THREE.AdditiveBlending, depthWrite: false }));
      fl.position.set(0.52, 1.35, -0.05); fl.scale.set(0.35, 0.5, 1); g.add(fl);
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 6), std({ color: 0xf4ead0, emissive: 0x554020, emissiveIntensity: 0.3 })); stick.position.set(0.52, 1.18, -0.05); g.add(stick);
    }
    let it;
    if (!leather) {
      const pm = new THREE.MeshStandardMaterial({ map: T.parchment(d.title, '', { w: 768, h: 512, seed: 40 + seed }), emissive: 0x5a4020, emissiveIntensity: 0.35, roughness: 0.9, side: THREE.DoubleSide });
      const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 0.52), pm); sheet.rotation.x = -Math.PI / 2; sheet.position.y = 0.035; top.add(sheet);
      const rollG = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 10); rollG.rotateX(Math.PI / 2);
      const parchM = std({ color: 0xe8d3a2, roughness: 0.9 });
      for (const sx of [-1, 1]) {
        const r = new THREE.Mesh(rollG, parchM); r.position.set(sx * 0.41, 0.07, 0); top.add(r);
        for (const sz of [-1, 1]) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), knobM); k.position.set(sx * 0.41, 0.07, sz * 0.33); top.add(k); }
      }
      it = register(d, g, [1.0, 1.9, 1.0], labelY, { standDist: 1.6 });
      it.animate = (k) => { top.rotation.x = -0.75 + k * 0.55; top.position.y = 1.12 + k * 0.35; sheet.scale.set(1 + k * 0.25, 1 + k * 0.25, 1); pm.emissiveIntensity = 0.35 + k * 1.2; };
      it.color = 0xffe0a0;
    } else {
      const lm = std({ map: T.leather(seed + 3, hue, 22), roughness: 0.7 });
      const coverT = T.coverText(d.title, { bg: `hsl(${hue},45%,20%)`, seed: seed + 9, color: stamp });
      const bk = new THREE.Group(); bk.position.y = 0.09; top.add(bk);
      bk.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.68), std({ color: 0xefe0bc, roughness: 0.9 })));
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.025, 0.72), lm); back.position.y = -0.06; bk.add(back);
      const pivot = new THREE.Group(); pivot.position.set(-0.27, 0.06, 0); bk.add(pivot);
      const coverMs = [lm, lm, std({ map: coverT, roughness: 0.6, emissive: 0xffffff, emissiveMap: coverT, emissiveIntensity: 0.35 }), lm, lm, lm];
      const cv = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.025, 0.72), coverMs); cv.position.set(0.27, 0, 0); pivot.add(cv);
      bk.rotation.y = -Math.PI / 2;
      it = register(d, g, [1.0, 1.9, 1.0], labelY, { standDist: 1.6 });
      it.animate = (k) => { pivot.rotation.z = k * 2.6; top.position.y = 1.12 + k * 0.25; };
      it.color = 0xf0cf79;
    }
    it.idle = (t) => { if (fl) fl.scale.set(0.32 + Math.sin(t * 13 + seed) * 0.03, 0.48 + Math.sin(t * 9 + seed * 2) * 0.05, 1); };
    it.obstacle = 0.55;
    return it;
  }

  // ----- a document lying on a surface (table report, research drawer) -----
  function doc(d, pos, { face, seed = 0, sub = 'crew report', y = 0.96, stand, labelY = 1.8, rot = 0 } = {}) {
    const g = place(pos, face);
    const pm = new THREE.MeshStandardMaterial({ map: T.parchment(d.title, sub, { w: 640, h: 800, seed: 60 + seed }), emissive: 0x6a4a20, emissiveIntensity: 0.35, roughness: 0.9, side: THREE.DoubleSide });
    const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.65), pm); sheet.rotation.x = -Math.PI / 2; sheet.rotation.z = Math.PI + rot; sheet.position.y = y; g.add(sheet);
    const it = register(d, g, [0.9, 1.3, 0.9], labelY, { standDist: -1.7, hitY: y - 0.7 });
    if (stand) it.stand = stand; it.near = 1.0;
    it.animate = (k) => { sheet.position.y = y + k * 0.55; sheet.rotation.x = -Math.PI / 2 + k * 1.0; pm.emissiveIntensity = 0.35 + k; };
    it.color = 0xffe0a0; it.idle = () => {}; it.obstacle = 0;
    return it;
  }

  // ----- framed film screen showing the real poster; video loads only on play -----
  const loader = new THREE.TextureLoader();
  function screen(d, pos, { face, H = 2.5, W = 1.42, y = 2.6, labelY = 4.25, frame = 0xc9a043, standDist = 2.6 } = {}) {
    const g = place(pos, face);
    const frameM = std({ color: frame, metalness: 0.85, roughness: 0.32, emissive: 0x3a2405, emissiveIntensity: 0.5 });
    const tx = loader.load(d.poster); tx.colorSpace = THREE.SRGBColorSpace;
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshStandardMaterial({ map: tx, emissive: 0xffffff, emissiveMap: tx, emissiveIntensity: 0.55, roughness: 0.4 }));
    scr.position.set(0, y, 0.12); g.add(scr);
    const fr = new THREE.Mesh(new THREE.BoxGeometry(W + 0.24, H + 0.24, 0.12), frameM); fr.position.set(0, y, 0.04); g.add(fr);
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    x.fillStyle = 'rgba(255,245,215,.92)'; x.beginPath(); x.arc(64, 64, 56, 0, 7); x.fill(); x.fillStyle = '#3a2708'; x.beginPath(); x.moveTo(50, 36); x.lineTo(94, 64); x.lineTo(50, 92); x.fill();
    const pt = new THREE.CanvasTexture(c); pt.colorSpace = THREE.SRGBColorSpace;
    const play = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), new THREE.MeshBasicMaterial({ map: pt, transparent: true })); play.position.set(0, y, 0.14); g.add(play);
    const it = register(d, g, [W + 0.3, H + 0.7, 1.0], labelY, { standDist, hitY: y - H / 2 - 0.35 });
    it.animate = (k) => { scr.material.emissiveIntensity = 0.55 + k * 1.2; play.scale.setScalar(1 + k * 0.4); };
    const ph = Math.random() * 6;
    it.idle = (t) => { if (it.anim === 0) play.scale.setScalar(1 + Math.sin(t * 2.4 + ph) * 0.06); };
    it.color = 0xffe7b0; it.near = 3.0; it.obstacle = 0;
    return it;
  }

  // ----- a secret: glyph on the floor; the guardian wakes it and a volume rises in a beam -----
  function secret(d, pos, { glyphTex, hintTitle, hintSub, color = 0xffd890, coverBg = '#5a3a08', coverInk = '#fff1c0', small = false, makeLabel } = {}) {
    const glyph = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.3), new THREE.MeshBasicMaterial({ map: glyphTex || T.pawPrint(), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, color: glowColor(0xffffff, 1.4) }));
    glyph.rotation.x = -Math.PI / 2; glyph.position.set(pos.x, 0.03, pos.z); scene.add(glyph);
    const hint = makeLabel(hintTitle, hintSub, new THREE.Vector3(pos.x, 1.2, pos.z), { width: small ? 1.7 : 1.45 });
    const g = place(pos);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 3.5, 24, 1, true), new THREE.MeshBasicMaterial({ color: glowColor(color, 0.5), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    beam.position.y = 1.75; g.add(beam);
    const gm = std({ color: 0xc9a043, metalness: 0.6, roughness: 0.35, emissive: color, emissiveIntensity: 0.9 });
    const coverT = T.coverText(d.title, { bg: coverBg, color: coverInk, seed: 77 });
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.1, 0.16), [gm, gm, gm, gm, std({ map: coverT, emissive: 0xffffff, emissiveMap: coverT, emissiveIntensity: 0.8 }), gm]);
    book.position.y = -1; book.visible = false; g.add(book);
    const bglow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.radial('rgba(255,220,140,.9)', 'rgba(255,170,60,0)'), color, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 })); bglow.scale.set(2.6, 2.6, 1); g.add(bglow);
    const it = register(d, g, [1.2, 3.2, 1.2], 3.75, { standDist: 1.4 });
    it.label.sprite.visible = false; it.locked = true; it.color = color; it.obstacle = 0;
    it.animate = (k) => { book.rotation.y = k * Math.PI * 2; };
    const h = { it, glyph, hint, beam, book, pos: pos.clone(), revealed: false, rise: 0 };
    it.idle = (t) => {
      if (!h.revealed) { glyph.material.opacity = 0.28 + Math.sin(t * 2.2) * 0.12; return; }
      h.rise = Math.min(1, h.rise + (it._dt || 0.016) / 1.4);
      const e = THREE.MathUtils.smoothstep(h.rise, 0, 1);
      book.visible = true; book.position.y = -0.6 + e * 3.1 + Math.sin(t * 1.4) * 0.05; bglow.position.y = book.position.y; bglow.material.opacity = e * 0.8;
      if (it.anim === 0) book.rotation.y = Math.sin(t * 0.8) * 0.4;
      beam.material.opacity = 0.5 * e + Math.sin(t * 3) * 0.05; glyph.material.opacity = 0.9;
    };
    return h;
  }

  // ----- a doorway to another library (not counted as a find) -----
  function portal(d, pos, { face, color = 0x9fe8a0, label, sub, small = false, makeLabel, href } = {}) {
    const g = place(pos, face);
    const archM = std({ color: 0xe8d9b0, roughness: 0.5, metalness: 0.2, emissive: 0x3a2c10, emissiveIntensity: 0.3 });
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.14, 8, 32, Math.PI), archM); arch.position.y = 2.6; g.add(arch);
    for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.6, 0.28), archM); p.position.set(sx * 1.25, 1.3, 0); g.add(p); }
    const veil = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 3.8), new THREE.MeshBasicMaterial({ map: T.radial('rgba(255,255,255,1)', 'rgba(255,255,255,0.05)', 256), color: glowColor(color, 1.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    veil.position.y = 1.9; g.add(veil);
    const it = register(d, g, [2.4, 3.8, 1.0], 4.4, { standDist: 1.6, isPortal: true });
    it.portal = href; it.color = color; it.obstacle = 0; it.near = 1.9;
    it.animate = (k) => { veil.scale.setScalar(1 + k * 0.3); };
    it.idle = (t) => { veil.material.opacity = 0.75 + Math.sin(t * 2) * 0.2; };
    return it;
  }

  return { jar, glowBook, lectern, doc, screen, secret, portal, woodM, trimM, knobM };
}
