export const metadata = { title: "แพ็กเกจ / ประเมินราคาเบื้องต้น" };

export default function Pricing(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">แพ็กเกจ / ประเมินราคา</h1>
      <p className="mt-2 text-slate-600">ราคาขึ้นกับสภาพพื้นผิว พื้นที่ (ตร.ม.) และชนิดสี</p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border rounded-xl overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">งาน</th>
              <th className="p-3 text-left">สีมาตรฐาน (เริ่มต้น)</th>
              <th className="p-3 text-left">สีเกรดพรีเมียม (เริ่มต้น)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">ทาสีภายใน</td>
              <td className="p-3">90–150 บาท/ตร.ม.</td>
              <td className="p-3">150–250 บาท/ตร.ม.</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">ทาสีภายนอก</td>
              <td className="p-3">120–200 บาท/ตร.ม.</td>
              <td className="p-3">200–320 บาท/ตร.ม.</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">พ่นสีเฟอร์นิเจอร์</td>
              <td className="p-3">ชิ้นเล็ก 1,500+</td>
              <td className="p-3">ชิ้นใหญ่/บิวท์อิน 5,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-500">* กรุณาติดต่อเพื่อประเมินหน้างานจริง</p>
    </div>
  );
}
