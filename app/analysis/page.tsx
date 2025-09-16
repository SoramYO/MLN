export default function Page() {
  return (
    <div className="grid gap-6">
      <h2 className="h2">Phân tích trung tâm</h2>
      <div className="card">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <details open>
              <summary className="h3 cursor-pointer select-none">A. Luận điểm “chiếm dụng”</summary>
              <ul className="mt-3 list-disc pl-6 text-academic space-y-1">
                <li>Giả định cấu trúc áp bức, ưu quyền mang tính hệ thống giữa các cộng đồng.</li>
                <li>Diễn giải chênh lệch KT - XH như kết quả “chiếm đoạt” tài nguyên/ưu thế.</li>
                <li>Bỏ qua đặc thù lịch sử - địa lý - cư trú xen kẽ và mức phát triển không đồng đều.</li>
                <li>Hệ quả chính sách dễ thiên về đối kháng, không giải quyết gốc rễ năng lực - hạ tầng.</li>
              </ul>
            </details>
          </div>
          <div>
            <details open>
              <summary className="h3 cursor-pointer select-none">B. Phản biện dựa giáo trình</summary>
              <ul className="mt-3 list-disc pl-6 text-academic space-y-1">
                <li>Khung pháp lý: bình đẳng dân tộc, cấm kỳ thị, tôn trọng và đoàn kết (Điều 5 Hiến pháp).</li>
                <li>Cơ sở lý luận: Cương lĩnh dân tộc của V.I. Lênin: bình đẳng; quyền tự quyết; liên hiệp công nhân các dân tộc.</li>
                <li>Đặc điểm Việt Nam: cư trú xen kẽ; địa bàn chiến lược; chênh lệch quy mô; bản sắc đa dạng; truyền thống đại đoàn kết.</li>
                <li>Nguyên nhân chênh lệch: địa hình - hạ tầng - vốn con người - ngôn ngữ - tiếp cận thị trường hơn là “chiếm đoạt”.</li>
              </ul>
            </details>
          </div>
          <div>
            <details open>
              <summary className="h3 cursor-pointer select-none">C. Hệ quả chính sách</summary>
              <ul className="mt-3 list-disc pl-6 text-academic space-y-1">
                <li>Kinh tế: ưu tiên hạ tầng then chốt, kết nối vùng; chương trình mục tiêu thu hẹp chênh lệch.</li>
                <li>Xã hội: giáo dục, y tế, an sinh theo đặc thù tộc người; phát triển nguồn nhân lực và cán bộ DTTS.</li>
                <li>Văn hóa: bảo tồn - phát huy di sản tộc người; phát triển ngôn ngữ, chữ viết; xây dựng đời sống văn hóa cơ sở.</li>
                <li>Chính trị & QP-AN: bảo đảm quyền tham gia; tăng cường hiện diện nhà nước và thế trận quốc phòng toàn dân ở địa bàn chiến lược.</li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
