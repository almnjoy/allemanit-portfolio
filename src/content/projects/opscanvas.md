---
title: "OpsCanvas"
summary: "A self-hosted AI operations dashboard. One chat agent drives 32 tools across 12 integrations, with approval-gated writes and a draggable canvas of live infrastructure tiles."
status: "Live"
featured: true
order: 1
tags: ["AI", "DevOps", "Full-stack"]
stack: ["React", "Node", "Docker", "Claude / OpenRouter", "Grafana", "Loki", "Meraki API", "Hetzner API"]
---

OpsCanvas started with one want: I wanted my AI to live in one spot and be able to pull every tool I have. Logs, network devices, dashboards, server status, billing, a browser. One agent, one screen, everything I run.

It came together fast, and the honest reason is that the foundation already existed. Years of homelab and cloud buildout meant the integrations were sitting there waiting: Grafana and Loki already collecting, Meraki already wired for API access, SSO already in front of everything. The dashboard was the last mile, not the first. I still learned a ton shipping it.

## What makes it interesting

- **Approval-gated writes.** Reads are instant. Anything that changes state surfaces an approval card first, so the agent can act without acting recklessly.
- **A live canvas, not a chat log.** Results render as draggable tiles (a screenshot, a metrics panel, a device list) that you arrange into saved boards.
- **Breadth.** 32 tools spanning Meraki, Hetzner, Grafana/Loki, Stripe/Plaid, Microsoft 365, and a sandboxed agent browser.

## The build

React front end, Node API, deployed in Docker behind Traefik with SSO. The agent layer is model-agnostic through OpenRouter. Every integration is a small, isolated tool module with its own kill switch.
