/* Living Archive discovery-object controller (Pillar 07 AEON pattern,
 * rolled out to all thirteen pillars).
 *
 * One reusable controller. No per-object JavaScript. Any element carrying
 * [data-dv] opens the revealed-knowledge overlay; the overlay always closes
 * back to the exact scroll position and restores focus to the object opened.
 *
 * Data contract (JSON in data-dv):
 *   kind:      book | jar | vessel | scroll | drawer | map | screen | film
 *   title, era, excerpt,
 *   source_label   human-readable provenance line (author/date/recovery note)
 *   source_data_ref  IMMUTABLE source key ONLY: canonical local path
 *     (essays/before-babel-broke-us-2025.html) or real Drive file ID.
 *     Never a descriptive phrase, never a URI-shaped guess. When the true
 *     source ID is unknown, the local canonical path is the key and the
 *     uncertainty lives in source_label.
 *   pillar     canonical pillar name ONLY (Aura Prime, Halo, Vagus, Delta,
 *     Asherah, Matrix, Aeon, Exchange, Vega, Ark, Terra, Soma, Symbiosis).
 *     Thematic labels live in collection/shelf/theme, never in pillar.
 *   slot       (optional) discoverable slot id, e.g. ark_fl_001
 *   collection, shelf, theme  (optional curatorial grouping)
 *   evidence, link, linklabel,
 *   notice     (optional, e.g. draft / tentative flags)
 *   media      (optional {mkind:'video'|'image', src, poster, alt})
 *   art        (optional [{src, alt, cap}] alternate-art plates)
 *   chapters   (optional [{t:title, q:quote|null, link, linklabel}];
 *     a chapter may carry its own link, else it uses the record link)
 *   provenance (legacy alias of source_label; new records use source_label)
 *
 * SCHEMA STATUS: Queen's schema v1.1.0 is ACCEPTED FOR IMPLEMENTATION, not
 * locked. It earns "locked" after the three real objects (ark_fl_001,
 * ark_bb_002, ark_qe_003) run through it and the public hull behaves.
 *
 * VESSEL REVEAL (kind vessel/jar): TAP -> INSTANT ACK (the reading surface
 * begins appearing immediately; a dust disturbance and faint interior glow
 * play once) -> ~0.8s progressive papyrus-unroll transition -> COMPLETE TEXT
 * all at once. The unroll animation may be progressive; the TEXT may not:
 * text is set whole before the veil opens, never rendered line-by-line.
 * Reduced-motion path: instant complete reading surface, zero animation,
 * zero information loss.
 * "The animation is an invitation, not a tollbooth. Fast enough to
 * disappear. Beautiful enough to remember."
 *
 * QUEEN PLUG-IN POINT: Discovery.open(record, sourceEl) is the single entry
 * for opening a record, mirroring the StacksOverlay.open boundary on the
 * library page. A future runtime (Queen's primitive, a spoken interface,
 * anything) may call Discovery.open directly with a record object shaped
 * like the contract above; the overlay, focus, and return behavior stay
 * identical. Nothing else in this file is load-bearing for a plug-in.
 */
