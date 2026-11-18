'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import {
  cbAdvantages,
  cbDownloads,
  cbEnquireHref,
  cbGallery,
  cbGrades,
  cbHeroImage,
  cbInstallSteps,
  cbMechanicalRows,
  cbPhysicalRows,
  cbProduct,
  cbTypicalUses,
} from '@/data/concreteBlanket'

const subNavLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Applications', href: '#applications' },
  { label: 'Installation', href: '#installation' },
  { label: 'Downloads', href: '#downloads' },
]

function SubNav({ activeSection }: { activeSection: string }) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-slate-rock-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex overflow-x-auto gap-6 py-3">
          {subNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap pb-1 border-b-2 transition-colors duration-150 ${
                activeSection === link.label
                  ? 'text-eco-forest-800 border-eco-forest-800'
                  : 'text-slate-rock-500 border-transparent hover:text-slate-rock-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ConcreteBlanketPageClient() {
  const [activeSection, setActiveSection] = useState('Overview')

  useEffect(() => {
    const sectionIds = ['overview', 'specifications', 'applications', 'installation', 'downloads']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1))
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-eco-forest-400 text-sm font-medium tracking-widest uppercase text-center mb-3">
            GCCM · CB 6 / 10 / 15 mm
          </p>
          <h1 className="text-4xl font-heading font-bold text-white text-center">
            Concrete Blanket
          </h1>
          <p className="text-slate-rock-200 text-center mt-3 max-w-2xl mx-auto">
            Standard uncoated geosynthetic cementitious composite mat. Also called Cement Blanket.
          </p>
        </div>
      </div>

      <SubNav activeSection={activeSection} />

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <section id="overview" className="py-16 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-6">
            Product overview
          </h2>

          <div className="aspect-[21/9] rounded-card border border-slate-rock-50 overflow-hidden mb-8 bg-slate-rock-50">
            <Image
              src={cbHeroImage.src}
              alt={cbHeroImage.alt}
              width={cbHeroImage.width}
              height={cbHeroImage.height}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-3xl space-y-4 text-sm text-slate-rock-600 leading-relaxed">
            <p>{cbProduct.standfirst}</p>
            <p>{cbProduct.alsoCalledNote}</p>
            <p>{cbProduct.construction}</p>
            <p>{cbProduct.pvc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {cbGrades.map((grade) => (
              <div
                key={grade.id}
                className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5"
              >
                <div className="text-xs font-medium tracking-wide uppercase text-eco-forest-800 mb-2">
                  Standard grade
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-rock-700">{grade.thickness}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-rock-500">Mass per unit area</dt>
                    <dd className="font-data text-slate-rock-800">{grade.mass}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-rock-500">Typical bulk roll</dt>
                    <dd className="font-data text-slate-rock-800">{grade.bulkRoll}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-rock-500">Roll area</dt>
                    <dd className="font-data text-slate-rock-800">{grade.area}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-rock-500">Typical dry roll mass</dt>
                    <dd className="font-data text-slate-rock-800">{grade.dryRollMass}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-rock-400 mt-3">{cbProduct.rollMassNote}</p>

          <h3 className="text-xl font-heading font-semibold text-slate-rock-700 mt-14 mb-4">
            Application advantages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cbAdvantages.map((item) => (
              <div key={item.title} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <h4 className="font-heading font-semibold text-slate-rock-700 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-rock-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-rock-600 leading-relaxed border-l-[3px] border-l-eco-forest-800 pl-4">
            <p>{cbProduct.applicationDisclaimer}</p>
            <p>{cbProduct.rapidSetNote}</p>
            <p>
              On the data sheet, compressive strength of the cementitious mix is greater than 40 MPa
              (ASTM D8329, 28 days). That figure is the strength of the mix, not a compressive test on a
              cut specimen of the hardened mat. Flexural strength is greater than 10 MPa (ASTM D8058, MD and CD).
            </p>
          </div>
        </section>

        <section id="specifications" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Specifications
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-8">
            {cbProduct.specScope}
          </p>

          <h3 className="text-lg font-heading font-semibold text-slate-rock-700 mb-4">
            Physical properties
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-rock-700">
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Property</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Test method</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Unit</th>
                  <th className="text-center text-white font-heading font-bold text-sm px-4 py-3">6 mm</th>
                  <th className="text-center text-white font-heading font-bold text-sm px-4 py-3">10 mm</th>
                  <th className="text-center text-white font-heading font-bold text-sm px-4 py-3">15 mm</th>
                </tr>
              </thead>
              <tbody>
                {cbPhysicalRows.map((row, idx) => (
                  <tr key={row.property} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-slate-rock-700">{row.property}</td>
                    <td className="px-4 py-3 text-sm text-slate-rock-600">{row.method}</td>
                    <td className="px-4 py-3 text-sm font-data text-slate-rock-600">{row.unit}</td>
                    {row.values.map((value, valueIdx) => (
                      <td key={valueIdx} className="px-4 py-3 text-sm text-center font-data font-semibold text-slate-rock-800">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-heading font-semibold text-slate-rock-700 mb-4">
            Mechanical performance — typical values
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-rock-700">
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Property</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Test method</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Unit</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Typical value</th>
                </tr>
              </thead>
              <tbody>
                {cbMechanicalRows.map((row, idx) => (
                  <tr
                    key={row.property}
                    className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'} ${
                      idx === 0 ? 'border-l-[3px] border-l-eco-forest-800' : ''
                    }`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-slate-rock-700">{row.property}</td>
                    <td className="px-4 py-3 text-sm text-slate-rock-600">{row.method}</td>
                    <td className="px-4 py-3 text-sm font-data text-slate-rock-600">{row.unit}</td>
                    <td className="px-4 py-3 text-sm font-data font-semibold text-slate-rock-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-rock-600 leading-relaxed max-w-3xl">
            <p>{cbProduct.compressiveNote}</p>
            <p>{cbProduct.specReference}</p>
            <p>{cbProduct.toleranceNote} {cbProduct.rollMassNote}</p>
            <p>{cbProduct.typicalValuesNote}</p>
            <p>
              The standard data sheet applies only to the uncoated product, with a textile facing on both
              sides and no membrane. PVC-backed types are available to order and are described separately.
            </p>
          </div>
        </section>

        <section id="applications" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Typical uses
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-8">
            GCCM materials of this type are used where a thin, rapidly placed concrete layer is required.{' '}
            {cbProduct.suitability}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {cbTypicalUses.map((use) => (
              <div key={use.title} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <h3 className="font-heading font-semibold text-slate-rock-700 mb-2">{use.title}</h3>
                <p className="text-sm text-slate-rock-600 leading-relaxed">{use.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-12">
            <p>{cbProduct.notStructural}</p>
            <p>{cbProduct.limits}</p>
          </div>

          <h3 className="text-xl font-heading font-semibold text-slate-rock-700 mb-3">
            Application photographs
          </h3>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-8">
            Photographs are grouped by use. They are not project case studies: no project name, area, date,
            or client is shown. Thickness is labelled only where the photograph records it. Other photographs
            are not assigned a 6 mm or 15 mm grade. The standard catalogue remains 6 / 10 / 15 mm, as listed
            in the specification table.
          </p>

          <div className="space-y-12">
            {cbGallery.map((group) => (
              <div key={group.id}>
                <h4 className="font-heading font-semibold text-slate-rock-700 mb-4">{group.title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.photos.map((photo) => (
                    <figure
                      key={photo.src}
                      className="bg-white border border-slate-rock-50 rounded-card shadow-card overflow-hidden"
                    >
                      <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] bg-slate-rock-50">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className="w-full h-full object-cover"
                        />
                      </a>
                      <figcaption className="px-4 py-3 text-sm text-slate-rock-600 flex items-center justify-between gap-3">
                        <span>{photo.caption}</span>
                        {photo.thickness ? (
                          <span className="text-xs font-data bg-eco-forest-50 text-eco-forest-800 px-2 py-0.5 rounded-tag whitespace-nowrap">
                            {photo.thickness}
                          </span>
                        ) : null}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="installation" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Installation in outline
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-8">
            The usual sequence for the standard uncoated range is to cut the dry material, place it, form
            overlaps, and hydrate it with water. Full procedure, fixing, weather precautions and accessories
            are given in the installation guide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {cbInstallSteps.map((step) => (
              <div key={step.step} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <div className="text-xs font-data text-eco-forest-800 mb-2">Step {step.step}</div>
                <h3 className="font-heading font-semibold text-slate-rock-700 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-rock-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-heading font-semibold text-slate-rock-700 mb-4">
            Minimum hydration water
          </h3>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-4">
            The minimum quantity of water is 50% of the dry mass of the blanket, a water-to-blanket mass
            ratio of 1:2. An excess of water is recommended. Fresh water or seawater may be used.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-slate-rock-700">
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Thickness</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Dry mass per unit area</th>
                  <th className="text-left text-white font-heading font-bold text-sm px-4 py-3">Minimum water (50% of dry mass)</th>
                </tr>
              </thead>
              <tbody>
                {cbGrades.map((grade, idx) => (
                  <tr key={grade.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-slate-rock-700">{grade.thickness}</td>
                    <td className="px-4 py-3 text-sm font-data text-slate-rock-800">{grade.mass}</td>
                    <td className="px-4 py-3 text-sm font-data font-semibold text-slate-rock-900">{grade.minWater}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-2 text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-4">
            <li>The standard overlap is a minimum of 100 mm.</li>
            <li>After hydration the material is typically workable for 1–2 hours, varying with air temperature and humidity.</li>
            <li>It is typically ready for service after 24 hours. Wait at least 48 hours before aggressive surface treatment.</li>
            <li>A minimum anchor trench of 150 mm × 150 mm is used in ordinary conditions. The designer may require a larger trench.</li>
            <li>
              In drying conditions — air temperature above 22 °C, wind faster than 12 km/h, relative humidity
              below 70%, or strong direct sunlight — re-spray during the first 5 hours, as described in the
              installation guide.
            </li>
            <li>
              When the packaging remains unopened and the product is stored in a ventilated warehouse or other
              dry location, away from direct sunlight, the shelf life is 6 months from the date of manufacture.
              After this period the product may still be used, but setting time and performance will change
              with storage time.
            </li>
          </ul>
          <p className="text-sm text-slate-rock-500 leading-relaxed max-w-3xl">{cbProduct.installationDisclaimer}</p>
          <div className="mt-6">
            <Button variant="text" href="/downloads/GCCM_ConcreteBlanket_InstallationGuide_Issue1.1.pdf">
              Download the installation guide →
            </Button>
          </div>
        </section>

        <section id="downloads" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Downloads
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed max-w-3xl mb-8">
            Current official documents for standard uncoated Concrete Blanket, 6 / 10 / 15 mm. Specified
            values and installation are those given in these documents, not in website summaries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cbDownloads.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5 flex items-center gap-4 hover:border-eco-forest-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-eco-forest-50 rounded-btn flex items-center justify-center flex-shrink-0 group-hover:bg-eco-forest-100 transition-colors">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-700" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-rock-700 truncate group-hover:text-eco-forest-800 transition-colors">
                    {item.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <span className="text-xs bg-slate-rock-100 text-slate-rock-500 px-2 py-0.5 rounded-tag font-data">
                      PDF
                    </span>
                    <span className="text-xs text-slate-rock-400">{item.issue} · {item.date}</span>
                    <span className="text-xs text-slate-rock-400">{item.size}</span>
                  </div>
                </div>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-rock-400 group-hover:text-eco-forest-700 transition-colors flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-rock-500 leading-relaxed max-w-3xl mt-6">{cbProduct.commercial}</p>
        </section>

        <section className="py-16 border-t border-slate-rock-100">
          <div className="bg-slate-rock-800 rounded-card px-6 py-10 md:px-10 text-center">
            <h2 className="text-2xl font-heading font-bold text-white">Have a project to discuss?</h2>
            <p className="text-slate-rock-300 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              {cbProduct.commercial}
            </p>
            <p className="text-slate-rock-300 mt-4 text-sm">
              <a href="mailto:info@sylvageo.com" className="hover:text-eco-forest-400">info@sylvageo.com</a>
              <span className="mx-2 text-slate-rock-500">·</span>
              <a href="tel:+16692284383" className="hover:text-eco-forest-400">+1 6692284383</a>
              <span className="mx-2 text-slate-rock-500">·</span>
              <a href="https://wa.me/16692284383" className="hover:text-eco-forest-400">WhatsApp</a>
            </p>
            <div className="mt-6">
              <Button variant="primary" href={cbEnquireHref} className="min-h-[48px] px-8 py-3">
                Contact us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
