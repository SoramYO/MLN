import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

type Store = Record<string, { yes: number; no: number }>

const dbPath = path.join(process.cwd(), "poll-db.json")

async function readStore(): Promise<Store> {
  try {
    const data = await fs.readFile(dbPath, "utf-8")
    return JSON.parse(data)
  } catch {
    return {}
  }
}

async function writeStore(store: Store) {
  await fs.writeFile(dbPath, JSON.stringify(store, null, 2), "utf-8")
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const store = await readStore()
  const data = store[id] || { yes: 0, no: 0 }
  return NextResponse.json({ id, data })
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const body = await req.json().catch(() => ({})) as { type?: "yes" | "no" }
  if (body.type !== "yes" && body.type !== "no") return NextResponse.json({ error: "Invalid" }, { status: 400 })
  const store = await readStore()
  const curr = store[id] || { yes: 0, no: 0 }
  const next = { yes: curr.yes + (body.type === "yes" ? 1 : 0), no: curr.no + (body.type === "no" ? 1 : 0) }
  store[id] = next
  await writeStore(store)
  return NextResponse.json({ id, data: next })
}


