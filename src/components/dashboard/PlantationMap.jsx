import { Droplets, Fuel, Layers, Minus, Plus, Power, Waves } from 'lucide-react'
import { mapZones } from '../../data/dashboardData'
import SectionCard from './SectionCard'

const irrigationMarkers = [
  { label: 'M1', position: 'left-[18%] top-[17%]' },
  { label: 'M2', position: 'left-[48%] top-[21%]' },
  { label: 'M3', position: 'left-[73%] top-[25%]' },
  { label: 'M4', position: 'left-[30%] top-[65%]' },
  { label: 'M5', position: 'left-[63%] top-[70%]' },
]

function PlantationMap() {
  return (
    <SectionCard
      title="Live Plantation Map"
      subtitle="Smart agriculture monitoring by zone, irrigation line, tank, and pump state."
      className="xl:col-span-2"
      action={<span className="rounded-md bg-[#06391f] px-3 py-1 text-xs font-semibold text-white shadow-sm">7.00 acres</span>}
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#8fb583] bg-[#123926] p-3 shadow-inner sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(184,226,130,.28),transparent_24%),linear-gradient(135deg,rgba(16,95,47,.9),rgba(6,57,31,.96))]" />
          <div className="absolute inset-3 rounded-[1.25rem] border border-white/10" />
          <div className="absolute inset-x-8 top-7 h-9 rounded-full border-y border-white/20 bg-stone-200/30 blur-[1px]" />
          <div className="absolute bottom-7 left-6 right-8 h-11 rounded-full border-y border-white/20 bg-stone-200/25 blur-[1px]" />
          <div className="absolute bottom-10 left-6 top-8 w-12 rounded-full border-x border-white/20 bg-stone-200/20 blur-[1px]" />
          <div className="absolute bottom-11 right-10 top-10 w-12 rounded-full border-x border-white/20 bg-stone-200/20 blur-[1px]" />
          <div className="control-scan absolute inset-x-8 top-12 h-20 rounded-full bg-lime-200/15" />

          <div className="absolute left-4 top-4 z-20 grid gap-2 sm:left-6 sm:top-6">
            <div className="rounded-lg border border-white/25 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
              Water tank
              <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[78%] rounded-full bg-sky-500" />
              </div>
            </div>
            <div className="inline-flex w-max items-center gap-2 rounded-lg border border-emerald-200 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
              <Power className="size-4 text-emerald-700" aria-hidden="true" />
              Pump ON
            </div>
          </div>

          <div className="absolute right-4 top-1/2 z-30 grid -translate-y-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
            {[
              { label: 'Zoom in', icon: Plus },
              { label: 'Zoom out', icon: Minus },
              { label: 'Layers', icon: Layers },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="grid size-10 place-items-center text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                <Icon className="size-4" aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="absolute bottom-4 right-16 z-20 hidden items-center gap-2 rounded-lg border border-white/25 bg-[#06391f]/85 px-3 py-2 text-xs font-semibold text-white shadow-sm sm:flex">
            <Waves className="size-4" aria-hidden="true" />
            Irrigation canal
          </div>

          <div className="relative z-10 mx-auto grid h-full min-h-[492px] max-w-4xl auto-rows-fr grid-cols-2 gap-2 pt-28 sm:grid-cols-6 sm:gap-3 sm:pt-20">
            {mapZones.map((zone) => (
              <article
                key={zone.name}
                className={`relative min-h-28 overflow-hidden rounded-lg bg-gradient-to-br ${zone.tone} ${zone.layout} p-3 text-white ring-1 ${zone.ring} shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl`}
              >
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="relative flex h-full min-h-24 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-semibold sm:text-base">{zone.name}</h4>
                      <p className="mt-1 text-xs text-white/78">{zone.crop}</p>
                    </div>
                    <span className="rounded-md bg-white/18 px-2 py-1 text-[11px] font-semibold ring-1 ring-white/25">
                      {zone.health}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-1 text-xs">
                    <span className="font-semibold">{zone.acreage}</span>
                    <span className="inline-flex w-max items-center gap-1 rounded-md bg-black/20 px-2 py-1 font-semibold">
                      <span className="size-1.5 rounded-full bg-lime-200 shadow-[0_0_12px_rgba(217,249,157,.95)]" />
                      {zone.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {irrigationMarkers.map((marker) => (
            <div
              key={marker.label}
              className={`absolute ${marker.position} z-20 grid size-8 place-items-center rounded-full border border-sky-200 bg-white/90 text-[10px] font-bold text-sky-700 shadow-lg shadow-sky-950/20`}
              title={`Irrigation marker ${marker.label}`}
            >
              <Droplets className="size-4" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="grid content-start gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)]">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-sky-50 text-sky-700">
                <Fuel className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Water Tank</p>
                <p className="font-semibold text-slate-950">78% Full</p>
              </div>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[78%] rounded-full bg-[#208bd1]" />
            </div>
          </div>

          <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)]">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-white text-emerald-700">
                <Power className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Pump Status</p>
                <p className="font-semibold text-slate-950">ON - Auto mode</p>
              </div>
            </div>
          </div>

          {['5 drip lines monitored', 'Main line pressure stable', 'Reservoir refill in progress'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-[#dfe7d8] bg-[#f8faf5] p-3 transition hover:border-emerald-200 hover:bg-emerald-50">
              <Droplets className="size-4 text-emerald-700" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}

export default PlantationMap
