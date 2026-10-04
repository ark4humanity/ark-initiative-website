import * as THREE from 'three';

export function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function rnd(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
export function tex(c, { repeat, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}
function noise(ctx, w, h, amt, r, alpha = 0.08) {
  for (let i = 0; i < amt; i++) {
    const v = r() * 255 | 0; ctx.fillStyle = `rgba(${v},${v * 0.85 | 0},${v * 0.6 | 0},${alpha * r()})`;
    ctx.fillRect(r() * w, r() * h, 1 + r() * 3, 1 + r() * 3);
  }
}

export function stoneWall() {
  const [c, x] = canvas(1024, 512), r = rnd(7);
  const g = x.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, '#6b4a2a'); g.addColorStop(1, '#8a6238');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  const rows = 8, bh = 512 / rows;
  for (let j = 0; j < rows; j++) {
    const off = (j % 2) * 64; let xx = -off;
    while (xx < 1024) {
      const bw = 96 + r() * 70, l = 38 + r() * 14;
      x.fillStyle = `hsl(${28 + r() * 8},${32 + r() * 12}%,${l}%)`;
      x.fillRect(xx + 3, j * bh + 3, bw - 6, bh - 6);
      const gg = x.createLinearGradient(0, j * bh, 0, j * bh + bh); gg.addColorStop(0, 'rgba(255,230,180,.10)'); gg.addColorStop(1, 'rgba(0,0,0,.18)');
      x.fillStyle = gg; x.fillRect(xx + 3, j * bh + 3, bw - 6, bh - 6);
      xx += bw;
    }
  }
  noise(x, 1024, 512, 14000, r, 0.12);
  return tex(c, { repeat: [10, 1.4] });
}

export function floorMosaic() {
  const S = 1024, [c, x] = canvas(S, S), r = rnd(3), cx = S / 2;
  x.fillStyle = '#4a3019'; x.fillRect(0, 0, S, S);
  // concentric rings of tiles
  for (let ring = 0; ring < 16; ring++) {
    const r0 = 30 + ring * 30, r1 = r0 + 30, n = 12 + ring * 6;
    for (let k = 0; k < n; k++) {
      const a0 = k / n * Math.PI * 2, a1 = (k + 1) / n * Math.PI * 2;
      x.beginPath(); x.arc(cx, cx, r1 - 2, a0 + 0.01, a1 - 0.01); x.arc(cx, cx, r0 + 2, a1 - 0.01, a0 + 0.01, true); x.closePath();
      const warm = ring % 4 === 3;
      x.fillStyle = warm ? `hsl(38,${45 + r() * 15}%,${34 + r() * 8}%)` : `hsl(${24 + r() * 10},${30 + r() * 15}%,${24 + r() * 12}%)`;
      x.fill();
    }
  }
  // gold star inlay (13 points for the 13 pillars)
  x.save(); x.translate(cx, cx); x.strokeStyle = 'rgba(245,205,120,.9)'; x.lineWidth = 4;
  x.beginPath();
  for (let i = 0; i <= 26; i++) { const a = i / 26 * Math.PI * 2, rr = i % 2 ? 120 : 220; x.lineTo(Math.sin(a) * rr, -Math.cos(a) * rr); }
  x.stroke();
  for (const rr of [240, 390, 500]) { x.beginPath(); x.arc(0, 0, rr, 0, Math.PI * 2); x.lineWidth = 3; x.stroke(); }
  x.restore();
  noise(x, S, S, 30000, r, 0.1);
  return tex(c);
}

export function dome() {
  const [c, x] = canvas(1024, 512), r = rnd(11);
  const g = x.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#fff1c8'); g.addColorStop(0.08, '#f2c46c'); g.addColorStop(0.25, '#6a3f6e'); g.addColorStop(0.6, '#2b2150'); g.addColorStop(1, '#3a2418');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 900; i++) {
    const y = 60 + r() * 380, s = r() * 1.8 + 0.3; x.fillStyle = `rgba(255,${230 + r() * 25 | 0},${190 + r() * 60 | 0},${0.35 + r() * 0.6})`;
    x.beginPath(); x.arc(r() * 1024, y, s, 0, 7); x.fill();
  }
  // constellation lines
  x.strokeStyle = 'rgba(250,215,140,.35)'; x.lineWidth = 1.2;
  for (let k = 0; k < 13; k++) {
    let px = k / 13 * 1024 + 30, py = 160 + r() * 180; x.beginPath(); x.moveTo(px, py);
    for (let j = 0; j < 4; j++) { px += 20 + r() * 40; py += (r() - 0.5) * 60; x.lineTo(px, py); x.fillStyle = 'rgba(255,240,200,.9)'; x.fillRect(px - 2, py - 2, 4, 4); }
    x.stroke();
  }
  // ribs
  x.strokeStyle = 'rgba(240,200,120,.35)'; x.lineWidth = 3;
  for (let k = 0; k < 13; k++) { const xx = k / 13 * 1024; x.beginPath(); x.moveTo(xx, 30); x.lineTo(xx, 512); x.stroke(); }
  return tex(c);
}

