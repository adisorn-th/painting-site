// components/Hero.jsx
import Image from "next/image";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            รับทาสีบ้าน อาคาร และสีเฟอร์นิเจอร์
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            งานปรับพื้นผิว ทาสีภายใน-ภายนอก พ่นสีเฟอร์นิเจอร์ เคลือบด้าน/เงา สวยทน งานจบไว
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#quote" className="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow">
              ขอราคา/นัดดูหน้างาน
            </a>
            <a href="/portfolio" className="px-5 py-3 rounded-xl border border-slate-300">
              ดูผลงาน
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">ให้บริการ: กรุงเทพฯ, นนทบุรี, ปทุมธานี, สมุทรปราการ</p>
        </div>

        {/* รูป Hero ขนาดตอบโจทย์ SEO/Performance */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/gallery/hero-livingroom-arch.jpg"
            alt="ทาสีภายใน ห้องนั่งเล่นโทนสว่าง เนียนเรียบ"
            width={1200} height={900}   // ระบุให้ชัดเจน
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
