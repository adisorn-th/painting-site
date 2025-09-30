"use client";
import { useState } from "react";

export default function LeadForm(){
  const [loading,setLoading] = useState(false);
  const [ok,setOk] = useState(false);
  const [err,setErr] = useState("");

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true); setOk(false); setErr("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || "ส่งไม่สำเร็จ");
      setOk(true);
      e.currentTarget.reset();
    } catch (ex) {
      setErr(ex.message || "เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 bg-white p-6 rounded-2xl shadow">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="ชื่อ*" className="input"/>
        <input name="phone" required placeholder="เบอร์โทร*" className="input"/>
      </div>
      <input name="email" type="email" placeholder="อีเมล (ถ้ามี)" className="input"/>
      <input name="location" placeholder="สถานที่/เขตที่ให้บริการ" className="input"/>
      <select name="service" className="input">
        <option>ทาสีภายใน</option>
        <option>ทาสีภายนอก</option>
        <option>สีเฟอร์นิเจอร์/พ่นสี</option>
        <option>ซ่อม/กันซึม</option>
      </select>
      <textarea name="detail" rows="4" placeholder="รายละเอียดพื้นที่ สีที่ต้องการ พื้นที่ประมาณการ (ตรม.)" className="input"/>
      {/* honeypot กันสแปม: ซ่อนไว้ด้วย CSS/utility */}
      <div className="hidden">
        <label>Website<input name="website" type="text" autoComplete="off"/></label>
      </div>

      <button disabled={loading} className="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold">
        {loading ? "กำลังส่ง..." : "ส่งคำขอใบเสนอราคา"}
      </button>

      {ok && <p className="text-green-600 text-sm">ส่งข้อมูลเรียบร้อย เราจะติดต่อกลับโดยเร็ว</p>}
      {err && <p className="text-red-600 text-sm">❌ {err}</p>}

      <style jsx>{`.input { @apply border rounded-xl px-3 py-2; }`}</style>
    </form>
  );
}
