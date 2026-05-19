'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const projectTypes = [
  'Slope Protection',
  'Road Subgrade',
  'Channel Lining',
  'Retaining Wall',
  'Mining Application',
  'Other',
]

interface FormState {
  company: string
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

interface FormErrors {
  company?: string
  name?: string
  email?: string
  phone?: string
  projectType?: string
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    company: '',
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.company.trim()) e.company = 'Company name is required'
    if (!form.name.trim()) e.name = 'Your name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!validateEmail(form.email)) e.email = 'Please enter a valid email'
    if (!form.projectType) e.projectType = 'Please select a project type'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <>
      {/* Banner */}
      <div className="bg-slate-rock-700 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Contact Us</h1>
          <p className="text-slate-rock-200 mt-3 max-w-xl mx-auto">
            Get in touch for technical consultation and project quotes
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-eco-forest-50 border border-eco-forest-100 rounded-card p-8 text-center">
                <svg className="w-12 h-12 text-eco-forest-800 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="font-heading font-bold text-xl text-eco-forest-800 mb-2">Message Sent</h2>
                <p className="text-eco-forest-700 text-sm">
                  Thank you for your inquiry. Our team will respond within 24 hours.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => { setSubmitted(false); setForm({ company: '', name: '', email: '', phone: '', projectType: '', message: '' }) }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Company Name *" error={errors.company}>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Your company name"
                      className={`w-full border rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${
                        errors.company
                          ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                          : 'border-slate-rock-200 focus:ring-eco-forest focus:border-eco-forest'
                      }`}
                    />
                  </Field>
                  <Field label="Your Name *" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Full name"
                      className={`w-full border rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                          : 'border-slate-rock-200 focus:ring-eco-forest focus:border-eco-forest'
                      }`}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Email *" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="engineering@company.com"
                      className={`w-full border rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                          : 'border-slate-rock-200 focus:ring-eco-forest focus:border-eco-forest'
                      }`}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+86 ..."
                      className="w-full border border-slate-rock-200 rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-eco-forest focus:border-eco-forest transition-colors"
                    />
                  </Field>
                </div>

                <Field label="Project Type *" error={errors.projectType}>
                  <select
                    value={form.projectType}
                    onChange={update('projectType')}
                    className={`w-full border rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-colors bg-white ${
                      errors.projectType
                        ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                        : 'border-slate-rock-200 focus:ring-eco-forest focus:border-eco-forest'
                    }`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="Describe your project requirements, site conditions, and estimated quantity..."
                    className="w-full border border-slate-rock-200 rounded-btn px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-eco-forest focus:border-eco-forest transition-colors resize-none"
                  />
                </Field>

                <Button type="submit" variant="primary" fullWidth className="min-h-[48px]">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-rock-50 rounded-card shadow-card p-6">
              <h3 className="font-heading font-semibold text-slate-rock-700 mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-eco-forest-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    value: 'Beijing, China',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-eco-forest-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '+86 10 8888 9999',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-eco-forest-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'info@geocell.com',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-rock-400">{item.label}</div>
                      <div className="text-sm text-slate-rock-700">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] bg-slate-rock-100 rounded-card border border-slate-rock-50 flex items-center justify-center">
              <div className="text-slate-rock-300 text-sm font-medium">Map Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-rock-700 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}
