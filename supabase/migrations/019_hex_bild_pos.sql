-- Add bild_pos JSONB to karte_hexes for per-hex image focal point
ALTER TABLE public.karte_hexes
  ADD COLUMN IF NOT EXISTS bild_pos JSONB;
