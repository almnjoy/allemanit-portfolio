---
title: "Functional Health App"
summary: "A mobile app bridging clients and functional-health providers: daily tracking on one side, a real-time provider dashboard on the other."
status: "Demo"
order: 19
tags: ["Mobile", "Healthcare", "Security"]
stack: ["Mobile", "RBAC", "AES-256"]
---

A mobile app that closes the gap between clients and their functional-health providers. Clients log daily metrics; providers get a real-time window into progress instead of waiting for the next appointment.

## What it does

- Daily logging of health metrics, from water intake to symptom correlations.
- Everything aggregates into visual graphs that are actually readable.
- Provider dashboards plus secure client-to-provider communication.

## Data handling

- All personal health information is encrypted in transit and at rest with AES-256.
- Strict role-based access control: only the assigned provider can see a given client's logs.
