---
title: "QuickIT Sales Automation"
summary: "Inbound calls and chat to booked meetings, automatically. A phone number routes to an AI voice agent, into a CRM, onto a calendar, with no human in the loop for intake."
status: "Live"
featured: true
order: 4
tags: ["Automation", "AI", "CRM"]
stack: ["Twilio", "Retell", "n8n", "Twenty CRM", "cal.com", "Microsoft Graph"]
---

The whole front end of my consulting business runs itself. A caller dials in, an AI voice agent handles intake, and the lead lands in the CRM and on the calendar before I ever touch it.

## What makes it interesting

- **End to end.** Twilio to a Retell voice agent to n8n to Twenty CRM to cal.com, plus a web chat widget that does the same.
- **No dropped leads.** Every channel funnels into one CRM with find-or-create dedup logic.
- **Branded email, automated.** Templated, on-brand email sends through Microsoft Graph.

## The build

A SIP trunk into a voice agent, orchestrated by n8n webhooks, writing to an open-source CRM and a scheduling system that syncs to Outlook.
