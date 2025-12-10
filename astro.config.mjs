// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mhetrerajat.github.io',
	base: '/triton-book',
	integrations: [
		starlight({
			title: 'Triton Book',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mhetrerajat/triton-book' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
