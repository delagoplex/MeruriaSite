/* ─────────────────────────────────────────────────────────────────
   Crafting Chapters — Inhalt der einzelnen Kapitel.
   Jede Funktion rendert ein eigenes Kapitel. Tools werden eingebettet.
   ───────────────────────────────────────────────────────────────── */

const { useState: useStateCh } = React;

// ── CHAPTER 1 · ÜBERSICHT ──────────────────────────────────────────
function ChapterUebersicht({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel I · Einführung" title="Überblick" />

      <Txt>
        Dieses System vereint das Beste aus mehreren D&D-Crafting-Supplements mit eigenem
        Homebrew-Material. Es ist <Acc c="modular" />: Komplexität kann eingeschaltet oder weggelassen
        werden, je nachdem, was am Tisch funktioniert. Die Kernprinzipien sind einfach.
      </Txt>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'12px',margin:'18px 0 24px'}}>
        {[
          { t:'Eigenständig', d:'Spieler treffen Entscheidungen, ohne den SL zu überlasten.' },
          { t:'Kein Downtime-Gate', d:'Handwerk funktioniert im Abenteurerleben.' },
          { t:'Material > Zeit', d:'Rohstoffe sind die primäre Hürde, nicht die Stunden.' },
          { t:'Freie Reagenzien', d:'Zutaten bestimmen den Effekt — kein starres Rezeptbuch.' },
        ].map((p, i) => (
          <div key={i} style={{
            padding:'14px 16px',background:'rgba(124,77,255,0.05)',
            border:'1px solid rgba(124,77,255,0.18)',borderLeft:'2px solid rgba(124,77,255,0.5)',
            borderRadius:'0 4px 4px 0',
          }}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'11px',letterSpacing:'0.18em',color:'rgba(180,155,255,0.95)',textTransform:'uppercase',marginBottom:'5px'}}>{p.t}</div>
            <div style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.7)',lineHeight:1.6}}>{p.d}</div>
          </div>
        ))}
      </div>

      <SubH>Wer kann Handwerk betreiben?</SubH>
      <Txt>
        Jeder Charakter kann grundsätzlich Handwerk betreiben. Entscheidend sind:
        <Hl c=" Werkzeugübung" /> (bestimmt den Handwerks-Bonus), <Hl c="Materialien" />,
        <Hl c=" Rezept oder Reagenzien-Kenntnis" />, und passende <Hl c="Ausrüstung" />
        (Werkbank, Feuer, etc.). Der Handwerks-Bonus ist
        <Acc c=" Übungsbonus + Attributsmodifikator" />.
      </Txt>

      <Table
        cols={[
          { key:'name',    label:'Profession' },
          { key:'werkzeug',label:'Werkzeug' },
          { key:'attribut',label:'Attribut' },
        ]}
        rows={window.PROFESSIONEN}
      />

      <SubH>Materialien im Überblick</SubH>
      <Table
        cols={[
          { key:'kat', label:'Kategorie' },
          { key:'werkzeug', label:'Werkzeug' },
          { key:'probe', label:'Probe' },
        ]}
        rows={[
          { kat:'Kreaturenteile', werkzeug:'—',                       probe:'STR / GES / INT (je Kreaturtyp)' },
          { kat:'Erze',           werkzeug:'Bergbau-Werkzeug',         probe:'Stärke' },
          { kat:'Kristalle & Steine', werkzeug:'Maurer-Werkzeug',      probe:'STR oder GES' },
          { kat:'Holz',           werkzeug:'Zimmermann-Werkzeug',      probe:'STR oder GES' },
          { kat:'Pflanzen & Kräuter', werkzeug:'Kräuterkunde-Ausrüstung', probe:'GES oder INT' },
          { kat:'Sonstige',       werkzeug:'variiert',                 probe:'variiert' },
        ]}
      />

      <Callout tone="info" title="Materialien kaufen">
        In einer Stadt sind gesuchte Materialien zu <Hl c="50%" /> verfügbar, in anderen Siedlungen zu <Hl c="15%" />.
        Sind sie nicht verfügbar, muss man <Hl c="mind. 7 Tage" /> warten.
      </Callout>

      <SubH>Kreaturenteile — Fixer Wert</SubH>
      <Table
        cols={[
          { key:'hg',     label:'HG' },
          { key:'selt',   label:'Seltenheit' },
          { key:'wert',   label:'Einheitenwert', align:'right' },
        ]}
        rows={[
          { hg:'½ oder weniger', selt:'Gewöhnlich',   wert:'10 Hade' },
          { hg:'1 – 3',          selt:'Gewöhnlich',   wert:'200 Hade' },
          { hg:'4 – 8',          selt:'Ungewöhnlich', wert:'12.000 Hade' },
          { hg:'9 – 12',         selt:'Selten',       wert:'65.000 Hade' },
          { hg:'13 – 18',        selt:'Sehr Selten',  wert:'220.000 Hade' },
          { hg:'19+',            selt:'Legendär',     wert:'1.500.000 Hade' },
        ]}
      />
    </article>
  );
}

// ── CHAPTER 2 · PROZESS ────────────────────────────────────────────
function ChapterProzess({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel II · Handwerksprozess" title="Vom Rohstoff zum Werkstück" />

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'14px',margin:'8px 0 24px'}}>
        {[
          { n:'01', t:'Rezept oder Reagenzien wählen', d:'Festes Rezept oder bis zu vier freie Reagenzien kombinieren.' },
          { n:'02', t:'Materialien beschaffen',         d:'Sammeln, ernten oder kaufen — siehe Abschnitt III.' },
          { n:'03', t:'Handwerk in 2-h-Blöcken',         d:'Pro Block ein Handwerkswurf. Fortschritt akkumuliert.' },
        ].map((p, i) => (
          <div key={i} style={{
            padding:'16px 18px',background:'rgba(10,8,28,0.5)',
            border:'1px solid rgba(124,77,255,0.22)',borderRadius:'4px',
          }}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.24em',color:'rgba(124,77,255,0.65)',marginBottom:'8px'}}>{p.n}</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'13px',color:'rgba(232,225,255,0.95)',letterSpacing:'0.06em',marginBottom:'7px'}}>{p.t}</div>
            <div style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.68)',lineHeight:1.65}}>{p.d}</div>
          </div>
        ))}
      </div>

      <SubH>Wurfergebnisse</SubH>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'10px',marginBottom:'18px'}}>
        <ResultBlock tone="good" label="Erfolg"        text="2 Stunden Fortschritt." />
        <ResultBlock tone="crit" label="Kritischer Erfolg (Nat. 20)" text="4 Stunden Fortschritt (doppelter Block)." />
        <ResultBlock tone="neutral" label="Misserfolg" text="Kein Fortschritt, keine Materialverluste." />
        <ResultBlock tone="bad" label="3× in Folge"    text="Projekt scheitert. Alle Materialien verloren." />
      </div>

      <Callout tone="info" title="Sicher arbeiten">
        Verdopple die Handwerkszeit. Der Wurf gilt automatisch als <Hl c="10 + Handwerks-Bonus" />, ohne Würfeln.
      </Callout>
      <Callout tone="info" title="Unterstützung">
        Ein Charakter mit Übung im gleichen Werkzeug kann helfen — der Haupthandwerker erhält <Hl c="Vorteil" /> auf den Wurf.
      </Callout>
      <Callout tone="info" title="Tagesfortschritt & Rast">
        Maximal <Hl c="8 Stunden" /> pro Tag. Mehr arbeiten kostet einen Erschöpfungsgrad.
        Während einer langen Rast sind bis zu <Hl c="2 Stunden" /> Fortschritt möglich.
      </Callout>

      <SubH>Handwerks-SGs nach Seltenheit</SubH>
      <Table
        cols={[
          { key:'r', label:'Seltenheit' },
          { key:'sg', label:'SG', align:'right' },
        ]}
        rows={window.SELTENHEITEN.map(s => ({ r: <RarityPill seltenheit={s.id} size="sm" />, sg: s.sg }))}
      />

      <SubH>Handwerks-Kosten & -Zeiten nach Typ</SubH>
      <Table
        cols={[
          { key:'typ', label:'Typ' },
          { key:'r1', label:'1 Reagenz' },
          { key:'r2', label:'2 Reagenzien' },
          { key:'r3', label:'3 Reagenzien' },
          { key:'r4', label:'4 Reagenzien' },
        ]}
        rows={[
          { typ:'Bombe',    r1:'8 h · 2.500 Hade',  r2:'24 h · 8.000 Hade',  r3:'40 h · 25.000 Hade',  r4:'80 h · 50.000 Hade' },
          { typ:'Gift',     r1:'8 h · 2.500 Hade',  r2:'24 h · 10.000 Hade', r3:'40 h · 50.000 Hade',  r4:'80 h · 100.000 Hade' },
          { typ:'Trank',    r1:'8 h · 2.500 Hade',  r2:'40 h · 10.000 Hade', r3:'120 h · 100.000 Hade',r4:'160 h · 1.000.000 Hade' },
          { typ:'Mahlzeit', r1:'1 h · keine Kosten', r2:'2 h', r3:'3 h', r4:'4 h' },
        ]}
      />

      <SubH>Schriftrollen</SubH>
      <Table
        cols={[
          { key:'grad', label:'Zaubergrad' },
          { key:'zeit', label:'Zeit', align:'right' },
          { key:'kosten', label:'Kosten', align:'right' },
        ]}
        rows={window.SCHRIFTROLLE_KOSTEN.map(r => ({ grad:r.grad, zeit:`${r.zeit} h`, kosten:window.fmtHade(r.kosten) }))}
      />

      <Callout tone="info">
        <Hl c="Konsumierbare magische Gegenstände" /> (außer Schriftrollen): Zeit und Kosten halbieren.
      </Callout>

      <SubH>Magische Gegenstände — Downtime-Tage</SubH>
      <Txt>
        Magische Gegenstände werden in <Acc c="Downtime-Tagen" /> gemessen (1 Tag = 8 Stunden gesicherte Werkstattarbeit).
        Das gilt nur für Downtime zwischen Quests — nicht für das 2-Stunden-Block-System oben.
      </Txt>
      <Table
        cols={[
          { key:'r', label:'Seltenheit' },
          { key:'tage', label:'Tage', align:'right' },
          { key:'stunden', label:'Stunden (à 8 h)', align:'right' },
          { key:'kosten', label:'Kosten', align:'right' },
        ]}
        rows={window.MAGISCHE_GEGENSTAENDE_KOSTEN.map(r => ({
          r: <RarityPill seltenheit={r.seltenheit} size="sm" />,
          tage: r.tage, stunden: `${r.stunden} h`, kosten: window.fmtHade(r.kosten),
        }))}
      />

      <ToolPromo
        title="Handwerks-Rechner"
        text="Wähle Typ und Parameter — Zeit, Kosten, Blöcke und SG werden live berechnet."
        action={() => goTo('rechner')} />
    </article>
  );
}

