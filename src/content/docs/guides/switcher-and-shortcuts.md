---
title: The Switcher & keyboard shortcuts
description: Fuzzy-jump to any pane, project, worktree, or view with Ctrl+Shift+K — plus the full keyboard reference.
---

Two things move you around Atrium fast: the **Switcher** (one keystroke to fuzzy-jump anywhere) and
a small, collision-free set of keyboard shortcuts. This page is both — the Switcher first, then the
full key reference.

## The Switcher

`Ctrl+Shift+K` (`⌘⇧K` on macOS) opens the **Switcher** — a keyboard fuzzy-finder over everything you
have open, across **all** projects:

- **Panes** — jump straight to any terminal or agent.
- **Projects** — switch project.
- **Worktrees** — jump into a worktree (including [Worktree View](/guides/worktrees/#worktree-view)).
- **Views** — Dashboard, Settings.

Matching favors what you meant: prefix and contiguous matches rank above scattered subsequences, and
the active project is foregrounded. The free Switcher carries one action row alongside navigation —
**Quick edit file…** With a Pro license the Switcher also carries **action verbs**: Add pane here,
New worktree, Restart pane, Toggle theme, My Work, Search session history, Save as workspace…, and
per-connector rows (GitHub pull requests, Jira issues, Integrations) when those are connected.

## Keyboard reference

The modifier is **Ctrl** on Windows/Linux and **⌘** on macOS. App shortcuts deliberately use
Shift or non-letter keys so they never collide with shell keybindings (`Ctrl+C`, `Ctrl+R`, … always
reach your shell); on macOS, plain Ctrl combos pass through to the terminal, except the pane's own
copy/paste/search keys.

Press **`?`** (outside a terminal) for the in-app cheatsheet — it's generated from the same registry
most of this table describes (scrollback search, `Esc`, and `?` itself live outside it).

| Shortcut | Action |
| --- | --- |
| `Mod+Shift+T` | New pane in the active group |
| `Mod+Shift+W` | Close the active pane |
| `Mod+Shift+K` | Open the Switcher |
| `Mod+Shift+M` | My Work — your PRs, reviews, and Jira issues (Pro) |
| `Mod+Shift+H` | Search session history (Pro) |
| `Mod+Shift+I` | Integrations for this project (Pro) |
| `Mod+Tab` / `Mod+Shift+Tab` | Next / previous pane |
| `Mod+Shift+]` / `Mod+Shift+[` | Next / previous project |
| `Mod+1` … `Mod+9` | Switch to project 1–9 |
| `Mod+Shift+R` | Restart the active pane (agents ask for confirmation) |
| `Mod+,` | Settings |
| `Mod+=` / `Mod+-` / `Mod+0` | Zoom in / out / reset |
| `Mod+Shift+/` | Search the active pane's scrollback |
| `Esc` | Dismiss the current view (Dashboard, Settings, diff, graph, …) — and exit Worktree View |
| `?` | Keyboard cheatsheet overlay |

In-pane copy/paste on macOS: `⌘⇧C` / `⌘V`. Right-click pastes on all platforms. `Ctrl+V` with an
image on the clipboard [pastes a screenshot](/guides/panes/#working-with-panes).

## Next

- [Settings & configuration](/guides/settings/) — themes, editors, the agent catalog.
- Action verbs in the Switcher (Add pane here, New worktree, Toggle theme, …) are a
  [Pro feature](/pricing/).
