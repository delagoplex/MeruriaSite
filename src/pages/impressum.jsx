// Page entry for /impressum.html
import '../components/nav.jsx';
import '../components/footer.jsx';

;(function () {
(function () {
const {
  useState
} = React;
function ContactForm() {
  const [name, setName] = useState('');
  const [betreff, setBetreff] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [sent, setSent] = useState(false);
  function handleSend() {
    if (!nachricht.trim()) return;
    const to = 'rettstadtsabrina@gmail.com';
    const sub = encodeURIComponent(betreff || 'Kontaktanfrage via meruria.de');
    const body = encodeURIComponent((name ? `Von: ${name}\n\n` : '') + nachricht);
    window.location.href = `mailto:${to}?subject=${sub}&body=${body}`;
    setSent(true);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "imp-contact-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-field"
  }, /*#__PURE__*/React.createElement("label", null, "Dein Name (optional)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Wie soll ich dich nennen?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "imp-field"
  }, /*#__PURE__*/React.createElement("label", null, "Betreff"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: betreff,
    onChange: e => setBetreff(e.target.value),
    placeholder: "Worum geht es?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "imp-field"
  }, /*#__PURE__*/React.createElement("label", null, "Nachricht"), /*#__PURE__*/React.createElement("textarea", {
    value: nachricht,
    onChange: e => setNachricht(e.target.value),
    placeholder: "Deine Nachricht\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    className: "imp-send-btn",
    onClick: handleSend
  }, "Nachricht senden"), sent && /*#__PURE__*/React.createElement("div", {
    className: "imp-sent-msg"
  }, "\u2713 E-Mail-Programm ge\xF6ffnet"));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-root"
  }, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement("div", {
    className: "imp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-eyebrow"
  }, "Rechtliches"), /*#__PURE__*/React.createElement("h1", {
    className: "imp-title"
  }, "Impressum"), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Angaben gem\xE4\xDF \xA7 5 TMG"), /*#__PURE__*/React.createElement("div", {
    className: "imp-text"
  }, /*#__PURE__*/React.createElement("p", null, "Sabrina Rettstadt", /*#__PURE__*/React.createElement("br", null), "Sandberg 4a", /*#__PURE__*/React.createElement("br", null), "21244 Buchholz in der Nordheide"), /*#__PURE__*/React.createElement("p", null, "E-Mail: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:rettstadtsabrina@gmail.com",
    style: {
      color: 'rgba(160,140,255,0.75)',
      textDecoration: 'none'
    }
  }, "rettstadtsabrina@gmail.com")), /*#__PURE__*/React.createElement("p", null, "Diese Website ist ein privates, nicht-kommerzielles Fanprojekt und dient ausschlie\xDFlich dem privaten Gebrauch einer geschlossenen Spielgruppe."))), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Kontakt"), /*#__PURE__*/React.createElement(ContactForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Haftungsausschluss"), /*#__PURE__*/React.createElement("div", {
    className: "imp-text"
  }, /*#__PURE__*/React.createElement("p", null, "Die Inhalte dieser Seite wurden mit gr\xF6\xDFtm\xF6glicher Sorgfalt erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte \xFCbernehmen wir keine Gew\xE4hr."), /*#__PURE__*/React.createElement("p", null, "Als privater Dienst ist diese Seite nicht \xF6ffentlich zug\xE4nglich und richtet sich ausschlie\xDFlich an einen eingeladenen Personenkreis."))), /*#__PURE__*/React.createElement("div", {
    className: "imp-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Fan-Inhalt-Richtlinie / Fan Content Policy"), /*#__PURE__*/React.createElement("div", {
    className: "imp-text"
  }, /*#__PURE__*/React.createElement("p", null, "Diese Seite ist ein inoffizieller Fan-Inhalt im Rahmen der Richtlinie f\xFCr Fan-Inhalte. Nicht von Wizards gef\xF6rdert/gesponsert. Bestandteile des enthaltenen Materials sind Eigentum von Wizards of the Coast. \xA9Wizards of the Coast LLC.")), /*#__PURE__*/React.createElement("div", {
    className: "imp-notice"
  }, "This website is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. \xA9Wizards of the Coast LLC.")), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Kobold Press Community Use Policy"), /*#__PURE__*/React.createElement("div", {
    className: "imp-notice"
  }, "This website uses trademarks and/or copyrights owned by Kobold Press and Open Design, which are used under the Kobold Press Community Use Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Kobold Press. For more information about this Community Use Policy, please visit koboldpress.com/k/forum in the Kobold Press topic. For more information about Kobold Press products, please visit koboldpress.com.")), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "MCDM Productions Fan Content Policy"), /*#__PURE__*/React.createElement("div", {
    className: "imp-notice"
  }, "This website uses trademarks and/or copyrights owned by MCDM Productions, LLC, which are used under the MCDM Fan Content Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by MCDM Productions. For more information about MCDM Productions and their products, please visit mcdmproductions.com.")), /*#__PURE__*/React.createElement("div", {
    className: "imp-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imp-section-title"
  }, "Hit Point Press Fan Content Policy"), /*#__PURE__*/React.createElement("div", {
    className: "imp-notice"
  }, "This website uses trademarks and/or copyrights owned by Hit Point Press, which are used under the Hit Point Press Fan Content Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Hit Point Press. For more information about Hit Point Press and their products, please visit hitpointpress.com."))), /*#__PURE__*/React.createElement(SiteFooter, {
    left: "\u25C8 MERURIA \u2014 PRIVATES FANPROJEKT",
    right: "NICHT KOMMERZIELL"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

})();

