"use client"

export default function DebateCard({ title, fact, source }: { title: string; fact: string; source: string }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-sm mt-2">{fact}</div>
      <a className="text-sm text-blue-600 mt-2 inline-block" href={source} target="_blank">Nguồn</a>
    </div>
  )
}
