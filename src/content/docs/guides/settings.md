---
title: Settings & configuration
description: The Settings view, themes, notifications, editors, the agent catalog — and where Atrium keeps its data (atrium.json, atrium.toml, the .atrium folder).
---

Open Settings with `Ctrl+,` (`⌘,`) or via the [Switcher](/atrium-site/guides/switcher-and-shortcuts/).
It's a tabbed main-area view:

## Appearance

- **Theme** — six presets: Dark, Light, High contrast, Nord, Solarized dark, Sepia — plus a
  System/Light/Dark appearance preference and a **glow intensity** control. Status-orb semantics stay
  constant across every theme (identity is color, state is motion), and `prefers-reduced-motion` is
  respected.
- **Terminal font** — family and size; a Nerd Font is bundled as the default.

## Notifications

**Do-Not-Disturb** silences attention cues globally. (The Pro edition adds focus-aware native desktop
notifications and OSC 9/777 passthrough, with per-project mute.)

## Tools

- **Default editor** — Open-in-editor presets for VS Code, Cursor, Zed, and Windsurf, or any custom
  command (honored verbatim).
- **Default shell** — what new projects connect with (WSL2/PowerShell/Git Bash/cmd on Windows;
  zsh/bash/fish on macOS).

## New projects

The default groups and the **agent catalog** (which agent commands are offered when you create a
project). See [Agents in Atrium](/atrium-site/guides/agents/#the-agent-catalog).

## About

Version, a **Check for updates** button, the keyboard cheatsheet, and the no-telemetry badge (see
[Privacy](/atrium-site/privacy/)).

---

## Where configuration lives

Atrium has three configuration surfaces, each with a distinct job:

### `~/.atrium/atrium.json` — your cockpit

The durable store for everything you've set up: projects, groups, templates, panes (as dormant
skeletons), per-project view memory, and managed agent permissions. Machine-local; you never edit it by
hand. Alongside it live `live.json` (the live status snapshot) and `panes/` (recent output) — the files
the [MCP tools](/atrium-site/guides/agents-mcp/) read.

### `atrium.toml` — the portable project file

**Export project** writes a small TOML file at the repo root that you commit; **Import** recreates the
project on any machine. It's deliberately portable: no absolute paths (the working directory is
implicit — the repo it lives in), just the project name and its groups/templates:

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

`todos.json` and `notes/*.md` — the dock's TODOs and scratchpad. These travel with the checkout and are
what agents read/write through MCP. App-level preferences (theme, fonts, zoom, editor, catalog) are
stored locally by the app and aren't part of any of these files.