export function terracotta(seed = 1, hue = 18) {
  const [c, x] = canvas(512, 256), r = rnd(seed);
  x.fillStyle = `hsl(${hue},55%,42%)`; x.fillRect(0, 0, 512, 256);
  noise(x, 512, 256, 9000, r, 0.18);
  x.strokeStyle = 'rgba(40,18,6,.75)'; x.fillStyle = 'rgba(40,18,6,.75)';
  for (const y of [40, 52, 196, 208]) { x.fillRect(0, y, 512, 4); }
  // glyph band
  x.lineWidth = 4;
  for (let i = 0; i < 12; i++) {
    const cx = 22 + i * 42, cy = 124, t = (i + seed) % 4;
    x.beginPath();
    if (t === 0) { for (let a = 0; a < 12; a += 0.3) x.lineTo(cx + Math.cos(a) * a * 1.4, cy + Math.sin(a) * a * 1.4); }
    else if (t === 1) { x.moveTo(cx - 14, cy + 14); x.lineTo(cx - 5, cy - 14); x.lineTo(cx + 5, cy + 14); x.lineTo(cx + 14, cy - 14); }
    else if (t === 2) { x.arc(cx, cy, 12, 0, 7); x.moveTo(cx, cy - 22); x.lineTo(cx, cy + 22); }
    else { x.moveTo(cx - 12, cy); x.lineTo(cx, cy - 16); x.lineTo(cx + 12, cy); x.lineTo(cx, cy + 16); x.closePath(); }
    x.stroke();
  }
  // soft wear
  const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, 'rgba(255,220,170,.12)'); g.addColorStop(1, 'rgba(0,0,0,.25)');
  x.fillStyle = g; x.fillRect(0, 0, 512, 256);
  return tex(c);
}

export function leather(seed = 2, hue = 20, l = 24) {
  const [c, x] = canvas(256, 256), r = rnd(seed);
  x.fillStyle = `hsl(${hue},45%,${l}%)`; x.fillRect(0, 0, 256, 256);
  noise(x, 256, 256, 6000, r, 0.2);
  return tex(c);
}

export function parchment(title, sub, { w = 768, h = 512, seed = 5, ink = '#3a2610', font = 'Georgia,serif' } = {}) {
  const [c, x] = canvas(w, h), r = rnd(seed);
  const g = x.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, w * 0.7);
  g.addColorStop(0, '#f6e7c2'); g.addColorStop(0.7, '#e6cf9c'); g.addColorStop(1, '#b98f55');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  noise(x, w, h, 7000, r, 0.1);
  if (title) {
    x.fillStyle = ink; x.textAlign = 'center';
    const lines = wrap(x, title, w * 0.82, `600 ${Math.round(h * 0.1)}px ${font}`);
    const lh = h * 0.12; let y = h * 0.36 - (lines.length - 1) * lh / 2;
    for (const ln of lines) { x.fillText(ln, w / 2, y); y += lh; }
    if (sub) { x.font = `italic ${Math.round(h * 0.055)}px ${font}`; x.fillStyle = 'rgba(58,38,16,.8)'; x.fillText(sub, w / 2, y + lh * 0.2); }
    // faux lines of text
    x.fillStyle = 'rgba(58,38,16,.25)';
    for (let yy = y + lh * 0.9; yy < h * 0.92; yy += h * 0.045) x.fillRect(w * 0.12, yy, w * (0.6 + r() * 0.16), 3);
  }
  return tex(c);
}

