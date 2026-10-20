import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.sylvageo.com'
  return [
    { url: base },
    { url: `${base}/products/geocell` },
    { url: `${base}/cases` },
    { url: `${base}/support` },
    { url: `${base}/about` },
    { url: `${base}/contact` },
    { url: `${base}/privacy` },
  ]
}
