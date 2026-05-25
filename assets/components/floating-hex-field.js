(function () {
// floating-hex-field.jsx — shared floating hexagon background
// Exposes: window.FloatingHexField

function _fhfHexPoints(s) {
  const cx = s / 2,
    cy = s / 2,
    r = s / 2;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 180 * (60 * i - 30);
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(' ');
}
function FloatingHexField({
  mouseX,
  mouseY,
  accent = '#7c4dff'
}) {
  const HEX_DEFS = [{
    size: 120,
    x: '8%',
    y: '34%',
    anim: 'hexFloat0',
    dur: '7.2s',
    opacity: 0.04,
    stroke: '#7c4dff',
    fill: 'transparent',
    strokeW: 1
  }, {
    size: 60,
    x: '18%',
    y: '55%',
    anim: 'hexFloat1',
    dur: '5.8s',
    opacity: 0.06,
    stroke: accent,
    fill: 'transparent',
    strokeW: 1
  }, {
    size: 200,
    x: '72%',
    y: '44%',
    anim: 'hexFloat2',
    dur: '9.1s',
    opacity: 0.03,
    stroke: '#7c4dff',
    fill: '#7c4dff',
    strokeW: 0.5
  }, {
    size: 40,
    x: '85%',
    y: '38%',
    anim: 'hexFloat3',
    dur: '4.9s',
    opacity: 0.09,
    stroke: accent,
    fill: `${accent}22`,
    strokeW: 1
  }, {
    size: 90,
    x: '55%',
    y: '72%',
    anim: 'hexFloat1',
    dur: '6.4s',
    opacity: 0.05,
    stroke: '#7c4dff',
    fill: 'transparent',
    strokeW: 1
  }, {
    size: 30,
    x: '33%',
    y: '37%',
    anim: 'hexFloat0',
    dur: '5.2s',
    opacity: 0.10,
    stroke: accent,
    fill: `${accent}18`,
    strokeW: 1
  }, {
    size: 150,
    x: '42%',
    y: '85%',
    anim: 'hexFloat2',
    dur: '8.3s',
    opacity: 0.025,
    stroke: '#7c4dff',
    fill: 'transparent',
    strokeW: 0.8
  }, {
    size: 50,
    x: '92%',
    y: '80%',
    anim: 'hexFloat3',
    dur: '6.0s',
    opacity: 0.07,
    stroke: accent,
    fill: 'transparent',
    strokeW: 1
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden',
      clipPath: 'inset(232px 0 0 0)'
    }
  }, HEX_DEFS.map((h, i) => {
    const px = _fhfHexPoints(h.size);
    const parallaxX = (mouseX - 0.5) * (i % 3 === 0 ? -12 : i % 3 === 1 ? -6 : -18);
    const parallaxY = (mouseY - 0.5) * (i % 3 === 0 ? -8 : i % 3 === 1 ? -4 : -14);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: h.x,
        top: h.y,
        animation: `${h.anim} ${h.dur} ease-in-out infinite`,
        animationDelay: `${i * 0.7}s`,
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: 'transform 0.4s ease-out',
        willChange: 'transform'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: h.size,
      height: h.size,
      viewBox: `0 0 ${h.size} ${h.size}`,
      style: {
        display: 'block',
        opacity: h.opacity,
        filter: `drop-shadow(0 0 ${h.size * 0.08}px ${h.stroke})`
      }
    }, /*#__PURE__*/React.createElement("polygon", {
      points: px,
      fill: h.fill,
      stroke: h.stroke,
      strokeWidth: h.strokeW
    })));
  }));
}
window.FloatingHexField = FloatingHexField;
})();