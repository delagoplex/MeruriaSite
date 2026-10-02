#!/usr/bin/env node
// Writes assets/scripts/supabase-local.json from the running local Supabase stack, so that
// supabase-client.js uses the local database when the site is opened via localhost.
// Run after `npm run db:start`:  npm run db:config
//
// The Supabase CLI lives in WSL (that is where Docker runs); on macOS/Linux it is called directly.

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../assets/scripts/supabase-local.json', import.meta.url));
const [cmd, args] = process.platform === 'win32'
  ? ['wsl', ['-e', 'bash', '-lc', 'supabase status -o json']]
  : ['supabase', ['status', '-o', 'json']];

let text;
try {
  text = execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
} catch (e) {
  console.error('Konnte "supabase status" nicht lesen. Läuft die lokale Datenbank? -> npm run db:start');
  console.error(String(e.stderr || e.message).trim());
  process.exit(1);
}

// the CLI may print log lines before the JSON object
const json = JSON.parse(text.slice(text.indexOf('{')));
const url = json.API_URL || 'http://127.0.0.1:54321';
const key = json.ANON_KEY || json.PUBLISHABLE_KEY;
if (!key) {
  console.error('Kein ANON_KEY / PUBLISHABLE_KEY in der Ausgabe gefunden:', Object.keys(json).join(', '));
  process.exit(1);
}

writeFileSync(OUT, JSON.stringify({ url, key }, null, 2) + '\n');
console.log(`geschrieben: assets/scripts/supabase-local.json (${url})`);
