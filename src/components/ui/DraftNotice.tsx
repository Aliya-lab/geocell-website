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

export function DraftNoticeBar() {
  return (
    <div className="bg-slate-rock-50 border-b border-slate-rock-200">
      <div className="max-w-[1200px] mx-auto px-6 py-3 text-center">
        <DraftNotice />
      </div>
    </div>
  )
}
