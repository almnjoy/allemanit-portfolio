---
title: "Agent-Browser VM"
summary: "An isolated, watchable browser for AI agents. Playwright and Chromium in a locked-down VM, fronted by a token-gated control API and an SSO-gated live noVNC view."
status: "Live (Phase 1)"
featured: false
order: 10
tags: ["AI", "Infrastructure", "Security"]
stack: ["Ubuntu", "Playwright", "Chromium", "Xvfb", "noVNC", "systemd", "Traefik", "Authentik"]
---

Giving an AI agent a browser is easy. Giving it one you can trust and watch is the hard part. This is a dedicated VM on an isolated network segment whose only job is to run a browser the agent can drive.

## What makes it interesting

- **Watchable.** A noVNC view, gated behind SSO, lets me watch the agent browse in real time.
- **Locked down.** It lives on its own VLAN. The agent talks to it only through a token-gated control API (navigate, read text, screenshot, extract), never raw shell.
- **Always on.** Chromium self-heals with a watchdog, and the browser is hardened against bot detection.

## The build

Playwright and Chromium on Xvfb, exposed through a small control API and a noVNC watch view routed through Traefik with Authentik in front. Read-only by design, with an interactive phase planned next.
