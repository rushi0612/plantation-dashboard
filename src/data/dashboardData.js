import {
  BarChart3,
  Bot,
  Camera,
  CloudRain,
  Droplets,
  FileText,
  Gauge,
  LayoutDashboard,
  MapPin,
  Settings,
  Sun,
  ThermometerSun,
  Tractor,
  Users,
  Waves,
  Wind,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Irrigation Control', path: '/irrigation-control', icon: Droplets },
  { label: 'Sensor Data', path: '/sensor-data', icon: Gauge },
  { label: 'Camera Monitoring', path: '/camera-monitoring', icon: Camera },
  { label: 'Employee Tracking', path: '/employee-tracking', icon: Users },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'AI Analytics', path: '/ai-analytics', icon: Bot },
  { label: 'Settings', path: '/settings', icon: Settings },
]

export const metricCards = [
  {
    title: 'Soil Moisture',
    value: '68%',
    detail: 'North block average',
    status: 'Optimal',
    icon: Droplets,
    tone: 'text-sky-700 bg-sky-50',
  },
  {
    title: 'Field Temperature',
    value: '29 C',
    detail: 'Updated 5 min ago',
    status: 'Normal',
    icon: ThermometerSun,
    tone: 'text-amber-700 bg-amber-50',
  },
  {
    title: 'Active Sensors',
    value: '124',
    detail: '6 zones online',
    status: '98% uptime',
    icon: Gauge,
    tone: 'text-emerald-700 bg-emerald-50',
  },
  {
    title: 'Field Teams',
    value: '18',
    detail: 'Across plantation',
    status: 'On duty',
    icon: Tractor,
    tone: 'text-lime-700 bg-lime-50',
  },
]

export const mapZones = [
  { name: 'A1', crop: 'Coconut', status: 'Irrigating', position: 'left-[10%] top-[16%]', color: 'bg-emerald-500' },
  { name: 'B2', crop: 'Areca', status: 'Ready', position: 'left-[42%] top-[18%]', color: 'bg-lime-500' },
  { name: 'C3', crop: 'Mango', status: 'Low flow', position: 'left-[22%] top-[58%]', color: 'bg-amber-500' },
  { name: 'D4', crop: 'Banana', status: 'Scheduled', position: 'left-[66%] top-[54%]', color: 'bg-sky-500' },
]

export const irrigationSummary = [
  { label: 'Pump Status', value: 'Running', detail: 'Pump 2 - 74% load', tone: 'text-emerald-700 bg-emerald-50' },
  { label: 'Water Usage', value: '18.4 KL', detail: 'Today across 4 zones', tone: 'text-sky-700 bg-sky-50' },
  { label: 'Next Schedule', value: '18:30', detail: 'Block D drip line', tone: 'text-amber-700 bg-amber-50' },
  { label: 'Active Zones', value: '3 / 6', detail: '2 queued for evening', tone: 'text-lime-700 bg-lime-50' },
]

export const cameraFeeds = [
  { name: 'North Gate', time: '16:42:18', location: 'Entry road', tone: 'bg-[#315f2b]' },
  { name: 'Pump House', time: '16:41:52', location: 'Irrigation hub', tone: 'bg-[#123926]' },
  { name: 'Block C', time: '16:41:34', location: 'Mango field', tone: 'bg-[#7a641b]' },
  { name: 'East Fence', time: '16:40:59', location: 'Perimeter line', tone: 'bg-[#0b4f2e]' },
]

export const sensorReadings = [
  { label: 'Humidity', value: '62%', icon: Waves, tone: 'text-sky-700 bg-sky-50' },
  { label: 'Rainfall', value: '12 mm', icon: CloudRain, tone: 'text-indigo-700 bg-indigo-50' },
  { label: 'Wind Speed', value: '8 km/h', icon: Wind, tone: 'text-cyan-700 bg-cyan-50' },
  { label: 'Soil pH', value: '6.7', icon: Gauge, tone: 'text-emerald-700 bg-emerald-50' },
  { label: 'Sunlight', value: '74k lux', icon: Sun, tone: 'text-amber-700 bg-amber-50' },
]

export const chartSeries = [
  { time: '06:00', moisture: 58, water: 4.2, health: 81 },
  { time: '08:00', moisture: 61, water: 5.8, health: 83 },
  { time: '10:00', moisture: 68, water: 7.1, health: 86 },
  { time: '12:00', moisture: 65, water: 6.4, health: 84 },
  { time: '14:00', moisture: 72, water: 8.2, health: 88 },
  { time: '16:00', moisture: 69, water: 7.6, health: 87 },
]

export const sensorTrendSeries = [
  { time: '06:00', moisture: 42 },
  { time: '07:00', moisture: 58 },
  { time: '08:00', moisture: 48 },
  { time: '09:00', moisture: 68 },
  { time: '10:00', moisture: 74 },
  { time: '11:00', moisture: 62 },
  { time: '12:00', moisture: 81 },
  { time: '13:00', moisture: 69 },
  { time: '14:00', moisture: 77 },
  { time: '15:00', moisture: 86 },
  { time: '16:00', moisture: 72 },
  { time: '17:00', moisture: 90 },
]

export const alerts = [
  { level: 'Critical', message: 'Block C main valve pressure dropped below threshold.', time: '16:36', color: 'bg-red-500' },
  { level: 'Warning', message: 'Soil pH drift detected near mango row C3.', time: '15:58', color: 'bg-amber-500' },
  { level: 'Info', message: 'Camera feed archived for north gate checkpoint.', time: '15:42', color: 'bg-sky-500' },
  { level: 'Warning', message: 'Pump 2 maintenance window due within 48 hours.', time: '14:20', color: 'bg-amber-500' },
]

export const zoneCards = [
  { zone: 'Block A', crop: 'Coconut', moisture: '72%', irrigation: 'Scheduled', health: 'Good' },
  { zone: 'Block B', crop: 'Areca Nut', moisture: '64%', irrigation: 'Running', health: 'Stable' },
  { zone: 'Block C', crop: 'Mango', moisture: '59%', irrigation: 'Paused', health: 'Watch' },
  { zone: 'Block D', crop: 'Banana', moisture: '76%', irrigation: 'Scheduled', health: 'Good' },
]

export const activityItems = [
  { title: 'Irrigation valve opened', meta: 'Block B - 10 min ago' },
  { title: 'Camera scan completed', meta: 'East perimeter - 24 min ago' },
  { title: 'Sensor calibration due', meta: 'Moisture node 14 - Today' },
  { title: 'AI yield forecast refreshed', meta: 'All active crop zones - 1 hr ago' },
]

export const quickStats = [
  { label: 'Rainfall', value: '12 mm', icon: BarChart3 },
  { label: 'Coverage', value: '342 acres', icon: MapPin },
  { label: 'Alerts', value: '3 open', icon: FileText },
]
