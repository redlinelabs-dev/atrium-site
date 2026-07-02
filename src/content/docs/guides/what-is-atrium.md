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
and — new in 0.8.0 — lets those agents *see the cockpit and annotate it* through a local MCP server.

## What it's for

- **Stop alt-tabbing across terminal windows.** Projects → groups → panes, each a live terminal that
  stays alive when you switch away. Sessions restore when you reopen.
- **Know what's happening without staring.** A liveness dot per pane (starting / running / crashed /
  exited), an activity pulse while output streams, an attention flag when an agent rings the bell, the
  live working directory + git branch, and context-window usage % on Claude panes.
- **See every project at once.** A dashboard with each project's live status, dirty-git dot, and pane
  counts.
- **Give your agents situational awareness.** Through the [MCP layer](/atrium-site/guides/agents-mcp/),
  an agent can ask what else is running, read another pane's logs, and leave TODOs/notes you'll see.

## What it is *not*

Atrium is deliberately **not an orchestrator.** It won't dispatch agents, run a meta-agent, or drive
work across projects on its own. The autonomy is the agent's; the trigger is always yours. That
boundary — *visibility-in, never control-out* — is a hard architectural line, not a setting (see
[Core concepts](/atrium-site/guides/concepts/)).

The crowded 2026 lane is multi-agent *orchestration*. Atrium's lane is the quieter, more durable one:
the **calm cockpit + cross-agent awareness + shared memory** — including, on Windows, across the WSL
boundary that other tools don't cross. On macOS there's no such boundary to cross; the same cockpit
just drives your native shell directly.

## Next

- [Install & first run](/atrium-site/guides/install/)
- [Core concepts](/atrium-site/guides/concepts/)
- [Using Atrium with agents (MCP)](/atrium-site/guides/agents-mcp/)
