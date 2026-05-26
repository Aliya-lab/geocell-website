import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering Case Studies',
  description: 'Real-world geocell engineering case studies across slope protection, road subgrade, channel lining, and mining applications worldwide.',
  alternates: { canonical: 'https://www.sylvageo.com/cases' },
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
