---
title: "Media Stack"
summary: "A self-hosted media platform: Plex plus the full *arr automation stack and a request portal, so the whole library runs hands-off."
status: "Live"
order: 13
tags: ["Self-hosted", "Automation"]
stack: ["Plex", "Sonarr", "Radarr", "Jellyseerr", "Docker", "VPN"]
image: "/projects/media-stack/hero.png"
---

The Media Stack started as a joke. I'd become the unofficial movie guy for friends and family, and I got tired of manually hunting down, downloading, and organizing whatever they asked for. So I automated the whole thing.

Now people request what they want through a portal, and the system handles the rest: it searches for the title, grabs it through a download client, the *arr apps sort and rename it into the library, and Plex refreshes so it's ready to watch. No step in the middle needs me.

## Why it mattered

On the surface it's a media server. Under the hood it was one of my earliest real automation projects, and it taught the fundamentals I lean on everywhere now: connecting services into one pipeline, managing the dependencies between them, troubleshooting failures across systems, and building something that runs without a babysitter. A lot of what I later applied to AI automation started here.

## Reliability

Once it's configured, it mostly runs itself. Requests come in, downloads happen, the library updates, and people watch, all in the background. It breaks once in a while, and when it does the culprit is almost always connectivity or the VPN, not the apps. That's the real lesson of automation: building it is the easy part, building it so it keeps working when you stop paying attention is the job.
