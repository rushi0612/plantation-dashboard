export const pageConfigs = {
  irrigation: {
    title: 'Irrigation Control',
    subtitle: 'Manage pumps, valves, water usage, and irrigation schedules across plantation zones.',
    metrics: [
      { label: 'Pump Load', value: '74%', detail: 'Pump 2 currently active' },
      { label: 'Active Zones', value: '3 / 6', detail: 'Block A, B, and D online' },
      { label: 'Water Used', value: '18.4 KL', detail: 'Today across all lines' },
      { label: 'Next Run', value: '18:30', detail: 'Block D drip irrigation' },
    ],
    panels: [
      { title: 'Pump Controls', description: 'Operational controls and status flags.', items: ['Main pump running', 'Backup pump standby', 'Pressure stable'] },
      { title: 'Valve Schedule', description: 'Upcoming irrigation sequence.', items: ['Block D - 18:30', 'Block A - 21:00', 'Block C - paused'] },
      { title: 'Water Storage', description: 'Tank and reservoir overview.', items: ['Tank level 78%', 'Reservoir refill active', 'Canal line clear'] },
    ],
  },
  sensors: {
    title: 'Sensor Data',
    subtitle: 'Monitor field telemetry from soil, climate, rainfall, light, and wind sensors.',
    metrics: [
      { label: 'Humidity', value: '62%', detail: 'Average across field nodes' },
      { label: 'Soil pH', value: '6.7', detail: 'Within crop tolerance' },
      { label: 'Rainfall', value: '12 mm', detail: 'Last 24 hours' },
      { label: 'Online Nodes', value: '124', detail: '98% uptime' },
    ],
    panels: [
      { title: 'Sensor Mesh', description: 'Connectivity and device status.', items: ['118 nodes normal', '4 nodes delayed', '2 nodes need calibration'] },
      { title: 'Soil Conditions', description: 'Key agronomic readings.', items: ['Moisture 68%', 'pH 6.7', 'Temperature 29 C'] },
      { title: 'Climate Readings', description: 'Environmental telemetry.', items: ['Wind 8 km/h', 'Sunlight 74k lux', 'Humidity 62%'] },
    ],
  },
  cameras: {
    title: 'Camera Monitoring',
    subtitle: 'Review live camera points, perimeter views, and monitoring checkpoints.',
    metrics: [
      { label: 'Live Feeds', value: '8', detail: 'All primary feeds online' },
      { label: 'Recording', value: '24/7', detail: 'Cloud archive enabled' },
      { label: 'Alerts', value: '1', detail: 'Motion event pending review' },
      { label: 'Coverage', value: '92%', detail: 'Perimeter and pump-house view' },
    ],
    panels: [
      { title: 'Feed Health', description: 'Current stream conditions.', items: ['North gate live', 'Pump house live', 'East fence live'] },
      { title: 'Perimeter Events', description: 'Recent activity markers.', items: ['Motion at 15:42', 'Gate scan complete', 'No breach detected'] },
      { title: 'Archive Status', description: 'Storage and retention.', items: ['7-day rolling archive', '3 clips flagged', 'Backup complete'] },
    ],
  },
  employees: {
    title: 'Employee Tracking',
    subtitle: 'Track field teams, attendance, patrol routes, and assigned tasks.',
    metrics: [
      { label: 'On Duty', value: '18', detail: 'Across plantation blocks' },
      { label: 'Field Teams', value: '6', detail: 'Assigned to active routes' },
      { label: 'Tasks Open', value: '14', detail: '5 high priority' },
      { label: 'Check-ins', value: '42', detail: 'Recorded today' },
    ],
    panels: [
      { title: 'Team Locations', description: 'Current field assignments.', items: ['Team A - Block B', 'Team C - Pump house', 'Team F - East fence'] },
      { title: 'Attendance', description: 'Shift monitoring summary.', items: ['18 present', '2 on leave', 'Next shift 19:00'] },
      { title: 'Task Queue', description: 'Operational task list.', items: ['Inspect Block C valve', 'Calibrate node 14', 'Review fence camera'] },
    ],
  },
  reports: {
    title: 'Reports',
    subtitle: 'Generate operational summaries, irrigation logs, sensor exports, and crop reports.',
    metrics: [
      { label: 'Reports Ready', value: '12', detail: 'Available for export' },
      { label: 'This Week', value: '31', detail: 'Generated automatically' },
      { label: 'Exports', value: '8', detail: 'CSV and PDF outputs' },
      { label: 'Pending', value: '3', detail: 'Awaiting review' },
    ],
    panels: [
      { title: 'Daily Reports', description: 'Operational report queue.', items: ['Irrigation log', 'Sensor summary', 'Employee attendance'] },
      { title: 'Crop Reports', description: 'Agronomy reporting.', items: ['Yield estimate', 'Crop health', 'Disease risk'] },
      { title: 'Exports', description: 'Download-ready outputs.', items: ['PDF reports', 'CSV telemetry', 'Camera event log'] },
    ],
  },
  analytics: {
    title: 'AI Analytics',
    subtitle: 'Review AI-driven insights for yield, disease risk, irrigation efficiency, and crop health.',
    metrics: [
      { label: 'Yield Forecast', value: '+8%', detail: 'Projected against baseline' },
      { label: 'Disease Risk', value: 'Low', detail: 'Current model output' },
      { label: 'Water Efficiency', value: '91%', detail: 'AI recommendation score' },
      { label: 'Readiness', value: '34 d', detail: 'Estimated harvest window' },
    ],
    panels: [
      { title: 'Model Signals', description: 'Current AI observations.', items: ['Low disease risk', 'Stable canopy index', 'Moisture improving'] },
      { title: 'Recommendations', description: 'Suggested operational actions.', items: ['Increase Block C monitoring', 'Delay Block A irrigation', 'Inspect node 14'] },
      { title: 'Forecasts', description: 'Predictive plantation metrics.', items: ['Yield +8%', 'Harvest in 34 days', 'Water demand normal'] },
    ],
  },
  settings: {
    title: 'Settings',
    subtitle: 'Configure dashboard preferences, module access, alerts, and system integrations.',
    metrics: [
      { label: 'Users', value: '12', detail: 'With dashboard access' },
      { label: 'Modules', value: '8', detail: 'Enabled monitoring areas' },
      { label: 'Alert Rules', value: '24', detail: 'Active thresholds' },
      { label: 'Integrations', value: '5', detail: 'Connected systems' },
    ],
    panels: [
      { title: 'User Access', description: 'Role and permission controls.', items: ['Admin role active', 'Field supervisor access', 'Viewer permissions'] },
      { title: 'Alert Settings', description: 'Notification threshold setup.', items: ['Critical valve alerts', 'Sensor offline warnings', 'Camera motion events'] },
      { title: 'System Setup', description: 'Platform configuration.', items: ['Weather API connected', 'Cloud sync enabled', 'Backup schedule daily'] },
    ],
  },
}
