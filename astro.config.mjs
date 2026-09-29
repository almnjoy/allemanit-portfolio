import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://allemanit.com',
  integrations: [tailwind(), mdx(), sitemap({ filter: (p) => !['/resume/cisco', '/projects/netadmintoolbox', '/status', '/request-access', '/family', '/design1', '/design2', '/design3', '/design4'].some((x) => p.includes(x)) })],
  trailingSlash: 'ignore',
});
