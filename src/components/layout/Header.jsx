import { CloudSun, Search } from 'lucide-react'
import { useEffect, useState } from 'react'

function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const date = new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now)

  const time = new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now)

  return (
    <header className="lg:sticky lg:top-0 z-20 border-b border-[#dfe7d8] bg-[#f8faf5]/95 px-4 py-4 backdrop-blur lg:px-8">
      <div className="grid gap-3 xl:grid-cols-[1fr_auto_auto] xl:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6e34]">Smart Agriculture Operations</p>
          <h2 className="mt-0.5 text-xl font-semibold tracking-normal text-slate-950">Plantation Monitoring Dashboard</h2>
        </div>

        <div className="hidden h-10 min-w-72 items-center gap-3 rounded-lg border border-[#dfe7d8] bg-white px-3 text-sm text-slate-500 shadow-sm md:flex">
          <Search className="size-4" aria-hidden="true" />
          <span>Search zones, sensors, reports</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:min-w-96">
          <div className="flex items-center gap-3 rounded-lg border border-[#dfe7d8] bg-white px-3 py-2.5 shadow-sm">
            <CloudSun className="size-5 text-amber-600" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-slate-900">31 C - Clear</p>
              <p className="text-xs text-slate-500">Humidity 62% - Wind 8 km/h</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#dfe7d8] bg-white px-3 py-2.5 text-right shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{date}</p>
            <p className="text-xs text-slate-500">{time}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
