import { NextResponse } from "next/server";
import { Resend } from "resend";

type ReserveBody = {
  name?: string;
  date?: string;
  time?: string;
  guests?: string;
  contact?: string;
  note?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReserveBody;
    const { name, date, time, guests, contact, note } = body;

    if (!name || !date || !time || !guests || !contact) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const summary = [
      `Namn: ${name}`,
      `Datum: ${date}`,
      `Tid: ${time}`,
      `Antal gäster: ${guests}`,
      `Kontakt: ${contact}`,
      note ? `Önskemål: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (apiKey && fromEmail) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: fromEmail,
        to: "info@brunnsgatan41.com",
        subject: `Bokningsförfrågan: ${name} ${date} ${time}`,
        text: summary,
      });
    } else {
      console.log("[reserve] Bokningsförfrågan mottagen (ingen Resend-konfig):\n" + summary);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
