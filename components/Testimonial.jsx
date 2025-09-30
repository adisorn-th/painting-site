export default function Testimonial(){
  const items = [
    {name:"คุณนก – คอนโดบางนา", text:"งานเนี๊ยบ เก็บงานดีมาก สีภายในกลิ่นน้อยจริง ๆ"},
    {name:"คุณต่อ – บ้านเดี่ยวลาดพร้าว", text:"ทีมงานตรงเวลา เสนอเฉดสีให้เหมาะกับแสงบ้าน สวยถูกใจ"},
    {name:"คุณฟ้า – งานบิวท์อิน", text:"พ่นสีเฟอร์นิเจอร์เรียบเนียน ส่งมอบทันกำหนด"}
  ];
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">รีวิวลูกค้า</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {items.map((t,i)=>(
            <div key={i} className="p-5 rounded-2xl border bg-white">
              <p className="text-slate-700">“{t.text}”</p>
              <div className="mt-3 text-sm text-slate-500">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
