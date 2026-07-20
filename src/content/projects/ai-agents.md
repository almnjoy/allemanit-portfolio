---
title: "AI Agent Ecosystem"
summary: "A tiered team of AI agents that monitors and troubleshoots my cloud and local infrastructure, escalating from read-only log analysis to SSH to me. They now share one Git-backed memory brain across every machine, so a lesson learned on one box is known everywhere, and I can drive any of them from my phone."
status: "Live"
featured: true
order: 6
tags: ["AI", "Agents", "Observability"]
stack: ["OpenClaw", "Claude Code", "Git", "Cognee", "Grafana / Loki / Alloy", "n8n", "SSH"]
image: "/projects/ai-agents/roster.png"
gallery:
  - src: "/projects/ai-agents/command-chain.png"
    caption: "The command chain. Tier 1 reads logs, Tier 2 can SSH in, Tier 3 is Claude on my desktop, and it pages me when a human is needed."
  - src: "/projects/ai-agents/alerts.png"
    caption: "The alerting layer. Infra issues land in a channel the agents watch, triage, and act on."
  - src: "/projects/ai-agents/cognee.png"
    caption: "The shared brain. Memory the agents read and write so they stop duplicating work."
---

This is the part I am most actively building: a roster of AI agents wired into how I actually work, led by a tiered ops team that watches my infrastructure. I modeled it on a real IT support org, Tier 1 through Tier 3, plus a shared brain so the agents coordinate instead of stepping on each other.

## The tiers

- **Alerting.** A monitoring layer watches my cloud and local infrastructure, containers, services, network, and app health, and routes anything that looks wrong to the agents.
- **Tier 1, read-only.** These agents read everything in Grafana, Loki, and Alloy and work out what broke, when, and what it affected. They can only read, which keeps them safe to run loose.
- **Tier 2, elevated.** When the logs are not enough, a Tier 2 agent can SSH into the server, pull deeper detail, and chase the root cause. If it needs a human, it pages me.
- **Me.** I log in and fix it, approve an action, or kick it up a level.
- **Tier 3.** Claude on my local desktop, for the heavy cross-system analysis, root-cause work, and write-ups. The senior engineer of the group.

They run on timers, so on top of reacting to alerts they do proactive sweeps of both environments and surface problems before they turn into outages.

## One shared brain across every box

The agents used to work blind to each other and repeat each other's effort. Now they don't. Every machine I run an agent on reads and writes the same memory, a version-controlled brain in a private Git repo that each box pulls on a schedule and pushes back to when it learns something. A gotcha discovered on the cloud box is known on the homelab box the next time it wakes up. On top of that sits a knowledge-graph layer for the semantic recall, so the agents can ask "have we seen this before" and get a real answer.

The same brain now backs my product, sales, and personal agents, not just the ops team, and I can attach to any of them from my phone through remote control when I am away from the desk.

## Where it's going

The question I keep chasing: what happens when AI agents stop working alone and start working as a coordinated team. This project is me finding out, on infrastructure I actually depend on. The next steps are the semantic recall layer across the whole fleet and filling out the rest of the roster, help desk, sales, and the personal agents I use day to day.
