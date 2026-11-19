export function DraftNotice({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm font-semibold text-slate-rock-700 ${className}`}>
      <span>Draft — unpublished</span>
      <span className="mx-2 font-normal text-slate-rock-300" aria-hidden="true">
        /
      </span>
      <span lang="zh-Hans">草稿—未发布</span>
    </p>
  )
}
