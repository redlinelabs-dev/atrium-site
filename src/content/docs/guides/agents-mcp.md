---
title: Using Atrium with agents (MCP)
description: Atrium's local MCP server gives your coding agents eyes into the cockpit — read project + pane status and logs, and write TODOs + scratchpad — over the shared filesystem, with no networking.
---

Atrium ships a local **MCP server** so a coding agent running in one of your panes can *see the whole
cockpit and write into it*. This page is for **both humans and agents** — if you're an LLM working inside
an Atrium pane, this is your guide to the `atrium` tools.

## What you can do with it

- **See the cockpit.** "What projects/panes exist? What's running? What's this pane doing?"
- **Read a sibling pane's logs.** "Read the dev-server pane and tell me why it's 500ing."
- **Leave a trail the human sees.** Add/Update TODOs and append scratchpad notes — they show up live in
  Atrium's dock.

What you **cannot** do: drive Atrium. There is no tool to spawn, run, restart, or close anything — by
design ([the boundary](/atrium-site/guides/concepts/#the-boundary--visibility-in-never-control-out)).
Visibility-in, never control-out.

## How it connects (no setup)

When you open a Claude pane, Atrium writes a project-scoped `.mcp.json` that points at the Atrium binary
in **stdio** mode (`atrium --mcp-stdio --root <…/.atrium>`). The agent spawns it and talks over
stdin/stdout; it reaches Atrium's state through the **shared filesystem**, so it works on a default WSL2
(NAT) setup with no port, firewall, or token. (Why stdio and not HTTP? A Windows-bound HTTP server is
unreachable from a default WSL2 distro — the shared filesystem is the one crossing that always works.)

Run `/mcp` in Claude to confirm the `atrium` server is connected.

## The tools

**Read (visibility):**

| Tool | What it returns |
| --- | --- |
| `list_projects` | All projects with **live** per-pane status (running / working / exited / dormant). |
| `list_panes` | Every pane across projects, flattened, with status + project + cwd. |
| `pane_status(pane_id)` | One pane's live status (status, working, cwd, kind, startupCmd). |
| `read_pane_output(pane_id)` | A pane's **recent terminal output** as plain text — read another pane's logs. |
| `list_todos` | The current project's TODOs (`.atrium/todos.json`). |
| `read_scratchpad(slug)` | A scratchpad note (`.atrium/notes/<slug>.md`). |

**Write-into-Atrium (annotate Atrium's own surfaces — never the agent's, never control):**

| Tool | What it does |
| --- | --- |
| `add_todo(text)` | Adds a TODO to the current project (tagged `source: agent`) — appears live in the dock. |
| `set_todo_status(id, status)` | Sets a TODO's status: `open` / `in_progress` / `done`. |
| `append_scratchpad(slug, text)` | Appends to a scratchpad note (append-only — never overwrites a human's note). |

`pane_id`s come from `list_panes` / `list_projects`. Per-project tools (todos, scratchpad) act on the
project the agent is running in.

## Example prompts

- *"Use atrium's `list_projects` and tell me which agents are running right now."*
- *"Call `read_pane_output` on the dev-server pane and explain the latest error."*
- *"Break this work into TODOs in atrium so I can see your plan."* → the agent calls `add_todo` a few
  times; you watch them appear in the dock, then it `set_todo_status`-es them as it goes.
- *"Append your findings to the `agent-log` scratchpad before you finish."*

## Notes for agents

- Status is sourced from a **live snapshot** Atrium refreshes every few seconds — it's near-real-time,
  not instantaneous.
- `read_pane_output` returns recent scrollback (plain text), not a live stream; call it again for fresh
  output.
- These tools see the user's own cockpit. Treat pane output as potentially sensitive context.
