import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { cbEnquireHref, cbGrades, cbHeroImage, cbProduct } from '@/data/concreteBlanket'

export function ConcreteBlanketEntrySection() {
  return (
    <Section className="bg-white border-t border-slate-rock-100" id="concrete-blanket">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[16/10] rounded-card border border-slate-rock-100 overflow-hidden bg-slate-rock-50 shadow-card">
          <Image
            src={cbHeroImage.src}
            alt={cbHeroImage.alt}
            width={cbHeroImage.width}
            height={cbHeroImage.height}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-eco-forest-800 text-sm font-medium tracking-widest uppercase mb-3">
            GCCM
          </p>
          <h2 className="text-3xl font-heading font-bold text-slate-rock-700 mb-4">
            Concrete Blanket
          </h2>
          <p className="text-slate-rock-600 text-sm leading-relaxed">{cbProduct.standfirst}</p>
          <p className="text-slate-rock-500 text-sm leading-relaxed mt-3">{cbProduct.alsoCalledNote}</p>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {cbGrades.map((grade) => (
              <div key={grade.id} className="border border-slate-rock-100 rounded-card px-3 py-3">
                <div className="font-heading font-semibold text-slate-rock-700">{grade.thickness}</div>
                <div className="font-data text-xs text-slate-rock-500 mt-1">{grade.mass}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-rock-400 mt-3">
            Standard uncoated range. Full values are in the technical data sheet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="primary" href="/products/concrete-blanket">
              View Concrete Blanket
            </Button>
            <Button variant="secondary" href={cbEnquireHref}>
              Enquire
            </Button>
          </div>
          <div className="mt-4">
            <Link
              href="/downloads/GCCM_ConcreteBlanket_TechnicalDataSheet_Issue1.2.pdf"
              className="text-sm text-eco-forest-800 font-medium hover:underline"
            >
              Download data sheet →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
