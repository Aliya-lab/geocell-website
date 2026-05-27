'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SpecTable } from '@/components/ui/SpecTable'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { geocellProducts } from '@/data/geocell'

const subNavLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Applications', href: '#applications' },
  { label: 'Downloads', href: '#downloads' },
]

const downloadItems = [
  { name: 'Technical Data Sheet', format: 'PDF', size: '2.4 MB', href: '/downloads/technical-data-sheet.pdf' },
  { name: 'Test Reports', format: 'PDF', size: '1.8 MB', href: '/downloads/test-reports.pdf' },
  { name: 'CAD Drawings', format: 'DWG', size: '5.1 MB', href: '/downloads/cad-drawings.dwg' },
  { name: 'Installation Guide', format: 'PDF', size: '3.2 MB', href: '/downloads/installation-guide.pdf' },
]

function SubNav({ activeSection }: { activeSection: string }) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-slate-rock-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex overflow-x-auto gap-6 py-3 no-scrollbar">
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

export default function GeocellPage() {
  const [activeSection, setActiveSection] = useState('Overview')
  const [selectedModels, setSelectedModels] = useState<string[]>([])

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = ['overview', 'specifications', 'applications', 'downloads']
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

  const toggleModel = (id: string) => {
    setSelectedModels((prev) =>
      prev.includes(id)
        ? prev.filter((m) => m !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    )
  }

  const comparisonProducts = selectedModels.length >= 2
    ? geocellProducts.filter((p) => selectedModels.includes(p.id))
    : []

  return (
    <>
      {/* Page Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl font-heading font-bold text-white text-center">
            PCA Geocell Products
          </h1>
          <p className="text-slate-rock-200 text-center mt-3 max-w-xl mx-auto">
            Polymer Nano-Composite Alloy Geocell Systems — Four models engineered
            for diverse load and application requirements
          </p>
        </div>
      </div>

      <SubNav activeSection={activeSection} />

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        {/* Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8">
            Product Overview
          </h2>

          {/* Hero Image */}
          <div className="aspect-video rounded-card border border-slate-rock-50 overflow-hidden mb-10">
            <Image
              src="/images/product-hero.webp"
              alt="PCA Geocell Product Line"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 4 Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {geocellProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-rock-50 rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-rock-50">
                  <Image
                    src={`/images/product-type-${product.type.toLowerCase()}.webp`}
                    alt={`PCA Geocell Type ${product.type}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-eco-forest-800 text-white text-xs font-semibold px-3 py-1 rounded-tag">
                      Type {product.type}
                    </span>
                    <span className="text-xs text-slate-rock-400">
                      {product.heights[0]}
                      {product.heights.length > 1 ? `–${product.heights[product.heights.length - 1]}` : ''}
                      mm
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-slate-rock-700 text-sm mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-rock-500 mb-3 line-clamp-2">
                    {product.applications.slice(0, 2).join(', ')}
                  </p>
                  <a
                    href="#specifications"
                    className="text-eco-forest-800 text-xs font-medium hover:text-eco-forest-900 underline"
                  >
                    View Specs →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-heading font-bold text-slate-rock-700">
              Full Specifications
            </h2>
            <Button variant="secondary" onClick={() => {}} className="text-sm">
              Compare Models ({selectedModels.length}/3)
            </Button>
          </div>

          {/* Model Selector for Comparison */}
          <div className="bg-slate-rock-50 rounded-card p-4 mb-6 flex flex-wrap gap-3">
            <span className="text-sm font-medium text-slate-rock-600 self-center">Select models to compare:</span>
            {geocellProducts.map((p) => (
              <label key={p.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedModels.includes(p.id)}
                  onChange={() => toggleModel(p.id)}
                  disabled={!selectedModels.includes(p.id) && selectedModels.length >= 3}
                  className="w-4 h-4 accent-eco-forest-800"
                />
                <span className="text-sm text-slate-rock-700">Type {p.type}</span>
              </label>
            ))}
          </div>

          {comparisonProducts.length >= 2 ? (
            <div className="mb-8">
              <h3 className="text-lg font-heading font-semibold text-slate-rock-700 mb-4">
                Side-by-Side Comparison
              </h3>
              <SpecTable products={comparisonProducts} showAll />
            </div>
          ) : null}

          {/* Full comparison table */}
          <SpecTable products={geocellProducts} showAll />

          <p className="text-xs text-slate-rock-400 mt-3">
            Rows marked with green border are critical parameters for engineering evaluation.
          </p>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8">
            Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: 'A', apps: ['Slope Protection', 'Embankment Reinforcement', 'Green Roof', 'Garden Planter'], desc: 'Light to medium load, vegetation-friendly' },
              { type: 'B', apps: ['Road Subgrade', 'Retaining Wall Backfill', 'Channel Lining'], desc: 'Medium load, general infrastructure' },
              { type: 'C', apps: ['Heavy-duty Pavement', 'Channel Lining', 'Landfill Liner Protection'], desc: 'Heavy load, civil engineering' },
              { type: 'D', apps: ['Mining Haul Road', 'Landfill Liner Protection', 'Heavy-load Reinforcement'], desc: 'Ultra-heavy load, mining & industrial' },
            ].map((item) => (
              <div key={item.type} className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-eco-forest-800 text-white text-sm font-bold px-3 py-1 rounded-btn">
                    Type {item.type}
                  </span>
                  <span className="text-xs text-slate-rock-400">{item.desc}</span>
                </div>
                <ul className="space-y-1.5">
                  {item.apps.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-sm text-slate-rock-600">
                      <svg className="w-3.5 h-3.5 text-eco-forest-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-16 border-t border-slate-rock-100 scroll-mt-32">
          <h2 className="text-2xl font-heading font-bold text-slate-rock-700 mb-8">
            Download Center
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {downloadItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-rock-50 rounded-card shadow-card p-5 flex items-center gap-4 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200 cursor-pointer"
              >
                <div className="w-10 h-10 bg-eco-forest-50 rounded-btn flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-eco-forest-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-rock-700 truncate">{item.name}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs bg-slate-rock-100 text-slate-rock-500 px-2 py-0.5 rounded-tag font-data">
                      {item.format}
                    </span>
                    <span className="text-xs text-slate-rock-400 font-data">{item.size}</span>
                  </div>
                </div>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-rock-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
