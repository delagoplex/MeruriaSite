-- Add birthday field to NSCs (day-of-year 1-224 in the Meruria calendar)
ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS geburtstag_doy INTEGER;
