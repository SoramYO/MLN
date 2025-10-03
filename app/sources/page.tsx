export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-slate-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📖</span>
            <span>Phần 7: Nguồn & Minh bạch</span>
          </div>
          <h1 className="h1">Nguồn tài liệu & Minh bạch AI</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tài liệu tham khảo và công cụ AI hỗ trợ - Đảm bảo tính minh bạch và
            khoa học
          </p>
        </div>
      </div>

      {/* Sources Section */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-slate-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <h2 className="h2">Nguồn tài liệu chính</h2>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                <span>Giáo trình</span>
              </h3>
              <p className="text-academic mb-4">
                Chương 6 (tr.195–213) – Dân tộc trong thời kỳ quá độ lên CNXH.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-academic">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mục 1: Khái niệm dân tộc (nghĩa rộng, nghĩa hẹp); 5 đặc
                      trưng; 3 tiêu chí tộc người.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mục 2: Hai xu hướng khách quan; Cương lĩnh dân tộc của
                      V.I. Lênin.
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2 text-academic">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mục 3: Đặc điểm dân tộc và quan hệ dân tộc ở Việt Nam.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mục 4: Quan điểm của Đảng và chính sách dân tộc.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  📋 Nguồn: Giáo trình 2021
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span>Văn bản pháp lý & Báo cáo</span>
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-blue-50">
                      <th className="py-4 px-4 text-left font-semibold text-gray-800 border-b">
                        📄 Nguồn
                      </th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-800 border-b">
                        📝 Mô tả
                      </th>
                      <th className="py-4 px-4 text-center font-semibold text-gray-800 border-b">
                        🔗 Liên kết
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        📜 Hiến pháp 2013, Điều 5
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Nguyên tắc bình đẳng dân tộc
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        📋 NQ-24-NQ/TW (2003)
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Chiến lược công tác dân tộc
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        📋 NQ-88/2019/QH14
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Đề án tổng thể vùng DTTS&MN
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        📋 QĐ-1719/QĐ-TTg (2021)
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Chương trình MTQG 2021–2030
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        📊 UNFPA: TĐT 2019
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Tổng điều tra Dân số và Nhà ở
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://vietnam.unfpa.org/vi/news/k%E1%BA%BFt-qu%E1%BA%A3-t%E1%BB%95ng-%C4%91i%E1%BB%81u-tra-d%C3%A2n-s%E1%BB%91-v%C3%A0-nh%C3%A0-%E1%BB%9F-n%C4%83m-2019?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 border-b font-medium">
                        🌍 WB/UNDP
                      </td>
                      <td className="py-4 px-4 border-b text-gray-600">
                        Nghèo đa chiều DTTS 2022+
                      </td>
                      <td className="py-4 px-4 border-b text-center">
                        <a
                          className="btn-secondary text-sm"
                          href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          🔗 Xem
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* AI Usage Section */}
        <div className="card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h2 className="h2">Công cụ AI & Minh bạch</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/50 rounded-xl">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  <span>Công cụ & Mục đích</span>
                </h3>
                <ul className="space-y-3 text-academic">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>NotebookLM:</strong> Tóm tắt nội dung, gợi ý câu
                      hỏi quiz.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/50 rounded-xl">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span>Phạm vi AI</span>
                </h3>
                <ul className="space-y-3 text-academic">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      AI chỉ hỗ trợ tạo skeleton, sơ đồ, quiz; không thay thế
                      nội dung học thuật.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Nội dung cuối do nhóm biên tập, kiểm chứng nguồn trước khi
                      công bố.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Tất cả thông tin được đối chiếu với văn bản pháp lý và
                      giáo trình chính thống.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-purple-200 mt-8 pt-6">
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Cam kết liêm chính</span>
                </h3>
                <p className="text-academic">
                  Tôn trọng nguồn chính thống; trích dẫn rõ ràng; minh bạch vai
                  trò AI. Mọi dữ liệu và phân tích đều dựa trên tài liệu tham
                  khảo đã được kiểm chứng và có nguồn gốc rõ ràng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
