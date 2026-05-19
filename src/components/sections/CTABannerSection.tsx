import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function CTABannerSection() {
  return (
    <Section dark className="text-center">
      <h2 className="text-3xl font-heading font-bold text-white">
        Ready to Start Your Project?
      </h2>
      <p className="text-slate-rock-300 mt-3 max-w-lg mx-auto">
        Get a customized geocell solution for your engineering challenge. Our team
        provides technical consultation and project-specific recommendations.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/contact" className="min-h-[48px] px-8 py-3 text-base">
          Get a Quote
        </Button>
      </div>
    </Section>
  )
}
