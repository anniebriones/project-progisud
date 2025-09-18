import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

const site = process.env.PUBLIC_SITE_URL || 'https://example.com'

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
