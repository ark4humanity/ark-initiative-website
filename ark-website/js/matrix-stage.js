import { createEnsemble, CAST } from './matrix-ensemble.js';
import { createWeb, MATRIX_STAGE_SPEC, HARD_STRAND } from './matrix-web.js';

const root = document.getElementById('the-web-interactive');
if (root) {
  const ens = createEnsemble();
  const web = createWeb(MATRIX_STAGE_SPEC);
  const bg = root.querySelector('#mx-bg');
  const bgNext = root.querySelector('#mx-bg-next');
  const moment = root.querySelector('#mx-moment');
  const dialogue = root.querySelector('#mx-dialogue');
  const btnContinue = root.querySelector('#mx-continue');
  const choices = root.querySelector('#mx-choices');
  const hint = root.querySelector('#mx-hint');
  const silk = root.querySelector('#mx-silk');
  const reduce = root.querySelector('#mx-reduce');
  const recent = [];
  let useBgA = true;

  function setBackground(url) {
    const incoming = useBgA ? bgNext : bg;
    const outgoing = useBgA ? bg : bgNext;
    incoming.style.backgroundImage = `url('${url}')`;
    incoming.classList.add('show');
    outgoing.classList.remove('show');
    useBgA = !useBgA;
  }

  function paintSilk() {
    const snap = web.snapshot();
    const cut = new Set(snap.edges.filter((e) => e.cut).map((e) => e.id));
    const carrying = new Set(snap.carryingIds);
    silk.querySelectorAll('path').forEach((path) => {
      const id = path.getAttribute('data-edge');
      path.classList.toggle('broken', cut.has(id));
      path.classList.toggle('healing', snap.edges.some((e) => e.id === id && e.healing > 0 && !e.cut));
      path.classList.toggle('carrying', !cut.has(id) && carrying.has(id));
      path.classList.toggle('whole', !cut.has(id) && !carrying.has(id));
    });
    silk.classList.toggle('alive', snap.edges.some((e) => e.flow > 0 || e.healing > 0));
    silk.classList.toggle('stressed', snap.cutCount > 0);
  }

  function applyWeb(effect) {
    if (effect === 'light_web' || effect === 'show_routes' || effect === 'pulse_all' || effect === 'glow_soft') {
      web.touch('octopus');
    }
    if (effect === 'cut_redistribute') {
      web.touch('octopus');
      web.cut(HARD_STRAND);
    }
    if (effect === 'mend' || effect === 'mend_all') {
      web.mend(HARD_STRAND);
      web.touch('weaver');
    }
    paintSilk();
  }

  const heroFor = { octopus: 'octopus', skein: 'weaver' };

  function syncHeroes(who) {
    const active = heroFor[who] || '';
    root.querySelectorAll('.mx-hero').forEach((fig) => {
      const on = fig.getAttribute('data-who') === active;
      fig.classList.toggle('active', on);
      fig.classList.toggle('dim', !on && !!active);
    });
  }

  function pushTurn(line) {
    recent.push(line);
    while (recent.length > 3) recent.shift();
    const spoken = ens.visibleLines(recent);
    dialogue.replaceChildren();
    spoken.forEach((ln, idx) => {
      const el = document.createElement('article');
      el.className = 'mx-turn' + (idx === spoken.length - 1 ? ' fresh' : '');
      const who = document.createElement('div');
      who.className = 'mx-who' + (CAST[ln.who].stagePortrait ? '' : ' voice');
      who.textContent = CAST[ln.who].displayName;
      const p = document.createElement('p');
      p.textContent = ln.text;
      el.append(who, p);
      dialogue.appendChild(el);
    });
    syncHeroes(line.who);
  }

  function showChoices(actions) {
    btnContinue.hidden = true;
    choices.hidden = false;
    choices.replaceChildren();
    for (const a of actions) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = a.label;
      if (a.teaching === 'ensemble') b.classList.add('best');
      b.addEventListener('click', () => {
        const res = ens.choose(a.id);
        if (!res.ok) return;
        recent.length = 0;
        applyWeb(res.beat.effect);
        pushTurn(res.line);
        renderChrome(true);
      });
      choices.appendChild(b);
    }
  }

  function showContinue() {
    choices.hidden = true;
    choices.replaceChildren();
    btnContinue.hidden = false;
  }

  function renderChrome(freshArt) {
    const snap = ens.snapshot();
    moment.textContent = snap.title;
    if (freshArt) setBackground(snap.art);
    if (snap.web.cut) {
      hint.textContent = 'One strand opened. The load moved onto the paths still holding. Choose who shares the mend.';
    } else if (snap.web.mended) {
      hint.textContent = 'The web is humming again. The opened strand has closed.';
    } else if (snap.web.lit) {
      hint.textContent = 'The threads are awake, neighbor to neighbor.';
    } else {
      hint.textContent = 'Touch the web. It is allowed to answer.';
    }
    if (snap.atEndOfLines && snap.actions.length) showChoices(snap.actions);
    else showContinue();
  }

  btnContinue.addEventListener('click', () => {
    const r = ens.advanceLine();
    if (r.kind === 'line') {
      pushTurn(r.line);
      renderChrome(false);
    } else {
      showChoices(r.actions);
    }
  });

  function applyReduce(on) {
    root.classList.toggle('reduce-motion', on);
  }
  if (reduce) {
    reduce.addEventListener('change', () => applyReduce(reduce.checked));
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reduce.checked = true;
      applyReduce(true);
    }
  }

  const first = ens.snapshot();
  setBackground(first.art);
  pushTurn(first.line);
  renderChrome(false);
  paintSilk();
}
