import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Geocell - Professional Honeycomb Confinement System',
  description: 'Engineering-grade geocell solutions for slope protection, road reinforcement, and channel lining.',
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
