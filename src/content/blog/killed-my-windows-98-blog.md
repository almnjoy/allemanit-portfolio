---
title: I built an AI pipeline to feed my old blog. Then I killed the blog.
date: 2026-07-24
description: almnjoy.dev ran raw notes through n8n and a GPT step into a Windows 98 WordPress theme. Here is what that pipeline taught me, and the markdown-and-git setup that quietly replaced it.
kicker: Meta · the pipeline
tags: [meta, ai, n8n, homelab, web]
featured: true
# Drop a cover image in public/blog/ and uncomment these two lines.
# cover: /blog/old-almnjoy-win98.jpg
# coverAlt: The old almnjoy.dev blog dressed up as Windows 98
---

The old almnjoy.dev was a WordPress site cosplaying as Windows 98. Cute for a week. But behind that costume was something I was actually proud of: a little pipeline that took my raw notes, wherever they came from, and turned them into a review-ready draft without me babysitting it.

I wanted blogging to stop feeling like work. Not the writing, the friction. The copy-paste, the formatting, the rewriting a thought five times until it reads clean. So I built a thing that ate rough ideas and spit out drafts, and it worked well enough that it made me want to write more. Then I turned around and killed the whole front end of it anyway. Here is why.

<!-- photo spot: screenshot of the old Windows 98 themed almnjoy.dev -->

## What the old pipeline actually did

Everything ran on a local Ubuntu box, just tools I already used stitched together properly.

I had a React portal with a "Blogger Intake" page. I typed a title and messy notes, bullet points or freestyle, and hit submit. That wrote a markdown file into a vault folder acting as a content database. A webhook kicked n8n, which grabbed the newest file, tidied it, and moved it into a Drafts folder over WebDAV. Then n8n called a Python script that read the markdown, sent it to GPT-4o-mini with my tone rules, and wrote the polished version into a Ready folder. A publisher step converted the markdown to HTML, handled categories and tags, and pushed it into WordPress as a draft over the REST API. Last, a Discord ping with the title and a link so I knew it was ready.

Idea to draft in about two minutes. The initial nudge came from a NetworkChuck video, and setting the whole thing up was genuinely fun.

The AI part was never magic. It was cleanup. I gave it a tone guide built from how I actually write: no em dashes, say the point first then explain, real tools but sanitize the private stuff, call out the problem before the solution, skip corporate wording, end on something useful. It got me eighty to ninety percent there and I reviewed the rest.

## The parts that fought me

This was not smooth, and that is where most of the learning lived.

Filenames were the sneaky one. The portal, n8n, and the vault each had slightly different ideas about naming, and those small mismatches caused more grief than any of the real logic. Hostinger's builder could not do what I wanted, which is what pushed me to WordPress in the first place. And WordPress wants HTML while the AI speaks markdown, so I bolted on a conversion step that only existed because of where the words were going.

That last one is the tell. A whole step in the pipeline existed to serve the destination, not the writing.

## Why I killed it

A themed WordPress install is a hobby that pretends to be a website. Plugins to patch, a theme to babysit, a database to back up, and a login I forgot half the time. The Win98 novelty wore off long before the upkeep did.

The pipeline was the good part. WordPress was the tax. So I kept the idea and threw out the destination.

<!-- photo spot: the n8n flow, or the old portal intake page -->

## What replaced it

This blog is now a content collection in the same repo as the rest of allemanit.com. A post is a markdown file. I commit it, the host builds it, it is live. No dashboard. No update-nag. No markdown-to-HTML step, because markdown is the native format now instead of a thing I translate out of.

I kept what was worth keeping. The tone rules carried straight over. The idea-to-draft flow still runs, it just lands in git instead of a WordPress draft. The Discord ping is still there when something is ready to look at.

And it is more operational than the old one ever was. It is wired into the daily engine, so a weekly post can get drafted from the actual week of work instead of a blank page. Cover images flow through a simple public folder. The whole thing is versioned like everything else I build, and it deploys itself when I push.

## The thing I actually learned

The tax was never the writing. It was the destination. The old pipeline spent real effort formatting plain text into a system that demanded HTML, plugins, and care. The new one writes the plain text and gets out of the way.

Make the thing publish, then delete everything standing between you and hitting save.
