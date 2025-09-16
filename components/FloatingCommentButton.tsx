"use client"
import { useState, useRef, useEffect } from "react"

interface FloatingCommentButtonProps {
  onClick: () => void
  position: { x: number; y: number }
  onPositionChange: (position: { x: number; y: number }) => void
  isVisible: boolean
}

export default function FloatingCommentButton({ 
  onClick, 
  position, 
  onPositionChange,
  isVisible
}: FloatingCommentButtonProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [hasBeenDragged, setHasBeenDragged] = useState(false)
  const [dragStartTime, setDragStartTime] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    e.preventDefault()
    e.stopPropagation()
    
    const rect = buttonRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setIsDragging(true)
    setHasBeenDragged(false)
    setDragStartTime(Date.now())
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    
    // Chỉ coi là drag nếu di chuyển đủ xa hoặc đủ lâu
    const dragDistance = Math.sqrt(
      Math.pow(e.clientX - (position.x + dragOffset.x), 2) +
      Math.pow(e.clientY - (position.y + dragOffset.y), 2)
    )
    
    if (dragDistance > 5 || Date.now() - dragStartTime > 150) {
      setHasBeenDragged(true)
    }
    
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    }
    
    // Giới hạn trong viewport với kích thước button 64px
    const buttonSize = 64
    const maxX = window.innerWidth - buttonSize
    const maxY = window.innerHeight - buttonSize
    
    newPosition.x = Math.max(0, Math.min(newPosition.x, maxX))
    newPosition.y = Math.max(0, Math.min(newPosition.y, maxY))
    
    // Sử dụng requestAnimationFrame để cập nhật mượt mà hơn
    requestAnimationFrame(() => {
      onPositionChange(newPosition)
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    
    // Nếu không có drag thì mới trigger onClick
    setTimeout(() => {
      if (!hasBeenDragged) {
        onClick()
      }
      setHasBeenDragged(false)
    }, 0)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!hasBeenDragged) {
      onClick()
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false })
      document.addEventListener('mouseup', handleMouseUp, { passive: false })
      document.body.style.userSelect = 'none'
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.userSelect = ''
      }
    }
  }, [isDragging, dragOffset, dragStartTime, position])

  if (!isVisible) return null

  return (
    <button
      ref={buttonRef}
      className={`fixed w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-40 select-none transform hover:scale-110 active:scale-95 ${isDragging ? 'scale-110 shadow-2xl' : ''}`}
      style={{ 
        left: position.x, 
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: `translate3d(0, 0, 0) ${isDragging ? 'scale(1.1)' : 'scale(1)'}`,
        willChange: 'transform'
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      title="Thảo luận"
    >
      <svg 
        width="26" 
        height="26" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        className="pointer-events-none drop-shadow-sm"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    </button>
  )
}
