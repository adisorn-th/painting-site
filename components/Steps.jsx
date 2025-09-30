export default function Steps(){
  const steps = [
    {title:"คุยงาน/ส่งรูปพื้นที่",desc:"ประเมินเบื้องต้นผ่านไลน์หรือโทรศัพท์"},
    {title:"นัดดูหน้างาน",desc:"สำรวจสภาพผนัง เลือกเฉดสี วางแผนงาน"},
    {title:"เริ่มงาน/ส่งมอบ",desc:"ปกป้องพื้น/เฟอร์นิเจอร์ เก็บงานสะอาด พร้อมรับประกัน"}
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">ขั้นตอนการทำงาน</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {steps.map((s,i)=>(
            <div key={i} className="p-5 rounded-2xl border bg-white">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center font-bold">{i+1}</div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
