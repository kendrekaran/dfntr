import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
          '/_next/',
          '/node_modules/',
          '/.next/',
          '/out/',
          '*.json',
          '/search',
        ],
      },
      // Specific rules for major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://dfndrsecurity.co/sitemap.xml',
      'https://dfndrsecurity.co/sitemap.xml?city=seattle',
      'https://dfndrsecurity.co/sitemap.xml?city=bellevue',
      'https://dfndrsecurity.co/sitemap.xml?city=tacoma',
    ],
    host: 'https://dfndrsecurity.co',
  }
}
