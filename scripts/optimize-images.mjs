/**
 * Image Optimization Script
 * Converts PNG/JPG images in /public/images to WebP format.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, copyFile } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const INPUT_DIR = join(__dirname, '..', 'public', 'images');

async function optimizeImages() {
  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
  );

  console.log(`\n🖼️  Found ${imageFiles.length} images to optimize:\n`);

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const outName = basename(file, extname(file)) + '.webp';
    const outputPath = join(INPUT_DIR, outName);
    const backupPath = inputPath + '.bak';

    // Skip if WebP already exists and is newer
    try {
      const { size: originalSize } = await sharp(inputPath).metadata().then(() =>
        import('fs').then(fs => fs.promises.stat(inputPath))
      );

      // Make a .bak backup of the original
      await copyFile(inputPath, backupPath);
      console.log(`  ✅ Backed up  ${file} → ${basename(backupPath)}`);

      // Convert to WebP
      const { size: webpSize } = await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath)
        .then(() => import('fs').then(fs => fs.promises.stat(outputPath)));

      const saved = ((1 - webpSize / originalSize) * 100).toFixed(1);
      const originalKB = (originalSize / 1024).toFixed(0);
      const webpKB = (webpSize / 1024).toFixed(0);

      console.log(
        `  🔄 ${file} (${originalKB} KB) → ${outName} (${webpKB} KB)  saved ${saved}%`
      );
    } catch (err) {
      console.error(`  ❌ Failed on ${file}:`, err.message);
    }
  }

  console.log('\n✨ Done! Update your <img> src paths to use .webp files.\n');
}

optimizeImages();
