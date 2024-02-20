import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI Insights Hub',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'OpenAI',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why ChatGPT Sora Works So Powerfully?', link: '/openai/why-chatgpt-sora-works-so-powerfully/' },
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
