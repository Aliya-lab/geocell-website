import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PCA Geocell Specifications & Technical Data',
  description: 'Full technical specifications for SylvaGeo PCA Geocell Type A, B, C, D. Tensile strength, weld strength, cell dimensions, and engineering data sheets.',
  alternates: { canonical: 'https://www.sylvageo.com/products/geocell' },
}

export default function GeocellLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
