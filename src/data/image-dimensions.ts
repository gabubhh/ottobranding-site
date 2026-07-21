/*
  Dimensões intrínsecas das imagens de /public, em pixels.
  GERADO — não edite à mão. Para regerar:
    node scripts/gen-image-dimensions.mjs

  Serve para preencher width/height em toda <img>. Sem isso o navegador não
  reserva o espaço antes de baixar a imagem e a página pula durante o
  carregamento (CLS). Nas páginas de case, com 16 imagens, o salto é grande.
*/

export const imageDimensions: Record<string, [number, number]> = {
  '/cases/astros-barbearia/01.webp': [1280, 720],
  '/cases/astros-barbearia/02.webp': [1600, 1600],
  '/cases/astros-barbearia/03.webp': [1600, 1200],
  '/cases/astros-barbearia/04.webp': [1600, 900],
  '/cases/astros-barbearia/05.webp': [1280, 720],
  '/cases/astros-barbearia/06.webp': [1600, 901],
  '/cases/astros-barbearia/07.webp': [1280, 720],
  '/cases/astros-barbearia/cover.webp': [1500, 844],
  '/cases/barreto-tour/01.webp': [1600, 900],
  '/cases/barreto-tour/02.webp': [1600, 900],
  '/cases/barreto-tour/03.webp': [1600, 900],
  '/cases/barreto-tour/04.webp': [1600, 900],
  '/cases/barreto-tour/05.webp': [1600, 900],
  '/cases/barreto-tour/06.webp': [1600, 900],
  '/cases/barreto-tour/07.webp': [1280, 720],
  '/cases/barreto-tour/08.webp': [1600, 900],
  '/cases/barreto-tour/09.webp': [1600, 900],
  '/cases/barreto-tour/10.webp': [1600, 901],
  '/cases/barreto-tour/11.webp': [1600, 900],
  '/cases/barreto-tour/12.webp': [1600, 901],
  '/cases/barreto-tour/cover.webp': [1500, 844],
  '/cases/tatiana-brito-academy/01.webp': [1600, 901],
  '/cases/tatiana-brito-academy/02.webp': [1600, 901],
  '/cases/tatiana-brito-academy/03.webp': [1600, 900],
  '/cases/tatiana-brito-academy/04.webp': [1600, 900],
  '/cases/tatiana-brito-academy/05.webp': [1600, 900],
  '/cases/tatiana-brito-academy/06.webp': [1600, 900],
  '/cases/tatiana-brito-academy/07.webp': [1600, 900],
  '/cases/tatiana-brito-academy/08.webp': [1600, 900],
  '/cases/tatiana-brito-academy/09.webp': [1280, 720],
  '/cases/tatiana-brito-academy/10.webp': [1280, 720],
  '/cases/tatiana-brito-academy/11.webp': [1280, 720],
  '/cases/tatiana-brito-academy/12.webp': [1600, 900],
  '/cases/tatiana-brito-academy/13.webp': [1600, 900],
  '/cases/tatiana-brito-academy/14.webp': [1600, 900],
  '/cases/tatiana-brito-academy/15.webp': [1280, 720],
  '/cases/tatiana-brito-academy/cover.webp': [1500, 844],
  '/sobre/gabriel.webp': [1086, 1448],
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
