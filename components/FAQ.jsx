export default function FAQ(){
  const list = [
    {q:"รับทาสีภายในและภายนอกต่างกันอย่างไร?",a:"สีภายในเน้นกลิ่นน้อยและเช็ดล้างง่าย สีภายนอกทนแดดฝนและป้องกันเชื้อราได้ดีกว่า"},
    {q:"ใช้เวลานานเท่าไหร่?",a:"คอนโด/บ้านขนาดเล็ก 1–3 วัน ขึ้นกับสภาพพื้นผิวและจำนวนห้อง"},
    {q:"ประกันงานยังไง?",a:"ตามสเปคผู้ผลิตสีและเงื่อนไขหน้างาน โดยทั่วไป 6–12 เดือน"}
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">คำถามที่พบบ่อย</h2>
      <div className="mt-6 divide-y rounded-2xl border bg-white">
        {list.map((f,i)=>(
          <details key={i} className="p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="text-slate-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
