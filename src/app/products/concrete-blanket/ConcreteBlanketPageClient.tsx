'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { DraftNotice } from '@/components/ui/DraftNotice'
import {
  cbChannelIllustration,
  cbDataSheet,
  cbDownloads,
  cbEnquireHref,
  cbGallery,
  cbGalleryNote,
  cbInstallGuideHref,
  cbMechanicalRows,
  cbPage,
  cbPhysicalRows,
} from '@/data/concreteBlanket'

const subNavLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Uses', href: '#uses' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Installation', href: '#installation' },
  { label: 'Specifications', href: '#specifications' },
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
                activeSection === link.href
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
  const [activeSection, setActiveSection] = useState('#product')

  useEffect(() => {
    const sectionIds = subNavLinks.map((link) => link.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
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
      <div className="bg-slate-rock-50 border-b border-slate-rock-200">
        <div className="max-w-[1200px] mx-auto px-6 py-3 text-center">
          <DraftNotice />
        </div>
      </div>

      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-eco-forest-400 text-sm font-medium tracking-widest uppercase mb-3">
            GCCM
          </p>
          <h1 className="text-4xl font-heading font-bold text-white">{cbPage.title}</h1>
          <p className="text-slate-rock-200 mt-3">{cbPage.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={cbDataSheet.href}
              className="inline-flex items-center justify-center font-medium bg-eco-forest-800 text-white rounded-btn min-h-[48px] px-8 py-3 hover:bg-eco-forest-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-forest"
            >
              Download data sheet
            </a>
            <Button variant="secondary" href={cbEnquireHref} className="min-h-[48px] px-8 py-3 border-white text-white hover:bg-white hover:text-slate-rock-700">
              Enquire
            </Button>
          </div>
        </div>
      </div>

      <SubNav activeSection={activeSection} />

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <section id="product" className="py-16 scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-6">The product</h2>
              <div className="space-y-4 text-sm text-slate-rock-600 leading-relaxed">
                {cbPage.productParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <h3 className="text-xl font-heading font-semibold text-slate-rock-700 mt-12 mb-4">
                Standard construction
              </h3>
              <div className="space-y-4 text-sm text-slate-rock-600 leading-relaxed">
                <p>{cbPage.standardConstruction}</p>
                <p>
                  {cbPage.pvcBefore}
                  <Link href={cbEnquireHref} className="text-eco-forest-800 font-medium hover:underline">
                    {cbPage.pvcLink}
                  </Link>
                  {cbPage.pvcAfter}
                </p>
              </div>
            </div>

            <figure>
              <div className="aspect-[4/3] rounded-card border border-slate-rock-100 overflow-hidden bg-slate-rock-50">
                <Image
                  src={cbChannelIllustration.src}
                  alt={cbChannelIllustration.caption}
                  width={cbChannelIllustration.width}
                  height={cbChannelIllustration.height}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-slate-rock-600">{cbChannelIllustration.caption}</figcaption>
              <p className="mt-1 text-xs text-slate-rock-400 leading-relaxed">{cbGalleryNote}</p>
            </figure>
          </div>
        </section>

        <section id="uses" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">Typical uses</h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed">{cbPage.usesIntro}</p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-rock-600 leading-relaxed">
            {cbPage.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 text-sm text-slate-rock-600 leading-relaxed">
            {cbPage.useNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-slate-rock-700">Application photographs</h3>
              <p className="text-sm text-slate-rock-600 leading-relaxed">{cbGalleryNote}</p>
            </div>
            {cbGallery.map((group) => (
              <div key={group.caption}>
                <h3 className="font-heading font-semibold text-slate-rock-700 mb-4">{group.caption}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.photos.map((photo) => (
                    <figure
                      key={photo.src}
                      className="bg-white border border-slate-rock-50 rounded-card shadow-card overflow-hidden"
                    >
                      <div className="aspect-[4/3] bg-slate-rock-50">
                        <Image
                          src={photo.src}
                          alt={group.caption}
                          width={photo.width}
                          height={photo.height}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-sm text-slate-rock-600">{group.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="advantages" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-6">
            Application advantages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cbPage.advantages.map((item) => (
              <div key={item.title} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <h3 className="font-heading font-semibold text-slate-rock-700 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-rock-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-rock-600 leading-relaxedborder-l-[3px] border-l-eco-forest-800 pl-4">
            {cbPage.advantageFootnote}
          </p>
        </section>

        <section id="installation" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Installation in outline
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed mb-8">
            {cbPage.installationIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cbPage.installSteps.map((step) => (
              <div key={step.step} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <div className="text-xs font-data text-eco-forest-800 mb-2">Step {step.step}</div>
                <h3 className="font-heading font-semibold text-slate-rock-700 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-rock-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-rock-600 leading-relaxed">{cbPage.installationDetail}</p>
          <div className="mt-6">
            <a href={cbInstallGuideHref} className="text-eco-forest-800 hover:text-eco-forest-900 hover:underline font-medium">
              Download the installation guide
            </a>
          </div>
        </section>

        <section id="specifications" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">
            Key properties — standard uncoated range
          </h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed mb-8">
            {cbPage.propertiesIntro}
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
                      <td
                        key={valueIdx}
                        className="px-4 py-3 text-sm text-center font-data font-semibold text-slate-rock-800 whitespace-nowrap"
                      >
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
                  <tr key={row.property} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-rock-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-slate-rock-700">{row.property}</td>
                    <td className="px-4 py-3 text-sm text-slate-rock-600">{row.method}</td>
                    <td className="px-4 py-3 text-sm font-data text-slate-rock-600">{row.unit}</td>
                    <td className="px-4 py-3 text-sm font-data font-semibold text-slate-rock-900 whitespace-nowrap">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-slate-rock-600 leading-relaxed">{cbPage.propertiesNote}</p>

          <h3 className="text-lg font-heading font-semibold text-slate-rock-700 mt-12 mb-4">
            Reference specification
          </h3>
          <p className="text-sm text-slate-rock-600 leading-relaxed">{cbPage.referenceSpec}</p>
        </section>

        <section id="downloads" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-4">Downloads</h2>
          <p className="text-sm text-slate-rock-600 leading-relaxed mb-8">{cbPage.downloadsIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cbDownloads.map((item) => (
              <a
                key={item.id}
                id={`download-${item.id}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5 flex items-center gap-4 hover:border-eco-forest-200 hover:shadow-md transition-all group scroll-mt-32"
              >
                <div className="w-10 h-10 bg-eco-forest-50 rounded-btn flex items-center justify-center flex-shrink-0 group-hover:bg-eco-forest-100 transition-colors">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-700" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-rock-700 group-hover:text-eco-forest-800 transition-colors">
                    {item.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <span className="text-xs bg-slate-rock-100 text-slate-rock-500 px-2 py-0.5 rounded-tag font-data">
                      PDF
                    </span>
                    <span className="text-xs text-slate-rock-400">{item.issue}</span>
                  </div>
                </div>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-rock-400 group-hover:text-eco-forest-700 transition-colors flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-rock-500 leading-relaxed mt-6">{cbPage.downloadsNote}</p>
        </section>

        <section id="enquire" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <div className="bg-slate-rock-800 rounded-card px-6 py-10 md:px-10 text-center">
            <h2 className="text-2xl font-heading font-bold text-white">Enquire</h2>
            <p className="text-slate-rock-300 mt-3 max-w-xl mx-auto text-sm leading-relaxed">{cbPage.enquire}</p>
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
