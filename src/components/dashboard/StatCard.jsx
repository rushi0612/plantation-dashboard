function StatCard({ title, value, detail, status, icon: Icon, tone }) {
  return (
    <article className="group rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c9dcc0] hover:shadow-[0_14px_34px_rgba(18,64,39,0.12)]">
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
        <span className="rounded-md bg-[#eef6e9] px-2 py-1 font-semibold text-[#0b6e34] ring-1 ring-[#cfe3bf]">{status}</span>
      </div>
    </article>
  )
}

export default StatCard
