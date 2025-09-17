/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5HXhIk8l.mjs';
import { $ as $$WorldMapPins } from '../chunks/WorldMapPins_BORrVxuS.mjs';
export { renderers } from '../renderers.mjs';

const $$Localization = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Localization", "description": "Localization", "lang": "en" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full bg-white mb-16 py-8 px-8"> <h2 data-fly class="text-3xl font-bold text-center">Our Locations</h2> ${renderComponent($$result2, "WorldMapPins", $$WorldMapPins, { "imageSrc": "/images/localization/worldmap.png", "title": "Our global offices" })} <div class="grid gap-8 md:grid-cols-2 items-start"> <!-- Map (left) --> <div class="aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm"> <iframe title="Marseille Office Map" class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=18%20chemin%20de%20Mimet%2013015%20Marseille%2C%20France&output=embed">
          </iframe> </div> <!-- Address (right) --> <div class="text-left"> <h3 class="text-xl font-semibold">Marseille, France</h3> <p class="mt-2 text-gray-700"> <a href="mailto:contact@progisud.com" class="text-blue-600 hover:underline">contact@progisud.com</a> </p> <p class="mt-4 text-gray-700 leading-relaxed">
18 chemin de Mimet<br>
13015 Marseille<br>
France
</p> </div> </div> <!-- Manila --> <div class="grid gap-8 md:grid-cols-2 items-start mt-10"> <!-- Map (left) --> <div class="aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm"> <iframe title="Manila Office Map" class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=10th%20Floor%2C%20South%20Tower%20Rockwell%20Business%20Center%2C%20Sheridan%2C%20Mandaluyong%20City%2C%20Philippines&output=embed">
          </iframe> </div> <!-- Address (right) --> <div class="text-left"> <h3 class="text-xl font-semibold">Manila — Philippines</h3> <p class="mt-2 text-gray-700"> <a href="mailto:contact@progisud.com" class="text-blue-600 hover:underline">contact@progisud.com</a> </p> <p class="mt-4 text-gray-700 leading-relaxed">
10th Floor <br>South Tower Rockwell Business Center,<br>
Sheridan, Mandaluyong City<br>
Philippines
</p> </div> </div> </section> ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/localization.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/localization.astro";
const $$url = "/localization";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Localization,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
