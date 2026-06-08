---
title: Privacy Policy
description: Atrium watches nothing you do — no telemetry, no account, no server you depend on. Here's exactly what that means, and how to check it yourself.
---

**Atrium watches nothing you do.** No analytics, no telemetry, no account, no server of mine
in the loop. This page says exactly what that means — and, just as importantly, how you can
check that I'm telling the truth.

_Last updated: 2026-06-08._

## The short version

- I collect **nothing** about your work — not your projects, panes, commands, files, or which
  AI agents you run.
- Atrium needs **no account** and **no internet** to do its job. It runs entirely on your
  machine.
- The app never depends on any computer I run. If everything of mine went offline forever,
  your copy of Atrium would keep working exactly as it does today.

That's the whole promise. The rest of this page is the honest detail behind it.

## What Atrium collects about you

Nothing. To be specific, Atrium does **not** collect, store, or transmit:

- **Your activity** — the projects you open, the panes you create, the commands you run, the
  terminals or agents you launch, or anything you type into them.
- **Your files** — Atrium reads the directories you point it at so it can show you what's
  running and your git state. That information stays on your machine. It is never uploaded.
- **Your AI usage** — which agents you use, how often, or what you ask them. Atrium organizes
  these sessions; it does not observe their contents.
- **Identifiers** — no account, no sign-in, no device fingerprint, no advertising ID, no
  analytics or "anonymous usage statistics."
- **Crash or error reports** — Atrium does not phone home when something breaks. If you want to
  report a bug, you do it yourself, on purpose, on the public Support channel (below).

There is no analytics SDK, no tracking pixel, and no usage dashboard — because there is no data
flowing to one.

## What happens inside your panes is between you and those tools

Atrium is the *organizer*. When you run an AI agent or a shell inside a pane, that program is
its own thing with its own privacy practices. Atrium doesn't intercept, log, or relay what goes
on in there — but your agent provider and the tools you run have their own terms, and those
apply to you directly, not through Atrium.

## The network: what's allowed, and why it isn't surveillance

Privacy doesn't mean "never sends a single packet." It means **I never watch what you do.**
There are a small number of clearly-bounded cases where Atrium may talk to the network. None of
them carry any information about your work.

- **Checking for updates.** Atrium can ask a public release page whether a newer version of the
  app exists — the same kind of request you make by visiting any website. It sends *nothing*
  about you or your projects; it only asks "is there a newer build?" As with loading any web
  page, the host can see that *some* request came from your IP address — that's unavoidable for
  any internet connection — but it learns nothing about how you use Atrium. You can also update
  manually instead.

- **Licensing (paid editions only).** Atrium's free edition is free and has no licensing in it
  at all. If you buy a paid edition in the future, the way it confirms your purchase — an app
  store's built-in entitlement, or a one-time offline key — verifies **only your license**,
  never your activity. And it is never something the app *needs in order to run*: if a license
  check can't reach the network, Atrium keeps working locally. Anti-piracy stays "within
  reason" — I'd rather a determined freeloader succeed than treat a paying user like a suspect.

That's the entire list. No part of it sends your activity anywhere, and the app's core function
never waits on a server I control.

## How to verify this yourself

I'd rather you trust this because you checked than because I asked.

1. **Pull the plug.** Disconnect from the internet, or block Atrium at your firewall. Use it
   normally. Everything that matters keeps working — proof the app doesn't depend on me.
2. **Watch the wire.** Point a network monitor (your OS firewall log, Wireshark, Little Snitch,
   etc.) at Atrium. You'll see it idle. The only requests you might catch are an occasional
   update check to the public release page — and you can read exactly what it asks for.

If you ever observe Atrium sending something this page doesn't account for, that's a bug and a
broken promise — please report it on the Support channel below.

## Changes to this policy

If this ever changes, I'll update this page and note the date above. The core commitment —
no surveillance of your work, no server you're forced to depend on — is a foundational promise,
not a setting I plan to walk back.

## Contact

Questions, or think I got something wrong? Open an issue on Atrium's public **Support channel**:
[github.com/redlinelabs-dev/atrium-site/issues](https://github.com/redlinelabs-dev/atrium-site/issues).

— Jimmy Van Veen, Atrium
