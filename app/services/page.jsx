import JsonLd from "../../components/JsonLd";
export const metadata = { title: "บริการทาสีภายใน ภายนอก และสีเฟอร์นิเจอร์" };

export default function Services(){
  const serviceLd = {
    "@context":"https://schema.org","@type":"Service",
    "serviceType":"House painting, Furniture painting",
    "areaServed":["Bangkok","Nonthaburi","Pathum Thani","Samut Prakan"],
    "provider":{"@type":"Organization","name":"Painting Pro"}
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">บริการทาสี</h1>
      <p className="mt-2 text-slate-600">ภายใน / ภายนอก / เฟอร์นิเจอร์ / ซ่อมพื้นผิว / กันซึม</p>

      <div id="interior" className="mt-8">
        <h2 className="text-xl font-semibold">ทาสีภายใน</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>สีเช็ดล้างง่าย กลิ่นน้อย เหมาะสำหรับห้องพักอาศัย</li>
          <li>บริการปกป้องพื้น/เฟอร์นิเจอร์ และเก็บงานความสะอาด</li>
        </ul>
      </div>

      <div id="exterior" className="mt-8">
        <h2 className="text-xl font-semibold">ทาสีภายนอก</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>ทนแดดฝน กันเชื้อรา/ตะไคร่น้ำ</li>
          <li>ซ่อมรอยแตกร้าว/ซีลกันซึม ก่อนลงสีจริง</li>
        </ul>
      </div>

      <div id="furniture" className="mt-8">
        <h2 className="text-xl font-semibold">สีเฟอร์นิเจอร์/พ่นสี</h2>
        <ul className="list-disc ml-6 text-slate-700">
          <li>พ่นสี Built-in, MDF, ไม้จริง เคลือบด้าน/เงา</li>
          <li>งานละเอียด ระยะเวลา 1–3 วัน/ชุด</li>
        </ul>
      </div>

      <JsonLd data={serviceLd}/>
    </div>
  );
}
