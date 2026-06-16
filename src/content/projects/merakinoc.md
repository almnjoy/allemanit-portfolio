---
title: "MerakiNOC"
summary: "A network operations dashboard for Cisco Meraki: live device health, alerts, and client visibility in one view, with configuration and monitoring driven through the API."
status: "Live"
order: 14
tags: ["Networking", "Dashboard"]
stack: ["Meraki API", "React", "Grafana", "Loki"]
---

MerakiNOC was my attempt to prove a point: network admin does not have to mean logging into each device by hand. Built on the Meraki dashboard API and syslog, it pulls device health, uplinks, top talkers, security events, and per-client history into one view, and pushes configuration changes through the API instead of the GUI.

It came out of my [network design](/projects/network-design) work, and it was one of my first real tastes of API-driven operations: inventory, monitoring, alerting, and reporting, all automated and standardized in software instead of clicked through one box at a time.

## What makes it interesting

- **API-first.** Configuration and monitoring run through the Meraki API, not manual dashboard clicks.
- **One view.** Device status, uplinks, security events, and client history in a single pane.
- **Alerting built in.** Syslog into Grafana and Loki, so problems surface on their own.
