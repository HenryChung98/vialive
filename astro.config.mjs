// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vialive.app',
	integrations: [
		starlight({
			title: 'vialive',
			description: 'iPhone apps built around Live Activities — privacy policies and support.',
			favicon: '/favicon.ico',
			logo: { src: './src/assets/logo.png' },
			social: [{ icon: 'email', label: 'Email', href: 'mailto:henrychung.dev@gmail.com' }],
			// No prev/next footer links by default; blog posts opt back in with `prev: true` / `next: true` frontmatter.
			pagination: false,
			customCss: ['./src/styles/custom.css'],
			// English pages live at the root (/currency-converter/), Korean ones under /ko/.
			locales: {
				root: { label: 'English', lang: 'en' },
				ko: { label: '한국어', lang: 'ko' },
			},
			sidebar: [
				// One group per app: every page in src/content/docs/<app-slug>/ is listed automatically.
				// App names drop the "Vialive" prefix everywhere (the tab title already ends in "| vialive").
				{
					label: 'Currency Converter',
					translations: { ko: '환율계산기' },
					items: [{ autogenerate: { directory: 'currency-converter' } }],
				},
			],
		}),
	],
});
