import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.sylvageo.com'
  return [
    { url: base,                           lastModified: new Date('2026-06-01'), changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/products/geocell`,     lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cases`,                lastModified: new Date('2026-05-22'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/support`,              lastModified: new Date('2026-05-22'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,                lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/contact`,              lastModified: new Date('2026-05-28'), changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/privacy`,              lastModified: new Date('2026-05-22'), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
