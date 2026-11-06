/**
 * Matrix ensemble — pure dialogue state.
 * Lone-savior choices are refused. A recovered web never says the mend
 * is still in progress.
 */

export const CAST = {
  matrika: {
    id: 'matrika',
    name: 'Matrika',
    displayName: 'Matrika',
    stagePortrait: null,
  },
  octopus: {
    id: 'octopus',
    name: 'Octopus',
    displayName: 'Octopus',
    stagePortrait: '/img/matrix/pearl-octopus-library-fountain.webp',
  },
  dragonfly: {
    id: 'dragonfly',
    name: 'Dragonfly',
    displayName: 'Dragonfly',
    stagePortrait: null,
  },
  skein: {
    id: 'skein',
    name: 'Great-Web Weaver',
    displayName: 'Great-Web Weaver',
    proposedName: 'Skein',
    stagePortrait: '/img/matrix/pearl-spider-library-web.webp',
  },
};

const RECOVERED_MEND_LINE =
  'The mend is held on several arms. The web is humming. Show-offery optional.';

export function speak(line, web) {
  let text = line.text;
  const recovered = !!(web && web.mended && !web.cut);
  if (recovered && /mend in progress/i.test(text)) text = RECOVERED_MEND_LINE;
  return { who: line.who, text };
}

