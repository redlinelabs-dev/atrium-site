---
title: Install & first run
description: Download Atrium for Windows or macOS, get past SmartScreen (Windows) or Gatekeeper (macOS) on first launch, and connect your first project.
---

## Requirements

- **Windows 10/11** — x64, or Windows 11 on ARM (native arm64 build, since 0.15.0). Agents and
  projects typically live in **WSL2** (Ubuntu or similar), which Atrium drives across the
  WSL↔Windows boundary.
- **macOS** (Apple Silicon or Intel — one universal build). Agents and projects run **natively** —
  no WSL2-equivalent boundary to cross.
- Your coding agents installed where you run them (e.g. `claude` in your WSL distro or macOS shell).

## Download & install

1. Grab the latest release from the [releases page](https://github.com/redlinelabs-dev/atrium-site/releases/latest):
   - **Windows (x64)** — `Atrium_<version>_x64-setup.exe` (or `Atrium_<version>_x64_en-US.msi` if
     your environment prefers MSI)
   - **Windows on ARM** — `Atrium_<version>_arm64-setup.exe` (native arm64, new in 0.15.0;
     setup.exe only — no ARM64 MSI)
   - **macOS** — `Atrium_<version>_universal.dmg` (one build for Apple Silicon and Intel)
2. Run it. Atrium installs per-user and self-updates from then on (signed updates).

### Upgrading to Pro

[**Buy an Atrium Pro license — $39**](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5)
(Polar checkout; the key arrives by email), then paste it into **Settings → License** in the app
you already installed. Pro unlocks in place — one binary, no separate download, no reinstall
(since 0.13.0). Undecided? See [Free vs. Pro](/pricing/).

### "Windows protected your PC" (SmartScreen)

The installer isn't EV-code-signed yet, so SmartScreen may warn on first run. Click **More info →
Run anyway**. (Updates after the first install are cryptographically signed and verified by the app.)

### The macOS Gatekeeper block

Atrium's macOS build is **ad-hoc signed, not notarized** (no Apple Developer Program enrollment) — so
first launch takes one extra step:

1. Drag `Atrium.app` into **/Applications**. This is required, not just convenient — Atrium's
   self-updater only works from `/Applications`; if you launch it from anywhere else, it shows a
   one-time prompt and disables updates until you move it.
2. Open it. On macOS Sequoia (15)+, Gatekeeper blocks it with an *"Apple could not verify…"*
   warning — right-click-open no longer bypasses this (Apple removed that escape hatch in 15.0).
   Clear it with any of:
   - **System Settings → Privacy & Security → scroll down → "Open Anyway"**, or
   - the terminal one-liner:
     ```sh
     xattr -r -d com.apple.quarantine /Applications/Atrium.app
     ```
   - **Homebrew** (personal tap, prints the same one-liner as a caveat after install):
     ```sh
     brew tap redlinelabs-dev/tap
     brew install --cask atrium
     ```
3. This is a **one-time** step per install — once cleared, self-update keeps working normally.

## First run

1. **Add a project** — point it at a folder (a WSL path like `/home/you/code/my-app`, or a native
   path). Atrium detects the shell and sets the project's working directory.
2. **Add panes** — within a project's groups (Agents / Terminals / Commands by default), open an
   **agent** pane (e.g. `claude`), a **terminal**, or a **command** (Atrium auto-detects `package.json`
   / `Makefile` / `justfile` scripts you can add in one click).
3. **Run.** Liveness dots, activity, and the live working directory light up as things start.

Panes stay alive when you switch away, and your session restores when you reopen Atrium (agent panes
come back as click-to-wake skeletons — Atrium never auto-spawns processes on launch).

## Updating

Atrium checks for updates on launch and every few hours after, and shows a quiet, dismissible pill when
one is available. It **never restarts itself** — that would kill your live terminals; you choose when
to apply. There's also a manual **Check for updates** in Settings → About. Updates are
cryptographically signed and verified by the app.

## A note on WSL2 memory (Windows)

All WSL panes share one WSL2 VM (`vmmem`), and a heavy agent fleet can approach its memory cap — Atrium
shows per-pane memory so you can see it coming. Relief valves: close idle panes, raise the cap in
`%UserProfile%\.wslconfig`, or `wsl --shutdown` between sessions.

## Next

- [Core concepts](/guides/concepts/) — projects, panes, lenses, the boundary.
- [Panes & terminals](/guides/panes/) — what a pane can do.
- [The Atrium MCP server](/guides/agents-mcp/) — give your agents eyes into the cockpit.
