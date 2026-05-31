-- Stage 0: DM can reveal name, image, or both before first interaction
ALTER TABLE public.kollektikon_counts
  ADD COLUMN reveal_mode TEXT DEFAULT NULL
  CHECK (reveal_mode IN ('name', 'bild', 'beides'));
