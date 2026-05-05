import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Manual mapping for files that were deleted as duplicates or from first extraction
const manualMapping = {
  // Scripts - React
  '000d7435-59b4-44cc-92d9-bcab8dc3b1c6.js': 'assets/scripts/vendor/react-dom.development.js',
  '0731a539-7631-4809-a675-65c89ae64d02.js': 'assets/scripts/vendor/babel-standalone.js',
  '0f5939db-2e89-4ba3-8993-23c0a19327b7.js': 'assets/scripts/vendor/react.development.js',
  '1bddd81c-dfe4-4b52-93c7-f5f888e2151a.js': 'assets/scripts/vendor/react-dom.development.js',
  '12918178-b32c-4d16-805a-b5310439a5be.js': 'assets/scripts/vendor/babel-standalone.js',
  '22513639-0ac3-47e1-b934-846a7ad46511.js': 'assets/scripts/vendor/babel-standalone.js',
  '250841fa-6655-4d60-89f2-b4f6b1eb0f41.js': 'assets/scripts/vendor/react-dom.development.js',
  '062dc3f7-cc1b-4e75-988c-cbcf93519f96.js': 'assets/scripts/vendor/babel-standalone.js',
  '34aa091c-382a-4b23-aec5-6e0e6094cf2f.js': 'assets/scripts/vendor/react-dom.development.js',
  '3c4c8a0c-4739-4c7b-9055-cc8f8b8313c9.js': 'assets/scripts/vendor/react.development.js',
  '3dac827a-5891-4716-92fc-67bc0f60fb09.js': 'assets/scripts/vendor/babel-standalone.js',
  '40ac70a7-b820-4cee-b16e-59aac917406e.js': 'assets/scripts/vendor/react.development-40ac70a7.js',
  'b3fd6567-c46b-47b6-a893-a6fb2e046383.js': 'assets/scripts/vendor/react-dom.development-b3fd6567.js',
  '5a4a750f-643c-4784-b80a-ef442a8d1efb.js': 'assets/scripts/vendor/babel-standalone-5a4a750f.js',
  '8845a322-06e1-40aa-88a2-06f096aa1670.js': 'assets/scripts/script-8845a322.js',

  // JSX Components
  '2800c7c2-3448-4160-a757-a21d4f592cf1.jsx': 'assets/components/tweaks-panel-1.jsx',
  '3b5dd30a-334d-4434-90c3-4176c624d7a1.jsx': 'assets/components/tweaks-panel-2.jsx',
  '5990f269-f99e-4579-8259-43eaeffef285.jsx': 'assets/components/tweaks-panel-3.jsx',
  '6daf6bc5-9412-4f6b-b1e1-9a7428050c9b.jsx': 'assets/components/tweaks-panel-4.jsx',
  '7024bbae-81fc-481e-af9c-eb9e3b31cfa8.jsx': 'assets/components/tweaks-panel-5.jsx',
  '7185e01c-8990-4ed4-8bfc-2ddbbe71e016.jsx': 'assets/components/tweaks-panel-6.jsx',
  '719fd545-cf7b-4bf9-8bab-16cfc95dbc67.jsx': 'assets/components/tweaks-panel-7.jsx',
  '95f682e0-051b-47a5-ad4d-ba2187192dcf.jsx': 'assets/components/tweaks-panel-8.jsx',
  '967eb1e8-9a0b-4c99-91c3-ba35cdedbc16.jsx': 'assets/components/tweaks-panel-9.jsx',
  'a44f7624-a76f-4aec-b598-ae141b68d3ec.jsx': 'assets/components/tweaks-panel-10.jsx',
  'b1248509-47b3-4d24-bc77-04e2b652b7ff.jsx': 'assets/components/tweaks-panel-11.jsx',
  'be5b4112-2047-4425-9383-5f867607b85d.jsx': 'assets/components/tweaks-panel-12.jsx',

  // Fonts
  '3ece84f0-93f1-400f-a479-574e83ae6c68.woff2': 'assets/fonts/font-6.woff2',
  '9d46f796-f0d2-4524-ad93-d00fa0d46ded.woff2': 'assets/fonts/font-42.woff2',
  'd1f629a7-5f37-4cb7-9b34-9f1b26e1e6bb.woff2': 'assets/fonts/font-60.woff2',
  '05f1106f-3677-4bf5-a1b1-8480dfbc1a0e.woff2': 'assets/fonts/font-25.woff2',
  '0cfa4915-f4e6-4074-9224-91008d719a5e.woff2': 'assets/fonts/font-61.woff2',
  '4f45753b-ff14-4b07-a4d7-231f958da2ea.woff2': 'assets/fonts/font-17.woff2',
  '643298b0-ed8b-42fc-93bf-6dee7580322c.woff2': 'assets/fonts/font-79.woff2',
  'dab8a8d5-fac3-4e83-bc8e-8c0fe1ddad08.woff2': 'assets/fonts/font-94.woff2',
};

// Get all HTML files
const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));

console.log(`\n=== Fixing remaining references in ${htmlFiles.length} HTML files ===\n`);

let totalReplacements = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(ROOT, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let replacements = 0;

  // Replace all extracted/ references
  for (const [oldFile, newPath] of Object.entries(manualMapping)) {
    const oldRef = `extracted/${oldFile}`;
    if (html.includes(oldRef)) {
      const count = (html.match(new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      html = html.split(oldRef).join(newPath);
      replacements += count;
    }
  }

  if (replacements > 0) {
    fs.writeFileSync(filePath, html);
    console.log(`  ✓ ${file}: ${replacements} references fixed`);
    totalReplacements += replacements;
  } else {
    console.log(`  • ${file}: no changes needed`);
  }
});

console.log(`\n✅ Fixed ${totalReplacements} total references`);

// Verify no extracted/ references remain
console.log(`\n=== Verification ===`);
let remainingRefs = 0;
htmlFiles.forEach(file => {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const matches = html.match(/extracted\//g);
  if (matches) {
    console.log(`  ⚠️  ${file}: still has ${matches.length} extracted/ references`);
    remainingRefs += matches.length;
  }
});

if (remainingRefs === 0) {
  console.log(`  ✅ No extracted/ references remain!`);
} else {
  console.log(`  ❌ ${remainingRefs} extracted/ references still remain`);
}
