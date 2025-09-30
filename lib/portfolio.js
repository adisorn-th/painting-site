import items from "../content/portfolio.json";

export function getAllPortfolio() {
  return [...items].sort((a,b) => (a.date < b.date ? 1 : -1));
}

export function getBySlug(slug) {
  const s = decodeURIComponent(slug);
  return items.find(p => p.slug === s);
}

export function getFilters() {
  const cats = Array.from(new Set(items.map(i => i.category))).sort();
  const areas = Array.from(new Set(items.map(i => i.area))).sort();
  return { categories: cats, areas };
}
