import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `
    User-agent: *
    Disallow: /private/
    Allow: /

    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
  `;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}