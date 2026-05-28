import { Camera } from 'lucide-react'
import { cameraFeeds } from '../../data/dashboardData'
import SectionCard from './SectionCard'

function CameraMonitoring() {
  return (
    <SectionCard title="Live Camera Monitoring" subtitle="Scrollable feed cards from key plantation points.">
      <div className="flex snap-x gap-3 overflow-x-auto pb-2">
        {cameraFeeds.map((feed) => (
          <article
            key={feed.name}
            className="group min-w-72 snap-start overflow-hidden rounded-lg border border-white/70 bg-white/75 shadow-sm shadow-emerald-950/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-950/10"
          >
            <div className={`relative h-36 bg-gradient-to-br ${feed.tone}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.12)_50%,rgba(255,255,255,.12)_75%,transparent_75%)] bg-[size:auto,34px_34px]" />
              <span className="live-pulse absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">LIVE</span>
              <div className="absolute inset-0 grid place-items-center text-white/80">
                <Camera className="size-9 transition group-hover:scale-110" aria-hidden="true" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-slate-950">{feed.name}</h4>
                <span className="text-xs font-medium text-slate-500">{feed.time}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{feed.location}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  )
}

export default CameraMonitoring
