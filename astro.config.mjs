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
			sidebar: [
				// One group per app: every page in src/content/docs/<app-slug>/ is listed automatically.
				{ label: 'ExRate', items: [{ autogenerate: { directory: 'ex-rate' } }] },
			],
		}),
	],
});
