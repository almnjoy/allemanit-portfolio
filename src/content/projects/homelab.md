---
title: "Homelab + Hybrid Cloud"
summary: "A production-grade homelab bridged to the cloud. Proxmox and two-site Cisco Meraki, full observability, automated backups, and a private overlay to Hetzner."
status: "Live"
featured: true
order: 2
tags: ["Infrastructure", "Networking", "Observability"]
stack: ["Proxmox", "Cisco Meraki", "Grafana", "Loki", "Prometheus", "Proxmox Backup Server", "Twingate"]
---

Ten years of network engineering, turned into a lab I actually run things on. A hypervisor, a real two-site network, end-to-end monitoring, and a secure bridge out to cloud nodes.

## What makes it interesting

- **One pane of glass.** Grafana, Loki, Prometheus, and around 40 uptime monitors cover every node, container, and link.
- **Backups that are real.** Proxmox Backup Server captures VMs on a schedule, verified.
- **Hybrid by design.** A Twingate overlay stitches the homelab to Hetzner cloud nodes so cloud workloads ship logs and metrics home.

## The build

Proxmox host with several VMs, Cisco Meraki across two sites, a full Grafana/Loki/Prometheus/Alloy stack, and a Twingate mesh to the cloud. Most of it is provisioned as code.
