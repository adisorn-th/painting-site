"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PortfolioFilters({ categories = [], areas = [] }){
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const [cat, setCat] = useState(sp.get("cat") || "");
  const [area, setArea] = useState(sp.get("area") || "");

  useEffect(()=>{
    const params = new URLSearchParams();
    if(q) params.set("q", q);
    if(cat) params.set("cat", cat);
    if(area) params.set("area", area);
    const qs = params.toString();
    router.replace(`/portfolio${qs ? "?" + qs : ""}`);
  }, [q, cat, area]); // eslint-disable-line

  return (
    <div className="grid md:grid-cols-3 gap-3">
      <input
        value={q} onChange={e=>setQ(e.target.value)} placeholder="ค้นหาโครงการ/พื้นที่/สี"
        className="border rounded-xl px-3 py-2"
      />
      <select value={cat} onChange={e=>setCat(e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="">ทุกประเภทงาน</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={area} onChange={e=>setArea(e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="">ทุกพื้นที่</option>
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>
    </div>
  );
}
