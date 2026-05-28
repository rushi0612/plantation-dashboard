import { irrigationSummary } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function IrrigationPanel() {
  return (
    <SectionCard title="Irrigation Summary" subtitle="Pump, schedule, and active watering status.">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        {irrigationSummary.map((item) => (
          <div key={item.label} className="rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)] transition hover:border-[#c9dcc0] hover:shadow-[0_12px_30px_rgba(18,64,39,0.11)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
              <span className={`rounded-md px-2 py-1 text-xs font-semibold ${item.tone}`}>{item.value}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-800">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

export default IrrigationPanel
