-- Global collection counts per resource, managed by DM
CREATE TABLE public.kollektikon_counts (
  cat         TEXT NOT NULL,
  resource_id TEXT NOT NULL,  -- TEXT to support both integer IDs and string catalog IDs
  menge       INTEGER NOT NULL DEFAULT 0 CHECK (menge >= 0),
  PRIMARY KEY (cat, resource_id)
);

ALTER TABLE public.kollektikon_counts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.kollektikon_counts FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.kollektikon_counts FOR ALL  USING (public.is_dm());

GRANT SELECT                        ON public.kollektikon_counts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE        ON public.kollektikon_counts TO authenticated;
