---
title: The Switcher & keyboard shortcuts
description: Fuzzy-jump to any pane, project, worktree, or view with Ctrl+Shift+K — plus the full keyboard reference.
---

## The Switcher

`Ctrl+Shift+K` (`⌘⇧K` on macOS) opens the **Switcher** — a keyboard fuzzy-finder over everything you
have open, across **all** projects:

- **Panes** — jump straight to any terminal or agent.
- **Projects** — switch project.
- **Worktrees** — jump into a worktree (including [Worktree View](/atrium-site/guides/worktrees/#worktree-view)).
- **Views** — Dashboard, Settings.

Matching favors what you meant: prefix and contiguous matches rank above scattered subsequences, and
the active project is foregrounded. In the Pro edition the Switcher also carries **action verbs** (New
pane here, New worktree, Reload pane, Toggle theme); the free Switcher is navigation-only.

## Keyboard reference

The modifier is **Ctrl** on Windows/Linux and **⌘** on macOS. App shortcuts deliberately use
Shift or non-letter keys so they never collide with shell keybindings (`Ctrl+C`, `Ctrl+R`, … always
reach your shell); on macOS, plain Ctrl combos always pass through to the terminal.

Press **`?`** (outside a terminal) for the in-app cheatsheet — it's generated from the same registry
this table describes.

| Shortcut | Action |
| --- | --- |
| `Mod+Shift+T` | New pane in the active group |
| `Mod+Shift+W` | Close the active pane |
| `Mod+Shift+K` | Open the Switcher |
| `Mod+Tab` / `Mod+Shift+Tab` | Next / previous pane |
| `Mod+Shift+]` / `Mod+Shift+[` | Next / previous project |
| `Mod+1` … `Mod+9` | Switch to project 1–9 |
| `Mod+Shift+D` | Toggle the dock (Scratchpad / Todos / Inventory) |
| `Mod+Shift+R` | Restart the active pane (agents ask for confirmation) |
| `Mod+,` | Settings |
| `Mod+=` / `Mod+-` / `Mod+0` | Zoom in / out / reset |
| `Mod+Shift+/` | Search the active pane's scrollback |
| `Esc` | Exit Worktree View |
| `?` | Keyboard cheatsheet overlay |

In-pane copy/paste on macOS: `⌘⇧C` / `⌘V`. Right-click pastes on all platforms. `Ctrl+V` with an
image on the clipboard [pastes a screenshot](/atrium-site/guides/panes/#working-with-panes).
