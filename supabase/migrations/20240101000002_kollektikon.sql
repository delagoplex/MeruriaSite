CREATE TABLE public.kollektikon_categories (
  id          TEXT PRIMARY KEY,
  label       TEXT NOT NULL,
  label_short TEXT NOT NULL,
  total       INT  NOT NULL,
  hue         INT  NOT NULL
);

CREATE TABLE public.kollektikon_catalog (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  cat         TEXT REFERENCES public.kollektikon_categories(id),
  hue         INT  NOT NULL,
  status      TEXT NOT NULL DEFAULT 'sighted' CHECK (status IN ('sighted','komplett')),
  date        TEXT,
  sighted_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  komplett_at TIMESTAMPTZ
);

ALTER TABLE public.kollektikon_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kollektikon_catalog    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth read" ON public.kollektikon_categories FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.kollektikon_categories FOR ALL USING (public.is_dm());

CREATE POLICY "auth read" ON public.kollektikon_catalog FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.kollektikon_catalog FOR ALL USING (public.is_dm());
