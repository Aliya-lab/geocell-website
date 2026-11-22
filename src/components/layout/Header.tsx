'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const productLinks = [
  { label: 'PCA Geocell', href: '/products/geocell' },
  { label: 'Concrete Blanket (GCCM)', href: '/products/concrete-blanket' },
]

const navLinks = [
  { label: 'Cases', href: '/cases' },
  { label: 'Tech Specs', href: '/products/geocell#specifications' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-slate-rock-700 border-b border-slate-rock-600 transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg width="28" height="28" viewBox="0 0 100 100" className="flex-shrink-0" aria-hidden="true">
                <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="#2E7D32" />
                <ellipse cx="50" cy="50" rx="18" ry="23" fill="#37474F" />
              </svg>
              <span className="font-heading font-bold text-white text-lg tracking-wide">
                SYLVAGEO
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <Link
                  href="/products"
                  className="text-white text-sm font-medium hover:text-eco-forest-400 transition-colors duration-150 inline-flex items-center gap-1"
                >
                  Products
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-0 top-full pt-2 z-50">
                  <div className="bg-slate-rock-800 border border-slate-rock-600 min-w-[260px] py-2 shadow-md">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-white hover:text-eco-forest-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-eco-forest-400 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" href="/contact" className="text-sm px-4 py-2">
                Enquire
              </Button>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-eco-forest"
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="w-72 bg-slate-rock-800 h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-rock-600">
              <span className="font-heading font-bold text-white text-lg">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-slate-rock-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-eco-forest p-1"
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-4">
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="text-white text-base font-medium hover:text-eco-forest-400 transition-colors py-2"
              >
                Products
              </Link>
              <div className="flex flex-col gap-1 pl-3 border-l border-slate-rock-600">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-rock-200 text-sm font-medium hover:text-eco-forest-400 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-base font-medium hover:text-eco-forest-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-rock-600">
                <Button variant="primary" href="/contact" fullWidth>
                  Enquire
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
