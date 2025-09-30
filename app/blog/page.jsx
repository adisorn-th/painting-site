export const metadata = { title: "บทความทาสีบ้าน/เลือกสี/ดูแลผนัง" };
export default function BlogIndex(){
  const posts = [
    {slug:"เลือกสีทาภายในให้ห้องสว่าง", title:"เลือกสีทาภายในให้ห้องสว่าง น่าอยู่ขึ้น"},
    {slug:"วิธีคำนวณสีกี่ถังดี", title:"วิธีคำนวณสีกี่ถัง ถึงจะพอสำหรับบ้านของคุณ"},
    {slug:"พ่นสีเฟอร์นิเจอร์ดีไหม", title:"พ่นสีเฟอร์นิเจอร์: เปลี่ยนลุคบิวท์อินแบบคุ้มค่า"}
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">บทความ</h1>
      <ul className="mt-6 space-y-3">
        {posts.map(p=>(
          <li key={p.slug}>
            <a href={`/blog/${encodeURIComponent(p.slug)}`} className="text-brand-700 underline">{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
