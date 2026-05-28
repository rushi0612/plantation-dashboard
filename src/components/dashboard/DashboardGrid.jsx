import { Activity, ArrowUpRight, CircleDot, Droplets } from 'lucide-react'
import { activityItems, metricCards, quickStats, sensorTrendSeries, zoneCards } from '../../data/dashboardData'
import AlertsPanel from './AlertsPanel'
import AnalyticsCharts from './AnalyticsCharts'
import CameraMonitoring from './CameraMonitoring'
import DashboardChart from './DashboardChart'
import IrrigationPanel from './IrrigationPanel'
import PlantationMap from './PlantationMap'
import SensorsPanel from './SensorsPanel'
import StatCard from './StatCard'

function DashboardGrid() {
  return (
    <main className="px-3 py-4 lg:px-5">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
        <PlantationMap />
        <IrrigationPanel />
      </section>

      <section className="mt-4">
        <CameraMonitoring />
      </section>

      <section className="mt-4">
        <SensorsPanel />
      </section>

      <section className="mt-4">
        <AnalyticsCharts />
      </section>

      <section className="mt-4">
        <AlertsPanel />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)]">
        <div className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold tracking-normal text-slate-950">Crop Zone Overview</h3>
              <p className="mt-1 text-xs text-slate-500">Current irrigation and crop health by monitored block.</p>
            </div>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#0b6e34] px-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#095f2d] hover:shadow-md">
              View Details
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {zoneCards.map((zone) => (
              <article key={zone.zone} className="rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)] transition hover:border-[#c9dcc0] hover:shadow-[0_12px_30px_rgba(18,64,39,0.11)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">{zone.zone}</h4>
                    <p className="text-xs text-slate-500">{zone.crop}</p>
                  </div>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-slate-200">
                    {zone.health}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-md bg-[#f8faf5] p-2.5 ring-1 ring-[#dfe7d8]">
                    <p className="text-slate-500">Moisture</p>
                    <p className="mt-1 font-semibold text-slate-950">{zone.moisture}</p>
                  </div>
                  <div className="rounded-md bg-[#f8faf5] p-2.5 ring-1 ring-[#dfe7d8]">
                    <p className="text-slate-500">Irrigation</p>
                    <p className="mt-1 font-semibold text-slate-950">{zone.irrigation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)]">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <Activity className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-normal text-slate-950">Recent Activity</h3>
                <p className="text-xs text-slate-500">Latest field operations</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {activityItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CircleDot className="mt-1 size-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {quickStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)] transition hover:border-[#c9dcc0] hover:shadow-[0_12px_30px_rgba(18,64,39,0.11)]">
                <div className="grid size-9 place-items-center rounded-lg bg-lime-50 text-lime-700">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="font-semibold text-slate-950">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_10px_28px_rgba(18,64,39,0.08)] lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-normal text-slate-950">Sensor Trend Placeholder</h3>
              <p className="mt-1 text-xs text-slate-500">Grid-ready panel for charts and live telemetry.</p>
            </div>
            <Droplets className="size-5 text-emerald-700" aria-hidden="true" />
          </div>
          <DashboardChart
            type="bar"
            data={sensorTrendSeries}
            series={[{ dataKey: 'moisture', name: 'Moisture', color: '#34d399' }]}
            variant="dark"
            className="mt-4"
          />
        </div>

        <div className="rounded-lg border border-[#c9dcc0] bg-[#06391f] p-4 text-white shadow-[0_10px_28px_rgba(18,64,39,0.18)]">
          <h3 className="text-base font-semibold tracking-normal">AI Analytics Placeholder</h3>
          <p className="mt-2 text-xs leading-5 text-white/78">
            Yield prediction, disease alerts, and irrigation recommendations can be surfaced here.
          </p>
          <div className="mt-4 space-y-2">
            {['Disease risk: Low', 'Water efficiency: 91%', 'Harvest readiness: 34 days'].map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/[0.07] px-3 py-2.5 text-sm font-medium transition hover:bg-white/15">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default DashboardGrid
