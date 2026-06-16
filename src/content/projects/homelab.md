---
title: "Homelab + Hybrid Cloud"
summary: "A production-grade homelab bridged to the cloud. Proxmox and two-site Cisco Meraki, full observability, automated backups, and a private overlay to Hetzner."
status: "Live"
featured: true
order: 2
tags: ["Infrastructure", "Networking", "Observability"]
stack: ["Proxmox", "Cisco Meraki", "Docker", "Kubernetes", "Grafana / Loki / Prometheus", "Proxmox Backup Server", "Authentik", "Twingate", "Hetzner"]
image: "/projects/homelab/header.png"
gallery:
  - src: "/projects/homelab/physical.jpg"
    caption: "The physical stack. An open-frame rack, scavenged and upgraded over years."
  - src: "/projects/homelab/old-design.png"
    caption: "An earlier network map: VLANs, Meraki WiFi, Proxmox, and Plex across the house."
  - src: "/projects/homelab/docs.png"
    caption: "The documentation hub. Every box, service, and where the passwords live, written down."
---

It started with an old Juniper switch and a retired server running ESXi, plus whatever else I could scavenge: a Dell server, a Raspberry Pi, an old gaming rig, a couple of mini Windows PCs. From there I worked through the stack the hard way. ESXi, then Proxmox, TrueNAS, iSCSI, different RAID setups. Drives died, services crashed, and I rebuilt them more than once. That troubleshooting is the same muscle I use at work every day.

## How it grew

Every upgrade got earned. As I learned something new or broke something old, I added hardware and repurposed the rest. Working at Meraki brought real switches, routers, and access points into the rack piece by piece. A Raspberry Pi became a backup server. A mini Windows box with GPU passthrough became the Plex server. When I bought a new desktop, the old one didn't get shelved: I upgraded the motherboard, CPU, and drives and added a second NIC, so management and server traffic run on separate links with room to spare for more VMs.

## What runs on it now

- **A real hypervisor.** A Proxmox host carries the VMs: a SQL server, a local LLM, and two Ubuntu boxes running Docker, one for services and one for projects, kept separate so I can test without breaking what works.
- **A two-site network.** Cisco Meraki across two locations with VLAN segmentation, so the lab is routed and segmented like a small enterprise.
- **Monitoring on everything.** Grafana, Loki, Prometheus, and around 40 uptime checks cover every node, container, and link.

## Hybrid cloud

The lab doesn't stop at my walls. The cloud side started as a single Hostinger VPS running n8n, got repurposed to host Authentik, and eventually moved to Hetzner Cloud, where it now runs four servers: a three-node Kubernetes cluster and a standalone Docker host. It all rides the same overlay as home, stitched together with Twingate and VPNs to and from the cloud. A lot of this started from practical problems, like reaching my services remotely or working around Netflix's password-sharing crackdown, and grew into real site-to-site and cloud-to-home networking.

## Documentation and backups

The thing that keeps it sane is documentation. Every service gets its logins, naming, location, and dependencies written down, because troubleshooting blind is miserable. That discipline is why wiring in a new cloud box takes minutes: same standards, same design. The current focus is backups, a clean path from the Proxmox hosts to a dedicated backup server to the cloud. Building it was never the hard part. Operating, documenting, and recovering it is where I actually learned.
