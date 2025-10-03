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
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💬</span>
            <span>Phần 5: Tương tác & Thảo luận</span>
          </div>
          <h2 className="h2">
            Tương tác
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tham gia quiz, thăm dò ý kiến và thảo luận về vấn đề dân tộc
          </p>
        </div>
      </div>
      {/* Interactive Elements Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="h3">Quiz kiến thức</h3>
            </div>
            <Quiz />
            <button 
              className="mt-6 w-full btn-secondary group-hover:scale-105 transition-transform duration-300" 
              onClick={() => setOpen(true)}
            >
              <span className="mr-2">🔍</span>
              Fact-check Điều 5 Hiến pháp
            </button>
          </div>
        </div>
        
        <div className="card relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="h3">Thăm dò ý kiến</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <Poll 
                  id="engage-before" 
                  question="Theo bạn có hiện tượng chiếm dụng?" 
                  yesLabel="Có" 
                  noLabel="Không" 
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <Poll 
                  id="engage-after" 
                  question="Sau khi xem nội dung, bạn có thay đổi quan điểm?" 
                  yesLabel="Có" 
                  noLabel="Không" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Debate Cards Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="h3">Debate Cards</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group hover:scale-105 transition-transform duration-300">
              <DebateCard 
                title="Pháp lý" 
                fact="Điều 5 Hiến pháp cấm kỳ thị, bảo đảm bình đẳng dân tộc." 
                source="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" 
              />
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <DebateCard 
                title="Thực trạng" 
                fact="Tỷ lệ nghèo DTTS cao hơn trung bình nhưng xu hướng cải thiện 2010–2020." 
                source="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" 
              />
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <DebateCard 
                title="Chính sách" 
                fact="NQ-88 (2019) và QĐ-1719 (2021) là chương trình mục tiêu thu hẹp khoảng cách." 
                source="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" 
              />
            </div>
          </div>
        </div>
      </div>

      <FactCheckModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
