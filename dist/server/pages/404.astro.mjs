/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5HXhIk8l.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center py-24"> <h1 class="text-4xl font-bold">404</h1> <p class="mt-2 text-gray-600">Sorry, we couldn't find that page.</p> <a href="/" class="mt-6 inline-block px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Go home</a> </div> ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/404.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
