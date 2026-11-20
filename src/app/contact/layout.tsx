import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Us — Enquiry | SylvaGeo',
  },
  description: 'Contact SylvaGeo to request product information, or to contact us about a project. Response within 24 hours.',
  alternates: { canonical: 'https://www.sylvageo.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
