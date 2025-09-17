/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, h as renderScript } from '../../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5HXhIk8l.mjs';
export { renderers } from '../../renderers.mjs';

const $$OurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Notre \xE9quipe", "description": "Our Team", "lang": "en" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full bg-gray-50 py-16"> <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6"> <!-- Left: Image --> <div class="md:w-1/2 flex justify-center"> <img src="/images/ourteam/phmap.jpg" alt="Our Team" class="rounded-2xl shadow-lg w-full h-auto object-cover"> </div> <!-- Right: Text --> <div class="md:w-1/2"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Notre équipe</h2> <p class="text-gray-600 mb-6 leading-relaxed">
Nous sommes un groupe de professionnels passionnés, déterminés à offrir des solutions innovantes et à créer un impact significatif pour nos clients. 
          La diversité de nos expertises et notre esprit collaboratif nous permettent d’aborder les défis sous différents angles et d’obtenir les meilleurs résultats.
</p> <ul class="space-y-3"> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.2s"> <span class="text-sky-700">✔</span> <span class="text-gray-700">
Delivery center basé à Manille (Philippines). <br>
Ressources Clés en France
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.4s"> <span class="text-blue-200">✔</span> <span class="text-gray-700">
Bureau à Manille pour améliorer la collaboration et renforcer la synergie entre les équipes IT
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.6s"> <span class="text-blue-500">✔</span> <span class="text-gray-700">
Nos collaborateurs sont autonomes, anglophones et sont disponibles pour voyager dans le monde entier, pour des durées allant de 5 jours à 6 mois
( Design, Build, UAT, Support  GO Live...)
</span> </li> <li class="flex items-start gap-2 opacity-0 translate-x-[-20px] transition-all duration-700 whitespace-normal break-words" data-delay="0.8s"> <span class="text-blue-500">✔</span> <span class="text-gray-700">
Team Leader — Il est votre interlocuteur privilégié, alliant expertise technique et  métier afin d'échanger avec vos équipes opérationnelles IT ou Business
</span> </li> </ul> </div> </div> </section>  <section class="mt-16 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-sky-700 py-32"> <div class="mx-auto max-w-6xl px-4 md:px-8 text-center"> <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 
                  lg:gap-0 lg:divide-x lg:divide-white/30 
                  [&>div]:lg:px-8"> <div> <div class="text-5xl font-extrabold text-white counter" data-to="20" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Collaborateurs sur SAP S/4HANA Public Edition</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="4" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Projets sur SAP S/4HANA Public Edition</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="40" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Collaborateurs on SAP S/4HANA or SAP ECC</p> </div> <div> <div class="text-5xl font-extrabold text-white counter" data-to="15" data-suffix="+">0+</div> <p class="mt-2 text-white/90">Collaborateurs on Onestream; Snowflake, SAC, BI, BW ou  BODS</p> </div> </div> </div> </section>  ${renderScript($$result2, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/fr/our-team.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/fr/our-team.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/fr/our-team.astro";
const $$url = "/fr/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
