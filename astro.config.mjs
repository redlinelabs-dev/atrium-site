// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages behind the custom domain https://atrium.redlinelabs.dev/ (CNAME in public/).
// `latest.json` (the updater manifest) lives in public/ so it publishes UNCHANGED at the site root —
// the app polls https://atrium.redlinelabs.dev/latest.json. Apps shipped ≤0.15.x poll the old
// https://redlinelabs-dev.github.io/atrium-site/latest.json URL, which GitHub 301-redirects here
// (path-preserving) for as long as the custom domain stays bound — so that redirect is load-bearing.
export default defineConfig({
	site: 'https://atrium.redlinelabs.dev',
	integrations: [
		starlight({
			title: 'Atrium',
			description:
				'A calm, single-window cockpit for your coding agents and dev stack — projects, worktrees, and live status in one quiet window.',
			logo: { src: './src/assets/atrium-icon.svg', alt: 'Atrium' },
			favicon: '/favicon.ico',
			social: [
				// atrium-site is the public repo (releases, issues, this site); the app repo is private.
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/redlinelabs-dev/atrium-site' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Buy Pro — $39',
					link: 'https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5',
					attrs: { target: '_blank', class: 'buy-cta' },
				},
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
				{
					label: 'Pro features',
					items: [
						{ label: 'GitHub + Jira integrations', slug: 'guides/pro-integrations' },
						{ label: 'SSH remote projects', slug: 'guides/pro-ssh' },
					],
				},
				{
					label: 'Pricing',
					items: [{ label: 'Free vs. Pro', slug: 'pricing' }],
				},
				{ label: 'Release notes', items: [{ label: 'Changelog', slug: 'changelog' }] },
				{ label: 'Trust', items: [{ label: 'Privacy policy', slug: 'privacy' }] },
			],
		}),
	],
});
