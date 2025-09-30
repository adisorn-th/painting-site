import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import Steps from "../components/Steps";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import JsonLd from "../components/JsonLd";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "รับทาสีภายในและภายนอกต่างกันอย่างไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "สีภายในเน้นกลิ่นน้อยและเช็ดล้างง่าย สีภายนอกทนแดดฝนและป้องกันเชื้อราได้ดีกว่า"
        }
      },
      {
        "@type": "Question",
        "name": "ทำสีเฟอร์นิเจอร์ใช้เวลานานไหม?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "งานพ่นสี/เคลือบเงาโดยทั่วไป 1–3 วัน ขึ้นกับสภาพพื้นผิวและจำนวนชิ้นงาน"
        }
      }
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"หน้าแรก","item":"https://www.example.com"}
    ]
  };

  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">บริการของเรา</h2>
        <p className="mt-2 text-slate-600">
          รับทาสีภายนอก-ภายใน ซ่อมผนัง พ่นสี/เคลือบเฟอร์นิเจอร์ งานละเอียดโดยทีมช่างมืออาชีพ
        </p>
        <ServiceCards />
      </section>

      <Steps />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">ผลงานล่าสุด</h2>
        <Gallery />
      </section>

      <Testimonial />

      <section id="quote" className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">ขอใบเสนอราคาฟรี</h2>
          <LeadForm />
        </div>
      </section>

      <FAQ />

      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
    </>
  );
}
