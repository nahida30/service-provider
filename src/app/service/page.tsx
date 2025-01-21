import React from 'react'
import { readJsonFile } from '../../utils/readJsonFile'
import SalesRevenueChart from '../../components/SalesRevenueChart'

interface ChartData {
  chartData: {
    month: string
    sales: number
    revenue: number
  }[]
}

export default function ServicePage() {
  const { chartData } = readJsonFile<ChartData>('src/data/chartData.json')

  return (
    <main className="flex  min-h-screen flex-col aurora-bg overflow-hidden items-center justify-between p-24">
      <SalesRevenueChart data={chartData} />
    </main>
  )
}