export function wrap(x, text, maxW, font) {
  x.font = font; const words = text.split(/\s+/), lines = []; let cur = '';
  for (const wd of words) { const t = cur ? cur + ' ' + wd : wd; if (x.measureText(t).width > maxW && cur) { lines.push(cur); cur = wd; } else cur = t; }
  if (cur) lines.push(cur); return lines;
}

// vertical glowing spine lettering (emissive map)
export function spineText(text, { w = 128, h = 768, color = '#9ff4ff', bg = '#050b1a' } = {}) {
  const [c, x] = canvas(w, h);
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.save(); x.translate(w / 2, h / 2); x.rotate(-Math.PI / 2);
  let fs = 64; x.font = `600 ${fs}px Georgia,serif`;
  while (x.measureText(text).width > h * 0.86 && fs > 22) { fs -= 2; x.font = `600 ${fs}px Georgia,serif`; }
  const lines = x.measureText(text).width > h * 0.86 ? wrap(x, text, h * 0.86, x.font).slice(0, 2) : [text];
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = color; x.shadowColor = color; x.shadowBlur = 14;
  lines.forEach((ln, i) => x.fillText(ln, 0, (i - (lines.length - 1) / 2) * fs * 1.05));
  x.restore();
  x.strokeStyle = color; x.lineWidth = 3; x.globalAlpha = 0.8;
  x.strokeRect(10, 10, w - 20, h - 20);
  return tex(c);
}

export function coverText(text, { w = 512, h = 700, bg = '#4a2412', color = '#f0cf79', seed = 3, border = true } = {}) {
  const [c, x] = canvas(w, h), r = rnd(seed);
  x.fillStyle = bg; x.fillRect(0, 0, w, h); noise(x, w, h, 5000, r, 0.2);
  if (border) { x.strokeStyle = color; x.lineWidth = 6; x.strokeRect(24, 24, w - 48, h - 48); x.lineWidth = 2; x.strokeRect(38, 38, w - 76, h - 76); }
  x.fillStyle = color; x.textAlign = 'center'; x.shadowColor = color; x.shadowBlur = 6;
  const lines = wrap(x, text, w * 0.74, `600 ${Math.round(w * 0.1)}px Georgia,serif`).slice(0, 6);
  const lh = w * 0.12; let y = h * 0.45 - (lines.length - 1) * lh / 2;
  for (const ln of lines) { x.fillText(ln, w / 2, y); y += lh; }
  x.beginPath(); x.arc(w / 2, h * 0.82, 22, 0, 7); x.lineWidth = 3; x.stroke();
  return tex(c);
}

export function radial(inner = 'rgba(255,220,150,1)', outer = 'rgba(255,180,80,0)', size = 128) {
  const [c, x] = canvas(size, size), g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner); g.addColorStop(1, outer); x.fillStyle = g; x.fillRect(0, 0, size, size); return tex(c);
}

export function pawPrint() {
  const [c, x] = canvas(256, 256); x.fillStyle = '#ffd98a'; x.shadowColor = '#ffcf70'; x.shadowBlur = 18;
  x.beginPath(); x.ellipse(128, 160, 50, 42, 0, 0, 7); x.fill();
  for (const [px, py, rr] of [[70, 100, 20], [105, 70, 22], [151, 70, 22], [186, 100, 20]]) { x.beginPath(); x.ellipse(px, py, rr, rr * 1.2, 0, 0, 7); x.fill(); }
  x.strokeStyle = '#ffd98a'; x.lineWidth = 5; x.beginPath(); x.arc(128, 128, 118, 0, 7); x.stroke();
  return tex(c);
}

