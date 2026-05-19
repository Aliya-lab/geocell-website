import Link from 'next/link'

const quickLinks = [
  { label: 'Products', href: '/products/geocell' },
  { label: 'Cases', href: '/cases' },
  { label: 'Tech Specs', href: '/products/geocell#specifications' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-slate-rock-800">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="font-heading font-bold text-white text-xl mb-3">GEOCELL</div>
            <p className="text-slate-rock-300 text-sm leading-relaxed">
              Professional manufacturer of Polymer Nano-Composite Alloy (PCA) geocell
              systems. Engineering-grade solutions for slope protection, road
              reinforcement, and channel lining since 2010.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-rock-300 text-sm hover:text-eco-forest-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-eco-forest-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-rock-300 text-sm">+86 10 8888 9999</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-eco-forest-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-rock-300 text-sm">info@geocell.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-eco-forest-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-rock-300 text-sm">Beijing, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-rock-600 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-rock-400 text-xs">
            &copy; {new Date().getFullYear()} Geocell. All rights reserved.
          </p>
          <p className="text-slate-rock-500 text-xs">
            Powered by PCA Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
