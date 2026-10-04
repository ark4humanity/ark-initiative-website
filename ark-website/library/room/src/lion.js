import * as THREE from 'three';
import { radial } from './textures.js';

// HALO: a glowing guardian lion, built procedurally (no model files).
// v0.3: smooth shading, sculpted forms, a flowing layered mane of tapered strands, a fresnel rim glow and a bigger aura.
// opts lets each pillar library dress its own guardian (e.g. Asherah's White Lion) with the same body and animation.
function rimMaterial(color, strength = 1) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: new THREE.Color(color) }, uI: { value: strength } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
    fragmentShader: 'uniform vec3 uColor; uniform float uI; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 2.4); gl_FragColor = vec4(uColor*f*uI, f*uI); }',
  });
}
// one tapered strand, base at y=0 and tip at y=1, curling back along -z
function strandGeometry(radial = 5, seg = 6) {
  const g = new THREE.CylinderGeometry(0.0, 1, 1, radial, seg, true); g.translate(0, 0.5, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); const w = 0.07 * (1 - y * 0.85); p.setX(i, p.getX(i) * w); p.setZ(i, p.getZ(i) * w * 0.7 - 0.42 * y * y); p.setX(i, p.getX(i) + Math.sin(y * 3.2) * 0.04 * y); }
  g.computeVertexNormals(); return g;
}
export function buildLion(opts = {}) {
  const o = Object.assign({ name: 'HALO', body: 0xe9b457, bodyE: 0x6a3a08, cream: 0xf8e2b0, creamE: 0x6a4a18, mane: 0xd9782a, maneE: 0xff7a1a, maneTip: 0xffd27a, eye: [0.75, 2.6, 3.0], halo: [3.2, 2.5, 1.2], tuft: [1.7, 0.95, 0.35], haloSides: 64, aura: 'rgba(255,200,110,.3)', light: 0xffc27a, rim: 0xffc870 }, opts);
  if (opts.mane && !opts.maneTip) o.maneTip = new THREE.Color(opts.mane).lerp(new THREE.Color(0xffffff), 0.45).getHex();
  const root = new THREE.Group(); root.name = o.name;
  const gold = new THREE.MeshStandardMaterial({ color: o.body, emissive: o.bodyE, emissiveIntensity: 0.3, roughness: 0.42, metalness: 0.18 });
  const cream = new THREE.MeshStandardMaterial({ color: o.cream, emissive: o.creamE, emissiveIntensity: 0.4, roughness: 0.55 });
  const maneM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: o.maneE, emissiveIntensity: 0.3, roughness: 0.4, metalness: 0.1, side: THREE.DoubleSide });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2e1a0c, roughness: 0.45 });
  const eyeM = new THREE.MeshBasicMaterial({ color: new THREE.Color(...o.eye) });
  const haloM = new THREE.MeshBasicMaterial({ color: new THREE.Color(...o.halo) });
  const tuftM = new THREE.MeshBasicMaterial({ color: new THREE.Color(...o.tuft) });
  const rim = rimMaterial(o.rim, o.rimI || 1.1);
  const S = (r, w = 20, h = 14) => new THREE.SphereGeometry(r, w, h);
  const add = (parent, geo, mat, pos, scale, withRim = false) => {
    const m = new THREE.Mesh(geo, mat); if (pos) m.position.set(...pos); if (scale) m.scale.set(...scale); parent.add(m);
    if (withRim) { const r = new THREE.Mesh(geo, rim); r.scale.setScalar(1.08); m.add(r); }
    return m;
  };

  // ----- body: barrel, deep chest, shoulders and haunches -----
  const torso = new THREE.Group(); torso.position.y = 0.78; root.add(torso);
  add(torso, S(0.5, 26, 16), gold, [0, 0, -0.02], [0.6, 0.6, 1.32], true);
  add(torso, S(0.42), gold, [0, 0.1, 0.42], [1, 1.02, 0.95], true);
  for (const s of [-1, 1]) { add(torso, S(0.26), gold, [0.2 * s, 0.02, 0.44], [0.8, 1.1, 1]); add(torso, S(0.25), gold, [0.13 * s, 0.04, -0.4], [0.85, 1.05, 1.1]); }
  add(torso, S(0.3), cream, [0, -0.17, 0.2], [0.95, 0.55, 1.55]);

  // ----- head -----
  const neck = new THREE.Group(); neck.position.set(0, 0.34, 0.66); torso.add(neck);
  add(neck, new THREE.CapsuleGeometry(0.2, 0.2, 6, 16), gold, [0, -0.05, -0.08], [1, 1, 1.1]).rotation.x = 0.9;
  const head = new THREE.Group(); head.position.set(0, 0.16, 0.16); neck.add(head);
  add(head, S(0.27), gold, [0, 0.02, 0], [1, 0.93, 1.08], true);
  add(head, S(0.2), gold, [0, 0.09, 0.1], [1.05, 0.55, 1]); // brow
  for (const s of [-1, 1]) add(head, S(0.12), cream, [0.095 * s, -0.07, 0.2], [1, 0.85, 1]); // whisker pads
  add(head, S(0.14), cream, [0, -0.04, 0.26], [0.9, 0.7, 0.95]);
  add(head, S(0.06), dark, [0, 0.01, 0.39], [1.35, 0.75, 0.9]);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.13, 0.14); head.add(jaw);
  add(jaw, S(0.11), cream, [0, -0.02, 0.12], [1.05, 0.5, 1.25]);
  add(jaw, S(0.075, 12, 8), new THREE.MeshBasicMaterial({ color: 0x5a1a10 }), [0, 0.01, 0.12], [1, 0.35, 1]);
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = add(head, S(0.04, 14, 10), eyeM, [0.11 * s, 0.07, 0.23], [1.35, 0.8, 0.8]); e.rotation.z = -0.25 * s; eyes.push(e);
    const eg = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial('rgba(255,255,255,.9)', 'rgba(255,255,255,0)'), color: new THREE.Color(...o.eye).multiplyScalar(0.4), blending: THREE.AdditiveBlending, depthWrite: false })); eg.scale.set(0.14, 0.14, 1); e.add(eg);
    add(head, S(0.05, 12, 8), dark, [0.11 * s, 0.125, 0.235], [1.3, 0.35, 0.6]).rotation.z = 0.2 * s;
  }
  const ears = [];
  for (const s of [-1, 1]) {
    const ear = new THREE.Group(); ear.position.set(0.17 * s, 0.22, -0.03); head.add(ear);
    add(ear, S(0.075, 14, 10), gold, [0, 0.05, 0], [1, 1, 0.45]); add(ear, S(0.05, 12, 8), cream, [0, 0.045, 0.02], [1, 1, 0.3]); ears.push(ear);
  }

  // ----- the mane: four layers of tapered, curling strands (instanced), plus a chest ruff -----
  const mane = new THREE.Group(); mane.position.set(0, -0.02, -0.04); head.add(mane);
  const sg = strandGeometry(5, 6);
  const layers = [];
  const cIn = new THREE.Color(o.mane), cOut = new THREE.Color(o.maneTip), cc = new THREE.Color();
  const mx = new THREE.Matrix4(), X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), fwd = new THREE.Vector3(0, 0, 1), sc = new THREE.Vector3(), q = new THREE.Quaternion(), pos = new THREE.Vector3();
  const LAYERS = [{ n: 26, r: 0.2, back: 0.35, len: 0.34, z: 0.02 }, { n: 32, r: 0.26, back: 0.6, len: 0.46, z: -0.06 }, { n: 36, r: 0.3, back: 0.9, len: 0.58, z: -0.14 }, { n: 30, r: 0.3, back: 1.25, len: 0.66, z: -0.24 }];
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  LAYERS.forEach((L, li) => {
    const im = new THREE.InstancedMesh(sg, maneM, L.n); const grp = new THREE.Group(); grp.add(im); mane.add(grp);
    for (let i = 0; i < L.n; i++) {
      const a = (i + (li % 2) * 0.5) / L.n * Math.PI * 2;
      const lower = Math.sin(a) < -0.2 ? 1.25 : 1; // longer, heavier strands under the chin and down the chest
      Y.set(Math.cos(a), Math.sin(a) * 0.95 - (lower > 1 ? 0.25 : 0), -L.back).normalize();
      Z.copy(fwd).addScaledVector(Y, -fwd.dot(Y)).normalize(); X.crossVectors(Y, Z);
      mx.makeBasis(X, Y, Z); q.setFromRotationMatrix(mx);
      const len = L.len * lower * (0.85 + rnd() * 0.3), w = 1 + rnd() * 0.5 + li * 0.15;
      pos.set(Math.cos(a) * L.r * 0.8, Math.sin(a) * L.r * 0.8, L.z); sc.set(w, len, w);
      mx.compose(pos, q, sc); im.setMatrixAt(i, mx);
      cc.copy(cIn).lerp(cOut, li / 3 * 0.8 + rnd() * 0.2); im.setColorAt(i, cc);
    }
    layers.push(grp);
  });
  // soft glow behind the mane
  const maneGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial('rgba(255,255,255,.55)', 'rgba(255,255,255,0)'), color: new THREE.Color(o.maneE), blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55 }));
  maneGlow.scale.set(1.25, 1.25, 1); maneGlow.position.set(0, 0, -0.25); mane.add(maneGlow);

  // ----- halo: a double ring with a glow -----
  const halo = new THREE.Group(); halo.position.set(0, 0.52, -0.05); head.add(halo);
  const hr = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.02, 10, o.haloSides), haloM); hr.rotation.x = Math.PI / 2; halo.add(hr);
  const hr2 = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.007, 6, o.haloSides), haloM); hr2.rotation.x = Math.PI / 2; halo.add(hr2);
  const hg = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial('rgba(255,255,255,.7)', 'rgba(255,255,255,0)'), color: new THREE.Color(...o.halo).multiplyScalar(0.35), blending: THREE.AdditiveBlending, depthWrite: false })); hg.scale.set(0.9, 0.5, 1); halo.add(hg);

  // ----- legs -----
  const legs = [];
  const legG = new THREE.CapsuleGeometry(0.085, 0.44, 6, 14); legG.translate(0, -0.3, 0);
  const pawG = S(0.1, 16, 10);
  for (const [x, z, front] of [[-0.22, 0.44, 1], [0.22, 0.44, 1], [-0.21, -0.44, 0], [0.21, -0.44, 0]]) {
    const hip = new THREE.Group(); hip.position.set(x, -0.12, z); torso.add(hip);
    add(hip, legG, gold, null, [front ? 1.05 : 1.15, 1, front ? 1.05 : 1.2]);
    add(hip, pawG, cream, [0, -0.62, 0.05], [1, 0.55, 1.3]);
    legs.push({ hip, front, side: x > 0 ? 1 : -1 });
  }
  // ----- tail with a tuft of strands -----
  const tail = []; let parent;
  const segG = new THREE.CapsuleGeometry(0.032, 0.16, 4, 10); segG.translate(0, 0.1, 0);
  const base = new THREE.Group(); base.position.set(0, 0.12, -0.6); base.rotation.x = -2.55; torso.add(base); parent = base;
  for (let i = 0; i < 6; i++) { const g = new THREE.Group(); if (i) g.position.y = 0.19; parent.add(g); g.add(new THREE.Mesh(segG, gold)); tail.push(g); parent = g; }
  const tuft = new THREE.Group(); tuft.position.y = 0.2; parent.add(tuft);
  add(tuft, S(0.07, 12, 8), tuftM, [0, 0.03, 0]);
  const tim = new THREE.InstancedMesh(sg, maneM, 12);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; Y.set(Math.cos(a) * 0.5, 1, Math.sin(a) * 0.5).normalize(); Z.set(0, 0, 1).addScaledVector(Y, -Y.z).normalize(); X.crossVectors(Y, Z); mx.makeBasis(X, Y, Z); q.setFromRotationMatrix(mx); mx.compose(pos.set(0, 0, 0), q, sc.set(1.3, 0.24, 1.3)); tim.setMatrixAt(i, mx); tim.setColorAt(i, cc.copy(cIn).lerp(cOut, 0.5)); }
  tuft.add(tim);

  // ----- aura, ground glow and blob shadow -----
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial(o.aura, 'rgba(255,160,60,0)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  aura.scale.set(4.2, 4.2, 1); aura.position.y = 1.0; root.add(aura);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.1), new THREE.MeshBasicMaterial({ map: radial('rgba(0,0,0,.5)', 'rgba(0,0,0,0)'), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.015; root.add(shadow);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({ map: radial(o.aura.replace(/[\d.]+\)$/, '.35)'), 'rgba(255,200,120,0)'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = 0.02; root.add(ground);
  const light = new THREE.PointLight(o.light, 2.2, 4.5, 1.8); light.position.set(0, 1.5, 1.4); root.add(light);

  const L = {
    root, torso, neck, head, jaw, ears, legs, tail, halo, mane, maneM, layers, maneGlow, eyes, aura, rim, rimI: o.rimI || 1.1,
    phase: 0, speed: 0, idle: 0, sit: 0, yawn: 0, roar: 0, hop: 0, lookYaw: 0, blink: 0, nextBlink: 2, nextYawn: 9,
  };
  L.update = (dt, t, lookAt) => animate(L, dt, t, lookAt);
  return L;
}

