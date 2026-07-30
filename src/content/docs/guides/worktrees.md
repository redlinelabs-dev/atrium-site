---
title: Worktrees
description: The worktrees sidebar lens, the Idle accordion, full create/remove/prune lifecycle from the UI, spawning panes into worktrees, and the per-worktree Worktree View.
---

A git worktree is a second working copy of the same repository, checked out to a different branch — so
you can have several branches open at once without stashing. That's how you run **parallel agents on
parallel branches**: one checkout per line of work, no stash juggling. Atrium treats them as a
first-class organizing [lens](/guides/concepts/#lenses), not an afterthought.

## The Worktrees sidebar lens

Toggle the sidebar between **Groups** and **Worktrees** with the chip in its header (the choice
persists per project). In the Worktrees view the sidebar shows **every** worktree in the repo —
occupied ones as expandable sections, pane-less ones in the Idle accordion below. Each occupied
worktree is a two-line row showing its directory name, a pane count, and its branch on the second
line. You get:

- **Drift detection** — see when a pane has wandered out of the worktree it was spawned in.
- **Rehome a drifted pane** — one click on the drift pill re-homes the pane to the worktree it
  wandered into.
- **Empty worktrees as launch targets** — a worktree with no panes is one click from having one.
- Both **bare-clone** and traditional worktree layouts are handled; non-git projects degrade
  gracefully (the lens just isn't offered).
- Worktrees created or removed **outside Atrium** (a terminal, an agent) appear or disappear within a
  few seconds — no manual refresh.

## Idle worktrees

Pane-less worktrees live in a thin **`Idle · N`** accordion at the bottom of the list (collapsed by
default; the choice persists per project). Rows are one line each — name, dirty dot, branch, and
last-activity age — sorted most-recent first, and fade with staleness so an hour-old worktree reads
brighter than a month-old one. Hovering a row swaps the age for its actions: a `＋▾` spawn button and
a `✕` to remove. The sidebar is the complete worktree surface — if a worktree exists, it's here.

## Spawn anything into any worktree

Every occupied worktree header has a persistent `＋▾` caret, and idle rows reveal the same caret on
hover — it opens the full spawn menu — every group's templates — scoped to that worktree's directory.
An agent template launched this way starts *in* the worktree, on that branch, with the pane's live
cwd and branch shown in the cockpit.

## Lifecycle from the UI

Everything you'd otherwise do with `git worktree` on the command line:

- **New worktree** — the `+ New worktree…` button on the Idle accordion header (also in the
  [Switcher](/guides/switcher-and-shortcuts/)): create a branch off any base (or check out an
  existing branch); the path is auto-derived from the branch name and editable before you commit.
- **Remove worktree** — from an idle row's hover `✕` or any worktree's right-click menu; a two-gate
  destructive confirm that warns about panes homed there (and closes them first), and surfaces git's
  `--force` gate separately if the worktree is dirty.
- **Prune orphaned** — `git worktree prune`, on the worktree right-click menu, confirmed before
  running.

These are the only git *writes* Atrium performs, and each one is human-initiated and confirmed — the
[diff and history views](/guides/git-tools/) stay read-only.

## Worktree View

For deep work in one worktree, enter **Worktree View** — a cockpit lens over the main area (from the
sidebar or the [Switcher](/guides/switcher-and-shortcuts/)):

- A header showing the worktree's branch, path, and dirty state.
- **Agent and shell slots** per worktree, with tabbed panes and empty-slot spawn.
- `Esc` exits; your last main-area view is remembered per project.

It's a *lens*, not a separate place — the same panes appear in the sidebar and the Worktree View;
nothing is duplicated or moved.

## Pro: per-worktree runtime vars

The [Pro edition](/pricing/) adds `$ATRIUM_PORT` / `$ATRIUM_WORKTREE` template
variables so two worktrees can run the same dev-server command on distinct ports.

## Next

- [Git tools](/guides/git-tools/) — the read-only diff and commit graph behind the
  dirty/drift signals.
- [The Switcher](/guides/switcher-and-shortcuts/) — jump to any worktree from the keyboard.
