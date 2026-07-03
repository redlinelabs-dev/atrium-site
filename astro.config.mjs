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
				'A calm, single-window cockpit for your coding agents and dev stack — projects, worktrees, and live status in one quiet window.',
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
					label: 'The cockpit',
					items: [
						{ label: 'Panes & terminals', slug: 'guides/panes' },
						{ label: 'Worktrees', slug: 'guides/worktrees' },
						{ label: 'Switcher & shortcuts', slug: 'guides/switcher-and-shortcuts' },
						{ label: 'Git tools', slug: 'guides/git-tools' },
						{ label: 'Settings & configuration', slug: 'guides/settings' },
					],
				},
				{
					label: 'Agents',
					items: [
						{ label: 'Agents in Atrium', slug: 'guides/agents' },
						{ label: 'The Atrium MCP server', slug: 'guides/agents-mcp' },
					],
				},
				{ label: 'Pricing', items: [{ label: 'Free vs. Pro', slug: 'pricing' }] },
				{ label: 'Release notes', items: [{ label: 'Changelog', slug: 'changelog' }] },
				{ label: 'Trust', items: [{ label: 'Privacy policy', slug: 'privacy' }] },
			],
		}),
	],
});
