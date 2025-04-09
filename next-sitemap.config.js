/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.onefunnelaway.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.onefunnelaway.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin', '/_next']
      },
    ],
  },
  exclude: ['/admin', '/api/*'],
  sitemapSize: 7000,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,
}; 