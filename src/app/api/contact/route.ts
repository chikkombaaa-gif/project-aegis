import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^
\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Bot honeypot — should stay empty
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name (2–80 characters)." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email) || email.length > 120) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Message should be between 10 and 4000 characters." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "barathvelu777@gmail.com";
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

  try {
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `Portfolio contact from ${name}`,
          from_name: name,
          email,
          message,
          to,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        return NextResponse.json(
          { ok: false, error: data.message || "Could not send message. Try again." },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    // Default: FormSubmit (free). Activate once via the confirmation email.
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio contact from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = (await res.json()) as { success?: string | boolean; message?: string };
    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            data.message ||
            "Could not deliver message. Check FormSubmit activation for your inbox, or set WEB3FORMS_ACCESS_KEY.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Network error while sending. Please email directly." },
      { status: 500 },
    );
  }
}
