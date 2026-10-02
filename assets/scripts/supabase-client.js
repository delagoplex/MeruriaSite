// Creates window._sb (the Supabase client used by every page).
//
// Production: the real project below.
// Local development (page opened via localhost / 127.0.0.1): the local Supabase stack from
// `npm run db:start`, if assets/scripts/supabase-local.json exists (written by `npm run db:config`).
// To talk to the real project from localhost anyway, run in the browser console:
//   localStorage.setItem('sb_env', 'prod')      (and localStorage.removeItem('sb_env') to go back)
(function () {
  var PROD = {
    url: 'https://puvmgfdqftritadcvyhx.supabase.co',
    key: 'sb_publishable_c4eYDDkZqwuVBblZj5nuvA_vvnRXR5i',
  };
  var cfg = PROD;

  var host = location.hostname;
  var isLocalHost = host === 'localhost' || host === '127.0.0.1';
  var forceProd = false;
  try { forceProd = localStorage.getItem('sb_env') === 'prod'; } catch (e) {}

  if (isLocalHost && !forceProd) {
    try {
      // synchronous on purpose: the client must exist before any page script runs (dev only)
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/assets/scripts/supabase-local.json', false);
      xhr.send();
      if (xhr.status === 200) {
        var local = JSON.parse(xhr.responseText);
        if (local.url && local.key) cfg = local;
      }
    } catch (e) { /* no local config: fall back to production */ }
  }

  window._sb = supabase.createClient(cfg.url, cfg.key);
  window.SUPABASE_ENV = cfg === PROD ? 'prod' : 'local';

  if (isLocalHost) {
    console.info('[supabase] ' + (cfg === PROD
      ? 'ACHTUNG: Entwicklungsseite nutzt die ECHTE Datenbank (' + cfg.url + ')'
      : 'lokale Entwicklungsdatenbank (' + cfg.url + ')'));
  }
})();
