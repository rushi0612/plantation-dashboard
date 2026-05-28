import { Leaf } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/dashboardData'

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-20 flex-col border-r border-[#0b3f24] bg-[#06391f] text-white shadow-xl shadow-[#06391f]/25 lg:w-72">
      <div className="flex h-16 items-center justify-center gap-3 border-b border-white/10 px-3 lg:justify-start lg:px-5">
        <div className="grid size-10 place-items-center rounded-lg bg-[#f7faf4] text-[#0b6e34] shadow-sm">
          <Leaf className="size-5" aria-hidden="true" />
        </div>
        <div className="hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a8d18d]">Plantation</p>
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
                ? 'bg-[#0f8a3b] text-white shadow-md shadow-black/15'
                : 'text-white/78 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <Icon className="size-5 shrink-0 transition group-hover:scale-110 lg:size-4" aria-hidden="true" />
            <span className="hidden lg:inline">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="hidden border-t border-white/10 p-4 lg:block">
        <div className="rounded-lg border border-white/10 bg-white/[0.07] p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#a8d18d]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8ead0]">System Online</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-white/72">Primary plantation modules are connected.</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
