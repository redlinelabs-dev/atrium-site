---
title: Git tools
description: The read-only diff viewer, the commit lane-graph, copy-as-markdown for sharing, and the lazygit hatch.
---

Atrium's git surface is deliberately **read-only**: it shows you state; it doesn't stage, commit, or
push. (The one exception is the human-initiated, confirmed
[worktree lifecycle](/atrium-site/guides/worktrees/#lifecycle-from-the-ui).) When you *do* want to
operate on the repo, Atrium hands you to a real tool instead of half-building one.

## Diff viewer

A per-project working-tree diff view. It's where you review what an agent just changed — without
giving Atrium (or the agent) any write lever.

## Commit graph

A rendered **commit lane-graph** of recent history. Click any commit to open its diff.

## Copy as markdown

Both the diff and the commit graph have a **Copy as markdown** button — paste a readable, shareable
version straight into a PR description, an issue, or an agent's context.

## Open lazygit here

Every pane offers **"Open lazygit here"** — it spawns vanilla [lazygit](https://github.com/jesseduffield/lazygit)
in a new pane scoped to that pane's *live* working directory (so in a worktree, you get lazygit in the
worktree). If lazygit isn't installed you get a calm notice, not an error dialog. This is deliberate
composition: full git *control* belongs to a purpose-built tool; Atrium just puts it one click away in
the right directory.

## Everywhere else

Git context also shows up passively across the cockpit: the live **branch per pane**, dirty/clean
state and drift in the [worktrees lens and inventory](/atrium-site/guides/worktrees/), and dirty-git
indicators on the dashboard. All of it is read-only polling — Atrium never prompts for credentials and
never runs an interactive git command on your behalf.
