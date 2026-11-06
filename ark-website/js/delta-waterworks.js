import { createWatershed } from './delta-flow.js';

const root = document.getElementById('living-waterworks');
if (root) {
  const flow = createWatershed();
  const neris = root.querySelector('#dw-neris');
  const beaver = root.querySelector('#dw-beaver');
  const osprey = root.querySelector('#dw-osprey');
  const hall = root.querySelector('#circulation-hall');
  const wetland = root.querySelector('#dw-wetland');
  const channel = root.querySelector('#dw-channel');
  const reduce = root.querySelector('#dw-reduce');

  function paint() {
    const s = flow.snapshot();
    root.dataset.mode = s.mode;
    if (neris) neris.textContent = s.neris;
    if (beaver) beaver.textContent = s.beaver;
    if (osprey) osprey.textContent = s.osprey;
    if (wetland) wetland.dataset.state = s.wetland;
    if (channel) channel.dataset.state = s.circulation;
    if (hall) hall.dataset.flow = s.circulation;
    root.querySelectorAll('[data-flow]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-flow') === s.mode ? 'true' : 'false');
    });
  }

  root.querySelectorAll('[data-flow]').forEach((btn) => {
    btn.addEventListener('click', () => {
      flow.set(btn.getAttribute('data-flow'));
      paint();
    });
  });

  function brighten(lessonId) {
    document.querySelectorAll('[data-lesson-id]').forEach((el) => {
      const ids = (el.getAttribute('data-lesson-id') || '').split(/\s+/);
      el.classList.toggle('bright', lessonId && ids.includes(lessonId));
    });
  }

  document.querySelectorAll('[data-open-lesson]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-lesson');
      const panel = document.getElementById(id);
      if (!panel) return;
      const open = panel.hasAttribute('hidden');
      document.querySelectorAll('.dw-lesson').forEach((p) => p.setAttribute('hidden', ''));
      document.querySelectorAll('[data-open-lesson]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
      if (open) {
        panel.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
        brighten(id);
      } else {
        brighten('');
      }
    });
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
  paint();
}
