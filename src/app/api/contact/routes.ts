import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  eventDate: string;
  details: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 },
      );
    }

    const body = (await req.json()) as Partial<Payload>;

    if (!body.name || !body.email || !body.eventDate || !body.details) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    const text =
      `<b>📩 New contact request</b>\n` +
      `<b>Name:</b> ${escapeHtml(body.name)}\n` +
      `<b>Email:</b> ${escapeHtml(body.email)}\n` +
      `<b>Event date:</b> ${escapeHtml(body.eventDate)}\n` +
      `<b>Details:</b>\n${escapeHtml(body.details)}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return NextResponse.json({ ok: false, error: errText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 },
    );
  }
}
