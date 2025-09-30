export const runtime = "nodejs"; // ใช้ Node runtime (Nodemailer ใช้ Edge ไม่ได้)

import nodemailer from "nodemailer";

function sanitize(s = "") {
  return String(s || "").toString().slice(0, 2000);
}

export async function POST(req) {
  try {
    const data = await req.json();

    const name = sanitize(data.name);
    const phone = sanitize(data.phone);
    const email = sanitize(data.email);
    const location = sanitize(data.location);
    const service = sanitize(data.service);
    const detail = sanitize(data.detail);
    const honeypot = sanitize(data.website); // ฟิลด์หลบสแปม

    // กันบอท: ถ้า honeypot ถูกกรอก ให้ตอบ ok แต่ไม่ส่งอีเมล
    if (honeypot) {
      return Response.json({ ok: true });
    }

    if (!name || !phone) {
      return new Response(JSON.stringify({ ok: false, message: "กรอกชื่อและเบอร์โทร" }), { status: 400 });
    }

    // ตั้งค่า SMTP จาก .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE || "true") !== "false", // true = 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const TO = process.env.TO_EMAIL || process.env.SMTP_USER;
    const FROM = process.env.FROM_EMAIL || `"สมพรเพ้นท์โปร" <no-reply@yourdomain.com>`;

    const subject = `Lead ใหม่จากเว็บไซต์ — ${name} (${phone})`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans Thai', sans-serif; line-height:1.6;">
        <h2>📩 Lead ใหม่จากเว็บไซต์</h2>
        <table style="border-collapse: collapse;">
          <tr><td style="padding:4px 8px;">ชื่อ</td><td style="padding:4px 8px;"><b>${name}</b></td></tr>
          <tr><td style="padding:4px 8px;">โทร</td><td style="padding:4px 8px;"><a href="tel:${phone}">${phone}</a></td></tr>
          ${email ? `<tr><td style="padding:4px 8px;">อีเมล</td><td style="padding:4px 8px;">${email}</td></tr>` : ""}
          ${location ? `<tr><td style="padding:4px 8px;">สถานที่</td><td style="padding:4px 8px;">${location}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:4px 8px;">บริการ</td><td style="padding:4px 8px;">${service}</td></tr>` : ""}
        </table>
        ${detail ? `<p style="margin-top:12px"><b>รายละเอียด:</b><br/>${detail.replace(/\n/g,"<br/>")}</p>` : ""}
        <hr/>
        <p style="color:#64748b;font-size:12px">อีเมลนี้ถูกส่งอัตโนมัติจากฟอร์มหน้าเว็บ สมพรเพ้นท์โปร</p>
      </div>
    `;
    const text =
`Lead ใหม่จากเว็บไซต์
ชื่อ: ${name}
โทร: ${phone}
อีเมล: ${email || "-"}
สถานที่: ${location || "-"}
บริการ: ${service || "-"}
รายละเอียด:
${detail || "-"}`;

    await transporter.sendMail({
      from: FROM,
      to: TO,
      subject,
      html,
      text,
      replyTo: email || undefined,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("MAIL_ERR:", err);
    return new Response(JSON.stringify({ ok: false, message: "ส่งอีเมลไม่สำเร็จ" }), { status: 500 });
  }
}
