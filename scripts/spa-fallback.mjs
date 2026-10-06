import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const publicDir = path.resolve('public');
const indexPath = path.join(dist, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

fs.writeFileSync(path.join(dist, '404.html'), html);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

const htaccess = path.join(publicDir, '.htaccess');
if (fs.existsSync(htaccess)) {
  fs.copyFileSync(htaccess, path.join(dist, '.htaccess'));
}

for (const route of ['play', 'blog']) {
  fs.writeFileSync(path.join(dist, `${route}.html`), html);
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
