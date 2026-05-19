import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ProductShowcaseSection } from '@/components/sections/ProductShowcaseSection'
import { CasesPreviewSection } from '@/components/sections/CasesPreviewSection'
import { CTABannerSection } from '@/components/sections/CTABannerSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <CasesPreviewSection />
      <CTABannerSection />
    </>
  )
}
