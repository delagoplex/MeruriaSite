// Page entry for /spiel/rekrutierung.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/page-hero.jsx';
import '../../components/rasse-picker.jsx';

;(function () {
(function () {
const h        = React.createElement;
const useState = React.useState;

const { SiteNav, SiteGate, NscStatblock, Rekrutierungsrechner, PageHero } = window;
const DIVS = window.DIVISIONS_DATA || [];

// ── Styles ──────────────────────────────────────────────────
const PAGE_BG    = 'var(--bg)';

// ── DivisionTab ─────────────────────────────────────────────
function DivisionTab(props) {
  var div    = props.div;
  var active = props.active;
  var onClick = props.onClick;
  var r = parseInt(div.accent.slice(1,3), 16);
  var g = parseInt(div.accent.slice(3,5), 16);
  var b = parseInt(div.accent.slice(5,7), 16);
  var cA = function(a) { return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'; };

  return h('button', {
    onClick: onClick,
    style: {
      display:       'flex',
      alignItems:    'center',
      gap:           8,
      padding:       '8px 14px',
      background:    active ? cA(0.18) : 'rgba(var(--panel-rgb),0.5)',
      border:        '1px solid ' + (active ? div.accent : 'rgba(var(--purple-rgb),calc(0.15*var(--kp)))'),
      borderRadius:  3,
      cursor:        'pointer',
      flexShrink:    0,
      transition:    'all 0.15s',
      boxShadow:     active ? ('0 0 14px ' + cA(0.25)) : 'none',
    },
  },
    h('img', {
      src:    div.logo,
      width:  22, height: 22,
      style:  { objectFit: 'contain', flexShrink: 0, opacity: active ? 1 : 0.55 },
      alt:    div.name,
    }),
    h('span', {
      style: {
        fontFamily:    'var(--font-mono)',
        fontSize:      9,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color:         active ? div.accent : 'color-mix(in srgb, rgba(180,170,220,0.5), rgb(var(--ink-rgb)) var(--cm))',
        whiteSpace:    'nowrap',
      },
    }, div.name.replace(/^Die\s+/, ''))
  );
}

// ── App ─────────────────────────────────────────────────────
function App() {
  var _divIdx = useState(0);
  var divIdx  = _divIdx[0];
  var setDivIdx = _divIdx[1];
  var _rang   = useState(5);
  var selectedRang = _rang[0];
  var setRang = _rang[1];
  var _rasse  = useState(null);
  var rasse   = _rasse[0];
  var setRasse = _rasse[1];

  var division = DIVS[divIdx] || DIVS[0];

  return h(SiteGate, null,
    h('div', {
      className: 'page-root',
      style: { background: PAGE_BG, minHeight: 'calc(var(--vh, 1vh) * 100)' },
    },
      h(SiteNav, null),

      // Header
      h(PageHero, {
        kicker: 'Division · Rekrutierung',
        title:  'Rekrutierung',
        sub:    'Wähle eine Division und einen Rang, um den Statblock des zugehörigen NSC einzusehen. Der Rechner zeigt dir, was eine Rekrutierung kostet — oder einbringt.',
      }),

      // ── Page content ──────────────────────────────────────
      h('div', {
        style: {
          maxWidth:  860,
          margin:    '0 auto',
          padding:   '40px 24px 80px',
        },
      },

        // Divider
        h('div', {
          style: {
            height:     1,
            background: 'linear-gradient(to right, rgba(var(--purple-rgb),calc(0.4*var(--kp))), transparent)',
            marginBottom: 28,
          },
        }),

        // Division picker
        h('div', {
          style: {
            fontFamily:    'var(--font-mono)',
            fontSize:      8.5,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',
            marginBottom:  12,
          },
        }, 'Division'),
        h('div', {
          style: {
            display:    'flex',
            flexWrap:   'wrap',
            gap:        8,
            marginBottom: 32,
          },
        },
          DIVS.map(function(div, i) {
            return h(DivisionTab, {
              key:     div.id,
              div:     div,
              active:  i === divIdx,
              onClick: function() { setDivIdx(i); setRang(5); },
            });
          })
        ),

        // Two-column layout
        h('div', {
          style: {
            display:             'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
            gap:                 28,
            alignItems:          'start',
          },
        },

          // Left: Statblock
          h('div', null,
            h('div', {
              style: {
                fontFamily:    'var(--font-mono)',
                fontSize:      8.5,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',
                marginBottom:  12,
              },
            }, 'NSC Statblock'),
            h(NscStatblock, {
              division:      division,
              selectedRang:  selectedRang,
              onRangChange:  setRang,
              rasse:         rasse,
              onRasseChange: setRasse,
            })
          ),

          // Right: Calculator (als Karte, läuft beim Scrollen mit)
          h('div', {
            style: {
              position: 'sticky', top: 'calc(var(--nav-h, 52px) + 16px)', maxHeight: 'calc(100vh - var(--nav-h, 52px) - 32px)', overflowY: 'auto', overflowX: 'hidden', minWidth: 0,
              padding: '24px 26px 28px', borderRadius: 8,
              border: '1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))',
              background: 'rgba(var(--panel-rgb),0.5)',
            },
          },
            h('div', {
              style: {
                fontFamily:    'var(--font-display)',
                fontSize:      19,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--white)',
                marginBottom:  4,
                overflowWrap:  'anywhere',
              },
            }, 'Rekrutierungsrechner'),
            h('div', {
              style: {
                fontFamily:    'var(--font-body)',
                fontSize:      13,
                fontWeight:    300,
                color:         'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))',
                lineHeight:    1.5,
                marginBottom:  20,
                paddingBottom: 16,
                borderBottom:  '1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))',
              },
            }, 'Was kostet es, den links gewählten NSC zu rekrutieren — oder einzubringen?'),
            h(Rekrutierungsrechner, {
              division: division,
              nscRang:  selectedRang,
              rasse:    rasse,
            })
          )
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App, null));
})();

})();

