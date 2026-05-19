import { Section } from '@/components/ui/Section'
import { CaseCard } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cases } from '@/data/cases'

export function CasesPreviewSection() {
  const preview = cases.slice(0, 3)

  return (
    <Section className="bg-pearl-grey" id="cases">
      <h2 className="text-3xl font-heading font-bold text-slate-rock-700 text-center mb-4">
        Engineering Cases
      </h2>
      <p className="text-slate-rock-500 text-center mb-12 max-w-xl mx-auto">
        Proven solutions across diverse infrastructure projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {preview.map((c) => (
          <CaseCard key={c.id} caseItem={c} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="text" href="/cases">
          View All Cases →
        </Button>
      </div>
    </Section>
  )
}
