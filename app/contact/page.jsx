import LeadForm from "../../components/LeadForm";
export const metadata = { title: "ติดต่อเรา / ขอใบเสนอราคา" };

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">ติดต่อเรา</h1>
      <p className="mt-2 text-slate-600">
        โทร <a href="tel:+66872450878" className="text-brand-700 font-semibold">087-245-0878</a> |
        LINE: <span className="font-mono">0872450878</span>
      </p>

      <div className="mt-6"><LeadForm /></div>
    </div>
  );
}
