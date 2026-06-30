/**
 * Responsive Image Generator
 * Creates multiple WebP sizes for the hero poster for use with srcset.
 * Run: node scripts/generate-responsive.mjs
 */
import sharp from 'sharp';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stat } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');

const VARIANTS = [
  { width: 480,  suffix: '-480w',  quality: 80 },   // mobile
  { width: 768,  suffix: '-768w',  quality: 82 },   // tablet
  { width: 1040, suffix: '-1040w', quality: 84 },   // desktop
];

const SOURCE = join(IMAGES_DIR, 'hero poster.png');

async function generate() {
  console.log('\n📐 Generating responsive hero poster variants...\n');

  for (const v of VARIANTS) {
    const outName = `hero poster${v.suffix}.webp`;
    const outPath = join(IMAGES_DIR, outName);

    try {
      const info = await sharp(SOURCE)
        .resize(v.width, null, { withoutEnlargement: true })
        .webp({ quality: v.quality, effort: 6 })
        .toFile(outPath);

      const { size } = await stat(outPath);
      console.log(`  ✅ ${outName}  (${v.width}px wide)  →  ${(size/1024).toFixed(0)} KB`);
    } catch (err) {
      console.error(`  ❌ Failed ${outName}: ${err.message}`);
    }
  }

  console.log('\n✨ Done. Update Hero.tsx srcset and index.html preload.\n');
}

generate();
