---
title: "Almnjoy Labs"
summary: "A fake enterprise I break on purpose. A 40-store retail chain with HQ, data center, Azure and two ISPs, built in Cisco Modeling Labs, with a case-file portal at labs.almnjoy.dev and a packet analyzer that turns captures into findings."
status: "Live"
featured: true
order: 0
tags: ["Networking", "Labs", "Cisco", "Security"]
stack: ["Cisco Modeling Labs", "IOS-XE", "ASA", "NX-OS", "Catalyst 8000v", "BGP", "DMVPN", "VXLAN EVPN", "React", "FastAPI", "Authentik", "Wireshark"]
liveUrl: "https://labs.almnjoy.dev"
image: "/projects/almnjoy-labs/01-overall-v2.png"
cardImage: "/projects/almnjoy-labs/01-overall-v2.png"
gallery:
  - src: "/projects/almnjoy-labs/02-hq-zones.png"
    caption: "HQ campus inside: two cores, dual-homed to two ISPs, with the PCI, WAN and remote-access zones behind the ASA."
  - src: "/projects/almnjoy-labs/03-dmvpn-dual-hub.png"
    caption: "Retail WAN: DMVPN hub-1 at HQ, hub-2 at the data center, every store a spoke over the ISP underlay."
  - src: "/projects/almnjoy-labs/04-dc-spine-leaf.png"
    caption: "DC1: dual edge routers, ASA perimeter, two spines, three Nexus VTEP leaves running VXLAN EVPN."
  - src: "/projects/almnjoy-labs/05-azure-vti.png"
    caption: "CLD1: a Catalyst 8000v standing in for an Azure VPN gateway, two VNets, two VTI tunnels home."
  - src: "/projects/almnjoy-labs/cml-hq1-campus.png"
    caption: "What it looks like on the CML canvas. Five labs, bridged together on the host so traffic really crosses sites."
---

The story: ALMNJOY bought a 40-store convenience chain. Every store has the same LAN. Card data has to stay inside a PCI boundary I can prove. HQ is dual-homed to two ISPs, there is a data center with a VXLAN EVPN fabric, an Azure-style cloud, and a remote-access zone for vendors. None of it is real, all of it is RFC 1918 and documentation space, and that is the point: it is a network I can break on purpose and defend in a design review.

It started as my CCNP ENCOR study world. It turned into the thing I point people at when they ask what I actually do.

## The lab world

Five labs in Cisco Modeling Labs, bridged together on the host so a packet from a store register really does cross an ISP, hit the HQ edge, and land in the data center:

- **HQ1 Campus**: two cores, distribution and access, an ASAv edge, DMVPN hub-1, a remote-access zone with a jump host, and a payment server that lives inside the PCI boundary.
- **ISP World**: two providers, two routers each, every customer handoff and a teleworker. Real eBGP north and south, so the HQ failover test is a real test.
- **Retail**: identical stores on identical 192.168.100.0/24 LANs, NATed into the enterprise per store, GRE and then DMVPN Phase 3 with IPsec home.
- **DC1**: dual edge, ASA perimeter, EIGRP boundary with route tags, and a spine-leaf running VXLAN EVPN on Nexus 9300v.
- **CLD1 "Azure"**: a Catalyst 8000v playing the VPN gateway, hub and app VNets, VTI plus eBGP to HQ and DC1.

Every phase has a build sheet with the exact commands and a done-when checklist, a decision log, a risk register and the verification evidence. The design of record is written the way I would hand it to a customer.

## The case files

[labs.almnjoy.dev](https://labs.almnjoy.dev) is the portal in front of it: a ticket queue of story-mode break/fix episodes ("The certificate that never arrived", a closing-time card-timeout, a store that can reach HQ but not the data center), each with a capture plan, sealed facilitator notes, and a write-up. Viewers get a login, work the ticket against the live lab, and compare against the answer key. There is a 3D view of the topology behind a feature flag and first-login tours for people who have never seen CML.

It is a React front end on a FastAPI back end, behind Authentik SSO, running on the same production host as everything else I build.

## The packet analyzer

Troubleshooting ends in a capture, so the lab got its own tool: drop in a pcap or CSV, name the source and destination and the question, and get an executive-style HTML report back. Findings come with the Wireshark filter that proves them, a packet ladder, charts, before-and-after comparison, and an optional AI review with a grounding check so it cannot invent a packet that is not there. It runs in standard, sanitized, or fully air-gapped mode, and it is checked against fourteen ground-truth captures.

## Where it is going

This page will keep growing: more case files, the retail PCI cutover, the DC fabric phase, and the write-ups for each. The lab topologies and design docs are headed for a public repo once the sanitizer gate is final. If you want to run one of the cases yourself, [get in touch](/contact).
