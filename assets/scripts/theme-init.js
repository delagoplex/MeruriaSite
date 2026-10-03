// Runs in <head> before first paint so the page never flashes the wrong theme.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  document.documentElement.dataset.theme = (saved === 'light') ? 'light' : 'dark';
})();

// With <base href="/"> a bare "#" link would jump to the home page; placeholder links do nothing.
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest && e.target.closest('a[href="#"]');
  if (a) e.preventDefault();
});

// CSS `zoom` on <html> scales the UI on WQHD/4K screens (see base.css). Measured values
// (getBoundingClientRect, clientX/Y, scrollY) are in visual px, style values in CSS px: divide by this.
window.uiZoom = function () {
  return parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
};

// getBoundingClientRect() in CSS px (i.e. divided by the html zoom), for positioning/sizing fixed elements.
window.uiRect = function (el) {
  var r = el.getBoundingClientRect(), z = window.uiZoom();
  return { left: r.left / z, top: r.top / z, right: r.right / z, bottom: r.bottom / z, width: r.width / z, height: r.height / z };
};

// Canvas 2D cannot resolve var(--x): read an RGB-triplet token ("160,140,255") for the current theme (cached per theme).
window.themeRgb = function (name) {
  var k = document.documentElement.dataset.theme + name, c = window.__themeRgbCache || (window.__themeRgbCache = {});
  return c[k] || (c[k] = getComputedStyle(document.documentElement).getPropertyValue(name).trim());
};
