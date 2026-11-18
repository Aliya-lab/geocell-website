import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { cbGrades, cbHeroImage, cbProduct } from '@/data/concreteBlanket'

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
            <div className="aspect-[16/9] bg-slate-rock-50 overflow-hidden">
              <Image
                src={cbHeroImage.src}
                alt={cbHeroImage.alt}
                width={cbHeroImage.width}
                height={cbHeroImage.height}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-medium tracking-widest uppercase text-eco-forest-800 mb-2">GCCM</p>
              <h2 className="font-heading font-bold text-2xl text-slate-rock-700">Concrete Blanket</h2>
              <p className="text-sm text-slate-rock-600 leading-relaxed mt-3">{cbProduct.standfirst}</p>
              <p className="text-sm text-slate-rock-500 mt-3">
                Standard uncoated grades:{' '}
                {cbGrades.map((grade) => `${grade.thickness} (${grade.mass})`).join(' · ')}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <Button variant="primary" href="/products/concrete-blanket">
                  View Concrete Blanket
                </Button>
                <Link
                  href="/downloads/GCCM_ConcreteBlanket_TechnicalDataSheet_Issue1.2.pdf"
                  className="text-sm text-eco-forest-800 font-medium hover:underline"
                >
                  Download data sheet
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
