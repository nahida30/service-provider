'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@mui/material"

interface ChartData {
  month: string
  sales: number
  revenue: number
}

interface SalesRevenueChartProps {
  data: ChartData[]
}

export default function SalesRevenueChart({ data }: SalesRevenueChartProps) {
  return (
    <Card className="w-full max-w-3xl">
      <CardContent>
        <h2>Sales and Revenue Chart</h2>
        <p>Monthly sales and revenue data</p>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

