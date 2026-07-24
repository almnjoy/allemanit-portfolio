---
title: Wiring a weekly changelog that posts itself
date: 2026-07-20
description: A claude -p cron reads the week's git log and changelog, writes the update in my voice, and drops it in Discord behind a one-tap approval.
kicker: Build log · automation
tags: [n8n, discord, claude, automation]
---

I got tired of writing the same weekly update three times, once for Discord, once for the newsletter, once for myself. So I stopped.

The fix is a small cron that runs `claude -p` on the production box every Friday. It reads the last seven days of git history plus the top of the changelog, groups the real changes by theme, and writes the update in the same voice I'd use. Lead with what a tester can now *do*, not the feature name. No em dashes. Honest about anything still rough.

Then it posts the draft to a private Discord channel only I can see. I read it, tweak a line if I want, react to approve, and a webhook fans it out. No bot permissions, no role, nothing that can misfire on the public server.

## Why a webhook, not a bot

A Discord webhook can do exactly one thing: post to its one channel. That's the entire attack surface. Compare that to a bot with post and pin and manage permissions sitting on a box that also runs prod. The webhook wins on every axis that matters here.

The chat side, being able to actually talk to the agent in Discord, is a separate layer I'll add later. Posting and conversing are different jobs. Don't fuse them.
