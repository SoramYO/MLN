import PolicyTimeline from "@/components/PolicyTimeline"

export default function Page() {
  return (
    <div className="grid gap-6">
      <h2 className="h2">Quan điểm của Đảng và chính sách dân tộc</h2>

      <div className="card grid gap-3">
        <details open>
          <summary className="h3 cursor-pointer select-none">Quan điểm của Đảng về vấn đề dân tộc</summary>
          <ul className="mt-3 list-disc pl-6 text-academic space-y-1">
            <li>Vấn đề dân tộc và đoàn kết dân tộc là chiến lược cơ bản, lâu dài, đồng thời cấp bách.</li>
            <li>Các dân tộc trong đại gia đình Việt Nam bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển; kiên quyết chống kỳ thị, chia rẽ dân tộc.</li>
            <li>Phát triển toàn diện chính trị, kinh tế, văn hóa, xã hội gắn với quốc phòng - an ninh ở vùng dân tộc và miền núi.</li>
            <li>Ưu tiên đầu tư vùng dân tộc thiểu số và miền núi: hạ tầng, giảm nghèo bền vững, phát huy nội lực và xây dựng đội ngũ cán bộ là người DTTS.</li>
            <li>Giữ gìn và phát huy bản sắc văn hóa các dân tộc; mở rộng giao lưu nhưng chống đồng hóa, bảo vệ nền tảng tư tưởng trước “diễn biến hòa bình”.</li>
            <li>Công tác dân tộc là nhiệm vụ của cả hệ thống chính trị: toàn Đảng, toàn dân, toàn quân và các cấp, ngành.</li>
          </ul>
        </details>
      </div>

      <div className="card grid gap-3">
        <details open>
          <summary className="h3 cursor-pointer select-none">Nhóm chính sách</summary>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div className="card-academic">
              <h4 className="font-semibold">Chính trị & QP-AN</h4>
              <ul className="list-disc pl-6 text-academic space-y-1">
                <li>Bảo đảm quyền bình đẳng, tôn trọng và tham gia của đồng bào DTTS vào đời sống chính trị.</li>
                <li>Tăng cường quốc phòng - an ninh trên địa bàn chiến lược: biên giới, hải đảo, vùng sâu xa.</li>
                <li>Xây dựng thế trận quốc phòng toàn dân, gắn kết quân - dân, giữ vững ổn định chính trị, TTATXH.</li>
              </ul>
            </div>
            <div className="card-academic">
              <h4 className="font-semibold">Kinh tế</h4>
              <ul className="list-disc pl-6 text-academic space-y-1">
                <li>Ưu tiên đầu tư hạ tầng then chốt; thúc đẩy kết nối vùng và tiếp cận thị trường.</li>
                <li>Triển khai chương trình mục tiêu quốc gia để thu hẹp chênh lệch phát triển giữa các vùng, dân tộc.</li>
                <li>Phát huy tiềm năng, thế mạnh địa phương đi đôi với bảo vệ bền vững môi trường sinh thái.</li>
              </ul>
            </div>
            <div className="card-academic">
              <h4 className="font-semibold">Văn hóa</h4>
              <ul className="list-disc pl-6 text-academic space-y-1">
                <li>Giữ gìn và phát huy giá trị văn hóa vật thể, phi vật thể của các tộc người.</li>
                <li>Phát triển ngôn ngữ, chữ viết phù hợp; xây dựng đời sống văn hóa cơ sở.</li>
                <li>Mở rộng giao lưu văn hóa, nâng cao “miễn dịch” trước đồng hóa và thông tin xấu độc.</li>
              </ul>
            </div>
            <div className="card-academic">
              <h4 className="font-semibold">Xã hội</h4>
              <ul className="list-disc pl-6 text-academic space-y-1">
                <li>Bảo đảm an sinh xã hội; nâng cao chất lượng giáo dục, y tế vùng DTTS.</li>
                <li>Giảm nghèo đa chiều bền vững gắn với tạo sinh kế phù hợp đặc thù tộc người.</li>
                <li>Chú trọng phát triển, bồi dưỡng nguồn nhân lực và cán bộ người DTTS.</li>
              </ul>
            </div>
            <div className="card-academic md:col-span-2">
              <h4 className="font-semibold">An ninh - Quốc phòng</h4>
              <ul className="list-disc pl-6 text-academic space-y-1">
                <li>Phối hợp lực lượng giữ vững chủ quyền lãnh thổ; bảo đảm an ninh chính trị, TTATXH.</li>
                <li>Tăng cường hiện diện nhà nước ở vùng biên, nâng cao hiệu quả quản trị địa phương.</li>
              </ul>
            </div>
          </div>
        </details>
      </div>

      <div className="card grid gap-3">
        <details open>
          <summary className="h3 cursor-pointer select-none">Phân tích đặc điểm dân tộc ở Việt Nam</summary>
          <ul className="mt-3 list-decimal pl-6 text-academic space-y-2">
            <li>
              Chênh lệch quy mô dân số giữa các tộc người: dân tộc Kinh chiếm đa số; một số tộc người rất ít dân → khó khăn trong bảo tồn tiếng nói, văn hóa, tổ chức đời sống.
            </li>
            <li>
              Cư trú xen kẽ, phân tán: không có lãnh thổ tộc người riêng → thuận lợi giao lưu, đoàn kết; song dễ nảy sinh mâu thuẫn, bị lợi dụng để chia rẽ.
            </li>
            <li>
              Phân bố ở địa bàn chiến lược: 53 DTTS cư trú trên phần lớn diện tích lãnh thổ, nhất là biên giới, hải đảo, vùng sâu xa → ý nghĩa QP-AN rất lớn.
            </li>
            <li>
              Trình độ phát triển không đều: khác biệt lớn về KT, VH, XH; cần các chính sách thu hẹp khoảng cách, nâng cao dân trí và kỹ năng.
            </li>
            <li>
              Truyền thống đại đoàn kết lâu đời: là động lực, sức mạnh quyết định trong dựng nước, giữ nước; cần tiếp tục phát huy trong giai đoạn mới.
            </li>
            <li>
              Bản sắc văn hóa đa dạng trong thống nhất: mỗi dân tộc có sắc thái riêng, góp phần làm phong phú văn hóa Việt Nam; cần bảo tồn và phát huy.
            </li>
          </ul>
        </details>
      </div>

      <div className="card">
        <h3 className="h3">Mốc quan trọng</h3>
        <PolicyTimeline />
      </div>
    </div>
  )
}
