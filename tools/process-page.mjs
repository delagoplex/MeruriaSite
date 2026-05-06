/**
 * Unpack a single bundled HTML page.
 *
 * Usage:  node tools/process-page.mjs <PageName.html>
 * E.g.:   node tools/process-page.mjs Dhampir.html
 */
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import crypto from 'crypto';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const gunzip = promisify(zlib.gunzip);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node tools/process-page.mjs <PageName.html>');
  process.exit(1);
}

const TARGET   = path.join(ROOT, filename);
const baseName = path.basename(filename, '.html');                      // e.g. "Dhampir"
const prefix   = baseName.toLowerCase().replace(/ü/g,'ue').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/[^a-z0-9]/g, '-'); // e.g. "dhampir"

const DIRS = {
  fonts:      path.join(ROOT, 'assets/styles/fonts'),
  vendor:     path.join(ROOT, 'assets/scripts/vendor'),
  dataScripts:path.join(ROOT, 'assets/scripts/data'),
  components: path.join(ROOT, 'assets/components'),
  images:     path.join(ROOT, 'assets/images'),
  pagesCSS:   path.join(ROOT, 'assets/styles/pages'),
  globalCSS:  path.join(ROOT, 'assets/styles/global'),
};

function sha256(buf) { return crypto.createHash('sha256').update(buf).digest('hex'); }

function indexExistingAssets() {
  const index = new Map();
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

function nextCounter(dir, stem, ext) {
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); return 1; }
  let max = 0;
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(new RegExp(`^${stem}-(\\d+)\\.${ext}$`));
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}

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

(async () => {
  if (!fs.existsSync(TARGET)) {
    console.error(`❌ File not found: ${filename}`);
    process.exit(1);
  }

  const html = fs.readFileSync(TARGET, 'utf8');
  if (!html.includes('__bundler/manifest')) {
    console.log(`⚠️  ${filename} is already unpacked, nothing to do.`);
    process.exit(0);
  }

  const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
  const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
  if (!manifestMatch || !templateMatch) {
    console.error(`❌ Could not find manifest or template in ${filename}`);
    process.exit(1);
  }

  const manifest = JSON.parse(manifestMatch[1]);
  let template = JSON.parse(templateMatch[1]);

  console.log(`\n📦 ${filename} — ${Object.keys(manifest).length} bundled assets\n`);

  const existingByHash = indexExistingAssets();
  console.log(`   ${existingByHash.size} existing assets indexed for deduplication\n`);

  let fontNext  = nextCounter(DIRS.fonts,      'font',         'woff2');
  let panelNext = nextCounter(DIRS.components, 'tweaks-panel', 'jsx');
  let reused = 0, created = 0;

  for (const [uuid, entry] of Object.entries(manifest)) {
    let bytes = Buffer.from(entry.data, 'base64');
    if (entry.compressed) bytes = await gunzip(bytes);

    const hash = sha256(bytes);
    const kind = classify(entry.mime, bytes);

    if (existingByHash.has(hash)) {
      const existing = existingByHash.get(hash);
      template = template.split(uuid).join(existing);
      console.log(`  ⊘ ${uuid.slice(0,8)}… [${kind}] → reusing ${existing}`);
      reused++;
      continue;
    }

    let destPath;
    switch (kind) {
      case 'font': {
        fs.mkdirSync(DIRS.fonts, { recursive: true });
        destPath = path.join(DIRS.fonts, `font-${fontNext++}.woff2`);
        break;
      }
      case 'vendor-react': {
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
        destPath = path.join(DIRS.dataScripts, `${prefix}-${uuid.slice(0,8)}.js`);
        break;
      }
      case 'css': {
        fs.mkdirSync(DIRS.pagesCSS, { recursive: true });
        destPath = path.join(DIRS.pagesCSS, `${baseName}.css`);
        if (fs.existsSync(destPath)) {
          destPath = path.join(DIRS.pagesCSS, `${baseName}-${uuid.slice(0,8)}.css`);
        }
        break;
      }
      case 'image': {
        fs.mkdirSync(DIRS.images, { recursive: true });
        let ext = entry.mime.split('/')[1] || 'bin';
        if (ext === 'jpeg') ext = 'jpg';
        destPath = path.join(DIRS.images, `${prefix}-${uuid.slice(0,8)}.${ext}`);
        break;
      }
      default: {
        console.log(`  ⚠  ${uuid.slice(0,8)}… [${kind}/${entry.mime}] — unknown type, skipping`);
        continue;
      }
    }

    fs.writeFileSync(destPath, bytes);
    const rel = path.relative(ROOT, destPath).replace(/\\/g, '/');
    existingByHash.set(hash, rel);
    template = template.split(uuid).join(rel);
    console.log(`  ✓ ${uuid.slice(0,8)}… [${kind}] → ${rel}`);
    created++;
  }

  let output = template
    .replace(/\s+integrity="[^"]*"/gi, '')
    .replace(/\s+crossorigin="[^"]*"/gi, '');

  fs.writeFileSync(TARGET, output);
  console.log(`\n✅ Done — ${reused} reused, ${created} new assets`);
  console.log(`   Wrote unpacked ${filename}`);
})();
