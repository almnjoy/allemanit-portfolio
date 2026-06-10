---
title: "MadeForMeAI"
summary: "A multi-tenant AI workspace SaaS. Each customer gets an isolated pod on Kubernetes, with single sign-on and billing wired end to end."
status: "Live"
featured: true
order: 3
tags: ["SaaS", "Kubernetes", "AI"]
stack: ["K3s", "Authentik", "Stripe", "Hetzner", "containerd", "GitHub Actions"]
liveUrl: "https://madeformeai.com"
---

MadeForMeAI gives each user their own private AI workspace. Behind the scenes that means real multi-tenancy: isolated per-user pods, SSO, and a billing pipeline that provisions and tears down on its own.

## What makes it interesting

- **Real isolation.** Every customer runs in their own namespace and pod, not a shared app with row-level filtering.
- **SSO and billing as one flow.** Sign up, pay, get provisioned, all automatic.
- **Runs live.** Paying users on day-to-day workloads.

## The build

K3s on Hetzner, per-user namespaces, Authentik for identity, Stripe for billing, images shipped through CI to a private registry.
