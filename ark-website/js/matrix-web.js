/**
 * Literal web state for the Matrix stage.
 * One cut opens a strand and moves load onto the paths that remain.
 * The stage draws silk, not a node diagram.
 */

export function createWeb(spec) {
  const nodes = spec.nodes.map((n) => ({ ...n, lit: false, load: 0 }));
  const edges = spec.edges.map((e) => ({ ...e, cut: false, healing: 0, flow: 0 }));
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  function neighbors(id, { ignoreCut = false } = {}) {
    const out = [];
    for (const e of edges) {
      if (!ignoreCut && e.cut) continue;
      if (e.a === id) out.push({ node: e.b, edge: e });
      else if (e.b === id) out.push({ node: e.a, edge: e });
    }
    return out;
  }

  function pathsBetween(a, b, limit = 8) {
    const paths = [];
    const stack = [[a, [a], new Set([a])]];
    while (stack.length && paths.length < limit) {
      const [cur, path, seen] = stack.pop();
      if (cur === b && path.length > 1) {
        paths.push(path.slice());
        continue;
      }
      for (const { node } of neighbors(cur)) {
        if (seen.has(node)) continue;
        const ns = new Set(seen);
        ns.add(node);
        stack.push([node, path.concat(node), ns]);
      }
    }
    return paths;
  }

  function clearLights() {
    for (const n of nodes) {
      n.lit = false;
      n.load = 0;
    }
    for (const e of edges) if (!e.cut) e.flow = 0;
  }

  function touch(nodeId) {
    clearLights();
    const seen = new Set();
    const q = [{ id: nodeId, dist: 0 }];
    seen.add(nodeId);
    let litCount = 0;
    while (q.length) {
      const { id, dist } = q.shift();
      litCount += 1;
      byId[id].lit = true;
      byId[id].load = Math.max(byId[id].load, 1 / (1 + dist));
      for (const { node, edge } of neighbors(id)) {
        edge.flow = Math.max(edge.flow, 1 / (1 + dist));
        if (!seen.has(node)) {
          seen.add(node);
          q.push({ id: node, dist: dist + 1 });
        }
      }
    }
    return { litCount, reachable: seen.size };
  }

  function cut(edgeId) {
    const e = edges.find((x) => x.id === edgeId);
    if (!e || e.cut) return { ok: false, reason: 'missing_or_already_cut' };
    e.cut = true;
    e.healing = 0;
    e.flow = 0;
    const alts = pathsBetween(e.a, e.b, 12);
    for (const path of alts) {
      for (let i = 0; i < path.length - 1; i++) {
        const u = path[i];
        const v = path[i + 1];
        const ed = edges.find(
          (x) => !x.cut && ((x.a === u && x.b === v) || (x.a === v && x.b === u))
        );
        if (ed) ed.flow = Math.min(1, ed.flow + 0.55);
      }
    }
    return {
      ok: true,
      edgeId,
      alternatePaths: alts.length,
      redistributed: alts.length > 0,
      cascadeFailure: alts.length === 0,
    };
  }

  function mend(edgeId) {
    const e = edges.find((x) => x.id === edgeId);
    if (!e) return { ok: false };
    const wasCut = e.cut;
    e.cut = false;
    e.healing = wasCut ? 1 : 0;
    e.flow = Math.max(e.flow, 0.7);
    byId[e.a].lit = true;
    byId[e.b].lit = true;
    return { ok: true, edgeId, recovered: true, wasCut };
  }

  function snapshot() {
    return {
      edges: edges.map((e) => ({
        id: e.id,
        a: e.a,
        b: e.b,
        cut: e.cut,
        flow: e.flow,
        healing: e.healing,
      })),
      cutCount: edges.filter((e) => e.cut).length,
      carryingIds: edges.filter((e) => !e.cut && e.flow > 0).map((e) => e.id),
    };
  }

  return { touch, cut, mend, pathsBetween, snapshot };
}

/** Redundant silk. Cutting strand-hard still leaves two ways across. */
export const MATRIX_STAGE_SPEC = {
  nodes: [
    { id: 'octopus' },
    { id: 'weaver' },
    { id: 'dragonfly' },
    { id: 'delta' },
    { id: 'halo' },
  ],
  edges: [
    { id: 'strand-hard', a: 'octopus', b: 'weaver' },
    { id: 'strand-a', a: 'octopus', b: 'dragonfly' },
    { id: 'strand-b', a: 'dragonfly', b: 'weaver' },
    { id: 'strand-c', a: 'octopus', b: 'delta' },
    { id: 'strand-d', a: 'delta', b: 'weaver' },
    { id: 'strand-e', a: 'weaver', b: 'halo' },
    { id: 'strand-f', a: 'halo', b: 'octopus' },
  ],
};

export const HARD_STRAND = 'strand-hard';
