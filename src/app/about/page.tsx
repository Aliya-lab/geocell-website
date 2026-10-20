import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About SylvaGeo',
  description: 'SylvaGeo is a B2B geosynthetics supplier serving international contractors, distributors, and project buyers with geocell and related geosynthetic products.',
  alternates: { canonical: 'https://www.sylvageo.com/about' },
  openGraph: {
    title: 'About SylvaGeo',
    description: 'B2B geosynthetics supplier for international contractors, distributors, and project buyers.',
    url: 'https://www.sylvageo.com/about',
  },
}

const docCategories = [
  { name: 'Concrete Fabric', detail: 'SGS test report available upon request' },
  { name: 'Geocell', detail: 'Technical datasheet available upon request' },
  { name: 'Geomembrane HDPE', detail: 'Material specifications available upon request' },
  { name: 'Geotextile', detail: 'Product datasheet available upon request' },
]

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">About Us</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            Geosynthetics supply and project support for international B2B buyers
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">
        {/* Company Introduction */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
                Engineering Stability, Building the Future
              </h2>
              <div className="space-y-4 text-slate-rock-500 text-sm leading-relaxed">
                <p>
                  SylvaGeo is a B2B geosynthetics supplier serving contractors, distributors, and project buyers in international markets. We supply geocell and related geosynthetic products under the SylvaGeo brand through partner manufacturing facilities.
                </p>
                <p>
                  Our role includes coordinating product requirements, documentation, sourcing, and commercial support with customers and manufacturing partners.
                </p>
                <p>
                  We support inquiries for ground stabilization, erosion control, road infrastructure, channel lining, and related civil applications.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-card border border-slate-rock-50 overflow-hidden">
              <Image
                src="/images/company-photo.webp"
                alt="Geosynthetics field application"
                width={720}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product Documentation */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8 text-center">
            Product Documentation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {docCategories.map((doc) => (
              <div
                key={doc.name}
                className="bg-white border border-slate-rock-50 rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-eco-forest-50 rounded-btn flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="font-heading font-semibold text-slate-rock-700">{doc.name}</div>
                <div className="text-xs text-slate-rock-400 font-data mt-1">{doc.detail}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
