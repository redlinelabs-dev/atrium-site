---
title: Panes & terminals
description: Pane kinds, session restoration, scrollback search, pinning, image paste, per-pane memory and git context, fonts, and zoom.
---

Every pane is a real terminal (xterm.js with GPU rendering, driven by a native PTY). This page covers
what a pane can do beyond "be a terminal."

## Three kinds of pane

- **Terminal** — a bare interactive shell in the project's connection (WSL2/PowerShell/Git Bash/cmd on
  Windows; zsh/bash/fish on macOS).
- **Agent** — a shell that launches an agent command (`claude`, `codex`, …). Agent panes get
  [provider](/guides/concepts/#providers) powers — session resume, context-% — described
  in [Agents in Atrium](/guides/agents/).
- **Command** — runs one program (a dev server, a build, a script) and shows **exited** when it ends.
  Atrium [auto-detects scripts](#script-detection) to offer as one-click command templates. Every pane
  has a **Restart** button; agents get a confirm first.

## Sessions that survive restarts

Closing Atrium never loses a pane. Panes persist as **dormant, click-to-wake skeletons** — the process
isn't respawned until you wake it, so launching Atrium never auto-runs anything. Scrollback is saved on
close and replayed **size-first** (the terminal takes its size before history is written back, so
nothing rewraps or tears). A crash-loop guard stops a repeatedly-dying command from burning CPU, and
respawns preserve the pane's **live working directory** rather than resetting to the project root.

## Working with panes

- **Scrollback search** — `Ctrl+Shift+/` (`⌘⇧/`) opens find-in-scrollback.
- **Pin** a pane to the top of its group; **move** it to another group; **rename** it (otherwise the
  title derives from its folder + kind).
- **Right-click pastes** (terminal convention), and app chrome is never text-selectable. On macOS,
  copy/paste in a pane is `⌘⇧C` / `⌘V`.
- **Paste a screenshot** — `Ctrl+V` with an image on the clipboard writes a temp PNG and pastes its
  (shell-translated) path into the pane. Agents read the image natively; great for "here's the bug."
- **Clickable links** — URLs in terminal output open in your browser.
- **Live context per pane** — the current working directory (worktree-aware), the git branch, and the
  pane's **memory usage** (including processes inside WSL) are shown live.
- **Open lazygit here** — one click spawns `lazygit` scoped to the pane's live directory (if
  installed). See [Git tools](/guides/git-tools/).

## Script detection

Atrium reads your project's `package.json` scripts (picking bun/pnpm/yarn/npm from the lockfile),
`Makefile` targets, and `justfile` recipes, and offers them as one-click **command** templates.
Detection only *suggests* — nothing runs until you click.

## Appearance

- **Terminal font** — family and size are configurable (Settings → Appearance); a Nerd Font
  (CaskaydiaCove Mono) is bundled as the default, so agent TUIs and prompt glyphs render correctly out
  of the box.
- **App zoom** — `Ctrl+=` / `Ctrl+-` / `Ctrl+0` (`⌘` on macOS) zooms the whole app; terminals re-fit,
  and the level persists.
- **Themes** — six presets with a glow-intensity control; see
  [Settings & configuration](/guides/settings/).

## Next

- [Worktrees](/guides/worktrees/) — spawn panes into any worktree.
- [The Switcher & keyboard shortcuts](/guides/switcher-and-shortcuts/) — every binding.
