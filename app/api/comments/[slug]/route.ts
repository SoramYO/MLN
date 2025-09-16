import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

type Comment = { id: string; author: string; text: string; createdAt: number }
type Store = Record<string, Comment[]>

const dbPath = path.join(process.cwd(), "comments-db.json")

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

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const store = await readStore()
  return NextResponse.json(store[params.slug] || [])
}

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const { author, text } = await req.json().catch(() => ({})) as { author?: string; text?: string }
  if (!author || !text) return NextResponse.json({ error: "Invalid" }, { status: 400 })
  const store = await readStore()
  const arr = store[params.slug] || []
  const item: Comment = { id: Math.random().toString(36).slice(2), author, text, createdAt: Date.now() }
  arr.push(item)
  store[params.slug] = arr
  await writeStore(store)
  return NextResponse.json(item)
}


