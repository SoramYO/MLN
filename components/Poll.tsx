"use client"
import { useEffect, useState } from "react"

export default function Poll({ id = "chiem-dung", question, yesLabel, noLabel }: { id?: string; question: string; yesLabel: string; noLabel: string }) {
  const key = `poll-${id}`
  const [data, setData] = useState({ yes: 0, no: 0 })
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(key)
    if (raw) {
      const obj = JSON.parse(raw)
      setVoted(obj.voted)
    }
    fetch(`/api/poll/${id}`).then(r => r.json()).then(res => setData(res.data))
    const es = new EventSource(`/api/poll/${id}/stream`)
    es.onmessage = (e) => {
      try { const payload = JSON.parse(e.data); setData(payload.data) } catch {}
    }
    return () => es.close()
  }, [id])

  const vote = (type: "yes" | "no") => {
    if (voted) return
    setVoted(true)
    localStorage.setItem(key, JSON.stringify({ voted: true }))
    fetch(`/api/poll/${id}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type }) })
      .then(r => r.json())
      .then(res => setData(res.data))
  }

  const total = data.yes + data.no
  const py = total ? Math.round((data.yes / total) * 100) : 0
  const pn = total ? 100 - py : 0

  return (
    <div className="grid gap-3">
      <h3 className="font-semibold">{question}</h3>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-xl bg-black text-white" onClick={() => vote("yes")}>{yesLabel}</button>
        <button className="px-4 py-2 rounded-xl bg-gray-200" onClick={() => vote("no")}>{noLabel}</button>
      </div>
      <div className="text-sm text-gray-600">Kết quả</div>
      <div className="w-full h-3 bg-gray-200 rounded-xl overflow-hidden">
        <div className="h-3 bg-black" style={{ width: py + "%" }} />
      </div>
      <div className="text-sm">{py}% {yesLabel} • {pn}% {noLabel} • {total} phiếu</div>
    </div>
  )
}
