---
title: "PocketOps for Twenty"
summary: "A free iPhone and iPad app for self-hosted Twenty CRM, live on the App Store. Your server, your API key, no middleman. Built alongside the full CRM buildouts I do for small businesses."
status: "Live"
featured: true
order: 1
tags: ["Mobile", "CRM", "AI"]
stack: ["React Native", "Expo", "TypeScript", "GraphQL", "Twenty CRM", "n8n", "Square"]
liveUrl: "https://apps.apple.com/us/app/pocketops-for-twenty/id6801201669"
image: "/projects/pocketops/feature.png"
cardImage: "/projects/pocketops/feature.png"
gallery:
  - src: "/projects/pocketops/today.png"
    caption: "The Today screen: appointments, tasks due, money collected, and a morning brief generated from the CRM itself."
  - src: "/projects/pocketops/chat.png"
    caption: "Ask your CRM anything. Any answer that would change data shows an approval card before it touches a record."
  - src: "/projects/pocketops/people.png"
    caption: "People, companies, and deals with server-side search. Tested against a real book of 3,500+ clients."
  - src: "/projects/pocketops/workflow.png"
    caption: "One-tap workflow buttons on a client record: welcome email, newsletter add, whatever the workspace has wired up."
  - src: "/projects/pocketops/money.png"
    caption: "Payments collected today, this week, and this month, synced in from Square."
  - src: "/projects/pocketops/subscribers.png"
    caption: "Recurring revenue at a glance: active, pending, and inactive subscribers by platform."
  - src: "/projects/pocketops/settings.png"
    caption: "Multiple environments on one phone. Point it at any self-hosted Twenty and the app reshapes itself."
---

Twenty is an open source CRM you can run on your own server. I run several of them: my own business CRM, plus one for each customer I build for. The gap was always the phone. There was no good mobile client for self-hosted Twenty, so I built one, and in August 2026 it shipped to the [App Store](https://apps.apple.com/us/app/pocketops-for-twenty/id6801201669) and [Google Play](https://play.google.com/store/apps/details?id=com.quickitprojects.pocketops).

PocketOps connects directly to your Twenty instance. Your server, your API key, no middleman, and no data collection. Nothing about your business passes through anything I own.

## Work your day from a phone

The Today screen pulls the day together: appointments, tasks due and overdue, pipeline moves, and money collected, with a morning brief written from the actual state of the CRM. Below that it is a full client: browse and search people, companies, and deals with server-side search that stays fast on thousands of records, create and edit records, and fire the workflows the workspace already has, like sending a welcome email from a client's record with one tap.

## It adapts to any workspace, not just mine

This was the hard part and the point. Twenty lets every business define its own objects, fields, and views. A tattoo studio has procedures and artists; a consultancy has projects and invoices. PocketOps does not hardcode any of that. It reads the workspace's own schema at connect time, discovers custom objects and relations, mirrors saved views as filter chips, and builds its create and edit forms from what the server says it will accept. Point it at a different Twenty and you get a different app.

## AI with a leash

There is a chat tab where you can ask the CRM questions in plain language: what's overdue, what moved in the pipeline, prep me for this meeting. Anything that would change data stops first at an approval card showing exactly what it is about to do. Reading is free, writing asks permission.

## The other half: I build the CRM too

The app is one end of a service. On the other end I set up the whole system for small businesses: a Twenty instance on its own server, the schema shaped to how the business actually works, automated workflows for things like welcome and aftercare emails, Square payments syncing in every half hour, the website booking form writing straight into the CRM, and separate dashboards for the owner and the staff. The first production deployment runs a permanent makeup studio: bookings come in from the website, deposits go out through Square checkout links, and aftercare instructions email themselves per service. The owner runs it from her phone with this app.

If you run a small business and want a CRM you actually own, that is exactly the kind of project I take on. [Get in touch](/contact).

## Built without a Mac

A fun one for the builders: this is a React Native app built and shipped to Apple's App Store entirely from a Windows machine using Expo's cloud build service. No Mac was involved at any point, including the screenshots.
