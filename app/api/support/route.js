import nodemailer from "nodemailer";

const DEFAULT_TO_EMAIL = "getxdiscount@gmail.com";

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = String(process.env.SMTP_PASS || "").replace(/\s+/g, "");

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let subject = "";
    let message = "";
    let attachmentValues = [];

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const body = await request.formData();
      name = String(body.get("name") || "").trim();
      email = String(body.get("email") || "").trim();
      subject = String(body.get("subject") || "").trim();
      message = String(body.get("message") || "").trim();
      attachmentValues = body.getAll("attachments");
    } else {
      const body = await request.json();
      name = String(body?.name || "").trim();
      email = String(body?.email || "").trim();
      subject = String(body?.subject || "").trim();
      message = String(body?.message || "").trim();
      attachmentValues = [];
    }

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const transport = getTransport();
    if (!transport) {
      return Response.json(
        {
          error:
            "SMTP is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment.",
        },
        { status: 500 },
      );
    }

    const attachments = [];
    for (const value of attachmentValues) {
      if (!value || typeof value === "string") {
        continue;
      }

      if (typeof value.type !== "string" || !value.type.startsWith("image/")) {
        continue;
      }

      if (value.size > 5 * 1024 * 1024) {
        return Response.json(
          {
            error: "Each image must be 5 MB or smaller.",
          },
          { status: 400 },
        );
      }

      const arrayBuffer = await value.arrayBuffer();
      attachments.push({
        filename: value.name || "screenshot.png",
        content: Buffer.from(arrayBuffer),
        contentType: value.type || "application/octet-stream",
      });
    }

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const toAddress = process.env.SUPPORT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const mailSubject = `[Support] ${subject}`;

    await transport.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: mailSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2 style="margin:0 0 12px">New support request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      `,
      attachments,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Support email error:", error);
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Failed to send message.",
      },
      { status: 500 },
    );
  }
}