// Label: title + kind line on a warm translucent plate
export function labelCanvas(title, kind, found) {
  // drawn at 2x (1280 px wide) so labels stay crisp when seen from across the room
  const K = 2, W = 640 * K, [c, x] = canvas(W, 256 * K);
  const F = `600 ${44 * K}px Georgia,serif`;
  const all = wrap(x, title, W - 70 * K, F), lines = all.slice(0, 3);
  if (all.length > 3) lines[2] = lines[2].replace(/\s*\S*$/, '') + '…';
  const H = (30 + lines.length * 50 + (kind ? 40 : 0) + 12) * K;
  c.height = H;
  x.fillStyle = found ? 'rgba(62,42,8,.88)' : 'rgba(24,15,6,.8)';
  roundRect(x, 4 * K, 4 * K, W - 8 * K, H - 8 * K, 26 * K); x.fill();
  x.strokeStyle = found ? 'rgba(255,215,120,.98)' : 'rgba(240,207,121,.8)'; x.lineWidth = 3 * K; x.stroke();
  x.textAlign = 'center'; x.fillStyle = '#fff4dc'; x.font = F;
  x.shadowColor = 'rgba(0,0,0,.55)'; x.shadowBlur = 4 * K;
  lines.forEach((ln, i) => x.fillText(ln, W / 2, (62 + i * 50) * K));
  if (kind) { x.font = `700 ${24 * K}px system-ui,Helvetica,sans-serif`; x.fillStyle = '#f0cf79'; x.fillText((found ? '✓ FOUND · ' : '') + kind.toUpperCase(), W / 2, (62 + lines.length * 50 - 6) * K); }
  return c;
}
export function roundRect(x, X, Y, w, h, r) { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r); x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath(); }

// Cover art for the reader when a piece has no image of its own
export function readerCover(item, kindLabel) {
  const W = 1000, H = 560, [c, x] = canvas(W, H);
  const pal = { jar: ['#5a2a12', '#c8743a', '#ffd08a'], future: ['#07122e', '#1d4f8a', '#9ff4ff'], scroll: ['#3b2613', '#8a6238', '#f6e3b4'], table: ['#2e1d0e', '#7a5530', '#f0cf79'], hidden: ['#3a2605', '#c9a043', '#fff1c0'], video: ['#120c05', '#40301a', '#f0cf79'], secret: ['#2a1e04', '#b8902e', '#fff4c8'], book: ['#2a1a0c', '#7a5028', '#ffe08a'] }[item.kind] || ['#222', '#555', '#fff'];
  const g = x.createRadialGradient(W / 2, H * 0.45, 30, W / 2, H / 2, W * 0.65); g.addColorStop(0, pal[1]); g.addColorStop(1, pal[0]);
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  const r = rnd(item.id.charCodeAt(1) * 31 + item.id.charCodeAt(2));
  for (let i = 0; i < 160; i++) { x.fillStyle = `rgba(255,230,170,${r() * 0.5})`; x.beginPath(); x.arc(r() * W, r() * H, r() * 2.2, 0, 7); x.fill(); }
  x.save(); x.translate(W / 2, H * 0.36); x.strokeStyle = pal[2]; x.fillStyle = pal[2]; x.lineWidth = 5; x.shadowColor = pal[2]; x.shadowBlur = 24;
  if (item.kind === 'jar') { x.beginPath(); x.moveTo(-30, -80); x.quadraticCurveTo(-95, -20, -60, 70); x.lineTo(60, 70); x.quadraticCurveTo(95, -20, 30, -80); x.closePath(); x.stroke(); x.strokeRect(-40, -100, 80, 16); }
  else if (item.kind === 'future') { x.strokeRect(-60, -90, 120, 170); x.beginPath(); x.moveTo(-40, -90); x.lineTo(-40, 80); x.stroke(); }
  else if (item.kind === 'scroll') { x.strokeRect(-110, -60, 220, 120); x.beginPath(); x.arc(-110, 0, 16, 0, 7); x.arc(110, 0, 16, 0, 7); x.stroke(); }
  else { x.strokeRect(-80, -70, 160, 120); x.beginPath(); for (let k = -40; k < 40; k += 18) { x.moveTo(-55, k); x.lineTo(55, k); } x.stroke(); }
  x.restore();
  x.textAlign = 'center'; x.fillStyle = '#fff4dc'; x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 10;
  const lines = wrap(x, item.title, W * 0.84, '600 50px Georgia,serif').slice(0, 3);
  lines.forEach((ln, i) => x.fillText(ln, W / 2, H * 0.72 + i * 56 - (lines.length - 1) * 20));
  x.font = '600 20px system-ui,sans-serif'; x.fillStyle = pal[2]; x.fillText((kindLabel || '').toUpperCase(), W / 2, H * 0.62);
  return c;
}
