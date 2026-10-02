// Page entry for /spielerhandbuch/vorgeschichte.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';

;(function () {
/* ══════════════════════════════════════════
   STARFIELD
   ══════════════════════════════════════════ */
(function () {
  var canvas = document.getElementById('starfield');
  var ctx = canvas.getContext('2d');
  var W, H, stars = [], t = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkStars() {
    stars = [];
    for (var i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.1 + 0.18,
        a: Math.random() * 0.65 + 0.15,
        sp: Math.random() * 0.08 + 0.04,
        ph: Math.random() * Math.PI * 2
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    t += 1;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var op = s.a * (0.35 + 0.65 * Math.abs(Math.sin(t * s.sp + s.ph)));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(210,200,255,' + op + ')';
      ctx.fill();
    }
    var g = ctx.createRadialGradient(W * 0.5, H * 0.38, 0, W * 0.5, H * 0.38, W * 0.44);
    g.addColorStop(0, 'rgba(124,77,255,0.045)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    requestAnimationFrame(frame);
  }

  resize(); mkStars(); frame();
  window.addEventListener('resize', function () { resize(); mkStars(); });
}());

/* ══════════════════════════════════════════
   IMAGE SLOTS
   ══════════════════════════════════════════ */
document.querySelectorAll('.slot[data-slot]').forEach(function (el) {
  var id  = el.dataset.slot;
  var key = 'mslot-v2-' + id;
  var inp = el.querySelector('input[type=file]');

  function applyImg(src) {
    var img = el.querySelector('img');
    if (!img) {
      img = document.createElement('img'); el.appendChild(img);
      var lbl = document.createElement('div'); lbl.className = 'swap'; lbl.textContent = 'ersetzen'; el.appendChild(lbl);
    }
    img.src = src;
  }

  try { var saved = localStorage.getItem(key); if (saved) applyImg(saved); } catch (e) {}

  function loadFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    var r = new FileReader();
    r.onload = function (ev) {
      applyImg(ev.target.result);
      try { localStorage.setItem(key, ev.target.result); } catch (e) {}
    };
    r.readAsDataURL(file);
  }

  el.addEventListener('click', function (e) { if (e.target !== inp) inp.click(); });
  inp.addEventListener('change', function () { loadFile(inp.files[0]); });
  el.addEventListener('dragover',  function (e) { e.preventDefault(); el.classList.add('drag-over'); });
  el.addEventListener('dragleave', function ()  { el.classList.remove('drag-over'); });
  el.addEventListener('drop',      function (e) { e.preventDefault(); el.classList.remove('drag-over'); loadFile(e.dataTransfer.files[0]); });
});

/* ══════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════ */
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('vis'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  document.querySelectorAll('[data-rev]').forEach(function (el) { io.observe(el); });
}());


(function () {
const {
  SiteNav,
  SiteGate
} = window;
ReactDOM.createRoot(document.getElementById('nav-root')).render(/*#__PURE__*/React.createElement(SiteGate, null, /*#__PURE__*/React.createElement(SiteNav, null)));
})();

})();
