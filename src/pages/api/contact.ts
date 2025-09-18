import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const TEST_MODE = String(import.meta.env.RESEND_TEST_MODE).toLowerCase() === "true";

export const POST: APIRoute = async ({ request }) => {
  try {
    const ct = request.headers.get("content-type") || "";
    let body: any = {};
    if (ct.includes("application/json")) {
      try {
        body = await request.json();
      } catch {
        body = {};
      }
    } else if (ct.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData();
      body = Object.fromEntries(form.entries());
    }

    const {
      firstName,
      lastName,
      email,
      phone = "",
      company = "",
      message,
      website = "",
    } = body ?? {};

    const from = "Progisud <no-reply@progisud-digital-partner.fr>"; 

    const to = TEST_MODE
      ? ["annie.briones11@gmail.com"]
      : ["Contact@progisud.com"];

    const labels = ["First Name", "Last Name", "Email", "Phone", "Company", "Message"];
    const labelWidth = Math.max(...labels.map(l => l.length)) + 1; // + ":" 
    const line = (label: string, value = "") =>
    (label + ":").padEnd(labelWidth, " ") + value;

    const textBody =
    [
        line("First Name", firstName),
        line("Last Name", lastName),
        line("Email", String(email)),
        line("Phone", phone || "-"),
        line("Company", company || "-"),
        line("Message"),
        message
    ].join("\n");

    // Honeypot: silently succeed if filled
    if (website && String(website).trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    if (!firstName || !lastName || !message || !isEmail(String(email))) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid input" }), { status: 400 });
    }

    await resend.emails.send({
      from: from,
      to: to,
      replyTo: String(email),
      subject: `New Contact from ${firstName} ${lastName}`,
      text: textBody
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
};
