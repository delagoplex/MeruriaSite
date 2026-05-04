import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';

const gunzip = promisify(zlib.gunzip);
const html = fs.readFileSync('Gottheiten.html', 'utf8'); // change filename

const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
if (!manifestMatch) { console.error('No manifest found'); process.exit(1); }

const manifest = JSON.parse(manifestMatch[1]);

// Also grab the template
const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
let template = JSON.parse(templateMatch[1]);

const outDir = 'extracted';
fs.mkdirSync(outDir, { recursive: true });

for (const [uuid, entry] of Object.entries(manifest)) {
    let bytes = Buffer.from(entry.data, 'base64');
    if (entry.compressed) bytes = await gunzip(bytes);

    const ext = entry.mime.split('/')[1]?.split('+')[0] || 'bin';
    const filename = uuid + '.' + ext;
    fs.writeFileSync(path.join(outDir, filename), bytes);
    console.log('wrote', filename, '(', entry.mime, bytes.length, 'bytes )');

    // Replace UUID placeholders in template with relative paths
    template = template.split(uuid).join('extracted/' + filename);
}

// Strip the bundler machinery and integrity attributes
let output = template
    .replace(/\s+integrity="[^"]*"/gi, '')
    .replace(/\s+crossorigin="[^"]*"/gi, '');

fs.writeFileSync('Gottheiten.html', output);
console.log('wrote Gottheiten.html');
