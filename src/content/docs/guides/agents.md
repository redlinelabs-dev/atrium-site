---
title: Agents in Atrium
description: The provider system, Claude session resume and context-window %, the managed permissions allow-list, and the agent catalog.
---

Atrium doesn't wrap or proxy your agents — it runs them exactly as you would in a terminal, then layers
*visibility* on top. What an agent gets beyond a plain terminal is declared by its **provider**.

## The agent catalog

New projects offer an agent group seeded from a user-editable catalog: **Claude**, **Codex**,
**OpenCode**, **Amp**, **Aider**, and **Gemini** ship as presets (Settings → Tools). The catalog
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
  statusline, never estimated from a guessed window size. It needs Atrium's one-line tee added to your
  Claude statusline; without it the chip simply stays hidden.
- **Managed scrollback.** Claude redraws its own UI on resume, so Atrium skips scrollback replay for
  Claude panes rather than double-painting history.
- **Spawn environment.** Claude panes are told not to auto-connect to an IDE, so diffs render in the
  pane you're actually watching.

Other cataloged agents start generic, but any launcher whose CLI has a resume flag can be *taught*
session resume — give its catalog entry create/resume commands (Settings → Tools → the agent's
commands) and its panes resume like Claude's. The provider registry is how deeper integrations land
without ever becoming *control* — a provider is a lens on an agent, never a driver.

## A clean spawn environment

Every pane — agent or not — is spawned "de-IDE'd": VS Code integration variables are stripped,
`TERM_PROGRAM=atrium` is set, a terminal editor is ensured for `$EDITOR`, and locale/color settings are
normalized (especially in WSL). Agents behave as they would in a clean terminal, not as if they were
inside someone else's IDE.

## Managed permissions (Claude)

Per project, Atrium can maintain a **managed allow-list** for Claude Code: rules you set in Project
Settings are rendered into that project's `.claude/settings.local.json`. The sync is deliberately
non-destructive — your existing deny/ask rules, model choice, and env settings are preserved; Atrium
only manages its own allow entries (deduped and sorted). Atrium never touches Claude's notification
settings; the waiting-pane *breathe* is derived from the pane's own output stream (working → idle
after a prompt you submitted), config-free and agent-agnostic.

## TODOs and notes

Agents connected to the [Atrium MCP server](/guides/agents-mcp/) can still write TODOs and scratchpad
notes into the project's `.atrium/` folder, but Atrium no longer displays them in-app (the Dock was
retired in 0.15.0) — treat them as on-disk artifacts you read yourself.

## Next

- [The Atrium MCP server](/guides/agents-mcp/) — opt-in cockpit visibility for agents.
- [Core concepts → The boundary](/guides/concepts/#the-boundary--visibility-in-never-control-out).
