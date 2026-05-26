import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Support & FAQ',
  description: 'SylvaGeo technical support, product selection guide, and frequently asked questions about PCA geocell installation and specifications.',
  alternates: { canonical: 'https://www.sylvageo.com/support' },
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
