// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vialive.app',
	integrations: [
		starlight({
			title: 'vialive',
			description: 'Apps I build — privacy policies and support.',
			social: [{ icon: 'email', label: 'Email', href: 'mailto:henrychung.dev@gmail.com' }],
			// English pages live at the root (/currency-converter/), Korean ones under /ko/.
			locales: {
				root: { label: 'English', lang: 'en' },
				ko: { label: '한국어', lang: 'ko' },
			},
			sidebar: [
				// One group per app: every page in src/content/docs/<app-slug>/ is listed automatically.
				{
					label: 'Vialive Currency Converter',
					items: [{ autogenerate: { directory: 'currency-converter' } }],
				},
			],
		}),
	],
});
