// scripts/convert-posters.mjs
import { globby } from 'globby';
import sharp from 'sharp';
import { dirname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const INPUT_DIR = join(process.cwd(), 'public', 'assets', 'posters');
// Saída no mesmo diretório dos arquivos de entrada
const SCALES = [640, 1280, 1920, 2560]; // LCP, mid, desktop, 2x

async function run() {
  const files = await globby(['**/*.{jpg,jpeg,png}'], { cwd: INPUT_DIR, absolute: true });
  if (files.length === 0) {
    console.log(`Nenhuma imagem encontrada em ${INPUT_DIR}`);
    return;
  }

  console.log(`Encontradas ${files.length} imagens. Convertendo…`);

  for (const file of files) {
    const { name, dir } = parse(file);
    await mkdir(dir, { recursive: true });

    for (const w of SCALES) {
      const base = join(dir, `${name}-${w}`);

      // AVIF
      await sharp(file)
        .resize({ width: w, withoutEnlargement: true })
        .avif({ quality: 60 })
        .toFile(`${base}.avif`);

      // WebP
      await sharp(file)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(`${base}.webp`);
    }

    console.log(`✔ ${name} → ${SCALES.map(w => `${name}-${w}.{avif,webp}`).join(', ')}`);
  }

  console.log('✅ Conversão concluída.');
}

run().catch((err) => {
  console.error('Erro ao converter posters:', err);
  process.exit(1);
});
