import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { DraftNoticeBar } from '@/components/ui/DraftNotice'
import { cbHome } from '@/data/concreteBlanket'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'SylvaGeo products: PCA Geocell for ground stabilization, and Concrete Blanket (GCCM), a geosynthetic cementitious composite mat in 6 mm, 10 mm and 15 mm.',
  alternates: { canonical: 'https://www.sylvageo.com/products' },
  openGraph: {
    title: 'Products | SylvaGeo',
    description:
      'PCA Geocell and Concrete Blanket (GCCM) for infrastructure, ground stabilization, and erosion control.',
    url: 'https://www.sylvageo.com/products',
  },
}

export default function ProductsPage() {
  return (
    <>
      <DraftNoticeBar />
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Products</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            PCA Geocell and Concrete Blanket, supplied for international project buyers
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="bg-white border border-slate-rock-50 rounded-card shadow-card overflow-hidden flex flex-col">
            <div className="aspect-[16/9] bg-slate-rock-50 overflow-hidden">
              <Image
                src="/images/product-showcase.webp"
                alt="PCA Geocell product line"
                width={960}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-medium tracking-widest uppercase text-eco-forest-800 mb-2">Geocell</p>
              <h2 className="font-heading font-bold text-2xl text-slate-rock-700">PCA Geocell</h2>
              <p className="text-sm text-slate-rock-600 leading-relaxed mt-3">
                Polymer nano-composite alloy geocell for slope protection, road reinforcement, and channel
                lining. Four models, Type A, B, C and D.
              </p>
              <div className="mt-6">
                <Button variant="primary" href="/products/geocell">
                  View PCA Geocell
                </Button>
              </div>
            </div>
          </article>

          <article className="bg-white border border-slate-rock-50 rounded-card shadow-card overflow-hidden flex flex-col">
            <div className="aspect-[16/9] bg-slate-rock-700 flex items-center justify-center px-6">
              <div className="text-center">
                <p className="text-eco-forest-400 text-xs font-medium tracking-widest uppercase">GCCM</p>
                <p className="text-white font-heading font-bold text-3xl mt-2">6 / 10 / 15 mm</p>
                <p className="text-slate-rock-300 text-sm mt-2">Standard uncoated supply</p>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-medium tracking-widest uppercase text-eco-forest-800 mb-2">GCCM</p>
              <h2 className="font-heading font-bold text-2xl text-slate-rock-700">{cbHome.heading}</h2>
              <p className="text-sm text-slate-rock-600 leading-relaxed mt-3">{cbHome.standfirst}</p>
              <p className="text-sm text-slate-rock-600 leading-relaxed mt-3">{cbHome.range}</p>
              <div className="mt-6">
                <Button variant="primary" href="/products/concrete-blanket">
                  View Concrete Blanket
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
