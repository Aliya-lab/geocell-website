import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { DraftNotice } from '@/components/ui/DraftNotice'
import { cbDataSheet, cbEnquireHref, cbHome } from '@/data/concreteBlanket'

export function ConcreteBlanketEntrySection() {
  return (
    <Section className="bg-white border-t border-slate-rock-100" id="concrete-blanket">
      <article className="max-w-3xl border border-slate-rock-100 rounded-card shadow-card p-6 md:p-8">
        <DraftNotice />
        <p className="text-eco-forest-800 text-sm font-medium tracking-widest uppercase mt-4 mb-3">
          GCCM
        </p>
        <h2 className="text-3xl font-heading font-bold text-slate-rock-700 mb-4">{cbHome.heading}</h2>
        <p className="text-slate-rock-600 text-sm leading-relaxed">{cbHome.standfirst}</p>
        <p className="text-slate-rock-600 text-sm leading-relaxed mt-3">{cbHome.range}</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
          <Button variant="primary" href="/products/concrete-blanket">
            View Concrete Blanket
          </Button>
          <a
            href={cbDataSheet.href}
            className="inline-flex items-center justify-center font-medium border-2 border-slate-rock-700 text-slate-rock-700 rounded-btn px-6 py-3 hover:bg-slate-rock-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-rock-500"
          >
            Download data sheet
          </a>
          <Button variant="text" href={cbEnquireHref}>
            Enquire
          </Button>
        </div>
      </article>
    </Section>
  )
}
