(function () {
/* ═══════════════════════════════════════════════════════════════
   steckbrief-components.jsx — Shared Steckbrief UI components
   Requires window globals: React, mod, fmtMod, attrKey, skillBonus,
                            ImageSlot, SecTitle, Card, Corners, IRow
   ═══════════════════════════════════════════════════════════════ */
const {
  useState: useSteckbrief
} = React;
const {
  mod,
  fmtMod,
  attrKey,
  skillBonus,
  ImageSlot,
  SecTitle,
  Card,
  Corners,
  IRow
} = window;

/* ── Skill-Defaults (alle Fertigkeiten, kein Übungsbonus) ── */
const SKILLS_DEFAULT = [{
  name: "Akrobatik",
  attr: "Ges",
  prof: 0
}, {
  name: "Arkane Kunde",
  attr: "Int",
  prof: 0
}, {
  name: "Athletik",
  attr: "Stä",
  prof: 0
}, {
  name: "Auftreten",
  attr: "Cha",
  prof: 0
}, {
  name: "Einschüchtern",
  attr: "Cha",
  prof: 0
}, {
  name: "Fingerfertigkeit",
  attr: "Ges",
  prof: 0
}, {
  name: "Geschichte",
  attr: "Int",
  prof: 0
}, {
  name: "Heilkunde",
  attr: "Wei",
  prof: 0
}, {
  name: "Heimlichkeit",
  attr: "Ges",
  prof: 0
}, {
  name: "Mit Tieren umgehen",
  attr: "Wei",
  prof: 0
}, {
  name: "Motiv erkennen",
  attr: "Wei",
  prof: 0
}, {
  name: "Nachforschungen",
  attr: "Int",
  prof: 0
}, {
  name: "Naturkunde",
  attr: "Int",
  prof: 0
}, {
  name: "Religion",
  attr: "Int",
  prof: 0
}, {
  name: "Täuschen",
  attr: "Cha",
  prof: 0
}, {
  name: "Überlebenskunst",
  attr: "Wei",
  prof: 0
}, {
  name: "Überzeugen",
  attr: "Cha",
  prof: 0
}, {
  name: "Wahrnehmung",
  attr: "Wei",
  prof: 0
}];

/* ── Quiz-Draft → Steckbrief-Objekt ────────────────────────────
   Erweiterung: (1) Quiz-Feld sammeln, (2) ins draft-Objekt packen,
                (3) entsprechende Zeile hier updaten.
   ─────────────────────────────────────────────────────────────── */
function buildChar(d) {
  return {
    // ── Aus Quiz ───────────────────────────────────────────────
    name: d.name || 'Neuer Charakter',
    race: d.race || '—',
    class: d.class || '—',
    background: d.background || '—',
    division: d.division || '—',
    deity: d.deity || '—',
    deityDomain: '—',
    // TODO: aus Gottheitsdaten ableiten
    deityHue: 55,
    stats: d.stats || {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    },
    // ── TODO: Quiz-Erweiterungen ───────────────────────────────
    alignment: d.alignment || '—',
    // TODO: quiz
    zodiac: d.zodiac || '—',
    // TODO: quiz
    birthday: d.birthday || '—',
    // TODO: quiz

    // ── Festwerte / Stufe 1 ────────────────────────────────────
    subclass: '—',
    level: 1,
    xp: 0,
    profBonus: 2,
    rank: 'Neuankömmling',
    rankLevel: 1,
    rankMax: 5,
    hp: 10,
    ac: 10,
    initiative: 0,
    speed: 9,
    gender: '—',
    age: '—',
    birthplace: '—',
    height: '—',
    weight: '—',
    eyes: '—',
    hair: '—',
    skin: '—',
    // ── Platzhalter-Texte ──────────────────────────────────────
    story: '',
    ersteTage: 'Als sich meine Träumerkapsel öffnete, ...',
    personality: '',
    ideals: '',
    bonds: '',
    flaws: d.samen ? `Samen der Furcht: ${d.samen}` : '',
    // ── Leer bis selbst befüllt ────────────────────────────────
    weapons: [],
    quests: [],
    companions: [],
    contacts: [],
    zauber: [],
    // ── Freundebuch: TODO-Felder klar markiert ─────────────────
    freundebuch: [{
      frage: 'Meine Lieblingsfarbe',
      antwort: d.lieblingsfarbe || '—'
    },
    // TODO: quiz
    {
      frage: 'Mein Lieblingsessen',
      antwort: '—'
    }, {
      frage: 'Lieblingsbeschäftigung',
      antwort: '—'
    }, {
      frage: 'Wen ich bewundere',
      antwort: '—'
    }, {
      frage: 'Mein größter Traum',
      antwort: '—'
    }, {
      frage: 'Meine größte Angst',
      antwort: d.samen || '—'
    },
    // aus Quiz
    {
      frage: 'Wenn ich ein Tier wäre...',
      antwort: d.tier || '—'
    },
    // TODO: quiz
    {
      frage: 'Mein Motto',
      antwort: d.motto || '—'
    } // TODO: quiz
    ],
    skills: SKILLS_DEFAULT
  };
}

/* ── Division & Rang ──────────────────────── */
function DivisionRank({
  char
}) {
  const roman = ["I", "II", "III", "IV", "V"];
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(SecTitle, {
    label: "Division & Rang"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: ".18em",
      color: "rgba(210,202,245,0.9)",
      textTransform: "uppercase",
      marginBottom: 7
    }
  }, char.division), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, Array.from({
    length: char.rankMax
  }, (_, i) => {
    const filled = i < char.rankLevel;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-block",
        width: 9,
        height: 9,
        transform: "rotate(45deg)",
        flexShrink: 0,
        background: filled ? "rgba(124,77,255,0.68)" : "transparent",
        border: `1px solid rgba(124,77,255,${filled ? 0.55 : 0.2})`
      }
    });
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--white)"
    }
  }, char.rank, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(124,77,255,0.6)"
    }
  }, " \xB7 "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(124,77,255,0.85)"
    }
  }, roman[char.rankLevel - 1]))));
}

