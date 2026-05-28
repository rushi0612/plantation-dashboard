function ControlPage({ title, subtitle, metrics = [], panels = [] }) {
  return (
    <main className="px-3 py-4 lg:px-5">
      <section className="rounded-lg border border-white/65 bg-white/70 p-4 shadow-sm shadow-emerald-950/5 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Plantation Module</p>
        <h2 className="mt-1 text-xl font-semibold tracking-normal text-slate-950">{title}</h2>
        <p className="mt-1 max-w-3xl text-sm text-slate-600">{subtitle}</p>
      </section>

      <section className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-lg border border-white/70 bg-white/75 p-4 shadow-sm shadow-emerald-950/5 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white/90"
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
            className="rounded-lg border border-white/65 bg-white/70 p-4 shadow-sm shadow-emerald-950/5 backdrop-blur-xl"
          >
            <h3 className="text-base font-semibold tracking-normal text-slate-950">{panel.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{panel.description}</p>
            <div className="mt-4 space-y-2">
              {panel.items.map((item) => (
                <div key={item} className="rounded-lg border border-white/70 bg-white/65 px-3 py-2 text-sm font-medium text-slate-700">
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
