(function () {
  var world = document.getElementById('matrix-world');
  if (!world) return;

  var reduce = document.getElementById('mw-reduce');
  function applyReduce(on) {
    world.classList.toggle('reduce-motion', on);
    var stage = document.getElementById('the-web-interactive');
    if (stage) stage.classList.toggle('reduce-motion', on);
  }
  if (reduce) {
    reduce.addEventListener('change', function () { applyReduce(reduce.checked); });
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reduce.checked = true;
      applyReduce(true);
    }
  }

  var orient = document.getElementById('mw-orient-line');
  world.querySelectorAll('[data-face]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var face = btn.getAttribute('data-face');
      world.querySelectorAll('[data-face]').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      if (!orient) return;
      orient.textContent = face === 'field'
        ? 'The needle keeps north while you turn. The field was never yours to hoard.'
        : 'One arm volunteers to be the hero. The other seven file a complaint and a better route.';
    });
  });

  var loadLine = document.getElementById('mw-load-line');
  var strands = world.querySelectorAll('.mw-strands path');
  world.querySelectorAll('[data-share]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var mode = btn.getAttribute('data-share');
      world.querySelectorAll('[data-share]').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      strands.forEach(function (path, i) {
        path.classList.toggle('hot', mode === 'one' && i === 0);
        path.classList.toggle('shared', mode === 'all');
        path.classList.toggle('slack', mode === 'one' && i !== 0);
      });
      if (!loadLine) return;
      loadLine.textContent = mode === 'one'
        ? 'One strand is doing all the bragging. It will tire. The other two are waiting to be asked.'
        : 'The weight is shared. Nothing had to be a martyr. The studio hums.';
    });
  });

  var nodes = world.querySelectorAll('[data-shop-handle]');
  if (!nodes.length) return;
  fetch('https://thearkinitiative.myshopify.com/collections/matrix-the-network-cabinet/products.json?limit=50', { credentials: 'omit' })
    .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
    .then(function (data) {
      var products = (data && data.products) || [];
      nodes.forEach(function (el) {
        var handle = el.getAttribute('data-shop-handle');
        var slot = el.querySelector('[data-shop-price]');
        var product = null;
        for (var i = 0; i < products.length; i++) if (products[i].handle === handle) product = products[i];
        if (!slot || !product) return;
        var prices = (product.variants || []).filter(function (v) { return v.available === true && v.price; }).map(function (v) { return v.price; });
        if (!prices.length) {
          slot.textContent = 'See the product page for the current price.';
          return;
        }
        prices.sort(function (a, b) { return parseFloat(a) - parseFloat(b); });
        slot.textContent = prices.length > 1 ? 'from $' + prices[0] : '$' + prices[0];
      });
    })
    .catch(function () {});
})();
