export default function Page() {
  return (
    <div className="grid gap-6">
      <h1 className="h1">Lý thuyết dân tộc trong thời kỳ quá độ lên CNXH</h1>
      
      <div className="card">
        <h2 className="h2">1. Khái niệm và đặc trưng cơ bản của dân tộc</h2>
        
        <div className="grid gap-4">
          <div className="quote-box">
            <p><strong>Dân tộc nghĩa rộng (Nation):</strong> Cộng đồng người ổn định làm thành nhân dân một nước, có lãnh thổ riêng, nền kinh tế thống nhất, có ngôn ngữ chung và ý thức về sự thống nhất của mình.</p>
            <p className="mt-2"><strong>Dân tộc nghĩa hẹp (Ethnie):</strong> Cộng đồng tộc người được hình thành trong lịch sử, có mối liên hệ chặt chẽ và bền vững, có chung ý thức tự giác tộc người, ngôn ngữ và văn hóa.</p>
          </div>

          <div>
            <h3 className="h3">5 đặc trưng cơ bản của dân tộc (quốc gia-dân tộc):</h3>
            <ol className="list-decimal pl-6 text-academic space-y-2">
              <li><strong>Lãnh thổ ổn định:</strong> Không gian sinh tồn, thể hiện chủ quyền của dân tộc</li>
              <li><strong>Phương thức sinh hoạt kinh tế chung:</strong> Đặc trưng quan trọng nhất, là cơ sở gắn kết các thành viên</li>
              <li><strong>Ngôn ngữ chung:</strong> Công cụ giao tiếp trên mọi lĩnh vực</li>
              <li><strong>Văn hóa và tâm lý chung:</strong> Tạo nên bản sắc riêng của từng dân tộc</li>
              <li><strong>Nhà nước dân tộc:</strong> Yếu tố phân biệt dân tộc-quốc gia và dân tộc-tộc người</li>
            </ol>
          </div>

          <div>
            <h3 className="h3">3 tiêu chí nhận diện tộc người:</h3>
            <ul className="list-disc pl-6 text-academic space-y-1">
              <li><strong>Cộng đồng về ngôn ngữ:</strong> Tiêu chí cơ bản để phân biệt các tộc người</li>
              <li><strong>Cộng đồng về văn hóa:</strong> Phản ánh truyền thống, lối sống, phong tục tập quán</li>
              <li><strong>Ý thức tự giác tộc người:</strong> Tiêu chí quan trọng nhất, quyết định sự tồn tại và phát triển</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="h2">2. Chủ nghĩa Mác-Lênin về vấn đề dân tộc</h2>
        
        <div className="grid gap-4">
          <div>
            <h3 className="h3">Hai xu hướng khách quan trong quan hệ dân tộc:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-academic">
                <h4 className="font-semibold">Xu hướng thứ nhất</h4>
                <p className="text-academic">Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập do sự thức tỉnh về ý thức dân tộc.</p>
              </div>
              <div className="card-academic">
                <h4 className="font-semibold">Xu hướng thứ hai</h4>
                <p className="text-academic">Các dân tộc muốn liên hiệp lại với nhau do sự phát triển của lực lượng sản xuất và giao lưu kinh tế-văn hóa.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="h3">Cương lĩnh dân tộc của V.I. Lênin:</h3>
            <div className="quote-box">
              <p className="font-semibold text-center">"Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại"</p>
            </div>
            <div className="grid gap-3 mt-4">
              <div>
                <h4 className="font-semibold">1. Các dân tộc hoàn toàn bình đẳng</h4>
                <p className="text-academic">Quyền thiêng liêng không phân biệt lớn nhỏ, trình độ phát triển. Không dân tộc nào được giữ đặc quyền, đặc lợi.</p>
              </div>
              <div>
                <h4 className="font-semibold">2. Các dân tộc được quyền tự quyết</h4>
                <p className="text-academic">Quyền tự quyết định vận mệnh, lựa chọn chế độ chính trị và con đường phát triển của dân tộc mình.</p>
              </div>
              <div>
                <h4 className="font-semibold">3. Liên hiệp công nhân tất cả các dân tộc</h4>
                <p className="text-academic">Phản ánh sự thống nhất giữa giải phóng dân tộc và giải phóng giai cấp, cơ sở để đoàn kết chống chủ nghĩa đế quốc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">Nguồn: Giáo trình "Dân tộc trong thời kỳ quá độ lên CNXH", Chương 6, trang 195-213</p>
      </div>
    </div>
  )
}
