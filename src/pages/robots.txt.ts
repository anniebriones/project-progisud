export const prerender = true;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://progisud-digital-partner.fr/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
