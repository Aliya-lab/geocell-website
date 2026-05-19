interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${dark ? 'bg-slate-rock-800' : ''} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </section>
  )
}
