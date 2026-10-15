// Page entry for /spiel/kalender-interaktiv.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/meruria-kalender.jsx';

;(function () {
// Kalenderdaten und Umrechnung: components/meruria-kalender.jsx
var { MONTHS, WEEKDAYS, YEAR_DAYS, MIN_YEAR_VDL, GOLD_PHASES, ASH_PHASES, FIXED_HOLIDAYS, MONTH_START, MOON_ANCHOR_ABS,
  dayOfYearToMonth, absToYearDoy, yearDoyToAbs, yearLabel, weekdayIdx, goldPhaseDay, ashPhaseDay, findPhase,
  holidaysOnDay, formatDate } = window.MeruriaKalender;
// top-level functions were global in the old classic-script setup
Object.assign(window, { dayOfYearToMonth, absToYearDoy, yearDoyToAbs, yearLabel, weekdayIdx, goldPhaseDay, ashPhaseDay, findPhase, moonSVG, goldMoonSVG, ashMoonSVG, holidaysOnDay, formatDate, parseDay, getToday, setToday, isAtStart, renderTodayBanner, renderMonthBar, renderMonthGrid, renderDetail, renderAll, doyToCalText, bdayHexHtml, openDayPopup, closeDayPopup, onOverlayClick, onPopupKey, findNextDay, jumpToAbs });

/* ══════════════════════════════════════════════════
   KALENDER-DATEN
   ══════════════════════════════════════════════════ */

/* SVG for moon phase: returns SVG string.
   vollmondDay = der Tag im Zyklus, an dem Vollmond herrscht (z.B. 16 für Gold, 12 für Asche) */
function moonSVG(phaseDay, cycleLength, vollmondDay, color, size) {
  const D = phaseDay;
  let ill;
  if (D <= vollmondDay) {
    // zunehmend: Tag 1 = 0, vollmondDay = 1
    ill = (D - 1) / Math.max(1, vollmondDay - 1);
  } else {
    // abnehmend: Tag nach Vollmond ill < 1, am letzten Zyklustag knapp über 0
    ill = 1 - (D - vollmondDay) / (cycleLength - vollmondDay + 1);
  }
  ill = Math.max(0, Math.min(1, ill));
  const waxing = D <= vollmondDay;
  const r = 9, cx = 11, cy = 11;
  let fill;
  if (ill < 0.02) {
    fill = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgb(var(--panel-rgb))" stroke="${color}" stroke-width="1.1"/>`;
  } else if (ill > 0.98) {
    fill = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="${color}" stroke-width="1.1"/>`;
  } else {
    const rx = r * Math.abs(1 - 2 * ill);
    const outerSweep = waxing ? 1 : 0;
    let innerSweep;
    if (ill < 0.5) innerSweep = waxing ? 0 : 1;
    else innerSweep = waxing ? 1 : 0;
    const path = `M${cx},${cy-r} A${r},${r} 0 0,${outerSweep} ${cx},${cy+r} A${rx},${r} 0 0,${innerSweep} ${cx},${cy-r} Z`;
    fill = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgb(var(--panel-rgb))" stroke="${color}" stroke-width="1.1"/><path d="${path}" fill="${color}"/>`;
  }
  return `<svg viewBox="0 0 22 22" width="${size}" height="${size}" class="mini-moon">${fill}</svg>`;
}

function goldMoonSVG(phaseDay, size=13) { return moonSVG(phaseDay, 28, 16, "#d9b06b", size); }
function ashMoonSVG(phaseDay, size=13)  { return moonSVG(phaseDay, 17, 12, "#a8b6d4", size); }

/* ══════════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════════ */

var TODAY_KEY = "meruria-today-abs";
var TODAY_DEFAULT = 14;
var SETTINGS_KEY = "kalender_today";
function parseDay(v) {
  const n = v != null ? parseInt(v, 10) : TODAY_DEFAULT;
  return (isNaN(n)) ? TODAY_DEFAULT : n;
}
function getToday() {
  const v = localStorage.getItem(TODAY_KEY);
  return parseDay(v) || TODAY_DEFAULT;
}
async function setToday(v) {
  localStorage.setItem(TODAY_KEY, String(v));
  if (window._sb) {
    await window._sb.from('settings').upsert({ key: SETTINGS_KEY, value: String(v) }, { onConflict: 'key' });
  }
}

// Hide setter until auth resolves; show only for DMs
var todaySetEl = document.getElementById('todayBanner').querySelector('.today-set');
todaySetEl.style.display = 'none';
window.addEventListener('site-user-ready', (e) => {
  if (e.detail?.role === 'dm') todaySetEl.style.display = '';
}, { once: true });

var TODAY = getToday();

var view  = absToYearDoy(TODAY === 0 ? 1 : TODAY);
var viewMonth = dayOfYearToMonth(view.doy).monthIdx;
var viewYear = view.year || 1;
var selectedAbs = TODAY;

function isAtStart() { return viewYear === -MIN_YEAR_VDL && viewMonth === 0; }

/* ══════════════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════════════ */

function renderTodayBanner() {
  document.getElementById("todayDate").textContent = formatDate(TODAY);
  const gp = findPhase(GOLD_PHASES, goldPhaseDay(TODAY));
  const ap = findPhase(ASH_PHASES,  ashPhaseDay(TODAY));
  const tagLbl = TODAY === 0 ? "Tag 0 (Landung)" : TODAY > 0 ? `Tag ${TODAY} n.d.L.` : `Tag ${-TODAY} v.d.L.`;
  document.getElementById("todayMeta").innerHTML =
    `${tagLbl} &nbsp;·&nbsp; Goldmond: ${gp.name}${gp.peak?' ✦':''} &nbsp;·&nbsp; Aschmond: ${ap.name}${ap.peak?' ✦':''}`;
  // Current zodiac sign
  const todayDoy = absToYearDoy(TODAY === 0 ? 1 : TODAY).doy;
  const todayMonthIdx = dayOfYearToMonth(todayDoy).monthIdx;
  const todaySign = MONTHS[todayMonthIdx]?.sign || '—';
  const todayMonthName = MONTHS[todayMonthIdx]?.name || '—';
  if (TODAY >= 0) {
    document.getElementById("todayInput").value = TODAY;
    document.getElementById("todayEra").value = "ndl";
  } else {
    document.getElementById("todayInput").value = -TODAY;
    document.getElementById("todayEra").value = "vdl";
  }
}

function renderMonthBar() {
  const M = MONTHS[viewMonth];
  document.getElementById("monthRoman").textContent = M.roman;
  document.getElementById("monthName").textContent  = M.name;
  document.getElementById("monthYear").textContent  = yearLabel(viewYear);
  document.getElementById("monthSign").textContent  = `Im Zeichen: ${M.sign}`;
  document.getElementById("monthVibe").textContent  = M.vibe;
  document.getElementById("prevMonth").disabled = isAtStart();
}

function renderMonthGrid() {
  const M = MONTHS[viewMonth];
  const grid = document.getElementById("dayGrid");
  grid.innerHTML = "";
  const firstAbs = yearDoyToAbs(viewYear, MONTH_START[viewMonth]);
  const firstWeekday = weekdayIdx(firstAbs);

  // leading empty cells
  for (let i = 0; i < firstWeekday; i++) {
    const e = document.createElement("div");
    e.className = "day empty";
    grid.appendChild(e);
  }

  for (let d = 1; d <= M.days; d++) {
    const abs = firstAbs + (d - 1);
    const doy = MONTH_START[viewMonth] + (d - 1);
    const gpd = goldPhaseDay(abs);
    const apd = ashPhaseDay(abs);
    const gp  = findPhase(GOLD_PHASES, gpd);
    const ap  = findPhase(ASH_PHASES,  apd);
    const hols = holidaysOnDay(abs);
    const birthdays = window._birthdayMap[doy] || [];

    const cell = document.createElement("div");
    cell.className = "day";
    if (hols.length) cell.classList.add("has-holiday");
    if (birthdays.length) cell.classList.add("has-birthday");
    if (abs === TODAY) cell.classList.add("today");
    if (abs === selectedAbs) cell.classList.add("selected");
    cell.dataset.abs = abs;

    let peakBadge = "";
    if (gp.peak) peakBadge = `<div class="day-peak gold">✦ Segen</div>`;
    else if (ap.peak) peakBadge = `<div class="day-peak ash">✦ Hauch</div>`;

    const holDots = hols.map(h => `<span class="day-holiday-dot ${h.kind}" title="${h.name}"></span>`).join("");

    let bdayHexes = '';
    if (birthdays.length) {
      const visible = birthdays.slice(0, 4);
      const rest = birthdays.length - visible.length;
      bdayHexes = `<div class="day-birthdays">${
        visible.map(p => bdayHexHtml(p, 'sm')).join('')
      }${rest > 0 ? `<span class="bday-hex-more">+${rest}</span>` : ''}</div>`;
    }

    cell.innerHTML = `
      ${peakBadge}
      <div class="day-top">
        <span class="day-num">${d}</span>
        ${abs === TODAY ? '<span class="day-todaytag">Heute</span>' : ''}
      </div>
      ${bdayHexes}
      <div class="day-bot">
        <div class="day-moons" title="Goldmond ${gp.name} · Aschmond ${ap.name}">
          ${goldMoonSVG(gpd)}
          ${ashMoonSVG(apd)}
        </div>
        <div>${holDots}</div>
      </div>
    `;

    cell.addEventListener("click", () => {
      selectedAbs = abs;
      renderMonthGrid();
      renderDetail();
      openDayPopup(abs);
    });

    grid.appendChild(cell);
  }
}

function renderDetail() {
  const abs = selectedAbs;
  const { year, doy } = absToYearDoy(abs);
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy);
  const M = MONTHS[monthIdx];
  const wd = WEEKDAYS[weekdayIdx(abs)];

  document.getElementById("dDate").innerHTML =
    `${dayInMonth}. ${M.name}<br/><span style="font-size:13px; color:var(--dim);">${yearLabel(year)}</span>`;
  const tagAbsLbl = abs === 0 ? "Tag 0 · Landung" : abs > 0 ? `Tag ${abs} n.d.L.` : `Tag ${-abs} v.d.L.`;
  document.getElementById("dWeekday").textContent = `${wd} · ${M.roman}. Monat · ${tagAbsLbl}`;
  document.getElementById("dZodiacName").textContent = M.sign;
  document.getElementById("dZodiacTraits").textContent = M.traits;

  const gpd = goldPhaseDay(abs);
  const apd = ashPhaseDay(abs);
  const gp  = findPhase(GOLD_PHASES, gpd);
  const ap  = findPhase(ASH_PHASES,  apd);

  document.getElementById("dMoons").innerHTML = `
    <div class="detail-moon">
      <div class="detail-moon-icon">${goldMoonSVG(gpd, 30)}</div>
      <div class="detail-moon-info">
        <span class="detail-moon-name gold">${gp.name}</span>
        <span class="detail-moon-meta">Goldmond · Tag ${gpd} / 28 · ${gp.astro}</span>
      </div>
      ${gp.peak ? '<span class="detail-moon-peak gold">✦ Vollmond</span>' : ''}
    </div>
    <div class="detail-moon">
      <div class="detail-moon-icon">${ashMoonSVG(apd, 30)}</div>
      <div class="detail-moon-info">
        <span class="detail-moon-name ash">${ap.name}</span>
        <span class="detail-moon-meta">Aschmond · Tag ${apd} / 17 · ${ap.astro}</span>
      </div>
      ${ap.peak ? '<span class="detail-moon-peak ash">✦ Vollmond</span>' : ''}
    </div>
  `;

  const hols = holidaysOnDay(abs);
  const holEl = document.getElementById("dHolidays");
  if (!hols.length) {
    holEl.innerHTML = `<div class="detail-empty">Kein Feiertag.</div>`;
  } else {
    const kindLabel = { w:"Weltlich", r:"Religiös", b:"Besänftigung" };
    holEl.innerHTML = hols.map(h => `
      <div class="detail-holiday ${h.kind}">
        <div class="detail-holiday-top">
          <span class="detail-holiday-name">${h.name}${h.span > 1 ? ` <span style="color:var(--dim);font-size:12.5px;">(Tag ${h.dayOfFeast}/${h.span})</span>` : ''}</span>
          <span class="detail-holiday-tag ${h.kind}">${kindLabel[h.kind]}</span>
        </div>
        <div class="detail-holiday-desc">${h.desc}</div>
      </div>
    `).join("");
  }

  document.getElementById("dNotation").innerHTML =
    `${wd}, ${dayInMonth}. ${M.name}, ${yearLabel(year)}`;
  document.getElementById("dAbsolute").innerHTML =
    `${tagAbsLbl} &nbsp;·&nbsp; Tag ${doy} von 224 im Jahr`;
}

function renderAll() {
  renderTodayBanner();
  renderMonthBar();
  renderMonthGrid();
  renderDetail();
}

/* ══════════════════════════════════════════════════
   GEBURTSTAGE
   ══════════════════════════════════════════════════ */

window._birthdayMap = {}; // doy (1-224) → [{name, bild, type:'sc'|'nsc'}]

function doyToCalText(doy) {
  for (let i = MONTHS.length - 1; i >= 0; i--) {
    if (doy >= MONTH_START[i]) return `${doy - MONTH_START[i] + 1}. ${MONTHS[i].name}`;
  }
  return '—';
}

function bdayHexHtml(p, size = 'sm') {
  const cls = size === 'lg' ? 'day-popup-bday-hex' : 'bday-hex';
  const initials = p.name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('');
  const inner = p.bild
    ? `<img src="${p.bild}" style="width:100%;height:100%;object-fit:cover;object-position:top;" alt=""/>`
    : `<span class="${size==='lg'?'day-popup-bday-hex-init':'bday-hex-init'}">${initials}</span>`;
  return `<div class="${cls} ${p.type}" title="${p.name}">${inner}</div>`;
}

/* ── Day Popup ──────────────────────────────── */
function openDayPopup(abs) {
  const { year, doy } = absToYearDoy(abs === 0 ? 1 : abs);
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy || 1);
  const M  = MONTHS[monthIdx];
  const wd = WEEKDAYS[weekdayIdx(abs)];
  const tagAbsLbl = abs === 0 ? 'Tag 0 · Landung' : abs > 0 ? `Tag ${abs} n.d.L.` : `Tag ${-abs} v.d.L.`;
  const gpd = goldPhaseDay(abs), apd = ashPhaseDay(abs);
  const gp  = findPhase(GOLD_PHASES, gpd), ap = findPhase(ASH_PHASES, apd);
  const hols = holidaysOnDay(abs);
  const birthdays = (window._birthdayMap[doy || 0] || []);

  document.getElementById('dpDate').textContent = `${dayInMonth}. ${M.name}`;
  document.getElementById('dpSub').textContent  = `${wd} · ${yearLabel(year)} · ${tagAbsLbl}`;

  const kindLabel = { w:'Weltlich', r:'Religiös', b:'Besänftigung' };
  let html = '';

  // Monde
  html += `<div>
    <div class="day-popup-section-label">Die Monde</div>
    <div class="day-popup-moons">
      <div class="day-popup-moon">${goldMoonSVG(gpd,24)}<div>
        <span class="day-popup-moon-name gold">${gp.name}</span>
        ${gp.peak ? '<span class="day-popup-peak gold">✦ Vollmond</span>' : ''}
      </div></div>
      <div class="day-popup-moon">${ashMoonSVG(apd,24)}<div>
        <span class="day-popup-moon-name ash">${ap.name}</span>
        ${ap.peak ? '<span class="day-popup-peak ash">✦ Vollmond</span>' : ''}
      </div></div>
    </div>
  </div>`;

  // Feiertage
  if (hols.length) {
    html += `<div><div class="day-popup-section-label">Feiertage</div>`;
    for (const h of hols) {
      html += `<div class="detail-holiday ${h.kind}" style="margin-bottom:8px">
        <div class="detail-holiday-top">
          <span class="detail-holiday-name">${h.name}${h.span>1?` <span style="color:var(--dim);font-size:12.5px;">(Tag ${h.dayOfFeast}/${h.span})</span>`:''}</span>
          <span class="detail-holiday-tag ${h.kind}">${kindLabel[h.kind]}</span>
        </div>
        <div class="detail-holiday-desc">${h.desc}</div>
      </div>`;
    }
    html += `</div>`;
  }

  // Geburtstage
  if (birthdays.length) {
    html += `<div><div class="day-popup-section-label">Geburtstage</div><div class="day-popup-birthday-list">`;
    for (const p of birthdays) {
      const initials = p.name.split(' ').filter(Boolean).map(w=>w[0]).slice(0,2).join('');
      const portrait = p.bild
        ? `<img src="${p.bild}" style="width:100%;height:100%;object-fit:cover;object-position:top;" alt=""/>`
        : `<span class="day-popup-bday-hex-init">${initials}</span>`;
      html += `<div class="day-popup-birthday-item">
        <div class="day-popup-bday-hex ${p.type}">${portrait}</div>
        <div class="day-popup-bday-info">
          <span class="day-popup-bday-name">${p.name}</span>
          <span class="day-popup-bday-type ${p.type}">${p.type==='sc'?'Spielercharakter':'NSC'}</span>
        </div>
      </div>`;
    }
    html += `</div></div>`;
  }

  if (!hols.length && !birthdays.length) {
    html += `<div class="detail-empty">Keine besonderen Ereignisse an diesem Tag.</div>`;
  }

  document.getElementById('dpBody').innerHTML = html;
  const overlay = document.getElementById('dayPopup');
  overlay.style.display = 'flex';
  overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onPopupKey);
}

