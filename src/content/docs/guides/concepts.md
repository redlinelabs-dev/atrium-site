---
title: Core concepts
description: Projects, groups, panes, lenses, providers, the .atrium folder, and Atrium's hard visibility-in-never-control-out boundary.
---

## Projects → groups → panes

- **Project** — a folder + a **connection** (which shell, e.g. WSL2 on Windows or a native shell like
  zsh on macOS, and the working directory). The unit you switch between.
- **Group** — a labeled, collapsible section within a project. New projects get three by default —
  **Agents**, **Terminals**, **Commands** — but groups are yours to rename and rearrange. At most one
  group per project carries the *agents role* (that's where Atrium expects AI agents to live).
- **Template** — a one-click pane factory inside a group (e.g. `claude`, `bun run dev`). Templates are
  what [`atrium.toml`](/atrium-site/guides/settings/#atriumtoml--the-portable-project-file) exports.
- **Pane** — a single live terminal: an **agent** (e.g. `claude`), a plain **terminal**, or a
  **command** (a script Atrium detected or you defined; it exits when the program exits). Panes stay
  mounted and alive when hidden — switching panes or projects never kills a session.

## Lenses

The same panes can be viewed through more than one organizing lens — a lens changes how you *see*
panes, never where they live:

- The sidebar toggles between the **Groups** view and the **Worktrees** view.
- **Worktree View** turns the main area into a per-worktree cockpit with agent/shell slots.

Your choice persists per project. See [Worktrees](/atrium-site/guides/worktrees/).

## Live state

Per pane, Atrium surfaces: a **status orb** (running / working / needs-input / crashed / exited /
dormant — identity stays one color; *motion* carries the state), an **attention** flag when the agent
rings the terminal bell, the **live working directory** + git branch (worktree-aware), per-pane
**memory usage**, and — for Claude panes — **context-window usage %** (read from Claude's own
statusline, never guessed).

This live state lives in memory while Atrium runs; it's published to `~/.atrium/live.json` each poll so
[agents can read it](/atrium-site/guides/agents-mcp/).

## Providers

Each agent is a **provider** derived from the pane's startup command (its first token). A provider
*declares what it can expose* — session resume, telemetry (context-%), scrollback handling, spawn-env.
Claude is the fully-featured reference provider; unknown commands are generic (no special powers).
Providers are a *lens* on an agent, never a controller. See [Agents in Atrium](/atrium-site/guides/agents/).

## Where Atrium keeps things

- **`~/.atrium/`** — Atrium's own data dir: `atrium.json` (your projects/groups/panes), `live.json`
  (the live status snapshot), and `panes/` (recent pane output for the MCP tools).
- **`<project>/.atrium/`** — the in-repo, agent-reachable folder: `todos.json` (the dock's TODOs) and
  `notes/` (scratchpad markdown). It travels with the checkout — which is exactly how the MCP tools
  read and write it.
- **`<project>/atrium.toml`** — the optional, committed, portable project definition (groups +
  templates, no absolute paths). See [Settings & configuration](/atrium-site/guides/settings/).

## The boundary — *visibility-in, never control-out*

The most important design rule. Atrium reads agent telemetry to **display** it, and agents can talk
**to** Atrium (query state, write into TODOs/scratchpad). But **Atrium never drives, dispatches, or
spawns agents to do work**, and runs no meta-agent.

This isn't a policy you could toggle — it's **structural**. The MCP tool surface registers only read +
write-into-Atrium verbs; there is no `spawn` / `dispatch` / `run` / `control` verb to call, and a unit
test fails the build if one ever appears. The autonomy is the agent's; the trigger is always the human's.

## Sessions & restoration

Panes are persisted as click-to-wake skeletons (**dormant**), never as live processes — Atrium won't
auto-spawn anything on launch. Scrollback is saved and replayed size-first (the terminal resizes before
history is written, so nothing rewraps). Claude agent panes carry a stable session id so wake, restart,
and restore resume the exact conversation.
