"use client";
import Link from "next/link";
import Poll from "@/components/Poll";
import Image from "next/image";
import dynamic from "next/dynamic";

const PieEthnic = dynamic(() => import("@/components/PieEthnic"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 grid gap-12">
        {/* Hero Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative z-10">
            <h1 className="h1 floating-animation">
              Vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nghiên cứu về quan hệ dân tộc tại Việt Nam - Khám phá sự đa dạng và đoàn kết
            </div>
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Dân tộc & phát triển"
                  width={1000}
                  height={1000}
                  priority
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Question Section */}
        <div className="card-academic max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>🎯</span>
                <span>Câu hỏi trung tâm</span>
              </div>
              <h2 className="h2 mb-6">
                Liệu có tồn tại hiện tượng "chiếm dụng" văn hóa, kinh tế, chính trị
                của dân tộc Kinh đối với các dân tộc thiểu số ở Việt Nam?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="max-w-sm mx-auto mb-6">
                    <PieEthnic />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Poll
                  id="home-initial"
                  question="Quan điểm ban đầu của bạn về vấn đề này?"
                  yesLabel="Có tồn tại chiếm dụng"
                  noLabel="Không có chiếm dụng"
                />
                <div className="text-center">
                  <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    💡 Hãy khám phá các phần tiếp theo để tìm hiểu sâu hơn về vấn đề này
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/theory" className="btn-primary pulse-glow">
            🚀 Bắt đầu hành trình khám phá
          </Link>
        </div>

        {/* Content Discovery Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="h2 mb-4">🎨 Khám phá nội dung</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chọn một chủ đề để bắt đầu hành trình tìm hiểu về vấn đề dân tộc tại Việt Nam
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/theory"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="h3 m-0">Lý thuyết dân tộc</h3>
                </div>
                <p className="text-academic">
                  Khái niệm, đặc trưng và quan điểm M-L về vấn đề dân tộc
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/vietnam-ethnic"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="h3 m-0">Đặc điểm dân tộc VN</h3>
                </div>
                <p className="text-academic">
                  6 đặc điểm nổi bật của quan hệ dân tộc tại Việt Nam
                </p>
                <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/policy"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="h3 m-0">Quan điểm & Chính sách</h3>
                </div>
                <p className="text-academic">
                  Đường lối của Đảng và chính sách dân tộc hiện hành
                </p>
                <div className="mt-4 flex items-center text-red-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/analysis"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="h3 m-0">Phân tích học thuật</h3>
                </div>
                <p className="text-academic">
                  Ma trận lập luận và kết luận khoa học
                </p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/engage"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="h3 m-0">Tương tác</h3>
                </div>
                <p className="text-academic">Quiz, thăm dò ý kiến và thảo luận</p>
                <div className="mt-4 flex items-center text-orange-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/sources"
              className="card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="h3 m-0">Nguồn & AI</h3>
                </div>
                <p className="text-academic">
                  Giáo trình, tài liệu và công cụ AI hỗ trợ
                </p>
                <div className="mt-4 flex items-center text-gray-600 text-sm font-medium">
                  <span>Khám phá</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
