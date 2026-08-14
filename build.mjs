import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

const pages = ['index.html', 'kondapalli.html', 'kalamkari.html', 'mangalagiri.html', 'our-vision.html', 'connect.html'];
await rm('dist', { recursive: true, force: true });
await mkdir('dist/client', { recursive: true });
await mkdir('dist/server', { recursive: true });
for (const file of [...pages, 'styles.css', 'inner.css', 'main.js', 'og.png']) await cp(file, `dist/client/${file}`);
await cp('assets', 'dist/client/assets', { recursive: true });
await writeFile('dist/server/index.js', 'export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n');
console.log('QVibe production bundle created.');
