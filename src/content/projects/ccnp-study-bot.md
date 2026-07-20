---
title: "CCNP Study Bot + CML Lab"
summary: "A self-hosted study engine that drills me on the CCNP Automation blueprint, paired with a Cisco Modeling Labs environment and an automation workbench where the labs actually run. Built to turn a cert path into daily reps."
status: "In Progress"
featured: false
order: 8
tags: ["Networking", "Automation", "AI", "Certification"]
stack: ["Python", "Flask", "SQLite", "Claude (claude -p)", "Cisco Modeling Labs", "Ansible", "pyATS", "Terraform", "Docker"]
---

> In progress. The cert is CCNP Automation (AUTOCOR + ENAUTO), and the blueprint reads like my homelab: CML, automation, APIs, and agents.

I didn't want another watch-the-videos-and-forget-them cert grind, so I built the study around how I actually learn: reps, feedback, and labbing the real thing.

## The study bot

A small Flask app I self-host that runs my study sessions. It pulls from the full CCNP Automation blueprint, weights what comes next by how weak I am on a topic and how long since I last saw it, and tracks mastery over time. Recall drills are graded in code so the feedback is instant, and it only calls the AI on the answers I actually miss. It runs on `claude -p` against a subscription I already have, so a study session costs me nothing extra.

## The CML lab, now online

The other half is Cisco Modeling Labs, and it is live rather than living on a slide. The host networking is rebuilt to drop lab nodes onto a real VLAN, the reference platforms are imported, and the first routers boot with day-zero SSH so I can reach them like production gear. The plan maps each blueprint domain to a lab I have to build and break: device APIs, model-driven programmability, CI/CD against network config, and agent-driven operations. The study bot forces a lab drill every week so I don't drift into pure theory.

## The automation workbench

Alongside the lab I stood up a control node with the real network-automation toolchain: Ansible with the Cisco collections, Netmiko and NETCONF clients, pyATS and Genie, and Terraform. It is wired to the lab end to end, an Ansible playbook already pulls live facts off the running router, so the automation domain of the blueprint is something I run, not just read about.

## Why it matters

The point is that the cert and the day job feed each other. The automation and API work on the blueprint is exactly where Cisco's portfolio is heading, and building the study system and the lab taught me as much as the studying will.
