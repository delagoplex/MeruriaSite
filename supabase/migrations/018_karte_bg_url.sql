-- Add bg_url and bg_transform columns to karte_maps
ALTER TABLE public.karte_maps
  ADD COLUMN IF NOT EXISTS bg_url TEXT;

ALTER TABLE public.karte_maps
  ADD COLUMN IF NOT EXISTS bg_transform JSONB;

-- Prevent duplicate root maps (only one row may have parent_hex_id IS NULL)
CREATE UNIQUE INDEX IF NOT EXISTS karte_maps_single_root
  ON public.karte_maps ((true))
  WHERE parent_hex_id IS NULL;
