export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "บริการรับทาสี ภายนอก ภายใน สีเฟอร์นิเจอร์ | ช่างมืออาชีพ",
    template: "%s | บริการทาสี"
  },
  description:
    "รับทาสีบ้าน อาคาร คอนโด โรงงาน งานภายใน-ภายนอก สีเฟอร์นิเจอร์ พ่นสี เคลือบเงา โดยทีมช่างมืออาชีพ ประเมินหน้างานฟรี นัดหมายสะดวก",
  alternates: { canonical: "/" },
  openGraph: {
    title: "บริการรับทาสีครบวงจร",
    description:
      "ทาสีภายใน-ภายนอก งานซ่อมผนัง พ่นสีเฟอร์นิเจอร์ ครบจบในที่เดียว",
    url: "https://www.example.com",
    siteName: "Painting Pro",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "th_TH",
    type: "website"
  },
  twitter: { card: "summary_large_image" }
};

import "./../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

import { Kanit, Sarabun } from "next/font/google";

const headingFont = Kanit({
  subsets: ["thai","latin"],
  weight: ["600","700","800"],
  variable: "--font-heading",
  display: "swap",
});
const bodyFont = Sarabun({
  subsets: ["thai","latin"],
  weight: ["400","500","600"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: "สมพรเพ้นท์โปร",
    image: "https://www.example.com/og.png",
    url: "https://www.example.com",
    telephone: "+66-87-245-0878",
    address: { "@type": "PostalAddress", addressCountry: "TH", addressLocality: "กรุงเทพฯ" },
    areaServed: ["กรุงเทพฯ", "นนทบุรี", "ปทุมธานี", "สมุทรปราการ", "นครปฐม", "สมุทรสาคร"],
    openingHours: "Mo-Sa 09:00-18:00",
    openGraph: { images: [{ url: "/logo-stacked.svg", width: 800, height: 800 }] }
  };

  return (
    <html lang="th">
       <body className={`${headingFont.variable} ${bodyFont.variable} text-slate-800 font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* JsonLd ... */}
      </body>
    </html>
  );
}
