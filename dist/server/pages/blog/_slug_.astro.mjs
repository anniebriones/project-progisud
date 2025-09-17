/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_5HXhIk8l.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DoWh75DN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://progisuddigitalpartner.com");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.description, "lang": "en" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose max-w-none prose-headings:scroll-mt-24"> <h1>${post.data.title}</h1> <p class="text-sm text-gray-500">${new Date(post.data.date).toLocaleDateString()}</p> <div class="mt-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(post.body)}` })} </div> </article> ` })}`;
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
