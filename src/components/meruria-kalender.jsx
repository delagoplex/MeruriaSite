// meruria-kalender.jsx — Meruria-Kalender für alle Seiten: Monate, Wochentage, Monde, Feiertage,
// Umrechnung absoluter Tage (abs ≥ 1 = n.d.L., 0 = Tag der Landung, ≤ −1 = v.d.L.) und das aktuelle „Heute“.
// Exposes: window.MeruriaKalender = { MONTHS, WEEKDAYS, YEAR_DAYS, GOLD_PHASES, ASH_PHASES, FIXED_HOLIDAYS,
//   dayOfYearToMonth, absToYearDoy, yearDoyToAbs, yearLabel, weekdayIdx, goldPhaseDay, ashPhaseDay, findPhase,
//   holidaysOnDay, formatDate, formatKurz, tagInfo, naechstesFest, useHeute }
// „Heute“ setzt die Spielleitung im interaktiven Kalender (settings.kalender_today).
;(function () {
var MONTHS = [
  { roman:"I",    name:"Janvar",  days:19, sign:"Die Arche",     traits:"Bewahrung, Heimweh, Schutz",      vibe:"Aufbruch · Landungsmonat" },
  { roman:"II",   name:"Fevorn",  days:18, sign:"Die Böe",       traits:"Anpassung, Mut, Risiko",          vibe:"Erste Arbeit · rauer Beginn" },
  { roman:"III",  name:"Mareth",  days:19, sign:"Die Wurzel",    traits:"Geduld, Stärke, Beharrlichkeit", vibe:"Erwachen · Erkundung" },
  { roman:"IV",   name:"Aprel",   days:19, sign:"Die Linse",     traits:"Wachsamkeit, Entdeckung, Neugier",vibe:"Goldmondblüte · Helligkeit" },
  { roman:"V",    name:"Mairen",  days:18, sign:"Die Stille",    traits:"Isolation, innere Stärke, Verlust",vibe:"Planetare Ruhe" },
  { roman:"VI",   name:"Junvar",  days:19, sign:"Das Irrlicht",  traits:"Reisende, Unruhe, Bestimmung",    vibe:"Wandersternzeit · Jahresmitte" },
  { roman:"VII",  name:"Juval",   days:19, sign:"Die Klinge",    traits:"Entschlossenheit, Härte, Opfer",  vibe:"Hochsommer · Hitze" },
  { roman:"VIII", name:"Auvar",   days:19, sign:"Die Glut",      traits:"Hoffnung, Neuanfang, Wandel",     vibe:"Erinnerung · schwere Zeit" },
  { roman:"IX",   name:"Septhar", days:19, sign:"Die Brücke",    traits:"Verbindung, Überwindung, Wandel", vibe:"Wandel · Herbststimmung" },
  { roman:"X",    name:"Oktar",   days:18, sign:"Der Schleier",  traits:"Dunkelheit, Rückzug, Geheimnisse",vibe:"Dunkelheit · Rückzug" },
  { roman:"XI",   name:"Novren",  days:18, sign:"Das Labyrinth", traits:"Komplexität, Täuschung, Erkenntnis",vibe:"Komplexität · Täuschung" },
  { roman:"XII",  name:"Derath",  days:19, sign:"Der Spalt",     traits:"Übergänge, Entscheidungen, Neubeginn",vibe:"Schwelle · Jahresende" }
];
var YEAR_DAYS = 224;
var WEEKDAYS = ["Aven","Eiru","Orun","Ulai","Ivar","Orel","Elu"];
var MIN_YEAR_VDL = 5;

var GOLD_PHASES = [
  { name:"Goldlose Nacht",        astro:"Neumond",              days:[1] },
  { name:"Junge Sichel",          astro:"Zunehmende Sichel",    days:[2,3,4] },
  { name:"Goldene Sichel",        astro:"Zunehmende Sichel",    days:[5,6,7,8] },
  { name:"Halber Segen",          astro:"Zunehmender Halbmond", days:[9,10,11,12] },
  { name:"Schwellender Segen",    astro:"Zunehmender ¾",         days:[13,14,15] },
  { name:"Mondsegen",             astro:"Vollmond",             days:[16], peak:true },
  { name:"Verblassender Segen",   astro:"Abnehmender ¾",         days:[17,18,19] },
  { name:"Alter Halber",          astro:"Abnehmender Halbmond", days:[20,21,22,23] },
  { name:"Alte Sichel",           astro:"Abnehmende Sichel",    days:[24,25,26] },
  { name:"Sterbende Sichel",      astro:"Abnehmende Sichel",    days:[27,28] }
];
var ASH_PHASES = [
  { name:"Aschgraue Nacht",       astro:"Neumond",              days:[1] },
  { name:"Erster Hauch",          astro:"Zunehmende Sichel",    days:[2,3] },
  { name:"Graue Sichel",          astro:"Zunehmende Sichel",    days:[4,5,6] },
  { name:"Halbe Asche",           astro:"Zunehmender Halbmond", days:[7,8,9] },
  { name:"Schwellende Asche",     astro:"Zunehmender ¾",         days:[10,11] },
  { name:"Aschenhauch",           astro:"Vollmond",             days:[12], peak:true },
  { name:"Verglühende Asche",     astro:"Abnehmender ¾",         days:[13,14] },
  { name:"Alte Asche",            astro:"Abnehmender Halbmond", days:[15,16] },
  { name:"Letzter Hauch",         astro:"Abnehmende Sichel",    days:[17] }
];

/* Feiertage – fixed dates pro Monat (0-indexed monthIdx, 1-indexed day) */
var FIXED_HOLIDAYS = [
  // Janvar
  { month:0, day:1, span:3, kind:"w", name:"Tag der Landung", desc:"Das wichtigste Fest des Jahres. Tag 1: Gedenken an die Reise und die Verlorenen. Tag 2: Ankunft mit Feuer und Musik. Tag 3: Treueschwur an die Kolonie." },
  { month:0, day:19, span:1, kind:"w", name:"Der Erste Schritt", desc:"Persönlicher Feiertag am letzten Tag des Monats. Jeder Velundri setzt sich ein kleines Ziel und schreibt es auf. Familien tauschen ihre Wünsche aus." },
  // Fevorn
  { month:1, day:7, span:1, kind:"r", name:"Aurelias Klinge", desc:"Turniere, Wettkämpfe und Waffensegnungen zu Ehren Aurelias. Gefallene Krieger werden namentlich genannt. Kein Trauertag — ein Ehrentag." },
  { month:1, day:18, span:1, kind:"r", name:"Selunara-Nacht", desc:"Die dunkelste Nacht des Fevorn wird Selunara geweiht. Laternen werden auf Gewässer gesetzt, leise Gebete gesprochen." },
  // Mareth
  { month:2, day:5, span:1, kind:"w", name:"Das Erwachen", desc:"Erster Erkundungstag des Jahres. Gruppen ziehen in die Wildnis, kartieren neue Gebiete. Abends wird das Entdeckte gemeinsam gefeiert." },
  { month:2, day:15, span:1, kind:"w", name:"Wurzelfest", desc:"Gemeinschaftliches Pflanzen und Gärtnern. Jede Familie legt ein Beet an. Abends gibt es ein gemeinsames Essen aus dem Selbstangebauten." },
  // Aprel
  { month:3, day:8, span:2, kind:"r", name:"Elysarions Nacht", desc:"Fest der Liebe und Leidenschaft. Tag 1: Kunstwerke, Lieder und Liebeserklärungen. Tag 2: Ausgelassene Feier bei Goldmondlicht." },
  { month:3, day:17, span:1, kind:"b", name:"Hydeas Segen", desc:"Kleine Opfergaben — Blüten, Früchte — werden in Flüsse oder Seen geworfen. Fischer und Wasserträger beten für eine sichere Saison." },
  // Mairen
  { month:4, day:9, span:1, kind:"b", name:"Die Stille", desc:"Stiller Besänftigungstag für Ophelis, Thraxis und Maledor. Kein Lärm, keine Feste — stille Rituale, Schutzzeichen an Türen. Kinder bleiben drinnen." },
  { month:4, day:18, span:1, kind:"w", name:"Tag der Erinnerung", desc:"Stiller Gedenktag an die verlorene Heimat. Velundri kochen alte Rezepte, hören alte Musik, lesen aus mitgebrachten Büchern." },
  // Junvar
  { month:5, day:6, span:2, kind:"r", name:"Siennas Zenit", desc:"Hochsommerfest zu Ehren Siennas. Märkte, Sonnenfeiern. Am zweiten Tag großes Freudenfeuer — Sienna soll sehen, dass man ihr Licht trägt." },
  { month:5, day:14, span:1, kind:"w", name:"Nacht der Irrlichter", desc:"In der Jahresmitte werden Lichter und Laternen durch die Siedlung getragen — zu Ehren der Reisenden. Wer auf Expedition ist, gilt als gesegnet." },
  // Juval
  { month:6, day:5, span:3, kind:"w", name:"Der Große Markt", desc:"Das größte weltliche Handelsfest. Händler aus allen Teilen der Kolonie kommen zusammen. Wettkämpfe, Auktionen, Vorführungen." },
  { month:6, day:15, span:1, kind:"r", name:"Eiritha-Morgen", desc:"Frühmorgendliches Ritual zu Ehren Eirithas. Mit dem ersten Licht betet man für Heilung. Heiler und Ärzte werden besonders geehrt." },
  // Auvar
  { month:7, day:10, span:1, kind:"r", name:"Avalastes Wende", desc:"Halbjahrspunkt, Fest der Wiedergeburt. Alte Dinge werden symbolisch verbrannt oder begraben — Avalaste soll Erneuerung bringen." },
  { month:7, day:19, span:1, kind:"r", name:"Ferys-Abend", desc:"Abendliches Fest zu Ehren von Ferys. Straßenmusiker spielen, spontane Tänze entstehen. Niemand arbeitet nach Sonnenuntergang." },
  // Septhar (Aschenhauch-Ritual is dynamic – computed below)
  { month:8, day:12, span:1, kind:"w", name:"Tag der Brücken", desc:"Gemeinschaftsprojekte stehen im Mittelpunkt — Reparaturen, Neubauten. Wer alleine lebt, wird besucht. Symbolisch werden Brücken zwischen Menschen gebaut." },
  // Oktar
  { month:9, day:7, span:2, kind:"r", name:"Nacht des Schleiers", desc:"Fest zu Ehren der Neutralen — Daramur, Hadir, Aetherius. Tag 1: Tote ehren, Gräber besuchen. Tag 2: Leben feiern — bewusster Gegenpol." },
  { month:9, day:15, span:1, kind:"b", name:"Melions Ruf", desc:"Melion, Gott des Schicksals, wird besänftigt. Man zieht ein Holzstäbchen aus einem Behälter — die Farbe deutet den Monat. Beliebt bei Kindern." },
  // Novren
  { month:10, day:8, span:1, kind:"w", name:"Das Labyrinthfest", desc:"Rätsel- und Wissensfest. Schreibwettbewerbe, Debatten, Rätselmärkte. Kinder lösen kleine Labyrinthe aus Holz oder Stoff." },
  { month:10, day:16, span:1, kind:"r", name:"Vindeahs Gabe", desc:"Vindeah wird mit Opfergaben am Waldrand geehrt. Jäger bitten um Schutz, Kinder binden bunte Bänder an Bäume." },
  // Derath
  { month:11, day:8, span:1, kind:"r", name:"Nacht der Naturgeister", desc:"Die fünf Naturgeister werden gemeinsam besänftigt. Feuer, Wasser, Stein, Wind und Holz an einem Ort vereint — ein kleines Lagerfeuer am Fluss." },
  { month:11, day:19, span:1, kind:"w", name:"Die Schwellennacht", desc:"Jahresabschluss. Man blickt zurück, setzt sich Ziele. Kleine Opfergaben an alle Gottheiten gemeinsam. Dann feiert man bis Mitternacht den Jahreswechsel." }
];

/* ══════════════════════════════════════════════════
   HELPER
   ══════════════════════════════════════════════════ */

/* monthStart[i] = day-of-year of first day of month i (1-indexed) */
var MONTH_START = (function () {
  const out = [];
  let s = 1;
  for (const m of MONTHS) { out.push(s); s += m.days; }
  return out;
})();

/* Map day-of-year (1..224) → { monthIdx, dayInMonth } */
function dayOfYearToMonth(doy) {
  for (let i = MONTHS.length - 1; i >= 0; i--) {
    if (doy >= MONTH_START[i]) return { monthIdx:i, dayInMonth: doy - MONTH_START[i] + 1 };
  }
  return { monthIdx:0, dayInMonth:1 };
}

/* absolute day → { year, doy }.
   year > 0  = Jahr N n.d.L.   (abs >= 1)
   year < 0  = Jahr |N| v.d.L. (abs <= -1)
   year == 0 = Tag der Landung (abs == 0, kein Monat) */
function absToYearDoy(abs) {
  if (abs === 0) return { year:0, doy:0, special:"Tag der Landung" };
  if (abs >= 1) {
    const year = Math.floor((abs - 1) / YEAR_DAYS) + 1;
    const doy  = ((abs - 1) % YEAR_DAYS) + 1;
    return { year, doy };
  }
  const year = Math.floor(abs / YEAR_DAYS);
  const doy  = abs - year * YEAR_DAYS + 1;
  return { year, doy };
}

function yearDoyToAbs(year, doy) {
  if (year > 0) return (year - 1) * YEAR_DAYS + doy;
  if (year < 0) return year * YEAR_DAYS + (doy - 1);
  return 0;
}

function yearLabel(year) {
  if (year > 0) return `Jahr ${year} n.d.L.`;
  if (year < 0) return `Jahr ${-year} v.d.L.`;
  return "Landung";
}

function weekdayIdx(abs) { return ((abs - 1) % 7 + 7) % 7; }

/* Mondzyklen sind verankert an: Janvar 1, Jahr 5 v.d.L. = abs -1120
   An diesem Tag stehen beide Monde im Neumond. */
var MOON_ANCHOR_ABS = -MIN_YEAR_VDL * YEAR_DAYS;  // -1120
function goldPhaseDay(abs) { const d = abs - MOON_ANCHOR_ABS; return ((d % 28) + 28) % 28 + 1; }
function ashPhaseDay(abs)  { const d = abs - MOON_ANCHOR_ABS; return ((d % 17) + 17) % 17 + 1; }

function findPhase(phases, pday) {
  return phases.find(p => p.days.includes(pday)) || phases[0];
}

/* Get holidays for a given absolute day */
function holidaysOnDay(abs) {
  const { year, doy } = absToYearDoy(abs);
  if (year < 1) return [];
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy);
  const out = [];
  for (const h of FIXED_HOLIDAYS) {
    if (h.month !== monthIdx) continue;
    if (dayInMonth >= h.day && dayInMonth < h.day + h.span) {
      const offset = dayInMonth - h.day + 1;
      out.push({ ...h, dayOfFeast: offset });
    }
  }
  // Aschenhauch-Ritual in Septhar — falls on Aschmond Vollmond day in month 8
  if (monthIdx === 8) {
    if (ashPhaseDay(abs) === 12) {
      out.push({
        month:8, day:dayInMonth, span:1, kind:"b",
        name:"Das Aschenhauch-Ritual",
        desc:"Am Tag des Aschmond-Vollmonds. Besänftigung der Naturgeister und des Aschmonds. Graue Bänder an Türen, leise Gebete. Schutz vor schlechten Träumen und Krankheit.",
        dayOfFeast:1
      });
    }
  }
  return out;
}

/* Format date string */
function formatDate(abs) {
  if (abs === 0) return "Tag der Landung";
  const { year, doy } = absToYearDoy(abs);
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy);
  const wd = WEEKDAYS[weekdayIdx(abs)];
  return `${wd}, ${dayInMonth}. ${MONTHS[monthIdx].name}, ${yearLabel(year)}`;
}


