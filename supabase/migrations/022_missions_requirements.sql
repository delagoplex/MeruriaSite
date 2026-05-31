-- Add requirements JSONB to missions: array of { label, count }
ALTER TABLE public.missions
  ADD COLUMN IF NOT EXISTS requirements JSONB NOT NULL DEFAULT '[]';
