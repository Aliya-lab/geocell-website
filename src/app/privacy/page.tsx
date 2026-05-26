import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SylvaGeo Privacy Policy - how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.sylvageo.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Privacy Policy</h1>
          <p className="text-slate-rock-200 mt-3">Last updated: May 2026</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">1. Introduction</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed">
              SylvaGeo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website www.sylvageo.com or submit an inquiry
              through our contact form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">2. Information We Collect</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="space-y-2 text-sm text-slate-rock-500">
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span><strong className="text-slate-rock-700">Contact Information:</strong> Name, company name, email address, and phone number submitted through our contact form.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span><strong className="text-slate-rock-700">Project Information:</strong> Project type and requirements you share with us.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span><strong className="text-slate-rock-700">Usage Data:</strong> Pages visited, time spent, and browser type (collected via Google Analytics if enabled).</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-sm text-slate-rock-500">
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span>Respond to your technical inquiries and provide product quotations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span>Send you information about our products and services you have requested</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span>Improve our website and understand how visitors interact with it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span>Comply with applicable legal obligations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">4. Third-Party Services</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed mb-3">
              We use the following third-party services on our website:
            </p>
            <ul className="space-y-2 text-sm text-slate-rock-500">
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span><strong className="text-slate-rock-700">Google Analytics:</strong> We use Google Analytics to collect anonymous usage data to improve our website. Google may use this data in accordance with its own privacy policy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eco-forest-600 mt-0.5">•</span>
                <span><strong className="text-slate-rock-700">Google Maps:</strong> Our contact page embeds a Google Maps widget to display our location. Google's privacy policy applies to map interactions.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">5. Data Retention</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed">
              We retain contact inquiry data for a period necessary to respond to your
              inquiry and maintain our business relationship. You may request deletion of
              your data at any time by contacting us at info@sylvageo.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">6. Your Rights (GDPR)</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed mb-3">
              If you are located in the European Economic Area, you have the right to:
            </p>
            <ul className="space-y-2 text-sm text-slate-rock-500">
              <li className="flex items-start gap-2"><span className="text-eco-forest-600 mt-0.5">•</span><span>Access the personal data we hold about you</span></li>
              <li className="flex items-start gap-2"><span className="text-eco-forest-600 mt-0.5">•</span><span>Request correction of inaccurate data</span></li>
              <li className="flex items-start gap-2"><span className="text-eco-forest-600 mt-0.5">•</span><span>Request deletion of your data</span></li>
              <li className="flex items-start gap-2"><span className="text-eco-forest-600 mt-0.5">•</span><span>Object to processing of your data</span></li>
              <li className="flex items-start gap-2"><span className="text-eco-forest-600 mt-0.5">•</span><span>Request data portability</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-slate-rock-700 mb-3">7. Contact Us</h2>
            <p className="text-slate-rock-500 text-sm leading-relaxed">
              For questions about this Privacy Policy or to exercise your rights, please
              contact us at:
            </p>
            <div className="mt-3 bg-slate-rock-50 rounded-card p-4 text-sm text-slate-rock-600">
              <p><strong>SylvaGeo</strong></p>
              <p>Email: info@sylvageo.com</p>
              <p>Website: www.sylvageo.com</p>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-rock-100">
            <Link href="/" className="text-eco-forest-800 text-sm hover:text-eco-forest-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
