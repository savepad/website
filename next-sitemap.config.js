const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.savepad.app';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};