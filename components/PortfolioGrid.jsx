"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function PortfolioGrid({ items = [] }){
  const sp = useSearchParams();
  const q = (sp.get("q") || "").toLowerCase();
  const cat = sp.get("cat") || "";
  const area = sp.get("area") || "";

  const filtered = useMemo(()=>{
    return items.filter(it => {
      const hitQ = !q || (
        it.title.toLowerCase().includes(q) ||
        it.area.toLowerCase().includes(q) ||
        (it.colors||[]).join(" ").toLowerCase().includes(q) ||
        (it.brand||"").toLowerCase().includes(q)
      );
      const hitCat = !cat || it.category === cat;
      const hitArea = !area || it.area === area;
      return hitQ && hitCat && hitArea;
    });
  }, [items, q, cat, area]);

  if (!filtered.length) {
    return <p className="text-slate-500 mt-6">ไม่พบผลงานที่ตรงกับการค้นหา</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {filtered.map(it => (
        <Link key={it.slug} href={`/portfolio/${encodeURIComponent(it.slug)}`} className="block group">
          <div className="relative rounded-xl overflow-hidden border">
            <Image
              src={it.cover} alt={it.alt || it.title}
              width={1200} height={900} className="w-full h-auto object-cover transition-transform group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-2 text-sm text-slate-500">{new Date(it.date).toLocaleDateString("th-TH")}</div>
          <div className="font-semibold">{it.title}</div>
          <div className="text-xs text-slate-500">{it.category} • {it.area}</div>
        </Link>
      ))}
    </div>
  );
}
