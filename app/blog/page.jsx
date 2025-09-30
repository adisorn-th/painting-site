import { getAllPosts } from "../../lib/posts";

export const metadata = { title: "บทความทาสีบ้าน/เลือกสี/ดูแลผนัง" };

export default function BlogIndex(){
  const items = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">บทความ</h1>
      <ul className="mt-6 space-y-4">
        {items.map(p=>(
          <li key={p.slug} className="p-4 border rounded-xl hover:shadow transition bg-white">
            <a href={`/blog/${encodeURIComponent(p.slug)}`} className="block">
              <div className="text-sm text-slate-500">{new Date(p.date).toLocaleDateString("th-TH")}</div>
              <div className="text-xl font-semibold mt-1">{p.title}</div>
              <p className="text-slate-600 mt-1">{p.description}</p>
              {p.tags?.length ? <div className="mt-2 text-xs text-slate-500">#{p.tags.join(" #")}</div> : null}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-6">* เพิ่มบทความใหม่ = แก้ไขไฟล์ <code>content/posts.json</code> แล้ว commit/push</p>
    </div>
  );
}
