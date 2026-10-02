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
