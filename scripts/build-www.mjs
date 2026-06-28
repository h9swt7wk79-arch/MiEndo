/* Assemble l'application web dans www/, le dossier que Capacitor embarque
   dans l'app native. On y copie uniquement ce qui compose le site :
   les pages HTML, le dossier assets/, le manifest et le service worker.
   (api/, vercel.json, node_modules/, ios/… sont volontairement exclus.)
   Fonctionne sur Windows, macOS et Linux (utilisé tel quel par Codemagic). */
import { readdirSync, rmSync, mkdirSync, cpSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const racine = process.cwd();
const sortie = join(racine, 'www');

// 1. Repart d'un dossier www/ propre
rmSync(sortie, { recursive: true, force: true });
mkdirSync(sortie, { recursive: true });

// 2. Copie toutes les pages HTML
const pages = readdirSync(racine).filter((f) => f.endsWith('.html'));
for (const page of pages) cpSync(join(racine, page), join(sortie, page));

// 3. Copie les ressources web (dossier ou fichier)
for (const element of ['assets', 'manifest.json', 'sw.js']) {
  const source = join(racine, element);
  if (!existsSync(source)) continue;
  cpSync(source, join(sortie, element), { recursive: statSync(source).isDirectory() });
}

console.log(`✓ www/ généré : ${pages.length} pages + assets/manifest/sw`);
