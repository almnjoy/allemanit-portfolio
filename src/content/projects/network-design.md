---
title: "Network Design & Architecture"
summary: "Networking is the foundation the rest of my work is built on: secure, segmented, well-documented design, a homelab that mirrors the enterprise, and a dedicated Cisco Modeling Labs environment for the heavy scenarios."
status: "Service"
order: 9
tags: ["Networking", "Security", "Architecture"]
stack: ["Cisco", "Meraki", "Cisco Modeling Labs", "BGP / OSPF", "RADIUS / ISE", "VPN"]
image: "/projects/homelab/header.png"
---

Networking is the foundation everything else of mine is built on. Over a decade in, it is still my favorite part of the work. I think of network design as building roads for the internet: deciding how data gets from one point to another, fast, secure, and without surprises. Designing that well still feels like a treat.

That is why I have rebuilt my own home network more times than I can count, each time to try something new: VLAN segmentation, firewall rules, access policies, traffic shaping and QoS, internet breakout, site-to-site and remote VPNs, a DNS server, and RADIUS authentication. Testing ideas on real gear before they ever touch a production network.

## A lab that mirrors the enterprise

I eventually repurposed an old server into a dedicated Cisco Modeling Labs (CML) environment for the heavier scenarios: BGP and OSPF routing, RADIUS and Cisco ISE for identity, VPNs, and high-availability designs. It is a safe place to build enterprise-scale topologies, break them, and figure out why.

## Two things that came out of it

The same curiosity turned into a couple of projects worth their own pages. [MerakiNOC](/projects/merakinoc) was my take on automating configuration and monitoring through the Meraki API and a custom dashboard. [netadmintoolbox.com](/projects/netadmintoolbox) packages the everyday utilities and troubleshooting I teach into one fast site.

## Teaching it

A lot of this loops back to teaching. I run CCNA-level networking for students in Chicago, and explaining a concept cleanly is its own skill, often harder than the concept itself. The troubleshooting instinct, the architectural thinking, and the security habits I built here show up in everything else I make, from AI platforms to automation.
