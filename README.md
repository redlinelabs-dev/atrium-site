# atrium-site

The public download & docs page for **Atrium** — a calm window where every
project's agents, terminals, and commands are visible, grouped, and interactive.
*Organizer, not orchestrator.*

- **Site:** https://redlinelabs-dev.github.io/atrium-site
- **Downloads:** [Releases](https://github.com/redlinelabs-dev/atrium-site/releases/latest)
- **App source:** private (`redlinelabs-dev/atrium`) — see ADR-0003 there for why
  the code is private but the site + releases are public.

This repo is **just the static site + the release binaries**. It's plain
`index.html` + `style.css`, served by GitHub Pages (deploy-from-branch, `main` /
root). No build step.

## Add the screenshot

The hero shows a placeholder until a real screenshot exists. Drop a PNG named
`screenshot.png` in the repo root and push — the page picks it up automatically.

## Cutting a release (maintainer runbook)

1. In the **private** `atrium` repo: bump `version` in
   `app/src-tauri/tauri.conf.json` (canonical) and keep `Cargo.toml` /
   `package.json` loosely in sync. Commit.
2. Tag the private repo for provenance: `git tag v0.1.0 && git push --tags`.
3. Build on Windows: `bun run tauri build` → the NSIS installer lands in
   `app/src-tauri/target/release/bundle/nsis/Atrium_<version>_x64-setup.exe`.
4. Smoke-test: install **and** uninstall (confirm the Add/Remove Programs entry).
5. Here on **atrium-site**: create a GitHub Release `v0.1.0`, attach the `.exe`,
   write short notes. The site's Download button points at
   `releases/latest`, so no page edit is needed per release.

The installer is unsigned (no code-signing cert), so Windows SmartScreen warns on
first run — the page documents *More info → Run anyway*.
