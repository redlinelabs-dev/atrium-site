---
title: Changelog
description: Notable changes to Atrium, newest first. Full history on GitHub Releases.
---

Newest first. Each minor release is a deliberate "floor" — functional and daily-driven before the next.
Full history + downloads on [GitHub Releases](https://github.com/redlinelabs-dev/atrium-site/releases).

## 0.13.2 — "The Jira Round"

Seven dual-validated fixes: a designer-led evaluation of the Jira integration plus two hardening
items. The theme: **the integration tells the truth and pulls its weight.**

**Jira (Pro):**

- A Jira-only project's [Integration Hub](/guides/pro-integrations/) lands on the Jira
  tab — no more "Connect GitHub" prompt (or silently empty body) on a project with no GitHub
  remote; a Jira-only hub issues zero GitHub I/O.
- Saved filters work on every Jira site: "In progress" matches by status *category* (renamed
  workflow statuses still match), and "High priority" now includes **Highest** — it previously
  hid your most urgent tickets.
- Triage-grade issue rows: a status-category dot, an issue-type glyph, and relative updated time —
  one row grammar shared with My Work; "Priority: None" renders as nothing.
- Per-project filter memory — project A's filter no longer makes project B falsely claim "No open
  issues"; a filtered empty state names the active filter with one-click return to All open.
- Truthful truncation: past 50 issues the tab reads "50+" with a quiet link out to the project in
  Jira, instead of presenting 50 as the total.
- `integrations.open` Switcher command — the first keyboard door to the Integration Hub,
  deep-linking to the Jira facet when the project has a binding.

**Hardening:**

- WSL being down is no longer indistinguishable from an Atrium hang: a fast liveness probe, an
  honest degraded-state banner, and a spinner timeout.
- All 24 synchronous Tauri commands audited for main-thread blocking (freeze-class); five
  blocking-capable commands converted to async.

## 0.13.1 — "The Polish Round"

Sixteen fixes from a six-lens design review of the whole app. The theme: **the app stops
forgetting where you were, and everything you paid for has a door.**

**Navigation lands, both ways:**

- Dismissing any cover (Settings, Dashboard, Diff, My Work…) reveals the place beneath —
  including a remembered worktree cockpit — instead of hard-resetting to the flat terminal; a
  glance at Settings no longer erases the cockpit's place memory.
- Keyboard focus returns to your terminal when a cover closes — first keystrokes land again.
- Esc while typing in a worktree-cockpit pane reaches the terminal, never collapses the cockpit.
- The Switcher's pane-pick lands exactly like a sidebar pane-click.

**Every feature has a door:**

- Session-history search (Pro) has a keybinding and appears in the cheatsheet.
- The Pro capability list stays visible after you buy — the License panel shows what you unlocked.
- The `?` cheatsheet is advertised in Settings → About, and both shortcut lists derive from the
  same registry (they can no longer drift).
- Import `atrium.toml` is available on the zero-projects welcome screen, and a fresh project's
  empty state offers the agent templates you just picked — no more dead void.

**The details:** the New Project dialog derives your real home path; notifications name the pane
(not an internal id); remove-worktree can't double-fire; toasts stack instead of smearing; the
Inventory tab hides for non-git projects; one verb per action everywhere; and an app-wide focus
ring makes keyboard navigation look keyboard-first.

## 0.13.0 — "One Atrium"

**Single-binary distribution: the edition is the license.** One installer per platform — the app
runs as the Free edition until a purchased key is entered in **Settings → License**, and unlocks
Pro on the spot. No separate download, no reinstall. Buying is now
[checkout](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5) → paste a key.

- **One update channel** — every install updates from the same manifest, and an update can never
  downgrade a licensed install: the binary always carries the license module, so your key keeps
  working.
- **Named workspaces (Pro) go live** — save a worktree's pane setup from the Switcher ("Save as
  workspace…"), materialize the whole thing later in one click, landing in its worktree cockpit.
  Re-activating converges instead of duplicating panes.
- **Jira issue lists fixed** — Atlassian retired their search endpoint (HTTP 410); Atrium now uses
  its replacement.
- An unlicensed run never sees a locked Integrations tab — the quiet Pro disclosure remains the
  only place Pro is mentioned.
- Pane respawn is called **Restart** everywhere (it was "Reload" in one spot).
- [Privacy policy](/privacy/) updated for the single binary: the licensing endpoint is
  contacted only after a key is entered — never before, verifiable on the wire.

## 0.12.0 — "The Connected Cockpit"

The Pro flagship release — **Atrium Pro is now purchasable**:
**[buy it for $39, one-time](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5)**
(every 1.x update included forever), or [compare Free vs. Pro](/pricing/).

**Pro:**

- **GitHub + Jira integrations, read-only forever** — a per-project
  [Integration Hub](/guides/pro-integrations/): pull requests with live CI checks and
  review states, assigned issues, and Jira tickets scoped to the project. GitHub auto-detects from
  your remotes (override per project); Jira is opt-in per project — teach it by pasting a ticket
  URL/key, and it makes zero requests until taught.
- **My Work** (`Ctrl+Shift+M` / `⌘⇧M`) — one calm view of everything assigned to you across GitHub
  and Jira, plus a quiet door on the Dashboard.
- **Sidebar PR chips** — each project row shows its current branch's PR + checks state at a glance.
- **Calm state-change notifications** — your PR merged, checks flipped, review requested, Jira
  status changed; baseline-silent, opt-in, DND-aware, and clicking one lands in My Work.
- **Connection health** — a rate-limit/cache/health ledger in Settings → Integrations; Jira tokens
  now auto-refresh (no more hourly re-auth).
- **Session-history search** — search across past terminal sessions, not just the open one.
- **[SSH remote projects](/guides/pro-ssh/)** — open a project on a remote box over
  your own `ssh`, reattach to your own `tmux` sessions; honest disconnected state with one-click
  Reconnect; zero credentials stored, by construction.

**Free:**

- **"Atrium Pro" disclosure** in Settings — a plain statement of what Pro unlocks, so Free users
  can make an informed call; every build now states its edition.
- **Navigation always lands** — activating a project or pane always takes you there; covering
  views dismiss instead of lingering with stale content.
- **TODOs count badge** on the dock tab (parity with Inventory).
- Script detection no longer prompts at project creation — detected scripts live in the pane
  **+ Add** menu, and nothing runs until you click.
- Fixes: OAuth consent no longer freezes the app window; token files get owner-only permissions on
  Windows; a false "worktree no longer exists" notice on project switch.

## 0.11.1 — "Paste the Picture"

Native **macOS support** ships: a universal (Apple Silicon + Intel) build with darwin auto-update
entries alongside the existing Windows updater. See [Install & first run](/guides/install/)
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
- **Removed: the `.mcp.json` auto-writer.** Atrium no longer writes MCP discovery config when a Claude
  pane opens. The [MCP server](/guides/agents-mcp/) itself still ships in the binary —
  connecting it is now a manual, per-project opt-in. Auto-discovery will return as an explicit opt-in
  with the Pro edition; it will never be on by default.

## 0.9.0 — "Editions & Worktrees"

A git-worktree lens for the Sidebar, plus the developer foundation for the Free/Pro editions.
Windows/WSL2 build at the time — native macOS support shipped later, in 0.11.1.

- **Worktrees view** — a git-worktree organizing lens in the Sidebar: each worktree as a two-line
  row with a group-colored orb, empty worktrees as launch targets, drift detection, and
  move-to-worktree. Bare-clone and traditional layouts; graceful on non-git repos.
- **Free/Pro edition seam (foundation)** — a build-time `isPro()` seam with free/pro build modes and
  a CI guard proving a free build excludes all Pro code (at the time, that included the MCP
  auto-discovery wiring — removed entirely in 0.9.4). Atrium stays **free** (organization); **Pro**
  (augmentation) is in active development as a paid, one-time-purchase edition. The standard build
  ships in 0.9.0; the genuine free/pro split lands ahead of 1.0, as part of Atrium's commercial
  launch.
- **Privacy policy** — provable no-telemetry, no backend the app depends on. See
  [Privacy](/privacy/).

## 0.8.0 — "The Integration Layer"

The agent-integration layer — **visibility-in, never control-out**.

- **Atrium MCP server** — a local **stdio** server each agent spawns itself, reaching Atrium over the
  shared filesystem (works on default WSL2, no port/firewall/token). Read tools: `list_projects`,
  `list_panes`, `pane_status`, `read_pane_output` (read a sibling pane's logs), `list_todos`,
  `read_scratchpad`. Write-into-Atrium tools: `add_todo`, `set_todo_status`, `append_scratchpad`. No
  control verb — enforced by a test. See [The Atrium MCP server](/guides/agents-mcp/).
  (The auto-discovery wiring this shipped with was later removed in 0.9.4 — connecting is manual.)
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
