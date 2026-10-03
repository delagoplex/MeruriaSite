// Page entry for /dm/kolonisierung-und-bau.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';

;(function () {
(function () {
  "use strict";

  /* ---------- Tab switching ---------- */
  var panels = document.querySelectorAll('.panel');
  var sideBtns = document.querySelectorAll('#sidenav .side-btn');
  var pills = document.querySelectorAll('#pilltabs .pill');

  function revealPanel(panel) {
    var els = panel.querySelectorAll('.reveal');
    els.forEach(function (el, i) {
      el.classList.remove('in');
      setTimeout(function () { el.classList.add('in'); }, 60 + i * 75);
    });
  }

  function activate(tab) {
    panels.forEach(function (p) {
      var on = p.getAttribute('data-panel') === tab;
      p.classList.toggle('active', on);
      if (on) revealPanel(p);
    });
    sideBtns.forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-tab') === tab); });
    pills.forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-tab') === tab); });
    if (history.replaceState) history.replaceState(null, '', '#' + tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var activePill = document.querySelector('#pilltabs .pill.active');
    if (activePill) { try { activePill.parentNode.scrollLeft = activePill.offsetLeft - 40; } catch (e) {} }
  }

  function bind(list) {
    list.forEach(function (b) {
      b.addEventListener('click', function () { activate(b.getAttribute('data-tab')); });
    });
  }
  bind(sideBtns);
  bind(pills);

  /* phase-overview nodes scroll to the matching phase step */
  document.querySelectorAll('.po-node').forEach(function (n) {
    n.addEventListener('click', function () {
      var el = document.getElementById(n.getAttribute('data-scroll'));
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
    });
  });

  /* timeline dots (left numbers) scroll their phase to the top */
  document.querySelectorAll('.phase-step .tl-dot').forEach(function (d) {
    d.addEventListener('click', function () {
      var step = d.closest('.phase-step');
      if (step) window.scrollTo({ top: step.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
    });
  });

  /* cross-links jump to another tab */
  document.addEventListener('click', function (e) {
    var x = e.target.closest ? e.target.closest('[data-goto]') : null;
    if (x) { e.preventDefault(); activate(x.getAttribute('data-goto')); }
  });

  /* open from hash if present */
  var initial = (location.hash || '').replace('#', '');
  var valid = ['grundprinzipien','kolonist','auftragstypen','phasen','gebaeude','ressourcen','wohlbefinden','stimmung','ereignisse','beziehungen','erweiterbarkeit','anhaenge'];
  if (valid.indexOf(initial) !== -1) {
    activate(initial);
  } else {
    revealPanel(document.querySelector('.panel.active'));
  }

  /* ---------- Ereignis-Würfel (1d20) ---------- */
  var rollBtn = document.getElementById('rollBtn');
  if (rollBtn) {
    var diceResult = document.getElementById('diceResult');
    var drNum = document.getElementById('drNum');
    var drText = document.getElementById('drText');
    var eventTable = document.getElementById('eventTable');
    var spinning = false;
    rollBtn.addEventListener('click', function () {
      if (spinning) return;
      spinning = true;
      var ticks = 0;
      var iv = setInterval(function () {
        drNum.textContent = 1 + Math.floor(Math.random() * 20);
        diceResult.classList.remove('empty');
        ticks++;
        if (ticks > 12) {
          clearInterval(iv);
          var n = 1 + Math.floor(Math.random() * 20);
          drNum.textContent = n;
          eventTable.querySelectorAll('tr.rolled').forEach(function (r) { r.classList.remove('rolled'); });
          var row = eventTable.querySelector('tr[data-roll="' + n + '"]');
          if (row) { row.classList.add('rolled'); drText.textContent = row.children[1].textContent; }
          spinning = false;
        }
      }, 55);
    });
  }

  /* ---------- WB Calculator ---------- */
  var cats = [
    { key: 'unterkunft', emoji: '🏠', name: 'Unterkunft', labels: ['Kein Schlafplatz', 'Akzeptabel', 'Ideal'] },
    { key: 'nahrung', emoji: '🍖', name: 'Nahrung', labels: ['Hungert', 'Ausreichend', 'Liebling + Kantine'] },
    { key: 'habitat', emoji: '🌍', name: 'Habitat', labels: ['Falsch', 'Neutral', 'Ideal'] },
    { key: 'gemeinschaft', emoji: '👥', name: 'Gemeinschaft', labels: ['Isoliert', 'Versammlungsort', 'Aktiv + Rituale'] },
    { key: 'zweck', emoji: '🎯', name: 'Zweck', labels: ['Keine Aufgabe', 'Hat eine Rolle', 'Bedeutungsvoll'] }
  ];
  var states = [
    { min: 9, max: 10, emoji: '🌟', name: 'Aufblühend', color: 'color-mix(in srgb, #7cf2a0, rgb(var(--ink-rgb)) var(--cm))', eff: 'Arbeitet schneller; Bonus auf Quests; bringt Freunde mit.' },
    { min: 7, max: 8, emoji: '😊', name: 'Zufrieden', color: 'color-mix(in srgb, #bfe88f, rgb(var(--ink-rgb)) var(--cm))', eff: 'Normalbetrieb; stabil; bleibt in der Siedlung.' },
    { min: 5, max: 6, emoji: '😐', name: 'Neutral', color: 'color-mix(in srgb, #ffe06b, rgb(var(--ink-rgb)) var(--cm))', eff: 'Macht das Nötigste; kein Bonus, kein Malus.' },
    { min: 3, max: 4, emoji: '😟', name: 'Unzufrieden', color: 'color-mix(in srgb, #ffa24d, rgb(var(--ink-rgb)) var(--cm))', eff: 'Arbeitet langsamer; Quests schwieriger.' },
    { min: 1, max: 2, emoji: '😠', name: 'Elend', color: 'color-mix(in srgb, #ff7a4d, rgb(var(--ink-rgb)) var(--cm))', eff: 'Droht zu gehen; könnte Unruhe stiften.' },
    { min: 0, max: 0, emoji: '💔', name: 'Verlässt die Siedlung', color: 'color-mix(in srgb, #ff5d6c, rgb(var(--ink-rgb)) var(--cm))', eff: 'Geht — es sei denn, Spieler greifen ein.' }
  ];
  var values = { unterkunft: 0, nahrung: 0, habitat: 0, gemeinschaft: 0, zweck: 0 };
  var manual = 0;

  var personalItems = [
    { id: 'quest', label: 'Persönliche Quest abgeschlossen', type: 'count', step: 1 },
    { id: 'lieblingsgebaeude', label: 'Lieblingsgebäude gebaut', type: 'toggle', val: 1 },
    { id: 'freundschaft', label: 'Besondere Freundschaft mit Spielercharakter', type: 'toggle', val: 1 },
    { id: 'geschenk', label: 'Überraschungsgeschenk / besondere Geste', type: 'toggle', val: 1, hint: '+1 temp.' },
    { id: 'verlust', label: 'Verlust einer wichtigen Person', type: 'count', step: -2 },
    { id: 'trauma', label: 'Traumatisches Erlebnis', type: 'toggle', val: -3 },
    { id: 'werte', label: 'Muss gegen eigene Werte handeln', type: 'toggle', val: -1 }
  ];
  var pval = {};
  var pcount = {};
  personalItems.forEach(function (it) { pval[it.id] = 0; pcount[it.id] = 0; });

  function sign(n) { return (n > 0 ? '+' : (n < 0 ? '−' : '±')) + Math.abs(n); }
  function computePersonal() {
    var p = manual;
    personalItems.forEach(function (it) {
      p += (it.type === 'count') ? pcount[it.id] * it.step : pval[it.id];
    });
    return p;
  }

  var controls = document.getElementById('calcControls');
  var segGroups = [];

  /* 5 Bedürfnis-Kategorien */
  cats.forEach(function (c) {
    var block = document.createElement('div');
    var lbl = document.createElement('div');
    lbl.className = 'ctl-label';
    lbl.innerHTML = '<span class="ce">' + c.emoji + '</span><span class="cn">' + c.name + '</span><span class="cv" id="cv-' + c.key + '">0 / 2</span>';
    var seg = document.createElement('div');
    seg.className = 'seg';
    [0, 1, 2].forEach(function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = v === 0 ? 'on' : '';
      b.innerHTML = '<span class="sp">' + v + '</span>' + c.labels[v];
      b.addEventListener('click', function () {
        values[c.key] = v;
        seg.querySelectorAll('button').forEach(function (x, i) { x.classList.toggle('on', i === v); });
        document.getElementById('cv-' + c.key).textContent = v + ' / 2';
        update();
      });
      seg.appendChild(b);
    });
    block.appendChild(lbl);
    block.appendChild(seg);
    controls.appendChild(block);
    segGroups.push({ key: c.key, seg: seg });
  });

  var div1 = document.createElement('div'); div1.className = 'calc-divider'; controls.appendChild(div1);

  /* Persönliche Bonus- & Maluspunkte als anklickbare Posten */
  var chipEls = {};
  function paintChip(id) {
    var e = chipEls[id], it = e.item;
    if (it.type === 'count') {
      var contrib = pcount[id] * it.step;
      e.pill.className = 'pc-val ' + (it.step < 0 ? 'neg' : 'pos');
      e.pill.textContent = (pcount[id] === 0) ? sign(it.step) : sign(contrib);
      e.count.textContent = pcount[id];
      e.el.classList.toggle('on', pcount[id] > 0);
    } else {
      var cur = pval[id];
      e.pill.className = 'pc-val ' + (it.val < 0 ? 'neg' : 'pos');
      e.pill.textContent = (cur === 0) ? (it.hint || sign(it.val)) : sign(cur);
      e.el.classList.toggle('on', cur !== 0);
    }
  }
  (function () {
    var block = document.createElement('div');
    var lbl = document.createElement('div'); lbl.className = 'pp-seclabel'; lbl.textContent = 'Persönliche Bonus- & Maluspunkte';
    var wrap = document.createElement('div'); wrap.className = 'pp-chips';
    personalItems.forEach(function (it) {
      var lab = document.createElement('span'); lab.className = 'pc-label'; lab.textContent = it.label;
      var pill = document.createElement('span');
      if (it.type === 'count') {
        var row = document.createElement('div'); row.className = 'pp-chip count';
        var stepEl = document.createElement('div'); stepEl.className = 'pp-cstep';
        var minus = document.createElement('button'); minus.type = 'button'; minus.className = 'pp-cbtn'; minus.textContent = '−';
        var cnt = document.createElement('span'); cnt.className = 'pp-ccount'; cnt.textContent = '0';
        var plus = document.createElement('button'); plus.type = 'button'; plus.className = 'pp-cbtn'; plus.textContent = '+';
        minus.addEventListener('click', function () { if (pcount[it.id] > 0) { pcount[it.id]--; paintChip(it.id); update(); } });
        plus.addEventListener('click', function () { pcount[it.id]++; paintChip(it.id); update(); });
        stepEl.appendChild(minus); stepEl.appendChild(cnt); stepEl.appendChild(plus);
        row.appendChild(lab); row.appendChild(stepEl); row.appendChild(pill);
        chipEls[it.id] = { el: row, pill: pill, count: cnt, item: it };
        wrap.appendChild(row);
      } else {
        var chip = document.createElement('button'); chip.type = 'button'; chip.className = 'pp-chip';
        chip.appendChild(lab); chip.appendChild(pill);
        chipEls[it.id] = { el: chip, pill: pill, item: it };
        chip.addEventListener('click', function () {
          pval[it.id] = pval[it.id] ? 0 : it.val;
          paintChip(it.id); update();
        });
        wrap.appendChild(chip);
      }
    });
    block.appendChild(lbl); block.appendChild(wrap); controls.appendChild(block);
    personalItems.forEach(function (it) { paintChip(it.id); });
  })();

  /* freie Feinanpassung */
  function setManual(v) {
    manual = Math.max(-3, Math.min(3, v));
    document.getElementById('cv-manual').textContent = sign(manual);
    update();
  }
  (function () {
    var block = document.createElement('div');
    var lbl = document.createElement('div'); lbl.className = 'ctl-label';
    lbl.innerHTML = '<span class="ce">✦</span><span class="cn">Weitere Anpassung</span><span class="cv" id="cv-manual">±0</span>';
    var row = document.createElement('div'); row.className = 'pp-stepper';
    var minus = document.createElement('button'); minus.type = 'button'; minus.className = 'pp-btn'; minus.textContent = '−';
    var plus = document.createElement('button'); plus.type = 'button'; plus.className = 'pp-btn'; plus.textContent = '+';
    var hint = document.createElement('span'); hint.className = 'pp-hint'; hint.textContent = 'Sonstige Boni & Mali';
    minus.addEventListener('click', function () { setManual(manual - 1); });
    plus.addEventListener('click', function () { setManual(manual + 1); });
    row.appendChild(minus); row.appendChild(plus); row.appendChild(hint);
    block.appendChild(lbl); block.appendChild(row); controls.appendChild(block);
  })();

  /* Reset */
  (function () {
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'calc-reset'; btn.textContent = '↺ Tracker zurücksetzen';
    btn.addEventListener('click', function () {
      Object.keys(values).forEach(function (k) { values[k] = 0; });
      segGroups.forEach(function (g) {
        g.seg.querySelectorAll('button').forEach(function (x, i) { x.classList.toggle('on', i === 0); });
        document.getElementById('cv-' + g.key).textContent = '0 / 2';
      });
      personalItems.forEach(function (it) { pval[it.id] = 0; pcount[it.id] = 0; paintChip(it.id); });
      setManual(0);
    });
    controls.appendChild(btn);
  })();

  var CIRC = 2 * Math.PI * 52;
  var gaugeFill = document.getElementById('gaugeFill');
  var gaugeVal = document.getElementById('gaugeVal');
  var sdEmoji = document.getElementById('sdEmoji');
  var sdName = document.getElementById('sdName');
  var sdEff = document.getElementById('sdEff');
  var sdBase = document.getElementById('sdBase');
  gaugeFill.setAttribute('stroke-dasharray', CIRC.toFixed(1));

  function stateFor(total) {
    for (var i = 0; i < states.length; i++) {
      if (total >= states[i].min && total <= states[i].max) return states[i];
    }
    return states[states.length - 1];
  }
  function update() {
    var base = values.unterkunft + values.nahrung + values.habitat + values.gemeinschaft + values.zweck;
    var personal = computePersonal();
    var total = Math.max(0, Math.min(10, base + personal));
    var st = stateFor(total);
    gaugeFill.style.strokeDashoffset = (CIRC * (1 - total / 10)).toFixed(1);
    gaugeFill.style.stroke = st.color;
    gaugeVal.textContent = total;
    sdEmoji.textContent = st.emoji;
    sdName.textContent = st.name;
    sdName.style.color = st.color;
    sdEff.textContent = st.eff;
    sdBase.textContent = 'Bedürfnisse ' + base + ' · Persönlich ' + sign(personal) + ' · Gesamt ' + total;
    sdEmoji.style.transform = 'scale(1.18)';
    setTimeout(function () { sdEmoji.style.transform = 'scale(1)'; }, 180);
  }
  update();
})();


ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(SiteGate, null, React.createElement(SiteNav, null))
);

})();
