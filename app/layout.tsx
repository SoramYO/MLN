import "./globals.css"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["vietnamese"], display: "swap" })

export const metadata = { title: "Dân tộc và phát triển", description: "Website học thuật" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <nav className="nav-academic sticky top-0 z-50">
          <div className="container flex gap-8 py-4 overflow-x-auto">
            <Link href="/" className="nav-link group">
              <span className="nav-icon">🏠</span>
              <span>Trang chủ</span>
            </Link>
            <Link href="/theory" className="nav-link group">
              <span className="nav-icon">📚</span>
              <span>Lý thuyết</span>
            </Link>
            <Link href="/vietnam-ethnic" className="nav-link group">
              <span className="nav-icon">🗺️</span>
              <span>Đặc điểm VN</span>
            </Link>
            <Link href="/policy" className="nav-link group">
              <span className="nav-icon">🏛️</span>
              <span>Quan điểm & Chính sách</span>
            </Link>
            <Link href="/analysis" className="nav-link group">
              <span className="nav-icon">🔍</span>
              <span>Phân tích</span>
            </Link>
            <Link href="/engage" className="nav-link group">
              <span className="nav-icon">💬</span>
              <span>Tương tác</span>
            </Link>
            <Link href="/game" className="nav-link group">
              <span className="nav-icon">🎮</span>
              <span>Game</span>
            </Link>
            <Link href="/sources" className="nav-link group">
              <span className="nav-icon">📖</span>
              <span>Nguồn & AI</span>
            </Link>
          </div>
        </nav>
        <main className="container py-6">{children}</main>
        <footer className="bg-gradient-to-r from-slate-800 to-blue-900 text-white mt-12">
          <div className="container py-8 grid gap-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">📚 Nguồn tài liệu tham khảo</h3>
              <p className="text-blue-200">Hiến pháp 2013; NQ-24 (2003); NQ-88 (2019); QĐ-1719 (2021); UNFPA TĐT 2019; WB/UNDP</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
              <a className="footer-link group" href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">📄 Điều 5 Hiến pháp</span>
              </a>
              <a className="footer-link group" href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">📋 NQ-24 (2003)</span>
              </a>
              <a className="footer-link group" href="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">📊 NQ-88 (2019)</span>
              </a>
              <a className="footer-link group" href="https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">📑 QĐ-1719 (2021)</span>
              </a>
              <a className="footer-link group" href="https://vietnam.unfpa.org/vi/news/k%E1%BA%BFt-qu%E1%BA%A3-t%E1%BB%95ng-%C4%91i%E1%BB%81u-tra-d%C3%A2n-s%E1%BB%91-v%C3%A0-nh%C3%A0-%E1%BB%9F-n%C4%83m-2019?utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">🌍 UNFPA 2019</span>
              </a>
              <a className="footer-link group" href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" target="_blank" rel="noreferrer">
                <span className="group-hover:text-blue-300 transition-colors">🏦 WB/UNDP 2022+</span>
              </a>
            </div>
            <div className="text-center pt-4 border-t border-blue-800">
              <p className="text-blue-300">🎓 Lớp FA25_MLN131_IB1703 Nhóm STHD</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
