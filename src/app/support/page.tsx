'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { geocellProducts } from '@/data/geocell'

const faqs = [
  {
    q: 'What is the typical installation temperature range?',
    a: 'PCA geocell can be installed in temperatures from -20°C to +60°C. The polymer material maintains structural integrity across this range without degradation.',
  },
  {
    q: 'What soil conditions is geocell suitable for?',
    a: 'Geocell works on most soil types including clay, silt, sand, and gravel. For soft subgrade (CBR < 3), additional stabilization or geotextile may be required.',
  },
  {
    q: 'How long does installation take?',
    a: 'Installation rate is approximately 200–400 m² per crew per day depending on site conditions, cell depth, and project complexity.',
  },
  {
    q: 'Can geocell be filled with vegetation?',
    a: 'Yes. Type A geocell is specifically designed for vegetated applications. Fill with topsoil and seed to establish grass or ground cover within the cells.',
  },
  {
    q: 'What is the design service life?',
    a: 'Under normal conditions, PCA geocell has a design service life of 50+ years. UV stabilizers are included to resist environmental aging.',
  },
  {
    q: 'Is CAD drawing available for all models?',
    a: 'Yes. CAD drawings in DWG format are available for all four geocell models. Contact us to request the drawing package.',
  },
  {
    q: 'Does geocell require maintenance?',
    a: 'Once properly installed, geocell requires minimal maintenance. Periodic inspection for erosion, vegetation condition, and anchor integrity is recommended.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQ varies by model. Contact our sales team for specific MOQ requirements and pricing for your project volume.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-slate-rock-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
      >
        <span className={`font-heading font-semibold text-base transition-colors duration-150 pr-4 ${
          open ? 'text-eco-forest-800' : 'text-slate-rock-700 group-hover:text-slate-rock-800'
        }`}>
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-slate-rock-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-sm text-slate-rock-500 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

function SelectionWizard() {
  const [step, setStep] = useState(1)
  const [app, setApp] = useState('')
  const [load, setLoad] = useState('')
  const [soil, setSoil] = useState('')

  const apps = ['Slope Protection', 'Road Subgrade', 'Channel Lining', 'Retaining Wall', 'Mining']
  const loads = ['Light (< 50 kPa)', 'Medium (50–150 kPa)', 'Heavy (> 150 kPa)']
  const soils = ['Firm (CBR > 6)', 'Medium (CBR 3–6)', 'Soft (CBR < 3)']

  const recommendation = (() => {
    if (app === 'Slope Protection') return geocellProducts.find((p) => p.type === 'A')
    if (app === 'Mining') return geocellProducts.find((p) => p.type === 'D')
    if (load === 'Heavy (> 150 kPa)') return geocellProducts.find((p) => p.type === 'C')
    return geocellProducts.find((p) => p.type === 'B')
  })()

  const reset = () => { setStep(1); setApp(''); setLoad(''); setSoil('') }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= s ? 'bg-eco-forest-800 text-white' : 'bg-slate-rock-100 text-slate-rock-400'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-eco-forest-800' : 'bg-slate-rock-100'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 className="font-heading font-semibold text-lg text-slate-rock-700 mb-1">Step 1: Application</h3>
          <p className="text-slate-rock-400 text-sm mb-4">What is the primary application?</p>
          <div className="grid grid-cols-1 gap-2">
            {apps.map((a) => (
              <button key={a} onClick={() => { setApp(a); setStep(2) }}
                className="text-left px-4 py-3 border border-slate-rock-200 rounded-btn text-sm text-slate-rock-700 hover:border-eco-forest-800 hover:text-eco-forest-800 transition-colors">
                {a}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 className="font-heading font-semibold text-lg text-slate-rock-700 mb-1">Step 2: Load</h3>
          <p className="text-slate-rock-400 text-sm mb-4">What is the expected load requirement?</p>
          <div className="grid grid-cols-1 gap-2">
            {loads.map((l) => (
              <button key={l} onClick={() => { setLoad(l); setStep(3) }}
                className="text-left px-4 py-3 border border-slate-rock-200 rounded-btn text-sm text-slate-rock-700 hover:border-eco-forest-800 hover:text-eco-forest-800 transition-colors">
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="mt-3 text-xs text-slate-rock-400 hover:text-slate-rock-600">← Back</button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h3 className="font-heading font-semibold text-lg text-slate-rock-700 mb-1">Step 3: Soil</h3>
          <p className="text-slate-rock-400 text-sm mb-4">What is the soil condition?</p>
          <div className="grid grid-cols-1 gap-2">
            {soils.map((s) => (
              <button key={s} onClick={() => { setSoil(s); setStep(4) }}
                className="text-left px-4 py-3 border border-slate-rock-200 rounded-btn text-sm text-slate-rock-700 hover:border-eco-forest-800 hover:text-eco-forest-800 transition-colors">
                {s}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-3 text-xs text-slate-rock-400 hover:text-slate-rock-600">← Back</button>
        </div>
      )}

      {/* Result */}
      {step === 4 && recommendation && (
        <div className="bg-white border border-slate-rock-50 rounded-card shadow-card p-6">
          <h3 className="font-heading font-semibold text-lg text-slate-rock-700 mb-1">Recommended Model</h3>
          <div className="bg-eco-forest-50 rounded-btn px-4 py-2 text-sm font-medium text-eco-forest-800 mb-4">
            {recommendation.name}
          </div>
          <div className="space-y-2 text-sm text-slate-rock-600">
            <div className="flex justify-between">
              <span>Tensile Strength:</span>
              <span className="font-data font-semibold">{recommendation.tensileStrength}</span>
            </div>
            <div className="flex justify-between">
              <span>Weld Strength:</span>
              <span className="font-data font-semibold">{recommendation.weldStrength}</span>
            </div>
            <div className="flex justify-between">
              <span>Cell Height:</span>
              <span className="font-data font-semibold">{recommendation.heights.join(', ')} mm</span>
            </div>
          </div>
          <Button variant="primary" href="/contact" fullWidth className="mt-4">
            Request Quotation
          </Button>
          <button onClick={reset} className="mt-3 w-full text-xs text-slate-rock-400 hover:text-slate-rock-600 py-1">
            Start Over
          </button>
        </div>
      )}
    </div>
  )
}

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Technical Support</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            Expert guidance for product selection and installation
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">
        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                q={faq.q}
                a={faq.a}
                open={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        {/* Selection Wizard */}
        <section className="bg-pearl-grey rounded-card p-8 md:p-12">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-2 text-center">
            Product Selection Guide
          </h2>
          <p className="text-slate-rock-500 text-center mb-10">
            Answer 3 questions to get a model recommendation
          </p>
          <SelectionWizard />
        </section>

        {/* Installation Steps */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8 text-center">
            Installation Process
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              { step: 1, title: 'Site Preparation', desc: 'Clear and grade the subgrade to the design elevation. Ensure uniform compaction and correct moisture content.' },
              { step: 2, title: 'Geocell Panel Expansion', desc: 'Expand the geocell panel accordion-style. Anchor the leading edge with anchors or stakes at specified intervals.' },
              { step: 3, title: 'Cell Anchoring', desc: 'Insert anchors through pre-punched slots into the subgrade. Typical spacing is 1–2 m depending on slope angle.' },
              { step: 4, title: 'Cell Infill', desc: 'Fill cells with approved fill material (soil, aggregate, or concrete). Compact to specified density.' },
              { step: 5, title: 'Final Inspection', desc: 'Verify cell alignment, infill levels, and anchorage. Check for any surface irregularities before handover.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-eco-forest-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-heading font-semibold text-slate-rock-700">{item.title}</h3>
                  <p className="text-sm text-slate-rock-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
