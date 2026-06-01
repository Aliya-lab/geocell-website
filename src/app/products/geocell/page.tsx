import type { Metadata } from 'next'
import { GeocellPageClient } from './GeocellPageClient'

export const metadata: Metadata = {
  title: 'PCA Geocell Specifications and Technical Data',
  description: 'Technical specifications for PCA Geocell Type A, B, C, D. Download data sheets, CAD drawings, and installation guides.',
  alternates: { canonical: 'https://www.sylvageo.com/products/geocell' },
  openGraph: {
    title: 'PCA Geocell Specifications | SylvaGeo',
    description: 'Technical specifications for PCA Geocell Type A, B, C, D.',
    url: 'https://www.sylvageo.com/products/geocell',
  },
}

export default function GeocellPage() {
  return <GeocellPageClient />
}
