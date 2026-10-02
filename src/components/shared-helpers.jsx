// shared-helpers.jsx — helpers that were copy-pasted into many page entries.
// Exposes: window.hexPoints, window.useScrollReveal
// Only the page entries whose local copy was byte-identical import this file; pages with a
// differently tuned variant keep their own function.

const { useEffect, useRef, useState } = React;

function hexPoints(s) {
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

function useScrollReveal() {
  useEffect(() => {
    const revealed = new WeakSet();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || revealed.has(entry.target)) return;
        revealed.add(entry.target);
        observer.unobserve(entry.target);
        entry.target.classList.add('visible');
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    }, 100);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);
}

Object.assign(window, { hexPoints, useScrollReveal });
