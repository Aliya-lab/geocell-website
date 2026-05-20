import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Geocell slope protection on highway embankment"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark Overlay - brand color at 60% opacity */}
      <div className="absolute inset-0 bg-slate-rock-700/60" />

      <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-eco-forest-400" />
            <span className="text-eco-forest-400 text-sm font-medium tracking-widest uppercase">
              Engineering-Grade Solutions
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Engineering Ground Stability
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-rock-200 mt-4 max-w-xl leading-relaxed">
            Professional Geocell Solutions for Infrastructure and Ecology. PCA
            polymer nano-composite alloy technology for slope protection, road
            reinforcement, and channel lining.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="primary" href="/products/geocell" className="min-h-[48px] text-base px-8 py-3">
              View Products
            </Button>
            <Button
              variant="secondary"
              className="min-h-[48px] text-base px-8 py-3 border-white text-white hover:bg-white hover:text-slate-rock-700"
              href="/contact"
            >
              Download Catalog
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-slate-rock-600/50">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '50+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-white text-3xl">{stat.value}</div>
                <div className="text-slate-rock-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
