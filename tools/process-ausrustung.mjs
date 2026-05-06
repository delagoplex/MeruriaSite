import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import crypto from 'crypto';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const gunzip = promisify(zlib.gunzip);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = path.join(ROOT, 'Ausrüstung.html');

const DIRS = {
  fonts:      path.join(ROOT, 'assets/styles/fonts'),
  vendor:     path.join(ROOT, 'assets/scripts/vendor'),
  dataScripts:path.join(ROOT, 'assets/scripts/data'),
  components: path.join(ROOT, 'assets/components'),
  images:     path.join(ROOT, 'assets/images'),
  pagesCSS:   path.join(ROOT, 'assets/styles/pages'),
  globalCSS:  path.join(ROOT, 'assets/styles/global'),
};

// ── Build a hash → relative-path index of every existing asset ──────────────
function sha256(buf) { return crypto.createHash('sha256').update(buf).digest('hex'); }

function indexExistingAssets() {
  const index = new Map(); // sha256 → relative path from ROOT
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      const buf = fs.readFileSync(full);
      index.set(sha256(buf), path.relative(ROOT, full).replace(/\\/g, '/'));
    }
  }
  walk(path.join(ROOT, 'assets'));
  return index;
}

// ── Determine next available counter for a naming pattern ────────────────────
function nextCounter(dir, prefix, ext) {
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); return 1; }
  let max = 0;
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(new RegExp(`^${prefix}-(\\d+)\\.${ext}$`));
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}

// ── Classify asset by MIME and content ──────────────────────────────────────
function classify(mime, content) {
  if (mime.includes('woff')) return 'font';
  if (mime.includes('png') || mime.includes('jpeg') || mime.includes('jpg') ||
      mime.includes('webp') || mime.includes('gif') || mime.includes('svg')) return 'image';
  if (mime.includes('jsx') || mime.includes('x-component')) return 'jsx';
  if (mime.includes('javascript') || mime.includes('ecmascript')) {
    const head = content.toString('utf8', 0, 600);
    if (head.includes('@license React') && head.includes('react-dom')) return 'vendor-reactdom';
    if (head.includes('@license React')) return 'vendor-react';
    if (head.includes('Babel') || head.includes('@babel')) return 'vendor-babel';
    return 'script';
  }
  if (mime.includes('css')) return 'css';
  return 'binary';
}

// ── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  const html = fs.readFileSync(TARGET, 'utf8');

  if (!html.includes('__bundler/manifest')) {
    console.log('⚠️  Ausrüstung.html is already unpacked, nothing to do.');
    process.exit(0);
  }

  const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
  const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
  if (!manifestMatch || !templateMatch) {
    console.error('❌ Could not find manifest or template in Ausrüstung.html');
    process.exit(1);
  }

  const manifest = JSON.parse(manifestMatch[1]);
  let template = JSON.parse(templateMatch[1]);

  console.log(`\n📦 Ausrüstung.html — ${Object.keys(manifest).length} bundled assets\n`);

  const existingByHash = indexExistingAssets();
  console.log(`   ${existingByHash.size} existing assets indexed for deduplication\n`);

  // Counters for new files (start after highest existing)
  let fontNext   = nextCounter(DIRS.fonts,      'font',          'woff2');
  let panelNext  = nextCounter(DIRS.components, 'tweaks-panel',  'jsx');

  let reused = 0, created = 0;

  for (const [uuid, entry] of Object.entries(manifest)) {
    // Decompress
    let bytes = Buffer.from(entry.data, 'base64');
    if (entry.compressed) bytes = await gunzip(bytes);

    const hash = sha256(bytes);
    const kind = classify(entry.mime, bytes);

    // Check if this exact content already exists
    if (existingByHash.has(hash)) {
      const existing = existingByHash.get(hash);
      template = template.split(uuid).join(existing);
      console.log(`  ⊘ ${uuid.slice(0,8)}… [${kind}] → reusing ${existing}`);
      reused++;
      continue;
    }

    // New asset — save it
    let destPath;
    switch (kind) {
      case 'font': {
        fs.mkdirSync(DIRS.fonts, { recursive: true });
        const fname = `font-${fontNext++}.woff2`;
        destPath = path.join(DIRS.fonts, fname);
        break;
      }
      case 'vendor-react': {
        // Always use existing vendor file — never overwrite tested versions
        const existing = 'assets/scripts/vendor/react.development.js';
        template = template.split(uuid).join(existing);
        console.log(`  ⊘ ${uuid.slice(0,8)}… [vendor-react] → keeping ${existing}`);
        reused++;
        continue;
      }
      case 'vendor-reactdom': {
        const existing = 'assets/scripts/vendor/react-dom.development.js';
        template = template.split(uuid).join(existing);
        console.log(`  ⊘ ${uuid.slice(0,8)}… [vendor-reactdom] → keeping ${existing}`);
        reused++;
        continue;
      }
      case 'vendor-babel': {
        const existing = 'assets/scripts/vendor/babel-standalone.js';
        template = template.split(uuid).join(existing);
        console.log(`  ⊘ ${uuid.slice(0,8)}… [vendor-babel] → keeping ${existing}`);
        reused++;
        continue;
      }
      case 'jsx': {
        fs.mkdirSync(DIRS.components, { recursive: true });
        destPath = path.join(DIRS.components, `tweaks-panel-${panelNext++}.jsx`);
        break;
      }
      case 'script': {
        fs.mkdirSync(DIRS.dataScripts, { recursive: true });
        const short = uuid.slice(0, 8);
        destPath = path.join(DIRS.dataScripts, `script-${short}.js`);
        break;
      }
      case 'css': {
        fs.mkdirSync(DIRS.pagesCSS, { recursive: true });
        // Name it after the page unless it looks like global CSS
        const cssText = bytes.toString('utf8');
        const isGlobal = cssText.includes('@font-face') && !cssText.includes(':root');
        if (isGlobal) {
          destPath = path.join(DIRS.globalCSS, `ausrustung-global.css`);
        } else {
          destPath = path.join(DIRS.pagesCSS, 'Ausrüstung.css');
        }
        break;
      }
      case 'image': {
        fs.mkdirSync(DIRS.images, { recursive: true });
        let ext = entry.mime.split('/')[1] || 'bin';
        if (ext === 'jpeg') ext = 'jpg';
        const short = uuid.slice(0, 8);
        destPath = path.join(DIRS.images, `ausrustung-${short}.${ext}`);
        break;
      }
      default: {
        // binary/unknown — skip, keep UUID as-is so we notice it
        console.log(`  ⚠  ${uuid.slice(0,8)}… [${kind}/${entry.mime}] — unknown type, skipping`);
        continue;
      }
    }

    // Handle name collision for CSS (if we're somehow called twice)
    if (fs.existsSync(destPath) && kind === 'css') {
      const base = path.basename(destPath, '.css');
      const short = uuid.slice(0, 8);
      destPath = path.join(path.dirname(destPath), `${base}-${short}.css`);
    }

    fs.writeFileSync(destPath, bytes);
    const rel = path.relative(ROOT, destPath).replace(/\\/g, '/');
    existingByHash.set(hash, rel); // register so later dupes in same bundle reuse it
    template = template.split(uuid).join(rel);
    console.log(`  ✓ ${uuid.slice(0,8)}… [${kind}] → ${rel}`);
    created++;
  }

  // Strip bundler metadata and integrity attributes
  let output = template
    .replace(/\s+integrity="[^"]*"/gi, '')
    .replace(/\s+crossorigin="[^"]*"/gi, '');

  fs.writeFileSync(TARGET, output);

  console.log(`\n✅ Done — ${reused} reused, ${created} new assets`);
  console.log(`   Wrote unpacked Ausrüstung.html`);
})();