/* ── Gottheit ─────────────────────────────── */
function DeityCard({
  char
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(SecTitle, {
    label: "Gottheit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    slotId: "deity-symbol",
    label: "Symbol",
    height: 72,
    hue: char.deityHue || 55
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: ".16em",
      color: "var(--white)",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, char.deity), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: ".12em",
      color: "rgba(124,77,255,0.5)"
    }
  }, char.deityDomain))));
}

/* ── Kampf-Kompakt ────────────────────────── */
function CombatCompact({
  char
}) {
  const stats = [["TP", char.hp], ["RK", char.ac], ["INIT", fmtMod(char.initiative)], ["BEWG", char.speed + "m"]];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SecTitle, {
    label: "Kampf"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 11
    }
  }, stats.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "rgba(7,4,18,0.9)",
      border: "1px solid rgba(124,77,255,0.22)",
      borderRadius: 3,
      padding: "7px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      color: "var(--white)",
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 6.5,
      letterSpacing: ".18em",
      color: "rgba(124,77,255,0.4)",
      textTransform: "uppercase",
      marginTop: 3
    }
  }, l)))), char.weapons.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "3px 0",
      borderBottom: "1px solid rgba(124,77,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 300,
      color: "var(--silver)",
      flex: 1
    }
  }, w.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(124,77,255,0.78)"
    }
  }, w.bonus), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "rgba(175,168,210,0.5)"
    }
  }, w.damage))));
}

