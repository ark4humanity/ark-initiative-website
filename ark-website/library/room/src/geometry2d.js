// 2D drawing helpers for the sacred-geometry and formula textures (canvas only).
export const PHI = (1 + Math.sqrt(5)) / 2;
export function circle(x, cx, cy, r) { x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.stroke(); }
export function flowerOfLife(x, cx, cy, r, rings = 2) {
  const pts = [[0, 0]];
  for (let ring = 1; ring <= rings; ring++) for (let i = 0; i < 6 * ring; i++) { const k = Math.floor(i / ring), f = (i % ring) / ring; const a1 = k * Math.PI / 3, a2 = (k + 1) * Math.PI / 3; pts.push([ring * r * ((1 - f) * Math.cos(a1) + f * Math.cos(a2)), ring * r * ((1 - f) * Math.sin(a1) + f * Math.sin(a2))]); }
  for (const [px, py] of pts) circle(x, cx + px, cy + py, r);
  circle(x, cx, cy, r * (rings + 1));
}
export function seedOfLife(x, cx, cy, r) { circle(x, cx, cy, r); for (let i = 0; i < 6; i++) circle(x, cx + r * Math.cos(i * Math.PI / 3), cy + r * Math.sin(i * Math.PI / 3), r); circle(x, cx, cy, r * 2); }
export function metatron(x, cx, cy, r) {
  const pts = [[0, 0]];
  for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; pts.push([Math.cos(a) * r, Math.sin(a) * r], [Math.cos(a) * r * 2, Math.sin(a) * r * 2]); }
  for (const [px, py] of pts) circle(x, cx + px, cy + py, r * 0.5);
  x.beginPath(); for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { x.moveTo(cx + pts[i][0], cy + pts[i][1]); x.lineTo(cx + pts[j][0], cy + pts[j][1]); } x.stroke();
}
export function star(x, cx, cy, r, n, step, rot = -Math.PI / 2) { x.beginPath(); for (let i = 0; i <= n; i++) { const a = rot + (i * step % n) / n * Math.PI * 2; x[i ? 'lineTo' : 'moveTo'](cx + Math.cos(a) * r, cy + Math.sin(a) * r); } x.stroke(); }
export function triangles(x, cx, cy, r) { // interlocking triangles (a yantra-like figure)
  for (const [k, s] of [[1, 1], [0.78, -1], [0.58, 1], [0.4, -1], [0.26, 1]]) { x.beginPath(); for (let i = 0; i <= 3; i++) { const a = (s > 0 ? -Math.PI / 2 : Math.PI / 2) + i * Math.PI * 2 / 3; x[i ? 'lineTo' : 'moveTo'](cx + Math.cos(a) * r * k, cy + Math.sin(a) * r * k); } x.stroke(); }
  circle(x, cx, cy, r * 1.05); circle(x, cx, cy, r * 1.15);
}
export function vesica(x, cx, cy, r) { circle(x, cx - r / 2, cy, r); circle(x, cx + r / 2, cy, r); x.beginPath(); x.moveTo(cx, cy - r * 0.866); x.lineTo(cx, cy + r * 0.866); x.stroke(); }
export function goldenSpiral(x, cx, cy, maxR, turns = 3.2, rot = 0) {
  // logarithmic spiral that grows by φ every quarter turn, converging on (cx, cy)
  const b = Math.log(PHI) / (Math.PI / 2), th1 = turns * Math.PI * 2, a = maxR / Math.exp(b * th1);
  x.beginPath(); for (let th = 0; th <= th1; th += 0.02) { const r = a * Math.exp(b * th); x[th ? 'lineTo' : 'moveTo'](cx + r * Math.cos(th + rot), cy + r * Math.sin(th + rot)); } x.stroke();
  // Fibonacci-style quarter squares along the spiral
  for (let q = Math.floor(th1 / (Math.PI / 2)) - 5; q <= th1 / (Math.PI / 2); q++) {
    if (q < 1) continue; const th = q * Math.PI / 2, r = a * Math.exp(b * th);
    x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + r * Math.cos(th + rot), cy + r * Math.sin(th + rot)); x.globalAlpha *= 0.5; x.stroke(); x.globalAlpha *= 2;
  }
}
export function phyllotaxis(x, cx, cy, maxR, n, dot) { const ga = Math.PI * (3 - Math.sqrt(5)); for (let i = 1; i < n; i++) { const r = maxR * Math.sqrt(i / n), a = i * ga; x.beginPath(); x.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), dot * (0.6 + 0.4 * Math.sqrt(i / n)), 0, Math.PI * 2); x.fill(); } }
// a tiny formula typesetter: "E = mc^{2}", "F_{n}" (superscripts and subscripts)
export function formula(x, text, cx, cy, size, align = 'center') {
  const parts = []; const re = /([\^_])\{([^}]*)\}/g; let last = 0, m;
  while ((m = re.exec(text))) { if (m.index > last) parts.push([text.slice(last, m.index), 0]); parts.push([m[2], m[1] === '^' ? 1 : -1]); last = re.lastIndex; }
  if (last < text.length) parts.push([text.slice(last), 0]);
  const fam = 'Georgia,"Times New Roman",serif';
  const fontFor = (k) => (k ? `italic ${Math.round(size * 0.62)}px ${fam}` : `italic ${size}px ${fam}`);
  let w = 0; for (const [s, k] of parts) { x.font = fontFor(k); w += x.measureText(s).width; }
  let px = align === 'center' ? cx - w / 2 : align === 'right' ? cx - w : cx;
  const ta = x.textAlign; x.textAlign = 'left';
  for (const [s, k] of parts) { x.font = fontFor(k); x.fillText(s, px, cy + (k > 0 ? -size * 0.38 : k < 0 ? size * 0.2 : 0)); px += x.measureText(s).width; }
  x.textAlign = ta; return w;
}
export const FORMULAS = [
  'E = mc^{2}', 'φ = (1 + √5) / 2 ≈ 1.618', 'F_{n} = F_{n−1} + F_{n−2}', 'e^{iπ} + 1 = 0', 'a^{2} + b^{2} = c^{2}',
  '∇ · E = ρ / ε_{0}', '∇ · B = 0', '∇ × E = −∂B/∂t', '∇ × B = μ_{0}J + μ_{0}ε_{0} ∂E/∂t', 'c = 1 / √(μ_{0}ε_{0})',
  'C = 2πr', 'E = hν', 'λ = h / p', 'F = G m_{1}m_{2} / r^{2}', 'S = k_{B} ln W', 'PV = nRT', 'i^{2} = −1',
  '1, 1, 2, 3, 5, 8, 13, 21, 34, 55', '137.5° · the golden angle', 'A–T · G–C', 'π ≈ 3.14159', 'f · 2 = one octave', '3 : 2 · the perfect fifth',
];
