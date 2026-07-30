---
title: GitHub + Jira integrations (Pro)
description: The per-project Integration Hub — your PRs, CI checks, and Jira tickets in the cockpit. Read-only, always; every call goes directly from your machine to GitHub/Atlassian.
---

**Pro feature.** The Integration Hub brings your day's context — pull requests, CI checks, review
states, issues, Jira tickets — into the cockpit, scoped to the project you're looking at. It is
**read-only forever**: Atrium never comments, approves, merges, transitions, or writes anything
back. Every row click-throughs to your browser, where the real tools live.

## The Integration Hub

Each project has its own Hub (the plug icon in the main area). Tabs appear only for what the
project is actually connected to:

- A **GitHub** facet appears when a project's git remote resolves to github.com. Atrium detects
  `owner/repo` from your remotes automatically; you can override it per project.
- A **Jira** facet appears only after you *teach* the project (below). Nothing shows up — and no
  request is ever made — until you do.

## GitHub

Sign in once with GitHub's **device flow** (you type a short code into github.com — Atrium never
sees your password, and no client secret is involved). Then, per project:

- **Open pull requests**, with live CI-check rollups and review-decision state.
- **The PR for your current branch**, surfaced first.
- **Issues assigned to you**, across repos.
- **Sidebar PR chips** — each project row in the sidebar shows its branch's PR + checks state at
  a glance, before you even open the Hub.

## Jira

Jira starts **disabled on every project**. To connect one: sign in to Atlassian (standard OAuth
consent in your browser), then paste any ticket URL or key — `PROJ-123` — into the project's Jira
tab. That teaches Atrium the project key, and only then does it start showing **your open issues**
and the project's tickets, with a detail panel per issue. Tokens refresh automatically; you won't
re-auth every hour.

## My Work

`Ctrl+Shift+M` (`⌘⇧M`) opens **My Work**: one calm view of everything assigned to you — PRs
awaiting your review, your assigned GitHub issues, your open Jira issues — across every connected
project and site. There's also a quiet door to it on the Dashboard.

## Calm notifications

Opt-in, and baseline-silent: Atrium only speaks when something *changes* — your PR merged, checks
flipped red or green, a review was requested, a Jira ticket moved. Do-Not-Disturb is respected,
watching continues while the window is minimized, and clicking a notification lands you in My Work.

## Connection health

Settings → Integrations shows a plain ledger per connection: rate-limit headroom, cache state,
and the last error if there was one. No mystery spinners.

## Privacy posture

- Every API call goes **directly from your machine** to `api.github.com` / `api.atlassian.com`.
  Nothing routes through any server of ours — there isn't one in the loop.
- Tokens are stored locally, in files with owner-only permissions (on Windows too).
- Read-only is structural: there is no write verb in the integration layer to misuse.

## Next

- [SSH remote projects](/guides/pro-ssh/) — the other half of Pro: your own
  `ssh` + `tmux`, zero credentials stored.
- [Compare Free vs. Pro](/pricing/), or
  [buy Atrium Pro — $39, one-time](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5) —
  every 1.x update included forever.
