/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, h as renderScript } from '../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5HXhIk8l.mjs';
export { renderers } from '../renderers.mjs';

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Team", "description": "Our Team", "lang": "en" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full bg-gray-50 py-16"> <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6"> <!-- Left: Image --> <div class="md:w-1/2 flex justify-center"> <img src="/images/ourteam/phmap.jpg" alt="Our Team" class="rounded-2xl shadow-lg w-full h-auto object-cover"> </div> <!-- Right: Text --> <div class="md:w-1/2"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Team</h2> <p class="text-gray-600 mb-6 leading-relaxed">
We are a group of passionate professionals dedicated to delivering innovative 
          solutions and creating meaningful impact for our clients. Our diverse expertise 
          and collaborative spirit allow us to tackle challenges from different perspectives 
          and achieve the best results.
</p> <ul class="space-y-3"> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.2s"> <span class="text-sky-700">✔</span> <span class="text-gray-700">
Delivery center based in Manila (Philippines).<br>
Key Resources in France
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.4s"> <span class="text-blue-200">✔</span> <span class="text-gray-700">
Office in Manila to improve collaboration and increase synergy of IT teams
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.6s"> <span class="text-blue-500">✔</span> <span class="text-gray-700">
Our people are independent, English-speaking and available to travel worldwide for periods ranging from 5 days to 6 months (Design, Build, UAT, Hypercare...)
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.8s"> <span class="text-blue-500">✔</span> <span class="text-gray-700">
Team Leader — your dedicated contact, combining technical and business expertise to liaise with your IT or business operational teams
</span> </li> </ul> </div> </div> </section>  <section class="mt-16 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-sky-700 py-32"> <div class="mx-auto max-w-6xl px-4 md:px-8 text-center"> <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 
                  lg:gap-0 lg:divide-x lg:divide-white/30 
                  [&>div]:lg:px-8"> <div> <div class="text-5xl font-extrabold text-white counter" data-to="20" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Employees on SAP S/4HANA Public Edition</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="4" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Projects on SAP S/4HANA Public Edition</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="40" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Employees on SAP S/4HANA or SAP ECC</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="15" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Employees on Onestream; Snowflake, SAC, BI, BW or BODS</p> </div> </div> </div> </section>  ${renderScript($$result2, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/our-team.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/our-team.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/our-team.astro";
const $$url = "/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
