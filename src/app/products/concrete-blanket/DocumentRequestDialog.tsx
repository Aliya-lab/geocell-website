'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import Link from 'next/link'

/** Same endpoint and JSON POST the contact page uses. */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvzwaqj'

const SUBMIT_ERROR =
  "We couldn't send your request. Please try again. If the problem continues, email us at info@sylvageo.com."

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

interface DocumentRequestDialogProps {
  documentName: string
  returnFocusRef: { current: HTMLElement | null }
  onClose: () => void
  onSuccess: () => void
}

export function DocumentRequestDialog({
  documentName,
  returnFocusRef,
  onClose,
  onSuccess,
}: DocumentRequestDialogProps) {
  const titleId = useId()
  const descriptionId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const mountedRef = useRef(true)
  const submittingRef = useRef(false)
  const onCloseRef = useRef(onClose)
  const onSuccessRef = useRef(onSuccess)
  onCloseRef.current = onClose
  onSuccessRef.current = onSuccess

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState(`Requested document: ${documentName}`)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    mountedRef.current = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    nameRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const root = dialogRef.current
      if (!root) return
      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
      )
      if (items.length === 0) {
        event.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !root.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      mountedRef.current = false
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      returnFocusRef.current?.focus()
    }
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submittingRef.current) return

    const nextErrors: { name?: string; email?: string } = {}
    if (!name.trim()) nextErrors.name = 'Name is required'
    if (!email.trim()) nextErrors.email = 'Email is required'
    else if (!validateEmail(email.trim())) nextErrors.email = 'Please enter a valid email'
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.email) {
      if (nextErrors.name) nameRef.current?.focus()
      else emailRef.current?.focus()
      return
    }

    submittingRef.current = true
    setSubmitError(null)
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          country: country.trim(),
          message,
          'Requested document': documentName,
        }),
      })
      if (res.ok) {
        onSuccessRef.current()
        return
      }
      if (mountedRef.current) setSubmitError(SUBMIT_ERROR)
    } catch {
      if (mountedRef.current) setSubmitError(SUBMIT_ERROR)
    } finally {
      submittingRef.current = false
      if (mountedRef.current) setSubmitting(false)
    }
  }

  const fieldClass = (invalid: boolean) =>
    `w-full border rounded-btn px-4 py-3 text-base focus:outline-none focus:ring-2 transition-colors ${
      invalid
        ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
        : 'border-slate-rock-200 focus:ring-eco-forest focus:border-eco-forest'
    }`

  return (
    <div className="fixed inset-0 z-[120]">
      <div className="absolute inset-0 bg-slate-rock-900/50" onClick={() => onCloseRef.current()} aria-hidden="true" />
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-4 pointer-events-none">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="pointer-events-auto w-full max-w-lg max-h-[min(100%,calc(100dvh-2rem))] overflow-y-auto bg-white border border-slate-rock-100 rounded-card shadow-card p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="min-w-0">
              <h2 id={titleId} className="text-xl font-heading font-bold text-slate-rock-700">
                Request from technical sales
              </h2>
              <p id={descriptionId} className="text-sm text-slate-rock-600 mt-1">{documentName}</p>
            </div>
            <button
              type="button"
              onClick={() => onCloseRef.current()}
              aria-label="Close"
              className="shrink-0 w-11 h-11 inline-flex items-center justify-center text-slate-rock-500 hover:text-slate-rock-800 focus:outline-none focus:ring-2 focus:ring-eco-forest rounded-btn"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="doc-request-name" className="block text-sm font-medium text-slate-rock-700 mb-1.5">
                Name
              </label>
              <input
                ref={nameRef}
                id="doc-request-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'doc-request-name-error' : undefined}
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                }}
                className={fieldClass(Boolean(errors.name))}
              />
              {errors.name && (
                <p id="doc-request-name-error" className="text-red-500 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="doc-request-email" className="block text-sm font-medium text-slate-rock-700 mb-1.5">
                Email
              </label>
              <input
                ref={emailRef}
                id="doc-request-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                aria-required="true"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'doc-request-email-error' : undefined}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                className={fieldClass(Boolean(errors.email))}
              />
              {errors.email && (
                <p id="doc-request-email-error" className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="doc-request-company" className="block text-sm font-medium text-slate-rock-700 mb-1.5">
                Company
              </label>
              <input
                id="doc-request-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className={fieldClass(false)}
              />
            </div>

            <div>
              <label htmlFor="doc-request-country" className="block text-sm font-medium text-slate-rock-700 mb-1.5">
                Country
              </label>
              <input
                id="doc-request-country"
                name="country"
                type="text"
                autoComplete="country-name"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className={fieldClass(false)}
              />
            </div>

            <div>
              <label htmlFor="doc-request-message" className="block text-sm font-medium text-slate-rock-700 mb-1.5">
                Message
              </label>
              <textarea
                id="doc-request-message"
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${fieldClass(false)} resize-y`}
              />
            </div>

            {submitError && (
              <p role="alert" className="text-red-600 text-sm">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              aria-disabled={submitting || undefined}
              className={`inline-flex w-full items-center justify-center font-medium min-h-[48px] bg-eco-forest-800 text-white rounded-btn px-6 py-3 hover:bg-eco-forest-900 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-forest ${submitting ? 'opacity-60 cursor-wait' : ''}`}
            >
              Submit request
            </button>
            <p className="mt-3 text-xs text-slate-rock-400 text-center leading-relaxed">
              We use your details to respond to your request. See our{' '}
              <Link
                href="/privacy"
                className="underline hover:text-eco-forest-800 focus:outline-none focus:ring-2 focus:ring-eco-forest focus:ring-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
