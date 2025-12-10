// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Get Google Analytics ID from environment variable
const googleAnalyticsId = import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID;

// https://astro.build/config
export default defineConfig({
	site: 'https://mhetrerajat.github.io',
	base: '/triton-book',
	integrations: [
		starlight({
			title: 'Triton Book',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mhetrerajat/triton-book' }],
			// Sidebar will be added as content is created
			head: googleAnalyticsId ? [
				// Google Analytics 4 (GA4) script
				{
					tag: 'script',
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${googleAnalyticsId}');
					`,
				},
			] : [],
		}),
	],
});

