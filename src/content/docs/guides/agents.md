---
title: Agents in Atrium
description: The provider system, Claude session resume and context-window %, the managed permissions allow-list, and the agent catalog.
---

Atrium doesn't wrap or proxy your agents — it runs them exactly as you would in a terminal, then layers
*visibility* on top. What an agent gets beyond a plain terminal is declared by its **provider**.

## The agent catalog

New projects offer an agent group seeded from a user-editable catalog: **Claude**, **Codex**,
**OpenCode**, **Amp**, **Aider**, and **Gemini** ship as presets (Settings → New projects). The catalog
just names commands — listing an agent asserts nothing about whether it's installed. Any command you
add becomes a one-click agent template.

## Providers

A pane's provider is derived from its startup command's first token (`claude` → the Claude provider).
Providers declare **capabilities**; agents without any registered capabilities behave as plain
terminals — which is always safe.

**Claude Code is the fully-featured reference provider:**

- **Session resume.** Atrium mints a stable session id on first spawn (`claude --session-id <uuid>`)
  and resumes it on every wake, restart, and app relaunch (`claude --resume <id>`) — after checking
  the session still exists. You get the *same conversation* back, not a fresh agent.
- **Context-window %.** A live chip shows how full the context window is — read from Claude Code's own
  statusline, never estimated from a guessed window size.
- **Managed scrollback.** Claude redraws its own UI on resume, so Atrium skips scrollback replay for
  Claude panes rather than double-painting history.
- **Spawn environment.** Claude panes are told not to auto-connect to an IDE, so diffs render in the
  pane you're actually watching.

All other cataloged agents currently run as generic agents (no capabilities). The provider registry is
how deeper integrations land without ever becoming *control* — a provider is a lens on an agent, never
a driver.

## A clean spawn environment

Every pane — agent or not — is spawned "de-IDE'd": VS Code integration variables are stripped,
`TERM_PROGRAM=atrium` is set, a terminal editor is ensured for `$EDITOR`, and locale/color settings are
normalized (especially in WSL). Agents behave as they would in a clean terminal, not as if they were
inside someone else's IDE.

## Managed permissions (Claude)

Per project, Atrium can maintain a **managed allow-list** for Claude Code: rules you set in Project
Settings are rendered into that project's `.claude/settings.local.json`. The sync is deliberately
non-destructive — your existing deny/ask rules, model choice, and env settings are preserved; Atrium
only manages its own allow entries (deduped and sorted). With the terminal bell enabled, it also sets
Claude's notification channel to the bell — which is what makes a waiting Claude pane *breathe* in the
cockpit.

## TODOs and notes you can watch

Agents connected to the [Atrium MCP server](/atrium-site/guides/agents-mcp/) can write TODOs and
scratchpad notes that appear **live** in the dock — a running plan you can watch without tailing the
agent's output.

## Next

- [The Atrium MCP server](/atrium-site/guides/agents-mcp/) — opt-in cockpit visibility for agents.
- [Core concepts → The boundary](/atrium-site/guides/concepts/#the-boundary--visibility-in-never-control-out).
