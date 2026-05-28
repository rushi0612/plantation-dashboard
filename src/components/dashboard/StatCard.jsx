function StatCard({ title, value, detail, status, icon: Icon, tone }) {
  return (
    <article className="group rounded-lg border border-white/70 bg-white/75 p-4 shadow-sm shadow-emerald-950/5 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white/90 hover:shadow-lg hover:shadow-emerald-950/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{value}</p>
        </div>
        <div className={`grid size-10 shrink-0 place-items-center rounded-lg shadow-inner transition group-hover:scale-105 ${tone}`}>
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        <span className="text-slate-500">{detail}</span>
        <span className="rounded-md bg-emerald-50 px-2 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-100">{status}</span>
      </div>
    </article>
  )
}

export default StatCard
