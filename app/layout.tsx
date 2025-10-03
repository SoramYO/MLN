import "./globals.css"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["vietnamese"], display: "swap" })

export const metadata = { title: "Dân tộc và phát triển", description: "Website học thuật" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <nav className="nav-academic border-b">
          <div className="container flex gap-6 py-4 overflow-x-auto">
            <Link href="/" className="hover:text-blue-200 transition-colors">Trang chủ</Link>
            <Link href="/theory" className="hover:text-blue-200 transition-colors">Lý thuyết</Link>
            <Link href="/vietnam-ethnic" className="hover:text-blue-200 transition-colors">Đặc điểm VN</Link>
            <Link href="/policy" className="hover:text-blue-200 transition-colors">Quan điểm & Chính sách</Link>
            <Link href="/analysis" className="hover:text-blue-200 transition-colors">Phân tích</Link>
            <Link href="/engage" className="hover:text-blue-200 transition-colors">Tương tác</Link>
            <Link href="/sources" className="hover:text-blue-200 transition-colors">Nguồn & AI</Link>
          </div>
        </nav>
        <main className="container py-6">{children}</main>
        <footer className="border-t mt-8">
          <div className="container py-6 text-sm grid gap-2">
            <div>Nguồn chính: Hiến pháp 2013; NQ-24 (2003); NQ-88 (2019); QĐ-1719 (2021); UNFPA TĐT 2019; WB/UNDP.</div>
            <div className="flex flex-wrap gap-3">
              <a className="text-blue-600" href="https://dhannd.bocongan.gov.vn/hienphap2013?utm_source=chatgpt.com" target="_blank" rel="noreferrer">Điều 5 Hiến pháp</a>
              <a className="text-blue-600" href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com" target="_blank" rel="noreferrer">NQ-24 (2003)</a>
              <a className="text-blue-600" href="https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">NQ-88 (2019)</a>
              <a className="text-blue-600" href="https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com" target="_blank" rel="noreferrer">QĐ-1719 (2021)</a>
              <a className="text-blue-600" href="https://vietnam.unfpa.org/vi/news/k%E1%BA%BFt-qu%E1%BA%A3-t%E1%BB%95ng-%C4%91i%E1%BB%81u-tra-d%C3%A2n-s%E1%BB%91-v%C3%A0-nh%C3%A0-%E1%BB%9F-n%C4%83m-2019?utm_source=chatgpt.com" target="_blank" rel="noreferrer">UNFPA 2019</a>
              <a className="text-blue-600" href="https://www.worldbank.org/en/country/vietnam/publication/2022-vietnam-poverty-and-equity-assessment-report?utm_source=chatgpt.com" target="_blank" rel="noreferrer">WB/UNDP 2022+</a>
            </div>
            <div className="text-gray-500">Lớp FA25_MLN131_IB1703 Nhóm STHD            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
