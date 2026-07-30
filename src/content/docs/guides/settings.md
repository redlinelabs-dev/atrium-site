---
title: Settings & configuration
description: The Settings view, themes, notifications, editors, the agent catalog — and where Atrium keeps its data (atrium.json, atrium.toml, the .atrium folder).
---

Open Settings with `Ctrl+,` (`⌘,`) or via the [Switcher](/guides/switcher-and-shortcuts/).
It's a tabbed main-area view:

## Appearance

- **Theme** — six presets: Dark, Light, High contrast, Nord, Solarized dark, Sepia — plus a
  System/Light/Dark appearance preference and a **Group glow** control (Off/Subtle/Normal). Status-orb
  semantics stay constant across every theme (identity is color, state is motion), and
  `prefers-reduced-motion` is respected.
- **Terminal font** — family and size; a Nerd Font is bundled as the default.
- **Zoom** — an app-wide zoom level (50–200%), and an in-app **status-orb legend**.

## Notifications

**Do-Not-Disturb** silences attention cues globally. (The Pro edition adds focus-aware native desktop
notifications and OSC 9/777 passthrough, with per-project mute.)

## Tools

- **Default editor** — Open-in-editor presets for VS Code, Cursor, Zed, and Windsurf, or any custom
  command (honored verbatim).
- **Available agents** — the **agent catalog**: which agent commands are offered when you create a
  project, each with its own create/resume commands. See
  [Agents in Atrium](/guides/agents/#the-agent-catalog).
- **Remote connections (SSH)** — a Pro, macOS/Linux-only toggle to share connections to the same host
  (ControlMaster).

## New projects

- **Default shell** — what new projects connect with (WSL2/PowerShell/Git Bash/cmd on Windows;
  zsh/bash/fish on macOS).
- **Edit default groups…** — the group skeleton every new project starts with.

## About

Version and edition, a **Check for updates** button, the keyboard cheatsheet, an opt-in
**Send crash reports** toggle (off by default — see [Privacy](/privacy/)), and the no-telemetry
badge.

## Integrations & License (Pro)

A **License** tab is always present, and an **Integrations** tab appears once a key verifies:
**Integrations** — connection health for
[GitHub + Jira](/guides/pro-integrations/) (rate-limit headroom, cache state, last
error) — and **License**, where you paste your key. The key is masked to its last four characters,
and validation degrades gracefully offline (a 14-day grace window; Atrium never locks you out).

---

## Where configuration lives

Atrium has three configuration surfaces, each with a distinct job:

### `~/.atrium/atrium.json` — your cockpit

The durable store for everything you've set up: projects, groups, templates, panes (as dormant
skeletons), per-project view memory, and managed agent permissions. Machine-local; you never edit it by
hand. Alongside it live `live.json` (the live status snapshot) and `panes/` (recent output) — the files
the [MCP tools](/guides/agents-mcp/) read.

### `atrium.toml` — the portable project file

**Export project** writes a small TOML file at the repo root that you commit; **Import** recreates the
project on any machine. It's deliberately portable: no absolute paths (the working directory is
implicit — the repo it lives in), just the project name, its shell (informational — the importer uses
its own connection), and its groups/templates:

```toml
schema_version = 1
name = "my-app"

[[group]]
name = "Agents"
role = "agents"

  [[group.templates]]
  name = "Claude"
  command = "claude"

[[group]]
name = "Commands"

  [[group.templates]]
  name = "Dev server"
  command = "bun run dev"
```

**Import is gated by review**: because templates contain startup commands, importing surfaces every
command for explicit human review before anything can run — a cloned repo's `atrium.toml` can't
execute anything by itself.

### `<project>/.atrium/` — the in-repo workspace

The reserved per-project folder agents can reach through MCP. Its original tenants — `todos.json` and
`notes/*.md`, the retired Dock's TODOs and scratchpad — are no longer displayed in-app (since 0.15.0);
existing files stay on disk, unread. It's gitignored (Atrium maintains the entry), so it stays on the
machine rather than traveling with the repo. App-level preferences (theme, fonts, zoom, editor,
catalog) are stored locally by the app and aren't part of any of these files.

## Next

- [Agents in Atrium](/guides/agents/) — the agent catalog and managed permissions.
- The Integrations & License tabs are [Pro](/pricing/) — GitHub + Jira health and
  your key.
