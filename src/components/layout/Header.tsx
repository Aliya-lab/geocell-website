'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Products', href: '/products/geocell' },
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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-eco-forest-400 rounded-full group-hover:bg-eco-forest-300 transition-colors" />
              <span className="font-heading font-bold text-white text-lg tracking-wide">
                SYLVAGEO
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
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
                Get Quote
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
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
