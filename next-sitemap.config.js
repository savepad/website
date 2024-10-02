const siteUrl = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_SITE_URL || 'https://www.savepad.app'
  : 'http://localhost:3000';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',
  exclude: [
    '/api/*',        
    '/app/api/*',    
    '/globals.css',  
    '/layout.tsx',   
  ],
  additionalPaths: async (config) => {
 
    const paths = [
      // index pages
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/about', changefreq: 'daily', priority: 0.8 },
      { loc: '/changelog', changefreq: 'daily', priority: 0.8 },
      { loc: '/features', changefreq: 'daily', priority: 0.8 },
      { loc: '/personas', changefreq: 'daily', priority: 0.8 },
      { loc: '/product', changefreq: 'weekly', priority: 0.7 },
      { loc: '/use-cases', changefreq: 'weekly', priority: 0.7 },
      { loc: '/user-guides', changefreq: 'weekly', priority: 0.7 },

      // legal pages
      { loc: '/legal/privacy-policy', changefreq: 'weekly', priority: 0.7 },
      { loc: '/legal/terms', changefreq: 'weekly', priority: 0.7 },

      // blog pages
      { loc: '/blog', changefreq: 'weekly', priority: 0.7 },
      { loc: '/blog/what-is-a-swipe-file', changefreq: 'daily', priority: 1.0 },


    ];

    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
