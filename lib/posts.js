import posts from "../content/posts.json";

export function getAllPosts() {
  return [...posts].sort((a,b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const s = decodeURIComponent(slug);
  return posts.find(p => p.slug === s);
}
