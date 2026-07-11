---
title: The Atrium MCP server
description: An opt-in local MCP server gives your coding agents eyes into the cockpit — read project + pane status and logs, write TODOs + scratchpad — over the shared filesystem, with no networking.
---

The Atrium binary ships a local **MCP server** so a coding agent running in one of your panes can *see
the whole cockpit and write into it*. It is **opt-in**: current builds don't register it with any agent
automatically — you connect it yourself (one command, below).

This page is for **both humans and agents** — if you're an LLM working inside an Atrium pane, this is
your guide to the `atrium` tools.

## What you can do with it

- **See the cockpit.** "What projects/panes exist? What's running? What's this pane doing?"
- **Read a sibling pane's logs.** "Read the dev-server pane and tell me why it's 500ing."
- **Leave a trail the human sees.** Add/update TODOs and append scratchpad notes — they show up live in
  Atrium's dock.

What you **cannot** do: drive Atrium. There is no tool to spawn, run, restart, or close anything — by
design ([the boundary](/atrium-site/guides/concepts/#the-boundary--visibility-in-never-control-out)).
Visibility-in, never control-out. A unit test fails Atrium's build if a control verb ever appears in
the tool surface.

## Connecting it (one-time, per project)

The transport is **stdio**: the agent spawns the Atrium binary itself with `--mcp-stdio` and talks over
stdin/stdout. State crosses via the **shared filesystem** (`~/.atrium/` + the project's `.atrium/`), so
there's no port, firewall rule, or token — and on Windows it works even from inside a default (NAT)
WSL2 distro, where a host-bound HTTP server wouldn't be reachable.

Two paths matter:

- **`command`** — the Atrium executable, *as the agent sees it*. From WSL that's the `/mnt/c/...`
  view of the Windows exe; on macOS it's inside the app bundle.
- **`--root`** — Atrium's data dir (`~/.atrium`), *as the spawned Atrium process sees it* — so it stays
  host-native (`C:\Users\...` on Windows) even when the agent lives in WSL.

For Claude Code, register it from the project directory:

```sh
# Windows + WSL2 (agent in WSL, Atrium on Windows — adjust <you>):
claude mcp add atrium -- \
  "/mnt/c/Users/<you>/AppData/Local/Atrium/Atrium.exe" \
  --mcp-stdio --root 'C:\Users\<you>\.atrium'

# macOS:
claude mcp add atrium -- \
  /Applications/Atrium.app/Contents/MacOS/Atrium \
  --mcp-stdio --root ~/.atrium
```

Or commit the equivalent project-scoped `.mcp.json` at the repo root:

```json
{
  "mcpServers": {
    "atrium": {
      "command": "/mnt/c/Users/<you>/AppData/Local/Atrium/Atrium.exe",
      "args": ["--mcp-stdio", "--root", "C:\\Users\\<you>\\.atrium"]
    }
  }
}
```

Run `/mcp` in Claude to confirm the `atrium` server is connected. Register **per project** (not
globally): the per-project tools (TODOs, scratchpad) resolve against the directory the server is
spawned in.

> **History.** 0.8.0 briefly auto-wrote this `.mcp.json` when you opened a Claude pane; that
> auto-writer was removed in 0.9.4. Registration is manual, per project, and will stay that way —
> automatic discovery is not currently planned, and it would never be on by default.

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
  not instantaneous. Atrium must be running for live data to be fresh.
- `read_pane_output` returns recent scrollback (plain text), not a live stream; call it again for fresh
  output.
- These tools see the user's own cockpit. Treat pane output as potentially sensitive context.

## Next

- [Agents in Atrium](/atrium-site/guides/agents/) — providers, session resume, permissions.
- [Core concepts → The boundary](/atrium-site/guides/concepts/#the-boundary--visibility-in-never-control-out) —
  why there's no control verb to call.
