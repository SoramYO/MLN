"use client"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useMemo, useState } from "react"
import type { Feature as LeafletFeature, Layer } from "leaflet"

type Feature = { type: string; properties: any; geometry: any }

export default function MapEthnic() {
  const [geo, setGeo] = useState<any>(null)
  const [csv, setCsv] = useState<Record<string, any>[]>([])
  const [region, setRegion] = useState<string>("all")

  useEffect(() => {
    fetch("/data/provinces.geojson").then(r => r.json()).then(setGeo)
    fetch("/data/ethnic_by_province.csv").then(r => r.text()).then(t => {
      const lines = t.trim().split("\n")
      const headers = lines[0].split(",")
      const arr = lines.slice(1).map(l => {
        const cols = l.split(",")
        const o: any = {}
        headers.forEach((h, i) => o[h] = isNaN(Number(cols[i])) ? cols[i] : Number(cols[i]))
        return o
      })
      setCsv(arr)
    })
  }, [])

  const style = (f: Feature) => {
    const code = f.properties.code
    const row = csv.find(r => r.province_code == code)
    const p = row ? Number(row.dt_ts_share) : 0
    const w = p >= 50 ? "#4c1d95" : p >= 30 ? "#6d28d9" : p >= 15 ? "#8b5cf6" : p >= 5 ? "#a78bfa" : "#ddd"
    return { color: "#999", weight: 0.5, fillColor: w, fillOpacity: 0.8 }
  }

  const onEachFeature = (feature: LeafletFeature, layer: Layer) => {
    const code = (feature.properties as any)?.code
    const name = (feature.properties as any)?.name
    const row = csv.find(r => r.province_code == code)
    const share = row ? Number(row.dt_ts_share) : 0
    const total = row ? Number(row.total_population) : undefined
    const dt = row ? Number(row.dt_ts_population) : undefined
    const title = `${name} — DTTS: ${share}%${total ? ` (≈${dt?.toLocaleString("vi-VN")}/${total.toLocaleString("vi-VN")})` : ""}`
    // @ts-ignore bindTooltip exists on Path layers
    ;(layer as any).bindTooltip(title, { sticky: true })
  }

  const filteredGeo = useMemo(() => {
    if (!geo) return null
    if (region === "all") return geo
    const regionCodes: Record<string, number[]> = {
      nmpb: [10, 11], // Trung du miền núi phía Bắc (sample)
      taynguyen: [66],
      dnb: [75, 79]
    }
    const codes = regionCodes[region] || []
    return {
      ...geo,
      features: geo.features.filter((f: any) => codes.includes(f.properties.code))
    }
  }, [geo, region])

  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-700">Lọc vùng:</label>
        <select
          className="border rounded-xl px-3 py-1 text-sm"
          value={region}
          onChange={e => setRegion(e.target.value)}
        >
          <option value="all">Tất cả</option>
          <option value="nmpb">Trung du miền núi phía Bắc</option>
          <option value="taynguyen">Tây Nguyên</option>
          <option value="dnb">Đông Nam Bộ</option>
        </select>
      </div>
      <div className="w-full h-[480px]">
        <MapContainer center={[16.2, 107.6]} zoom={5} style={{ width: "100%", height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredGeo && <GeoJSON data={filteredGeo as any} style={style as any} onEachFeature={onEachFeature as any} />}
        </MapContainer>
        <div className="text-sm mt-2 text-gray-600">Tô màu theo tỷ lệ DTTS (hover để xem chi tiết)</div>
      </div>
    </div>
  )
}