/* Kurzform „14. Aprel 1 n.d.L.“ (ohne Wochentag) */
function formatKurz(abs) {
  if (abs === 0) return "Tag der Landung";
  const { year, doy } = absToYearDoy(abs);
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy);
  const j = year > 0 ? `${year} n.d.L.` : `${-year} v.d.L.`;
  return `${dayInMonth}. ${MONTHS[monthIdx].name} ${j}`;
}

/* Alles, was eine Tagesanzeige braucht */
function tagInfo(abs) {
  const tag = abs === 0 ? 1 : abs;
  const { year, doy } = absToYearDoy(tag);
  const { monthIdx, dayInMonth } = dayOfYearToMonth(doy);
  const m = MONTHS[monthIdx];
  return {
    abs, year, doy, monthIdx, day: dayInMonth, month: m.name, monthRoman: m.roman, sign: m.sign, vibe: m.vibe,
    weekday: WEEKDAYS[weekdayIdx(tag)], yearLabel: year > 0 ? `${year} n.d.L.` : `${-year} v.d.L.`,
    goldDay: goldPhaseDay(tag), ashDay: ashPhaseDay(tag), feste: holidaysOnDay(tag),
  };
}

/* Nächster Festbeginn nach abs (höchstens ein Jahr voraus) */
function naechstesFest(abs) {
  for (let i = 1; i <= YEAR_DAYS; i++) {
    const f = holidaysOnDay(abs + i).find(h => h.dayOfFeast === 1);
    if (f) return { ...f, inTagen: i };
  }
  return null;
}

