import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// List of HTML files to update
const htmlFiles = [
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

// Load the mapping
const mapping = JSON.parse(fs.readFileSync(path.join(ROOT, 'file-mapping.json'), 'utf8'));

console.log(`\n=== Updating references in ${htmlFiles.length} HTML files ===`);
console.log(`Using ${Object.keys(mapping).length} file mappings\n`);

let totalReplacements = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${file} not found, skipping...`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  let replacements = 0;

  // Replace all extracted/ references
  for (const [oldFile, newPath] of Object.entries(mapping)) {
    const oldRef = `extracted/${oldFile}`;
    if (html.includes(oldRef)) {
      const count = (html.match(new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      html = html.split(oldRef).join(newPath.replace(/\\/g, '/'));
      replacements += count;
    }
  }

  if (replacements > 0) {
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ ${file}: ${replacements} references updated`);
    totalReplacements += replacements;
  } else {
    console.log(`  • ${file}: no changes needed`);
  }
});

console.log(`\n✅ Updated ${totalReplacements} total references across all files`);
