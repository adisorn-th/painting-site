import Image from "next/image";

export default function Header(){
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          {/* ไอคอนซ้าย */}
          {/* <Image
            src="/logo-icon.svg"
            alt="สมพรเพ้นท์โปร"
            width={32}   // ต้องใส่
            height={32}  // ต้องใส่
            priority
          /> */}
          {/* โลโก้แนวนอน (ซ่อนบนจอเล็ก) */}
          <Image
            src="/logo-horizontal.svg"
            alt="สมพรเพ้นท์โปร"
            width={1200}  // อัตราส่วน 1200x400 = 3:1
            height={600}
            className="hidden md:block h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/services" className="hover:text-brand-700">บริการ</a>
          <a href="/portfolio" className="hover:text-brand-700">ผลงาน</a>
          <a href="/pricing" className="hover:text-brand-700">แพ็กเกจ</a>
          <a href="/blog" className="hover:text-brand-700">บทความ</a>
          <a href="/contact" className="px-4 py-2 rounded-xl bg-brand-600 text-white font-semibold">ขอใบเสนอราคา</a>
        </nav>
      </div>
    </header>
  );
}
