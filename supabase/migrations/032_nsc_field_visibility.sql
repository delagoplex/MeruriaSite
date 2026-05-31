-- Per-field visibility for NSCs: DM controls which fields players see
ALTER TABLE public.nscs
  ADD COLUMN field_visibility JSONB NOT NULL DEFAULT '{}';
