---
title: How to Add Custom Background Music
layout: post
date: '2026-01-17'
description: Learn how to add and enable custom background music in Batocera so your menu experience plays the audio you want.
intro: "Batocera allows you to customize nearly every part of the interface — including the background music that plays while browsing menus. With just a few files and a simple setting change, you can replace or add your own music to the Batocera menu system."
lang: en_US
image: "/static/assets/img/blog/2026/batocera-adding-music/batocera-adding-music.jpg"
keywords: batocera,background music,custom music,emulation,customization
categories:
- Batocera
tags:
- batocera
- customization
- music
- howto
icon: fa-gamepad
---

Batocera’s menu system (EmulationStation) supports background music playback, giving you the ability to personalize the atmosphere of your retro setup.

In this blog post, we will walk through how to **add custom background music** and enable it within Batocera.

<br>

* TOC
{:toc}

<br>

## Preparing Your Music Files

Before copying files, make sure your music is in a supported format.

Commonly supported formats include:

- `.mp3`
- `.ogg`
- `.flac`

If your music is in another format, converting it beforehand helps avoid playback issues.

<br>

## Accessing Batocera’s Share Folder

You can add music to Batocera in two common ways.

### From Another Computer (Recommended)

Batocera exposes a network share.

- On Windows: **\\BATOCERA\share**
- On macOS or Linux: **smb://batocera/share** or **smb://<Batocera-IP>/share**

Once connected, browse to the music directory.

<br>

### From Batocera via SSH or Terminal

If accessing locally or over SSH, the music directory is located at:

**/userdata/music/**

<br>

## Placing Your Music Files

Copy your music files into:

**/userdata/music/**

Batocera will automatically scan this directory for playable music files.

<br>

## Enabling Background Music in Batocera

After adding your music:

- Press **Start**
- Go to **Sound Settings**
- Set **Enable Background Music** to **ON**

You can also adjust the **Music Volume** from this menu to balance it with system sounds.

<br>

## Restarting EmulationStation

For the new music to take effect:

- Restart EmulationStation
- Or reboot Batocera

Once restarted, your custom music will begin playing while browsing menus.

<br>

## Final Thoughts

Adding custom background music is a simple way to make your Batocera setup feel more personal. Whether you prefer arcade ambience, chiptunes, or something completely different, Batocera makes it easy to tailor the experience.

Because music files live in the userdata directory, they persist across updates and system changes, making this customization safe and low-maintenance.

