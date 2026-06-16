---
title: "QuickIT Sales Automation"
summary: "Inbound calls and chat to booked meetings, automatically. A phone number routes to an AI voice agent, into a CRM, onto a calendar, with no human in the loop for intake."
status: "Live"
featured: true
order: 4
tags: ["Automation", "AI", "CRM"]
stack: ["Twilio", "Retell", "n8n", "Twenty CRM", "cal.com", "Microsoft Graph"]
image: "/projects/quickit-sales/header.png"
gallery:
  - src: "/projects/quickit-sales/chat.png"
    caption: "The website chat agent. It answers questions, captures the lead, and books the meeting."
  - src: "/projects/quickit-sales/workflows.png"
    caption: "The workflow roster in n8n. Every call, capture, alert, and follow-up is its own published flow."
  - src: "/projects/quickit-sales/post-call.png"
    caption: "Inside one call: the post-call flow that creates the contact, note, and opportunity."
  - src: "/projects/quickit-sales/email.png"
    caption: "Branded follow-up, sent automatically through Microsoft Graph."
---

This one started as infrastructure monitoring and grew into the front end of my consulting business. What began as alerting for my own servers turned into a roster of around 18 agents and n8n workflows, each handling one job: monitoring, alerts, reporting, lead capture, scheduling, follow-up. Once the agents could watch and act on my infrastructure, pointing them at sales was a short step.

## From monitoring to a sales front end

A caller dials in, an AI voice agent handles intake, and the lead lands in the CRM and on the calendar before I ever touch it. A chat widget on the site does the same for visitors: it answers questions, explains services, captures the lead, and books the meeting. Inbound, outbound, screening, follow-up, it all funnels into one CRM and triggers the next step on its own.

The point is leverage. One person can't answer every call and chase every lead while doing the actual work. The automation does the intake; I do the engineering.

## The easy part was the wiring

Most of this came together fast because the tools already existed. Years of monitoring, automation, databases, and documentation meant adding AI was mostly a matter of exposing what I already ran, securely. Wiring Retell into the existing workflows took an afternoon, not a rebuild.

## Secured and affordable, on purpose

The real goal was proving AI can be useful, secure, and cheap enough for a small business. Every agent runs on least privilege, and the work was figuring out the minimum access each one needed: read-only service accounts, scoped API keys, tool-level permissions, isolated environments, and workflows I can audit. Done right, none of it takes an enterprise budget.

## What makes it interesting

- **End to end.** Twilio to a Retell voice agent to n8n to Twenty CRM to cal.com, plus a web chat widget that does the same.
- **No dropped leads.** Every channel funnels into one CRM with find-or-create dedup logic.
- **Branded email, automated.** Templated, on-brand email sends through Microsoft Graph.
