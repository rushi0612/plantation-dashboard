function ControlPage({ title, subtitle, metrics = [], panels = [] }) {
  return (
    <main className="px-3 py-4 lg:px-5">
      <section className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6e34]">Plantation Module</p>
        <h2 className="mt-1 text-xl font-semibold tracking-normal text-slate-950">{title}</h2>
        <p className="mt-1 max-w-3xl text-sm text-slate-600">{subtitle}</p>
      </section>

      <section className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c9dcc0] hover:shadow-[0_14px_34px_rgba(18,64,39,0.12)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">{metric.value}</p>
            <p className="mt-2 text-xs text-slate-500">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-3">
        {panels.map((panel) => (
          <article
            key={panel.title}
            className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)]"
          >
            <h3 className="text-base font-semibold tracking-normal text-slate-950">{panel.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{panel.description}</p>
            <div className="mt-4 space-y-2">
              {panel.items.map((item) => (
                <div key={item} className="rounded-lg border border-[#dfe7d8] bg-[#f8faf5] px-3 py-2 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ControlPage