/* ── Attribute ────────────────────────────── */
const ATTR_DEFS = [{
  key: "str",
  label: "STÄRKE"
}, {
  key: "dex",
  label: "GESCHICK."
}, {
  key: "con",
  label: "KONST."
}, {
  key: "int",
  label: "INT."
}, {
  key: "wis",
  label: "WEISHEIT"
}, {
  key: "cha",
  label: "CHARISMA"
}];
function AttrBlock({
  def,
  char,
  hi,
  lo
}) {
  const score = char.stats[def.key];
  const m = mod(score);
  const borderC = hi ? "rgba(80,200,140,0.55)" : lo ? "rgba(220,80,80,0.45)" : "rgba(124,77,255,0.2)";
  const scoreC = hi ? "rgba(80,200,140,0.95)" : lo ? "rgba(220,100,100,0.9)" : "var(--white)";
  const modC = hi ? "rgba(80,200,140,0.85)" : lo ? "rgba(220,100,100,0.75)" : "rgba(124,77,255,0.65)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      background: "rgba(7,4,18,0.97)",
      border: `1px solid ${borderC}`,
      borderRadius: 3,
      padding: "9px 4px 8px",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7,
      letterSpacing: ".16em",
      color: "rgba(124,77,255,0.4)",
      textTransform: "uppercase",
      marginBottom: 5,
      textAlign: "center"
    }
  }, def.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      color: scoreC,
      lineHeight: 1
    }
  }, score), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "65%",
      height: 1,
      background: "rgba(124,77,255,0.15)",
      margin: "5px 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: modC
    }
  }, fmtMod(m)));
}
function AttributeGrid({
  char
}) {
  const vals = ATTR_DEFS.map(d => char.stats[d.key]);
  const max = Math.max(...vals),
    min = Math.min(...vals);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(SecTitle, {
    label: "Attribute"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ATTR_DEFS.map(d => /*#__PURE__*/React.createElement(AttrBlock, {
    key: d.key,
    def: d,
    char: char,
    hi: char.stats[d.key] === max,
    lo: char.stats[d.key] === min
  }))));
}

/* ── Stärken (geübte Skills als Pills) ─────── */
function SkillPills({
  char
}) {
  const profs = char.skills.filter(s => s.prof > 0);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(SecTitle, {
    label: "St\xE4rken \xB7 Ge\xFCbte Fertigkeiten"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, profs.map(s => {
    const bonus = skillBonus(s, char.stats, char.profBonus);
    return /*#__PURE__*/React.createElement("span", {
      key: s.name,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        padding: "3px 10px",
        background: "rgba(124,77,255,0.12)",
        border: "1px solid rgba(124,77,255,0.32)",
        borderRadius: 2,
        color: "rgba(200,190,240,0.88)",
        letterSpacing: ".06em",
        display: "inline-flex",
        gap: 7,
        alignItems: "center"
      }
    }, s.name, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(124,77,255,0.92)",
        fontWeight: 600
      }
    }, fmtMod(bonus)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      color: "rgba(124,77,255,0.28)",
      marginTop: 8,
      letterSpacing: ".1em"
    }
  }, "\xDCbungsbonus +", char.profBonus));
}

/* ── Persönlichkeit ───────────────────────── */
function PersonalitySection({
  char
}) {
  const items = [{
    l: "Merkmale",
    t: char.personality,
    acc: true
  }, {
    l: "Ideale",
    t: char.ideals
  }, {
    l: "Bindungen",
    t: char.bonds
  }, {
    l: "Makel",
    t: char.flaws
  }];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SecTitle, {
    label: "Pers\xF6nlichkeit"
  }), items.map(({
    l,
    t,
    acc
  }) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      letterSpacing: ".22em",
      color: `rgba(124,77,255,${acc ? 0.65 : 0.38})`,
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      fontWeight: 300,
      color: "var(--silver)",
      lineHeight: 1.72,
      fontStyle: "italic"
    }
  }, "\u201E", t, "\""))));
}

/* ── Quest-Karte ──────────────────────────── */
function QuestCard({
  quest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card-bg)",
      border: "1px solid rgba(124,77,255,0.18)",
      borderRadius: 4,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: ".14em",
      color: "rgba(210,202,245,0.92)",
      textTransform: "uppercase",
      flex: 1
    }
  }, quest.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      color: "rgba(124,77,255,0.4)",
      letterSpacing: ".1em",
      marginBottom: 6
    }
  }, quest.year), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      fontWeight: 300,
      color: "var(--silver)",
      lineHeight: 1.65
    }
  }, quest.short));
}

