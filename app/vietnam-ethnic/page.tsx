"use client"
import Image from "next/image"

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🗺️</span>
            <span>Phần 2: Đặc điểm Việt Nam</span>
          </div>
          <h2 className="h2">
            Đặc điểm dân tộc Việt Nam
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Khám phá 6 đặc điểm nổi bật của quan hệ dân tộc tại Việt Nam
          </p>
        </div>
      </div>

      {/* Characteristics Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="h3">6 đặc điểm nổi bật</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Chênh lệch quy mô dân số</h4>
                    <p className="text-academic text-sm">Kinh ≈ 85,3% (≈82,09 triệu, 2019); một số DTTS >1 triệu, nhiều DTTS rất ít người.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Cư trú xen kẽ</h4>
                    <p className="text-academic text-sm">Không có lãnh thổ tộc người riêng; phân bố đan xen theo lịch sử di cư và điều kiện sinh kế.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">Địa bàn chiến lược</h4>
                    <p className="text-academic text-sm">DTTS cư trú chủ yếu ở miền núi, biên giới, hải đảo; khu vực này chiếm khoảng 3/4 diện tích tự nhiên.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-1">Phát triển không đều</h4>
                    <p className="text-academic text-sm">Chênh lệch về KT–VH–XH, hạ tầng, giáo dục; cần chính sách thu hẹp khoảng cách.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Truyền thống đại đoàn kết</h4>
                    <p className="text-academic text-sm">Hình thành sớm trong quá trình dựng nước, giữ nước; là động lực phát triển.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-1">Đa dạng văn hóa</h4>
                    <p className="text-academic text-sm">Thống nhất trong đa dạng; tôn trọng, bảo tồn bản sắc và ngôn ngữ từng tộc người.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📊</span>
              <span className="font-semibold text-gray-700 text-sm">Nguồn chính</span>
            </div>
            <p className="text-xs text-gray-600">
              Tổng điều tra Dân số 2019 (GSO/UNFPA); NQ 24-NQ/TW; CEMA.
            </p>
          </div>
        </div>
      </div>

      {/* Atlas Map Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="h3">Bản đồ atlas dân tộc Việt Nam</h3>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-b">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span className="font-semibold text-gray-800">Phân bố dân tộc Việt Nam</span>
                </div>
              </div>
              <div className="p-4">
                <Image
                  src="/images/16.png"
                  alt="Atlas dân tộc Việt Nam"
                  width={1200}
                  height={1650}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📋</span>
              <span className="font-semibold text-gray-700 text-sm">Nguồn minh họa</span>
            </div>
            <p className="text-sm text-gray-600">
              Atlas dân tộc Việt Nam. Ảnh tĩnh thay cho bản đồ tương tác.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