function ResultBlock({ tone, label, text }) {
  const toneMap = {
    good:    { border:'rgba(120,230,180,0.5)', tag:'rgba(120,230,180,0.9)' },
    crit:    { border:'rgba(255,200,90,0.55)', tag:'rgba(255,200,90,0.95)' },
    neutral: { border:'rgba(124,77,255,0.4)',  tag:'rgba(180,155,255,0.92)' },
    bad:     { border:'rgba(255,110,110,0.55)',tag:'rgba(255,110,110,0.92)' },
  };
  const t = toneMap[tone] || toneMap.neutral;
  return (
    <div style={{
      padding:'12px 14px',background:'rgba(10,8,28,0.4)',
      border:`1px solid ${t.border}`,borderLeft:`2px solid ${t.border}`,
      borderRadius:'0 3px 3px 0',
    }}>
      <div style={{fontFamily:'var(--font-display)',fontSize:'10.5px',letterSpacing:'0.18em',color:t.tag,textTransform:'uppercase',marginBottom:'5px'}}>{label}</div>
      <div style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.78)',lineHeight:1.6}}>{text}</div>
    </div>
  );
}

// ── CHAPTER 3 · SAMMELN ────────────────────────────────────────────
function ChapterSammeln({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel III · Sammeln & Ernten" title="Materialien finden" />

      <Txt>
        Bei Reisen, in Höhlen, in Wäldern — überall können Materialien gefunden werden.
        Der Spieler entscheidet sich für <Acc c="eine Ressourcenart" /> (Holz, Erze, Pflanzen…);
        das Absuchen dauert <Hl c="15 Minuten pro Art" />. Mit Übung in Kräuterkunde und passender Ausrüstung wird der Übungsbonus addiert.
      </Txt>

      <SubH>A · Ressourcen finden</SubH>
      <Table
        cols={[
          { key:'label', label:'Wurf' },
          { key:'gewoehn', label:'Gewöhnlich' },
          { key:'ungewoehn', label:'Ungewöhnlich' },
          { key:'selten', label:'Selten' },
          { key:'sehrselten', label:'Sehr Selten' },
          { key:'legendaer', label:'Legendär' },
        ]}
        rows={window.FINDEN_TABELLE.map(r => ({
          ...r,
          gewoehn:    r.gewoehn    || '—',
          ungewoehn:  r.ungewoehn  || '—',
          selten:     r.selten     || '—',
          sehrselten: r.sehrselten || '—',
          legendaer:  r.legendaer  || '—',
        }))}
      />

      <Callout tone="warn" title="Ressourcenerschöpfung (optional)">
        Nach jeder erfolgreichen Ernte kann der SL den SG für weitere Checks im selben Gebiet mit derselben Ressource
        um <Hl c="2" /> erhöhen.
      </Callout>

      <SubH>B · Ressourcen ernten</SubH>
      <Txt>
        Sobald eine Ressource identifiziert ist, würfelt der Spieler <Acc c="INT (Naturkunde)" />.
        Der Versuch dauert <Hl c="10 Minuten" />.
        Pflanzen brauchen Kräuterkunde-Ausrüstung, Gestein eine Spitzhacke, Holz eine Holzfälleraxt.
      </Txt>
      <Table
        cols={[
          { key:'range', label:'Wurfergebnis' },
          { key:'label', label:'Ergebnis' },
        ]}
        rows={window.ERNTEN_TABELLE}
      />

      <ToolPromo
        title="Sammel-Simulator"
        text="Region wählen, Würfel werfen, Ressourcen ernten — die ganze Schleife live."
        action={() => goTo('simulator')} />

      <SubH>C · Kreaturenteile ernten</SubH>
      <Txt>
        Wenn Charaktere eine Kreatur besiegen oder eine tote Kreatur finden, können sie versuchen,
        Teile davon zu ernten. Die genutzten Fähigkeiten hängen vom Kreaturtyp ab.
      </Txt>
      <Table
        cols={[
          { key:'typ', label:'Kreaturtyp' },
          { key:'probe', label:'Fertigkeitsprobe' },
        ]}
        rows={[
          { typ:'Aberration, Konstrukt, Drachen, Elementar, Fee, Schleim', probe:'Arkane Kunde' },
          { typ:'Bestie, Riese, Humanoid, Monstrosität, Pflanze',           probe:'Naturkunde' },
          { typ:'Himmelswesen, Teufel/Dämon',                                probe:'Religionskunde' },
          { typ:'Untote',                                                    probe:'Dieselbe Probe wie zu Lebzeiten' },
        ]}
      />

      <Callout tone="info" title="Ernte-SG">
        <Hl c="12 + halbes HG" /> der Kreatur (HG unter 2: HG nicht addieren).
        Jeder Check dauert <Hl c="10 Minuten" />. Bei Misserfolg wird der jeweilige Teil zerstört.
      </Callout>

      <SubH>Maximale Checks und Einheiten pro Check</SubH>
      <Table
        cols={[
          { key:'size', label:'Größe' },
          { key:'max', label:'Max. Checks', align:'right' },
          { key:'einh', label:'Max. Einheiten/Check', align:'right' },
        ]}
        rows={[
          { size:'Winzig',     max:1, einh:'¼' },
          { size:'Klein',      max:2, einh:'½' },
          { size:'Mittel',     max:2, einh:'1' },
          { size:'Groß',       max:3, einh:'2' },
          { size:'Riesig',     max:4, einh:'3' },
          { size:'Gigantisch', max:5, einh:'4' },
        ]}
      />

      <Callout tone="bad" title="Verderb">
        Kreaturenteile verderben nach <Hl c="1 Tag" /> ohne Kühlung. Eine <Acc c="Tasche der Kühlung" /> verhindert dies.
      </Callout>

      <SubH>Jagen, Angeln & Nahrungsgewinnung</SubH>
      <Table
        cols={[
          { key:'g', label:'Kreaturengröße' },
          { key:'f', label:'Fleisch (ca.)' },
          { key:'z', label:'Zeit' },
          { key:'h', label:'Haltbarkeit' },
        ]}
        rows={[
          { g:'Winzig (≤ 5 lbs.)',     f:'2 lbs.',     z:'5 Min',  h:'1 Tag' },
          { g:'Klein (10+ lbs.)',       f:'5 lbs.',     z:'10 Min', h:'1 Tag' },
          { g:'Mittel (11–40 lbs.)',    f:'6–20 lbs.',  z:'15 Min', h:'2 Tage' },
          { g:'Mittel-Groß (41–100)',   f:'21–50 lbs.', z:'20 Min', h:'2 Tage' },
          { g:'Groß (101–200 lbs.)',    f:'51–100 lbs.',z:'25 Min', h:'2 Tage' },
          { g:'Groß (201–300 lbs.)',    f:'101–150 lbs.',z:'30 Min',h:'3 Tage' },
          { g:'Groß (301–400 lbs.)',    f:'151–200 lbs.',z:'40 Min',h:'3 Tage' },
          { g:'Riesig (401–500 lbs.)',  f:'201–250 lbs.',z:'1 h',   h:'4 Tage' },
          { g:'Riesig (501–1.000 lbs.)',f:'250–500 lbs.',z:'3 h',   h:'4 Tage' },
          { g:'Gigantisch (1.000+ lbs.)',f:'500+ lbs.', z:'4+ h',   h:'5 Tage' },
        ]}
      />

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'12px',marginTop:'20px'}}>
        <FishingCard title="Angeln mit der Rute" sg="WEI SG 10" text="Bei Erfolg bestimmt der SL die Fischart. Zu schwer? SG 15 mit Nachteil und ggf. gegnerischer STR-Wurf, sonst bricht die Angel." />
        <FishingCard title="Speerfischen" sg="WEI SG 15 / GES SG 12" text="Fisch wird vom SL festgelegt. Nur seichtes oder klares Wasser. Max. mittlere Größe." />
        <FishingCard title="Netzfischen" sg="GES SG 11" text="Bei Erfolg nach 10 Min: 2W6 Fische. Sehr große Fische zerreißen das Netz." />
        <FishingCard title="Fischreusen" sg="—" text="4+ h: 1 Fisch bei W20 ≥ 9. 8+ h (Nacht): 1W4 Fische bei W20 ≥ 5." />
      </div>
    </article>
  );
}

