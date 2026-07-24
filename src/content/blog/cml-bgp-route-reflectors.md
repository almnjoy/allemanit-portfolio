---
title: CML, BGP route reflectors, and a clean lab
date: 2026-07-18
description: Spinning a fresh Cisco Modeling Labs topology to sanity-check a route-reflector design before it touches anything real.
kicker: Build log · networking
tags: [networking, cml, bgp, labs]
---

Ten years in networking and I still lab a design before I trust it. That habit has saved me more times than any certification.

This week it was route reflectors. I stood up a fresh Cisco Modeling Labs topology, two RRs with a full iBGP mesh underneath, and watched the routes converge the way the whiteboard said they would. Then I broke a link on purpose to see the failover behave.

## Why lab it when you "know" it works

Because "know" is doing a lot of work in that sentence. The design is only as good as the assumptions baked into it, and a lab surfaces the assumption you didn't know you made. Cheap to find here. Expensive to find in change control at 2am.

CML makes this fast enough that there's no excuse. Clone a topology, tweak it, wipe it, start over. The lab is the cheapest insurance in the building.
