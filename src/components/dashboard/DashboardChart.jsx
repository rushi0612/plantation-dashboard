import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const chartComponents = {
  area: AreaChart,
  bar: BarChart,
  line: LineChart,
}

const seriesComponents = {
  area: Area,
  bar: Bar,
  line: Line,
}

const variantStyles = {
  light: {
    card: 'rounded-lg border border-[#dfe7d8] bg-white p-3 shadow-[0_8px_22px_rgba(18,64,39,0.07)] transition hover:border-[#c9dcc0] hover:shadow-[0_12px_30px_rgba(18,64,39,0.11)]',
    title: 'text-xs font-semibold uppercase tracking-[0.14em] text-slate-600',
    grid: '#dfe7d8',
    axis: '#64748b',
    tooltip: {
      backgroundColor: '#ffffff',
      border: '1px solid #dbeafe',
      borderRadius: 8,
      color: '#0f172a',
    },
  },
  dark: {
    card: 'rounded-lg border border-[#dfe7d8] bg-white p-4 shadow-[0_8px_22px_rgba(18,64,39,0.07)]',
    title: 'text-xs font-semibold uppercase tracking-[0.14em] text-slate-600',
    grid: '#dfe7d8',
    axis: '#64748b',
    tooltip: {
      backgroundColor: '#ffffff',
      border: '1px solid #dfe7d8',
      borderRadius: 8,
      color: '#0f172a',
    },
  },
}

function renderSeries(type, series) {
  const SeriesComponent = seriesComponents[type]

  return series.map(({ dataKey, name, color, fill, strokeWidth = 3 }) => {
    if (type === 'bar') {
      return <SeriesComponent key={dataKey} dataKey={dataKey} name={name} fill={color} radius={[6, 6, 0, 0]} />
    }

    if (type === 'area') {
      return (
        <SeriesComponent
          key={dataKey}
          type="monotone"
          dataKey={dataKey}
          name={name}
          stroke={color}
          fill={fill || color}
          fillOpacity={0.35}
          strokeWidth={strokeWidth}
        />
      )
    }

    return (
      <SeriesComponent
        key={dataKey}
        type="monotone"
        dataKey={dataKey}
        name={name}
        stroke={color}
        strokeWidth={strokeWidth}
        dot={{ r: 4, strokeWidth: 2 }}
        activeDot={{ r: 6 }}
      />
    )
  })
}

function DashboardChart({
  title,
  data,
  type = 'line',
  series,
  xDataKey = 'time',
  height = 'h-52',
  variant = 'light',
  className = '',
}) {
  const ChartComponent = chartComponents[type] || LineChart
  const styles = variantStyles[variant] || variantStyles.light

  return (
    <div className={`${styles.card} ${className}`}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={`${title ? 'mt-3' : ''} ${height}`}>
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data} margin={{ top: 8, right: 12, left: -14, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={styles.grid} vertical={false} />
            <XAxis dataKey={xDataKey} tick={{ fontSize: 12, fill: styles.axis }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: styles.axis }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={styles.tooltip} cursor={{ stroke: styles.grid }} />
            {renderSeries(type, series)}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DashboardChart