export const BEATS = [
  {
    id: 'open',
    title: 'Enter the Habitable Web',
    art: '/img/matrix/pearl-spider-library-web.webp',
    lines: [
      { who: 'matrika', text: 'Quick version: ten thousand things at once, and I see all of them. You are in fascia — not a hallway between pillars.' },
      { who: 'octopus', text: 'She means the furniture thinks. Also, do not step on arm six. It is holding a book and a mild grudge.' },
      { who: 'dragonfly', text: 'Three safe routes already. One scenic. One honest. One if someone panics.' },
      { who: 'skein', text: 'And one structural. If a load starts bragging, I move it before it becomes a tragedy.' },
      { who: 'matrika', text: 'Nobody here is the hero alone. That was the dying world’s favorite mistake. Eight arms. Four wings. Zero blind spots.' },
    ],
    actions: [{ id: 'touch', label: 'Touch a glowing thread', next: 'touch' }],
  },
  {
    id: 'touch',
    title: 'Touch the Web',
    art: '/img/matrix/pearl-octopus-library-fountain.webp',
    effect: 'light_web',
    lines: [
      { who: 'octopus', text: 'You poked one thought and twelve more answered. That is my whole personality, frankly.' },
      { who: 'dragonfly', text: 'Left path brighter. Right path quieter. Up path is showing off.' },
      { who: 'skein', text: 'Good. A light that shines alone is a lie. We do not do lonely architecture.' },
      { who: 'matrika', text: 'Lesson without the lecture: intelligence wants company. Thirteen pillars — one living design.' },
    ],
    actions: [
      { id: 'cut', label: 'Try to break a hard thread', next: 'cut' },
      { id: 'look', label: 'Ask the dragonfly what she sees', next: 'routes' },
    ],
  },
  {
    id: 'routes',
    title: 'Routes before panic',
    art: '/img/matrix/poster-matrix-chaos-into-calm.png',
    effect: 'show_routes',
    lines: [
      { who: 'dragonfly', text: 'Four exits, zero blind spots. I do not pan a camera. I receive the room.' },
      { who: 'matrika', text: 'Those are the four wings in my line. She sees. He thinks in parallel. The Weaver keeps the load honest.' },
      { who: 'octopus', text: 'And I refuse to elect a headquarters. Bureaucracy tastes like unfinished kelp.' },
    ],
    actions: [{ id: 'cut', label: 'Stress the web anyway', next: 'cut' }],
  },
  {
    id: 'cut',
    title: 'One strand opens',
    art: '/img/matrix/web-guardian-and-spider-library.png',
    effect: 'cut_redistribute',
    lines: [
      { who: 'matrika', text: 'Go on. Pull the hard one. I dare you politely.' },
      { who: 'dragonfly', text: 'The strand opened. Also: your eyebrows did a thing.' },
      { who: 'octopus', text: 'Arms two through five filed a complaint and a workaround in the same second.' },
      { who: 'skein', text: 'Look. That thread let go. The load stepped onto the others. Nothing got to be a martyr.' },
      { who: 'matrika', text: 'Empires kept one throat to cut. We studied them — then built the opposite.' },
    ],
    actions: [
      { id: 'fix_matrika', label: '“Matrika, you save it.”', next: 'refuse_lone', teaching: 'lone_savior_refused' },
      { id: 'fix_octopus', label: '“Octopus — parallel mend.”', next: 'mend_parallel', teaching: 'parallel' },
      { id: 'fix_dragonfly', label: '“Dragonfly — find routes.”', next: 'mend_routes', teaching: 'routes' },
      { id: 'fix_skein', label: '“Weaver — share the load.”', next: 'mend_structure', teaching: 'structure' },
      { id: 'fix_all', label: '“All of you — together.”', next: 'mend_together', teaching: 'ensemble' },
    ],
  },
  {
    id: 'refuse_lone',
    title: 'No lone saviors',
    art: '/img/matrix/pearl-spider-library-web.webp',
    effect: 'pulse_all',
    lines: [
      { who: 'matrika', text: 'Flattering. Incorrect. I orchestrate. I do not hoard the save. Pick a partner — or pick everyone.' },
      { who: 'skein', text: 'If one strand boasts, I ease its ego. I do not hand it the whole load.' },
      { who: 'dragonfly', text: 'Still seeing the exits. None of them are labeled solo hero.' },
    ],
    actions: [
      { id: 'fix_all', label: 'Ask the whole ensemble', next: 'mend_together', teaching: 'ensemble' },
      { id: 'fix_octopus', label: 'Work with the octopus', next: 'mend_parallel', teaching: 'parallel' },
      { id: 'fix_skein', label: 'Work with the Weaver', next: 'mend_structure', teaching: 'structure' },
    ],
  },
  {
    id: 'mend_parallel',
    title: 'Parallel intelligence',
    art: '/img/matrix/pearl-octopus-library-fountain.webp',
    effect: 'mend',
    lines: [
      { who: 'octopus', text: 'Already held — three arms on the mend, two arguing productively, one finding the page you need.' },
      { who: 'skein', text: 'I took the structural slack while you argued. Fair trade. The strand is closed.' },
      { who: 'matrika', text: 'Distributed minds. No headquarters. That is eight arms earning their keep.' },
    ],
    actions: [{ id: 'close', label: 'Feel the web thank you', next: 'close' }],
  },
  {
    id: 'mend_routes',
    title: 'Routes before panic',
    art: '/img/matrix/poster-matrix-chaos-into-calm.png',
    effect: 'mend',
    lines: [
      { who: 'dragonfly', text: 'Scenic, honest, emergency — all open. The broken strand has company again.' },
      { who: 'octopus', text: 'I took the honest path. Arm four prefers scenery. We are complicated, and the web is humming.' },
      { who: 'matrika', text: 'Zero blind spots is not a boast. It is a work order, and this one is done.' },
    ],
    actions: [{ id: 'close', label: 'Carry the lesson', next: 'close' }],
  },
  {
    id: 'mend_structure',
    title: 'Load shared',
    art: '/img/matrix/poster-spider-jeweled-greeting.jpg',
    effect: 'mend',
    lines: [
      { who: 'skein', text: 'There. The opened strand is closed. Structure humming. The emerald stays on because jewelry should work for a living.' },
      { who: 'matrika', text: 'Network builders. Connectors. Nothing bears too much alone — including you.' },
      { who: 'dragonfly', text: 'I watched every strand while they did it. Habit. The load is home.' },
    ],
    actions: [{ id: 'close', label: 'Leave the mend humming', next: 'close' }],
  },
  {
    id: 'mend_together',
    title: 'Protective Articulation',
    art: '/img/matrix/web-guardian-and-spider-library.png',
    effect: 'mend_all',
    lines: [
      { who: 'skein', text: 'Now you are speaking Web.' },
      { who: 'dragonfly', text: 'Routes locked. The load took the paths that stayed.' },
      { who: 'octopus', text: RECOVERED_MEND_LINE },
      { who: 'matrika', text: 'That is Protective Articulation. The same living design you will meet in Delta’s water, Vega’s routes, and HALO’s boundary — different organs, one body.' },
    ],
    actions: [{ id: 'close', label: 'Take the feeling, not a flowchart', next: 'close' }],
  },
  {
    id: 'close',
    title: 'The web is humming',
    art: '/img/matrix/poster-matrix-chaos-into-calm.png',
    effect: 'glow_soft',
    lines: [
      { who: 'matrika', text: 'When you leave, take the feeling — not a diagram. The Ark is thirteen organs. Matrix is the fascia that keeps any one of them from having to be the whole body.' },
      { who: 'octopus', text: 'Grudge resolved. Book reshelved. Visit again. Arm six accepts hard problems.' },
      { who: 'skein', text: 'Mind the spider. She minds you.' },
      { who: 'dragonfly', text: 'The scenic way out is still open, if you like beauty with your resilience.' },
    ],
    actions: [{ id: 'again', label: 'Walk the Web again', next: 'open' }],
  },
];