/* ── Begleiter-Karte ──────────────────────── */
function CompanionCard({
  comp
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      background: "var(--card-bg)",
      border: "1px solid rgba(124,77,255,0.2)",
      borderRadius: 4,
      padding: "13px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    slotId: comp.id,
    label: comp.name,
    height: 88,
    hue: comp.hue || 270,
    portrait: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 12,
      letterSpacing: ".16em",
      color: "var(--white)",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, comp.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: ".1em",
      color: "rgba(124,77,255,0.5)",
      marginBottom: 8
    }
  }, comp.type), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      fontWeight: 300,
      color: "var(--silver)",
      lineHeight: 1.65,
      fontStyle: "italic"
    }
  }, "\u201E", comp.desc, "\"")));
}

/* ── Kontakte-Tablet ─────────────────────── */
const RELATION_COL = {
  "Verbündete": ["rgba(80,200,140,0.78)", "rgba(80,200,140,0.1)"],
  "Vorgesetzter": ["rgba(124,77,255,0.82)", "rgba(124,77,255,0.12)"],
  "Neutral": ["rgba(170,162,210,0.65)", "rgba(170,162,210,0.08)"],
  "Unbekannt": ["rgba(200,145,45,0.82)", "rgba(200,145,45,0.1)"],
  "Feind": ["rgba(220,65,65,0.82)", "rgba(220,65,65,0.1)"]
};
function KontakteTablet({
  char
}) {
  const [sel, setSel] = useSteckbrief(() => char.contacts && char.contacts[0] || null);
  if (!char.contacts || !char.contacts.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(5,3,15,0.99)",
      border: "1px solid rgba(124,77,255,0.38)",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,0.75), inset 0 1px 0 rgba(124,77,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 16px",
      background: "rgba(10,6,26,0.98)",
      borderBottom: "1px solid rgba(124,77,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "rgba(124,77,255,0.7)",
      animation: "pulseGlow 2.5s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: ".25em",
      color: "rgba(124,77,255,0.62)",
      textTransform: "uppercase"
    }
  }, "Kontakt-Datenbank")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      color: "rgba(124,77,255,0.3)",
      letterSpacing: ".1em"
    }
  }, char.name), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 16,
      height: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      color: "rgba(160,140,255,0.7)",
      background: "rgba(124,77,255,0.12)",
      border: "1px solid rgba(124,77,255,0.4)",
      borderRadius: 2,
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "#f0eeff";
      e.currentTarget.style.background = "rgba(124,77,255,0.28)";
      e.currentTarget.style.borderColor = "rgba(160,140,255,0.7)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "rgba(160,140,255,0.7)";
      e.currentTarget.style.background = "rgba(124,77,255,0.12)";
      e.currentTarget.style.borderColor = "rgba(124,77,255,0.4)";
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 236,
      flexShrink: 0,
      borderRight: "1px solid rgba(124,77,255,0.14)",
      overflowY: "auto"
    }
  }, char.contacts.map(ct => {
    const active = sel && sel.id === ct.id;
    const [rc] = RELATION_COL[ct.relation] || RELATION_COL["Neutral"];
    return /*#__PURE__*/React.createElement("div", {
      key: ct.id,
      onClick: () => setSel(ct),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        cursor: "pointer",
        transition: "all .18s ease",
        background: active ? "rgba(124,77,255,0.1)" : "transparent",
        borderLeft: active ? "2.5px solid rgba(124,77,255,0.65)" : "2.5px solid transparent",
        borderBottom: "1px solid rgba(124,77,255,0.07)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        flexShrink: 0,
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(ImageSlot, {
      slotId: ct.id + "-av",
      label: "",
      height: 36,
      hue: ct.hue || 270,
      portrait: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 11.5,
        fontWeight: active ? 400 : 300,
        color: active ? "var(--white)" : "var(--silver)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ct.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 7.5,
        color: "rgba(124,77,255,0.42)",
        marginTop: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, ct.role)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 6.5,
        padding: "1px 5px",
        background: (RELATION_COL[ct.relation] || RELATION_COL["Neutral"])[1],
        border: `1px solid ${rc}`,
        borderRadius: 2,
        color: rc,
        flexShrink: 0,
        whiteSpace: "nowrap"
      }
    }, ct.relation));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "18px 20px",
      overflowY: "auto"
    }
  }, sel ? /*#__PURE__*/React.createElement("div", {
    key: sel.id,
    style: {
      animation: "fadeInUp .22s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 400,
      letterSpacing: ".18em",
      color: "var(--white)",
      textTransform: "uppercase",
      marginBottom: 5
    }
  }, sel.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: ".1em",
      color: "rgba(124,77,255,0.5)",
      marginBottom: 11
    }
  }, sel.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, [[sel.relation, RELATION_COL[sel.relation] || RELATION_COL["Neutral"]], [sel.race, ["rgba(180,172,210,0.62)", "rgba(180,172,210,0.08)"]], [sel.status, ["rgba(80,200,140,0.65)", "rgba(80,200,140,0.09)"]]].map(([label, [tc, bg]], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      padding: "2px 8px",
      background: bg,
      border: `1px solid ${tc}`,
      borderRadius: 2,
      color: tc,
      letterSpacing: ".08em"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 118,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    slotId: sel.id + "-portrait",
    label: sel.name,
    height: 138,
    hue: sel.hue || 270,
    portrait: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(124,77,255,0.1)",
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      letterSpacing: ".22em",
      color: "rgba(124,77,255,0.42)",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Was ich \xFCber diese Person denke:"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      fontWeight: 300,
      color: "var(--silver)",
      lineHeight: 1.82,
      fontStyle: "italic"
    }
  }, "\u201E", sel.note, "\"")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: ".2em",
      color: "rgba(124,77,255,0.22)",
      textTransform: "uppercase"
    }
  }, "\u2190 Kontakt ausw\xE4hlen"))));
}

