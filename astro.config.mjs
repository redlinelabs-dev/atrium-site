// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Project Pages: served at https://redlinelabs-dev.github.io/atrium-site/
// `latest.json` (the updater manifest) lives in public/ so it publishes UNCHANGED at the site root —
// the app polls https://redlinelabs-dev.github.io/atrium-site/latest.json and must keep working.
export default defineConfig({
	site: 'https://redlinelabs-dev.github.io',
	base: '/atrium-site',
	integrations: [
		starlight({
			title: 'Atrium',
			description:
				'A calm, single-window cockpit for your coding agents and dev stack — with an MCP layer that lets agents see and annotate it.',
			logo: { src: './src/assets/atrium-icon.svg', alt: 'Atrium' },
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/redlinelabs-dev/atrium' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is Atrium?', slug: 'guides/what-is-atrium' },
						{ label: 'Install & first run', slug: 'guides/install' },
						{ label: 'Core concepts', slug: 'guides/concepts' },
					],
				},
				{
					label: 'For agents',
					items: [{ label: 'Using Atrium with agents (MCP)', slug: 'guides/agents-mcp' }],
				},
				{ label: 'Release notes', items: [{ label: 'Changelog', slug: 'changelog' }] },
				{ label: 'Trust', items: [{ label: 'Privacy policy', slug: 'privacy' }] },
			],
		}),
	],
});
