---
title: "AI Agent Ecosystem"
summary: "A tiered team of AI agents that monitors and troubleshoots my cloud and local infrastructure, escalating from read-only log analysis to SSH to me, with a shared memory brain (Cognee) so they coordinate instead of duplicating work."
status: "Live"
featured: true
order: 6
tags: ["AI", "Agents", "Observability"]
stack: ["OpenClaw", "Cognee", "Grafana / Loki / Alloy", "n8n", "SSH", "Claude / OpenRouter"]
image: "/projects/ai-agents/roster.png"
gallery:
  - src: "/projects/ai-agents/command-chain.png"
    caption: "The command chain. Tier 1 reads logs, Tier 2 can SSH in, Tier 3 is Claude on my desktop, and it pages me when a human is needed."
  - src: "/projects/ai-agents/alerts.png"
    caption: "The alerting layer. Infra issues land in a channel the agents watch, triage, and act on."
  - src: "/projects/ai-agents/cognee.png"
    caption: "Cognee, the shared brain. A knowledge graph the agents read and write so they stop duplicating work."
---

This is the part I am most actively building: a roster of AI agents wired into how I actually work, led by a tiered ops team that watches my infrastructure. I modeled it on a real IT support org, Tier 1 through Tier 3, plus a shared brain so the agents coordinate instead of stepping on each other.

## The tiers

- **Alerting.** A monitoring layer watches my cloud and local infrastructure, containers, services, network, and app health, and routes anything that looks wrong to the agents.
- **Tier 1, read-only.** These agents read everything in Grafana, Loki, and Alloy and work out what broke, when, and what it affected. They can only read, which keeps them safe to run loose.
- **Tier 2, elevated.** When the logs are not enough, a Tier 2 agent can SSH into the server, pull deeper detail, and chase the root cause. If it needs a human, it pages me.
- **Me.** I log in and fix it, approve an action, or kick it up a level.
- **Tier 3.** Claude on my local desktop, for the heavy cross-system analysis, root-cause work, and write-ups. The senior engineer of the group.

They run on three-hour timers, so on top of reacting to alerts they do proactive sweeps of both environments and surface problems before they turn into outages.

## Cognee: a shared brain

The agents used to work blind to each other and repeat each other's effort. Cognee fixes that. It is a shared memory layer they all read and write: status, finished work, investigation notes, and context. When one agent changes something, the others see it. I am now pushing the same brain into my sales agents and the personal agents I use day to day.

## Where it's going

The question I keep chasing: what happens when AI agents stop working alone and start working as a coordinated team. This project is me finding out, on infrastructure I actually depend on. Full demos and the rest of the roster (help desk, sales, personal) coming soon.
