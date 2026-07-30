# Atrium

A calm window where every project's **agents**, **terminals**, and **commands**
are visible, grouped, and interactive — in one place. Atrium *organizes what's
running*. It doesn't do the running for you. *Organizer, not orchestrator.*

**→ [Download for Windows](https://github.com/redlinelabs-dev/atrium-site/releases/latest)**
&nbsp;·&nbsp; **[Download for macOS](https://github.com/redlinelabs-dev/atrium-site/releases/latest)**
&nbsp;·&nbsp; [atrium.redlinelabs.dev](https://atrium.redlinelabs.dev)

## What it does

- **Projects → grouped, collapsible panes** — Agents, Terminals, and Commands,
  organized so fifteen open panes stay meaningful instead of becoming noise.
- **Fully interactive** — every pane is a real terminal. Type into it, drive your
  agent, Ctrl-C, resize. Full ANSI/TUI rendering, not a watch-only feed.
- **Liveness at a glance** — a colored dot per pane tells you what's running,
  starting, or crashed, so a dead process can't quietly go unnoticed.
- **Windows & WSL native** — drives PowerShell, Git Bash, and WSL2 side by side,
  and knows which git branch / worktree each pane is sitting in.
- **macOS native** — drives zsh, bash, and fish directly, no WSL2-equivalent
  boundary to cross.

## Install

**Windows**

1. Grab the latest installer from
   **[Releases](https://github.com/redlinelabs-dev/atrium-site/releases/latest)**
   (`Atrium_<version>_x64-setup.exe`). Windows 10/11, 64-bit.
2. Run it. Atrium isn't code-signed yet, so Windows SmartScreen will warn on
   first launch — click **More info → Run anyway**.
3. It installs per-user (no admin needed) and uninstalls cleanly from Add/Remove
   Programs.

**macOS**

1. Grab the latest `.dmg` from
   **[Releases](https://github.com/redlinelabs-dev/atrium-site/releases/latest)**
   (`Atrium_<version>_universal.dmg` — one build for Apple Silicon and Intel) and
   drag `Atrium.app` into `/Applications`.
2. Atrium is ad-hoc signed, not notarized, so macOS Gatekeeper blocks the first
   launch — see the [install guide](https://atrium.redlinelabs.dev/guides/install/)
   for the one-time fix.

Each release lists a SHA-256 checksum if you'd like to verify your download.

## About

Atrium's core organizer is free — no caps, no nags. A **Pro** edition (SSH/remote,
background monitoring, named workspaces, and other augmentation features) is in development under
a one-time-purchase model; see the [Free and Pro](https://atrium.redlinelabs.dev/guides/what-is-atrium/#free-and-pro)
breakdown for details. **The application source is closed**; this repository is the public home
for the website and the release downloads only — so there's nothing to build here.

Found a bug or have a request? Open an
[issue](https://github.com/redlinelabs-dev/atrium-site/issues).

---

*A Redline Labs project by Jimmy Van Veen.*
