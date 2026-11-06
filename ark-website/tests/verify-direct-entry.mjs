/**
 * Fresh-browser entry. No journey storage is written or required.
 * Direct pillar and room URLs must open that world. HALO stays a link,
 * not a covering gate. .html, slash, and extensionless paths are the same page.
 */
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CABINET = 'https://thearkinitiative.myshopify.com/collections/matrix-the-network-cabinet';
const chrome = process.env.CHROME || '/usr/bin/google-chrome';

const puppeteer = await import(
  fs.existsSync('/tmp/pwcore/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js')
    ? '/tmp/pwcore/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js'
    : 'puppeteer-core'
).then((m) => m.default);

const WORLDS = [
  '/pillar-01-aura-prime.html',
  '/pillar-02-halo.html',
  '/pillar-03-vagus.html',
  '/pillar-04-delta.html',
  '/pillar-05-asherah.html',
  '/pillar-06-matrix.html',
  '/pillar-07-aeon.html',
  '/pillar-08-exchange.html',
  '/pillar-09-vega.html',
  '/pillar-10-ark.html',
  '/pillar-11-terra.html',
  '/pillar-12-soma.html',
  '/pillar-13-symbiosis.html',
  '/halo-gate.html',
  '/ashera-garden.html',
  '/asherah-kitchen.html',
  '/pillars.html',
];

const failures = [];
function expect(name, cond, detail = '') {
  if (!cond) {
    failures.push(`${name}${detail ? ': ' + detail : ''}`);
    console.error('FAIL', name, detail);
  } else {
    console.log('ok', name);
  }
}

function resolveFile(urlPath) {
  let pathname = decodeURIComponent(urlPath.split('?')[0]);
  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  if (pathname === '' || pathname === '/') pathname = '/index.html';
  const rels = [pathname, pathname + '.html'].map((p) => p.replace(/^\/+/, ''));
  for (const rel of rels) {
    const full = path.resolve(root, rel);
    if (!full.startsWith(root + path.sep) && full !== root) continue;
    if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

function bodyFor(file) {
  const data = fs.readFileSync(file);
  if (!file.endsWith('.html')) return data;
  let html = data.toString('utf8');
  if (!html.includes('/js/ark-path.js')) {
    html = html.replace('</body>', '<script src="/js/ark-path.js"></script></body>');
  }
  return Buffer.from(html);
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  if (!file) {
    res.writeHead(404);
    res.end('missing');
    return;
  }
  const ext = path.extname(file);
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  res.end(bodyFor(file));
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const source = fs.readFileSync(path.join(root, 'js/ark-path.js'), 'utf8');
expect('shared journey script has no covering gate', !/ark-gate|Every road into the Ark begins at HALO|localStorage/.test(source));
expect('generator still includes the shared journey script', fs.readFileSync(path.join(root, 'build_pillars.py'), 'utf8').includes('src="/js/ark-path.js"'));
const matrixHtml = fs.readFileSync(path.join(root, 'pillar-06-matrix.html'), 'utf8');
expect('matrix cabinet link is the published collection', matrixHtml.includes(`href="${CABINET}"`));
expect('matrix cabinet is not a different collection', !/collections\/matrix-(?!the-network-cabinet)/.test(matrixHtml));

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ['--no-sandbox', '--disable-gpu'],
});

async function freshPage() {
  const context = await (browser.createBrowserContext
    ? browser.createBrowserContext()
    : browser.createIncognitoBrowserContext());
  const page = await context.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  return { context, page };
}

async function openFresh(urlPath) {
  const { context, page } = await freshPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(String(err)));
  await page.goto(base + urlPath, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__arkPath === true);
  const state = await page.evaluate(() => ({
    gate: document.querySelectorAll('.ark-gate').length,
    blocked: /Every road into the Ark begins at HALO/.test(document.body.innerText),
    overflow: document.documentElement.style.overflow,
    stored: localStorage.getItem('ark.path.v1'),
    path: location.pathname,
    hash: location.hash,
  }));
  const scriptErrors = errors.filter((line) => !/Failed to load resource/i.test(line));
  return { context, page, state, scriptErrors };
}

for (const world of WORLDS) {
  const opened = await openFresh(world);
  expect(`fresh entry ${world}`, opened.state.gate === 0 && !opened.state.blocked && opened.state.overflow !== 'hidden' && opened.state.stored == null, JSON.stringify(opened.state));
  expect(`no script error ${world}`, opened.scriptErrors.length === 0, opened.scriptErrors.join(' | '));
  await opened.context.close();
}

for (const variant of [
  '/pillar-06-matrix',
  '/pillar-06-matrix/',
  '/pillar-06-matrix.html',
  '/pillar-04-delta',
  '/pillar-04-delta/',
  '/pillar-04-delta.html',
]) {
  const opened = await openFresh(variant);
  expect(`canonical route stays open ${variant}`, opened.state.gate === 0 && !opened.state.blocked && opened.state.stored == null, JSON.stringify(opened.state));
  await opened.context.close();
}

{
  const opened = await openFresh('/pillar-06-matrix#the-web-interactive');
  const page = opened.page;
  expect('matrix hash opens the web', opened.state.hash === '#the-web-interactive' && opened.state.gate === 0);
  await page.waitForSelector('#mx-continue');
  async function untilChoices() {
    for (let i = 0; i < 8; i++) {
      const waiting = await page.$eval('#mx-choices', (el) => el.hidden);
      if (!waiting) return;
      await page.$eval('#mx-continue', (el) => el.click());
    }
    throw new Error('choices never appeared');
  }
  async function choose(text) {
    await untilChoices();
    const found = await page.$$eval('#mx-choices button', (buttons, wanted) => {
      const btn = buttons.find((b) => b.textContent.includes(wanted));
      if (!btn) return false;
      btn.click();
      return true;
    }, text);
    if (!found) throw new Error('missing choice ' + text);
  }
  await choose('Touch a glowing thread');
  await choose('Try to break a hard thread');
  const broken = await page.$eval('#mx-silk path[data-edge="strand-hard"]', (el) => el.classList.contains('broken'));
  expect('fresh matrix can cut a strand', broken);
  await choose('All of you');
  await untilChoices();
  const spoken = await page.$eval('#mx-dialogue', (el) => el.innerText);
  const stillBlocked = await page.$eval('body', (el) => /Every road into the Ark begins at HALO/.test(el.innerText) || !!el.querySelector('.ark-gate'));
  expect('fresh matrix group mend without HALO', /humming/i.test(spoken) && !/mend in progress/i.test(spoken) && !stillBlocked, spoken.slice(0, 240));
  const cabinet = await page.$$eval('a', (links, exact) => links.some((a) => a.href === exact), CABINET);
  expect('matrix page links the exact Shopify cabinet', cabinet);
  await opened.context.close();
}

{
  const opened = await openFresh('/pillar-04-delta#living-waterworks');
  const page = opened.page;
  expect('delta hash opens the waterworks', opened.state.hash === '#living-waterworks' && opened.state.gate === 0);
  await page.waitForSelector('#living-waterworks [data-flow="wide"]');
  await page.$eval('#living-waterworks [data-flow="wide"]', (el) => el.click());
  const mode = await page.$eval('#living-waterworks', (el) => el.dataset.mode);
  expect('fresh delta channel works without HALO', mode === 'wide');
  await opened.context.close();
}

await browser.close();
server.close();
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('direct entry checks passed');
