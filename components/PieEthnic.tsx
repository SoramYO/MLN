"use client"
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Kinh", value: 85.3 },
  { name: "DTTS", value: 14.7 }
]
const COLORS = ["#1d4ed8", "#60a5fa"]

export default function PieEthnic() {
  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: any) => `${v}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


