// Tap-to-walk pathing: A* on a small grid over the walkable floor, then string-pulled into a few straight legs.
export function createPather(maxR, obstacles, { cell = 0.3, pad = 0.5 } = {}) {
  const N = Math.ceil((maxR * 2) / cell) + 1, off = maxR;
  let grid = null;
  const idx = (i, j) => j * N + i;
  const toW = (i) => i * cell - off;
  const toC = (v) => Math.round((v + off) / cell);
  function blockedAt(x, z) {
    if (Math.hypot(x, z) > maxR - 0.05) return true;
    for (const o of obstacles) { if (!o.r) continue; if (Math.hypot(x - o.x, z - o.z) < o.r + pad) return true; }
    return false;
  }
  function build() { grid = new Uint8Array(N * N); for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) grid[idx(i, j)] = blockedAt(toW(i), toW(j)) ? 1 : 0; }
  const free = (i, j) => i >= 0 && j >= 0 && i < N && j < N && !grid[idx(i, j)];
  function nearestFree(i, j) {
    if (free(i, j)) return [i, j];
    for (let r = 1; r < 12; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue; if (free(i + di, j + dj)) return [i + di, j + dj]; }
    return null;
  }
  function los(ax, az, bx, bz) {
    const d = Math.hypot(bx - ax, bz - az), n = Math.ceil(d / (cell * 0.5));
    for (let k = 1; k < n; k++) { const t = k / n; if (!free(toC(ax + (bx - ax) * t), toC(az + (bz - az) * t))) return false; }
    return true;
  }
  function find(sx, sz, gx, gz) {
    if (!grid) build();
    const s = nearestFree(toC(sx), toC(sz)), g = nearestFree(toC(gx), toC(gz));
    if (!s || !g) return null;
    if (los(sx, sz, gx, gz)) return [{ x: gx, z: gz }];
    const start = idx(s[0], s[1]), goal = idx(g[0], g[1]);
    const gS = new Float32Array(N * N).fill(1e9), from = new Int32Array(N * N).fill(-1), closed = new Uint8Array(N * N);
    const open = [start]; gS[start] = 0;
    const h = (k) => { const i = k % N, j = (k / N) | 0, dx = Math.abs(i - g[0]), dz = Math.abs(j - g[1]); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    const fS = new Float32Array(N * N).fill(1e9); fS[start] = h(start);
    let iter = 0;
    while (open.length && iter++ < 20000) {
      let bi = 0; for (let k = 1; k < open.length; k++) if (fS[open[k]] < fS[open[bi]]) bi = k;
      const cur = open[bi]; open[bi] = open[open.length - 1]; open.pop();
      if (cur === goal) break;
      closed[cur] = 1; const ci = cur % N, cj = (cur / N) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue; const ni = ci + di, nj = cj + dj; if (!free(ni, nj)) continue;
        if (di && dj && (!free(ci + di, cj) || !free(ci, cj + dj))) continue; // no corner cutting
        const nk = idx(ni, nj); if (closed[nk]) continue;
        const ng = gS[cur] + (di && dj ? 1.414 : 1);
        if (ng < gS[nk]) { if (gS[nk] >= 1e9) open.push(nk); gS[nk] = ng; fS[nk] = ng + h(nk); from[nk] = cur; }
      }
    }
    if (from[goal] < 0) return null;
    const raw = []; for (let k = goal; k !== -1 && k !== start; k = from[k]) raw.push({ x: toW(k % N), z: toW((k / N) | 0) });
    raw.reverse(); raw[raw.length - 1] = { x: gx, z: gz };
    // string-pull: keep only the corners we can't see past
    const out = []; let ax = sx, az = sz, k = 0;
    while (k < raw.length) {
      let far = k; for (let m = raw.length - 1; m > k; m--) if (los(ax, az, raw[m].x, raw[m].z)) { far = m; break; }
      out.push(raw[far]); ax = raw[far].x; az = raw[far].z; k = far + 1;
    }
    return out;
  }
  return { find, rebuild: build, blockedAt };
}
