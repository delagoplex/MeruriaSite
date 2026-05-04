import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const gunzip = promisify(zlib.gunzip);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// List of bundled HTML files to process
const bundledFiles = [
  'index.html',
  'Rassen.html',
  'Klassen.html',
  'Sturmritter.html',
  'Sentinels.html',
  'Friedenshueter.html',
  'Outfitters.html',
  'Pathfinders.html',
  'Quellensucher.html',
  'Bergungsgarde.html',
  'Die Kuratoren.html'
];

const outDir = path.join(ROOT, 'extracted');

// Create output directory once
fs.mkdirSync(outDir, { recursive: true });

// Track all processed UUIDs to avoid duplicates
const processedUUIDs = new Set();

async function extractFile(filename) {
  console.log(`\n=== Processing ${filename} ===`);

  const filePath = path.join(ROOT, filename);
  const html = fs.readFileSync(filePath, 'utf8');

  // Check if file is already unpacked
  if (!html.includes('__bundler/manifest')) {
    console.log(`⚠️  ${filename} is already unpacked, skipping...`);
    return;
  }

  const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
  if (!manifestMatch) {
    console.error(`❌ No manifest found in ${filename}`);
    return;
  }

  const manifest = JSON.parse(manifestMatch[1]);

  const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
  if (!templateMatch) {
    console.error(`❌ No template found in ${filename}`);
    return;
  }

  let template = JSON.parse(templateMatch[1]);

  // Extract assets
  let newAssets = 0;
  let skippedAssets = 0;

  for (const [uuid, entry] of Object.entries(manifest)) {
    // Map MIME types to proper extensions
    let ext = entry.mime.split('/')[1]?.split('+')[0] || 'bin';
    if (ext === 'javascript') ext = 'js';
    const assetFilename = uuid + '.' + ext;

    if (processedUUIDs.has(uuid)) {
      skippedAssets++;
      // Still need to replace UUID in template
      template = template.split(uuid).join('extracted/' + assetFilename);
      continue;
    }

    processedUUIDs.add(uuid);

    let bytes = Buffer.from(entry.data, 'base64');
    if (entry.compressed) bytes = await gunzip(bytes);

    const assetPath = path.join(outDir, assetFilename);

    // Only write if doesn't exist
    if (!fs.existsSync(assetPath)) {
      fs.writeFileSync(assetPath, bytes);
      console.log(`  ✓ ${assetFilename} (${entry.mime}, ${bytes.length} bytes)`);
      newAssets++;
    } else {
      skippedAssets++;
    }

    // Replace UUID placeholders in template (paths stay relative to site root)
    template = template.split(uuid).join('extracted/' + assetFilename);
  }

  console.log(`  📦 ${newAssets} new assets, ${skippedAssets} already existed`);

  // Strip bundler machinery and integrity attributes
  let output = template
    .replace(/\s+integrity="[^"]*"/gi, '')
    .replace(/\s+crossorigin="[^"]*"/gi, '');

  fs.writeFileSync(filePath, output);
  console.log(`  ✅ Wrote unpacked ${filename}`);
}

// Process all files
(async () => {
  for (const file of bundledFiles) {
    if (fs.existsSync(path.join(ROOT, file))) {
      await extractFile(file);
    } else {
      console.log(`⚠️  ${file} not found, skipping...`);
    }
  }

  console.log(`\n🎉 Done! Extracted ${processedUUIDs.size} unique assets to extracted/`);
})();
