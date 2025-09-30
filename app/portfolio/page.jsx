export const metadata = { title: "ผลงานทาสี / แกลเลอรี" };
export default function Portfolio(){
  const items = [
    {src:"/gallery/ext-condo-1.png", alt:"ทาสีภายนอก คอนโด กรุงเทพฯ"},
    {src:"/gallery/int-house-1.png", alt:"ทาสีภายใน บ้านเดี่ยว ย่านลาดพร้าว"},
    {src:"/gallery/furniture-wardrobe.png", alt:"พ่นสีเฟอร์นิเจอร์ตู้เสื้อผ้า Built-in"}
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">ผลงานล่าสุด</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {items.map((it)=>(
          <img key={it.src} src={it.src} alt={it.alt} className="rounded-xl border"/>
        ))}
      </div>
    </div>
  );
}
