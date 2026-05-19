import Link from 'next/link'
import { ProjectCase } from '@/data/cases'

interface CardProps {
  title: string
  description?: string
  image?: string
  href?: string
  children?: React.ReactNode
  className?: string
}

export function Card({ title, description, image, href, children, className = '' }: CardProps) {
  const content = (
    <>
      {image && (
        <div className="aspect-[4/3] bg-slate-rock-50 border-b border-slate-rock-50 overflow-hidden flex items-center justify-center">
          <div className="text-slate-rock-300 text-sm font-medium">Image: {title}</div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-slate-rock-700">{title}</h3>
        {description && (
          <p className="text-sm text-slate-rock-500 mt-1 line-clamp-2">{description}</p>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </>
  )

  const cardClass = `bg-white border border-slate-rock-50 rounded-card shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200 ease-out overflow-hidden ${className}`

  if (href) {
    return (
      <Link href={href} className="block">
        <div className={cardClass}>{content}</div>
      </Link>
    )
  }

  return <div className={cardClass}>{content}</div>
}

interface CaseCardProps {
  caseItem: ProjectCase
  onClick?: () => void
}

export function CaseCard({ caseItem, onClick }: CaseCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-rock-50 rounded-card shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200 ease-out overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/3] bg-slate-rock-100 border-b border-slate-rock-50 flex items-center justify-center">
        <div className="text-slate-rock-300 text-sm font-medium text-center px-4">
          {caseItem.title}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-semibold text-slate-rock-700 line-clamp-1">
          {caseItem.title}
        </h3>
        <p className="text-xs text-slate-rock-400 mt-1">
          {caseItem.location} · {caseItem.year}
        </p>
        <div className="mt-2">
          <span className="bg-eco-forest-800 text-white text-xs font-medium px-3 py-1 rounded-tag">
            {caseItem.category}
          </span>
        </div>
      </div>
    </div>
  )
}
