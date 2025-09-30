# Painting Pro — Next.js (App Router) + Tailwind

เว็บไซต์โปรโมทบริการรับทาสี ภายใน/ภายนอก/เฟอร์นิเจอร์ พร้อม SEO โครงสร้างพื้นฐาน

## เริ่มต้นใช้งาน
```bash
npm install
npm run dev
# เปิด http://localhost:3000
```

## ปรับค่า SEO
- แก้ `app/layout.jsx` เปลี่ยน `metadataBase`, ชื่อแบรนด์, เบอร์โทร
- รูป OpenGraph: `public/og.png`
- เพิ่มรูปผลงานใน `public/gallery/*`
- ปรับเนื้อหาในหน้า `app/services`, `app/pricing`, `app/blog`

## โปรดักชัน
```bash
npm run build
npm start
```
