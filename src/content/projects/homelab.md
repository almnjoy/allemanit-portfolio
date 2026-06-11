---
title: "Homelab + Hybrid Cloud"
summary: "A production-grade homelab bridged to the cloud. Proxmox and two-site Cisco Meraki, full observability, automated backups, and a private overlay to Hetzner."
status: "Live"
featured: true
order: 2
tags: ["Infrastructure", "Networking", "Observability"]
stack: ["Proxmox", "Cisco Meraki", "Grafana", "Loki", "Prometheus", "Proxmox Backup Server", "Twingate"]
---

This started with an old Juniper switch and whatever I could scavenge: a retired Dell server, a Raspberry Pi, an old gaming server, an old gaming laptop, two mini Windows PCs, other random stuff. Working at Meraki brought real gear into the rack piece by piece, and every upgrade got earned by something breaking or something new I wanted to run.

Today it is a lab I run real workloads on: a hypervisor, a two-site network with VLAN segmentation, a dedicated backup server, VPNs to and from the cloud, and monitoring on all of it.

## What makes it interesting

- **One pane of glass.** Grafana, Loki, Prometheus, and around 40 uptime monitors cover every node, container, and link.
- **Backups that are real.** Proxmox Backup Server captures VMs on a schedule, verified.
- **Hybrid by design.** A Twingate overlay stitches the homelab to Hetzner cloud nodes so cloud workloads ship logs and metrics home.

## The build

Proxmox host with several VMs, Cisco Meraki across two sites, a full Grafana/Loki/Prometheus/Alloy stack, and a Twingate mesh to the cloud. Most of it is provisioned as code.
