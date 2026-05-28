-- ── NSC-Tabelle ──────────────────────────────────────────────────────────────
-- Eigene Tabelle für Nichtspielercharaktere.
-- Skalare Felder direkt als Spalten; komplexe Arrays/Objekte als JSONB / TEXT[].
-- (alter heißt alter_jahre — alter ist SQL-Schlüsselwort)

CREATE TABLE public.nscs (
  id            UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          TEXT    UNIQUE,          -- optionale Kurzkennung für Migration (z.B. 'velira')

  -- Identität
  name          TEXT    NOT NULL,
  titel         TEXT,
  voller_name   TEXT[]  NOT NULL DEFAULT '{}',

  -- Basis
  rasse         TEXT,
  geschlecht    TEXT,
  alter_jahre   INT,
  lebensphase   TEXT,

  -- Rolle
  beruf         TEXT,
  division      TEXT,
  rang          TEXT,
  organisation  TEXT,
  kapsel        TEXT,
  wohnort       TEXT,
  gottheit      TEXT,

  -- Erscheinung & Persönlichkeit
  unvergesslich TEXT,
  eigenschaften TEXT[]  NOT NULL DEFAULT '{}',
  status        TEXT[]  NOT NULL DEFAULT '{}',
  talente       TEXT[]  NOT NULL DEFAULT '{}',
  makel         TEXT,

  -- Komplexe Felder (JSONB)
  routine       JSONB   NOT NULL DEFAULT '[]',  -- [{zeit, ort, tat, stufe}]
  ausruestung   JSONB   NOT NULL DEFAULT '[]',  -- [{name, beschreibung, stufe}]
  begleiter     JSONB   DEFAULT NULL,           -- {name, art} | null
  motivationen  TEXT[]  NOT NULL DEFAULT '{}',
  geheimnisse   TEXT[]  NOT NULL DEFAULT '{}',
  kontakte      JSONB   NOT NULL DEFAULT '{"familie":[],"freunde":[],"rivalen":[]}',

  -- Medien & UI
  bild          TEXT,
  art           TEXT,   -- z.B. 'Kreatur' für Monster-NSCs
  accent        TEXT,   -- überschreibt Divisions-Akzentfarbe

  -- Sichtbarkeit: false = nur DM sieht diesen NSC
  visible       BOOLEAN NOT NULL DEFAULT false,

  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Freischalt-State ──────────────────────────────────────────────────────────
-- Welche Fakten hat ein Spielercharakter (character_id) für einen NSC freigeschaltet.
-- Nur der DM darf schreiben; Spieler lesen nur Zeilen ihrer eigenen Charaktere.

CREATE TABLE public.nsc_unlocks (
  character_id  UUID    NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
  nsc_id        UUID    NOT NULL REFERENCES public.nscs(id)       ON DELETE CASCADE,
  unlocked_keys TEXT[]  NOT NULL DEFAULT '{}',
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (character_id, nsc_id)
);

-- Trigger
CREATE TRIGGER nscs_updated_at
  BEFORE UPDATE ON public.nscs
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER nsc_unlocks_updated_at
  BEFORE UPDATE ON public.nsc_unlocks
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Grants
GRANT SELECT                         ON public.nscs        TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.nsc_unlocks TO authenticated;

-- RLS
ALTER TABLE public.nscs        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nsc_unlocks ENABLE ROW LEVEL SECURITY;

-- NSCs: Spieler sehen nur sichtbare; DM sieht und verwaltet alles
CREATE POLICY "auth read"  ON public.nscs FOR SELECT USING (visible = true OR public.is_dm());
CREATE POLICY "dm insert"  ON public.nscs FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update"  ON public.nscs FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete"  ON public.nscs FOR DELETE USING      (public.is_dm());

-- nsc_unlocks: DM alles; Spieler nur Lesen für ihre eigenen Charaktere
CREATE POLICY "dm all" ON public.nsc_unlocks
  FOR ALL
  USING      (public.is_dm())
  WITH CHECK (public.is_dm());

CREATE POLICY "player read own" ON public.nsc_unlocks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.characters
      WHERE id = character_id AND owner_id = auth.uid()
    )
  );
