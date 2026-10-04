// Optional ambient sound, generated with WebAudio (no files). OFF by default; only starts after the reader taps the toggle.
let ac = null, master = null, on = false, chimeTimer = null;
const A = 432 / 4; // a soft A-based pad (108 Hz family)
function build() {
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
  ac = new AC(); master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.4; lp.connect(master);
  const pad = ac.createGain(); pad.gain.value = 0.32; pad.connect(lp);
  [[A, 'sine', 0], [A * 1.5, 'triangle', 3], [A * 2, 'sine', -4], [A * 3, 'sine', 2], [A * 2.5, 'sine', -2]].forEach(([f, type, det], i) => {
    const o = ac.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = det;
    const g = ac.createGain(); g.gain.value = i < 3 ? 0.22 : 0.07;
    const lfo = ac.createOscillator(); lfo.frequency.value = 0.05 + i * 0.023; const lg = ac.createGain(); lg.gain.value = g.gain.value * 0.6; lfo.connect(lg); lg.connect(g.gain);
    o.connect(g); g.connect(pad); o.start(); lfo.start();
  });
  return true;
}
function chimeLoop() {
  clearTimeout(chimeTimer); if (!on) return;
  const scale = [A * 4, A * 4.5, A * 5, A * 6, A * 6.75, A * 8];
  tone(scale[(Math.random() * scale.length) | 0], 3.2, 0.05);
  chimeTimer = setTimeout(chimeLoop, 3500 + Math.random() * 6000);
}
export function tone(freq, dur = 1.8, vol = 0.12) {
  if (!on || !ac) return;
  const t = ac.currentTime, g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); g.connect(master);
  for (const [m, v] of [[1, 1], [2.01, 0.25], [3.02, 0.08]]) { const o = ac.createOscillator(); o.type = 'sine'; o.frequency.value = freq * m; const og = ac.createGain(); og.gain.value = v; o.connect(og); og.connect(g); o.start(t); o.stop(t + dur + 0.05); }
}
export function arpeggio(freqs, gap = 0.16, vol = 0.1) { freqs.forEach((f, i) => setTimeout(() => tone(f, 2.2, vol), i * gap * 1000)); }
export function setSound(want) {
  if (want && !ac && !build()) return false;
  on = !!want;
  if (!ac) return on;
  const t = ac.currentTime; master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t);
  if (on) { ac.resume(); master.gain.linearRampToValueAtTime(0.5, t + 1.2); chimeLoop(); }
  else { master.gain.linearRampToValueAtTime(0, t + 0.5); clearTimeout(chimeTimer); setTimeout(() => { if (!on) ac.suspend(); }, 700); }
  return on;
}
export const soundIsOn = () => on;
