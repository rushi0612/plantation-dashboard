import { sensorReadings } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function SensorsPanel() {
  return (
    <SectionCard title="Environmental Sensors" subtitle="Live readings from field sensor mesh.">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {sensorReadings.map(({ label, value, icon: Icon, tone }) => (
          <article key={label} className="group rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c9dcc0] hover:shadow-[0_12px_30px_rgba(18,64,39,0.11)]">
            <div className={`grid size-9 place-items-center rounded-lg shadow-inner transition group-hover:scale-105 ${tone}`}>
              <Icon className="size-4.5" aria-hidden="true" />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
            <p className="mt-1 text-xl font-semibold tracking-normal text-slate-950">{value}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default SensorsPanel
