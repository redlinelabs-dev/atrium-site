---
title: Install & first run
description: Download Atrium for Windows, get past SmartScreen on first launch, and connect your first WSL project.
---

## Requirements

- **Windows 10/11.** Atrium is a native Windows app; agents and projects typically live in **WSL2**
  (Ubuntu or similar), which Atrium drives across the WSL↔Windows boundary.
- Your coding agents installed where you run them (e.g. `claude` in your WSL distro).

## Download & install

1. Grab the latest installer from the [releases page](https://github.com/redlinelabs-dev/atrium-site/releases/latest)
   — `Atrium_<version>_x64-setup.exe`.
2. Run it. Atrium installs per-user and self-updates from then on (signed updates).

### "Windows protected your PC" (SmartScreen)

The installer isn't EV-code-signed yet, so SmartScreen may warn on first run. Click **More info →
Run anyway**. (Updates after the first install are cryptographically signed and verified by the app.)

## First run

1. **Add a project** — point it at a folder (a WSL path like `/home/you/code/my-app`, or a native
   path). Atrium detects the shell and sets the project's working directory.
2. **Add panes** — within a project's groups, open an **agent** pane (e.g. `claude`), a **terminal**, or
   a **command** (Atrium auto-detects `package.json` / `Makefile` / `Cargo.toml` / … scripts you can add
   in one click).
3. **Run.** Liveness dots, activity, and the live working directory light up as things start.

Panes stay alive when you switch away, and your session restores when you reopen Atrium (agent panes
come back as click-to-wake skeletons — Atrium never auto-spawns processes on launch).

## Updating

Atrium checks for updates on launch and applies them in place. You can keep working; the new version
takes effect next restart.

## Next

- [Core concepts](/atrium-site/guides/concepts/) — projects, panes, providers, the boundary.
- [Using Atrium with agents (MCP)](/atrium-site/guides/agents-mcp/) — give your agents eyes into the cockpit.
