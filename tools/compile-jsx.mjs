// tools/compile-jsx.mjs
// Pre-compiles all JSX to plain JS and rewrites HTML files to not need Babel.
// Run once after editing any .jsx file: node tools/compile-jsx.mjs
// Uses babel-standalone.js from vendor — no npm install needed.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const require = createRequire(import.meta.url);

// Load babel-standalone from vendor (works in Node.js via UMD export)
const Babel = require(join(ROOT, 'assets/scripts/vendor/babel-standalone.js'));

function compile(code, filename = 'inline.jsx') {
  const result = Babel.transform(code, {
    presets: ['react'],
    filename,
    sourceMaps: false,
    comments: true,
  });
  // Wrap in IIFE so each script has its own scope.
  // Without this, `const { useEffect } = React` declared in multiple script
  // tags (components + page inline block) would conflict in the shared global scope.
  return `(function () {\n${result.code}\n})();`;
}

// ── 1. Compile .jsx component files ─────────────────────────────────────────
const compDir = join(ROOT, 'assets/components');
const jsxFiles = readdirSync(compDir).filter(f => f.endsWith('.jsx'));
console.log(`\nCompiling ${jsxFiles.length} component files...`);
let compErrors = 0;
for (const f of jsxFiles) {
  try {
    const src = readFileSync(join(compDir, f), 'utf8');
    const out = compile(src, f);
    writeFileSync(join(compDir, f.replace(/\.jsx$/, '.js')), out);
    console.log(`  ✓ ${f}`);
  } catch (e) {
    console.error(`  ✗ ${f}: ${e.message.split('\n')[0]}`);
    compErrors++;
  }
}

// ── 2. Process HTML files ────────────────────────────────────────────────────
const htmlFilesRaw = execSync('find . -maxdepth 2 -name "*.html" -print0', { cwd: ROOT })
  .toString().split('\0').filter(Boolean);

console.log(`\nProcessing ${htmlFilesRaw.length} HTML files...`);
let htmlErrors = 0, changed = 0;

for (const rel of htmlFilesRaw) {
  const filePath = join(ROOT, rel.replace(/^\.\//, ''));
  let html = readFileSync(filePath, 'utf8');
  const orig = html;

  // a) Remove babel-standalone <script> tag (any variant, including hash-named copies)
  html = html.replace(/<script[^>]+babel-standalone[^>]*><\/script>\n?/g, '');

  // b) External .jsx components → .js  (both attribute orderings)
  html = html.replace(
    /<script\s+src="([^"]+)\.jsx"\s+type="text\/babel"\s*><\/script>/g,
    '<script src="$1.js"></script>'
  );
  html = html.replace(
    /<script\s+type="text\/babel"\s+src="([^"]+)\.jsx"\s*><\/script>/g,
    '<script src="$1.js"></script>'
  );

  // c) Inline <script type="text/babel">…</script>
  //    Merge ALL blocks into one before compiling. Pages often split data setup
  //    and the App component across two blocks; the second block references vars
  //    from the first, so they must share a single IIFE scope.
  const PLACEHOLDER = '<!-- __BABEL_INLINE__ -->';
  const inlineBlocks = [];
  html = html.replace(
    /<script\s+type="text\/babel">([\s\S]*?)<\/script>/g,
    (_, code) => { inlineBlocks.push(code); return PLACEHOLDER; }
  );
  if (inlineBlocks.length > 0) {
    try {
      const compiled = compile(inlineBlocks.join('\n\n'), rel);
      let first = true;
      html = html.replace(new RegExp(PLACEHOLDER, 'g'), () => {
        if (first) { first = false; return `<script>\n${compiled}\n</script>`; }
        return ''; // remove extra placeholders
      });
    } catch (e) {
      console.error(`\n  ✗ ${rel}: ${e.message.split('\n')[0]}`);
      htmlErrors++;
      html = orig; // revert entire file on compile error
    }
  }

  if (html !== orig) {
    writeFileSync(filePath, html);
    changed++;
  }
}

const totalErrors = compErrors + htmlErrors;
console.log(`\nDone: ${changed} HTML files updated, ${totalErrors} error(s).`);
if (totalErrors > 0) {
  console.error('Some files had errors and were left unchanged.');
  process.exit(1);
}
