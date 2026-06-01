import type { Metadata } from 'next'
import { SupportPageClient } from './SupportPageClient'

export const metadata: Metadata = {
  title: 'Technical Support & FAQ',
  description: 'Installation guides, FAQ, and product selection tool for PCA geocell systems.',
  alternates: { canonical: 'https://www.sylvageo.com/support' },
  openGraph: {
    title: 'Technical Support and FAQ',
    description: 'Installation guides, FAQ, and product selection tool for PCA geocell systems.',
    url: 'https://www.sylvageo.com/support',
  },
}

export default function SupportPage() {
  return <SupportPageClient />
}
