'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SpecTable } from '@/components/ui/SpecTable'
import { Button } from '@/components/ui/Button'
import { geocellProducts } from '@/data/geocell'

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const product = activeTab !== null ? geocellProducts[activeTab] : null

  return (
    <Section className="bg-white" id="products">
      <h2 className="text-3xl font-heading font-bold text-slate-rock-700 text-center mb-4">
        Product Specifications
      </h2>
      <p className="text-slate-rock-500 text-center mb-10 max-w-xl mx-auto">
        Explore our four PCA geocell models, engineered for varying load requirements
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image - enhanced with overlay + fade transition */}
        <div className="relative aspect-[4/3] rounded-card border border-slate-rock-100 overflow-hidden bg-slate-rock-50 shadow-card">
          {/* Base image: showcase panoramic or per-type photo */}
          <Image
            key={product ? product.type : 'showcase'}
            src={product ? `/images/product-type-${product.type.toLowerCase()}.webp` : '/images/product-showcase.webp'}
            alt={product ? `PCA Geocell Type ${product.type} product photo` : 'PCA Geocell Product Line'}
            width={960}
            height={720}
            priority
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Bottom gradient overlay with model badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-rock-900/75 to-transparent pt-10 pb-4 px-4">
            {product ? (
              <>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-eco-forest-800 text-white text-xs font-bold px-3 py-1 rounded-tag">
                    Type {product.type}
                  </span>
                  <span className="text-white text-sm font-medium truncate">
                    {product.name}
                  </span>
                </div>
                <div className="text-white/60 text-xs">
                  {product.applications.slice(0, 2).join(' / ')}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-xs">
                  Select a model below to view specifications
                </span>
              </div>
            )}
          </div>
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
          {product ? (
            <SpecTable products={[product]} />
          ) : (
            <div className="text-slate-rock-400 text-sm py-8 text-center border border-dashed border-slate-rock-200 rounded-card">
              Click a type above to view detailed specifications
            </div>
          )}

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
