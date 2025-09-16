"use client"
import { useEffect, useState, useRef } from "react"

type Comment = { id: string; author: string; text: string; createdAt: number }

interface CommentsPopupProps {
  slug: string
  isOpen: boolean
  onClose: () => void
  position: { x: number; y: number }
  onPositionChange: (position: { x: number; y: number }) => void
}

export default function CommentsPopup({ 
  slug, 
  isOpen, 
  onClose, 
  position, 
  onPositionChange 
}: CommentsPopupProps) {
  const [items, setItems] = useState<Comment[]>([])
  const [author, setAuthor] = useState("")
  const [text, setText] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const popupRef = useRef<HTMLDivElement>(null)

  const load = () => fetch(`/api/comments/${slug}`).then(r => r.json()).then(setItems)
  useEffect(() => { 
    if (isOpen) {
      load()
      const t = setInterval(load, 5000)
      return () => clearInterval(t)
    }
  }, [slug, isOpen])

  const submit = async () => {
    if (!author.trim() || !text.trim()) return
    await fetch(`/api/comments/${slug}`, { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ author, text }) 
    })
    setText("")
    load()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!popupRef.current) return
    const rect = popupRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    }
    
    // Giới hạn trong viewport
    const maxX = window.innerWidth - 400 // chiều rộng popup
    const maxY = window.innerHeight - 500 // chiều cao popup
    
    newPosition.x = Math.max(0, Math.min(newPosition.x, maxX))
    newPosition.y = Math.max(0, Math.min(newPosition.y, maxY))
    
    onPositionChange(newPosition)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  if (!isOpen) return null

  return (
    <div 
      ref={popupRef}
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 w-[480px] max-h-[600px] flex flex-col z-50 backdrop-blur-sm"
      style={{ 
        left: position.x, 
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Header có thể kéo */}
      <div 
        className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 m-0">Thảo luận cộng đồng</h3>
        </div>
        <button 
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors duration-200"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Nội dung comments */}
      <div className="flex-1 overflow-y-auto p-5 max-h-96">
        <div className="space-y-4">
          {items.map(i => (
            <div key={i.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow duration-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {i.author.charAt(0).toUpperCase()}
                </div>
                <div className="text-sm font-medium text-gray-700">{i.author}</div>
                <div className="text-xs text-gray-500">
                  {new Date(i.createdAt).toLocaleString("vi-VN")}
                </div>
              </div>
              <div className="text-gray-800 leading-relaxed pl-8">{i.text}</div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Chưa có bình luận nào</p>
              <p className="text-gray-400 text-xs mt-1">Hãy là người đầu tiên chia sẻ ý kiến!</p>
            </div>
          )}
        </div>
      </div>

      {/* Form nhập comment */}
      <div className="p-5 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-2xl">
        <div className="space-y-3">
          <input 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white" 
            placeholder="Tên của bạn" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
          />
          <textarea 
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white" 
            placeholder="Chia sẻ ý kiến của bạn..." 
            rows={3}
            value={text} 
            onChange={e => setText(e.target.value)} 
          />
          <button 
            className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              !author.trim() || !text.trim() 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
            }`}
            onClick={submit}
            disabled={!author.trim() || !text.trim()}
          >
            <div className="flex items-center justify-center gap-2">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
              </svg>
              Gửi bình luận
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}


