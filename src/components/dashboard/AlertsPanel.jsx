import { TriangleAlert } from 'lucide-react'
import { alerts } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function AlertsPanel() {
  return (
    <SectionCard
      title="Alerts"
      subtitle="Warning messages and critical events."
      action={<TriangleAlert className="size-5 text-amber-600" aria-hidden="true" />}
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {alerts.map((alert) => (
          <article key={`${alert.level}-${alert.time}`} className="rounded-lg border border-white/70 bg-white/75 p-3 shadow-sm transition hover:border-emerald-200 hover:bg-white/90">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${alert.color} shadow-[0_0_14px_rgba(248,113,113,.55)]`} />
                <span className="text-sm font-semibold text-slate-950">{alert.level}</span>
              </div>
              <span className="text-xs text-slate-500">{alert.time}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">{alert.message}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default AlertsPanel
