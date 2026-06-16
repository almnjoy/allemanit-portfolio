---
title: "Solar Demo (TrueNorth)"
summary: "A full vertical demo for a solar installer: branded site, CRM, documentation, and a team of role-scoped AI agents handling intake, questions, and follow-up, end to end."
status: "Demo"
featured: true
order: 5
tags: ["AI", "CRM", "Vertical demo"]
stack: ["Twenty CRM", "n8n", "OpenClaw", "Discord", "AI agents", "Web"]
image: "/projects/solar-demo/signin.png"
cardImage: "/projects/solar-demo/dashboard.png"
gallery:
  - src: "/projects/solar-demo/site.png"
    caption: "The branded public site, white-labeled for the demo: services, testimonials, and a quote CTA."
  - src: "/projects/solar-demo/dashboard.png"
    caption: "The internal dashboard: pipeline, conversion funnel, and the active AI agents (Solar Doc, Support, Sales)."
---

Solar Demo is a proof of concept. I took every piece I'd built before, a CRM, a website, AI chat, documentation, and follow-up, and wired them into one fake company to prove they work together. The industry is solar, but the project was never about solar. It was about showing a whole business running on AI, automation, and documentation as one system instead of a dozen disconnected tools.

## The whole company, faked end to end

TrueNorth Solar has the works: a branded static marketing site, a full documentation suite, a CRM dashboard for the sales team, and a pipeline view with a live conversion funnel. A visitor can browse, ask the chat agent a question, request a quote, and book a consultation, and the lead is captured and routed before anyone picks it up.

## An agent team with defined roles

Instead of one chatbot, the demo runs a team of agents, each with a job and only the access that job needs: a sales agent, a documentation agent, a support agent, and backend operations. An orchestrator routes each inbound message to the right one. Agents answer by referencing the company's approved documentation, not just general model knowledge, so the responses stay grounded and consistent. They surface through the dashboard or a Discord channel, and any channel can be wired in the same way.

## Security by role

Every agent runs on least privilege. Sales, lead qualification, and backend each get a defined scope and nothing more. The aim is automation that can take a lead from the website, qualify it, answer questions from the docs, and follow up on its own, without handing any single agent the keys to everything.

## Why it matters

It is the blueprint for the rest. AI is most useful wired into real business processes, not sitting off to the side as a chatbot. Solar Demo proves a small company can run customers, sales, docs, and team comms through one connected platform, and that the same stack reskins for any service business in an afternoon.
