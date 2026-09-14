---
title: Reverse engineering my stereo
date: 2026-09-14
description: I bought a Stinger HORIZON12 for my Jeep and wanted it to actually be mine. Here is how I used AI to reverse engineer a locked Android head unit, what fought me, and what turned out to be the fun part.
kicker: Build log, the Jeep
tags: [android, jeep, hardware, reverse-engineering, ai]
featured: true
draft: true
cover: /blog/stereo/horizon-on-dash.jpg
coverAlt: My Horizon launcher running on the Stinger HORIZON12 in the Jeep
---

<!-- video slot: YouTube embed goes here when the walkthrough is cut. Swap the cover for it. -->

I purchased the Stinger HORIZON12 for my Jeep. It's neat. Twelve-inch screen, runs Android, looks like a tablet glued to the dash. Anyways, I wanted it to really be mine, with my own look and feel. Here's how AI helped me reverse engineer it.

The catch: it's a locked box. No developer options, no ADB, no way to install anything the manufacturer didn't put there. I wanted my own home screen on it. That turned into a month of the stereo saying no.

## What I actually wanted

Not much, on paper. A launcher I designed, showing what the truck is doing, that still hands off to the real apps when I tap them. Media plays the SD card, the 4x4 tile opens the vehicle app, the camera tile opens the reverse cam. A clock, a Jeep cutout, a dock. The stock UI is fine. I just wanted mine.

![The stock Stinger quick launch menu, a white grid of colored squares](/blog/stereo/stock-quick-launch.jpg)
*The stock quick launch. Works fine. Not mine.*

## The attack

It started with one question to ChatGPT: "What OS do we think the Stinger radio runs on?"

It knew me.

> Assuming we're talking about one of the current Stinger infotainment radios, HEIGH10+/HORIZON10/etc., I'd put money on embedded Android underneath, with Stinger's custom launcher/UI locked over it.
>
> But you, Dustin, aren't really asking me "what OS does my radio run?"
> You're asking me: "How do we break this fucking thing open and make it ours?" 😂

Yes. Yes I was.

## The plan

Download a firmware update, reverse engineer it with Claude, tweak it, add my own backdoor, and get inside. It's Android. Once you understand it, it's just making an app, right?

Mostly right. Stinger ships real updates as a zip on a USB stick, and the unit trusts them because they're signed. Turns out the signing key they check against is a public one, so I could sign my own. I took their actual update, left their flash script alone byte for byte, and added one step at the end: install my launcher and open a network ADB port. Same menu, same USB stick, same progress bar the dealer would see.

The one detail that mattered: this unit is system-as-root, so the system partition mounts somewhere different than every forum post assumes. Every generic "copy the APK into /system" script writes to a path that doesn't exist on this box. Once that clicked, it just worked.

![Android recovery log on the stereo showing the Horizon inject step failing to mount /system](/blog/stereo/recovery-mount-fail.jpg)
*The moment it clicked. Stinger's whole update runs clean, then my one added step dies on "mount /system: No such volume." There is no /system on this thing.*

## Issues

Running Claude on my desktop and my laptop at the same time gave me two conflicting plans and two sets of thoughts, and at one point I was breaking a firmware version my radio wasn't even running yet. Half the headaches cleared once I just did the update first, then the break.

Keeping the backdoor open. It drops on every little tweak and reboot.

Making my app take over the entire screen, not just a reskin of the existing menus.

Sitting in my car for hours on a mobile hotspot with a USB-to-Ethernet dongle plugged into the dash.

![The back of the head unit pulled out of the dash, harness and USB ports exposed](/blog/stereo/behind-the-dash.jpg)
*Dash apart, again. The USB ports back there are where the Ethernet dongle lives now.*

## The fun part

Finding out how much networking was involved. Opening port 5555, plugging Ethernet into a car stereo, nmap scans, running DHCP for a radio. All fun shit.

Designing the way I wanted it to look and reiterating a dozen times until it felt right.

Just knowing I can do it.

## Side quest

I thought I was going to have to go in through the UART port, so I bought the gear for it. Then I decided not to destroy a two thousand dollar radio. I'm still going to play with that idea on other hardware. I'm excited to open my mind to that level of engineering and physical programming.

![The main board inside the head unit with the serial header exposed](/blog/stereo/board-serial-header.jpg)
*Cracked it open far enough to find the header. Then put it back together.*

## Where it stands

Horizon is a selectable home app on the dash now. Clock is live, dock launches the real apps, the Jeep cutout is mine. Next is live vehicle data on the screen and the rest of the design screens.

Man, what else can I reverse engineer.

---

## Appendix: the Android stuff I had to learn

I'm a network guy. Before this I had never opened an Android firmware image or built an APK. Here's the short version of what I picked up, in case you're standing where I was a month ago.

![The System Information screen on the stereo showing Android 9, Telechips build strings and PAC integration](/blog/stereo/system-information.jpg)
*Android 9 on a Telechips chip, with the PAC integration for the Jeep's steering wheel and climate stuff. This screen told me more than Stinger's website did.*

**A firmware update is just a zip.** That's it. Stinger's wrapper has a bootloader image, a system image, and an inner `update.zip`. The file that actually does the work is `META-INF/com/google/android/updater-script`. It's a plain text script. Read it before you touch anything, because it tells you exactly what the manufacturer's update does and in what order. I spent a while being scared of that zip. I didn't need to be.

**Signing is the whole gate.** Recovery checks the zip against a certificate baked into the recovery image. On this unit that cert is the AOSP test key, which is public, so anyone can sign with `signapk` and the radio will happily eat it. My advice: figure out the cert first. If it's a real private key you're done before you start. If it's the test key, everything else is just work.

**System-as-root got me.** Newer Android builds don't have a separate `/system` partition anymore. The whole system image mounts at `/system_root` and `/system` lives inside it. So every script on every forum that says "mount /system and copy the APK" fails here with "No such volume," which is the photo up above. The real path is `/system_root/system/...`. That one line cost me the most time in this whole project.

**Where apps live.** `/system/app/` for normal preinstalled apps, `/system/priv-app/` for ones that need privileged permissions. I dropped my signed APK in `/system/app/Horizon.apk` and on the next boot it was a system app like everything else Stinger shipped.

**A launcher is just an app.** The only thing that makes it a home screen is the main activity declaring `android.intent.category.HOME` and `DEFAULT`. Android then lists it when you pick a home app. The difference between "taking over the entire screen" and "reskinning the stock menus" is the difference between being the HOME activity and being an overlay on top of theirs. I wanted HOME.

**The backdoor is one line.** `service.adb.tcp.port=5555` in `build.prop` and ADB listens on the network at boot. No USB device mode needed, which is good because this unit doesn't have one. Get the radio an IP (USB-to-Ethernet dongle, my laptop running DHCP), then `adb connect <ip>:5555` and `adb install -r Horizon.apk`. That took app updates from an eight minute reflash to a few seconds. Worth every hour it took to get it open.

**What can and can't brick it.** Installing an app into the system image can't. Reflashing the bootloader can. I keep the original firmware archived and I never re-run the bootloader step. Out of warranty, own risk, all that. Don't do this on a radio you can't afford to replace.
