"use client";
import { useState } from "react";

export default function LeadForm(){
  const [loading,setLoading] = useState(false);
  const [ok,setOk] = useState(false);

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    // TODO: ส่งไป API/Email/LINE
    await new Promise(r=>setTimeout(r,800)); // mock
    setOk(true); setLoading(false); e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 bg-white p-6 rounded-2xl shadow">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="ชื่อ*" className="input"/>
        <input name="phone" required placeholder="เบอร์โทร*" className="input"/>
      </div>
      <input name="location" placeholder="สถานที่/เขตที่ให้บริการ" className="input"/>
      <select name="service" className="input">
        <option>ทาสีภายใน</option>
        <option>ทาสีภายนอก</option>
        <option>สีเฟอร์นิเจอร์/พ่นสี</option>
        <option>ซ่อม/กันซึม</option>
      </select>
      <textarea name="detail" rows="4" placeholder="รายละเอียดพื้นที่ สีที่ต้องการ พื้นที่ประมาณการ (ตรม.)" className="input"/>
      <button disabled={loading} className="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold">
        {loading ? "กำลังส่ง..." : "ส่งคำขอใบเสนอราคา"}
      </button>
      {ok && <p className="text-green-600 text-sm">ส่งข้อมูลเรียบร้อย เราจะติดต่อกลับโดยเร็ว</p>}

      <style jsx>{`
        .input { @apply border rounded-xl px-3 py-2; }
      `}</style>
    </form>
  );
}