(function () {
  'use strict';

  var veil = document.getElementById('dv-veil');
  if (!veil) return;
  var bookwrap = veil.querySelector('.dv-bookwrap');
  var elEra = document.getElementById('dv-era');
  var elTitle = document.getElementById('dv-title');
  var elPillar = document.getElementById('dv-pillar');
  var elEv = document.getElementById('dv-evidence');
  var elExcerpt = document.getElementById('dv-excerpt');
  var elMedia = document.getElementById('dv-media');
  var elArt = document.getElementById('dv-art');
  var elCh = document.getElementById('dv-chapters');
  var elNotice = document.getElementById('dv-notice');
  var elProv = document.getElementById('dv-prov');
  var elLink = document.getElementById('dv-link');

  var lastFocus = null;
  var lastScroll = 0;
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function open(record, sourceEl) {
    if (!record) return;
    lastFocus = sourceEl || document.activeElement;
    lastScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    var kind = record.kind || 'book';
    var isVessel = (kind === 'vessel' || kind === 'jar') && !reduceMotion;
    veil.className = 'dv-veil dv-kind-' + kind + (isVessel ? ' dv-vessel' : '');
    elEra.textContent = record.era || '';
    elTitle.textContent = record.title || '';
    elExcerpt.textContent = record.excerpt || '';
    /* source_label carries the human-readable provenance; provenance is the
       legacy alias kept for records written before the schema correction. */
    elProv.textContent = record.source_label || record.provenance || '';

    if (elPillar) {
      if (record.pillar) {
        elPillar.hidden = false;
        elPillar.textContent = 'SHELVED IN · ' + record.pillar +
          (record.shelf ? ' · ' + record.shelf : '');
      } else { elPillar.hidden = true; }
    }

    if (record.theme && elPillar && !elPillar.hidden) {
      elPillar.textContent += ' · ' + record.theme;
    }

    if (record.evidence) {
      elEv.hidden = false;
      elEv.textContent = 'EVIDENCE · ' + record.evidence;
    } else { elEv.hidden = true; }

    if (record.notice) {
      elNotice.hidden = false;
      elNotice.textContent = record.notice;
    } else { elNotice.hidden = true; }

    elMedia.hidden = true;
    elMedia.innerHTML = '';
    if (record.media && record.media.src) {
      var m = record.media;
      if (m.mkind === 'video') {
        elMedia.innerHTML = '<video controls playsinline preload="metadata"' +
          (m.poster ? ' poster="' + esc(m.poster) + '"' : '') +
          ' src="' + esc(m.src) + '"' +
          (m.alt ? ' aria-label="' + esc(m.alt) + '"' : '') + '></video>';
      } else {
        elMedia.innerHTML = '<img src="' + esc(m.src) + '" alt="' + esc(m.alt || record.title || '') + '">';
      }
      elMedia.hidden = false;
    }

    if (elArt) {
      elArt.hidden = true;
      elArt.innerHTML = '';
      if (record.art && record.art.length) {
        var ah = '<h3>PLATES</h3><div class="dv-plates">';
        record.art.forEach(function (a) {
          ah += '<figure class="dv-plate"><img src="' + esc(a.src) + '" alt="' +
            esc(a.alt || record.title || '') + '" loading="lazy">' +
            (a.cap ? '<figcaption>' + esc(a.cap) + '</figcaption>' : '') + '</figure>';
        });
        elArt.innerHTML = ah + '</div>';
        elArt.hidden = false;
      }
    }

    /* Instant acknowledgment for vessels: a dust disturbance and faint
       interior glow play once over the immediately-appearing surface. */
    var oldDust = veil.querySelector('.dv-dust');
    if (oldDust) oldDust.remove();
    if (isVessel) {
      var dust = document.createElement('div');
      dust.className = 'dv-dust';
      dust.setAttribute('aria-hidden', 'true');
      bookwrap.insertBefore(dust, bookwrap.firstChild);
    }

    elCh.hidden = true;
    elCh.innerHTML = '';
    if (record.chapters && record.chapters.length) {
      var h = '<h3>INSIDE THIS VOLUME</h3>';
      record.chapters.forEach(function (c, i) {
        var clink = c.link || record.link || '#';
        var clabel = c.linklabel || record.linklabel || 'Read in full';
        if (c.q) {
          h += '<button type="button" class="dv-ch" aria-expanded="false" data-ch="' + i + '">' +
            '<span class="dv-cht">' + esc(c.t) + '</span>' +
            '<span class="dv-chq">' + esc(c.q) + '</span></button>';
        } else {
          h += '<a class="dv-ch" href="' + esc(clink) + '" aria-label="' + esc(c.t + ' — ' + clabel) + '">' +
            '<span class="dv-cht">' + esc(c.t) + '</span></a>';
        }
      });
      elCh.innerHTML = h;
      elCh.hidden = false;
    }

    if (record.link) {
      elLink.href = record.link;
      elLink.textContent = record.linklabel || 'Read in full';
      elLink.style.display = '';
    } else { elLink.style.display = 'none'; }

    veil.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    var closer = veil.querySelector('[data-dv-close]');
    if (closer) closer.focus();
  }

  function close() {
    if (veil.hidden) return;
    veil.hidden = true;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (typeof lastScroll === 'number') window.scrollTo(0, lastScroll);
    if (lastFocus && lastFocus.focus) {
      try { lastFocus.focus({ preventScroll: true }); } catch (e) { lastFocus.focus(); }
    }
  }

  document.addEventListener('click', function (e) {
    var opener = e.target.closest ? e.target.closest('[data-dv]') : null;
    if (opener) {
      try {
        open(JSON.parse(opener.getAttribute('data-dv')), opener);
      } catch (err) { /* malformed record: do nothing */ }
      return;
    }
    if (e.target === veil || (e.target.closest && e.target.closest('[data-dv-close]'))) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !veil.hidden) close();
  });

  elCh.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-ch]') : null;
    if (!b) return;
    var openState = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', openState ? 'false' : 'true');
  });

  /* The pedestal reveal: a flagship volume is found, not announced.
     When it scrolls into view it wakes once. Every pillar's pedestal
     carries .disc-pedestal; AEON's keeps its id for history. */
  var peds = document.querySelectorAll('.disc-pedestal');
  if (peds.length && !reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('awake');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.35 });
    Array.prototype.forEach.call(peds, function (p) { io.observe(p); });
  } else if (peds.length) {
    Array.prototype.forEach.call(peds, function (p) { p.classList.add('awake'); });
  }

  /* Curiosity cue: every so often one object quietly asks for attention. */
  if (!reduceMotion) {
    var discs = Array.prototype.slice.call(document.querySelectorAll('.disc-field .disc'));
    if (discs.length > 1) {
      setInterval(function () {
        if (!veil.hidden) return;
        discs.forEach(function (d) { d.classList.remove('evcue'); });
        var pick = discs[Math.floor(Math.random() * discs.length)];
        pick.classList.add('evcue');
        setTimeout(function () { pick.classList.remove('evcue'); }, 2700);
      }, 8000);
    }
  }

  window.Discovery = { open: open, close: close };
})();
