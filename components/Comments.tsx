"use client"
import { useEffect, useState } from "react"

type Comment = { id: string; author: string; text: string; createdAt: number }

export default function Comments({ slug }: { slug: string }) {
  const [items, setItems] = useState<Comment[]>([])
  const [author, setAuthor] = useState("")
  const [text, setText] = useState("")

  const load = () => fetch(`/api/comments/${slug}`).then(r => r.json()).then(setItems)
  useEffect(() => { load(); const t = setInterval(load, 5000); return () => clearInterval(t) }, [slug])

  const submit = async () => {
    if (!author.trim() || !text.trim()) return
    await fetch(`/api/comments/${slug}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ author, text }) })
    setText("")
    load()
  }

  return (
    <div className="grid gap-3">
      <h3 className="h3">Thảo luận</h3>
      <div className="grid gap-2">
        {items.map(i => (
          <div key={i.id} className="border rounded-xl p-3 bg-white">
            <div className="text-sm text-gray-600">{i.author} • {new Date(i.createdAt).toLocaleString("vi-VN")}</div>
            <div className="mt-1">{i.text}</div>
          </div>
        ))}
        {items.length === 0 && <div className="text-sm text-gray-500">Hãy là người bình luận đầu tiên.</div>}
      </div>
      <div className="flex gap-2">
        <input className="border rounded-xl px-3 py-2 flex-1" placeholder="Tên" value={author} onChange={e => setAuthor(e.target.value)} />
        <input className="border rounded-xl px-3 py-2 flex-[2]" placeholder="Ý kiến của bạn" value={text} onChange={e => setText(e.target.value)} />
        <button className="btn-secondary" onClick={submit}>Gửi</button>
      </div>
    </div>
  )
}


