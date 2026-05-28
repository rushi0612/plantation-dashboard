import { Droplets, Fuel, Waves } from 'lucide-react'
import { mapZones } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function PlantationMap() {
  return (
    <SectionCard
      title="Plantation Map"
      subtitle="Farm overview with live block and irrigation indicators."
      className="xl:col-span-2"
      action={<span className="rounded-md bg-emerald-950 px-3 py-1 text-xs font-semibold text-emerald-100 shadow-sm">342 acres</span>}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="relative min-h-80 overflow-hidden rounded-lg border border-emerald-300/20 bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-800 p-4 shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="control-scan absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-lime-300/25 to-transparent" />
          <div className="absolute left-[48%] top-0 h-full w-10 rotate-12 bg-sky-300/25 blur-sm" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-white/20 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            <Waves className="size-4" aria-hidden="true" />
            Canal Line
          </div>

          {mapZones.map((zone) => (
            <div
              key={zone.name}
              className={`absolute ${zone.position} w-28 rounded-lg border border-white/25 bg-emerald-950/30 p-2.5 text-white shadow-lg shadow-black/20 backdrop-blur transition hover:scale-105 sm:w-32`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{zone.name}</span>
                <span className={`size-2.5 rounded-full ${zone.color} shadow-[0_0_14px_rgba(190,242,100,.75)]`} />
              </div>
              <p className="mt-1.5 text-xs text-white/80">{zone.crop}</p>
              <p className="mt-1 text-xs font-semibold">{zone.status}</p>
            </div>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <div className="rounded-lg border border-white/70 bg-white/75 p-3 shadow-sm">
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
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-sky-500 to-cyan-300" />
            </div>
          </div>

          {['Main line active', 'Drip pressure stable', 'Reservoir refill in progress'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/75 p-3 transition hover:border-emerald-200 hover:bg-emerald-50">
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
