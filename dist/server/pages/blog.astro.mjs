/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_5HXhIk8l.mjs';
import { g as getCollection } from '../chunks/_astro_content_DoWh75DN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Latest posts", "lang": "en" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold">Blog</h1> <ul class="mt-6 grid gap-6 md:grid-cols-2"> ${posts.map((post) => renderTemplate`<li class="rounded-xl border bg-white p-6 hover:shadow"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="block"> <h2 class="text-xl font-semibold">${post.data.title}</h2> <p class="mt-2 text-gray-600 line-clamp-3">${post.data.description}</p> <p class="mt-3 text-xs text-gray-500">${new Date(post.data.date).toLocaleDateString()}</p> </a> </li>`)} </ul> ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
