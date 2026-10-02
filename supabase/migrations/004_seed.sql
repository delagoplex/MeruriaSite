-- Seed initial Kollektikon data from static JS files

INSERT INTO public.kollektikon_categories (id, label, label_short, total, hue) VALUES
  ('fische',          'Fische',                     'Fische',           80,  200),
  ('insekten',        'Insekten',                   'Insekten',         30,   95),
  ('pflanzen',        'Pflanzen',                   'Pflanzen',         110, 140),
  ('mineralien',      'Mineralien',                 'Mineralien',       60,   60),
  ('kreaturen',       'Kreaturen',                  'Kreaturen',        36,  285),
  ('kreaturenteile',  'Kreaturenteile',             'Kreaturenteile',   48,    0),
  ('wal',             'Trümmer des Weißen Wals',    'Trümmer d. Wals',  20,  210),
  ('lebensspeicher',  'Teile des Lebensspeichers',  'Lebensspeicher',   15,   45);

INSERT INTO public.kollektikon_catalog (id, name, cat, hue, status, date, sighted_at, komplett_at) VALUES
  ('f-06', 'Aalsturm',          'fische', 240, 'sighted',  '14. Sturmwacht',  NOW() - INTERVAL '3 days',   NULL),
  ('f-04', 'Ködermaul',         'fische', 190, 'komplett', '27. Eiswinter',   NOW() - INTERVAL '100 days', NOW() - INTERVAL '14 days'),
  ('f-02', 'Mondbrasse',        'fische', 215, 'komplett', '04. Aschefall',   NOW() - INTERVAL '100 days', NOW() - INTERVAL '11 days'),
  ('f-01', 'Silbersichelhecht', 'fische', 200, 'komplett', '12. Sterne',      NOW() - INTERVAL '100 days', NOW() - INTERVAL '10 days'),

  ('i-05', 'Aschgraue Hornisse', 'insekten',  30, 'sighted',  '19. Aschefall',  NOW() - INTERVAL '1 day',    NULL),
  ('i-02', 'Karminspinner',      'insekten',   0, 'komplett', '02. Aschefall',  NOW() - INTERVAL '100 days', NOW() - INTERVAL '12 days'),
  ('i-01', 'Sumpflampe',         'insekten',  90, 'sighted',  '14. Blütenfest', NOW() - INTERVAL '10 days',  NULL),

  ('p-05', 'Dornenwürger',  'pflanzen',  25, 'komplett', '11. Aschefall',  NOW() - INTERVAL '100 days', NOW() - INTERVAL '5 days'),
  ('p-03', 'Glimmerschilf', 'pflanzen', 150, 'komplett', '25. Eiswinter',  NOW() - INTERVAL '100 days', NOW() - INTERVAL '7 days'),
  ('p-08', 'Hexenhauch',    'pflanzen', 285, 'sighted',  '01. Aschefall',  NOW() - INTERVAL '7 days',   NULL),
  ('p-02', 'Wundklee',      'pflanzen', 140, 'komplett', '18. Blütenfest', NOW() - INTERVAL '100 days', NOW() - INTERVAL '6 days'),

  ('m-01', 'Mondquarz',       'mineralien', 200, 'komplett', '08. Eiswinter', NOW() - INTERVAL '100 days', NOW() - INTERVAL '8 days'),
  ('m-02', 'Schwarzschiefer', 'mineralien',  30, 'komplett', '14. Sterne',    NOW() - INTERVAL '100 days', NOW() - INTERVAL '9 days'),

  ('k-01', 'Schleifender Vogel', 'kreaturen', 280, 'komplett', '19. Blütenfest', NOW() - INTERVAL '8 days',   NOW() - INTERVAL '3 days'),
  ('k-02', 'Tiefenwandler',      'kreaturen', 260, 'sighted',  '03. Sturmwacht', NOW() - INTERVAL '5 days',   NULL),

  ('t-01', 'Klauenschuppe', 'kreaturenteile',  30, 'komplett', '21. Blütenfest', NOW() - INTERVAL '100 days', NOW() - INTERVAL '13 days'),
  ('t-02', 'Aalstein',      'kreaturenteile', 240, 'komplett', '14. Sturmwacht', NOW() - INTERVAL '100 days', NOW() - INTERVAL '4 days'),

  ('w-01', 'Schädelplatte',     'wal', 210, 'sighted',  '09. Eiswinter',  NOW() - INTERVAL '4 days',   NULL),
  ('w-03', 'Rippensplitter',    'wal', 200, 'komplett', '23. Aschefall',  NOW() - INTERVAL '100 days', NOW() - INTERVAL '1 day'),
  ('w-02', 'Walgesang-Tropfen', 'wal', 215, 'sighted',  '17. Sturmwacht', NOW() - INTERVAL '2 days',   NULL),

  ('l-01', 'Erinnerungskern', 'lebensspeicher', 45, 'sighted',  '11. Blütenfest', NOW() - INTERVAL '9 days',  NULL),
  ('l-02', 'Pulslinse',       'lebensspeicher', 35, 'komplett', '02. Aschefall',  NOW() - INTERVAL '6 days',  NOW() - INTERVAL '2 days');
