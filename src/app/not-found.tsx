import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl font-heading font-bold text-slate-rock-200 mb-4 leading-none">404</div>
        <h1 className="text-2xl font-heading font-bold text-slate-rock-700 mb-3">Page Not Found</h1>
        <p className="text-slate-rock-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Try navigating back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-8 bg-eco-forest-800 text-white text-sm font-semibold rounded-btn hover:bg-eco-forest-900 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/products/geocell"
            className="inline-flex items-center justify-center h-11 px-8 border border-slate-rock-200 text-slate-rock-700 text-sm font-semibold rounded-btn hover:border-eco-forest-800 hover:text-eco-forest-800 transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}
