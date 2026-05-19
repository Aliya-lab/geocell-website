'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { SpecTable } from '@/components/ui/SpecTable'
import { Button } from '@/components/ui/Button'
import { geocellProducts } from '@/data/geocell'

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0)
  const product = geocellProducts[activeTab]

  return (
    <Section className="bg-white" id="products">
      <h2 className="text-3xl font-heading font-bold text-slate-rock-700 text-center mb-4">
        Product Specifications
      </h2>
      <p className="text-slate-rock-500 text-center mb-10 max-w-xl mx-auto">
        Explore our four PCA geocell models, engineered for varying load requirements
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image Placeholder */}
        <div className="aspect-[4/3] bg-slate-rock-50 rounded-card border border-slate-rock-50 flex flex-col items-center justify-center gap-3">
          <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-slate-rock-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-slate-rock-300 text-sm font-medium">Product Image</span>
          <span className="text-slate-rock-200 text-xs">PCA Geocell Type {product.type}</span>
        </div>

        {/* Right: Tabs + SpecTable */}
        <div>
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-6">
            {geocellProducts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-150 ${
                  activeTab === idx
                    ? 'bg-eco-forest-800 text-white rounded-btn'
                    : 'border border-slate-rock-300 text-slate-rock-600 rounded-btn hover:border-eco-forest-800 hover:text-eco-forest-800'
                }`}
              >
                Type {p.type}
              </button>
            ))}
          </div>

          {/* Spec Table */}
          <SpecTable products={[product]} />

          {/* Link */}
          <div className="mt-6">
            <Button variant="text" href="/products/geocell">
              View Full Specifications →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
