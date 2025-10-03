"use client"
import Link from "next/link"
import Poll from "@/components/Poll"
import Image from "next/image"
import dynamic from "next/dynamic"

const PieEthnic = dynamic(() => import("@/components/PieEthnic"), { ssr: false })

export default function Page() {

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 grid gap-10">
      <div className="text-center">
        <h1 className="h1">Vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội</h1>
        <div className="text-xl text-gray-600 mb-6">Nghiên cứu về quan hệ dân tộc tại Việt Nam</div>
        <div className="max-w-5xl mx-auto">
          <Image src="/images/hero.jpg" alt="Dân tộc & phát triển" width={1000} height={1000} priority />
        </div>
      </div>
      
      <div className="card-academic max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Câu hỏi trung tâm</h2>
        <p className="text-lg text-center text-academic mb-6">
          Liệu có tồn tại hiện tượng "chiếm dụng" văn hóa, kinh tế, chính trị của dân tộc Kinh đối với các dân tộc thiểu số ở Việt Nam?
        </p>
        <div className="max-w-md mx-auto mb-4"><PieEthnic /></div>
        <Poll id="home-initial" question="Quan điểm ban đầu của bạn về vấn đề này?" yesLabel="Có tồn tại chiếm dụng" noLabel="Không có chiếm dụng" />
      </div>

      <div className="text-center">
        <Link href="/theory" className="btn-primary">Bắt đầu tìm hiểu</Link>
      </div>

      <div>
        <h2 className="h2 text-center mb-4">Khám phá nội dung</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/theory" className="card hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-1">
            <svg width="20" height="20" className="text-blue-700"><use href="/images/icons.svg#icon-book" /></svg>
            <h3 className="h3 m-0">Lý thuyết dân tộc</h3>
          </div>
          <p className="text-academic">Khái niệm, đặc trưng và quan điểm M-L về vấn đề dân tộc</p>
        </Link>
        <Link href="/vietnam-ethnic" className="card hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-1">
            <svg width="20" height="20" className="text-blue-700"><use href="/images/icons.svg#icon-map" /></svg>
            <h3 className="h3 m-0">Đặc điểm dân tộc VN</h3>
          </div>
          <p className="text-academic">6 đặc điểm nổi bật của quan hệ dân tộc tại Việt Nam</p>
        </Link>
        <Link href="/policy" className="card hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-1">
            <svg width="20" height="20" className="text-blue-700"><use href="/images/icons.svg#icon-flag" /></svg>
            <h3 className="h3 m-0">Quan điểm & Chính sách</h3>
          </div>
          <p className="text-academic">Đường lối của Đảng và chính sách dân tộc hiện hành</p>
        </Link>
        <Link href="/analysis" className="card hover:shadow-md transition-shadow">
          <h3 className="h3">Phân tích học thuật</h3>
          <p className="text-academic">Ma trận lập luận và kết luận khoa học</p>
        </Link>
        <Link href="/engage" className="card hover:shadow-md transition-shadow">
          <h3 className="h3">Tương tác</h3>
          <p className="text-academic">Quiz, thăm dò ý kiến và thảo luận</p>
        </Link>
        <Link href="/sources" className="card hover:shadow-md transition-shadow">
          <h3 className="h3">Nguồn & AI</h3>
          <p className="text-academic">Giáo trình, tài liệu và công cụ AI hỗ trợ</p>
        </Link>
        </div>
      </div>
      </div>

      
    </>
  )
}
