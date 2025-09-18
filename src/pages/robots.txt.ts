import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';
  const indexable = (import.meta.env.PUBLIC_SEO_INDEXABLE || '').toString().toLowerCase() === 'true';

  const body = indexable
    ? `User-agent: *
Allow: /

Sitemap: ${site.replace(/\/$/, '')}/sitemap-index.xml
`
    : `User-agent: *
Disallow: /
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
