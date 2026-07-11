---
title: SSH remote projects (Pro)
description: Open a project on a remote box over your own ssh, reattach to your own tmux sessions — zero credentials stored, ever.
---

**Pro feature.** An SSH remote project is a project whose panes live on another machine: a dev
server, a homelab box, a cloud VM. Atrium runs them over **your own `ssh`** and parks them in
**your own `tmux`** — it doesn't reimplement either, which is exactly why it stores nothing
secret.

## How it works

- Point a project at a host from your SSH config (`user@host`, plus a remote working directory).
  Atrium shells out to your `ssh` binary — your keys, your agent, your `~/.ssh/config`, your
  jump hosts. **Atrium never sees, asks for, or stores a credential.** That's by construction,
  not policy.
- Each remote pane runs inside a tmux session with a stable, per-pane name. Close Atrium, reopen
  it tomorrow — the project's panes **reattach to the same tmux sessions**, with your processes
  where you left them (session restoration composes with app restarts).
- Agent panes preflight `claude --resume` over the SSH channel, the same way local panes do, so a
  remote Claude pane picks its conversation back up.

## Honest state, calm controls

- **Test connection** probes the host and tells you plainly what it found (reachable? tmux
  present?) before anything spawns.
- If the link drops, the pane shows an **honest disconnected state** — no fake liveness — with a
  one-click Reconnect.
- **End remote session** does what it says: detaches and closes cleanly, on your command.
- Connection sharing (`ControlMaster`, POSIX hosts) is available as an explicit opt-in for faster
  multi-pane setups.

## Requirements

- `ssh` access to the host that already works from your terminal (keys or agent — Atrium won't
  prompt for passwords).
- `tmux` installed on the remote host.

## Next

- [GitHub + Jira integrations](/atrium-site/guides/pro-integrations/) — the other half of Pro:
  your PRs, CI checks, and Jira tickets in the cockpit.
- [Compare Free vs. Pro](/atrium-site/pricing/), or
  [buy Atrium Pro — $39, one-time](https://buy.polar.sh/polar_cl_c3Z1l6fB0kj5T4YF8KBZI8XiQFjWtzdbINqMR1moRg5) —
  every 1.x update included forever.
