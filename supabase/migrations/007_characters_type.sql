ALTER TABLE public.characters
  ADD COLUMN type TEXT NOT NULL DEFAULT 'spieler' CHECK (type IN ('spieler', 'nsc'));
