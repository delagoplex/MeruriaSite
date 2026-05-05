import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const extractedDir = path.join(ROOT, 'extracted');

// Rename .javascript files to .js
const files = fs.readdirSync(extractedDir);
let renamed = 0;

files.forEach(file => {
  if (file.endsWith('.javascript')) {
    const oldPath = path.join(extractedDir, file);
    const newPath = path.join(extractedDir, file.replace('.javascript', '.js'));
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} → ${file.replace('.javascript', '.js')}`);
    renamed++;
  }
});

console.log(`\n✅ Renamed ${renamed} files`);

// Now fix references in HTML files
const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

htmlFiles.forEach(htmlFile => {
  const filePath = path.join(ROOT, htmlFile);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace .javascript extensions with .js in extracted/ paths
  content = content.replace(/extracted\/([a-f0-9-]+)\.javascript/g, 'extracted/$1.js');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated references in: ${htmlFile}`);
  }
});

console.log('\n🎉 Done!');
