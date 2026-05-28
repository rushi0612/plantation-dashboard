import { Droplets, Fuel, Waves } from 'lucide-react'
import { mapZones } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function PlantationMap() {
  return (
    <SectionCard
      title="Plantation Map"
      subtitle="Farm overview with live block and irrigation indicators."
      className="xl:col-span-2"
      action={<span className="rounded-md bg-[#06391f] px-3 py-1 text-xs font-semibold text-white shadow-sm">342 acres</span>}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="relative min-h-80 overflow-hidden rounded-lg border border-[#8fb583] bg-[#315f2b] p-4 shadow-inner">
          <div className="absolute inset-0 bg-[#244b24]/20" />
          <div className="control-scan absolute inset-x-0 top-0 h-16 bg-[#a8d18d]/25" />
          <div className="absolute left-[48%] top-0 h-full w-10 rotate-12 bg-sky-300/25 blur-sm" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-white/25 bg-[#06391f]/85 px-3 py-2 text-xs font-semibold text-white shadow-sm">
            <Waves className="size-4" aria-hidden="true" />
            Canal Line
          </div>

          {mapZones.map((zone) => (
            <div
              key={zone.name}
              className={`absolute ${zone.position} w-28 rounded-lg border border-white/25 bg-[#06391f]/85 p-2.5 text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:w-32`}
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
