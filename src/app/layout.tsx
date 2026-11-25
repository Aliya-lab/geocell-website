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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PX107W9NQP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PX107W9NQP');
            `,
          }}
        />
      </head>
      <body className="font-body bg-pearl-grey text-slate-rock-800">
        {/* Skip navigation link - WCAG 2.1 Level A */}
        <a
          href="#main-content"
          className="sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-eco-forest-800 focus:text-white focus:px-4 focus:py-2 focus:rounded-btn focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
