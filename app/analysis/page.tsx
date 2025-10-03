export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      <div className="text-center">
        <h1 className="h1">Phân tích trung tâm</h1>
        <p className="text-xl text-gray-600">Phân tích và phản biện luận điểm "chiếm dụng"</p>
      </div>

      {/* Phần 1: Phân tích chi tiết theo 3 lĩnh vực */}
      <div className="card">
        <h2 className="h2 mb-4">1. Phân tích và Phản biện Luận điểm "Chiếm dụng"</h2>
        <p className="text-academic mb-6">
          Luận điểm cho rằng người Kinh "chiếm dụng" văn hóa, kinh tế và chính trị của các dân tộc khác là một sự diễn giải sai lệch, phiến diện và không phản ánh đúng bản chất vấn đề.
        </p>

        <div className="grid gap-8">
          {/* Văn hóa */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="h3 mb-3">🎭 Về Văn hóa: Giao thoa và Bảo tồn, không phải Áp đặt</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Hiện tượng</h4>
              <p className="text-academic">
                Đúng là văn hóa Kinh (thể hiện qua tiếng Việt là ngôn ngữ phổ thông, các lễ hội lớn...) có sức ảnh hưởng rộng khắp. Tuy nhiên, đây là kết quả của một quá trình giao thoa tự nhiên, khách quan do dân tộc Kinh chiếm đa số dân số và có lịch sử phát triển lâu đời ở vùng đồng bằng thuận lợi. Tiếng Việt trở thành ngôn ngữ quốc gia là một yêu cầu tất yếu để tạo sự thống nhất trong giao tiếp, quản lý và phát triển chung, không phải là hành vi xóa bỏ ngôn ngữ khác.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Thực tiễn chính sách</h4>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li><strong>Ngôn ngữ và chữ viết:</strong> Nhiều dân tộc đã được hỗ trợ xây dựng bộ chữ viết riêng (như chữ Thái, Chăm, Khmer). Đài Truyền hình Việt Nam có kênh VTV5 phát sóng bằng nhiều thứ tiếng dân tộc.</li>
                <li><strong>Lễ hội và di sản:</strong> Các lễ hội đặc sắc của đồng bào dân tộc được tôn vinh, thậm chí trở thành di sản văn hóa quốc gia và quốc tế (ví dụ: Không gian văn hóa Cồng chiêng Tây Nguyên, Lễ hội Katê của người Chăm).</li>
                <li><strong>Nghệ thuật và trang phục:</strong> Trang phục truyền thống, các loại hình nghệ thuật dân gian của các dân tộc thiểu số luôn được khuyến khích trình diễn trong các sự kiện văn hóa lớn của đất nước.</li>
              </ul>
            </div>
          </div>

          {/* Kinh tế */}
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="h3 mb-3">📈 Về Kinh tế: Chênh lệch phát triển và Chính sách Hỗ trợ, không phải Chiếm đoạt</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Hiện tượng</h4>
              <p className="text-academic">
                Có sự chênh lệch giàu nghèo rõ rệt giữa vùng đồng bằng (nơi người Kinh chiếm đa số) và vùng miền núi (nơi tập trung các dân tộc thiểu số).
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Phân tích nguyên nhân</h4>
              <p className="text-academic">
                Sự chênh lệch này bắt nguồn từ điều kiện tự nhiên khắc nghiệt, di sản của lịch sử phong kiến và chiến tranh, chứ không phải do người Kinh "chiếm đoạt" tài nguyên hay cơ hội kinh tế. Vùng miền núi có điểm xuất phát thấp, giao thông khó khăn, đất đai canh tác hạn chế.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Thực tiễn chính sách</h4>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li><strong>Đầu tư hạ tầng:</strong> Các chương trình quốc gia tập trung xây dựng đường sá, điện lưới, trường học, trạm y tế cho các xã đặc biệt khó khăn.</li>
                <li><strong>Hỗ trợ sản xuất:</strong> Cấp vốn vay ưu đãi, hỗ trợ giống cây trồng, vật nuôi, chuyển giao khoa học kỹ thuật cho đồng bào.</li>
                <li><strong>An sinh xã hội:</strong> Các chính sách cấp thẻ bảo hiểm y tế miễn phí, hỗ trợ giáo dục, trợ cấp xã hội... được ưu tiên cho đồng bào dân tộc thiểu số.</li>
              </ul>
              <p className="text-academic mt-3 italic">
                Mục tiêu của các chính sách này là kéo gần khoảng cách phát triển, thực hiện mục tiêu "không để ai bị bỏ lại phía sau".
              </p>
            </div>
          </div>

          {/* Chính trị */}
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="h3 mb-3">🏛️ Về Chính trị: Hệ thống Chính trị Thống nhất và Quyền Đại diện, không phải Độc quyền</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Hiện tượng</h4>
              <p className="text-academic">
                Người Kinh chiếm đa số trong bộ máy lãnh đạo các cấp.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Phân tích nguyên nhân</h4>
              <p className="text-academic">
                Điều này phản ánh cơ cấu dân số chung của cả nước. Tuy nhiên, nó không đồng nghĩa với việc các dân tộc khác bị loại trừ khỏi đời sống chính trị.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Thực tiễn chính sách và pháp luật</h4>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li><strong>Cơ cấu Quốc hội:</strong> Hiến pháp và Luật Bầu cử luôn quy định một tỷ lệ đại biểu hợp lý là người dân tộc thiểu số trong Quốc hội. Hội đồng Dân tộc là một cơ quan quan trọng của Quốc hội, có vai trò thẩm tra các chính sách liên quan đến dân tộc.</li>
                <li><strong>Quy hoạch cán bộ:</strong> Đảng và Nhà nước có chính sách cử tuyển, đào tạo và bồi dưỡng cán bộ là người dân tộc thiểu số để tạo nguồn lãnh đạo tại chỗ và cho các cơ quan trung ương.</li>
                <li><strong>Quyền tự quản ở cơ sở:</strong> Quyền lợi và tiếng nói của đồng bào được tôn trọng thông qua các già làng, trưởng bản và hệ thống chính quyền cơ sở.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2: Ma trận lập luận */}
      <div className="card">
        <h2 className="h2 mb-4">2. Ma trận lập luận</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <details open>
              <summary className="h3 cursor-pointer select-none mb-3">A. Luận điểm "chiếm dụng"</summary>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li>Giả định cấu trúc áp bức, ưu quyền mang tính hệ thống giữa các cộng đồng.</li>
                <li>Diễn giải chênh lệch KT - XH như kết quả "chiếm đoạt" tài nguyên/ưu thế.</li>
                <li>Bỏ qua đặc thù lịch sử - địa lý - cư trú xen kẽ và mức phát triển không đồng đều.</li>
                <li>Hệ quả chính sách dễ thiên về đối kháng, không giải quyết gốc rễ năng lực - hạ tầng.</li>
              </ul>
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <details open>
              <summary className="h3 cursor-pointer select-none mb-3">B. Phản biện dựa giáo trình</summary>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li>Khung pháp lý: bình đẳng dân tộc, cấm kỳ thị, tôn trọng và đoàn kết (Điều 5 Hiến pháp).</li>
                <li>Cơ sở lý luận: Cương lĩnh dân tộc của V.I. Lênin: bình đẳng; quyền tự quyết; liên hiệp công nhân các dân tộc.</li>
                <li>Đặc điểm Việt Nam: cư trú xen kẽ; địa bàn chiến lược; chênh lệch quy mô; bản sắc đa dạng; truyền thống đại đoàn kết.</li>
                <li>Nguyên nhân chênh lệch: địa hình - hạ tầng - vốn con người - ngôn ngữ - tiếp cận thị trường hơn là "chiếm đoạt".</li>
              </ul>
            </details>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <details open>
              <summary className="h3 cursor-pointer select-none mb-3">C. Hệ quả chính sách</summary>
              <ul className="list-disc pl-6 text-academic space-y-2">
                <li>Kinh tế: ưu tiên hạ tầng then chốt, kết nối vùng; chương trình mục tiêu thu hẹp chênh lệch.</li>
                <li>Xã hội: giáo dục, y tế, an sinh theo đặc thù tộc người; phát triển nguồn nhân lực và cán bộ DTTS.</li>
                <li>Văn hóa: bảo tồn - phát huy di sản tộc người; phát triển ngôn ngữ, chữ viết; xây dựng đời sống văn hóa cơ sở.</li>
                <li>Chính trị & QP-AN: bảo đảm quyền tham gia; tăng cường hiện diện nhà nước và thế trận quốc phòng toàn dân ở địa bàn chiến lược.</li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* Phần 3: Kết luận */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50">
        <h2 className="h2 mb-4">3. Kết luận: Hệ quả khách quan và Ý nghĩa của Đoàn kết Dân tộc</h2>
        
        <div className="mb-6">
          <p className="text-academic font-semibold mb-3">Từ những phân tích trên, có thể khẳng định:</p>
          <ul className="list-disc pl-6 text-academic space-y-2">
            <li>Luận điểm người Kinh "chiếm dụng" văn hóa, kinh tế, chính trị của các dân tộc khác là sai lệch và mang tính quy chụp.</li>
            <li>Những biểu hiện chênh lệch hiện nay là hệ quả khách quan của lịch sử và điều kiện phát triển, không phải là chủ trương hay hành vi có chủ đích.</li>
            <li>Chính sách của Đảng và Nhà nước Việt Nam không chỉ tôn trọng nguyên tắc bình đẳng mà còn chủ động thực hiện nhiều giải pháp tích cực nhằm hỗ trợ các dân tộc thiểu số, thu hẹp khoảng cách, và bảo tồn bản sắc văn hóa của họ.</li>
          </ul>
        </div>

        <div className="border-t border-blue-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🇻🇳</div>
            <h3 className="h3 m-0">Ý nghĩa của việc giữ vững đoàn kết dân tộc</h3>
          </div>
          <p className="text-academic leading-relaxed">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội, đoàn kết dân tộc không chỉ là truyền thống quý báu mà còn là nguồn sức mạnh nội sinh to lớn, có ý nghĩa chiến lược. Việc nhận diện và đấu tranh phản bác các luận điệu sai trái, xuyên tạc về vấn đề dân tộc chính là bảo vệ nền tảng tư tưởng của Đảng, bảo vệ sự toàn vẹn lãnh thổ và ổn định chính trị. Chỉ trên cơ sở khối đại đoàn kết toàn dân tộc vững chắc, với nòng cốt là liên minh công - nông - trí thức, chúng ta mới có thể huy động được toàn bộ sức mạnh để thực hiện thành công sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, xây dựng một nước Việt Nam <strong>"dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
