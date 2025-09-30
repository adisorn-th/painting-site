export default async function sitemap() {
  const base = "https://www.example.com";
  const routes = ["","/services","/portfolio","/pricing","/contact","/blog"].map(
    (r)=>({ url: base + r, lastModified: new Date().toISOString() })
  );
  return routes;
}
