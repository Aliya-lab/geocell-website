import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us & Get a Quote',
  description: 'Contact SylvaGeo for technical consultation, product specifications, and project quotes. Response within 24 hours.',
  alternates: { canonical: 'https://www.sylvageo.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
