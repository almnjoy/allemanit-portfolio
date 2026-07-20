---
title: "MindMap"
summary: "A self-hosted, white-label AI workspace. Every tool the agent touches becomes a node on a visual canvas, so you can see what it is doing and why. Plugin-based, fully tenant-isolated, now running real paying customers with a live marketplace, public docs, and a CRM that shapes itself to each business."
status: "Live"
featured: true
order: 1
tags: ["AI", "Automation", "Self-hosted"]
stack: ["React", "Node", "Docker", "Postgres", "Twenty CRM", "n8n", "Claude / OpenRouter", "Grafana", "Loki", "Meraki API"]
liveUrl: "https://madeformeai.com"
image: "/projects/brain-map/header.png"
gallery:
  - src: "/projects/brain-map/canvas.png"
    caption: "The canvas. Each tool the agent calls lands as a live node you can drag, arrange, and read."
  - src: "/projects/brain-map/marketplace.png"
    caption: "The plugin marketplace. Everything is modular, so features switch on per environment."
---

> Formerly OpsCanvas.

I wanted my AI to live in one place and reach every tool I run: logs, network gear, dashboards, server status, billing, a browser. One agent, one screen. It came together fast, and the honest reason is the foundation was already there. Years of homelab and cloud buildout meant the integrations were sitting there waiting. The dashboard was the last mile, not the first.

This is also where I pulled together everything I'd picked up along the way: self-hosting, running OpenClaw, prompting and coding with AI, GitHub deploys, plugins, MCP servers, and how an agent actually calls tools. MindMap is all of it in one platform, self-hosted on a local Docker instance, a cloud Docker instance, and version-controlled in a GitHub repo.

## What I've run through it

- **Trace a device on the network in plain language.** I ask where something is, and the agent calls the Meraki API and my infra APIs, then comes back with the switch port, the access point, the IP, and when it was last seen. No clicking through five dashboards.
- **Schedule calls and run the calendar.** Book a meeting, move it, or check what's coming up, all from the same chat.
- **Draft and send email.** It pulls the context, writes the message, and sends once I approve.
- **Live infra at a glance.** Server health, logs, and billing render as tiles I arrange into boards I can come back to.

Every tool the agent uses lands as a node on the canvas, so the work stays visible instead of buried in a chat log. You can see what it pulled, which tool it called, and how the pieces connect.

## What's under the hood

- **Plugin-based and white-label.** Logos, colors, and layout swap per client. I can copy the same design a hundred times over and brand each one differently.
- **Every customer is isolated.** Separate pod, database, authentication, API keys, and storage. I push updates to every environment at once without touching anyone's keys or risking their data.
- **A CRM that shapes itself to the business.** The Sales, Clients, and Client-360 pages build themselves from each tenant's own CRM fields instead of a fixed template, and let them edit a client and fire off actions right from the profile. Per-business differences are configuration, not custom code, so one fix reaches every box.
- **Secrets stay on the server.** API keys, tokens, and session data never live in the browser. The browser is a window into the platform, not the platform itself.
- **One connector reaches thousands of apps.** Instead of building hundreds of integrations, one automation layer reaches email, calendars, CRMs, messaging, and databases. That has been the biggest unlock here.

## Where it is now

MindMap is built for small business owners and entrepreneurs who want AI, automation, and their own tools working together without learning the plumbing. What was "coming soon" is now live: a real plugin marketplace, a full public documentation site, and the first paying customers running their whole practice on their own isolated box. This is the one I am most excited to keep putting in front of people.
