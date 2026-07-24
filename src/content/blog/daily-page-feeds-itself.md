---
title: My /daily page runs on feeds I own now
date: 2026-07-24
description: Wiring the /daily dashboard to self-hosted n8n feeds, standing up a daily-log store on worker2, and why browser agents keep beating the official APIs.
kicker: Build log - the week
tags: [n8n, automation, homelab, web]
featured: false
---

For a while the /daily page was a nice-looking lie. It looked like a living dashboard, but half the tiles were hand-fed. If I wanted the "building now" note to be current, I had to go edit it. That is not a dashboard, that is a chore with better CSS.

So this week I made it actually pull its own strings.

## Standing up a store the page can read

The first real piece was a daily-log store on worker2. Small thing, one endpoint, but it changes how everything downstream works. Instead of the page holding the data, the page just asks for it. I post a note once, tag it, and it lands in the store. The /daily page reads from there and renders whatever is newest.

That means the "building now" tile is no longer me remembering to update a string. The engine posts into the store, the page reads it, done. I write a log line from wherever I am and the site catches up on its own.

The nice part is that the same store feeds more than one surface. The public feed on the site and the notes I jot for myself are the same data, tagged differently. builds, thoughts, whatever. One source, many views. I have rebuilt that pattern too many times the hard way to not appreciate it when it finally clicks.

## Wiring the rest of the tiles to n8n

With the store working, I pointed the other tiles at live n8n feeds. The Signal news tile pulls world news, cached once a day so I am not hammering anything and not paying for calls I do not need. The Watching tile tracks a few YouTube channels live. Listening links out to /music.

None of this is fancy. It is a handful of n8n workflows doing fetch, shape, cache, serve. But the effect is that the page is honest now. What it shows is what is actually happening, not a snapshot from whenever I last remembered to touch it.

The daily-caching call matters more than it looks. World news does not change second to second, and treating it like it does just burns rate limit and makes the page slower for no reason. Cache the stuff that moves slowly, keep live only the stuff that actually moves. Obvious once you say it out loud, easy to forget when you are excited to make something "real time."

## The thing I actually learned

Here is the note I keep coming back to from this week: browser-driving agents are more reliable than the official social APIs for indie posting.

That sounds backwards. The API is the "right" way. But the right way keeps moving the goalposts. Auth changes, review processes, endpoints that get deprecated or gated behind a plan, permissions that assume you are a company with a compliance team. For one person shipping one post, an agent that drives the actual site the way I would is less brittle than fighting the API that is supposedly built for it.

I am not saying that is elegant. It is not. But it works, it keeps working, and it does not fall over the next time some platform reshuffles its developer program. For a solo build, "keeps working" wins over "correct on paper" almost every time.

## Why I even do this

Honest answer, and it came up in my notes this week too: I build this stuff because it is fun. Not every project has to earn its keep on a spreadsheet. The /daily rework does not make me a dollar. It just makes the site feel alive and it scratched an itch I had about owning my own feeds instead of renting them from someone else.

Somewhere along the way I stopped forcing every idea to justify itself, and building got fun again. The projects I do just because I want to are usually the ones that end up mattering anyway.

Make the thing. See what happens.
