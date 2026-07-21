/*
  Gera src/data/image-dimensions.ts lendo as dimensões reais dos .webp de
  /public. Rode sempre que adicionar ou trocar imagem de case:

    node scripts/gen-image-dimensions.mjs

  Lê o cabeçalho do webp direto (VP8/VP8L/VP8X), sem depender de binário
  externo — assim funciona em qualquer máquina, não só no macOS com sips.
*/
import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import path from 'node:path';

/** Dimensões de um .webp a partir dos bytes do cabeçalho. */
function webpSize(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') {
    return null;
  }
  const format = buf.toString('ascii', 12, 16);

  if (format === 'VP8 ') {
    // bitstream simples: largura/altura em 14 bits, após o start code
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (format === 'VP8L') {
    // lossless: 14 bits cada, empacotados em 4 bytes a partir do offset 21
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (format === 'VP8X') {
    // estendido: 24 bits cada, valor guardado como (dimensão - 1)
    const width = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
    const height = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
    return { width, height };
  }
  return null;
}

const files = globSync('public/{cases,sobre}/**/*.webp').sort();
const linhas = [];

for (const file of files) {
  const size = webpSize(readFileSync(file));
  if (!size) {
    console.warn(`  ignorado (cabeçalho não reconhecido): ${file}`);
    continue;
  }
  const key = '/' + path.relative('public', file).split(path.sep).join('/');
  linhas.push(`  '${key}': [${size.width}, ${size.height}],`);
}

const out = `/*
  Dimensões intrínsecas das imagens de /public, em pixels.
  GERADO — não edite à mão. Para regerar:
    node scripts/gen-image-dimensions.mjs

  Serve para preencher width/height em toda <img>. Sem isso o navegador não
  reserva o espaço antes de baixar a imagem e a página pula durante o
  carregamento (CLS). Nas páginas de case, com 16 imagens, o salto é grande.
*/

export const imageDimensions: Record<string, [number, number]> = {
${linhas.join('\n')}
};

/**
 * width/height de uma imagem em /public. Retorna undefined se o arquivo não
 * estiver no mapa — o template então omite os atributos em vez de chutar um
 * valor errado, que causaria distorção em vez de evitar o salto.
 */
export function imgSize(src: string): { width: number; height: number } | undefined {
  const d = imageDimensions[src];
  return d ? { width: d[0], height: d[1] } : undefined;
}
`;

writeFileSync('src/data/image-dimensions.ts', out);
console.log(`image-dimensions.ts atualizado: ${linhas.length} imagens.`);
