import Image from "next/image";
import gallery from "../content/gallery.json"; // เส้นทางจาก /app หรือ /components

export default function Gallery(){
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {gallery.map((it)=>(
        <div key={it.src} className="relative rounded-xl overflow-hidden border">
          <Image src={it.src} alt={it.alt} width={it.w} height={it.h} className="object-cover w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
