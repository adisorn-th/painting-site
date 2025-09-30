"use client";
import Image from "next/image";
import { useState } from "react";

export default function BeforeAfter({ before, after, height = 420 }){
  const [pos, setPos] = useState(50); // percent
  return (
    <div className="relative rounded-xl overflow-hidden border" style={{height}}>
      <div className="absolute inset-0">
        <Image src={after.src} alt={after.alt||"หลังทำงาน"} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0" style={{clipPath:`inset(0 ${100-pos}% 0 0)`}}>
        <Image src={before.src} alt={before.alt||"ก่อนทำงาน"} fill sizes="100vw" className="object-cover" />
      </div>
      <input
        type="range" min="0" max="100" value={pos}
        onChange={e=>setPos(parseInt(e.target.value))}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 appearance-none"
        aria-label="Before/After slider"
      />
      <div className="absolute inset-y-0" style={{left:`calc(${pos}% - 1px)`}}>
        <div className="w-0.5 h-full bg-white/80"></div>
      </div>
      <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">ก่อน</div>
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">หลัง</div>
    </div>
  );
}
