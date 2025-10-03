"use client"
import dynamic from "next/dynamic"
import DebateCard from "@/components/DebateCard"
import { useState } from "react"
import FactCheckModal from "@/components/FactCheckModal"
 

const Quiz = dynamic(() => import("@/components/Quiz"), { ssr: false })
const Poll = dynamic(() => import("@/components/Poll"), { ssr: false })
const UnityJourney = dynamic(() => import("@/components/UnityJourney"), { ssr: false })

export default function Page() {
  const [open, setOpen] = useState(false)
  return (
    <div className="grid gap-6">
      <h2 className="h2">Tương tác</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card">
          <Quiz />
          <button className="mt-4 px-4 py-2 rounded-xl bg-gray-100" onClick={() => setOpen(true)}>Fact-check Điều 5</button>
        </div>
        <div className="card">
          <Poll id="engage-before" question="Theo bạn có hiện tượng chiếm dụng?" yesLabel="Có" noLabel="Không" />
          <div className="mt-6">
            <Poll id="engage-after" question="Sau khi xem nội dung, bạn có thay đổi quan điểm?" yesLabel="Có" noLabel="Không" />
          </div>
        </div>
      </div>

      

      <div className="grid gap-3">
        <h3 className="font-semibold">Debate cards</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <DebateCard title="Pháp lý" fact="Điều 5 Hiến pháp cấm kỳ thị, bảo đảm bình đẳng dân tộc." source="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" />
          <DebateCard title="Thực trạng" fact="Tỷ lệ nghèo DTTS cao hơn trung bình nhưng xu hướng cải thiện 2010–2020." source="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" />
          <DebateCard title="Chính sách" fact="NQ-88 (2019) và QĐ-1719 (2021) là chương trình mục tiêu thu hẹp khoảng cách." source="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" />
        </div>
      </div>

      <FactCheckModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
