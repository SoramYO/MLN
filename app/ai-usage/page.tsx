export default function Page() {
  return (
    <div className="grid gap-4">
      <h2 className="h2">AI Usage</h2>
      <div className="card grid gap-3">
        <div>
          <h3 className="font-semibold">Công cụ & mục đích</h3>
          <ul className="list-disc pl-6 text-sm">
            <li>ChatGPT: phác thảo cấu trúc trang, gợi ý câu hỏi quiz, tạo dữ liệu demo.</li>
            <li>Leaflet: bản đồ tỉnh, tô màu theo tỷ lệ DTTS.</li>
            <li>ECharts (dự phòng): vẽ biểu đồ nếu cần mở rộng.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Phạm vi AI</h3>
          <ul className="list-disc pl-6 text-sm">
            <li>AI chỉ hỗ trợ tạo skeleton, sơ đồ, quiz; không thay thế nội dung học thuật.</li>
            <li>Nội dung cuối do nhóm biên tập, kiểm chứng nguồn trước khi công bố.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Nguồn & đối chiếu</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-1 pr-3">Nguồn</th>
                <th className="py-1">Liên kết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hiến pháp 2013, Điều 5</td>
                <td><a className="text-blue-600" href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
              <tr>
                <td>NQ-24-NQ/TW (2003)</td>
                <td><a className="text-blue-600" href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
              <tr>
                <td>NQ-88/2019/QH14</td>
                <td><a className="text-blue-600" href="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
              <tr>
                <td>QĐ-1719/QĐ-TTg (2021)</td>
                <td><a className="text-blue-600" href="https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
              <tr>
                <td>UNFPA: TĐT 2019</td>
                <td><a className="text-blue-600" href="https://vietnam.unfpa.org/vi/news/k%E1%BA%BFt-qu%E1%BA%A3-t%E1%BB%95ng-%C4%91i%E1%BB%81u-tra-d%C3%A2n-s%E1%BB%91-v%C3%A0-nh%C3%A0-%E1%BB%9F-n%C4%83m-2019?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
              <tr>
                <td>WB/UNDP: Nghèo đa chiều DTTS</td>
                <td><a className="text-blue-600" href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Xem</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="font-semibold">Cam kết liêm chính</h3>
          <p className="text-sm">Tôn trọng nguồn chính thống; trích dẫn rõ; minh bạch vai trò AI.</p>
        </div>
      </div>
    </div>
  )
}