export function createEnsemble() {
  let beatId = 'open';
  let lineIndex = 0;
  const teachings = new Set();
  const web = { lit: false, cut: false, routes: false, mended: false, redistributed: false };

  function beat() {
    return BEATS.find((b) => b.id === beatId);
  }

  function currentLine() {
    const b = beat();
    return speak(b.lines[Math.min(lineIndex, b.lines.length - 1)], web);
  }

  function advanceLine() {
    const b = beat();
    if (lineIndex < b.lines.length - 1) {
      lineIndex += 1;
      return { kind: 'line', line: currentLine(), beat: b };
    }
    return { kind: 'await_action', beat: b, actions: b.actions };
  }

  function applyEffect(effect) {
    if (effect === 'light_web') {
      web.lit = true;
    } else if (effect === 'show_routes') {
      web.routes = true;
      web.lit = true;
    } else if (effect === 'cut_redistribute') {
      web.cut = true;
      web.mended = false;
      web.lit = true;
      web.routes = true;
      web.redistributed = true;
    } else if (effect === 'mend' || effect === 'mend_all') {
      web.cut = false;
      web.mended = true;
      web.lit = true;
      web.redistributed = true;
    } else if (effect === 'pulse_all' || effect === 'glow_soft') {
      web.lit = true;
    }
  }

  function choose(actionId) {
    const b = beat();
    const action = (b.actions || []).find((a) => a.id === actionId);
    if (!action) return { ok: false };
    if (action.teaching) teachings.add(action.teaching);
    beatId = action.next;
    lineIndex = 0;
    const nb = beat();
    applyEffect(nb.effect);
    return { ok: true, beat: nb, line: currentLine(), teachings: [...teachings], web: { ...web } };
  }

  function visibleLines(history) {
    return history.map((line) => speak(line, web));
  }

  function snapshot() {
    const b = beat();
    return {
      beatId,
      title: b.title,
      art: b.art,
      lineIndex,
      line: currentLine(),
      atEndOfLines: lineIndex >= b.lines.length - 1,
      actions: b.actions || [],
      teachings: [...teachings],
      web: { ...web },
    };
  }

  return { beat, currentLine, advanceLine, choose, snapshot, visibleLines, teachings: () => [...teachings] };
}
