import Image from "next/image";
import { notFound } from "next/navigation";
import BeforeAfter from "../../../components/BeforeAfter";
import { getBySlug } from "../../../lib/portfolio";

export function generateMetadata({ params }){
  const item = getBySlug(params.slug);
  if(!item) return { title: "ไม่พบผลงาน" };
  return {
    title: item.title,
    description: item.summary || item.alt || item.title,
    openGraph: {
      title: item.title,
      description: item.summary || item.alt || item.title,
      images: item.cover ? [{ url: item.cover, width: 1200, height: 900 }] : []
    }
  };
}

export default function PortfolioDetail({ params }){
  const item = getBySlug(params.slug);
  if(!item) return notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"ผลงาน","item":"https://www.example.com/portfolio"},
      {"@type":"ListItem","position":2,"name":item.title,"item":"https://www.example.com/portfolio/"+encodeURIComponent(item.slug)}
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <div className="text-sm text-slate-500 mt-1">{new Date(item.date).toLocaleDateString("th-TH")} • {item.category} • {item.area}</div>

      <div className="mt-6 rounded-xl overflow-hidden border">
        <Image src={item.cover} alt={item.alt||item.title} width={1200} height={900} className="w-full h-auto object-cover" priority/>
      </div>

      {item.summary && <p className="mt-4 text-slate-700 leading-7">{item.summary}</p>}

      {(item.before && item.after) && (
        <div className="mt-8">
          <h2 className="text-xl font-heading mb-3">ก่อน-หลังงาน</h2>
          <BeforeAfter before={item.before} after={item.after} height={420} />
        </div>
      )}

      {item.gallery?.length ? (
        <div className="mt-10">
          <h2 className="text-xl font-heading mb-3">แกลเลอรี</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {item.gallery.map((g, i)=>(
              <div key={i} className="relative rounded-xl overflow-hidden border">
                <Image src={g.src} alt={g.alt || item.title} width={g.w||900} height={g.h||900} className="w-full h-auto object-cover"/>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {item.colors?.length || item.brand ? (
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border text-sm">
          {item.colors?.length ? <div><b>โทนสี:</b> {item.colors.join(", ")}</div> : null}
          {item.brand ? <div><b>ยี่ห้อสี:</b> {item.brand}</div> : null}
          {item.size_sqm ? <div><b>พื้นที่โดยประมาณ:</b> {item.size_sqm} ตร.ม.</div> : null}
        </div>
      ) : null}

      {item.testimonial?.text ? (
        <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
          “{item.testimonial.text}” — <b>{item.testimonial.name}</b>
        </div>
      ) : null}

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbLd)}} />
    </div>
  );
}
