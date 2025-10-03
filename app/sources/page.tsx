export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 grid gap-8">
      <div className="text-center">
        <h1 className="h1">Nguồn tài liệu & Minh bạch AI</h1>
        <p className="text-xl text-gray-600">Tài liệu tham khảo và công cụ AI hỗ trợ</p>
      </div>

      {/* Nguồn tài liệu */}
      <div className="card">
        <h2 className="h2 mb-4">📚 Nguồn tài liệu chính</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Giáo trình</h3>
            <p className="text-academic mb-3">
              Chương 6 (tr.195–213) – Dân tộc trong thời kỳ quá độ lên CNXH.
            </p>
            <ul className="list-disc pl-6 text-academic space-y-2">
              <li>Mục 1: Khái niệm dân tộc (nghĩa rộng, nghĩa hẹp); 5 đặc trưng; 3 tiêu chí tộc người.</li>
              <li>Mục 2: Hai xu hướng khách quan; Cương lĩnh dân tộc của V.I. Lênin.</li>
              <li>Mục 3: Đặc điểm dân tộc và quan hệ dân tộc ở Việt Nam.</li>
              <li>Mục 4: Quan điểm của Đảng và chính sách dân tộc.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">Nguồn: Giáo trình 2021.</p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-lg mb-3">Văn bản pháp lý & Báo cáo</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 text-left border">Nguồn</th>
                    <th className="py-2 px-3 text-left border">Mô tả</th>
                    <th className="py-2 px-3 text-center border">Liên kết</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border">Hiến pháp 2013, Điều 5</td>
                    <td className="py-2 px-3 border text-gray-600">Nguyên tắc bình đẳng dân tộc</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border">NQ-24-NQ/TW (2003)</td>
                    <td className="py-2 px-3 border text-gray-600">Chiến lược công tác dân tộc</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border">NQ-88/2019/QH14</td>
                    <td className="py-2 px-3 border text-gray-600">Đề án tổng thể vùng DTTS&MN</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border">QĐ-1719/QĐ-TTg (2021)</td>
                    <td className="py-2 px-3 border text-gray-600">Chương trình MTQG 2021–2030</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border">UNFPA: TĐT 2019</td>
                    <td className="py-2 px-3 border text-gray-600">Tổng điều tra Dân số và Nhà ở</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://vietnam.unfpa.org/vi/news/k%E1%BA%BFt-qu%E1%BA%A3-t%E1%BB%95ng-%C4%91i%E1%BB%81u-tra-d%C3%A2n-s%E1%BB%91-v%C3%A0-nh%C3%A0-%E1%BB%9F-n%C4%83m-2019?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border">WB/UNDP</td>
                    <td className="py-2 px-3 border text-gray-600">Nghèo đa chiều DTTS 2022+</td>
                    <td className="py-2 px-3 border text-center">
                      <a className="text-blue-600 hover:underline" href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* AI Usage */}
      <div className="card bg-gradient-to-br from-purple-50 to-blue-50">
        <h2 className="h2 mb-4">🤖 Công cụ AI & Minh bạch</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Công cụ & Mục đích</h3>
            <ul className="list-disc pl-6 text-academic space-y-2">
              <li><strong>NotebookLM:</strong> Tóm tắt nội dung, gợi ý câu hỏi quiz.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Phạm vi AI</h3>
            <ul className="list-disc pl-6 text-academic space-y-2">
              <li>AI chỉ hỗ trợ tạo skeleton, sơ đồ, quiz; không thay thế nội dung học thuật.</li>
              <li>Nội dung cuối do nhóm biên tập, kiểm chứng nguồn trước khi công bố.</li>
              <li>Tất cả thông tin được đối chiếu với văn bản pháp lý và giáo trình chính thống.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-6 pt-6">
          <h3 className="font-semibold text-lg mb-2">✓ Cam kết liêm chính</h3>
          <p className="text-academic">
            Tôn trọng nguồn chính thống; trích dẫn rõ ràng; minh bạch vai trò AI. Mọi dữ liệu và phân tích đều dựa trên tài liệu tham khảo đã được kiểm chứng và có nguồn gốc rõ ràng.
          </p>
        </div>
      </div>
    </div>
  )
}
