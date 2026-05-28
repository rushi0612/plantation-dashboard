import { chartSeries } from '../../data/dashboardData'
import DashboardChart from './DashboardChart'
import SectionCard from './SectionCard'

function AnalyticsCharts() {
  return (
    <SectionCard title="Analytics Charts" subtitle="Moisture, water consumption, and crop health trends.">
      <div className="grid gap-3 xl:grid-cols-3">
        <DashboardChart
          title="Moisture Trend"
          type="area"
          data={chartSeries}
          series={[{ dataKey: 'moisture', name: 'Moisture', color: '#059669', fill: '#a7f3d0' }]}
        />

        <DashboardChart
          title="Water Usage"
          type="bar"
          data={chartSeries}
          series={[{ dataKey: 'water', name: 'Water Usage', color: '#0284c7' }]}
        />

        <DashboardChart
          title="Crop Health"
          type="line"
          data={chartSeries}
          series={[{ dataKey: 'health', name: 'Crop Health', color: '#65a30d' }]}
        />
      </div>
    </SectionCard>
  )
}

export default AnalyticsCharts
