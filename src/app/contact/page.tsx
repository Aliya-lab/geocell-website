import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Us — Enquiry | SylvaGeo',
  },
  description: 'Contact SylvaGeo to request product information, or to contact us about a project.',
  alternates: { canonical: 'https://www.sylvageo.com/contact' },
  openGraph: {
    title: 'Contact Us | SylvaGeo',
    description: 'Contact SylvaGeo to request product information, or to contact us about a project.',
    url: 'https://www.sylvageo.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
