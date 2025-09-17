import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// Update 'site' with your production URL for correct sitemap/canonical URLs.
export default defineConfig({
  // adapter: node({
  //   mode: 'standalone',
  // }),
  // output: 'server',
  site: 'https://progisuddigitalpartner.com',
  integrations: [
    tailwind({
      // Apply Tailwind to both Astro and Markdown content
      config: { applyBaseStyles: true }
    }),
    sitemap()
  ]
});
