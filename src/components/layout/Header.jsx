import { Building2, CalendarClock, CloudSun, Leaf } from 'lucide-react'
import { useEffect, useState } from 'react'

function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const date = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(now)

  const time = new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now)

  return (
    <header className="lg:sticky lg:top-0 z-20 border-b border-[#dfe7d8] bg-white px-4 py-4 shadow-sm lg:px-8">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
        <div className="flex min-w-0 items-center gap-4">
          <div className="grid size-14 shrink-0 place-items-center rounded-xl border border-[#c9dcc0] bg-[#f4f7f2] text-[#0b6e34] shadow-sm sm:size-16">
            <Leaf className="size-8" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0b6e34]">JustGrow Smart RMS System</p>
            <h1 className="mt-1 text-2xl font-bold tracking-normal text-[#082719] sm:text-3xl">
              Plantation Monitoring System
            </h1>
            <p className="mt-1 max-w-2xl text-sm font-medium text-slate-600">
              Real-time plantation control room for irrigation, sensors, field teams, and alerts.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 xl:min-w-[42rem]">
          <div className="flex items-center gap-3 rounded-xl border border-[#dfe7d8] bg-white px-4 py-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)]">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#eef6e9] text-[#0b6e34]">
              <Building2 className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950">MHADA Office</p>
              <p className="text-xs font-medium text-slate-500">Monitoring Control Room</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#dfe7d8] bg-white px-4 py-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)]">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f8faf5] text-[#0b6e34]">
              <CalendarClock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950">{date}</p>
              <p className="text-xs font-medium text-slate-500">{time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#dfe7d8] bg-white px-4 py-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)]">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-600">
              <CloudSun className="size-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-950">31 C</p>
              <p className="text-xs font-medium text-slate-500">Clear - Humidity 62%</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
