import { NextRequest } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "poll-db.json")

async function readData(id: string) {
  try {
    const raw = await fs.readFile(dbPath, "utf-8")
    const store = JSON.parse(raw) as Record<string, { yes: number; no: number }>
    return store[id] || { yes: 0, no: 0 }
  } catch {
    return { yes: 0, no: 0 }
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const ts = new TransformStream()
  const writer = ts.writable.getWriter()
  const enc = new TextEncoder()

  const send = async () => {
    const data = await readData(id)
    try {
      await writer.write(enc.encode(`data: ${JSON.stringify({ id, data })}\n\n`))
    } catch {
      // writer may be closed; ignore
    }
  }

  const interval = setInterval(send, 1000)
  req.signal.addEventListener("abort", () => {
    clearInterval(interval)
    try { writer.close() } catch {}
  })
  await send()

  return new Response(ts.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*"
    }
  })
}


