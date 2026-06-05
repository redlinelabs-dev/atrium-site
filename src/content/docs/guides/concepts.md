---
title: Core concepts
description: Projects, groups, panes, providers, the .atrium folder, and Atrium's hard visibility-in-never-control-out boundary.
---

## Projects → groups → panes

- **Project** — a folder + a connection (which shell, e.g. WSL2, and the working directory). The unit
  you switch between.
- **Group** — a labeled section within a project (Agents / Terminals / Commands).
- **Pane** — a single live terminal: an **agent** (e.g. `claude`), a plain **terminal**, or a
  **command** (a script Atrium detected or you defined). Panes stay mounted/alive when hidden — switching
  panes or projects never kills a session.

## Live state

Per pane, Atrium surfaces: a **liveness** dot (<span class="atrium-live">running</span> / starting /
crashed / exited), an **activity** pulse while output streams, an **attention** flag when the agent
rings the terminal bell, the **live working directory** + git branch (worktree-aware), and — for Claude
panes — **context-window usage %** (read from Claude's own statusline, never guessed).

This live state lives in memory while Atrium runs; it's published to `~/.atrium/live.json` each poll so
[agents can read it](/atrium-site/guides/agents-mcp/).

## Providers

Each agent is a **provider** derived from the pane's startup command (its first token). A provider
*declares what it can expose* — session resume, telemetry (context-%), scrollback handling, spawn-env,
MCP. Claude is the fully-featured reference provider; unknown commands are generic (no special powers).
Providers are a *lens* on an agent, never a controller.

## The `.atrium/` folder

Each project has a gitignored `.atrium/` home: `todos.json` (the dock's TODOs), `notes/` (scratchpad
markdown), and the import/export `project.toml`. It travels with the checkout and is **agent-reachable
by file** — which is exactly how the MCP tools read and write it.

## The boundary — *visibility-in, never control-out*

The most important design rule. Atrium reads agent telemetry to **display** it, and agents talk **to**
Atrium (query state, write into TODOs/scratchpad). But **Atrium never drives, dispatches, or spawns
agents to do work**, and runs no meta-agent.

This isn't a policy you could toggle — it's **structural**. The MCP tool surface registers only read +
write-into-Atrium verbs; there is no `spawn` / `dispatch` / `run` / `control` verb to call, and a unit
test fails the build if one ever appears. The autonomy is the agent's; the trigger is always the human's.

## Sessions & restoration

Panes are persisted as click-to-wake skeletons (`dormant`), never as live processes — Atrium won't
auto-spawn anything on launch. Claude agent panes carry a stable session id so wake/restart/restore
resume the exact conversation.
