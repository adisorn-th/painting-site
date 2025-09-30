const items = [
  { title:"ทาสีภายใน", desc:"เนียนเรียบ กลิ่นน้อย เช็ดล้างง่าย", href:"/services#interior"},
  { title:"ทาสีภายนอก", desc:"ทนแดดฝน ป้องกันเชื้อรา", href:"/services#exterior"},
  { title:"สีเฟอร์นิเจอร์/พ่นสี", desc:"พ่นสี Built-in, MDF, ไม้จริง เคลือบด้าน/เงา", href:"/services#furniture"},
  { title:"ซ่อม/โป๊ว/กันซึม", desc:"ซ่อมรอยแตก รั่วซึม ขัดพื้นผิว ก่อนลงสี", href:"/services#repair"}
];
export default function ServiceCards(){
  return (
    <div className="grid md:grid-cols-4 gap-4 mt-6">
      {items.map((it)=>(
        <a key={it.title} href={it.href}
           className="p-5 rounded-2xl border hover:shadow transition bg-white">
          <h3 className="font-bold">{it.title}</h3>
          <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
          <span className="inline-block mt-3 text-brand-700 text-sm">ดูรายละเอียด →</span>
        </a>
      ))}
    </div>
  );
}
