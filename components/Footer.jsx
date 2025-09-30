export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="mt-2">โทร <a href="tel:+66872450878" className="text-brand-700 font-semibold">087-245-0878</a></p>
          <ul className="mt-2 space-y-1 text-slate-600">
          </ul>
          <p>LINE: <span className="font-mono">0872450878</span></p>
        </div>
        <div>
          <div className="font-bold">เขตให้บริการ</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>กรุงเทพฯ</li>
            <li>นนทบุรี</li>
            <li>ปทุมธานี</li>
            <li>สมุทรปราการ</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">ลิงก์</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/services" className="hover:underline">บริการ</a></li>
            <li><a href="/portfolio" className="hover:underline">ผลงาน</a></li>
            <li><a href="/pricing" className="hover:underline">แพ็กเกจ</a></li>
            <li><a href="/contact" className="hover:underline">ติดต่อเรา</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Painting Pro</div>
    </footer>
  );
}
