-- Extended hex fields: tags, submap-specific (datensonde, kolonie, ressourcen) and main-map-specific (bevoelkerung, kolonien, erkundung)
ALTER TABLE public.karte_hexes
  ADD COLUMN IF NOT EXISTS tags         TEXT[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS datensonde   BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS kolonie      JSONB,
  ADD COLUMN IF NOT EXISTS ressourcen   JSONB,
  ADD COLUMN IF NOT EXISTS bevoelkerung TEXT,
  ADD COLUMN IF NOT EXISTS kolonien     TEXT,
  ADD COLUMN IF NOT EXISTS erkundung    JSONB;
