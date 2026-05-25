(function () {
// footer.jsx — shared site footer
// Exposes: window.SiteFooter
// Props: accent (optional hex color), left (optional left text), right (optional right text)

function SiteFooter({
  accent,
  left,
  right
}) {
  const textColor = accent ? `${accent}22` : 'rgba(var(--accent-rgb),0.22)';
  const borderColor = accent ? `${accent}0a` : 'rgba(var(--accent-rgb),0.07)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      padding: '10px 32px',
      borderTop: `1px solid ${borderColor}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '7px',
      color: textColor,
      letterSpacing: '0.2em'
    }
  }, left || '◈ ARCHIV-STATUS: UNBEKANNT'), /*#__PURE__*/React.createElement("a", {
    href: "Impressum.html",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '7px',
      color: textColor,
      letterSpacing: '0.2em',
      textDecoration: 'none',
      transition: 'color 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = accent ? `${accent}66` : 'rgba(var(--accent-rgb),0.55)',
    onMouseLeave: e => e.currentTarget.style.color = textColor
  }, "IMPRESSUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '7px',
      color: textColor,
      letterSpacing: '0.2em'
    }
  }, right || 'MERURIA '));
}
window.SiteFooter = SiteFooter;
})();