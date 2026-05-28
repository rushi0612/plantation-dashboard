function SectionCard({ title, subtitle, action, children, className = '' }) {
  return (
    <section className={`rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)] transition duration-200 hover:shadow-[0_14px_34px_rgba(18,64,39,0.12)] ${className}`}>
      {(title || subtitle || action) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && <h3 className="text-base font-semibold tracking-normal text-slate-950">{title}</h3>}
            {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

export default SectionCard
