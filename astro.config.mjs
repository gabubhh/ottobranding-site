// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// `site` é obrigatório: sem ele o sitemap não é gerado e as URLs canônicas
// saem relativas.
export default defineConfig({
  site: 'https://ottobranding.com',
  integrations: [sitemap()],
});