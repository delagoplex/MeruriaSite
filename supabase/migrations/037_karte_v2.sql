-- ── Karte v2: Bild-Karten, Objectives, Ressourcen-Pools ──────────────────────
-- karte_maps bekommt kind ('hex'|'image'), ebene (Welt/Region/Gebiet/Ort, optional)
--   und floors (JSONB, nur für kind='image').
-- karte_areas       — Polygon-Flächen auf Bild-Karten (pro Etage)
-- karte_objectives  — abhakbare Ziele an Hexes ODER Areas, Fortschritt wird
--                     clientseitig über die Hierarchie hochgerollt
-- karte_pools       — welche Arten (aus den lokalen Datenbanken FISH_DB usw.)
--                     in einem Gebiet vorkommen; Fang-Status kommt aus
--                     kollektikon_counts (menge > 0 = erfasst)
--
-- RLS analog zu karte_hexes:
--   Areas: Spieler sehen nur visible=true.
--   Objectives: Spieler sehen nur freigeschaltet=true (monster[] wird im
--     Spieler-UI nie angezeigt).
--   Pools: alle Authentifizierten lesen, nur DM schreibt.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── karte_maps: neue Spalten ─────────────────────────────────────────────────
ALTER TABLE public.karte_maps
  ADD COLUMN IF NOT EXISTS kind   TEXT NOT NULL DEFAULT 'hex' CHECK (kind IN ('hex','image')),
  ADD COLUMN IF NOT EXISTS ebene  TEXT,
  ADD COLUMN IF NOT EXISTS floors JSONB;

-- ── karte_areas ──────────────────────────────────────────────────────────────
CREATE TABLE public.karte_areas (
  id            UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  map_id        UUID    NOT NULL REFERENCES public.karte_maps(id) ON DELETE CASCADE,
  floor         INTEGER NOT NULL DEFAULT 0,
  name          TEXT    NOT NULL DEFAULT '',
  typ           TEXT    NOT NULL DEFAULT 'poi' CHECK (typ IN ('poi','eingang')),
  points        JSONB   NOT NULL DEFAULT '[]',   -- [[x,y], …] in Bild-Koordinaten
  beschreibung  TEXT    NOT NULL DEFAULT '',
  bild_url      TEXT    NOT NULL DEFAULT '',
  tags          TEXT[]  NOT NULL DEFAULT '{}',
  visible       BOOLEAN NOT NULL DEFAULT false,
  entdeckt      BOOLEAN NOT NULL DEFAULT false,
  komplettiert  BOOLEAN NOT NULL DEFAULT false,
  has_submap    BOOLEAN NOT NULL DEFAULT false,
  submap_id     UUID    REFERENCES public.karte_maps(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Rückreferenz: Sub-Map kennt ihre Eltern-Area (analog parent_hex_id)
ALTER TABLE public.karte_maps
  ADD COLUMN IF NOT EXISTS parent_area_id UUID REFERENCES public.karte_areas(id) ON DELETE SET NULL;

CREATE TRIGGER karte_areas_updated_at
  BEFORE UPDATE ON public.karte_areas
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ── karte_objectives ─────────────────────────────────────────────────────────
CREATE TABLE public.karte_objectives (
  id             UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  hex_id         UUID    REFERENCES public.karte_hexes(id) ON DELETE CASCADE,
  area_id        UUID    REFERENCES public.karte_areas(id) ON DELETE CASCADE,
  titel          TEXT    NOT NULL DEFAULT '',
  tags           TEXT[]  NOT NULL DEFAULT '{}',
  beschreibung   TEXT    NOT NULL DEFAULT '',
  bedingung      TEXT    NOT NULL DEFAULT '',
  belohnung      TEXT    NOT NULL DEFAULT '',
  monster        TEXT[]  NOT NULL DEFAULT '{}',  -- nur im DM-UI sichtbar
  entdeckt       BOOLEAN NOT NULL DEFAULT false,
  komplettiert   BOOLEAN NOT NULL DEFAULT false,
  freigeschaltet BOOLEAN NOT NULL DEFAULT false, -- Spieler sehen das Ziel erst dann
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK ((hex_id IS NULL) <> (area_id IS NULL))  -- genau ein Anker
);

CREATE INDEX karte_objectives_hex_idx  ON public.karte_objectives(hex_id);
CREATE INDEX karte_objectives_area_idx ON public.karte_objectives(area_id);

-- ── karte_pools ──────────────────────────────────────────────────────────────
-- Wie Objectives an Hex ODER Area verankert; Fang-Status kommt global aus
-- kollektikon_counts (menge > 0), hier steht nur die Vorkommens-Liste.
CREATE TABLE public.karte_pools (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hex_id      UUID REFERENCES public.karte_hexes(id) ON DELETE CASCADE,
  area_id     UUID REFERENCES public.karte_areas(id) ON DELETE CASCADE,
  cat         TEXT NOT NULL CHECK (cat IN ('fische','insekten','pflanzen','mineralien')),
  resource_id TEXT NOT NULL,   -- id aus FISH_DB / INSEKTEN_DB / PFLANZEN_DB+FANTASY_PLANT_DB / MINERALIEN_DB
  CHECK ((hex_id IS NULL) <> (area_id IS NULL))
);

CREATE UNIQUE INDEX karte_pools_hex_uniq  ON public.karte_pools(hex_id, cat, resource_id)  WHERE hex_id  IS NOT NULL;
CREATE UNIQUE INDEX karte_pools_area_uniq ON public.karte_pools(area_id, cat, resource_id) WHERE area_id IS NOT NULL;

-- ── Grants ───────────────────────────────────────────────────────────────────
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_areas      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_objectives TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_pools      TO authenticated;

-- ── RLS ──────────────────────────────────────────────────────────────────────
ALTER TABLE public.karte_areas      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.karte_objectives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.karte_pools      ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth read" ON public.karte_areas FOR SELECT USING (visible = true OR public.is_dm());
CREATE POLICY "dm insert" ON public.karte_areas FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update" ON public.karte_areas FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete" ON public.karte_areas FOR DELETE USING      (public.is_dm());

CREATE POLICY "auth read" ON public.karte_objectives FOR SELECT USING (freigeschaltet = true OR public.is_dm());
CREATE POLICY "dm insert" ON public.karte_objectives FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update" ON public.karte_objectives FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete" ON public.karte_objectives FOR DELETE USING      (public.is_dm());

CREATE POLICY "auth read" ON public.karte_pools FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "dm insert" ON public.karte_pools FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update" ON public.karte_pools FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete" ON public.karte_pools FOR DELETE USING      (public.is_dm());
