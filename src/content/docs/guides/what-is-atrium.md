---
title: What is Atrium?
description: Atrium is a calm, single-window cockpit for your coding agents, terminals, and dev servers — an organizer, not an orchestrator.
---

Atrium is a **calm, single-window cockpit** for everything you run while building software: coding
agents (Claude Code, Codex, …), terminals, and dev servers — organized into projects, all visible at a
glance. It's a native desktop app (Tauri 2 + React + xterm.js), built for **Windows + WSL2 and macOS**.

## The one-sentence version

> Atrium **organizes what's running; it doesn't run the work for you.**

You launch the agents and commands; Atrium keeps them in one quiet place, shows you their live state,
and stays out of the way.

## What it's for

- **Stop alt-tabbing across terminal windows.** Projects → groups → panes, each a live terminal that
  stays alive when you switch away. Sessions restore when you reopen — Claude panes resume the exact
  conversation.
- **Know what's happening without staring.** A status orb per pane (solid while running, pulsing while
  working, breathing when an agent needs your input), the live working directory + git branch, and
  context-window usage % on Claude panes.
- **See every project at once.** A dashboard with each project's live status, plus an attention rail
  that surfaces crashed or waiting panes even from background projects.
- **Work across git worktrees.** A [worktrees lens](/atrium-site/guides/worktrees/) over the sidebar,
  full create/remove/prune lifecycle from the UI, and a per-worktree cockpit view — built for running
  parallel agents on parallel branches.
- **Jump anywhere.** The [Switcher](/atrium-site/guides/switcher-and-shortcuts/) (`Ctrl+Shift+K` /
  `⌘⇧K`) fuzzy-jumps to any pane, project, worktree, or view across everything you have open.
- **Give your agents situational awareness — if you want.** An opt-in local
  [MCP server](/atrium-site/guides/agents-mcp/) lets an agent ask what else is running, read another
  pane's logs, and leave TODOs/notes you'll see in the dock.

## What it is *not*

Atrium is deliberately **not an orchestrator.** It won't dispatch agents, run a meta-agent, or drive
work across projects on its own. The autonomy is the agent's; the trigger is always yours. That
boundary — *visibility-in, never control-out* — is a hard architectural line, not a setting (see
[Core concepts](/atrium-site/guides/concepts/)).

The crowded 2026 lane is multi-agent *orchestration*. Atrium's lane is the quieter, more durable one:
the **calm cockpit + cross-agent awareness + shared memory** — including, on Windows, across the WSL
boundary that other tools don't cross. On macOS there's no such boundary; the same cockpit just drives
your native shell directly.

## Free and Pro

Atrium's full local organizer — everything described in these docs unless marked **Pro** — is
**free**, no caps, no nags. **Atrium Pro** ($39 one-time, every 1.x update included forever) adds the
augmentation layer: [GitHub + Jira integrations](/atrium-site/guides/pro-integrations/) with a
per-project Integration Hub and a cross-project **My Work** view (read-only, always),
[SSH remote projects](/atrium-site/guides/pro-ssh/) over your own `ssh` + `tmux`, background
monitoring + focus-aware desktop notifications, session-history search, named workspaces, Switcher
action verbs, and per-worktree runtime vars.

Compare the full line on [Free vs. Pro](/atrium-site/pricing/), or
[buy Pro directly](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5) —
checkout is handled by Polar (merchant of record), and the key arrives by email.

## Next

- [Install & first run](/atrium-site/guides/install/)
- [Core concepts](/atrium-site/guides/concepts/)
- [Panes & terminals](/atrium-site/guides/panes/)
