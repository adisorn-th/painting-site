import { getAllPortfolio, getFilters } from "../../lib/portfolio";
import PortfolioFilters from "../../components/PortfolioFilters";
import PortfolioGrid from "../../components/PortfolioGrid";

export const metadata = { title: "ผลงานทาสี / Portfolio" };

export default function PortfolioPage(){
  const items = getAllPortfolio();
  const { categories, areas } = getFilters();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">ผลงานล่าสุด</h1>
      <p className="text-slate-600 mt-2">ตัวอย่างงานทาสี ภายใน/ภายนอก และพ่นสีเฟอร์นิเจอร์</p>

      <div className="mt-6">
        <PortfolioFilters categories={categories} areas={areas} />
      </div>

      <PortfolioGrid items={items} />
    </div>
  );
}
