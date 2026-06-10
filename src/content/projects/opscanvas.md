---
title: "OpsCanvas"
summary: "A self-hosted AI operations dashboard. One chat agent drives 32 tools across 12 integrations, with approval-gated writes and a draggable canvas of live infrastructure tiles."
status: "Live"
featured: true
order: 1
tags: ["AI", "DevOps", "Full-stack"]
stack: ["React", "Node", "Docker", "Claude / OpenRouter", "Grafana", "Loki", "Meraki API", "Hetzner API"]
---

OpsCanvas is the control room for everything I run. It is a chat agent wired into real infrastructure: query logs, check network devices, read dashboards, pull server status, and take action, all from one conversation.

## What makes it interesting

- **Approval-gated writes.** Reads are instant. Anything that changes state surfaces an approval card first, so the agent can act without acting recklessly.
- **A live canvas, not a chat log.** Results render as draggable tiles (a screenshot, a metrics panel, a device list) that you arrange into saved boards.
- **Breadth.** 32 tools spanning Meraki, Hetzner, Grafana/Loki, Stripe/Plaid, Microsoft 365, and a sandboxed agent browser.

## The build

React front end, Node API, deployed in Docker behind Traefik with SSO. The agent layer is model-agnostic through OpenRouter. Every integration is a small, isolated tool module with its own kill switch.
