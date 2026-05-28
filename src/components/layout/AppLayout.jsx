import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f4f7f2] text-slate-900">
      <Sidebar />
      <div className="min-h-screen pl-20 lg:pl-72">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