function animate(L, dt, t, lookAt) {
  const moving = L.speed > 0.15;
  if (moving) { L.idle = 0; L.phase += dt * (4 + L.speed * 2.6); } else L.idle += dt;
  const wantSit = L.idle > 7 ? 1 : 0;
  L.sit += (wantSit - L.sit) * Math.min(1, dt * 2.5);
  const w = Math.min(1, L.speed / 3);
  const c = Math.cos(L.phase);
  for (const lg of L.legs) {
    const ph = (lg.front ? 0 : Math.PI) + (lg.side > 0 ? Math.PI : 0);
    let rx = Math.sin(L.phase + ph) * 0.65 * w;
    if (!lg.front) rx += -L.sit * 1.25; else rx += L.sit * 0.12;
    lg.hip.rotation.x = rx;
  }
  L.torso.position.y = 0.78 + Math.abs(c) * 0.06 * w - L.sit * 0.22 + Math.sin(t * 2) * 0.008 + L.hop;
  L.torso.rotation.x = -L.sit * 0.42 + Math.sin(L.phase * 2) * 0.03 * w;
  L.torso.position.z = -L.sit * 0.12;
  L.torso.scale.set(1 + Math.sin(t * 2.1) * 0.012, 1 + Math.sin(t * 2.1) * 0.018, 1);
  let target = 0;
  if (lookAt) target = THREE.MathUtils.clamp(lookAt, -0.9, 0.9);
  else if (!moving) target = Math.sin(t * 0.35) * 0.5;
  L.lookYaw += (target - L.lookYaw) * Math.min(1, dt * 3);
  L.neck.rotation.y = L.lookYaw;
  L.nextYawn -= dt;
  if (L.sit > 0.8 && L.nextYawn < 0) { L.yawn = 1.6; L.nextYawn = 12 + Math.random() * 8; }
  L.yawn = Math.max(0, L.yawn - dt);
  L.roar = Math.max(0, L.roar - dt);
  const y = L.yawn > 0 ? Math.sin((1.6 - L.yawn) / 1.6 * Math.PI) : 0;
  const r = L.roar > 0 ? Math.sin((1.2 - L.roar) / 1.2 * Math.PI) : 0;
  L.jaw.rotation.x = Math.max(y * 0.6, r * 0.5);
  L.neck.rotation.x = L.sit * 0.38 - y * 0.35 - r * 0.45 + Math.sin(L.phase * 2) * 0.05 * w;
  // the mane flows: each layer sways on its own phase, more when walking or roaring
  L.maneM.emissiveIntensity = 0.32 + r * 1.8 + Math.sin(t * 3) * 0.08;
  L.mane.scale.setScalar(1 + r * 0.15 + Math.sin(L.phase * 2) * 0.02 * w);
  for (let i = 0; i < L.layers.length; i++) {
    const g = L.layers[i], k = 0.03 + i * 0.02 + w * 0.05;
    g.rotation.z = Math.sin(t * 1.3 - i * 0.7) * k * 0.6; g.rotation.x = Math.sin(t * 1.7 - i * 0.9 + L.phase * 0.5) * k - w * 0.06 * i;
  }
  L.maneGlow.material.opacity = 0.45 + Math.sin(t * 2.2) * 0.1 + r * 0.5;
  for (let i = 0; i < 2; i++) L.ears[i].rotation.z = (i ? -1 : 1) * (0.15 + Math.max(0, Math.sin(t * 1.3 + i * 2) - 0.92) * 4);
  L.nextBlink -= dt; if (L.nextBlink < 0) { L.blink = 0.14; L.nextBlink = 2.5 + Math.random() * 3; }
  L.blink = Math.max(0, L.blink - dt);
  for (const e of L.eyes) e.scale.y = L.blink > 0 ? 0.12 : 0.8;
  for (let i = 0; i < L.tail.length; i++) {
    L.tail[i].rotation.z = Math.sin(t * (moving ? 5 : 1.6) - i * 0.6) * (0.16 + i * 0.045);
    L.tail[i].rotation.x = 0.2 + (moving ? 0.02 : 0.07) + (L.sit * 0.13);
  }
  L.halo.rotation.y += dt * (0.6 + (L.hop > 0.01 ? 8 : 0) + r * 5);
  L.halo.position.y = 0.52 + Math.sin(t * 1.7) * 0.03;
  L.aura.material.opacity = 0.5 + Math.sin(t * 2) * 0.08 + r * 0.5;
  L.rim.uniforms.uI.value = L.rimI * (0.9 + Math.sin(t * 2) * 0.14) + r * 1.2;
}