/* ── Wissenswertes-Karte ─────────────────── */
function FbCard({
  item,
  index
}) {
  const [hov, setHov] = useSteckbrief(false);
  const num = String(index + 1).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: hov ? "rgba(16,10,36,0.97)" : "var(--card-bg)",
      border: `1px solid rgba(124,77,255,${hov ? 0.38 : 0.15})`,
      borderRadius: 4,
      padding: "20px 18px 18px",
      position: "relative",
      overflow: "hidden",
      cursor: "default",
      transform: hov ? "translateY(-2px)" : "none",
      boxShadow: hov ? "0 10px 32px rgba(0,0,0,0.5),0 0 16px rgba(124,77,255,0.07)" : "none",
      transition: "all .25s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -14,
      left: 10,
      fontFamily: "Georgia,serif",
      fontSize: 96,
      lineHeight: 1,
      color: "rgba(124,77,255,0.055)",
      pointerEvents: "none",
      userSelect: "none",
      transition: "color .25s",
      ...(hov && {
        color: "rgba(124,77,255,0.09)"
      })
    }
  }, "\u201E"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 13,
      right: 15,
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: ".08em",
      color: `rgba(124,77,255,${hov ? 0.4 : 0.2})`,
      transition: "color .25s"
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: ".22em",
      color: `rgba(124,77,255,${hov ? 0.72 : 0.5})`,
      textTransform: "uppercase",
      marginBottom: 10,
      paddingRight: 28,
      transition: "color .25s",
      lineHeight: 1.5
    }
  }, item.frage), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: `rgba(124,77,255,${hov ? 0.45 : 0.22})`,
      marginBottom: 12,
      transition: "background .25s"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.78,
      fontStyle: "italic",
      color: hov ? "var(--white)" : "var(--silver)",
      transition: "color .25s ease"
    }
  }, item.antwort));
}
Object.assign(window, {
  SKILLS_DEFAULT,
  buildChar,
  DivisionRank,
  DeityCard,
  CombatCompact,
  AttributeGrid,
  SkillPills,
  PersonalitySection,
  QuestCard,
  CompanionCard,
  FbCard,
  KontakteTablet
});
})();