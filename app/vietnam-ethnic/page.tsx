"use client"
import Image from "next/image"

export default function Page() {
  return (
    <div className="grid gap-6">
      <h2 className="h2">Đặc điểm dân tộc Việt Nam</h2>

      <div className="card grid gap-3">
        <h3 className="h3">6 đặc điểm nổi bật</h3>
        <ul className="list-disc pl-6 text-academic space-y-1">
          <li><strong>Chênh lệch quy mô dân số:</strong> Kinh ≈ 85,3% (≈82,09 triệu, 2019); một số DTTS &gt;1 triệu, nhiều DTTS rất ít người.</li>
          <li><strong>Cư trú xen kẽ:</strong> Không có lãnh thổ tộc người riêng; phân bố đan xen theo lịch sử di cư và điều kiện sinh kế.</li>
          <li><strong>Địa bàn chiến lược:</strong> DTTS cư trú chủ yếu ở miền núi, biên giới, hải đảo; khu vực này chiếm khoảng 3/4 diện tích tự nhiên.</li>
          <li><strong>Phát triển không đều:</strong> Chênh lệch về KT–VH–XH, hạ tầng, giáo dục; cần chính sách thu hẹp khoảng cách.</li>
          <li><strong>Truyền thống đại đoàn kết:</strong> Hình thành sớm trong quá trình dựng nước, giữ nước; là động lực phát triển.</li>
          <li><strong>Đa dạng văn hóa:</strong> Thống nhất trong đa dạng; tôn trọng, bảo tồn bản sắc và ngôn ngữ từng tộc người.</li>
        </ul>
        <p className="text-xs text-gray-600">
          Nguồn chính: Tổng điều tra Dân số 2019 (GSO/UNFPA); NQ 24-NQ/TW; CEMA.
        </p>
      </div>

      <div className="card grid gap-2">
        <h3 className="h3">Bản đồ atlas dân tộc Việt Nam</h3>
        <div className="w-full overflow-hidden rounded-lg border">
          <Image
            src="/images/16.png"
            alt="Atlas dân tộc Việt Nam"
            width={1200}
            height={1650}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="text-sm text-gray-600">
          Nguồn minh họa: Atlas dân tộc Việt Nam. Ảnh tĩnh thay cho bản đồ tương tác.
        </div>
      </div>
    </div>
  )
}
