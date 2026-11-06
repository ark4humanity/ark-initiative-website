/**
 * Resolve cabinet price and availability from the live Shopify collection.
 * The HTML never contains a price. If this request fails, the product link
 * still carries the live record and no availability is invented.
 */
(function () {
  var nodes = document.querySelectorAll('[data-shop-handle]');
  if (!nodes.length) return;
  var byCol = {};
  nodes.forEach(function (el) {
    var col = el.getAttribute('data-shop-collection');
    if (!col) return;
    (byCol[col] = byCol[col] || []).push(el);
  });

  function say(el, text) {
    var slot = el.querySelector('[data-shop-live]');
    if (slot) slot.textContent = text;
  }

  Object.keys(byCol).forEach(function (col) {
    var url = 'https://thearkinitiative.myshopify.com/collections/' + col + '/products.json?limit=50';
    fetch(url, { credentials: 'omit' })
      .then(function (r) {
        if (!r.ok) throw new Error('http');
        return r.json();
      })
      .then(function (data) {
        var products = (data && data.products) || [];
        byCol[col].forEach(function (el) {
          var handle = el.getAttribute('data-shop-handle');
          var product = null;
          for (var i = 0; i < products.length; i++) {
            if (products[i].handle === handle) product = products[i];
          }
          if (!product) {
            say(el, 'Not on the live cabinet right now. The lesson stays free.');
            return;
          }
          var variants = product.variants || [];
          var available = variants.some(function (v) { return v.available === true; });
          var prices = variants.map(function (v) { return v.price; }).filter(Boolean);
          if (!available) {
            say(el, 'Listed in the cabinet. Availability is not confirmed from here — open the product page.');
            return;
          }
          if (!prices.length) {
            say(el, 'On the cabinet now. The price is on the product page.');
            return;
          }
          var low = prices.slice().sort(function (a, b) { return parseFloat(a) - parseFloat(b); })[0];
          say(el, 'On the cabinet now. Live price from Shopify, from $' + low + '.');
        });
      })
      .catch(function () {
        byCol[col].forEach(function (el) {
          say(el, 'Open the cabinet to see price and availability.');
        });
      });
  });
})();
