interface TagProps {
  children: React.ReactNode
  active?: boolean
  outline?: boolean
  onClick?: () => void
  className?: string
}

export function Tag({ children, active = false, outline = false, onClick, className = '' }: TagProps) {
  const base = 'text-xs font-medium px-3 py-1 rounded-tag transition-all duration-150 cursor-pointer'
  const styles = outline
    ? active
      ? 'bg-eco-forest-800 text-white border border-eco-forest-800'
      : 'border border-slate-rock-400 text-slate-rock-600 hover:border-eco-forest-800 hover:text-eco-forest-800'
    : active
      ? 'bg-eco-forest-800 text-white'
      : 'bg-eco-forest-800 text-white'

  return (
    <span className={`${base} ${styles} ${className}`} onClick={onClick}>
      {children}
    </span>
  )
}
