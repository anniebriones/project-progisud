import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// Update 'site' with your production URL for correct sitemap/canonical URLs.
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://progisuddigitalpartner.com',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
  ],
});