/* „Heute“ aus der Datenbank (settings.kalender_today), folgt Änderungen der Spielleitung live */
var heuteCache = null;
var heuteHoerer = new Set();
var heuteGestartet = false;
function heuteSetzen(v) { heuteCache = v; heuteHoerer.forEach(f => f(v)); }
function heuteLaden() {
  return window._sb.from('settings').select('value').eq('key', 'kalender_today').maybeSingle().then(({ data }) => {
    const n = parseInt(data && data.value, 10);
    heuteSetzen(isNaN(n) ? (parseInt(localStorage.getItem('meruria-today-abs'), 10) || 14) : n);
  });
}
function heuteStarten() {
  if (heuteGestartet || !window._sb) return;
  heuteGestartet = true;
  heuteLaden();
  // auch ohne Realtime aktuell bleiben: beim Zurückkehren zum Tab neu laden
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') heuteLaden(); });
  window._sb.channel('meruria-kalender-heute').on('postgres_changes', {
    event: '*', schema: 'public', table: 'settings', filter: 'key=eq.kalender_today'
  }, payload => {
    const n = parseInt(payload.new && payload.new.value, 10);
    if (!isNaN(n)) heuteSetzen(n);
  }).subscribe();
}
function useHeute() {
  const [v, setV] = React.useState(heuteCache);
  React.useEffect(() => {
    heuteHoerer.add(setV);
    heuteStarten();
    if (heuteCache != null) setV(heuteCache);
    return () => { heuteHoerer.delete(setV); };
  }, []);
  return v;
}

window.MeruriaKalender = { MONTHS, WEEKDAYS, YEAR_DAYS, MIN_YEAR_VDL, GOLD_PHASES, ASH_PHASES, FIXED_HOLIDAYS, MONTH_START, MOON_ANCHOR_ABS,
  dayOfYearToMonth, absToYearDoy, yearDoyToAbs, yearLabel, weekdayIdx, goldPhaseDay, ashPhaseDay, findPhase,
  holidaysOnDay, formatDate, formatKurz, tagInfo, naechstesFest, useHeute };
})();
