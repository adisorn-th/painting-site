import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/posts";

export function generateMetadata({ params }){
  const post = getPostBySlug(params.slug);
  if(!post) return { title: "ไม่พบบทความ" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.cover ? [{ url: post.cover, width: 1200, height: 900 }] : [],
    },
  };
}

function Block({ block }){
  switch(block.type){
    case "h2": return <h2 className="text-2xl font-heading mt-8">{block.text}</h2>;
    case "h3": return <h3 className="text-xl font-heading mt-6">{block.text}</h3>;
    case "p":  return <p className="mt-3 text-slate-700 leading-7">{block.text}</p>;
    case "ul": return <ul className="list-disc ml-6 mt-3 text-slate-700">{block.items?.map((it,i)=>(<li key={i}>{it}</li>))}</ul>;
    case "ol": return <ol className="list-decimal ml-6 mt-3 text-slate-700">{block.items?.map((it,i)=>(<li key={i}>{it}</li>))}</ol>;
    case "note": return <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">{block.text}</div>;
    case "image":
      return (
        <div className="mt-6 rounded-xl overflow-hidden border">
          <Image src={block.src} alt={block.alt||""} width={block.w||1200} height={block.h||800} className="w-full h-auto object-cover" />
        </div>
      );
    default: return null;
  }
}

export default function BlogPost({ params }){
  const post = getPostBySlug(params.slug);
  if(!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString("th-TH")}</div>
      <h1 className="text-3xl font-bold mt-1">{post.title}</h1>
      {post.cover && (
        <div className="mt-4 rounded-xl overflow-hidden border">
          <Image src={post.cover} alt={post.alt || ""} width={1200} height={900} className="w-full h-auto object-cover" priority/>
        </div>
      )}
      {post.description && <p className="mt-4 text-slate-700">{post.description}</p>}
      <article className="prose prose-slate max-w-none mt-6">
        {post.content?.map((b, i) => <Block key={i} block={b} />)}
      </article>
    </div>
  );
}
