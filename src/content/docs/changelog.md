---
title: Changelog
description: Notable changes to Atrium, newest first. Full history on GitHub Releases.
---

Newest first. Each minor release is a deliberate "floor" — functional and daily-driven before the next.
Full history + downloads on [GitHub Releases](https://github.com/redlinelabs-dev/atrium-site/releases).

## 0.9.0 — "Editions & Worktrees"

A git-worktree lens for the Sidebar, plus the developer foundation for the Free/Pro editions.
Windows/WSL2 build — native macOS/Linux is still in progress.

- **Worktrees view** — a git-worktree organizing lens in the Sidebar: each worktree as a two-line
  row with a group-colored orb, empty worktrees as launch targets, drift detection, and
  move-to-worktree. Bare-clone and traditional layouts; graceful on non-git repos.
- **Free/Pro edition seam (foundation)** — a build-time `isPro()` seam: the MCP server becomes a
  Pro-only dynamic import, with free/pro build modes and a CI guard proving a free build excludes
  all Pro/MCP code. Atrium stays **free** (organization); **Pro** (augmentation) is in
  development. The standard build ships in 0.9.0; the genuine free/pro split lands in 1.0.
- **Privacy policy** — provable no-telemetry, no backend the app depends on. See
  [Privacy](/atrium-site/privacy/).

## 0.8.0 — "The Integration Layer"

The agent-integration layer — **visibility-in, never control-out**.

- **Atrium MCP server** — a local **stdio** server each agent spawns itself, reaching Atrium over the
  shared filesystem (works on default WSL2, no port/firewall/token). Read tools: `list_projects`,
  `list_panes`, `pane_status`, `read_pane_output` (read a sibling pane's logs), `list_todos`,
  `read_scratchpad`. Write-into-Atrium tools: `add_todo`, `set_todo_status`, `append_scratchpad`. No
  control verb — enforced by a test. See [Using Atrium with agents](/atrium-site/guides/agents-mcp/).
- **Live status snapshot** — the cockpit publishes real per-pane status so the MCP surface reflects
  what's actually running.
- **Context-window usage %** on Claude panes (read from Claude's own statusline).
- **Agent-written TODOs appear live** in the dock.
- **App zoom** — Ctrl `+` / `−` / `0`, persisted.
- **First-class agent Providers** — a capability registry per agent.

## 0.7.0 — "The Cockpit Foundation"

Dashboard with cross-project live status; read-only git diff + commit lane-graph; script auto-detection;
configurable editor (VS Code / Cursor / Zed / Windsurf / custom); per-project scratchpad + TODOs dock;
`project.toml` import/export; and polish (non-selectable chrome, right-click-to-paste).

## 0.6.0

The calm single-window organizer: projects → groups → panes with liveness, activity, attention,
per-pane working directory (worktree scoping), session restoration, agent permissions, and read-only git
branch context.

## Earlier

0.1.0–0.5.0 established the Tauri + xterm.js foundation, cross-platform builds, and self-update. See
[GitHub Releases](https://github.com/redlinelabs-dev/atrium-site/releases) for details.
