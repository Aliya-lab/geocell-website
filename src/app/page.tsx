import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection'
import { CasesPreviewSection } from '@/components/sections/CasesPreviewSection'
import { CTABannerSection } from '@/components/sections/CTABannerSection'

export const metadata: Metadata = {
  title: 'SylvaGeo - Professional Geocell Solutions',
  description: 'SylvaGeo provides engineering-grade PCA geocell systems for slope protection, road reinforcement, and channel lining. Trusted by 200+ projects in 50+ countries.',
  alternates: { canonical: 'https://www.sylvageo.com' },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SylvaGeo',
            url: 'https://www.sylvageo.com',
            logo: 'https://www.sylvageo.com/favicon.ico',
            description: 'Professional PCA geocell manufacturer for slope protection, road reinforcement, and channel lining.',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-669-228-4383',
              contactType: 'sales',
              availableLanguage: ['English', 'Chinese'],
            },
          }),
        }}
      />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <CasesPreviewSection />
      <CTABannerSection />
    </>
  )
}
