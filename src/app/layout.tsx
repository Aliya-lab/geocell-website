import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    default: 'SylvaGeo - Professional Geocell Solutions',
    template: '%s | SylvaGeo',
  },
  description: 'SylvaGeo provides engineering-grade PCA geocell solutions for slope protection, road reinforcement, and channel lining worldwide.',
  metadataBase: new URL('https://www.sylvageo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sylvageo.com',
    siteName: 'SylvaGeo',
    title: 'SylvaGeo - Professional Geocell Solutions',
    description: 'Engineering-grade PCA geocell solutions for slope protection, road reinforcement, and channel lining worldwide.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SylvaGeo PCA Geocell Solutions' }],
  },
  alternates: { canonical: 'https://www.sylvageo.com' },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-body bg-pearl-grey text-slate-rock-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