function closeDayPopup() {
  const overlay = document.getElementById('dayPopup');
  overlay.style.display = 'none';
  overlay.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onPopupKey);
}
function onOverlayClick(e) { if (e.target === document.getElementById('dayPopup')) closeDayPopup(); }
function onPopupKey(e)     { if (e.key === 'Escape') closeDayPopup(); }

document.getElementById('dpClose').addEventListener('click', closeDayPopup);

/* ══════════════════════════════════════════════════
   EVENTS
   ══════════════════════════════════════════════════ */

document.getElementById("prevMonth").addEventListener("click", () => {
  if (isAtStart()) return;
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
    if (viewYear === 0) viewYear = -1;
  }
  renderMonthBar(); renderMonthGrid();
});
document.getElementById("nextMonth").addEventListener("click", () => {
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
    if (viewYear === 0) viewYear = 1;
  }
  renderMonthBar(); renderMonthGrid();
});
document.getElementById("todayJump").addEventListener("click", () => {
  const { year, doy } = absToYearDoy(TODAY);
  viewYear = year;
  viewMonth = dayOfYearToMonth(doy).monthIdx;
  selectedAbs = TODAY;
  renderAll();
});
document.getElementById("todayBtn").addEventListener("click", async () => {
  const raw = parseInt(document.getElementById("todayInput").value, 10);
  const era = document.getElementById("todayEra").value;
  if (isNaN(raw) || raw < 1) return;
  const v = era === "vdl" ? -Math.min(raw, MIN_YEAR_VDL * YEAR_DAYS) : raw;
  TODAY = v;
  await setToday(TODAY);
  const { year, doy } = absToYearDoy(TODAY === 0 ? 1 : TODAY);
  viewYear = year || 1;
  viewMonth = dayOfYearToMonth(doy).monthIdx;
  selectedAbs = TODAY;
  renderAll();
});
document.getElementById("todayInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("todayBtn").click();
});

