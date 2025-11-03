// src/app/robots.ts
import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.fedumentigroup.com.br';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'], // ajuste se quiser indexar suas APIs
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
