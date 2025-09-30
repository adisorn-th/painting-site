export function generateMetadata({ params }){
  return {
    title: params.slug.replace(/-/g, ' ').slice(0,60) + " | บทความ",
  };
}

export default function BlogPost({ params }){
  const title = decodeURIComponent(params.slug);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-slate-600">
        บทความตัวอย่างสำหรับ SEO long-tail — โปรดแก้ไขเนื้อหาจริงเพื่อให้ติดอันดับบน Google
      </p>
      <article className="prose prose-slate mt-6">
        <h2>หัวข้อย่อย H2</h2>
        <p>ใส่รายละเอียดงาน สีที่เหมาะสม ขั้นตอนเตรียมพื้นผิว และภาพก่อน-หลังงาน</p>
        <h3>หัวข้อย่อย H3</h3>
        <ul>
          <li>คำค้นเฉพาะพื้นที่ เช่น รับทาสีคอนโด เขตบางนา</li>
          <li>เทคนิคเลือกเฉดสี</li>
          <li>เคสสตัดดี้ผลงานจริง</li>
        </ul>
      </article>
    </div>
  );
}
