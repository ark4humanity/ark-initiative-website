/**
 * Functional checks for the Matrix ensemble, the literal web, and the
 * rendered Delta / Matrix doors. Browser layout is a separate script.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createEnsemble, CAST, speak } from '../js/matrix-ensemble.js';
import { createWeb, MATRIX_STAGE_SPEC, HARD_STRAND } from '../js/matrix-web.js';
import { createWatershed } from '../js/delta-flow.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const results = { ok: true, checks: [] };
function check(name, cond, detail = '') {
  results.checks.push({ name, pass: !!cond, detail: detail || '' });
  if (!cond) {
    results.ok = false;
    console.error('FAIL', name, detail);
  }
}

check('Matrika has no portrait', CAST.matrika.stagePortrait == null);
check('Dragonfly has no portrait', CAST.dragonfly.stagePortrait == null);
check('Octopus portrait is the source still', (CAST.octopus.stagePortrait || '').includes('pearl-octopus'));
check('Stage spider name is Great-Web Weaver', CAST.skein.displayName === 'Great-Web Weaver');
check('Proposed personal name stays off the display name', CAST.skein.proposedName === 'Skein' && CAST.skein.displayName !== 'Skein');

const guarded = speak({ who: 'octopus', text: 'Mend in progress on several arms.' }, { mended: true, cut: false });
check('recovered state rewrites mend-in-progress', !/in progress/i.test(guarded.text) && /humming/i.test(guarded.text));
const duringCut = speak({ who: 'octopus', text: 'Mend in progress on several arms.' }, { mended: false, cut: true });
check('an open strand may still describe work', /in progress/i.test(duringCut.text));

function drain(ens) {
  let guard = 0;
  while (guard++ < 12) {
    const step = ens.advanceLine();
    if (step.kind === 'await_action') return step;
  }
  throw new Error('beat did not reach a choice');
}

const ens = createEnsemble();
check('opens with Matrika', ens.snapshot().line.who === 'matrika' && ens.snapshot().beatId === 'open');
drain(ens);
let res = ens.choose('touch');
check('touch lights the web', res.ok && res.web.lit && res.beat.id === 'touch');
drain(ens);
res = ens.choose('cut');
check('cut opens a strand and marks redistribution', res.ok && res.web.cut && res.web.redistributed && !res.web.mended);
drain(ens);
res = ens.choose('fix_matrika');
check('lone savior is refused', res.ok && res.beat.id === 'refuse_lone' && res.teachings.includes('lone_savior_refused') && res.web.cut);
drain(ens);
res = ens.choose('fix_all');
check('group mend recovers the web', res.ok && res.beat.id === 'mend_together' && res.web.mended && !res.web.cut);
const mendLines = [];
mendLines.push(res.line.text);
let guard = 0;
while (guard++ < 8) {
  const step = ens.advanceLine();
  if (step.kind === 'await_action') break;
  mendLines.push(step.line.text);
}
check('group mend dialogue never says the mend is still in progress', mendLines.every((t) => !/mend in progress/i.test(t)), mendLines.join(' | '));
check('group mend says the web is humming', mendLines.some((t) => /humming/i.test(t)));
drain(ens);
res = ens.choose('close');
check('after the hum, close does not reopen the cut', res.ok && res.web.mended && !res.web.cut);
const closeText = [res.line.text];
guard = 0;
while (guard++ < 8) {
  const step = ens.advanceLine();
  if (step.kind === 'await_action') break;
  closeText.push(step.line.text);
}
check('humming scene does not say mend in progress', closeText.every((t) => !/in progress/i.test(t)));

const web = createWeb(MATRIX_STAGE_SPEC);
const touched = web.touch('octopus');
check('touch reaches more than one strand', touched.litCount > 1);
const cut = web.cut(HARD_STRAND);
check('one cut redistributes and does not cascade', cut.ok && cut.redistributed && !cut.cascadeFailure && cut.alternatePaths >= 2);
const snap = web.snapshot();
const hard = snap.edges.find((e) => e.id === HARD_STRAND);
check('the opened strand is literally cut', hard.cut && hard.flow === 0);
check('other strands are carrying load', snap.carryingIds.length >= 2 && !snap.carryingIds.includes(HARD_STRAND));
const healed = web.mend(HARD_STRAND);
check('mend closes the strand', healed.recovered && web.snapshot().cutCount === 0);

const water = createWatershed();
check('watershed starts shared', water.snapshot().mode === 'shared' && water.snapshot().wetland === 'fed');
check('wide channel starves the wetland', water.set('wide').wetland === 'starved' && water.snapshot().circulation === 'racing');
check('beaver laws refill the room', water.set('beaver').wetland === 'full' && water.snapshot().circulation === 'deep');

const matrixPage = fs.readFileSync(path.join(root, 'pillar-06-matrix.html'), 'utf8');
const deltaPage = fs.readFileSync(path.join(root, 'pillar-04-delta.html'), 'utf8');
const price = /\$\s?\d|\b(?:14\.49|16\.99|18\.00|19\.99|30\.99|43\.99)\b/;
const introSrc = fs.readFileSync(path.join(root, 'registries/matrix-introduction.txt'), 'utf8').trim();
const introBlocks = introSrc.split(/\n\s*\n/).map((b) => b.replace(/\s+/g, ' ').trim());
const introAt = matrixPage.indexOf('id="matrix-introduction"');
const stageAt = matrixPage.indexOf('id="the-web-interactive"');
check('matrix introduction is present', introAt > 0);
check('introduction sits before the interactive web', introAt > 0 && stageAt > introAt);
check('page identity stays the MATRIX title', /<h1>MATRIX<\/h1>/.test(matrixPage));
check('introduction heading is not an essay title', matrixPage.includes('The Space Between Things Is Not Empty') && matrixPage.includes('pillar-canon-matrix-habitable-fascia'));
for (const block of introBlocks) {
  check(`introduction keeps exact line: ${block.slice(0, 42)}`, matrixPage.includes(block.replace(/'/g, '&#x27;')) || matrixPage.includes(block));
}
check('archive, essays, and opening film remain', matrixPage.includes('id="living-archive"') && matrixPage.includes('matrix-opening-scene.mp4') && matrixPage.includes('Preventing Cascade Failure'));
check('matrix page has the stage anchor', matrixPage.includes('id="the-web-interactive"'));
check('matrix cabinet and lessons anchors', matrixPage.includes('id="network-cabinet"') && matrixPage.includes('id="web-lessons"'));
check('delta cabinet and lesson anchors', deltaPage.includes('id="water-cabinet"') && deltaPage.includes('id="watershed-lessons"') && deltaPage.includes('id="circulation-hall"'));
check('matrix keeps the archive and films', matrixPage.includes('id="living-archive"') && matrixPage.includes('matrix-opening-scene.mp4') && matrixPage.includes('Eight arms. Four wings. Zero blind spots.'));
check('delta keeps Neris, beaver, osprey, and film', /Neris/.test(deltaPage) && /[Bb]eaver/.test(deltaPage) && /[Oo]sprey/.test(deltaPage) && deltaPage.includes('delta-opening-scene.mp4'));
check('no baked prices on the doors', !price.test(matrixPage) && !price.test(deltaPage));
check('stage does not print the proposed personal name', !/Skein/.test(matrixPage));
check('no on-stage form-unknown label', !/form unknown/i.test(matrixPage));
check('brass compass id is the verified product', matrixPage.includes('9052140404759') || matrixPage.includes('store-indya-brass-compass'));
check('six delta objects are named from the registry', ['DELTA-OBJ-01', 'DELTA-OBJ-02', 'DELTA-OBJ-03', 'DELTA-OBJ-04', 'DELTA-OBJ-05', 'DELTA-OBJ-06'].every((id) => deltaPage.includes(id)));
check('sourcing targets are not product links', deltaPage.includes('Not in the cabinet') && !deltaPage.includes('rain-gauge'));
check('free lessons do not require purchase', deltaPage.includes('No purchase required') && matrixPage.includes('No purchase required'));
check('animals are described as mirrors', matrixPage.includes('mirror of the living design') && deltaPage.includes('mirror of the living design'));
check('generator still emits the doors', fs.readFileSync(path.join(root, 'build_pillars.py'), 'utf8').includes('living_door_html'));

const linkedSource = [
  matrixPage,
  deltaPage,
  fs.readFileSync(path.join(root, 'js/matrix-ensemble.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'js/matrix-stage.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'js/delta-waterworks.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'living_doors.py'), 'utf8'),
].join('\n');
const newAssets = [
  '/img/matrix/pearl-octopus-library-fountain.webp',
  '/img/matrix/pearl-spider-library-web.webp',
  '/img/matrix/web-guardian-and-spider-library.png',
  '/img/matrix/poster-matrix-chaos-into-calm.png',
  '/img/matrix/poster-spider-jeweled-greeting.jpg',
  '/css/living-rooms.css',
  '/js/matrix-stage.js',
  '/js/matrix-ensemble.js',
  '/js/matrix-web.js',
  '/js/delta-waterworks.js',
  '/js/delta-flow.js',
  '/js/shop-live.js',
];
for (const asset of newAssets) {
  const file = path.join(root, asset.slice(1));
  const needle = asset.split('/').pop();
  check(`new asset linked and present ${asset}`, (linkedSource.includes(asset) || linkedSource.includes(needle)) && fs.existsSync(file));
}

const out = path.join(root, 'tests', 'living-door-results.json');
fs.writeFileSync(out, JSON.stringify(results, null, 2));
console.log(results.ok ? `ok ${results.checks.length}` : `failed ${results.checks.filter((c) => !c.pass).length}`);
process.exit(results.ok ? 0 : 1);
