---
title: "Payment Portal"
summary: "A client financial portal for service businesses: clean dashboards of balances and payment history, with Plaid and Stripe under the hood."
status: "Live"
order: 16
tags: ["Fintech", "Full-stack", "Multi-tenant"]
stack: ["React", "Node", "Plaid", "Stripe", "PostgreSQL"]
---

A financial portal that replaces email-based invoicing with a professional, self-service dashboard. Clients see their balances and payment history clearly; the business gets real reporting.

## Two sides

- **Client + admin operations portal:** mobile-friendly client view, full payment history, payments, and documents.
- **Admin finance portal:** Plaid bank-feed links, transaction search and tagging, and a reporting dashboard.

## Built for businesses

- **White-label:** custom logo, colors, and a custom domain like `portal.yourcompany.com`.
- **Automation and API:** event triggers, n8n or Zapier hooks, notifications on payment events.
- **Users:** granular role-based access control for internal teams.

## Integrations and security

Native Plaid for real-time bank feeds, Stripe Connect for payments, and an expandable path to accounting-software sync. Encrypted throughout, with RBAC gating who sees what.
