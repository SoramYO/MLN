export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📚</span>
            <span>Phần 1: Nền tảng lý thuyết</span>
          </div>
          <h1 className="h1">
            Lý thuyết dân tộc trong thời kỳ quá độ lên CNXH
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Khám phá các khái niệm cơ bản và quan điểm Mác-Lênin về vấn đề dân
            tộc
          </p>
        </div>
      </div>

      {/* Section 1: Basic Concepts */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h2 className="h2">1. Khái niệm và đặc trưng cơ bản của dân tộc</h2>
          </div>

          <div className="grid gap-6">
            <div className="quote-box">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      🌍 Dân tộc nghĩa rộng (Nation)
                    </h4>
                    <p className="text-academic">
                      Cộng đồng người ổn định làm thành nhân dân một nước, có
                      lãnh thổ riêng, nền kinh tế thống nhất, có ngôn ngữ chung
                      và ý thức về sự thống nhất của mình.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      👥 Dân tộc nghĩa hẹp (Ethnie)
                    </h4>
                    <p className="text-academic">
                      Cộng đồng tộc người được hình thành trong lịch sử, có mối
                      liên hệ chặt chẽ và bền vững, có chung ý thức tự giác tộc
                      người, ngôn ngữ và văn hóa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h3 className="h3 flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏛️</span>
                    <span>5 đặc trưng cơ bản của dân tộc</span>
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        1
                      </span>
                      <div>
                        <strong className="text-green-800">
                          Lãnh thổ ổn định:
                        </strong>
                        <p className="text-academic text-sm">
                          Không gian sinh tồn, thể hiện chủ quyền của dân tộc
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        2
                      </span>
                      <div>
                        <strong className="text-green-800">
                          Phương thức sinh hoạt kinh tế chung:
                        </strong>
                        <p className="text-academic text-sm">
                          Đặc trưng quan trọng nhất, là cơ sở gắn kết các thành
                          viên
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        3
                      </span>
                      <div>
                        <strong className="text-green-800">
                          Ngôn ngữ chung:
                        </strong>
                        <p className="text-academic text-sm">
                          Công cụ giao tiếp trên mọi lĩnh vực
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        4
                      </span>
                      <div>
                        <strong className="text-green-800">
                          Văn hóa và tâm lý chung:
                        </strong>
                        <p className="text-academic text-sm">
                          Tạo nên bản sắc riêng của từng dân tộc
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        5
                      </span>
                      <div>
                        <strong className="text-green-800">
                          Nhà nước dân tộc:
                        </strong>
                        <p className="text-academic text-sm">
                          Yếu tố phân biệt dân tộc-quốc gia và dân tộc-tộc người
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                  <h3 className="h3 flex items-center gap-2 mb-4">
                    <span className="text-2xl">🎯</span>
                    <span>3 tiêu chí nhận diện tộc người</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        1
                      </span>
                      <div>
                        <strong className="text-orange-800">
                          Cộng đồng về ngôn ngữ:
                        </strong>
                        <p className="text-academic text-sm">
                          Tiêu chí cơ bản để phân biệt các tộc người
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        2
                      </span>
                      <div>
                        <strong className="text-orange-800">
                          Cộng đồng về văn hóa:
                        </strong>
                        <p className="text-academic text-sm">
                          Phản ánh truyền thống, lối sống, phong tục tập quán
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                        3
                      </span>
                      <div>
                        <strong className="text-orange-800">
                          Ý thức tự giác tộc người:
                        </strong>
                        <p className="text-academic text-sm">
                          Tiêu chí quan trọng nhất, quyết định sự tồn tại và
                          phát triển
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Marxism-Leninism */}
        <div className="card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="h2">2. Chủ nghĩa Mác-Lênin về vấn đề dân tộc</h2>
            </div>

            <div className="grid gap-8">
              <div>
                <h3 className="h3 mb-6">
                  🔀 Hai xu hướng khách quan trong quan hệ dân tộc:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-academic group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h4 className="font-semibold text-lg">
                        Xu hướng thứ nhất
                      </h4>
                    </div>
                    <p className="text-academic">
                      Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân
                      tộc độc lập do sự thức tỉnh về ý thức dân tộc.
                    </p>
                  </div>
                  <div className="card-academic group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h4 className="font-semibold text-lg">
                        Xu hướng thứ hai
                      </h4>
                    </div>
                    <p className="text-academic">
                      Các dân tộc muốn liên hiệp lại với nhau do sự phát triển
                      của lực lượng sản xuất và giao lưu kinh tế-văn hóa.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h3 mb-6">
                  📜 Cương lĩnh dân tộc của V.I. Lênin:
                </h3>
                <div className="quote-box text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                  <div className="text-6xl mb-4 opacity-30">"</div>
                  <p className="font-bold text-xl text-blue-900 leading-relaxed">
                    "Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự
                    quyết, liên hiệp công nhân tất cả các dân tộc lại"
                  </p>
                  <div className="text-6xl mt-4 opacity-30">"</div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h4 className="font-semibold text-lg text-blue-800">
                        Các dân tộc hoàn toàn bình đẳng
                      </h4>
                    </div>
                    <p className="text-academic">
                      Quyền thiêng liêng không phân biệt lớn nhỏ, trình độ phát
                      triển. Không dân tộc nào được giữ đặc quyền, đặc lợi.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h4 className="font-semibold text-lg text-green-800">
                        Các dân tộc được quyền tự quyết
                      </h4>
                    </div>
                    <p className="text-academic">
                      Quyền tự quyết định vận mệnh, lựa chọn chế độ chính trị và
                      con đường phát triển của dân tộc mình.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h4 className="font-semibold text-lg text-purple-800">
                        Liên hiệp công nhân tất cả các dân tộc
                      </h4>
                    </div>
                    <p className="text-academic">
                      Phản ánh sự thống nhất giữa giải phóng dân tộc và giải
                      phóng giai cấp, cơ sở để đoàn kết chống chủ nghĩa đế quốc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Section */}
          <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">📖</span>
              <h3 className="font-semibold text-gray-800">Nguồn tham khảo</h3>
            </div>
            <p className="text-sm text-gray-600">
              Giáo trình "Dân tộc trong thời kỳ quá độ lên CNXH", Chương 6,
              trang 195-213
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
