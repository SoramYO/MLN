"use client"
import { useMemo } from "react"

export default function PolicyTimeline() {
  const items = useMemo(() => [
    {year: 1951, code: "Chính cương 1951", href: "https://hvctcand.bocongan.gov.vn/chong-dien-bien-hoa-binh/bai-1-quan-diem-duong-loi-cua-dang-cong-san-viet-nam-ve-van-de-dan-toc-6109?utm_source=chatgpt.com", desc: "Quan điểm dân tộc: bình đẳng, đoàn kết, tương trợ"},
    {year: 2003, code: "NQ-24-NQ/TW", href: "https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-ix/nghi-quyet-so-24-nqtw-ngay-1232003-hoi-nghi-lan-thu-bay-ban-chap-hanh-trung-uong-dang-khoa-ix-ve-cong-tac-dan-toc-657?utm_source=chatgpt.com", desc: "Chiến lược công tác dân tộc"},
    {year: 2019, code: "NQ-88/2019/QH14", href: "https://chinhphu.vn/default.aspx?docid=198414&pageid=27160&utm_source=chatgpt.com", desc: "Đề án tổng thể vùng DTTS&MN"},
    {year: 2021, code: "QĐ-1719/QĐ-TTg", href: "https://vanban.chinhphu.vn/?docid=204285&pageid=27160&utm_source=chatgpt.com", desc: "Chương trình MTQG 2021–2030"}
  ], [])
  return (
    <div className="grid gap-3">
      {items.map(i => (
        <div key={i.code} className="flex items-center gap-3">
          <div className="w-24 font-semibold">{i.year}</div>
          <div className="flex-1 border-b" />
          <div className="min-w-[12rem]">
            <a className="text-blue-600 hover:underline" href={i.href as string} target="_blank" rel="noreferrer">{i.code}</a>
          </div>
          <div className="text-sm text-gray-600">{i.desc}</div>
        </div>
      ))}
    </div>
  )
}
