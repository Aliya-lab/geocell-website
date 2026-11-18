import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection'
import { ConcreteBlanketEntrySection } from '@/components/sections/ConcreteBlanketEntrySection'
import { CasesPreviewSection } from '@/components/sections/CasesPreviewSection'
import { CTABannerSection } from '@/components/sections/CTABannerSection'

export const metadata: Metadata = {
  title: 'SylvaGeo - Professional Geocell Solutions',
  description: 'SylvaGeo is a B2B geosynthetics supplier serving international contractors, distributors, and project buyers with PCA geocell and Concrete Blanket (GCCM).',
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
            description: 'SylvaGeo is a geosynthetics supplier serving international contractors, distributors, and project buyers.',
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
      <ConcreteBlanketEntrySection />
      <CasesPreviewSection />
      <CTABannerSection />
    </>
  )
}
