---
title: Worktrees
description: The worktrees sidebar lens, the inventory, full create/remove/prune lifecycle from the UI, spawning panes into worktrees, and the per-worktree Worktree View.
---

Git worktrees are how you run **parallel agents on parallel branches** — one checkout per line of work,
no stash juggling. Atrium treats them as a first-class organizing lens, not an afterthought.

## The Worktrees sidebar lens

Toggle the sidebar between **Groups** and **Worktrees** with the chip in its header (the choice
persists per project). In the Worktrees view, each worktree is a two-line row showing its branch and a
group-colored status orb for the panes homed there. You get:

- **Drift detection** — see when a worktree has diverged from its base.
- **Empty worktrees as launch targets** — a worktree with no panes is one click from having one.
- **Move-to-worktree** — rehome an existing pane into a worktree.
- Both **bare-clone** and traditional worktree layouts are handled; non-git projects degrade
  gracefully (the lens just isn't offered).

## Spawn anything into any worktree

Every worktree row has a `＋▾` caret that opens the full spawn menu — every group's templates — scoped
to that worktree's directory. An agent template launched this way starts *in* the worktree, on that
branch, with the pane's live cwd and branch shown in the cockpit.

## Lifecycle from the UI

Everything you'd otherwise do with `git worktree` on the command line:

- **New worktree** — create a branch off any base (or check out an existing branch); the path is
  auto-derived from the branch name and editable before you commit.
- **Remove worktree** — a two-gate destructive confirm: it warns about panes homed there (and closes
  them first), and surfaces git's `--force` gate separately if the worktree is dirty.
- **Prune orphaned** — one-click `git worktree prune`, with a prunable-count badge, confirmed before
  running.

These are the only git *writes* Atrium performs, and each one is human-initiated and confirmed — the
[diff and history views](/atrium-site/guides/git-tools/) stay read-only.

## The Inventory

The dock's **Inventory** tab is the full worktree catalog with derived metadata: branch, pane count,
last-activity age, clean/dirty state, and prunability — with search, sort, and filter. Sort by
**stale** to triage which worktrees to clean up.

## Worktree View

For deep work in one worktree, enter **Worktree View** — a cockpit lens over the main area (from the
sidebar or the [Switcher](/atrium-site/guides/switcher-and-shortcuts/)):

- A **partition selector** across your worktrees.
- **Agent and shell slots** per worktree, with tabbed panes and empty-slot spawn.
- `Esc` exits; your last main-area view is remembered per project.

It's a *lens*, not a separate place — the same panes appear in the sidebar and the Worktree View;
nothing is duplicated or moved.

## Pro: per-worktree runtime vars

The in-development Pro edition adds `$ATRIUM_PORT` / `$ATRIUM_WORKTREE` template variables so two
worktrees can run the same dev-server command on distinct ports. See
[What is Atrium? → Free and Pro](/atrium-site/guides/what-is-atrium/#free-and-pro).
