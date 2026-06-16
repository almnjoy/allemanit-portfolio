---
title: "MadeForMeAI"
summary: "A multi-tenant AI workspace SaaS. Every customer gets their own isolated OpenClaw agent on its own Kubernetes pod, with single sign-on and billing wired end to end."
status: "Live"
featured: true
order: 3
tags: ["SaaS", "Kubernetes", "AI"]
stack: ["K3s", "Docker", "OpenClaw", "Authentik", "Stripe", "Hetzner", "GitHub Actions"]
liveUrl: "https://madeformeai.com"
repos:
  - url: "https://github.com/almnjoy/MadeForMeAI-Provisioner-Alpha"
    label: "Provisioner (Alpha)"
  - url: "https://github.com/almnjoy/MadeForMeAI-Provisioner-Phase2"
    label: "Provisioner (Phase 2)"
  - url: "https://github.com/almnjoy/madeforMeAI-openclaw-template"
    label: "OpenClaw template"
image: "/projects/madeformeai/intro.png"
cardImage: "/projects/madeformeai/architecture.png"
gallery:
  - src: "/projects/madeformeai/dashboard.png"
    caption: "The user dashboard. Your AI, your account, and one-tap access from any device."
  - src: "/projects/madeformeai/chat.png"
    caption: "The agent itself: a private OpenClaw workspace running for each user."
  - src: "/projects/madeformeai/admin.png"
    caption: "Behind the scenes: live users, running pods, and node distribution across the cluster."
---

MadeForMeAI was the first thing I tried to take public. The idea was simple: give friends, family, and early users their own private AI, not a shared chatbot everyone logs into. Each person gets an isolated OpenClaw agent with their own files, prompts, plugins, and settings, built to feel like an assistant made for them.

## A crash course in running a SaaS

It started as an AI project and quickly turned into operating a real platform. Prompts and agents were the easy part. The actual work was everything around them: multi-service deployments, databases, authentication, user management, billing, container images and versioning, monitoring, and keeping costs in check. For the first time I wasn't building a tool for myself, I was running something other people depended on.

## The architecture

The current design took five or six iterations to land on. Docker first, then a few other approaches, before settling on K3s across multiple servers in the cloud. A controller node runs the provisioner, the database, and Authentik for identity. When someone signs up and pays through Stripe, the provisioner spins up their own pod on a worker node automatically, and tears it down the same way. Every user is fully isolated: their own pod, their own storage, their own agent. No shared app with row-level filtering.

## What it taught me the hard way

Manual deployments are fragile, and I learned that by breaking them. The one that stuck: I accidentally exposed my API keys and environment variables, which meant rotating every key, rebuilding configs, and recovering the affected systems. Annoying at the time, but it taught me more about secrets and operational discipline than any tutorial. This is also where I got serious about version control: real Git workflows, pushing and pulling safely, reviewing the code AI wrote for me, and auditing what actually shipped.

## The part I didn't expect

Building it was only half the job. Getting people to use it is a different skill, and one I'm still working on: marketing, branding, positioning, onboarding, and explaining why someone would want this in the first place. A lot of what I learned here, technical and not, went straight into Brain Map and everything I've built since.
