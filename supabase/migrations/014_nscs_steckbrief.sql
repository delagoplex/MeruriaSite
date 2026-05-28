-- Spielwerte-Block für NSCs (optional).
-- Enthält RK, TP, Bewegung, Attribute etc. — entweder manuell oder aus einem NPC-Monster übernommen.

ALTER TABLE public.nscs
  ADD COLUMN steckbrief JSONB DEFAULT NULL;

-- Struktur des JSONB:
-- {
--   "rk": 15,
--   "ruestungstyp": "natürliche Rüstung",
--   "tp": 85,
--   "tp_wuerfel": "10W8+40",
--   "bewegung": { "Gehen": "9 m" },
--   "attribute": { "STR": 18, "DEX": 14, "CON": 18, "INT": 11, "WIS": 12, "CHA": 7 },
--   "rettungswuerfe": {},
--   "fertigkeiten": {},
--   "quelle": "manuell" | "monster",
--   "monster_name": "Veteran"   -- nur wenn quelle = "monster"
-- }
