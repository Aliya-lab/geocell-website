import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About SylvaGeo',
  description: 'Learn about SylvaGeo - professional PCA geocell manufacturer since 2010. 200+ engineering projects worldwide.',
  alternates: { canonical: 'https://www.sylvageo.com/about' },
  openGraph: {
    title: 'About SylvaGeo',
    description: 'Learn about SylvaGeo - professional PCA geocell manufacturer since 2010.',
    url: 'https://www.sylvageo.com/about',
  },
}

const milestones = [
  { year: '2010', event: 'Company founded in Beijing, China' },
  { year: '2012', event: 'First PCA geocell product line launched' },
  { year: '2015', event: 'Achieved ISO 9001 and ISO 14001 certification' },
  { year: '2018', event: 'Expanded to 30+ countries globally' },
  { year: '2020', event: 'Launched Type D heavy-load geocell series' },
  { year: '2023', event: '200th project milestone completed' },
  { year: '2025', event: 'New manufacturing facility in northern China' },
]

const certifications = [
  { name: 'ISO 9001', number: 'Quality Management' },
  { name: 'ISO 14001', number: 'Environmental Management' },
  { name: 'CE Marking', number: 'EU Conformity' },
  { name: 'CQC Certificate', number: 'China Quality Certification' },
]

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">About Us</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            Professional geocell manufacturer with 15+ years of engineering excellence
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
                  SylvaGeo is a professional manufacturer specializing in Polymer Nano-Composite
                  Alloy (PCA) geocell systems for civil engineering and environmental
                  protection applications. Founded in 2010, we have served over 200
                  infrastructure projects across more than 30 countries.
                </p>
                <p>
                  Our PCA geocell products are engineered with proprietary polymer technology
                  that delivers superior tensile strength, UV resistance, and long-term
                  durability compared to conventional HDPE geocells. Every product undergoes
                  rigorous quality testing to ensure consistent performance in demanding
                  field conditions.
                </p>
                <p>
                  We work closely with engineering consultants, contractors, and government
                  agencies to deliver customized solutions for slope protection, road
                  reinforcement, channel lining, and mining applications.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-card border border-slate-rock-50 overflow-hidden">
              <Image
                src="/images/company-photo.webp"
                alt="Manufacturing facility"
                width={720}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8 text-center">
            Company Milestones
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-6 border-l-2 border-eco-forest-800 space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[22px] w-3 h-3 bg-eco-forest-800 rounded-full" />
                  <span className="font-heading font-bold text-eco-forest-800 text-base">
                    {m.year}
                  </span>
                  <p className="text-slate-rock-600 text-sm mt-1 leading-relaxed">
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white border border-slate-rock-50 rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-eco-forest-50 rounded-btn flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-heading font-semibold text-slate-rock-700">{cert.name}</div>
                <div className="text-xs text-slate-rock-400 font-data mt-1">{cert.number}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
