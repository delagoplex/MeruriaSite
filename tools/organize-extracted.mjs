import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const extractedDir = path.join(ROOT, 'extracted');
const assetsDir = path.join(ROOT, 'assets');

// Create organized directory structure
const dirs = {
  fonts: path.join(assetsDir, 'fonts'),
  scripts: path.join(assetsDir, 'scripts'),
  vendor: path.join(assetsDir, 'scripts', 'vendor'),
  components: path.join(assetsDir, 'components'),
  images: path.join(assetsDir, 'images')
};

Object.values(dirs).forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// Mapping of UUIDs to meaningful names
const fileMapping = new Map();

// Process JSX files
const jsxFiles = fs.readdirSync(extractedDir).filter(f => f.endsWith('.jsx'));
console.log(`\n=== Processing ${jsxFiles.length} JSX components ===`);
jsxFiles.forEach((file, i) => {
  // They're all tweaks-panel.jsx duplicates
  const oldPath = path.join(extractedDir, file);
  const newPath = path.join(dirs.components, `tweaks-panel-${i + 1}.jsx`);
  fs.renameSync(oldPath, newPath);
  fileMapping.set(file, path.relative(ROOT, newPath));
  console.log(`  ✓ ${file} → ${path.relative(ROOT, newPath)}`);
});

// Process JS files - identify React libs and other scripts
const jsFiles = fs.readdirSync(extractedDir).filter(f => f.endsWith('.js'));
console.log(`\n=== Processing ${jsFiles.length} JavaScript files ===`);

jsFiles.forEach(file => {
  const oldPath = path.join(extractedDir, file);
  const content = fs.readFileSync(oldPath, 'utf8').slice(0, 500);

  let newName = file;
  let targetDir = dirs.scripts;

  // Check if it's a known vendor library
  if (content.includes('@license React') && content.includes('react-dom')) {
    newName = 'react-dom.development.js';
    targetDir = dirs.vendor;
  } else if (content.includes('@license React') && !content.includes('react-dom')) {
    newName = 'react.development.js';
    targetDir = dirs.vendor;
  } else if (content.includes('Babel') || content.includes('babel')) {
    newName = 'babel-standalone.js';
    targetDir = dirs.vendor;
  } else {
    // Custom scripts - use hash-based names for now
    const shortHash = file.split('-')[0];
    newName = `script-${shortHash}.js`;
  }

  let newPath = path.join(targetDir, newName);

  // Handle duplicates
  if (fs.existsSync(newPath)) {
    const stats1 = fs.statSync(oldPath);
    const stats2 = fs.statSync(newPath);
    if (stats1.size === stats2.size) {
      console.log(`  ⊘ ${file} → duplicate, deleting`);
      fs.unlinkSync(oldPath);
      fileMapping.set(file, path.relative(ROOT, newPath));
      return;
    } else {
      const uniqueSuffix = file.split('-')[0];
      newName = newName.replace('.js', `-${uniqueSuffix}.js`);
      newPath = path.join(targetDir, newName);
    }
  }

  fs.renameSync(oldPath, newPath);
  fileMapping.set(file, path.relative(ROOT, newPath));
  console.log(`  ✓ ${file} → ${path.relative(ROOT, newPath)}`);
});

// Process font files
const woff2Files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.woff2'));
console.log(`\n=== Processing ${woff2Files.length} font files ===`);

// Group fonts by size (likely font-weight variants)
const fontsBySize = new Map();
woff2Files.forEach(file => {
  const oldPath = path.join(extractedDir, file);
  const stats = fs.statSync(oldPath);
  const sizeKey = Math.round(stats.size / 1000);
  if (!fontsBySize.has(sizeKey)) {
    fontsBySize.set(sizeKey, []);
  }
  fontsBySize.get(sizeKey).push(file);
});

let fontCounter = 1;
fontsBySize.forEach((files, sizeKey) => {
  files.forEach((file) => {
    const oldPath = path.join(extractedDir, file);
    const newName = `font-${fontCounter}.woff2`;
    const newPath = path.join(dirs.fonts, newName);

    fs.renameSync(oldPath, newPath);
    fileMapping.set(file, path.relative(ROOT, newPath));
    console.log(`  ✓ ${file} → ${path.relative(ROOT, newPath)} (${sizeKey}KB)`);
    fontCounter++;
  });
});

// Process images
const imageFiles = fs.readdirSync(extractedDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
console.log(`\n=== Processing ${imageFiles.length} image files ===`);
imageFiles.forEach((file, i) => {
  const oldPath = path.join(extractedDir, file);
  const ext = path.extname(file);
  const newName = `image-${i + 1}${ext}`;
  const newPath = path.join(dirs.images, newName);

  fs.renameSync(oldPath, newPath);
  fileMapping.set(file, path.relative(ROOT, newPath));
  console.log(`  ✓ ${file} → ${path.relative(ROOT, newPath)}`);
});

// Save mapping for reference
const mappingPath = path.join(ROOT, 'file-mapping.json');
const mappingObj = Object.fromEntries(fileMapping);
fs.writeFileSync(mappingPath, JSON.stringify(mappingObj, null, 2));
console.log(`\n✅ File mapping saved to file-mapping.json`);

console.log(`\n=== Summary ===`);
console.log(`  Components: ${jsxFiles.length}`);
console.log(`  Scripts: ${jsFiles.length}`);
console.log(`  Fonts: ${woff2Files.length}`);
console.log(`  Images: ${imageFiles.length}`);
console.log(`  Total: ${fileMapping.size} files organized`);

// Check if extracted dir is empty
const remaining = fs.readdirSync(extractedDir);
if (remaining.length === 0) {
  fs.rmdirSync(extractedDir);
  console.log(`\n🗑️  Removed empty 'extracted' directory`);
} else {
  console.log(`\n⚠️  ${remaining.length} files remain in 'extracted' directory`);
}
