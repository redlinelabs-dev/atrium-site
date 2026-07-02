---
title: Changelog
description: Notable changes to Atrium, newest first. Full history on GitHub Releases.
---

Newest first. Each minor release is a deliberate "floor" — functional and daily-driven before the next.
Full history + downloads on [GitHub Releases](https://github.com/redlinelabs-dev/atrium-site/releases).

## 0.11.1 — "Paste the Picture"

Native **macOS support** ships: a universal (Apple Silicon + Intel) build with darwin auto-update
entries alongside the existing Windows updater. See [Install & first run](/atrium-site/guides/install/)
for the Gatekeeper first-run step (ad-hoc signed, not notarized).

- **Paste screenshots into panes** — `Ctrl+V` with an image on the clipboard writes it to a temp PNG
  and pastes the (shell-translated) path into the pane, so agents can read the image natively.

## 0.11.0 — "The Thaw"

Six fixes and quality-of-life improvements across the pane/terminal layer:

- **All-shells PTY freeze fix** — resolves a freeze that could affect any shell, not just one kind.
- **Clickable terminal hyperlinks**, plus a WebGL repaint fix.
- **Respawn preserves the live working directory** instead of resetting to the project root.
- **Git Bash opens in the project directory.**
- **Per-project active-pane memory** — Atrium remembers which pane was focused, per project.
- **WSL2 pressure relief + disclosure** — eases and surfaces the shared-VM memory-pressure behavior
  described below.

## 0.10.0 — "The Cockpit, Furnished" — 2026-06-14

The largest release since the cockpit foundation: a full next-era program plus a deep polish-and-fix
pass, consolidating everything accumulated since 0.9.4.

- **Worktree View** — a pane-geometry lens: partition selector, agent/shell slots, tabbed panes,
  per-project view memory, empty-slot spawn, and entry points from the Sidebar and Switcher.
- **Pro v1 bundle** — focus-aware desktop notifications + OSC 9/777 passthrough, named workspaces
  (save/materialize), Switcher action verbs, and per-worktree runtime vars (`$ATRIUM_PORT` /
  `$ATRIUM_WORKTREE`) so two worktrees can run the same dev server on distinct ports. All Pro code is
  dead-code-eliminated from the Free build.
- **Theming** — six preset themes (dark, light, high-contrast, nord, solarized-dark, sepia) with a
  glow-intensity control; status-orb semantics stay constant across every theme.
- **Command palette** — a `?` shortcut cheatsheet overlay over a single data-first command/keybinding
  registry.
- **Pane power** — pin a pane to the top of its group, scrollback search (`Ctrl+Shift+/`), "Open
  lazygit here," a per-pane Restart button.
- **Status legibility** — the `StatusDot` orb system across Sidebar, Dashboard, and Rail, with a
  status legend and hover descriptions.
- **Distribution/quality** — copy a diff or commit-graph as shareable markdown, plus a no-telemetry pass.

## 0.9.4 — "Worktree Lifecycle"

Full worktree lifecycle management from the UI.

- **Spawn any pane kind into a worktree** — a `＋▾` caret per worktree opens the full spawn menu
  scoped to that directory.
- **New/remove worktree dialogs** — create a worktree with a new or existing branch; remove with a
  two-gate destructive confirm (homed panes, git's `--force` gate on dirty worktrees).
- **Prune orphaned worktrees** — one-click `git worktree prune` from Inventory, with a prunable-count
  badge.
- **Per-project Sidebar view memory** — the Groups/Worktrees toggle persists and survives restart.
- **ErrorBoundary** — a top-level React error boundary so render crashes show a recoverable panel
  instead of a blank screen.

## 0.9.0 — "Editions & Worktrees"

A git-worktree lens for the Sidebar, plus the developer foundation for the Free/Pro editions.
Windows/WSL2 build at the time — native macOS support shipped later, in 0.11.1.

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