function FishingCard({ title, sg, text }) {
  return (
    <div style={{
      padding:'12px 14px',background:'rgba(10,8,28,0.5)',
      border:'1px solid rgba(124,77,255,0.18)',borderRadius:'3px',
    }}>
      <div style={{display:'flex',alignItems:'baseline',gap:'8px',marginBottom:'6px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'var(--font-display)',fontSize:'12px',letterSpacing:'0.1em',color:'rgba(232,225,255,0.95)'}}>{title}</span>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.12em',color:'rgba(160,140,255,0.7)'}}>{sg}</span>
      </div>
      <div style={{fontFamily:'var(--font-body)',fontSize:'11.5px',fontWeight:300,color:'rgba(200,190,240,0.68)',lineHeight:1.65}}>{text}</div>
    </div>
  );
}

// ── CHAPTER 4 · KOCHEN ─────────────────────────────────────────────
function ChapterKochen({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel IV · Kochen" title="Mahlzeiten & Sättigung" />

      <Txt>
        Die Qualität der Mahlzeit bestimmt den Sättigungswert. Mit steigender Qualität — von rohen Zutaten über gekochte Speisen bis zu speziellen Gerichten — wächst auch der Vorteil.
      </Txt>

      <FoodSection />

      <SubH>Mahlzeiten mit exotischen Zutaten</SubH>
      <Txt>
        Wer exotische Zutaten beim Kochen einsetzt, kann Mahlzeiten mit besonderen temporären Effekten zubereiten.
        Bis zu <Hl c="vier Zutaten" /> können kombiniert werden — jede steuert einen Effekt bei
        (siehe Pflanzen-Atlas, Spalte „Kocheffekt").
      </Txt>

      <Table
        cols={[
          { key:'n', label:'Zutaten', align:'right' },
          { key:'z', label:'Zeit', align:'right' },
          { key:'p', label:'Portionen', align:'right' },
        ]}
        rows={[
          { n:1, z:'1 h', p:2 }, { n:2, z:'2 h', p:4 }, { n:3, z:'3 h', p:6 }, { n:4, z:'4 h', p:8 },
        ]}
      />

      <Callout tone="info" title="Koch-Talent">
        Zeit halbieren (aufgerundet). Portionen = Tabellenwert oder <Hl c="4 + Übungsbonus" /> (das Höhere).
        Mahlzeiten bei einer kurzen Rast gewähren zusätzlich <Hl c="+1W8 TP" /> beim Ausgeben von Trefferwürfeln.
      </Callout>

      <SubH>Mahlzeit-Seltenheit & Effektdauer</SubH>
      <Table
        cols={[
          { key:'lvl', label:'Max. Effektlevel' },
          { key:'r', label:'Seltenheit' },
          { key:'d', label:'Dauer' },
        ]}
        rows={[
          { lvl:'I',  r:<RarityPill seltenheit="gewoehnlich" size="sm"/>,   d:'1 Stunde' },
          { lvl:'II', r:<RarityPill seltenheit="ungewoehnlich" size="sm"/>, d:'2 Stunden' },
          { lvl:'III',r:<RarityPill seltenheit="selten" size="sm"/>,        d:'4 Stunden' },
          { lvl:'IV', r:<RarityPill seltenheit="sehr_selten" size="sm"/>,   d:'8 Stunden' },
        ]}
      />

      <SubH>Mögliche Mahlzeit-Effekte</SubH>
      <Table
        cols={[
          { key:'name', label:'Effekt' },
          { key:'beschreibung', label:'Beschreibung' },
          { key:'r', label:'Seltenheit', align:'right' },
        ]}
        rows={window.MAHLZEIT_EFFEKTE.map(e => ({
          name: e.name, beschreibung: e.beschreibung,
          r: <RarityPill seltenheit={e.seltenheit} size="sm"/>,
        }))}
      />

      <SubH>Haltbarkeit</SubH>
      <Table
        cols={[
          { key:'l', label:'Lebensmittel' },
          { key:'h', label:'Haltbarkeit' },
          { key:'k', label:'Konservierung' },
        ]}
        rows={[
          { l:'Beeren',           h:'2 Tage', k:'—' },
          { l:'Fleisch',          h:'3 Tage', k:'Räuchern, Einlegen, Trocknen' },
          { l:'Obst & Gemüse',    h:'10 Tage',k:'Trocknen' },
          { l:'Getreideprodukte', h:'10 Tage',k:'—' },
          { l:'Milchprodukte',    h:'14 Tage',k:'—' },
          { l:'Mahlzeit normal',  h:'2 Tage', k:'Gekühlt +1 Tag · Getrocknet +5 Tage · Warm −1 Tag' },
        ]}
      />

      <Callout tone="warn" title="Verdorben?">
        Nach Ablauf der Haltbarkeit: <Hl c="KON-Rettungswurf SG 10" />, sonst vergiftet.
      </Callout>
    </article>
  );
}

function FoodSection() {
  const cols = [
    { title:'Einfache Zutaten', items:[
      { name:'Zubereitetes Obst/Gemüse',         stat:'+5 Sättigung' },
      { name:'Rohes Obst/Gemüse (ungiftig)',     stat:'+5 Sättigung' },
      { name:'Rohes Obst/Gemüse (giftig)',       stat:'+5 Sättigung', warn:'KON-Rettungswurf' },
      { name:'Milchprodukte',                    stat:'+5 Sättigung' },
      { name:'Rohes Fleisch',                    stat:'+5 Sättigung', warn:'KON-Rettungswurf' },
      { name:'Spezielle Zutaten',                stat:'Schlechter Effekt', bad:true },
    ]},
    { title:'Einfach Gekocht', items:[
      { name:'Zubereitetes Fleisch', stat:'+10 Sättigung' },
      { name:'Getreideprodukte',     stat:'+10 Sättigung' },
    ]},
    { title:'Alltägliche Gerichte', items:[
      { name:'+30 Sättigung' },
      { name:'+1 TP beim nächsten Heilen mit Trefferwürfeln' },
    ], note:'Zutaten + Gewürze nötig. Haltbar 2 Tage.' },
    { title:'Spezielle Gerichte', items:[
      { name:'Vollständige Sättigung' },
      { name:'+1 TP pro Würfel beim Heilen' },
      { name:'Guter oder schlechter Effekt', warn:'je nach Zutat' },
    ], note:'Gewürze + spezielle Zutat + Rezept. Koch würfelt KON/WEI gegen Rezept-SG. Haltbar 2 Tage.' },
  ];
  return (
    <div style={{
      border:'1px solid rgba(124,77,255,0.18)', borderRadius:'3px',
      overflow:'hidden', marginBottom:'22px', background:'rgba(10,8,28,0.6)',
    }}>
      <div style={{ background:'rgba(255,255,255,0.02)', borderBottom:'1px solid rgba(124,77,255,0.12)' }}>
        <img src="assets/images/kochen_stufen.png" alt="Mahlzeit-Qualitätsstufen"
             style={{ display:'block', width:'100%', height:'auto' }} />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)' }}>
        {cols.map((col, ci) => (
          <div key={ci} style={{
            padding:'15px 13px',
            borderRight: ci < 3 ? '1px solid rgba(124,77,255,0.1)' : 'none',
          }}>
            <div style={{
              fontFamily:'var(--font-display)', fontSize:'10px', letterSpacing:'0.14em',
              color:'rgba(160,140,255,0.9)', textTransform:'uppercase',
              marginBottom:'12px', paddingBottom:'7px',
              borderBottom:'1px solid rgba(124,77,255,0.12)',
            }}>{col.title}</div>
            {col.items.map((item, ii) => (
              <div key={ii} style={{ marginBottom:'10px' }}>
                <div style={{
                  fontFamily:'var(--font-body)', fontWeight:400, fontSize:'12px',
                  color: item.bad ? 'rgba(255,110,110,0.85)' : 'rgba(220,210,255,0.88)',
                  lineHeight:1.4,
                }}>{item.name}</div>
                {item.stat && (
                  <div style={{
                    fontFamily:'var(--font-mono)', fontSize:'9.5px', marginTop:'2px',
                    color: item.bad ? 'rgba(255,140,140,0.7)' : 'rgba(94,232,208,0.72)',
                  }}>{item.stat}</div>
                )}
                {item.warn && (
                  <div style={{
                    fontFamily:'var(--font-mono)', fontSize:'9.5px', marginTop:'2px',
                    color:'rgba(255,160,100,0.75)',
                  }}>+ {item.warn}</div>
                )}
              </div>
            ))}
            {col.note && (
              <div style={{
                fontFamily:'var(--font-body)', fontWeight:300, fontStyle:'italic',
                fontSize:'10.5px', color:'rgba(180,165,235,0.55)',
                marginTop:'10px', lineHeight:1.55, textWrap:'pretty',
              }}>{col.note}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CHAPTER 5 · PFLANZEN ───────────────────────────────────────────
function ChapterPflanzen({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel V · Pflanzen-Atlas" title="Kräuter, Blumen & Pilze" />

      <Txt>
        Pflanzen und Kräuter können sowohl beim <Acc c="Kochen" /> als auch in der <Acc c="Alchemie" /> verwendet werden —
        je nach Zubereitung entfalten sie unterschiedliche Wirkungen. Die Regionstabellen zeigen, wo sie zu finden sind;
        die Pflanzenliste listet ihre Effekte für alle Verwendungszwecke auf.
      </Txt>

      <SubH>Regionen — W20 Plant-Tabellen</SubH>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'12px',marginBottom:'24px'}}>
        {window.REGIONEN.map(r => (
          <RegionCard key={r.id} region={r} />
        ))}
      </div>

      <SubH>Vollständige Pflanzenliste</SubH>
      <Table
        cols={[
          { key:'name',    label:'Pflanze' },
          { key:'rarity',  label:'Seltenheit' },
          { key:'kosten',  label:'Kosten', align:'right' },
          { key:'koch',    label:'Kocheffekt' },
          { key:'bombe',   label:'Bombe' },
          { key:'gift',    label:'Gift' },
          { key:'trank',   label:'Trank' },
        ]}
        rows={[...window.PFLANZEN].sort((a,b)=>a.name.localeCompare(b.name, 'de')).map(p => ({
          name: p.name,
          rarity: <RarityPill seltenheit={p.seltenheit} size="sm" />,
          kosten: window.fmtHade(p.kosten),
          koch: p.koch || '—',
          bombe: p.bombe || '—',
          gift: p.gift || '—',
          trank: p.trank || '—',
        }))}
        dense
      />
    </article>
  );
}

function RegionCard({ region }) {
  return (
    <div style={{
      padding:'12px 14px',background:'rgba(10,8,28,0.5)',
      border:'1px solid rgba(124,77,255,0.18)',borderRadius:'3px',
    }}>
      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
        <span style={{fontSize:'20px'}}>{region.icon}</span>
        <span style={{fontFamily:'var(--font-display)',fontSize:'13.5px',letterSpacing:'0.18em',color:'rgba(232,225,255,0.95)',textTransform:'uppercase'}}>{region.name}</span>
      </div>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)'}}>
        <tbody>
          {region.rolls.map((r, i) => {
            // Determine rarity for visual
            let rarity = 'gewoehnlich';
            const m = r.range.match(/^(\d+)/);
            const lo = parseInt(m[1], 10);
            if (lo === 16) rarity = 'ungewoehnlich';
            else if (lo === 19) rarity = 'selten';
            else if (lo === 20) rarity = 'sehr_selten';
            const rData = window.RARITY_BY[rarity];
            return (
              <tr key={i} style={{borderBottom:'1px solid rgba(124,77,255,0.06)'}}>
                <td style={{padding:'5px 0',width:'50px',fontFamily:'var(--font-mono)',fontSize:'10.5px',color:rData.hue,letterSpacing:'0.08em'}}>{r.range}</td>
                <td style={{padding:'5px 0',fontSize:'11.5px',fontWeight:300,color:'rgba(204,194,240,0.78)',letterSpacing:'0.02em'}}>{r.label}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── CHAPTER 6 · ALCHEMIE ───────────────────────────────────────────
function ChapterAlchemie({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel VI · Alchemie" title="Tränke, Bomben & Gifte" />

      <Txt>
        Alchemie ist die Kunst, aus Pflanzen, Kreaturenteilen und anderen Rohstoffen wirkungsvolle Konkoktionen herzustellen.
        Das Ergebnis hängt davon ab, welche <Acc c="Reagenzien" /> kombiniert werden — bis zu <Hl c="vier" /> pro Konkoktion.
      </Txt>

      <Callout tone="info" title="Werkzeug">
        <Hl c="Alchemisten-Werkzeug" /> für Tränke und Bomben.
        <Hl c=" Giftmischer-Werkzeug" /> für Gifte.
      </Callout>

      <Callout tone="warn" title="Feldalchemie">
        Gewöhnliche und ungewöhnliche Konkoktionen können im Feld hergestellt werden.
        <Hl c=" Seltene und mächtigere" /> Konkoktionen erfordern eine gesicherte Werkstatt — sonst:
        Handwerkswurf mit <Hl c="Nachteil" />.
      </Callout>

      <SubH>Konkoktions-Seltenheit & Effektdauer</SubH>
      <Table
        cols={[
          { key:'lvl', label:'Max. Effektlevel' },
          { key:'r', label:'Seltenheit' },
          { key:'d', label:'Wirkungsdauer' },
        ]}
        rows={[
          { lvl:'I',  r:<RarityPill seltenheit="gewoehnlich" size="sm"/>,   d:'1 Minute' },
          { lvl:'II', r:<RarityPill seltenheit="ungewoehnlich" size="sm"/>, d:'10 Minuten' },
          { lvl:'III',r:<RarityPill seltenheit="selten" size="sm"/>,        d:'1 Stunde' },
          { lvl:'IV', r:<RarityPill seltenheit="sehr_selten" size="sm"/>,   d:'5 Stunden' },
        ]}
      />

      <SubH>Maximale Konkoktionsseltenheit nach Charakterstufe</SubH>
      <Table
        cols={[
          { key:'stufe', label:'Charakterstufe' },
          { key:'max', label:'Max. Seltenheit' },
        ]}
        rows={window.MAX_KONKOKTION_NACH_STUFE.map(r => ({
          stufe: `Stufe ${r.stufe}`,
          max: <RarityPill seltenheit={r.max} size="sm"/>,
        }))}
      />

      <SubH>Bomben-Eigenschaften & Gift-SG</SubH>
      <Table
        cols={[
          { key:'r', label:'Seltenheit' },
          { key:'bsg', label:'Bombe RW-SG', align:'right' },
          { key:'br', label:'Bombenradius', align:'right' },
          { key:'gsg', label:'Gift RW-SG', align:'right' },
        ]}
        rows={['gewoehnlich','ungewoehnlich','selten','sehr_selten'].map(rid => ({
          r:<RarityPill seltenheit={rid} size="sm"/>,
          bsg: window.BOMBEN_SG_RADIUS[rid].sg,
          br: window.BOMBEN_SG_RADIUS[rid].radius,
          gsg: `KON ${window.GIFT_SG[rid]}`,
        }))}
      />

      <SubH>Konkoktionstypen</SubH>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',gap:'12px',marginBottom:'20px'}}>
        <KonkokTypeCard icon="💣" label="Bombe" text="Als Teil der Angriffsaktion: Wurf auf Ziel in 9 m. Alle Kreaturen im Radius: GES-RW; bei Misserfolg voller Schaden, bei Erfolg halber." />
        <KonkokTypeCard icon="🜋" label="Gift"  text="KON-RW bei Berührung/Einnahme/Atem/Verletzung. Bei Misserfolg: Vergiftet + Zusatzeffekte für die Dauer. Am Ende jeder Runde Wiederholung." />
        <KonkokTypeCard icon="🜍" label="Trank" text="Wird getrunken; Effekte treten sofort ein. Nur ein Trank mit Dauer kann gleichzeitig aktiv sein (neuerer ersetzt alten)." />
      </div>

      <Callout tone="info" title="Stapelregel — Tränke & Mahlzeiten">
        Ein Trank-Effekt und ein Mahlzeit-Effekt können <Hl c="gleichzeitig" /> aktiv sein und stapeln sich.
        Zwei Tränke oder zwei Mahlzeiten gleichzeitig sind nicht möglich.
      </Callout>

      <ToolPromo
        title="Alchemie-Mixer"
        text="Reagenzien per Klick kombinieren, Effekte und Seltenheit werden live berechnet."
        action={() => goTo('mixer')} />

      <SubH>Reagenzien kombinieren — Regeln</SubH>
      <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'18px'}}>
        {[
          'Reagenzien mit demselben Effekt addieren ihre Level (max. Effekt IV).',
          'Reagenzien mit unterschiedlichen Effekten stapeln sich als separate Effekte.',
          'Effekte verschiedener Konkoktionstypen (z. B. Bomben + Gift) können nicht in derselben Konkoktion gemischt werden.',
          'Die Seltenheit der Konkoktion = das höchste Effektlevel aller verwendeten Reagenzien.',
        ].map((r, i) => (
          <div key={i} style={{
            display:'flex',gap:'10px',padding:'8px 12px',
            background:'rgba(124,77,255,0.04)',borderLeft:'2px solid rgba(124,77,255,0.4)',
            borderRadius:'0 2px 2px 0',
          }}>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',color:'rgba(160,140,255,0.55)',marginTop:'2px',letterSpacing:'0.12em'}}>0{i+1}</span>
            <span style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.78)',lineHeight:1.65,flex:1,textWrap:'pretty'}}>{r}</span>
          </div>
        ))}
      </div>

      <SubH>Reagenzien-Effekte — Bomben</SubH>
      <EffectTable familie={['Bombe','Blendend','Nebel','Schlüpfrigkeit']} />

      <SubH>Reagenzien-Effekte — Gifte</SubH>
      <EffectTable familie={['Zustand','Schaden','Intensivierung','Anfälligkeit','Schwäche']} />

      <SubH>Reagenzien-Effekte — Tränke</SubH>
      <EffectTable familie={['Heilung','Stärkung','Resistenz','Wiederherstellung','Bewegung','Wasseratmung','Nachtsicht','Nahkampf','Fernkampf']} />

      <SubH>Kreaturenteile als Reagenzien</SubH>
      <Txt>
        Kreaturenteile können ebenfalls als Reagenzien eingesetzt werden. Der Effektlevel richtet sich nach dem
        <Acc c=" Herausforderungsgrad" /> der Kreatur. Der Schadenstyp folgt dem Kreaturtyp (Roter Drache = Feuer usw.).
      </Txt>

      <Table
        cols={[
          { key:'hg', label:'HG' },
          { key:'lvl', label:'Reagenz-Effektlevel' },
        ]}
        rows={window.KREATURENTEIL_HG_LEVEL}
      />

      <Table
        cols={[
          { key:'teil',  label:'Teil' },
          { key:'bombe', label:'Bombe' },
          { key:'gift',  label:'Gift' },
          { key:'trank', label:'Trank' },
        ]}
        rows={window.KREATURENTEILE_REAGENZIEN.map(p => ({
          teil:p.teil,
          bombe: p.bombe || '—',
          gift:  p.gift  || '—',
          trank: p.trank || '—',
        }))}
        dense
      />
    </article>
  );
}

function KonkokTypeCard({ icon, label, text }) {
  return (
    <div style={{
      padding:'14px 16px',background:'rgba(10,8,28,0.5)',
      border:'1px solid rgba(124,77,255,0.22)',borderRadius:'4px',
    }}>
      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
        <span style={{fontSize:'22px'}}>{icon}</span>
        <span style={{fontFamily:'var(--font-display)',fontSize:'13.5px',letterSpacing:'0.2em',color:'rgba(232,225,255,0.95)',textTransform:'uppercase'}}>{label}</span>
      </div>
      <div style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.68)',lineHeight:1.7,textWrap:'pretty'}}>{text}</div>
    </div>
  );
}

function EffectTable({ familie }) {
  const rows = Object.entries(window.REAGENZ_EFFEKTE)
    .filter(([key, e]) => familie.includes(e.familie))
    .map(([key, e]) => {
      // map level to seltenheit
      const seltMap = { 1:'gewoehnlich', 2:'ungewoehnlich', 3:'selten', 4:'sehr_selten' };
      return { name:key, beschreibung:e.beschreibung, r: <RarityPill seltenheit={seltMap[e.level]} size="sm"/> };
    });
  return (
    <Table cols={[
      { key:'name', label:'Effekt' },
      { key:'beschreibung', label:'Beschreibung' },
      { key:'r', label:'Seltenheit', align:'right' },
    ]} rows={rows} />
  );
}

// ── CHAPTER 7 · SCHMIEDE ───────────────────────────────────────────
function ChapterSchmiede({ goTo }) {
  const [katFilter, setKatFilter] = useStateCh('alle');
  const mats = katFilter === 'alle' ? window.MATERIALIEN : window.MATERIALIEN.filter(m => m.kategorie === katFilter);

  return (
    <article>
      <SH mono="Kapitel VII · Schmiede & Materialien" title="Spezialmaterialien" />

      <Txt>
        Erze, Kristalle, Holz und andere Spezialmaterialien verleihen Waffen und Rüstungen besondere Eigenschaften.
        Manche reduzieren eingehenden Schaden, andere fügen zusätzlichen Schaden hinzu — und einige sind <Acc c="magisch" />, ohne dass eine Verzauberung nötig wäre.
      </Txt>

      <div style={{display:'flex',gap:'6px',marginBottom:'16px',flexWrap:'wrap'}}>
        {[{id:'alle',label:'Alle'}, ...window.MATERIAL_KATEGORIEN].map(k => {
          const on = katFilter === k.id;
          return (
            <button key={k.id} onClick={()=>setKatFilter(k.id)} style={{
              padding:'6px 12px', background: on ? 'rgba(124,77,255,0.2)' : 'rgba(124,77,255,0.05)',
              border: `1px solid ${on ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.2)'}`,
              borderRadius:'2px', cursor:'pointer',
              fontFamily:'var(--font-mono)', fontSize:'10.5px', letterSpacing:'0.14em',
              textTransform:'uppercase',
              color: on ? '#f0eeff' : 'rgba(200,190,240,0.7)',
            }}>{k.icon && <span style={{marginRight:'6px'}}>{k.icon}</span>}{k.label}</button>
          );
        })}
      </div>

      <Table
        cols={[
          { key:'name',   label:'Material' },
          { key:'r',      label:'Seltenheit' },
          { key:'kat',    label:'Kategorie' },
          { key:'gewicht',label:'Gewicht', align:'right' },
          { key:'kosten', label:'Kosten', align:'right' },
        ]}
        rows={mats.map(m => ({
          name: m.name,
          r:    <RarityPill seltenheit={m.seltenheit} size="sm"/>,
          kat:  (window.MATERIAL_KATEGORIEN.find(k => k.id === m.kategorie) || {}).label,
          gewicht: m.gewicht,
          kosten:  window.fmtHade(m.kosten),
        }))}
      />

      <SubH>Materialeffekte</SubH>
      <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'24px'}}>
        {mats.map(m => (
          <MaterialEffectRow key={m.id} mat={m} />
        ))}
      </div>

      <SubH>Bonus durch Kreaturenteile</SubH>
      <Txt>
        Nichtmagische Rüstungen/Waffen aus Kreaturenteilen erhalten einen Bonus abhängig vom <Acc c="HG" /> der Kreatur.
      </Txt>
      <Table
        cols={[
          { key:'hg', label:'HG' },
          { key:'rk', label:'Rüstungsklasse', align:'right' },
          { key:'w', label:'Waffe (Angriff & Schaden)', align:'right' },
        ]}
        rows={[
          { hg:'6 oder weniger', rk:'—',  w:'—' },
          { hg:'7 – 12',         rk:'—',  w:'+1' },
          { hg:'13 – 18',        rk:'+1', w:'+2' },
          { hg:'19 – 24',        rk:'+2', w:'+3' },
          { hg:'25+',            rk:'+3', w:'+4' },
        ]}
      />

      <Callout tone="info" title="Schadensbonus / -reduktion">
        Teile mit passivem Widerstand oder Schadensbonus verleihen <Hl c="1W4 Schaden" /> des entsprechenden Typs (Waffe)
        oder reduzieren eingehenden Schaden um <Hl c="1W4" /> (Rüstung).
      </Callout>

      <SubH>Fertigkeitsboni durch bestimmte Teile (+3)</SubH>
      <Table
        cols={[
          { key:'teil', label:'Teil' },
          { key:'bonus', label:'Fertigkeitsbonus' },
        ]}
        rows={[
          { teil:'Knochen',                          bonus:'Einschüchtern' },
          { teil:'Farbige Haut',                     bonus:'Tierführung' },
          { teil:'Tarn-/Chamäleontenhaut oder -schuppen', bonus:'Verstecken in licht verdeckten Bereichen' },
        ]}
      />
    </article>
  );
}

function MaterialEffectRow({ mat }) {
  return (
    <div style={{
      padding:'11px 14px',background:'rgba(10,8,28,0.45)',
      border:'1px solid rgba(124,77,255,0.15)',borderRadius:'3px',
      display:'grid',gridTemplateColumns:'170px 1fr 1fr',gap:'14px',
    }}>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'4px'}}>
          <span style={{fontFamily:'var(--font-display)',fontSize:'12.5px',letterSpacing:'0.06em',color:'rgba(232,225,255,0.95)'}}>{mat.name}</span>
        </div>
        <RarityPill seltenheit={mat.seltenheit} size="sm" />
      </div>
      <div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase',marginBottom:'3px'}}>Rüstung</div>
        <div style={{fontFamily:'var(--font-body)',fontSize:'11.5px',fontWeight:300,color: mat.ruestung ? 'rgba(204,194,240,0.78)' : 'rgba(120,110,160,0.55)',lineHeight:1.6}}>
          {mat.ruestung || '—'}
        </div>
      </div>
      <div>
        <div style={{fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.18em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase',marginBottom:'3px'}}>Waffe</div>
        <div style={{fontFamily:'var(--font-body)',fontSize:'11.5px',fontWeight:300,color: mat.waffe ? 'rgba(204,194,240,0.78)' : 'rgba(120,110,160,0.55)',lineHeight:1.6}}>
          {mat.waffe || '—'}
        </div>
      </div>
    </div>
  );
}

// ── CHAPTER 8 · MAGISCHE GEGENSTÄNDE ───────────────────────────────
function ChapterMagisch({ goTo }) {
  return (
    <article>
      <SH mono="Kapitel VIII · Magische Gegenstände" title="Stufen, Eigenschaften, Sockel" />

      <SubH>Gegenstands-Stufensystem</SubH>
      <Table
        cols={[
          { key:'stufe', label:'Charakterstufe' },
          { key:'gegenstand', label:'Gegenstandsstufe' },
          { key:'eigenschaften', label:'Eigenschafts-Seltenheit' },
        ]}
        rows={window.STUFENSYSTEM}
      />

      <SubH>Minor-Eigenschaften (kostenlos)</SubH>
      <Table
        cols={[
          { key:'name',   label:'Eigenschaft' },
          { key:'effekt', label:'Effekt' },
        ]}
        rows={window.MINOR_EIGENSCHAFTEN}
      />

      <SubH>Eigenschafts-Katalog</SubH>
      {['ungewoehnlich','selten','sehr_selten','legendaer'].map(rid => (
        <div key={rid} style={{marginBottom:'16px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
            <RarityPill seltenheit={rid} size="md" />
          </div>
          <Table
            cols={[
              { key:'name', label:'Eigenschaft' },
              { key:'effekt', label:'Effekt' },
            ]}
            rows={window.EIGENSCHAFTEN[rid]}
            dense
          />
        </div>
      ))}

      <SubH>Wachsende Gegenstände</SubH>
      <Txt>
        Gegenstände können mit dem Charakter wachsen. Der SL legt pro Stufenaufstieg eine <Acc c="Auslöse-Bedingung" /> fest.
      </Txt>
      <Table
        cols={[
          { key:'stufe', label:'Stufe' },
          { key:'aufstieg', label:'Eigenschaftsaufstieg' },
        ]}
        rows={[
          { stufe:'Stufe 2', aufstieg:'2 Ungewöhnliche Eigenschaften hinzufügen' },
          { stufe:'Stufe 3', aufstieg:'Ungewöhnliche → Seltene aufwerten' },
          { stufe:'Stufe 4', aufstieg:'Extra Ungewöhnliche + eine Seltene → Sehr Selten' },
          { stufe:'Stufe 5', aufstieg:'Ungewöhnliche → Selten, Seltene → Sehr Selten, Sehr Seltene → Legendär' },
        ]}
      />
      <Callout tone="info" title="Mögliche Auslöse-Bedingungen">
        Eine bestimmte Kreaturenart besiegen · einen persönlichen Feind überwinden ·
        Gegenstand auf dem Altar einer bestimmten Gottheit platzieren · eine große persönliche Entscheidung ·
        eine Gruppe Unschuldiger retten · Benutzung an einem bedeutenden historischen Ort ·
        die Kreatur töten, deren Essenz im Gegenstand steckt.
      </Callout>

      <SubH>Sockeln</SubH>
      <Txt>
        Sockeln ermöglicht es, magische Edelsteine in nichtmagische Ausrüstung einzusetzen.
        <Acc c=" Voraussetzungen:" /> Übung mit Juwelier-Werkzeug <Hl c="und" /> Übung in Arkaner Kunde.
        Bei Sprüchen in Sockeln: Zauber täglich vorbereitet haben.
      </Txt>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'18px'}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.2em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase',marginBottom:'8px'}}>Sockel-Slots erstellen</div>
          <Table
            cols={[
              { key:'r', label:'Seltenheit' },
              { key:'max', label:'Max', align:'right' },
              { key:'zeit', label:'Zeit', align:'right' },
              { key:'kosten', label:'Kosten', align:'right' },
            ]}
            rows={window.SOCKEL_SLOTS.map(s => ({
              r: <RarityPill seltenheit={s.seltenheit} size="sm"/>,
              max: s.max, zeit:`${s.zeit} h`,
              kosten: s.kosten == null ? 'SL' : window.fmtHade(s.kosten),
            }))}
            dense
          />
        </div>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.2em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase',marginBottom:'8px'}}>Edelstein-Sockelsteine</div>
          <Table
            cols={[
              { key:'r', label:'Eigenschaft' },
              { key:'zeit', label:'Zeit', align:'right' },
              { key:'wert', label:'Edelstein', align:'right' },
            ]}
            rows={window.SOCKEL_EDELSTEINE.map(s => ({
              r: <RarityPill seltenheit={s.eigenschaft} size="sm"/>,
              zeit:`${s.zeit} h`,
              wert: window.fmtHade(s.wert),
            }))}
            dense
          />
        </div>
      </div>

      <SubH>Neue Magische Gegenstände</SubH>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'12px'}}>
        <MagicItemCard
          name="Tasche der Kühlung" rarity="selten" type="Wundersamer Gegenstand"
          text="Variante der Tasche der Aufbewahrung. Hält alles bei 4 °C. Bewahrt verderbliche Kreaturenteile und Mahlzeiten vor dem Verderben. Fasst 113 kg, 64 Kubikfuß." />
        <MagicItemCard
          name="Essenz-Extraktionsgerät" rarity="ungewoehnlich" type="Wundersamer Gegenstand"
          text="Lederarmband mit Spritze. 3 Ladungen, regeneriert 1W3 täglich. Bei Ernte: 1 Einheit Kreaturessenz extrahieren — oder Ladung verbrauchen, um ein vorhandenes Teil in 1 Einheit Essenz umzuwandeln." />
        <MagicItemCard
          name="Handschuhe des Handwerkers" rarity="ungewoehnlich" type="Wundersamer Gegenstand"
          text="Lederhandschuhe mit Hammer-und-Amboss-Stickerei. Beim Herstellen zählst du als zwei Charaktere — die Herstellungszeit wird halbiert (aufgerundet)." />
        <MagicItemCard
          name="Manatrank" rarity="ungewoehnlich" type="Trank"
          text="1W4+1 Punkte. Beim Trinken auf verbrauchte Zauberslots (bis Grad 5) verteilen. Grad 1 = 2 · Grad 2 = 3 · Grad 3 = 5 · Grad 4 = 6 · Grad 5 = 7." />
        <MagicItemCard
          name="Großer Manatrank" rarity="selten" type="Trank"
          text="2W4+2 Punkte. Nicht verteilte Punkte verfallen." />
        <MagicItemCard
          name="Überlegener Manatrank" rarity="sehr_selten" type="Trank"
          text="3W4+4 Punkte. Nicht verteilte Punkte verfallen." />
      </div>
    </article>
  );
}

function MagicItemCard({ name, rarity, type, text }) {
  return (
    <div style={{
      padding:'14px 16px',background:'rgba(10,8,28,0.5)',
      border:'1px solid rgba(124,77,255,0.22)',borderLeft:'2px solid rgba(124,77,255,0.5)',
      borderRadius:'0 4px 4px 0',
    }}>
      <div style={{fontFamily:'var(--font-display)',fontSize:'13px',letterSpacing:'0.08em',color:'rgba(232,225,255,0.96)',marginBottom:'5px'}}>{name}</div>
      <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'9px',flexWrap:'wrap'}}>
        <RarityPill seltenheit={rarity} size="sm" />
        <span style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.14em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase'}}>{type}</span>
      </div>
      <div style={{fontFamily:'var(--font-body)',fontSize:'12px',fontWeight:300,color:'rgba(200,190,240,0.72)',lineHeight:1.7,textWrap:'pretty'}}>{text}</div>
    </div>
  );
}

// ── CHAPTER 9 · KOMPLIKATIONEN ─────────────────────────────────────
function ChapterKomplikationen({ goTo }) {
  const [latest, setLatest] = useStateCh(null);

  function rollKomp(total, raw) {
    const n = raw.rolls[0];
    setLatest(window.KOMPLIKATIONEN.find(k => k.n === n));
  }

  return (
    <article>
      <SH mono="Kapitel IX · Komplikationen & Optional" title="Wenn etwas schiefgeht" />

      <Txt>
        Alle 5 Wochen Arbeit (oder bei längeren magischen Projekten): <Hl c="10% Chance" /> (1W10 = 10) auf eine Komplikation.
        Bei Eintreten würfle 1W20 und konsultiere die Tabelle — oder verwende den Button unten.
      </Txt>

      <div style={{
        padding:'14px 16px',background:'rgba(10,8,28,0.6)',
        border:'1px solid rgba(124,77,255,0.3)',borderRadius:'4px',
        margin:'10px 0 24px',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:'14px',flexWrap:'wrap'}}>
          <DiceButton spec="1W20" label="Komplikation würfeln" size="lg" tone="bad"
            onResult={rollKomp}/>
          {latest && (
            <span style={{fontFamily:'var(--font-mono)',fontSize:'9.5px',letterSpacing:'0.16em',color:'rgba(160,140,255,0.55)',textTransform:'uppercase'}}>
              Komplikation #{latest.n}
            </span>
          )}
        </div>
        {latest && (
          <div style={{
            marginTop:'14px',padding:'10px 12px',
            background:'rgba(220,80,80,0.06)',borderLeft:'2px solid rgba(220,80,80,0.4)',
            borderRadius:'0 3px 3px 0',
            fontFamily:'var(--font-body)',fontSize:'13px',fontWeight:300,
            color:'rgba(220,210,250,0.88)',lineHeight:1.75,textWrap:'pretty',
            animation:'resultPop 0.4s ease',
          }}>
            {latest.text}
            {latest.npc && (
              <div style={{marginTop:'8px',fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.14em',color:'rgba(255,160,90,0.85)',textTransform:'uppercase'}}>
                ※ Kann einen Rivalen oder wiederkehrenden NSC einbeziehen
              </div>
            )}
          </div>
        )}
      </div>

      <SubH>Vollständige Komplikationstabelle</SubH>
      <Table
        cols={[
          { key:'n', label:'1W20', align:'right' },
          { key:'text', label:'Komplikation' },
        ]}
        rows={window.KOMPLIKATIONEN.map(k => ({
          n: k.n,
          text: <span>{k.text}{k.npc && <span style={{marginLeft:'8px',fontFamily:'var(--font-mono)',fontSize:'8.5px',letterSpacing:'0.12em',color:'rgba(255,160,90,0.8)',textTransform:'uppercase'}}>※ NSC</span>}</span>,
        }))}
        dense
      />

      <SubH>Optional: Haltbarkeitspunkte</SubH>
      <Txt>
        Ausrüstung aus Spezialmaterialien hat Haltbarkeitspunkte. Bei 0 ist das Stück kaputt und muss repariert werden.
        Jeder verlorene Punkt reduziert auch den Angriffs-/Schadensbonus (Waffe) bzw. die RK (Rüstung) um 1.
      </Txt>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.2em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase',marginBottom:'8px'}}>Verlust</div>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'6px'}}>
            {[
              ['Angriffswurf um 5+ verfehlt', '−1'],
              ['Natürliche 1 beim Angriff',    '−2'],
              ['Treffer 5+ über RK',           '−1 (Rüstung)'],
              ['Kritischer Treffer gegen dich','−2 (Rüstung)'],
            ].map((row, i) => (
              <li key={i} style={{display:'flex',justifyContent:'space-between',gap:'10px',padding:'6px 10px',background:'rgba(124,77,255,0.05)',borderLeft:'2px solid rgba(124,77,255,0.35)',fontFamily:'var(--font-body)',fontSize:'12px',color:'rgba(200,190,240,0.78)'}}>
                <span>{row[0]}</span>
                <span style={{fontFamily:'var(--font-mono)',color:'rgba(255,140,140,0.85)',letterSpacing:'0.06em'}}>{row[1]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.2em',color:'rgba(160,140,255,0.6)',textTransform:'uppercase',marginBottom:'8px'}}>Haltbarkeitspunkte nach Materialwert</div>
          <Table
            cols={[
              { key:'wert', label:'Wert' },
              { key:'k', label:'Stoff', align:'right' },
              { key:'h', label:'Holz', align:'right' },
              { key:'m', label:'Metall', align:'right' },
            ]}
            rows={[
              { wert:'≤ 4.000 Hade',     k:2, h:3, m:4 },
              { wert:'4.100–10.000',     k:3, h:4, m:5 },
              { wert:'10.100–50.000',    k:4, h:5, m:6 },
              { wert:'≥ 50.100',         k:5, h:6, m:7 },
            ]}
            dense
          />
        </div>
      </div>

      <Callout tone="info" title="Reparatur">
        Werkzeugwurf (SG = 8 + Anzahl reduzierter Punkte), 1 Stunde. Bei Erfolg:
        <Hl c=" 3 Haltbarkeitspunkte" /> pro verwendeter Materialeinheit.
        Bei 3× Misserfolg in Folge: eine Materialeinheit geht verloren.
      </Callout>

      <SubH>Optional: Brauereifortschritt</SubH>
      <Txt>
        Für Gruppen, die möchten, dass Erfahrung im Brauen spürbar wird. Brauerei-EP werden gesammelt für
        Zutaten identifizieren/ernten, Rezepte erlernen und Konkoktionen erfolgreich herstellen.
      </Txt>
      <Table
        cols={[
          { key:'stufe', label:'Stufe', align:'right' },
          { key:'ep', label:'Brauerei-EP', align:'right' },
          { key:'bonus', label:'Bonus auf Handwerkswurf', align:'right' },
        ]}
        rows={[
          { stufe:1, ep:0,    bonus:'+0' },
          { stufe:2, ep:150,  bonus:'+1' },
          { stufe:3, ep:450,  bonus:'+2' },
          { stufe:4, ep:900,  bonus:'+3' },
          { stufe:5, ep:1500, bonus:'+4' },
          { stufe:6, ep:2250, bonus:'+5' },
          { stufe:7, ep:3150, bonus:'+6' },
          { stufe:8, ep:4200, bonus:'+7' },
          { stufe:9, ep:5400, bonus:'+8' },
          { stufe:10,ep:6750, bonus:'+9' },
        ]}
        dense
      />

      <SubH>Anhang: Schnellübersicht</SubH>
      <Table
        cols={[
          { key:'situation', label:'Situation' },
          { key:'regel', label:'Regel' },
        ]}
        rows={[
          { situation:'Gebiet absuchen',          regel:'INT (Naturkunde) oder WEI (Wahrnehmung); SG 10 / 15 / 20 / 25 / 30' },
          { situation:'Ressource ernten',         regel:'Würfelwurf: 1 = zerstört · 16–20 = volle Menge' },
          { situation:'Kreaturenteil ernten',     regel:'SG 12 + HG/2; Probe je nach Kreaturtyp' },
          { situation:'Handwerkswurf',            regel:'1W20 + Werkzeug-Übung + Attributmod' },
          { situation:'Sicher arbeiten',          regel:'Doppelte Zeit; automatisch 10 + Handwerks-Bonus' },
          { situation:'3× Misserfolg in Folge',   regel:'Materialien verloren' },
          { situation:'Rast-Handwerk',            regel:'Max. 2 h Fortschritt pro langer Rast' },
          { situation:'Reagenzien kombinieren',   regel:'Gleiche Effekte addieren · Typen nicht mischen · max. Level IV' },
          { situation:'Konkoktions-Seltenheit',   regel:'Höchstes Effektlevel aller Reagenzien' },
          { situation:'Feldalchemie (Selten+)',   regel:'Nachteil auf Handwerkswurf' },
          { situation:'Komplikation',             regel:'Alle 5 Wochen: 10% (1W10 = 10) → 1W20 auf Komplikationstabelle' },
        ]}
        dense
      />
    </article>
  );
}

// ── Tool promo card ────────────────────────────────────────────────
function ToolPromo({ title, text, action }) {
  return (
    <button onClick={action} style={{
      display:'block', width:'100%', textAlign:'left',
      padding:'14px 18px', margin:'18px 0',
      background:'rgba(124,77,255,0.08)',
      border:'1px dashed rgba(124,77,255,0.5)',
      borderRadius:'4px', cursor:'pointer',
      transition:'all 0.2s',
    }}
      onMouseEnter={e=>{e.currentTarget.style.background='rgba(124,77,255,0.14)';e.currentTarget.style.borderStyle='solid';}}
      onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,77,255,0.08)';e.currentTarget.style.borderStyle='dashed';}}>
      <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.22em',color:'rgba(160,140,255,0.65)',textTransform:'uppercase',marginBottom:'6px'}}>◇ Werkbank-Tool</div>
      <div style={{display:'flex',alignItems:'center',gap:'12px',flexWrap:'wrap'}}>
        <div style={{flex:1,minWidth:'180px'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'14px',letterSpacing:'0.12em',color:'rgba(232,225,255,0.95)',textTransform:'uppercase',marginBottom:'4px'}}>{title}</div>
          <div style={{fontFamily:'var(--font-body)',fontSize:'12.5px',fontWeight:300,color:'rgba(200,190,240,0.72)',lineHeight:1.6}}>{text}</div>
        </div>
        <span style={{
          fontFamily:'var(--font-display)',fontSize:'12px',letterSpacing:'0.18em',
          padding:'7px 14px',background:'rgba(124,77,255,0.2)',
          border:'1px solid rgba(124,77,255,0.5)',
          borderRadius:'3px',color:'#f0eeff',textTransform:'uppercase',
          whiteSpace:'nowrap',
        }}>Öffnen →</span>
      </div>
    </button>
  );
}

// ── CHAPTER REGISTRY ───────────────────────────────────────────────
window.CRAFT_CHAPTERS = [
  { id:'uebersicht',    label:'Übersicht',           roman:'I',    render: ChapterUebersicht },
  { id:'prozess',       label:'Prozess',             roman:'II',   render: ChapterProzess },
  { id:'sammeln',       label:'Sammeln & Ernten',    roman:'III',  render: ChapterSammeln },
  { id:'kochen',        label:'Kochen',              roman:'IV',   render: ChapterKochen },
  { id:'pflanzen',      label:'Pflanzen-Atlas',      roman:'V',    render: ChapterPflanzen },
  { id:'alchemie',      label:'Alchemie',            roman:'VI',   render: ChapterAlchemie },
  { id:'schmiede',      label:'Schmiede',            roman:'VII',  render: ChapterSchmiede },
  { id:'magisch',       label:'Magische Gegenstände',roman:'VIII', render: ChapterMagisch },
  { id:'komplikationen',label:'Komplikationen',      roman:'IX',   render: ChapterKomplikationen },
];
