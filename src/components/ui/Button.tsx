import Link from 'next/link'

type BtnVariant = 'primary' | 'secondary' | 'text'

interface ButtonProps {
  variant?: BtnVariant
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants: Record<BtnVariant, string> = {
  primary:
    'bg-eco-forest-800 text-white rounded-btn px-6 py-3 hover:bg-eco-forest-900 active:scale-[0.98] focus:ring-eco-forest disabled:bg-slate-rock-200 disabled:text-slate-rock-400 disabled:cursor-not-allowed disabled:active:scale-100',
  secondary:
    'border-2 border-slate-rock-700 text-slate-rock-700 bg-transparent rounded-btn px-6 py-3 hover:bg-slate-rock-700 hover:text-white active:bg-slate-rock-800 focus:ring-slate-rock-500 focus:ring-offset-2 disabled:border-slate-rock-200 disabled:text-slate-rock-300 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-rock-300',
  text: 'text-eco-forest-800 hover:text-eco-forest-900 hover:underline focus:ring-eco-forest focus:ring-offset-1 disabled:text-slate-rock-300 disabled:cursor-not-allowed disabled:hover:no-underline',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  disabled,
  type = 'button',
  onClick,
  fullWidth,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
