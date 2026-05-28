import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.24)_0,transparent_30%),radial-gradient(circle_at_top_right,rgba(132,204,22,.16)_0,transparent_28%),linear-gradient(135deg,#06130d_0%,#0b1f16_28%,#ecfdf5_28%,#e8f5ef_100%)] text-slate-900">
      <Sidebar />
      <div className="min-h-screen pl-20 lg:pl-72">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
