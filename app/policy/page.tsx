import PolicyTimeline from "@/components/PolicyTimeline"

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏛️</span>
            <span>Phần 3: Chính sách & Quan điểm</span>
          </div>
          <h2 className="h2">
            Quan điểm của Đảng và chính sách dân tộc
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tìm hiểu đường lối của Đảng và các chính sách dân tộc hiện hành tại Việt Nam
          </p>
        </div>
      </div>

      {/* Party's Views Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="h3">Quan điểm của Đảng về vấn đề dân tộc</h3>
          </div>
          
          <div className="grid gap-4">
            <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <p className="text-academic">Vấn đề dân tộc và đoàn kết dân tộc là chiến lược cơ bản, lâu dài, đồng thời cấp bách.</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <p className="text-academic">Các dân tộc trong đại gia đình Việt Nam bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển; kiên quyết chống kỳ thị, chia rẽ dân tộc.</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <p className="text-academic">Phát triển toàn diện chính trị, kinh tế, văn hóa, xã hội gắn với quốc phòng - an ninh ở vùng dân tộc và miền núi.</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                <p className="text-academic">Ưu tiên đầu tư vùng dân tộc thiểu số và miền núi: hạ tầng, giảm nghèo bền vững, phát huy nội lực và xây dựng đội ngũ cán bộ là người DTTS.</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                <p className="text-academic">Giữ gìn và phát huy bản sắc văn hóa các dân tộc; mở rộng giao lưu nhưng chống đồng hóa, bảo vệ nền tảng tư tưởng trước "diễn biến hòa bình".</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                <p className="text-academic">Công tác dân tộc là nhiệm vụ của cả hệ thống chính trị: toàn Đảng, toàn dân, toàn quân và các cấp, ngành.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Groups Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="h3">Nhóm chính sách</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-academic group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏛️</span>
                </div>
                <h4 className="font-semibold text-lg">Chính trị & QP-AN</h4>
              </div>
              <ul className="space-y-2 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bảo đảm quyền bình đẳng, tôn trọng và tham gia của đồng bào DTTS vào đời sống chính trị.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Tăng cường quốc phòng - an ninh trên địa bàn chiến lược: biên giới, hải đảo, vùng sâu xa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Xây dựng thế trận quốc phòng toàn dân, gắn kết quân - dân, giữ vững ổn định chính trị, TTATXH.</span>
                </li>
              </ul>
            </div>
            
            <div className="card-academic group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h4 className="font-semibold text-lg">Kinh tế</h4>
              </div>
              <ul className="space-y-2 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ưu tiên đầu tư hạ tầng then chốt; thúc đẩy kết nối vùng và tiếp cận thị trường.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Triển khai chương trình mục tiêu quốc gia để thu hẹp chênh lệch phát triển giữa các vùng, dân tộc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Phát huy tiềm năng, thế mạnh địa phương đi đôi với bảo vệ bền vững môi trường sinh thái.</span>
                </li>
              </ul>
            </div>
            
            <div className="card-academic group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h4 className="font-semibold text-lg">Văn hóa</h4>
              </div>
              <ul className="space-y-2 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Giữ gìn và phát huy giá trị văn hóa vật thể, phi vật thể của các tộc người.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Phát triển ngôn ngữ, chữ viết phù hợp; xây dựng đời sống văn hóa cơ sở.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mở rộng giao lưu văn hóa, nâng cao "miễn dịch" trước đồng hóa và thông tin xấu độc.</span>
                </li>
              </ul>
            </div>
            
            <div className="card-academic group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h4 className="font-semibold text-lg">Xã hội</h4>
              </div>
              <ul className="space-y-2 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bảo đảm an sinh xã hội; nâng cao chất lượng giáo dục, y tế vùng DTTS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Giảm nghèo đa chiều bền vững gắn với tạo sinh kế phù hợp đặc thù tộc người.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Chú trọng phát triển, bồi dưỡng nguồn nhân lực và cán bộ người DTTS.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 card-academic group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-lg">An ninh - Quốc phòng</h4>
            </div>
            <ul className="space-y-2 text-academic">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Phối hợp lực lượng giữ vững chủ quyền lãnh thổ; bảo đảm an ninh chính trị, TTATXH.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Tăng cường hiện diện nhà nước ở vùng biên, nâng cao hiệu quả quản trị địa phương.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="h3">Phân tích đặc điểm dân tộc ở Việt Nam</h3>
          </div>
          
          <div className="grid gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Chênh lệch quy mô dân số giữa các tộc người</h4>
                  <p className="text-academic text-sm">Dân tộc Kinh chiếm đa số; một số tộc người rất ít dân → khó khăn trong bảo tồn tiếng nói, văn hóa, tổ chức đời sống.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Cư trú xen kẽ, phân tán</h4>
                  <p className="text-academic text-sm">Không có lãnh thổ tộc người riêng → thuận lợi giao lưu, đoàn kết; song dễ nảy sinh mâu thuẫn, bị lợi dụng để chia rẽ.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Phân bố ở địa bàn chiến lược</h4>
                  <p className="text-academic text-sm">53 DTTS cư trú trên phần lớn diện tích lãnh thổ, nhất là biên giới, hải đảo, vùng sâu xa → ý nghĩa QP-AN rất lớn.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-1">Trình độ phát triển không đều</h4>
                  <p className="text-academic text-sm">Khác biệt lớn về KT, VH, XH; cần các chính sách thu hẹp khoảng cách, nâng cao dân trí và kỹ năng.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Truyền thống đại đoàn kết lâu đời</h4>
                  <p className="text-academic text-sm">Là động lực, sức mạnh quyết định trong dựng nước, giữ nước; cần tiếp tục phát huy trong giai đoạn mới.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-1">Bản sắc văn hóa đa dạng trong thống nhất</h4>
                  <p className="text-academic text-sm">Mỗi dân tộc có sắc thái riêng, góp phần làm phong phú văn hóa Việt Nam; cần bảo tồn và phát huy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="h3">Mốc quan trọng</h3>
          </div>
          <PolicyTimeline />
        </div>
      </div>
    </div>
  )
}
