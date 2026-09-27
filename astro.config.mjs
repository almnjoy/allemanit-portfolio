import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://allemanit.com',
  integrations: [tailwind(), mdx(), sitemap({ filter: (p) => !p.includes('/resume/cisco') && !p.includes('/games/play') && !p.includes('/projects/netadmintoolbox') })],
  trailingSlash: 'ignore',
});
