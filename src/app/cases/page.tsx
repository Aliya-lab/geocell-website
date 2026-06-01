import type { Metadata } from 'next'
import { CasesPageClient } from './CasesPageClient'

export const metadata: Metadata = {
  title: 'Engineering Case Studies',
  description: 'Proven geocell solutions across slope protection, road reinforcement, and channel lining projects worldwide.',
  alternates: { canonical: 'https://www.sylvageo.com/cases' },
  openGraph: {
    title: 'Engineering Case Studies | SylvaGeo',
    description: 'Proven geocell solutions across slope protection, road reinforcement, and channel lining projects worldwide.',
    url: 'https://www.sylvageo.com/cases',
  },
}

export default function CasesPage() {
  return <CasesPageClient />
}
