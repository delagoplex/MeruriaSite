CREATE TABLE public.ressourcen_sichtbar (
  cat         TEXT    NOT NULL,
  resource_id INTEGER NOT NULL,
  PRIMARY KEY (cat, resource_id)
);

ALTER TABLE public.ressourcen_sichtbar ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.ressourcen_sichtbar FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.ressourcen_sichtbar FOR ALL USING (public.is_dm());
