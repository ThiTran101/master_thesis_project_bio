(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('#toc a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function update() {
    var current = 0;
    sections.forEach(function (s, i) {
      if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.3) current = i;
    });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
