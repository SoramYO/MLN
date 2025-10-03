export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-8">
      {/* Hero Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🔍</span>
            <span>Phần 4: Phân tích học thuật</span>
          </div>
          <h1 className="h1">Phân tích trung tâm</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Phân tích và phản biện luận điểm "chiếm dụng" dựa trên cơ sở khoa
            học và thực tiễn
          </p>
        </div>
      </div>

      {/* Section 1: Detailed Analysis */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⚖️</span>
            </div>
            <h2 className="h2">
              1. Phân tích và Phản biện Luận điểm "Chiếm dụng"
            </h2>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-semibold text-purple-800 mb-2">
                  Tuyên bố chính
                </h3>
                <p className="text-academic">
                  Luận điểm cho rằng người Kinh "chiếm dụng" văn hóa, kinh tế và
                  chính trị của các dân tộc khác là một sự diễn giải sai lệch,
                  phiến diện và không phản ánh đúng bản chất vấn đề.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Culture Analysis */}
            <div className="card-academic">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🎭</span>
                </div>
                <h3 className="h3">
                  Về Văn hóa: Giao thoa và Bảo tồn, không phải Áp đặt
                </h3>
              </div>

              {/* Image Section for Culture */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🖼️</span>
                  <span className="font-semibold text-blue-800">Hình ảnh minh họa</span>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 border-b">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🎭</span>
                        <span className="text-sm font-medium text-gray-800">Đa dạng văn hóa dân tộc Việt Nam</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <img 
                        src="/images/culture-diversity.jpg" 
                        alt="Đa dạng văn hóa dân tộc Việt Nam"
                        className="w-full h-120 object-cover rounded-md shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    <span>Hiện tượng</span>
                  </h4>
                  <p className="text-academic">
                    Đúng là văn hóa Kinh (thể hiện qua tiếng Việt là ngôn ngữ
                    phổ thông, các lễ hội lớn...) có sức ảnh hưởng rộng khắp.
                    Tuy nhiên, đây là kết quả của một quá trình giao thoa tự
                    nhiên, khách quan do dân tộc Kinh chiếm đa số dân số và có
                    lịch sử phát triển lâu đời ở vùng đồng bằng thuận lợi. Tiếng
                    Việt trở thành ngôn ngữ quốc gia là một yêu cầu tất yếu để
                    tạo sự thống nhất trong giao tiếp, quản lý và phát triển
                    chung, không phải là hành vi xóa bỏ ngôn ngữ khác.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Thực tiễn chính sách
                  </h4>
                  <ul className="list-disc pl-6 text-academic space-y-2">
                    <li>
                      <strong>Ngôn ngữ và chữ viết:</strong> Nhiều dân tộc đã
                      được hỗ trợ xây dựng bộ chữ viết riêng (như chữ Thái,
                      Chăm, Khmer). Đài Truyền hình Việt Nam có kênh VTV5 phát
                      sóng bằng nhiều thứ tiếng dân tộc.
                    </li>
                    <li>
                      <strong>Lễ hội và di sản:</strong> Các lễ hội đặc sắc của
                      đồng bào dân tộc được tôn vinh, thậm chí trở thành di sản
                      văn hóa quốc gia và quốc tế (ví dụ: Không gian văn hóa
                      Cồng chiêng Tây Nguyên, Lễ hội Katê của người Chăm).
                    </li>
                    <li>
                      <strong>Nghệ thuật và trang phục:</strong> Trang phục
                      truyền thống, các loại hình nghệ thuật dân gian của các
                      dân tộc thiểu số luôn được khuyến khích trình diễn trong
                      các sự kiện văn hóa lớn của đất nước.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Kinh tế */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="h3 mb-3">
                  📈 Về Kinh tế: Chênh lệch phát triển và Chính sách Hỗ trợ,
                  không phải Chiếm đoạt
                </h3>

                {/* Image Section for Economy */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🖼️</span>
                    <span className="font-semibold text-green-800">Hình ảnh minh họa</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                      <div className="p-3 bg-gradient-to-r from-gray-50 to-green-50 border-b">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">📈</span>
                          <span className="text-sm font-medium text-gray-800">Phát triển kinh tế vùng dân tộc</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <img 
                          src="/images/economic-development.jpg" 
                          alt="Phát triển kinh tế vùng dân tộc"
                          className="w-full h-120 object-cover rounded-md shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Hiện tượng</h4>
                  <p className="text-academic">
                    Có sự chênh lệch giàu nghèo rõ rệt giữa vùng đồng bằng (nơi
                    người Kinh chiếm đa số) và vùng miền núi (nơi tập trung các
                    dân tộc thiểu số).
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">
                    Phân tích nguyên nhân
                  </h4>
                  <p className="text-academic">
                    Sự chênh lệch này bắt nguồn từ điều kiện tự nhiên khắc
                    nghiệt, di sản của lịch sử phong kiến và chiến tranh, chứ
                    không phải do người Kinh "chiếm đoạt" tài nguyên hay cơ hội
                    kinh tế. Vùng miền núi có điểm xuất phát thấp, giao thông
                    khó khăn, đất đai canh tác hạn chế.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Thực tiễn chính sách
                  </h4>
                  <ul className="list-disc pl-6 text-academic space-y-2">
                    <li>
                      <strong>Đầu tư hạ tầng:</strong> Các chương trình quốc gia
                      tập trung xây dựng đường sá, điện lưới, trường học, trạm y
                      tế cho các xã đặc biệt khó khăn.
                    </li>
                    <li>
                      <strong>Hỗ trợ sản xuất:</strong> Cấp vốn vay ưu đãi, hỗ
                      trợ giống cây trồng, vật nuôi, chuyển giao khoa học kỹ
                      thuật cho đồng bào.
                    </li>
                    <li>
                      <strong>An sinh xã hội:</strong> Các chính sách cấp thẻ
                      bảo hiểm y tế miễn phí, hỗ trợ giáo dục, trợ cấp xã hội...
                      được ưu tiên cho đồng bào dân tộc thiểu số.
                    </li>
                  </ul>
                  <p className="text-academic mt-3 italic">
                    Mục tiêu của các chính sách này là kéo gần khoảng cách phát
                    triển, thực hiện mục tiêu "không để ai bị bỏ lại phía sau".
                  </p>
                </div>
              </div>

              {/* Chính trị */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="h3 mb-3">
                  🏛️ Về Chính trị: Hệ thống Chính trị Thống nhất và Quyền Đại
                  diện, không phải Độc quyền
                </h3>

                {/* Image Section for Politics */}
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🖼️</span>
                    <span className="font-semibold text-red-800">Hình ảnh minh họa</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                      <div className="p-3 bg-gradient-to-r from-gray-50 to-red-50 border-b">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🏛️</span>
                          <span className="text-sm font-medium text-gray-800">Đại diện dân tộc trong chính trị</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <img 
                          src="/images/political-representation.jpg" 
                          alt="Đại diện dân tộc trong chính trị"
                          className="w-full h-120 object-cover rounded-md shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">Hiện tượng</h4>
                  <p className="text-academic">
                    Người Kinh chiếm đa số trong bộ máy lãnh đạo các cấp.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">
                    Phân tích nguyên nhân
                  </h4>
                  <p className="text-academic">
                    Điều này phản ánh cơ cấu dân số chung của cả nước. Tuy
                    nhiên, nó không đồng nghĩa với việc các dân tộc khác bị loại
                    trừ khỏi đời sống chính trị.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Thực tiễn chính sách và pháp luật
                  </h4>
                  <ul className="list-disc pl-6 text-academic space-y-2">
                    <li>
                      <strong>Cơ cấu Quốc hội:</strong> Hiến pháp và Luật Bầu cử
                      luôn quy định một tỷ lệ đại biểu hợp lý là người dân tộc
                      thiểu số trong Quốc hội. Hội đồng Dân tộc là một cơ quan
                      quan trọng của Quốc hội, có vai trò thẩm tra các chính
                      sách liên quan đến dân tộc.
                    </li>
                    <li>
                      <strong>Quy hoạch cán bộ:</strong> Đảng và Nhà nước có
                      chính sách cử tuyển, đào tạo và bồi dưỡng cán bộ là người
                      dân tộc thiểu số để tạo nguồn lãnh đạo tại chỗ và cho các
                      cơ quan trung ương.
                    </li>
                    <li>
                      <strong>Quyền tự quản ở cơ sở:</strong> Quyền lợi và tiếng
                      nói của đồng bào được tôn trọng thông qua các già làng,
                      trưởng bản và hệ thống chính quyền cơ sở.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Argument Matrix */}
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h2 className="h2">2. Ma trận lập luận</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-academic">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <h3 className="h3">Luận điểm "chiếm dụng"</h3>
              </div>
              <ul className="space-y-3 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Giả định cấu trúc áp bức, ưu quyền mang tính hệ thống giữa
                    các cộng đồng.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Diễn giải chênh lệch KT - XH như kết quả "chiếm đoạt" tài
                    nguyên/ưu thế.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Bỏ qua đặc thù lịch sử - địa lý - cư trú xen kẽ và mức phát
                    triển không đồng đều.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Hệ quả chính sách dễ thiên về đối kháng, không giải quyết
                    gốc rễ năng lực - hạ tầng.
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-academic">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  B
                </div>
                <h3 className="h3">Phản biện dựa giáo trình</h3>
              </div>
              <ul className="space-y-3 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Khung pháp lý: bình đẳng dân tộc, cấm kỳ thị, tôn trọng và
                    đoàn kết (Điều 5 Hiến pháp).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Cơ sở lý luận: Cương lĩnh dân tộc của V.I. Lênin: bình đẳng;
                    quyền tự quyết; liên hiệp công nhân các dân tộc.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Đặc điểm Việt Nam: cư trú xen kẽ; địa bàn chiến lược; chênh
                    lệch quy mô; bản sắc đa dạng; truyền thống đại đoàn kết.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Nguyên nhân chênh lệch: địa hình - hạ tầng - vốn con người -
                    ngôn ngữ - tiếp cận thị trường hơn là "chiếm đoạt".
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-academic">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <h3 className="h3">Hệ quả chính sách</h3>
              </div>
              <ul className="space-y-3 text-academic">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Kinh tế: ưu tiên hạ tầng then chốt, kết nối vùng; chương
                    trình mục tiêu thu hẹp chênh lệch.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Xã hội: giáo dục, y tế, an sinh theo đặc thù tộc người; phát
                    triển nguồn nhân lực và cán bộ DTTS.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Văn hóa: bảo tồn - phát huy di sản tộc người; phát triển
                    ngôn ngữ, chữ viết; xây dựng đời sống văn hóa cơ sở.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Chính trị & QP-AN: bảo đảm quyền tham gia; tăng cường hiện
                    diện nhà nước và thế trận quốc phòng toàn dân ở địa bàn
                    chiến lược.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phần 3: Kết luận */}
        <div className="card bg-gradient-to-br from-blue-50 to-indigo-50">
          <h2 className="h2 mb-4">
            3. Kết luận: Hệ quả khách quan và Ý nghĩa của Đoàn kết Dân tộc
          </h2>

          <div className="mb-6">
            <p className="text-academic font-semibold mb-3">
              Từ những phân tích trên, có thể khẳng định:
            </p>
            <ul className="list-disc pl-6 text-academic space-y-2">
              <li>
                Luận điểm người Kinh "chiếm dụng" văn hóa, kinh tế, chính trị
                của các dân tộc khác là sai lệch và mang tính quy chụp.
              </li>
              <li>
                Những biểu hiện chênh lệch hiện nay là hệ quả khách quan của
                lịch sử và điều kiện phát triển, không phải là chủ trương hay
                hành vi có chủ đích.
              </li>
              <li>
                Chính sách của Đảng và Nhà nước Việt Nam không chỉ tôn trọng
                nguyên tắc bình đẳng mà còn chủ động thực hiện nhiều giải pháp
                tích cực nhằm hỗ trợ các dân tộc thiểu số, thu hẹp khoảng cách,
                và bảo tồn bản sắc văn hóa của họ.
              </li>
            </ul>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🇻🇳</div>
              <h3 className="h3 m-0">
                Ý nghĩa của việc giữ vững đoàn kết dân tộc
              </h3>
            </div>
            <p className="text-academic leading-relaxed">
              Trong thời kỳ quá độ lên chủ nghĩa xã hội, đoàn kết dân tộc không
              chỉ là truyền thống quý báu mà còn là nguồn sức mạnh nội sinh to
              lớn, có ý nghĩa chiến lược. Việc nhận diện và đấu tranh phản bác
              các luận điệu sai trái, xuyên tạc về vấn đề dân tộc chính là bảo
              vệ nền tảng tư tưởng của Đảng, bảo vệ sự toàn vẹn lãnh thổ và ổn
              định chính trị. Chỉ trên cơ sở khối đại đoàn kết toàn dân tộc vững
              chắc, với nòng cốt là liên minh công - nông - trí thức, chúng ta
              mới có thể huy động được toàn bộ sức mạnh để thực hiện thành công
              sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, xây dựng một
              nước Việt Nam{" "}
              <strong>
                "dân giàu, nước mạnh, dân chủ, công bằng, văn minh"
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
