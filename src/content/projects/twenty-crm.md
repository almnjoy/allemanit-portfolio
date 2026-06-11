---
title: "Twenty CRM (Self-Hosted)"
summary: "An open-source CRM I deploy self-hosted for full data ownership: contacts, deals, workflows, and API integrations on infrastructure I control."
status: "Live"
order: 18
tags: ["CRM", "Self-hosted", "Automation"]
stack: ["Twenty", "PostgreSQL", "n8n", "REST / GraphQL", "Docker"]
---

Twenty is a modern open-source CRM, and I run it self-hosted so the database lives on infrastructure I control, not a rented SaaS. Full data ownership, no vendor lock-in. If you ever leave, you take the whole database with you.

## What it does

- Contact and company management, deal and pipeline tracking, tasks and notes.
- Role-based user management to keep a team aligned on who can see and do what.

## Workflows and integrations

- Triggers and actions automate the repetitive motion: follow-ups, status changes, handoffs.
- Wired into n8n so CRM events fire actions in the rest of the stack.
- REST and GraphQL APIs connect it to everything else.

## Deployment

Runs in Docker on a dedicated VPS. You own the instance and the data end to end.
