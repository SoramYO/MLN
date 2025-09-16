"use client"
import { useEffect } from "react"

export default function FactCheckModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 grid gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Fact-check: Điều 5 Hiến pháp 2013</h3>
            <button className="text-gray-500" onClick={onClose}>✕</button>
          </div>
          <div className="text-sm leading-6">
            <p><strong>Nguyên tắc:</strong> Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm kỳ thị, chia rẽ dân tộc. Các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc văn hóa; Nhà nước tạo điều kiện để phát triển toàn diện.</p>
            <p className="mt-3"><strong>Nguồn:</strong> Hiến pháp 2013, Điều 5. <a className="text-blue-600" href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem văn bản</a></p>
            <p className="mt-3">Báo cáo WB/UNDP ghi nhận chênh lệch nghèo đa chiều của một số nhóm DTTS còn cao, nhưng khung pháp lý và chính sách hướng tới thu hẹp khoảng cách, không dung thứ phân biệt đối xử.</p>
            <p className="mt-1"><a className="text-blue-600" href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Báo cáo WB/UNDP 2022+</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}