(function initJump() {
  const dSel = document.getElementById("jumpDay");
  const mSel = document.getElementById("jumpMonth");
  const ySel = document.getElementById("jumpYear");

  MONTHS.forEach((m, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${m.roman}. ${m.name}`;
    mSel.appendChild(opt);
  });

  for (let y = MIN_YEAR_VDL; y >= 1; y--) {
    const opt = document.createElement("option");
    opt.value = -y;
    opt.textContent = `Jahr ${y} v.d.L.`;
    ySel.appendChild(opt);
  }
  for (let y = 1; y <= 10; y++) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = `Jahr ${y} n.d.L.`;
    ySel.appendChild(opt);
  }

  function refreshDays(keepValue) {
    const mIdx = parseInt(mSel.value, 10) || 0;
    const days = MONTHS[mIdx].days;
    const prev = parseInt(dSel.value, 10) || 1;
    dSel.innerHTML = "";
    for (let d = 1; d <= days; d++) {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = `${d}.`;
      dSel.appendChild(opt);
    }
    dSel.value = Math.min(keepValue != null ? keepValue : prev, days);
  }

  mSel.addEventListener("change", () => refreshDays());

  const sel = absToYearDoy(selectedAbs);
  if (sel.year !== 0) {
    const dim = dayOfYearToMonth(sel.doy);
    mSel.value = dim.monthIdx;
    if (sel.year >= -MIN_YEAR_VDL && sel.year <= 10) ySel.value = sel.year;
    refreshDays(dim.dayInMonth);
  } else {
    mSel.value = viewMonth;
    ySel.value = viewYear >= -MIN_YEAR_VDL && viewYear <= 10 ? viewYear : 1;
    refreshDays(1);
  }

  document.getElementById("jumpBtn").addEventListener("click", () => {
    const d = parseInt(dSel.value, 10);
    const m = parseInt(mSel.value, 10);
    const y = parseInt(ySel.value, 10);
    if (isNaN(d) || isNaN(m) || isNaN(y) || y === 0) return;
    viewYear  = y;
    viewMonth = m;
    const doy = MONTH_START[m] + (d - 1);
    selectedAbs = yearDoyToAbs(y, doy);
    renderAll();
  });
})();

/* ══════════════════════════════════════════════════
   SCHNELLSPRUNG: Nächster Vollmond / Doppelte Segensnacht
   ══════════════════════════════════════════════════ */
function findNextDay(fromAbs, predicate, maxLook) {
  for (let i = 1; i <= maxLook; i++) {
    if (predicate(fromAbs + i)) return fromAbs + i;
  }
  return null;
}
function jumpToAbs(abs) {
  const { year, doy } = absToYearDoy(abs);
  if (year === 0) return;
  viewYear  = year;
  viewMonth = dayOfYearToMonth(doy).monthIdx;
  selectedAbs = abs;
  renderAll();
}
document.getElementById("nextVollmondBtn").addEventListener("click", () => {
  // Goldmond Vollmond = phase 16, Aschmond Vollmond = phase 12 — max Abstand 28 Tage
  const target = findNextDay(TODAY, x => goldPhaseDay(x) === 16 || ashPhaseDay(x) === 12, 30);
  if (target != null) jumpToAbs(target);
});
document.getElementById("nextMondsegenBtn").addEventListener("click", () => {
  // Goldmond-Vollmond — alle 28 Tage
  const target = findNextDay(TODAY, x => goldPhaseDay(x) === 16, 30);
  if (target != null) jumpToAbs(target);
});
document.getElementById("nextAschenhauchBtn").addEventListener("click", () => {
  // Aschmond-Vollmond — alle 17 Tage
  const target = findNextDay(TODAY, x => ashPhaseDay(x) === 12, 20);
  if (target != null) jumpToAbs(target);
});
document.getElementById("nextSegensnachtBtn").addEventListener("click", () => {
  // Doppelte Segensnacht: beide gleichzeitig Vollmond — alle 476 Tage (LCM 28×17)
  const target = findNextDay(TODAY, x => goldPhaseDay(x) === 16 && ashPhaseDay(x) === 12, 500);
  if (target != null) jumpToAbs(target);
});
document.getElementById("nextHolidayBtn").addEventListener("click", () => {
  // Nächster Tag mit Feiertag — vor der Landung gibt es keine, deshalb max. 250 Tage suchen
  const target = findNextDay(TODAY, x => x >= 1 && holidaysOnDay(x).length > 0, 250);
  if (target != null) jumpToAbs(target);
});

renderAll();

// Load birthdays from Supabase and populate _birthdayMap
(async function () {
  if (!window._sb) return;
  const [{ data: chars }, { data: nscs }] = await Promise.all([
    window._sb.from('characters').select('char_data').eq('visible', true),
    window._sb.from('nsc_public_directory').select('name, bild, geburtstag_doy').not('geburtstag_doy', 'is', null),
  ]);
  // Namen und Bild-URLs stammen von Spielern und landen in innerHTML-Strings: escapen
  const esc = t => String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const safeUrl = u => (typeof u === 'string' && /^(https?:\/\/|\/|assets\/)/i.test(u.trim())) ? esc(u.trim()) : null;
  const map = {};
  for (const row of chars || []) {
    const d = row.char_data || {};
    if (!d.geburtstag_doy) continue;
    (map[d.geburtstag_doy] = map[d.geburtstag_doy] || []).push({
      name: esc(d.name || 'Charakter'), bild: safeUrl(d.bild), type: 'sc'
    });
  }
  for (const nsc of nscs || []) {
    (map[nsc.geburtstag_doy] = map[nsc.geburtstag_doy] || []).push({
      name: esc(nsc.name), bild: safeUrl(nsc.bild), type: 'nsc'
    });
  }
  window._birthdayMap = map;
  renderMonthGrid();
})();

// Load today from Supabase and subscribe to realtime changes
(async function () {
  if (!window._sb) return;
  const { data } = await window._sb.from('settings').select('value').eq('key', SETTINGS_KEY).single();
  if (data) {
    const v = parseDay(data.value);
    localStorage.setItem(TODAY_KEY, String(v));
    if (v !== TODAY) {
      TODAY = v;
      const { year, doy } = absToYearDoy(TODAY === 0 ? 1 : TODAY);
      viewYear = year || 1;
      viewMonth = dayOfYearToMonth(doy).monthIdx;
      selectedAbs = TODAY;
      renderAll();
    }
  }
  window._sb.channel('kalender-today').on('postgres_changes', {
    event: '*', schema: 'public', table: 'settings',
    filter: `key=eq.${SETTINGS_KEY}`
  }, payload => {
    if (!payload.new?.value) return;
    const v = parseDay(payload.new.value);
    localStorage.setItem(TODAY_KEY, String(v));
    TODAY = v;
    const { year, doy } = absToYearDoy(TODAY === 0 ? 1 : TODAY);
    viewYear = year || 1;
    viewMonth = dayOfYearToMonth(doy).monthIdx;
    selectedAbs = TODAY;
    renderAll();
  }).subscribe();
})();


(function () {
const {
  SiteNav,
  SiteGate
} = window;
ReactDOM.createRoot(document.getElementById('nav-root')).render(/*#__PURE__*/React.createElement(SiteGate, null, /*#__PURE__*/React.createElement(SiteNav, null)));
})();

})();
