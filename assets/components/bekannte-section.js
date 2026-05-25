(function () {
// bekannte-section.jsx — "Bekannte Mitglieder" section shared by all division pages
// Exposes: window.BekannteSection
// Props: division (object with accent, name, bekannte[]), sidebar (bool)

const {
  useState: _bk_useState
} = React;
function _BekannteImg({
  label,
  width,
  height,
  accent,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: `repeating-linear-gradient(-45deg,transparent,transparent 8px,${accent}08 8px,${accent}08 9px),linear-gradient(160deg,rgba(16,10,40,0.95) 0%,rgba(6,4,18,0.98) 100%)`,
      border: `1px dashed ${accent}44`,
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(ellipse at 50% 50%,${accent}0e 0%,transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40",
    width: "32",
    height: "32",
    fill: "none",
    style: {
      opacity: 0.32
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "15",
    r: "7",
    stroke: accent,
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 36 Q12 28 20 26 Q28 28 32 36",
    stroke: accent,
    strokeWidth: "1.2"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '7px',
      letterSpacing: '0.2em',
      color: `${accent}66`,
      textTransform: 'uppercase',
      zIndex: 1,
      textAlign: 'center',
      padding: '0 12px'
    }
  }, label));
}
function _BekanntePopup({
  bekannte,
  divisionName,
  accent,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(var(--bg-rgb),0.88)',
      backdropFilter: 'blur(6px)'
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: '680px',
      maxHeight: '80vh',
      background: 'rgba(var(--panel-rgb),0.97)',
      border: `1px solid ${accent}30`,
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 80px rgba(0,0,0,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: `1px solid ${accent}18`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.28em',
      color: `${accent}77`,
      textTransform: 'uppercase',
      marginBottom: '4px'
    }
  }, "Lore \xB7 Meruria"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      fontWeight: '300',
      letterSpacing: '0.16em',
      color: 'var(--white)',
      textTransform: 'uppercase'
    }
  }, "Bekannte Mitglieder \xB7 ", divisionName)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'rgba(var(--text2-rgb),0.4)',
      padding: '4px',
      transition: 'color 0.2s',
      lineHeight: 1
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(var(--text2-rgb),0.4)'
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '16px 24px 24px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, bekannte.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '16px',
      padding: '14px 16px',
      border: `1px solid ${accent}18`,
      borderRadius: '4px',
      background: `${accent}07`,
      alignItems: 'flex-start',
      transition: 'border-color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = `${accent}44`,
    onMouseLeave: e => e.currentTarget.style.borderColor = `${accent}18`
  }, /*#__PURE__*/React.createElement(_BekannteImg, {
    label: b.name,
    width: "56px",
    height: "56px",
    accent: accent,
    style: {
      borderRadius: '50%',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12px',
      fontWeight: '400',
      letterSpacing: '0.14em',
      color: 'var(--white)',
      textTransform: 'uppercase',
      marginBottom: '2px'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.14em',
      color: `${accent}88`,
      marginBottom: '6px'
    }
  }, b.rolle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: '300',
      fontSize: '11px',
      lineHeight: '1.65',
      color: 'var(--muted)'
    }
  }, b.beschreibung))))))));
}
function BekannteSection({
  division,
  sidebar = false
}) {
  const [showPopup, _bk_setShowPopup] = _bk_useState(false);
  const {
    accent,
    name: divisionName,
    bekannte
  } = division;
  const featured = bekannte[0];
  const popup = showPopup && /*#__PURE__*/React.createElement(_BekanntePopup, {
    bekannte: bekannte,
    divisionName: divisionName,
    accent: accent,
    onClose: () => _bk_setShowPopup(false)
  });
  if (sidebar) {
    const m = division.mitglieder || {};
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        padding: '48px 32px 80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, popup, /*#__PURE__*/React.createElement("div", {
      style: {
        border: `1px solid ${accent}28`,
        borderRadius: '6px',
        background: `linear-gradient(135deg,${accent}09 0%,rgba(var(--panel-rgb),0.9) 100%)`,
        overflow: 'hidden',
        transition: 'border-color 0.2s'
      },
      onMouseEnter: e => e.currentTarget.style.borderColor = `${accent}55`,
      onMouseLeave: e => e.currentTarget.style.borderColor = `${accent}28`
    }, /*#__PURE__*/React.createElement(_BekannteImg, {
      label: "Portr\xE4t",
      width: "100%",
      height: "520px",
      accent: accent,
      style: {
        borderRadius: '5px 5px 0 0',
        border: 'none',
        borderBottom: `1px solid ${accent}22`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '8px',
        letterSpacing: '0.22em',
        color: `${accent}66`,
        textTransform: 'uppercase',
        marginBottom: '8px'
      }
    }, "F\xFChrendes Mitglied"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '20px',
        fontWeight: '300',
        letterSpacing: '0.14em',
        color: 'var(--white)',
        textTransform: 'uppercase',
        marginBottom: '4px'
      }
    }, featured ? featured.name : '— Unbekannt —'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.14em',
        color: `${accent}55`,
        marginBottom: '16px'
      }
    }, featured ? featured.rolle : ''), featured && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '1.8',
        color: 'var(--muted)'
      }
    }, featured.beschreibung))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        padding: '12px 18px',
        border: `1px solid ${accent}18`,
        borderRadius: '4px',
        background: `${accent}07`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '7.5px',
        letterSpacing: '0.12em',
        color: `${accent}77`,
        textTransform: 'uppercase',
        lineHeight: 1.6
      }
    }, "ca. ", m.gesamt ?? '?', " Mitglieder", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, " \xB7 NSC: ", m.nsc ?? '?', " \xB7 SC: ", m.sc ?? '?')), /*#__PURE__*/React.createElement("button", {
      onClick: () => _bk_setShowPopup(true),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        fontWeight: '300',
        fontSize: '10px',
        letterSpacing: '0.08em',
        color: `${accent}99`,
        background: `${accent}0e`,
        border: `1px solid ${accent}28`,
        borderRadius: '3px',
        padding: '6px 11px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = `${accent}20`;
        e.currentTarget.style.color = 'var(--white)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = `${accent}0e`;
        e.currentTarget.style.color = `${accent}99`;
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 14 14",
      width: "10",
      height: "10",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "10",
      height: "10",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "5",
      x2: "9",
      y2: "5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "7.5",
      x2: "9",
      y2: "7.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "10",
      x2: "8",
      y2: "10"
    })), "Alle anzeigen")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))',
        gap: '12px'
      }
    }, bekannte.slice(1, 7).map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '16px',
        border: `1px solid ${accent}18`,
        borderRadius: '4px',
        background: 'rgba(var(--panel-rgb),0.7)',
        transition: 'border-color 0.2s, transform 0.2s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = `${accent}40`;
        e.currentTarget.style.transform = 'translateY(-2px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = `${accent}18`;
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }, /*#__PURE__*/React.createElement(_BekannteImg, {
      label: b.name,
      width: "100%",
      height: "100px",
      accent: accent,
      style: {
        borderRadius: '3px',
        marginBottom: '12px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '11px',
        fontWeight: '400',
        letterSpacing: '0.14em',
        color: 'var(--white)',
        textTransform: 'uppercase',
        marginBottom: '3px'
      }
    }, b.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '8px',
        letterSpacing: '0.14em',
        color: `${accent}88`,
        marginBottom: '8px'
      }
    }, b.rolle), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: '300',
        fontSize: '11px',
        lineHeight: '1.65',
        color: 'var(--muted)'
      }
    }, b.beschreibung)))));
  }
  const m = division.mitglieder || {};
  return /*#__PURE__*/React.createElement("section", {
    id: "bekannte",
    className: "div-section"
  }, popup, /*#__PURE__*/React.createElement(SectionBanner, {
    label: "Bekannte Mitglieder",
    accent: accent
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.28em',
      color: `${accent}55`,
      textTransform: 'uppercase',
      marginBottom: '16px'
    }
  }, "Bekanntestes Mitglied"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: '28px',
      padding: '28px',
      border: `1px solid ${accent}28`,
      borderRadius: '6px',
      background: `linear-gradient(135deg,${accent}09 0%,rgba(var(--panel-rgb),0.9) 100%)`,
      transition: 'border-color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = `${accent}55`,
    onMouseLeave: e => e.currentTarget.style.borderColor = `${accent}28`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(_BekannteImg, {
    label: "Portr\xE4t",
    width: "140px",
    height: "160px",
    accent: accent,
    style: {
      borderRadius: '4px',
      border: `1px solid ${accent}30`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.22em',
      color: `${accent}66`,
      textTransform: 'uppercase',
      marginBottom: '8px'
    }
  }, "F\xFChrendes Mitglied"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: '300',
      letterSpacing: '0.14em',
      color: 'var(--white)',
      textTransform: 'uppercase',
      marginBottom: '4px'
    }
  }, featured ? featured.name : '— Unbekannt —'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.14em',
      color: `${accent}55`,
      marginBottom: '16px'
    }
  }, featured ? featured.rolle : 'Name noch nicht festgelegt'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '1.8',
      color: 'var(--muted)'
    }
  }, featured ? featured.beschreibung : ''))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      padding: '12px 18px',
      border: `1px solid ${accent}18`,
      borderRadius: '4px',
      background: `${accent}07`,
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '7.5px',
      letterSpacing: '0.12em',
      color: `${accent}77`,
      textTransform: 'uppercase',
      lineHeight: 1.6
    }
  }, "ca. ", m.gesamt ?? '?', " Mitglieder", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, " \xB7 NSC: ", m.nsc ?? '?', " \xB7 SC: ", m.sc ?? '?')), /*#__PURE__*/React.createElement("button", {
    onClick: () => _bk_setShowPopup(true),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: '300',
      fontSize: '10px',
      letterSpacing: '0.08em',
      color: `${accent}99`,
      background: `${accent}0e`,
      border: `1px solid ${accent}28`,
      borderRadius: '3px',
      padding: '6px 11px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      flexShrink: 0
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = `${accent}20`;
      e.currentTarget.style.color = 'var(--white)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = `${accent}0e`;
      e.currentTarget.style.color = `${accent}99`;
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 14",
    width: "10",
    height: "10",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "10",
    height: "10",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "9",
    y2: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "7.5",
    x2: "9",
    y2: "7.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "10",
    x2: "8",
    y2: "10"
  })), "Alle anzeigen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.25em',
      color: `${accent}44`,
      textTransform: 'uppercase'
    }
  }, "Weitere bekannte Mitglieder")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: '14px'
    }
  }, bekannte.slice(1, 4).map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    style: {
      padding: '18px',
      border: `1px solid ${accent}18`,
      borderRadius: '4px',
      background: 'rgba(var(--panel-rgb),0.7)',
      transition: 'border-color 0.2s, transform 0.2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = `${accent}40`;
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = `${accent}18`;
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement(_BekannteImg, {
    label: b.name,
    width: "100%",
    height: "120px",
    accent: accent,
    style: {
      borderRadius: '3px',
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12px',
      fontWeight: '400',
      letterSpacing: '0.14em',
      color: 'var(--white)',
      textTransform: 'uppercase',
      marginBottom: '3px'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '8px',
      letterSpacing: '0.14em',
      color: `${accent}88`,
      marginBottom: '10px'
    }
  }, b.rolle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: '300',
      fontSize: '11px',
      lineHeight: '1.65',
      color: 'var(--muted)'
    }
  }, b.beschreibung)))));
}
window.BekannteSection = BekannteSection;
})();