'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'

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

// Exact archived S0 SVG asset, unchanged bytes: SHA-256
// 4c0c9456f6579068b273aa6f9ce0779d3970c3fa679ad311ac1764265038937d
// 8665:1950 viewBox, 22px source-font equivalent = 95.315px CSS width.
function Wordmark({ className = '' }: { className?: string }) {
  return (
    <img
      src="/images/sylvageo-wordmark-s0.svg"
      alt="SylvaGeo"
      width={8665}
      height={1950}
      className={`block h-auto w-[95.315px] max-w-none ${className}`}
    />
  )
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173D32] focus-visible:ring-offset-2'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const mobileNavId = useId()
  const mobileTitleId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu(restoreFocus: boolean) {
    setMobileOpen(false)
    if (restoreFocus) {
      // The trigger stays mounted, even when the drawer unmounts.
      triggerRef.current?.focus()
    }
  }

  useEffect(() => {
    if (!mobileOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
        triggerRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !drawerRef.current) return
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0)
      if (focusable.length === 0) {
        event.preventDefault()
        return
      }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || !drawerRef.current.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !drawerRef.current.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-[#DCE5DF] bg-[#F5F7F4] transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="SylvaGeo home"
              className={`flex h-11 shrink-0 items-center ${focusRing}`}
            >
              <Wordmark />
            </Link>

            <nav aria-label="Primary navigation" className="hidden items-center gap-4 md:flex lg:gap-6">
              <div className="group relative">
                <Link
                  href="/products"
                  className={`inline-flex min-h-11 items-center gap-1 text-sm font-medium text-[#26362F] hover:text-[#173D32] ${focusRing}`}
                >
                  Products
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-[60] pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[260px] border border-[#DCE5DF] bg-[#F5F7F4] py-2 shadow-md">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-3 text-sm font-medium text-[#26362F] hover:bg-[#E8EFE9] hover:text-[#173D32] ${focusRing}`}
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
                  className={`inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium text-[#26362F] hover:text-[#173D32] ${focusRing}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`inline-flex min-h-11 shrink-0 items-center justify-center bg-[#173D32] px-4 text-sm font-semibold text-white hover:bg-[#245345] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173D32] focus-visible:ring-offset-2`}
              >
                Get Quote
              </Link>
            </nav>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 text-[#173D32] md:hidden ${focusRing}`}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls={mobileNavId}
            >
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation backdrop"
            onClick={() => closeMenu(true)}
            className="absolute inset-0 bg-black/50"
          />
          <div
            ref={drawerRef}
            id={mobileNavId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileTitleId}
            className="relative z-10 flex h-full w-full flex-col overflow-y-auto bg-[#F5F7F4] sm:w-80"
          >
            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-[#DCE5DF] px-6">
              <h2 id={mobileTitleId} className="sr-only">Navigation menu</h2>
              <Link href="/" aria-label="SylvaGeo home" onClick={() => closeMenu(false)} className={focusRing}>
                <Wordmark />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={() => closeMenu(true)}
                className={`flex h-11 w-11 shrink-0 items-center justify-center text-[#173D32] ${focusRing}`}
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-6 py-4">
              <Link href="/products" onClick={() => closeMenu(false)} className={`flex min-h-11 items-center font-semibold text-[#26362F] ${focusRing}`}>
                Products
              </Link>
              <div className="mb-2 flex flex-col border-l-2 border-[#DCE5DF] pl-4">
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => closeMenu(false)} className={`flex min-h-11 items-center text-sm text-[#26362F] ${focusRing}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => closeMenu(false)} className={`flex min-h-11 items-center font-medium text-[#26362F] ${focusRing}`}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => closeMenu(false)}
                className="mt-4 flex min-h-11 items-center justify-center bg-[#173D32] px-4 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173D32] focus-visible:ring-offset-2"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
