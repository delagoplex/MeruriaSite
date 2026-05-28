-- ── Karte-Tabellen ────────────────────────────────────────────────────────────
-- karte_maps   — jede Karte (Hauptkarte + Sub-Maps, die per Hex geöffnet werden)
-- karte_hexes  — einzelne Hex-Felder, je nach Map
-- karte_stash  — Hex-Felder im Lager (nicht auf der Karte platziert)
--
-- RLS:
--   Spieler sehen karte_maps immer (brauchen sie zur Navigation).
--   karte_hexes: Spieler sehen nur Felder mit visible=true.
--   karte_stash: Nur DM.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── karte_maps ───────────────────────────────────────────────────────────────
CREATE TABLE public.karte_maps (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL DEFAULT 'Hauptkarte',
  parent_hex_id UUID,                         -- gesetzt wenn dies eine Sub-Map ist
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── karte_hexes ──────────────────────────────────────────────────────────────
CREATE TABLE public.karte_hexes (
  id            UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  map_id        UUID    NOT NULL REFERENCES public.karte_maps(id) ON DELETE CASCADE,
  q             INTEGER NOT NULL,
  r             INTEGER NOT NULL,
  name          TEXT    NOT NULL DEFAULT '',
  terrain       TEXT    NOT NULL DEFAULT '',
  features      TEXT    NOT NULL DEFAULT '',
  beschreibung  TEXT    NOT NULL DEFAULT '',
  bild_url      TEXT    NOT NULL DEFAULT '',
  has_submap    BOOLEAN NOT NULL DEFAULT false,
  submap_id     UUID    REFERENCES public.karte_maps(id) ON DELETE SET NULL,
  visible       BOOLEAN NOT NULL DEFAULT false,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (map_id, q, r)
);

-- Rückreferenz: Sub-Map kennt ihr Eltern-Hex
ALTER TABLE public.karte_maps
  ADD CONSTRAINT fk_parent_hex
  FOREIGN KEY (parent_hex_id) REFERENCES public.karte_hexes(id) ON DELETE SET NULL;

-- ── karte_stash ──────────────────────────────────────────────────────────────
CREATE TABLE public.karte_stash (
  id            UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT    NOT NULL DEFAULT '',
  terrain       TEXT    NOT NULL DEFAULT '',
  features      TEXT    NOT NULL DEFAULT '',
  beschreibung  TEXT    NOT NULL DEFAULT '',
  bild_url      TEXT    NOT NULL DEFAULT '',
  sort_order    INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── updated_at Trigger ───────────────────────────────────────────────────────
CREATE TRIGGER karte_hexes_updated_at
  BEFORE UPDATE ON public.karte_hexes
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ── Grants ───────────────────────────────────────────────────────────────────
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_maps  TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_hexes TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.karte_stash TO authenticated;

-- ── RLS ──────────────────────────────────────────────────────────────────────
ALTER TABLE public.karte_maps  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.karte_hexes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.karte_stash ENABLE ROW LEVEL SECURITY;

-- karte_maps: alle authentifizierten Nutzer dürfen lesen (Breadcrumb-Navigation)
CREATE POLICY "auth read"  ON public.karte_maps FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "dm insert"  ON public.karte_maps FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update"  ON public.karte_maps FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete"  ON public.karte_maps FOR DELETE USING      (public.is_dm());

-- karte_hexes: Spieler sehen nur visible=true; DM sieht und verwaltet alles
CREATE POLICY "auth read"  ON public.karte_hexes FOR SELECT USING (visible = true OR public.is_dm());
CREATE POLICY "dm insert"  ON public.karte_hexes FOR INSERT WITH CHECK (public.is_dm());
CREATE POLICY "dm update"  ON public.karte_hexes FOR UPDATE USING      (public.is_dm());
CREATE POLICY "dm delete"  ON public.karte_hexes FOR DELETE USING      (public.is_dm());

-- karte_stash: nur DM
CREATE POLICY "dm all" ON public.karte_stash
  FOR ALL
  USING      (public.is_dm())
  WITH CHECK (public.is_dm());

-- ── Storage: karte-bilder Bucket ─────────────────────────────────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('karte-bilder', 'karte-bilder', true)
ON CONFLICT (id) DO NOTHING;

-- Öffentliches Lesen (Bilder in img-Tags laden)
CREATE POLICY "public read" ON storage.objects
  FOR SELECT USING (bucket_id = 'karte-bilder');

-- Nur DM darf hochladen / löschen
CREATE POLICY "dm upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'karte-bilder' AND public.is_dm());

CREATE POLICY "dm delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'karte-bilder' AND public.is_dm());
