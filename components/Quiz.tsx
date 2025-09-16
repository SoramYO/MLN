"use client"
import { useEffect, useState } from "react"

type Q = { id: string; question: string; choices: string[]; answer: number; explain?: string }

export default function Quiz() {
  const [qs, setQs] = useState<Q[]>([])
  const [picked, setPicked] = useState<Record<string, number>>({})
  const [score, setScore] = useState<number | null>(null)

  useEffect(() => {
    fetch("/data/quiz.json").then(r => r.json()).then(setQs)
  }, [])

  const submit = () => {
    let s = 0
    for (const q of qs) if (picked[q.id] === q.answer) s++
    setScore(s)
  }

  return (
    <div className="grid gap-4">
      <h3 className="font-semibold">Quiz</h3>
      {qs.map(q => {
        const chosen = picked[q.id]
        const isSubmitted = score !== null
        return (
        <div key={q.id} className="grid gap-2">
          <div className="font-medium">{q.question}</div>
          <div className="grid gap-2">
            {q.choices.map((c, i) => (
              <label key={i} className={`flex items-center gap-2 ${isSubmitted ? (i === q.answer ? "text-green-700" : (chosen === i ? "text-red-700" : "")) : ""}`}>
                <input
                  type="radio"
                  name={q.id}
                  checked={picked[q.id] === i}
                  onChange={() => setPicked({ ...picked, [q.id]: i })}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
          {isSubmitted && (
            <div className="text-sm text-gray-700">
              <div><strong>Đáp án đúng:</strong> {q.choices[q.answer]}</div>
              {q.explain && <div className="mt-1">{q.explain}</div>}
            </div>
          )}
        </div>
      )})}
      <button className="px-4 py-2 bg-black text-white rounded-xl" onClick={submit}>Nộp bài</button>
      {score !== null && <div>Kết quả: {score}/{qs.length}</div>}
    </div>
  )
}
