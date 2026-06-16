---
title: "Brain Map"
summary: "A self-hosted, white-label AI workspace. Every tool the agent touches becomes a node on a visual canvas, so you can see what it is doing and why. Plugin-based, fully tenant-isolated, with one connector for thousands of apps."
status: "Live"
featured: true
order: 1
tags: ["AI", "Automation", "Self-hosted"]
stack: ["React", "Node", "Docker", "Postgres", "Zapier", "Claude / OpenRouter", "Grafana", "Loki", "Meraki API"]
image: "/projects/brain-map/header.png"
gallery:
  - src: "/projects/brain-map/canvas.png"
    caption: "The canvas. Each tool the agent calls lands as a live node you can drag, arrange, and read."
  - src: "/projects/brain-map/marketplace.png"
    caption: "The plugin marketplace. Everything is modular, so features switch on per environment."
---

> Formerly OpsCanvas.

I wanted my AI to live in one place and reach every tool I run: logs, network gear, dashboards, server status, billing, a browser. One agent, one screen. It came together fast, and the honest reason is the foundation was already there. Years of homelab and cloud buildout meant the integrations were sitting there waiting. The dashboard was the last mile, not the first.

This is also where I pulled together everything I'd picked up along the way: self-hosting, running OpenClaw, prompting and coding with AI, GitHub deploys, plugins, MCP servers, and how an agent actually calls tools. Brain Map is all of it in one platform, self-hosted on a local Docker instance, a cloud Docker instance, and version-controlled in a GitHub repo.

## Why I'm renaming it to Brain Map

OpsCanvas described the operations side. Brain Map describes what you actually see. Every tool the agent uses generates a node on a canvas, so the work is visible instead of buried in a chat log. You can watch which information it pulled, which tool it called, and how the pieces connect.

That idea came straight out of MadeForMeAI feedback. People would sit in front of a chat box with no idea what to type or what it was doing behind the scenes. A map fixes that. The AI reasons across your tools, documents, and data, and you can see it happen.

## What's under the hood

- **Plugin-based and white-label.** Logos, colors, and layout swap per client. I can copy the same design a hundred times over and brand each one differently.
- **Every customer is isolated.** Separate pod, database, authentication, API keys, and storage. I push updates to every environment at once without touching anyone's keys or risking their data.
- **Secrets stay on the server.** API keys, tokens, and session data never live in the browser. The browser is a window into the platform, not the platform itself.
- **Zapier is the universal connector.** Instead of building hundreds of integrations, one Zapier connection reaches thousands of apps: email, calendars, CRMs, messaging, databases. That has been the biggest unlock here.

## Where it's going

Brain Map is built for small business owners and entrepreneurs who want AI, automation, and their own tools working together without learning the plumbing. A marketplace, full docs, and a dedicated site are coming. This is the one I am most excited to put in front of people.
