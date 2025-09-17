/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5HXhIk8l.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Us", "description": "Get in touch", "lang": "en" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<h1 class="text-3xl font-bold">Contact Us</h1> <p class="mt-4">Drop a message to our team to see how we can help you</p> <form id="contactForm" class="mt-6 max-w-xl space-y-4 mb-10" autocomplete="off"> <!-- First & Last Name --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div> <input class="w-full rounded-lg border p-3" placeholder="First Name *" name="firstName" required> <p class="text-red-500 text-sm hidden">First name is required.</p> </div> <div> <input class="w-full rounded-lg border p-3" placeholder="Last Name *" name="lastName" required> <p class="text-red-500 text-sm hidden">Last name is required.</p> </div> </div> <!-- Email --> <div> <input class="w-full rounded-lg border p-3" placeholder="Email *" type="email" name="email" required> <p class="text-red-500 text-sm hidden">Valid email is required.</p> </div> <!-- Phone Number --> <input class="w-full rounded-lg border p-3" placeholder="Phone Number" type="tel" name="phone"> <!-- Company Name --> <input class="w-full rounded-lg border p-3" placeholder="Company Name" name="company"> <!-- Message --> <div> <textarea class="w-full rounded-lg border p-3" placeholder="Message *" rows="9" name="message" required></textarea> <p class="text-red-500 text-sm hidden">Message is required.</p> </div> <!-- Honeypot (hidden from users, attractive to bots) --> <div class="absolute left-[-9999px]" aria-hidden="true"> <label>Website
<input type="text" name="website" tabindex="-1" autocomplete="off" autocapitalize="off" spellcheck="false"> </label> </div> <!-- Submit Button --> <button class="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700" type="submit">
Send
</button> </form> <script>
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("contactForm");
      const btn = form.querySelector('button[type="submit"]');
      const isEmail = (v) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // \u{1F575}\uFE0F Honeypot check (bots often fill this)
        if (form.website && form.website.value) {
          // Silently succeed to avoid tipping off bots
          form.reset();
          return;
        }

        // quick validation
        let valid = true;
        const fields = form.querySelectorAll("[required]");
        fields.forEach((field) => {
          const bad = !field.value.trim() || (field.type === "email" && !isEmail(field.value));
          field.classList.toggle("border-red-500", bad);
          const msg = field.nextElementSibling;
          if (msg) msg.classList.toggle("hidden", !bad);
          if (bad) valid = false;
        });
        if (!valid) return;

        btn.disabled = true;

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: form.firstName.value,
              lastName: form.lastName.value,
              email: form.email.value,
              phone: form.phone.value || "",
              company: form.company.value || "",
              message: form.message.value,
              // include honeypot for server validation too
              website: form.website ? form.website.value : ""
            }),
          });

          const data = await res.json();
          if (data.ok) {
            alert("Message sent!");
            form.reset();
          } else {
            alert("Failed to send. " + (data.error || ""));
          }
        } catch (err) {
          console.error(err);
          alert("Failed to send. Please try again later.");
        } finally {
          btn.disabled = false;
        }
      });
    });
  <\/script> `], [" ", `<h1 class="text-3xl font-bold">Contact Us</h1> <p class="mt-4">Drop a message to our team to see how we can help you</p> <form id="contactForm" class="mt-6 max-w-xl space-y-4 mb-10" autocomplete="off"> <!-- First & Last Name --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div> <input class="w-full rounded-lg border p-3" placeholder="First Name *" name="firstName" required> <p class="text-red-500 text-sm hidden">First name is required.</p> </div> <div> <input class="w-full rounded-lg border p-3" placeholder="Last Name *" name="lastName" required> <p class="text-red-500 text-sm hidden">Last name is required.</p> </div> </div> <!-- Email --> <div> <input class="w-full rounded-lg border p-3" placeholder="Email *" type="email" name="email" required> <p class="text-red-500 text-sm hidden">Valid email is required.</p> </div> <!-- Phone Number --> <input class="w-full rounded-lg border p-3" placeholder="Phone Number" type="tel" name="phone"> <!-- Company Name --> <input class="w-full rounded-lg border p-3" placeholder="Company Name" name="company"> <!-- Message --> <div> <textarea class="w-full rounded-lg border p-3" placeholder="Message *" rows="9" name="message" required></textarea> <p class="text-red-500 text-sm hidden">Message is required.</p> </div> <!-- Honeypot (hidden from users, attractive to bots) --> <div class="absolute left-[-9999px]" aria-hidden="true"> <label>Website
<input type="text" name="website" tabindex="-1" autocomplete="off" autocapitalize="off" spellcheck="false"> </label> </div> <!-- Submit Button --> <button class="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700" type="submit">
Send
</button> </form> <script>
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("contactForm");
      const btn = form.querySelector('button[type="submit"]');
      const isEmail = (v) => /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/.test(v);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // \u{1F575}\uFE0F Honeypot check (bots often fill this)
        if (form.website && form.website.value) {
          // Silently succeed to avoid tipping off bots
          form.reset();
          return;
        }

        // quick validation
        let valid = true;
        const fields = form.querySelectorAll("[required]");
        fields.forEach((field) => {
          const bad = !field.value.trim() || (field.type === "email" && !isEmail(field.value));
          field.classList.toggle("border-red-500", bad);
          const msg = field.nextElementSibling;
          if (msg) msg.classList.toggle("hidden", !bad);
          if (bad) valid = false;
        });
        if (!valid) return;

        btn.disabled = true;

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: form.firstName.value,
              lastName: form.lastName.value,
              email: form.email.value,
              phone: form.phone.value || "",
              company: form.company.value || "",
              message: form.message.value,
              // include honeypot for server validation too
              website: form.website ? form.website.value : ""
            }),
          });

          const data = await res.json();
          if (data.ok) {
            alert("Message sent!");
            form.reset();
          } else {
            alert("Failed to send. " + (data.error || ""));
          }
        } catch (err) {
          console.error(err);
          alert("Failed to send. Please try again later.");
        } finally {
          btn.disabled = false;
        }
      });
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/contact-us.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
