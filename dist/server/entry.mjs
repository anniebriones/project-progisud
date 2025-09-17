import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C4bwfMQ8.mjs';
import { manifest } from './manifest_SGTzjawE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact-us.astro.mjs');
const _page6 = () => import('./pages/fr/contact-us.astro.mjs');
const _page7 = () => import('./pages/fr/localization.astro.mjs');
const _page8 = () => import('./pages/fr/our-services.astro.mjs');
const _page9 = () => import('./pages/fr/our-team.astro.mjs');
const _page10 = () => import('./pages/fr.astro.mjs');
const _page11 = () => import('./pages/localization.astro.mjs');
const _page12 = () => import('./pages/our-services.astro.mjs');
const _page13 = () => import('./pages/our-team.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact-us.astro", _page5],
    ["src/pages/fr/contact-us.astro", _page6],
    ["src/pages/fr/localization.astro", _page7],
    ["src/pages/fr/our-services.astro", _page8],
    ["src/pages/fr/our-team.astro", _page9],
    ["src/pages/fr/index.astro", _page10],
    ["src/pages/localization.astro", _page11],
    ["src/pages/our-services.astro", _page12],
    ["src/pages/our-team.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/dist/client/",
    "server": "file:///C:/Users/arian/projects/progisud/astro-tailwind-starter-l10n-menu/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
