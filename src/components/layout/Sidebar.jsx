import { Leaf } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/dashboardData'

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-20 flex-col border-r border-emerald-400/10 bg-[linear-gradient(180deg,#03110b_0%,#062016_52%,#020806_100%)] text-white shadow-2xl shadow-black/50 lg:w-72">
      <div className="flex h-16 items-center justify-center gap-3 border-b border-emerald-300/10 px-3 lg:justify-start lg:px-5">
        <div className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-lime-300 text-emerald-950 shadow-lg shadow-emerald-500/20">
          <Leaf className="size-5" aria-hidden="true" />
        </div>
        <div className="hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Plantation</p>
          <h1 className="text-lg font-semibold tracking-normal">Control Room</h1>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5 overflow-y-auto px-3 py-4 lg:px-3">
        {navigationItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            end={path === '/'}
            title={label}
            className={({ isActive }) =>
              `group flex h-11 items-center justify-center gap-3 rounded-lg px-3 text-sm font-medium transition duration-200 lg:justify-start ${
                isActive
                ? 'bg-gradient-to-r from-emerald-400 to-lime-300 text-emerald-950 shadow-lg shadow-emerald-500/20'
                : 'text-emerald-100/80 hover:bg-white/[0.08] hover:text-white hover:shadow-md hover:shadow-emerald-950/30'
              }`
            }
          >
            <Icon className="size-5 shrink-0 transition group-hover:scale-110 lg:size-4" aria-hidden="true" />
            <span className="hidden lg:inline">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="hidden border-t border-emerald-300/10 p-4 lg:block">
        <div className="rounded-lg border border-emerald-300/10 bg-white/[0.06] p-3 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,.9)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">System Online</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-emerald-100/75">Primary plantation modules are connected.</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
