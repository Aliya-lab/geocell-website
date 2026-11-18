import type { Metadata } from 'next'
import { ConcreteBlanketPageClient } from './ConcreteBlanketPageClient'
import { cbHeroImage } from '@/data/concreteBlanket'

const description =
  'Concrete Blanket (CB), also called Cement Blanket, is a geosynthetic cementitious composite mat. Standard uncoated GCCM in 6 mm, 10 mm and 15 mm, supplied dry in rolls and hydrated on site.'

export const metadata: Metadata = {
  title: 'Concrete Blanket (GCCM)',
  description,
  alternates: { canonical: 'https://www.sylvageo.com/products/concrete-blanket' },
  openGraph: {
    title: 'Concrete Blanket (GCCM) | SylvaGeo',
    description,
    url: 'https://www.sylvageo.com/products/concrete-blanket',
    images: [
      {
        url: cbHeroImage.src,
        width: cbHeroImage.width,
        height: cbHeroImage.height,
        alt: cbHeroImage.alt,
      },
    ],
  },
}

export default function ConcreteBlanketPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Concrete Blanket',
    alternateName: ['Cement Blanket', 'CB'],
    category: 'Geosynthetic Cementitious Composite Mat',
    description,
    brand: { '@type': 'Brand', name: 'SylvaGeo' },
    url: 'https://www.sylvageo.com/products/concrete-blanket',
    image: `https://www.sylvageo.com${cbHeroImage.src}`,
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
