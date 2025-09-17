import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_i6GhNosj_39ujXMEAdUk4oKFsck3phdGm");
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const TEST_MODE = String("true").toLowerCase() === "true";
const POST = async ({ request }) => {
  try {
    const ct = request.headers.get("content-type") || "";
    let body = {};
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
      website = ""
    } = body ?? {};
    const from = TEST_MODE ? "Acme <onboarding@resend.dev>" : "Progisud <no-reply@progisuddigitalpartner.com>";
    const to = TEST_MODE ? ["annie.briones11@gmail.com"] : ["EXT.GRANNOU@cma-cgm.com"];
    const labels = ["First Name", "Last Name", "Email", "Phone", "Company", "Message"];
    const labelWidth = Math.max(...labels.map((l) => l.length)) + 1;
    const line = (label, value = "") => (label + ":").padEnd(labelWidth, " ") + value;
    const textBody = [
      line("First Name", firstName),
      line("Last Name", lastName),
      line("Email", String(email)),
      line("Phone", phone || "-"),
      line("Company", company || "-"),
      line("Message"),
      message
    ].join("\n");
    if (website && String(website).trim() !== "") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    if (!firstName || !lastName || !message || !isEmail(String(email))) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid input" }), { status: 400 });
    }
    await resend.emails.send({
      from,
      to,
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
