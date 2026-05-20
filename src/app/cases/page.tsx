'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CaseCard } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { cases } from '@/data/cases'
import { applicationCategories } from '@/data/applications'

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)

  const filtered = activeCategory === 'All'
    ? cases
    : cases.filter((c) => c.category === activeCategory)

  return (
    <>
      {/* Page Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Engineering Cases</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            Proven geocell solutions across diverse infrastructure projects
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {applicationCategories.map((cat) => (
            <Tag
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Tag>
          ))}
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CaseCard key={c.id} caseItem={c} onClick={() => setSelectedCase(c)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-rock-400">
            No cases found for this category.
          </div>
        )}
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white rounded-card shadow-card-hover max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="aspect-video bg-slate-rock-100 rounded-t-card overflow-hidden">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Tag active>{selectedCase.category}</Tag>
                <span className="text-xs text-slate-rock-400">
                  {selectedCase.location} · {selectedCase.year}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl text-slate-rock-700 mb-3">
                {selectedCase.title}
              </h2>
              <p className="text-slate-rock-500 text-sm leading-relaxed mb-4">
                {selectedCase.description}
              </p>
              <div className="bg-slate-rock-50 rounded-btn p-3 text-sm">
                <span className="font-medium text-slate-rock-600">Product Used: </span>
                <span className="text-eco-forest-800 font-medium">{selectedCase.productUsed}</span>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="mt-4 w-full py-2 border border-slate-rock-200 text-slate-rock-600 rounded-btn text-sm hover:bg-slate-rock-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
