import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.fedumentigroup.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/sobre', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contato', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/politicas', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/servicos', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/google-360', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/linxar', changeFrequency: 'weekly' as const, priority: 0.95 },
    { path: '/linxar/hub', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/linxar/pref', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/linxar/workplace', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/linxar/middleware', changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
