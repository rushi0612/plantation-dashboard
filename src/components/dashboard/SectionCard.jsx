function SectionCard({ title, subtitle, action, children, className = '' }) {
  return (
    <section className={`rounded-lg border border-white/65 bg-white/70 p-4 shadow-sm shadow-emerald-950/5 backdrop-blur-xl transition duration-200 hover:bg-white/80 hover:shadow-lg hover:shadow-emerald-950/10 ${className}`}>
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
