import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server_C0oxTepP.mjs';
import 'kleur/colors';
import 'clsx';

const locations = [
	{
		id: "ph",
		label: "Manila, Philippines",
		x: 77.8,
		y: 54.2,
		addresses: [
			"10th Floor, South Tower Rockwell Business Center, Sheridan Mandaluyong City, Philippines"
		]
	},
	{
		id: "fr",
		label: "Marseille, France",
		x: 46.5,
		y: 39.5,
		addresses: [
			"18 chemin de Mimet 13015 Marseille France"
		]
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://progisuddigitalpartner.com");
const $$WorldMapPins = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorldMapPins;
  const {
    imageSrc = "/images/Localization/worldmap.png",
    title = "Global Offices"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="mx-auto max-w-6xl px-4 py-10"> <!-- Map container --> <div class="relative w-full overflow-hidden rounded-2xl border bg-white shadow"> <!-- Maintain aspect ratio so pins stay aligned (adjust to your image) --> <div class="relative" style="aspect-ratio: 16 / 9;"> <img', ' alt="World map" class="pointer-events-none absolute inset-0 h-full w-full object-cover"> <!-- Pins --> ', ' </div> </div> <!-- Addresses list (revealed by the global toggle) --> <div class="mt-6 hidden gap-6 peer-checked/show:grid md:grid-cols-2"> ', " </div> <!-- (Optional) smooth scroll to the address card when a pin is clicked --> <script>\n      document.addEventListener('click', (e) => {\n        const btn = e.target.closest('button[data-id]');\n        if (!btn) return;\n        const id = btn.getAttribute('data-id');\n        const box = document.getElementById(`callout-${id}`);\n        if (!box) return;\n\n        // show\n        box.classList.remove('hidden');\n\n        // reset & set 5s timer\n        if (box._timer) clearTimeout(box._timer);\n        box._timer = setTimeout(() => {\n        box.classList.add('hidden');\n        }, 5000);\n    }, { passive: true });\n  <\/script> </section>"], ["", '<section class="mx-auto max-w-6xl px-4 py-10"> <!-- Map container --> <div class="relative w-full overflow-hidden rounded-2xl border bg-white shadow"> <!-- Maintain aspect ratio so pins stay aligned (adjust to your image) --> <div class="relative" style="aspect-ratio: 16 / 9;"> <img', ' alt="World map" class="pointer-events-none absolute inset-0 h-full w-full object-cover"> <!-- Pins --> ', ' </div> </div> <!-- Addresses list (revealed by the global toggle) --> <div class="mt-6 hidden gap-6 peer-checked/show:grid md:grid-cols-2"> ', " </div> <!-- (Optional) smooth scroll to the address card when a pin is clicked --> <script>\n      document.addEventListener('click', (e) => {\n        const btn = e.target.closest('button[data-id]');\n        if (!btn) return;\n        const id = btn.getAttribute('data-id');\n        const box = document.getElementById(\\`callout-\\${id}\\`);\n        if (!box) return;\n\n        // show\n        box.classList.remove('hidden');\n\n        // reset & set 5s timer\n        if (box._timer) clearTimeout(box._timer);\n        box._timer = setTimeout(() => {\n        box.classList.add('hidden');\n        }, 5000);\n    }, { passive: true });\n  <\/script> </section>"])), maybeRenderHead(), addAttribute(imageSrc, "src"), locations.map((loc) => renderTemplate`<button type="button"${addAttribute(`Show ${loc.label}`, "aria-label")}${addAttribute(loc.id, "data-id")} class="group absolute -translate-x-1/2 -translate-y-1/2"${addAttribute(`left:${loc.x}%; top:${loc.y}%`, "style")}> <!-- Pin --> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600 drop-shadow" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zM12 11.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"></path> </svg> <!-- Callout box (hidden by default; shown for 5s on click) --> <div${addAttribute(`callout-${loc.id}`, "id")} class="pointer-events-none absolute left-1/2 bottom-20 hidden -translate-x-1/2
                    rounded-lg bg-white px-4 py-3 text-base shadow-lg ring-1 ring-gray-200
                    flex flex-col gap-2 w-72 md:w-96 lg:w-[360px] whitespace-normal break-words"> <h4 class="font-bold text-lg"> <span class="text-blue-600">${loc.label}</span> <span class="text-pink-500"> ${loc.country}</span> </h4> <p class="text-gray-700 text-sm leading-snug">${loc.addresses}</p> </div> </button>`), locations.map((loc) => renderTemplate`<div${addAttribute(`addr-${loc.id}`, "id")} class="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition hover:shadow-xl hover:border-blue-200"> <div class="mb-3 flex items-center gap-2"> <span class="inline-block h-3 w-3 rounded-full bg-blue-600 shadow"></span> <h3 class="text-lg font-semibold text-gray-800 group-hover:text-blue-700"> ${loc.label} </h3> </div> <ul class="space-y-2 text-sm text-gray-700"> ${loc.addresses.map((a) => renderTemplate`<li class="rounded-md bg-white/70 px-3 py-2 shadow-sm ring-1 ring-gray-100 hover:ring-blue-200"> ${a} </li>`)} </ul> </div>`));
}, "C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/src/components/WorldMapPins.astro", void 0);

export { $$WorldMapPins as $ };
