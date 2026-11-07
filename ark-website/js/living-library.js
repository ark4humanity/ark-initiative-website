/* Living desks, lessons, and the center Hearth Nook.
   Books already on a pillar open through Discovery when that overlay exists.
   The hearth keeps drafts on this device only. Nothing here is uploaded. */
(function () {
  'use strict';

  var hearthKey = 'ark-hearth-nook-v1';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function shelfName(record) {
    if (record.shelf) return record.shelf;
    if (record.kind && record.kind !== 'book') return record.kind;
    return 'Volume';
  }

  function dedupe(records) {
    var seen = {};
    var out = [];
    records.forEach(function (r) {
      if (!r || !r.title) return;
      var key = r.title + '|' + (r.link || '');
      if (seen[key]) return;
      seen[key] = true;
      out.push(r);
    });
    return out;
  }

  function fromPage() {
    var nodes = document.querySelectorAll('[data-dv]');
    var records = [];
    Array.prototype.forEach.call(nodes, function (node) {
      if (node.closest && node.closest('[data-living-desk]')) return;
      try {
        records.push(JSON.parse(node.getAttribute('data-dv')));
      } catch (err) { /* skip a malformed shelf object */ }
    });
    return dedupe(records);
  }

  function fromEmbedded(root) {
    var node = root.querySelector('script[type="application/json"]');
    if (!node) return [];
    try {
      var data = JSON.parse(node.textContent);
      return dedupe(Array.isArray(data) ? data : []);
    } catch (err) {
      return [];
    }
  }

  var veil = null;
  var lastFocus = null;

  function ensureVeil() {
    if (veil) return veil;
    veil = document.createElement('div');
    veil.className = 'll-veil';
    veil.id = 'll-veil';
    veil.hidden = true;
    veil.setAttribute('role', 'dialog');
    veil.setAttribute('aria-modal', 'true');
    veil.setAttribute('aria-labelledby', 'll-book-title');
    veil.innerHTML =
      '<div class="ll-book" role="document">' +
      '<p class="ll-era" id="ll-book-era"></p>' +
      '<h2 id="ll-book-title"></h2>' +
      '<p class="ll-shelfmeta" id="ll-book-shelf"></p>' +
      '<blockquote id="ll-book-excerpt"></blockquote>' +
      '<p class="ll-src" id="ll-book-src"></p>' +
      '<div class="ll-actions">' +
      '<a id="ll-book-link" href="#">Read the full essay</a>' +
      '<button type="button" class="ll-btn" data-ll-close>Close the book</button>' +
      '</div></div>';
    document.body.appendChild(veil);
    veil.addEventListener('click', function (e) {
      if (e.target === veil || (e.target.closest && e.target.closest('[data-ll-close]'))) closeBook();
    });
    document.addEventListener('keydown', onKey);
    return veil;
  }

  function focusables(root) {
    return Array.prototype.filter.call(
      root.querySelectorAll('a[href], button:not([disabled]), input, select, textarea'),
      function (n) { return !n.hasAttribute('disabled') && n.getAttribute('aria-hidden') !== 'true'; }
    );
  }

  function onKey(e) {
    if (!veil || veil.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeBook();
      return;
    }
    if (e.key !== 'Tab') return;
    var list = focusables(veil);
    if (!list.length) return;
    var first = list[0];
    var last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function openBook(record, sourceEl) {
    if (window.Discovery && document.getElementById('dv-veil')) {
      window.Discovery.open(record, sourceEl);
      return;
    }
    var box = ensureVeil();
    lastFocus = sourceEl || document.activeElement;
    box.querySelector('#ll-book-era').textContent = record.era || '';
    box.querySelector('#ll-book-title').textContent = record.title || 'Untitled';
    var shelf = box.querySelector('#ll-book-shelf');
    var bits = [];
    if (record.pillar) bits.push(record.pillar);
    if (record.shelf) bits.push(record.shelf);
    shelf.textContent = bits.join(' · ');
    box.querySelector('#ll-book-excerpt').textContent = record.excerpt || 'This shelf names the work. The full piece is one step away.';
    box.querySelector('#ll-book-src').textContent = record.source_label || record.provenance || 'Excerpt already published on this Ark shelf.';
    var link = box.querySelector('#ll-book-link');
    if (record.link) {
      link.hidden = false;
      link.href = record.link;
      link.textContent = record.linklabel || 'Read the full essay';
    } else {
      link.hidden = true;
      link.removeAttribute('href');
    }
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    var closer = box.querySelector('[data-ll-close]');
    if (closer) closer.focus();
  }

  function closeBook() {
    if (!veil || veil.hidden) return;
    veil.hidden = true;
    document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) {
      try { lastFocus.focus({ preventScroll: true }); } catch (err) { lastFocus.focus(); }
    }
  }

  function mountDesk(root) {
    var records = root.getAttribute('data-ll-source') === 'embedded' ? fromEmbedded(root) : fromPage();
    var books = root.querySelector('[data-ll-books]');
    var filters = root.querySelector('[data-ll-filters]');
    var search = root.querySelector('[data-ll-search]');
    var count = root.querySelector('[data-ll-count]');
    var empty = root.querySelector('[data-ll-empty]');
    if (!books) return;
    var shelf = 'All';

    function shelves() {
      var names = [];
      records.forEach(function (r) {
        var name = shelfName(r);
        if (names.indexOf(name) === -1) names.push(name);
      });
      return names;
    }

    function drawFilters() {
      if (!filters) return;
      var names = ['All'].concat(shelves());
      filters.innerHTML = '';
      names.forEach(function (name) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'll-chip';
        b.textContent = name;
        b.setAttribute('aria-pressed', name === shelf ? 'true' : 'false');
        b.addEventListener('click', function () {
          shelf = name;
          drawFilters();
          draw();
        });
        filters.appendChild(b);
      });
    }

    function match(r, q) {
      var name = shelfName(r);
      if (shelf !== 'All' && name !== shelf) return false;
      if (!q) return true;
      var hay = (r.title + ' ' + name + ' ' + (r.excerpt || '') + ' ' + (r.era || '')).toLowerCase();
      return hay.indexOf(q) !== -1;
    }

    function draw() {
      var q = search ? search.value.trim().toLowerCase() : '';
      var shown = records.filter(function (r) { return match(r, q); });
      books.innerHTML = '';
      shown.forEach(function (r) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'll-bookbtn';
        var name = shelfName(r);
        b.setAttribute('aria-label', 'Open ' + r.title);
        b.innerHTML = '<span class="ll-k">' + esc(name) + '</span><strong>' + esc(r.title) + '</strong>';
        b.addEventListener('click', function () { openBook(r, b); });
        books.appendChild(b);
      });
      if (count) {
        count.textContent = shown.length === records.length
          ? (records.length + (records.length === 1 ? ' book on this desk.' : ' books on this desk.'))
          : ('Showing ' + shown.length + ' of ' + records.length + ' books.');
      }
      if (empty) empty.hidden = shown.length !== 0;
    }

    if (!records.length) {
      if (empty) {
        empty.hidden = false;
        empty.textContent = 'This desk could not read the shelves. The objects already on the page still open on their own.';
      }
      return;
    }
    if (search) search.addEventListener('input', draw);
    drawFilters();
    draw();
  }

  function mountLesson(root) {
    var node = root.querySelector('script[type="application/json"]');
    var host = root.querySelector('[data-ll-quiz]');
    if (!node || !host) return;
    var questions;
    try { questions = JSON.parse(node.textContent); } catch (err) { questions = null; }
    if (!questions || !questions.length) {
      host.textContent = 'This lesson could not be read.';
      return;
    }
    var progress = document.createElement('p');
    progress.className = 'll-progress';
    progress.setAttribute('aria-live', 'polite');
    host.appendChild(progress);
    var solved = {};

    function paintProgress() {
      var n = Object.keys(solved).length;
      progress.textContent = n + ' of ' + questions.length + ' matched the shelf.';
    }

    questions.forEach(function (q, qi) {
      var field = document.createElement('fieldset');
      field.className = 'll-q';
      var legend = document.createElement('legend');
      legend.textContent = q.q;
      field.appendChild(legend);
      var why = document.createElement('p');
      why.className = 'll-why';
      why.setAttribute('aria-live', 'polite');
      (q.choices || []).forEach(function (choice) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'll-choice';
        b.textContent = choice.t;
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(field.querySelectorAll('.ll-choice'), function (other) {
            other.setAttribute('aria-pressed', 'false');
            other.classList.remove('is-yes', 'is-no');
          });
          b.setAttribute('aria-pressed', 'true');
          b.classList.add(choice.ok ? 'is-yes' : 'is-no');
          why.textContent = choice.why;
          if (choice.ok) solved[qi] = true;
          else delete solved[qi];
          paintProgress();
        });
        field.appendChild(b);
      });
      field.appendChild(why);
      host.appendChild(field);
    });
    paintProgress();
  }

  function loadHearth() {
    try {
      var raw = localStorage.getItem(hearthKey);
      var data = raw ? JSON.parse(raw) : null;
      if (!data || typeof data !== 'object') return { v: 1, drafts: {}, notes: [] };
      data.drafts = data.drafts || {};
      data.notes = Array.isArray(data.notes) ? data.notes : [];
      return data;
    } catch (err) {
      return { v: 1, drafts: {}, notes: [], blocked: true };
    }
  }

  function saveHearth(data) {
    try {
      localStorage.setItem(hearthKey, JSON.stringify({ v: 1, drafts: data.drafts, notes: data.notes }));
      return true;
    } catch (err) {
      return false;
    }
  }

  function mountHearth(root) {
    var state = loadHearth();
    var table = root.querySelector('[data-hearth-table]');
    var tableStatus = root.querySelector('[data-hearth-table-status]');
    var audio = root.querySelector('audio');
    if (audio) {
      audio.autoplay = false;
      audio.removeAttribute('autoplay');
      audio.pause();
    }

    function seatName(id) {
      var seat = root.querySelector('[data-seat="' + id + '"]');
      var h = seat ? seat.querySelector('h3') : null;
      return h ? h.textContent : id;
    }

    function renderTable() {
      if (!table) return;
      table.innerHTML = '';
      var ids = Object.keys(state.drafts).filter(function (id) { return (state.drafts[id] || '').trim(); });
      if (!ids.length && !state.notes.length) {
        table.innerHTML = '<p class="ll-slip">The table is empty. A draft you write above can sit here on this device. Nothing is posted to the Ark.</p>';
      }
      ids.forEach(function (id) {
        var slip = document.createElement('article');
        slip.className = 'll-slip';
        slip.innerHTML = '<b>' + esc(seatName(id)) + ' · local draft</b><p></p>';
        slip.querySelector('p').textContent = state.drafts[id];
        table.appendChild(slip);
      });
      state.notes.forEach(function (note) {
        var slip = document.createElement('article');
        slip.className = 'll-slip';
        slip.innerHTML = '<b>Note from ' + esc(seatName(note.from)) + ' to ' + esc(seatName(note.to)) + '</b><p></p><p class="ll-hint"></p>';
        slip.querySelector('p').textContent = note.text;
        slip.querySelector('.ll-hint').textContent = 'Kept on this device' + (note.at ? ' · ' + note.at : '') + '. Not a public posting.';
        table.appendChild(slip);
      });
      if (tableStatus) {
        tableStatus.textContent = ids.length + ' local drafts and ' + state.notes.length + ' local notes. None of these leave this browser.';
      }
    }

    Array.prototype.forEach.call(root.querySelectorAll('[data-seat]'), function (seat) {
      var id = seat.getAttribute('data-seat');
      var box = seat.querySelector('textarea');
      var status = seat.querySelector('[data-seat-status]');
      if (!box) return;
      if (state.drafts[id]) box.value = state.drafts[id];
      var timer = null;
      box.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          state.drafts[id] = box.value;
          var ok = saveHearth(state);
          if (status) {
            status.textContent = ok
              ? 'Saved on this device only. Not posted.'
              : 'This browser would not store the draft. You can still download it.';
          }
          renderTable();
        }, 250);
      });
      var hearBtn = seat.querySelector('[data-hear]');
      if (hearBtn) {
        hearBtn.addEventListener('click', function () {
          var text = box.value.trim();
          if (!text) {
            if (status) status.textContent = 'Write a few words first. Nothing is recorded.';
            return;
          }
          if (!window.speechSynthesis) {
            if (status) status.textContent = 'This browser has no speaking voice. The words stay on the page. Nothing was recorded.';
            return;
          }
          if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            hearBtn.textContent = 'Hear on this device';
            hearBtn.setAttribute('aria-pressed', 'false');
            if (status) status.textContent = 'Stopped. Nothing was saved as a recording.';
            return;
          }
          var utter = new SpeechSynthesisUtterance(text.slice(0, 1200));
          utter.onend = function () {
            hearBtn.textContent = 'Hear on this device';
            hearBtn.setAttribute('aria-pressed', 'false');
            if (status) status.textContent = 'Finished. That was this device speaking your draft, not a stored performance.';
          };
          window.speechSynthesis.speak(utter);
          hearBtn.textContent = 'Stop';
          hearBtn.setAttribute('aria-pressed', 'true');
          if (status) status.textContent = 'Playing on this device only. Not a public recording.';
        });
      }
      var download = seat.querySelector('[data-download]');
      if (download) {
        download.addEventListener('click', function () {
          var text = box.value.trim();
          var body = 'Hearth Nook local draft — ' + seatName(id) + '\n' +
            'This file was made on this device. It was not posted to the Ark.\n\n' +
            (text || '(empty draft)');
          var blob = new Blob([body], { type: 'text/plain;charset=utf-8' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'ark-hearth-' + id + '.txt';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
          if (status) status.textContent = 'Download started: ark-hearth-' + id + '.txt. It is a local file, not a public posting.';
        });
      }
    });

    var pass = root.querySelector('[data-pass-note]');
    if (pass) {
      pass.addEventListener('click', function () {
        var from = root.querySelector('[data-note-from]');
        var to = root.querySelector('[data-note-to]');
        var text = root.querySelector('[data-note-text]');
        var status = root.querySelector('[data-note-status]');
        var body = text ? text.value.trim() : '';
        if (!body) {
          if (status) status.textContent = 'Write the note first. An empty slip is not passed.';
          return;
        }
        state.notes.unshift({
          from: from ? from.value : '',
          to: to ? to.value : '',
          text: body,
          at: new Date().toISOString().slice(0, 16).replace('T', ' ')
        });
        if (state.notes.length > 40) state.notes.length = 40;
        var ok = saveHearth(state);
        if (text) text.value = '';
        if (status) {
          status.textContent = ok
            ? 'The note is on this device\'s table. It was not uploaded.'
            : 'This browser would not store the note. It is still in the box above if you copy it.';
        }
        renderTable();
      });
    }

    var clearBtn = root.querySelector('[data-clear-local]');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (clearBtn.getAttribute('data-armed') !== 'yes') {
          clearBtn.setAttribute('data-armed', 'yes');
          clearBtn.textContent = 'Click again to clear this device\'s drafts';
          return;
        }
        state.drafts = {};
        state.notes = [];
        saveHearth(state);
        Array.prototype.forEach.call(root.querySelectorAll('[data-seat] textarea'), function (box) { box.value = ''; });
        var note = root.querySelector('[data-note-text]');
        if (note) note.value = '';
        clearBtn.removeAttribute('data-armed');
        clearBtn.textContent = 'Clear drafts on this device';
        var status = root.querySelector('[data-note-status]');
        if (status) status.textContent = 'Cleared on this device. Nothing had been posted.';
        renderTable();
      });
    }

    renderTable();
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-living-desk]'), mountDesk);
    Array.prototype.forEach.call(document.querySelectorAll('[data-living-lesson]'), mountLesson);
    Array.prototype.forEach.call(document.querySelectorAll('[data-hearth]'), mountHearth);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.ArkLivingLibrary = { dedupe: dedupe, openBook: openBook, closeBook: closeBook };
})();
