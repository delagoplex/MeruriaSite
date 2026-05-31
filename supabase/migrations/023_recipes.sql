-- Recipes: player proposals + DM-approved recipe list
CREATE TABLE public.recipes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  kategorie       TEXT NOT NULL DEFAULT 'Kochen' CHECK (kategorie IN ('Kochen')),
  beschreibung    TEXT NOT NULL DEFAULT '',
  zutaten         JSONB NOT NULL DEFAULT '[]',
  -- Each zutat: { kollektikon_id: "p-05"|null, name: "Silberdistel", cat: "pflanzen"|null, menge: "2 Handvoll" }
  ergebnis        TEXT NOT NULL,
  sg              INTEGER,         -- Cook DC; null if not applicable
  effekte         TEXT,
  status          TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'approved', 'rejected')),
  abgelehnt_grund TEXT,
  submitted_by    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  dm_erstellt     BOOLEAN NOT NULL DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  approved_at     TIMESTAMPTZ
);

CREATE INDEX recipes_status_idx ON public.recipes (status);
CREATE INDEX recipes_submitted_by_idx ON public.recipes (submitted_by);
CREATE INDEX recipes_zutaten_gin ON public.recipes USING gin(zutaten);

ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;

-- Any logged-in user can submit their own recipe
CREATE POLICY "insert own" ON public.recipes
  FOR INSERT WITH CHECK (auth.uid() = submitted_by);

-- Players see approved + their own; DM sees everything
CREATE POLICY "select approved or own or dm" ON public.recipes
  FOR SELECT USING (
    status = 'approved' OR auth.uid() = submitted_by OR public.is_dm()
  );

-- Only DM can update (approve/reject, add notes)
CREATE POLICY "dm update" ON public.recipes
  FOR UPDATE USING (public.is_dm());

-- Player can withdraw their own pending proposals
CREATE POLICY "player delete pending" ON public.recipes
  FOR DELETE USING (auth.uid() = submitted_by AND status = 'pending');

GRANT SELECT, INSERT, UPDATE, DELETE ON public.recipes TO authenticated;
GRANT SELECT ON public.recipes TO anon;
