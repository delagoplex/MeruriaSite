(function () {
  var h = React.createElement;
  var useState = React.useState;

  // ── Stat computation ─────────────────────────────────────────
  function computeNscStats(division, rang) {
    var tier = 10 - rang; // tier 0 (rang 10, schwach) bis tier 9 (rang 1, stark)
    var cfg  = division.nscConfig;
    var prof = 2 + Math.floor(tier / 3); // +2 bis +5

    var STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    function attrScore(stat) {
      if (cfg.primaryStats.includes(stat))   return 14 + Math.floor(tier * 0.8);
      if (cfg.secondaryStats.includes(stat)) return 12 + Math.floor(tier * 0.5);
      return 10 + Math.floor(tier * 0.3);
    }
    function mod(score) { return Math.floor((score - 10) / 2); }
    function fmtMod(m) { return (m >= 0 ? '+' : '') + m; }

    var attr = {};
    STATS.forEach(function(s) { attr[s] = attrScore(s); });

    // TP
    var diceCount = 2 + Math.floor(tier * 1.2);
    var cappedDie = Math.min(6 + tier * 2, 12);
    var conMod    = mod(attr.CON);
    var tp        = Math.floor(diceCount * (cappedDie / 2 + 0.5)) + diceCount * conMod;
    var tpBonus   = diceCount * conMod;
    var tp_wuerfel = diceCount + 'W' + cappedDie + (tpBonus !== 0 ? (tpBonus > 0 ? '+' : '') + tpBonus : '');

    // RK
    var rk = cfg.baseAC + Math.floor(tier / 2);
    var ruestungstyp = tier >= 6 ? cfg.armorTypeHigh : cfg.armorType;

    // Rettungswürfe (ab tier >= 3 = rang 1-7)
    var saves = {};
    if (tier >= 3) {
      cfg.savingThrows.forEach(function(s) { saves[s] = mod(attr[s]) + prof; });
    }

    // Fertigkeiten
    var skills = {};
    cfg.skills.forEach(function(sk) { skills[sk.name] = mod(attr[sk.stat]) + prof; });

    // Attackwerte
    var primaryStat  = attr[cfg.primaryStats[0]];
    var attackBonus  = mod(primaryStat) + prof;
    var dmgDie       = 4 + Math.floor(tier / 2) * 2;
    var dmgMod       = mod(primaryStat);
    var damageDice   = '1W' + dmgDie + (dmgMod !== 0 ? (dmgMod > 0 ? '+' : '') + dmgMod : '');
    var dcSG         = 8 + prof + mod(attr[cfg.primaryStats[1]]);

    var titelObj = division.raenge.find(function(r) { return r.rang === rang; });
    var titel    = titelObj ? titelObj.titel : 'Rang ' + rang;

    function fill(s) {
      return s
        .replace(/\{titel\}/g, titel)
        .replace(/\{attackBonus\}/g, fmtMod(attackBonus))
        .replace(/\{damageDice\}/g, damageDice)
        .replace(/\{DC\}/g, dcSG);
    }

    var passiveWahrnehm = 10 + mod(attr.WIS) + (skills['Wahrnehmung'] !== undefined ? prof : 0);

    return {
      rang: rang, titel: titel,
      tp: tp, tp_wuerfel: tp_wuerfel,
      rk: rk, ruestungstyp: ruestungstyp,
      bewegung: '9 m',
      attribute: attr, prof: prof, mod: mod, fmtMod: fmtMod,
      rettungswuerfe: saves,
      fertigkeiten: skills,
      passiveWahrnehmung: passiveWahrnehm,
      besonderheit: { name: 'Besonderheit', beschreibung: fill(cfg.besonderheit) },
      aktionen: cfg.aktionen
        .filter(function(a) { return !a.minTier || tier >= a.minTier; })
        .map(function(a) { return { name: a.name, beschreibung: fill(a.beschreibung) }; }),
    };
  }

  // ── Sub-components ───────────────────────────────────────────
  function Divider(accent) {
    return h('div', { style: {
      height: 1, background: 'linear-gradient(to right, ' + accent + '60, transparent)',
      margin: '8px 0',
    }});
  }

  function SBLabel(text, accent) {
    return h('div', { style: {
      fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: accent, marginBottom: 4, marginTop: 10,
    }}, text);
  }

  // ── NscStatblock component ────────────────────────────────────
  window.NscStatblock = function NscStatblock(props) {
    var division     = props.division;
    var selectedRang = props.selectedRang;
    var onRangChange = props.onRangChange;
    var accent       = division.accent;
    var cA           = function(a) {
      // accent with alpha — derive from hex
      var r = parseInt(accent.slice(1,3), 16);
      var g = parseInt(accent.slice(3,5), 16);
      var b = parseInt(accent.slice(5,7), 16);
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    };

    var stats = computeNscStats(division, selectedRang);
    var ATTRS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
    var ATTR_DE = { STR: 'STÄ', DEX: 'GES', CON: 'KON', INT: 'INT', WIS: 'WEI', CHA: 'CHA' };

    // Rang picker
    var picker = h('div', { style: { display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 16 } },
      division.raenge.map(function(r) {
        var active = r.rang === selectedRang;
        return h('button', {
          key: r.rang,
          onClick: function() { onRangChange(r.rang); },
          title: r.titel,
          style: {
            width: 32, height: 32, flexShrink: 0,
            border: '1px solid ' + (active ? accent : cA(0.25)),
            background: active ? cA(0.22) : 'rgba(10,8,28,0.6)',
            color: active ? accent : 'rgba(180,170,220,0.55)',
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: active ? 600 : 400,
            borderRadius: 3, cursor: 'pointer',
            boxShadow: active ? '0 0 10px ' + cA(0.35) : 'none',
            transition: 'all 0.15s',
          },
        }, r.rang);
      })
    );

    // Selected rank label
    var rankLabel = h('div', { style: {
      fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em',
      color: cA(0.7), textTransform: 'uppercase', marginBottom: 14,
    }}, 'Rang ' + selectedRang + ' · ' + stats.titel);

    // Statblock panel
    var panel = h('div', { style: {
      background: 'rgba(8,6,22,0.85)',
      border: '1px solid ' + cA(0.28),
      borderRadius: 4,
      padding: '18px 20px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.55)',
    }},
      // Header
      h('div', { style: { marginBottom: 12 } },
        h('div', { style: {
          fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f0eeff', fontWeight: 400,
        }}, stats.titel),
        h('div', { style: {
          fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(180,170,220,0.55)',
          letterSpacing: '0.12em', marginTop: 2,
        }}, 'Mittelgroßer Humanoid · ' + division.name.replace(/^Die\s+/, ''))
      ),

      Divider(accent),

      // Meta grid: RK, TP, Bewegung, Übungsbonus
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, margin: '10px 0' } },
        [
          { label: 'RK',         value: stats.rk + (stats.ruestungstyp ? ' (' + stats.ruestungstyp + ')' : '') },
          { label: 'TP',         value: stats.tp + ' (' + stats.tp_wuerfel + ')' },
          { label: 'Bewegung',   value: stats.bewegung },
          { label: 'Übungsbonus',value: stats.fmtMod(stats.prof) },
        ].map(function(item) {
          return h('div', { key: item.label, style: {
            background: 'rgba(124,77,255,0.06)', border: '1px solid ' + cA(0.15),
            borderRadius: 3, padding: '6px 8px',
          }},
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 7.5, letterSpacing: '0.18em', color: cA(0.65), textTransform: 'uppercase', marginBottom: 2 }}, item.label),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, color: '#f0eeff', fontWeight: 500 }}, item.value)
          );
        })
      ),

      Divider(accent),

      // Ability scores
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4, margin: '10px 0' } },
        ATTRS.map(function(s) {
          var score = stats.attribute[s];
          var m     = stats.mod(score);
          return h('div', { key: s, style: {
            textAlign: 'center', padding: '6px 4px',
            background: 'rgba(124,77,255,0.05)', borderRadius: 3,
            border: '1px solid rgba(124,77,255,0.1)',
          }},
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '0.14em', color: cA(0.55), textTransform: 'uppercase', marginBottom: 2 }}, ATTR_DE[s]),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 14, color: '#f0eeff', fontWeight: 600, lineHeight: 1.1 }}, score),
            h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, color: cA(0.8) }}, stats.fmtMod(m))
          );
        })
      ),

      Divider(accent),

      // Saves, Skills, Passive
      (Object.keys(stats.rettungswuerfe).length > 0) && h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,210,255,0.75)',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Rettungswürfe'),
        Object.entries(stats.rettungswuerfe).map(function(kv) { return kv[0] + ' ' + stats.fmtMod(kv[1]); }).join(', ')
      ),

      (Object.keys(stats.fertigkeiten).length > 0) && h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,210,255,0.75)',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Fertigkeiten'),
        Object.entries(stats.fertigkeiten).map(function(kv) { return kv[0] + ' ' + stats.fmtMod(kv[1]); }).join(', ')
      ),

      h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,210,255,0.75)',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Passive Wahrnehmung'),
        stats.passiveWahrnehmung
      ),

      h('div', { style: {
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,210,255,0.75)',
        letterSpacing: '0.06em', marginBottom: 4,
      }},
        h('span', { style: { color: cA(0.7), marginRight: 6 }}, 'Sprachen'),
        'Gemein'
      ),

      Divider(accent),

      // Besonderheit
      SBLabel('Besonderheit', cA(0.65)),
      h('div', { style: { marginBottom: 8 } },
        h('span', { style: {
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
          color: '#f0eeff', marginRight: 4,
        }}, stats.besonderheit.name + '.'),
        h('span', { style: {
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
          color: 'rgba(210,200,240,0.8)', lineHeight: 1.55,
        }}, stats.besonderheit.beschreibung)
      ),

      // Aktionen
      SBLabel('Aktionen', cA(0.65)),
      stats.aktionen.map(function(a) {
        return h('div', { key: a.name, style: { marginBottom: 8 } },
          h('span', { style: {
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
            color: '#f0eeff', marginRight: 4,
          }}, a.name + '.'),
          h('span', { style: {
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
            color: 'rgba(210,200,240,0.8)', lineHeight: 1.55,
          }}, a.beschreibung)
        );
      })
    );

    return h('div', null, picker, rankLabel, panel);
  };

  window.computeNscStats = computeNscStats;
})();
