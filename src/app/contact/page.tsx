import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Quote',
  description: 'Contact SylvaGeo for technical consultation, product specifications, and project quotes.',
  alternates: { canonical: 'https://www.sylvageo.com/contact' },
  openGraph: {
    title: 'Contact Us | SylvaGeo',
    description: 'Contact SylvaGeo for technical consultation, product specifications, and project quotes.',
    url: 'https://www.sylvageo.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
