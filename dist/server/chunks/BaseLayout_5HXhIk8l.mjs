import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, m as maybeRenderHead, r as renderComponent, i as renderHead, j as renderSlot } from './astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("https://progisuddigitalpartner.com");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title = "My Astro Site",
    description = "Fast, content-first site built with Astro + Tailwind",
    image = "/og-image.png",
    lang = "en",
    url = Astro2.url,
    noIndex = false
  } = Astro2.props;
  return renderTemplate`<!-- Basic SEO + social cards --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="canonical"${addAttribute(url, "href")}>${noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Open Graph / Twitter --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}>`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/components/Seo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://progisuddigitalpartner.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname;
  const paramLang = Astro2.params?.lang;
  const detectedLang = paramLang ?? (path.split("/")[1] || "en");
  const lang = detectedLang === "fr" ? "fr" : "en";
  const labelsByLang = {
    en: {
      home: "About Us",
      team: "Our Team",
      services: "Our Services",
      localization: "Localization",
      contact: "Contact Us",
      switchEN: "EN",
      switchFR: "FR"
    },
    fr: {
      home: "Accueil",
      team: "Notre \xE9quipe",
      services: "Nos services",
      localization: "Localisation",
      contact: "Contactez-nous",
      switchEN: "EN",
      switchFR: "FR"
    }
  };
  const labels = labelsByLang[lang];
  const prefix = lang === "en" ? "" : `/${lang}`;
  const currentPath = path;
  const normalize = (s) => {
    if (!s) return "/";
    const noSlash = s.replace(/\/+$/, "");
    return noSlash === "" ? "/" : noSlash;
  };
  const isHomeTarget = (t) => {
    const n = normalize(t);
    return n === "/" || n === "/fr";
  };
  const linkClass = (p) => {
    const target = normalize(p);
    const here = normalize(currentPath);
    const active = isHomeTarget(target) ? here === target : here === target || here.startsWith(target + "/");
    return `${active ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-gray-700 hover:text-black"} text-sm px-1 py-0.5`;
  };
  const toEN = currentPath.replace(/^\/fr(\/|$)/, "/");
  const toFR = currentPath.startsWith("/fr") ? currentPath : currentPath === "/" ? "/fr/" : `/fr${currentPath}`;
  const homeHref = prefix ? `${prefix}/` : "/";
  return renderTemplate(_a || (_a = __template(["", '<header class="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"> <!-- Top bar --> <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between"> <!-- Logo --> <a', '> <img src="/images/progisud-logo.jpg" alt="Progisud Logo" class="h-10 md:h-12 lg:h-16 w-auto"> </a> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-6"> <a', "", ">", "</a> <a", "", ">", "</a> <a", "", ">", "</a> <a", "", ">", "</a> <a", "", ">", '</a> <span class="mx-2 h-4 w-px bg-gray-300"></span> <!-- Language switch keeps current page --> <a class="text-sm text-gray-700 hover:text-black"', ">", '</a> <a class="text-sm text-gray-700 hover:text-black"', ">", '</a> </nav> <!-- Mobile toggle --> <button id="mobile-nav-toggle" class="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle menu"> <span class="block h-0.5 w-5 bg-gray-900 transition-all"></span> <span class="block h-0.5 w-5 my-1 bg-gray-900 transition-opacity"></span> <span class="block h-0.5 w-5 bg-gray-900 transition-all"></span> </button> </div> <!-- Mobile menu --> <div id="mobile-menu" class="md:hidden origin-top overflow-hidden max-h-0 opacity-0 transition-all duration-300"> <nav class="px-4 pb-4 flex flex-col gap-3"> <a', "", ">", "</a> <a", "", ">", "</a> <a", "", ">", "</a> <a", "", ">", "</a> <a", "", ">", '</a> <div class="mt-2 flex items-center gap-4 pt-2 border-t"> <!-- Language switch keeps current page --> <a class="text-sm"', ">", '</a> <a class="text-sm"', ">", "</a> </div> </nav> </div> <!-- Toggle script --> <script>\n    const btn = document.getElementById('mobile-nav-toggle');\n    const panel = document.getElementById('mobile-menu');\n    if (btn && panel) {\n      btn.addEventListener('click', () => {\n        const open = btn.getAttribute('aria-expanded') === 'true';\n        btn.setAttribute('aria-expanded', open ? 'false' : 'true');\n        panel.classList.toggle('max-h-0', open);\n        panel.classList.toggle('opacity-0', open);\n        panel.classList.toggle('max-h-96', !open);\n        panel.classList.toggle('opacity-100', !open);\n\n        const bars = btn.querySelectorAll('span');\n        bars[0].classList.toggle('rotate-45', !open);\n        bars[0].classList.toggle('translate-y-[3px]', !open);\n        bars[1].classList.toggle('opacity-0', !open);\n        bars[2].classList.toggle('-rotate-45', !open);\n        bars[2].classList.toggle('-translate-y-[3px]', !open);\n      });\n    }\n  <\/script> </header>"])), maybeRenderHead(), addAttribute(homeHref, "href"), addAttribute(linkClass(homeHref), "class"), addAttribute(homeHref, "href"), labels.home, addAttribute(linkClass(`${prefix}/our-team`), "class"), addAttribute(`${prefix}/our-team`, "href"), labels.team, addAttribute(linkClass(`${prefix}/our-services`), "class"), addAttribute(`${prefix}/our-services`, "href"), labels.services, addAttribute(linkClass(`${prefix}/localization`), "class"), addAttribute(`${prefix}/localization`, "href"), labels.localization, addAttribute(linkClass(`${prefix}/contact-us`), "class"), addAttribute(`${prefix}/contact-us`, "href"), labels.contact, addAttribute(toEN, "href"), labels.switchEN, addAttribute(toFR, "href"), labels.switchFR, addAttribute(linkClass(homeHref), "class"), addAttribute(homeHref, "href"), labels.home, addAttribute(linkClass(`${prefix}/our-team`), "class"), addAttribute(`${prefix}/our-team`, "href"), labels.team, addAttribute(linkClass(`${prefix}/our-services`), "class"), addAttribute(`${prefix}/our-services`, "href"), labels.services, addAttribute(linkClass(`${prefix}/localization`), "class"), addAttribute(`${prefix}/localization`, "href"), labels.localization, addAttribute(linkClass(`${prefix}/contact-us`), "class"), addAttribute(`${prefix}/contact-us`, "href"), labels.contact, addAttribute(toEN, "href"), labels.switchEN, addAttribute(toFR, "href"), labels.switchFR);
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t bg-white"> <div class="mx-auto max-w-6xl px-4 py-6 flex items-center gap-4 text-sm text-gray-600"> <!-- Logo --> <img src="/images/progisud-logo.jpg" alt="Progisud Logo" class="h-8 w-auto"> <!-- Divider --> <div class="h-6 w-px bg-gray-400"></div> <!-- Text --> <div> <span class="font-semibold text-black">Progisud Digital Partner</span><br>
All rights reserved.
</div> </div> </footer>`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://progisuddigitalpartner.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Progisud Digital Partner",
    description = "Your digital needs partner",
    lang = "en",
    noIndex = false
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth"> <head><meta charset="utf-8">${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "lang": lang, "noIndex": noIndex })}<link rel="icon" href="images/progisud-logo.jpg"><link rel="stylesheet" href="/fonts/inter.css">${renderHead()}</head> <body class="min-h-screen bg-gray-50 text-gray-900 antialiased"> ${renderComponent($$result, "Header", $$Header, { "lang": lang })} <main class="mx-auto max-w-6xl px-4 pt-10 pb-0"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
