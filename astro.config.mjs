import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const site = process.env.PUBLIC_SITE_URL || 'https://progisud-digital-partner.fr'

// Update 'site' with your production URL for correct sitemap/canonical URLs.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site,
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
  ],
});
