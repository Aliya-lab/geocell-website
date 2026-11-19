import type { Metadata } from 'next'
import { ConcreteBlanketPageClient } from './ConcreteBlanketPageClient'
import { cbPage } from '@/data/concreteBlanket'

const description =
  'Draft — unpublished. Concrete Blanket (CB) is a geosynthetic cementitious composite mat (GCCM). The standard uncoated range is 6 mm, 10 mm and 15 mm.'

export const metadata: Metadata = {
  title: cbPage.title,
  description,
  alternates: { canonical: 'https://www.sylvageo.com/products/concrete-blanket' },
  openGraph: {
    title: `${cbPage.title} | SylvaGeo`,
    description,
    url: 'https://www.sylvageo.com/products/concrete-blanket',
  },
}

export default function ConcreteBlanketPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Concrete Blanket',
    alternateName: ['Cement Blanket', 'GCCM'],
    category: 'Geosynthetic cementitious composite mat',
    description: cbPage.productParagraphs[0],
    brand: { '@type': 'Brand', name: 'SylvaGeo' },
    url: 'https://www.sylvageo.com/products/concrete-blanket',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConcreteBlanketPageClient />
    </>
  )
}
