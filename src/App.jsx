import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import ControlPage from './pages/ControlPage'
import DashboardPage from './pages/DashboardPage'
import { pageConfigs } from './pages/pageConfigs'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="irrigation-control" element={<ControlPage {...pageConfigs.irrigation} />} />
        <Route path="sensor-data" element={<ControlPage {...pageConfigs.sensors} />} />
        <Route path="camera-monitoring" element={<ControlPage {...pageConfigs.cameras} />} />
        <Route path="employee-tracking" element={<ControlPage {...pageConfigs.employees} />} />
        <Route path="reports" element={<ControlPage {...pageConfigs.reports} />} />
        <Route path="ai-analytics" element={<ControlPage {...pageConfigs.analytics} />} />
        <Route path="settings" element={<ControlPage {...pageConfigs.settings} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
