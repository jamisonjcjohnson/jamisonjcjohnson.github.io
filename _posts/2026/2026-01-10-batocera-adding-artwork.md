---
title: How to Add Game and Video Art with ScreenScraper
layout: post
date: '2026-01-10'
description: Learn how to scrape box art, screenshots, metadata, and video previews in Batocera using ScreenScraper.
intro: "A fresh Batocera build looks plain until you add box art, screenshots, and video previews. The fastest way to do this is by scraping metadata from an online database like ScreenScraper directly from within Batocera."
lang: en_US
image: "/static/assets/img/blog/2026/batocera-adding-artwork/batocera-adding-artwork.jpg"
keywords: batocera,screenscraper,scrape,box art,video snaps,metadata
categories:
- Batocera
tags:
- batocera
- screenscraper
- emulation
- howto
icon: fa-gamepad
---

Batocera is much more enjoyable when your game lists include artwork, descriptions, and video previews. Without scraping, most systems show only ROM filenames, which makes browsing clunky and unsatisfying.

In this blog post, we will explain what a screen scraper is in Batocera and walk through how to use **ScreenScraper** to automatically add box art, screenshots, metadata, and video previews.

<br>

* TOC
{:toc}

<br>

## What Is a Screen Scraper in Batocera?

In Batocera, a "screen scraper" (often just called a "scraper") is a tool that:

- Scans your game library
- Identifies each game
- Downloads matching metadata and media assets

This typically includes:

- Box art and cover images
- Screenshots
- Game descriptions
- Release dates, genres, and publishers
- Video previews (often called video snaps)

Batocera supports multiple scraping sources. One of the most popular is **ScreenScraper**, a community-driven database that provides high-quality media and metadata.

<br>

## Before You Scrape

Batocera includes a built-in scraper, but for best results you should use **ScreenScraper**, which requires a free account.

### Create a ScreenScraper Account

Before scraping large libraries, create an account:

- Visit: https://www.screenscraper.fr
- Register for a free account
- Note your **username** and **password**

Using an account improves match accuracy and avoids aggressive rate limits.

<br>

## Entering ScreenScraper Credentials in Batocera

To configure your account in Batocera:

- Press **Start**
- Go to **Game Settings**
- Select **Scraper**
- Open **ScreenScraper Account**
- Enter your **username** and **password**
- Save changes

Once saved, Batocera will authenticate to ScreenScraper during scraping.

<br>


## Configuring ScreenScraper Options

With credentials entered, configure how media is scraped.

From **Main Menu → Game Settings → Scraper**, adjust the following:

- **Scraper Source**: ScreenScraper
- **Region**: USA, Europe, Japan, or World (choose what matches your ROM set)
- **Image Style**: Boxart, Mix, Screenshot, Wheel, etc.
- **Video**: Enable if you want video previews
- **Ratio**: Preserve aspect ratio if your theme requires it

These options control what media is downloaded and how it is displayed in your theme.

<br>


## Running the Scraper

You can scrape at different scopes depending on your needs.

### Scraping a Single System

- Highlight the system
- Press **Start**
- Select **Scrape**

This is useful when adding a new console or testing scraper settings.

<br>

### Scraping All Systems

To scrape everything:

- Press **Start**
- Go to **Game Settings → Scraper**
- Select **Scrape Now**

You will be prompted to:

- Overwrite existing media
- Or only fill in missing artwork

Choose carefully to avoid replacing custom artwork.

<br>


## Scraping an Entire System (Recommended)

To scrape all games for a single console/system:

- Press **Start**
- Go to **Game Settings**
- Select **Scraper**
- Choose to scrape the current system

Batocera will:

- Iterate through every ROM in that system
- Download matching images and metadata
- Optionally download video previews

<br>

## Video Art (Video Snaps)

Video previews significantly improve the browsing experience.

When enabled in scraper settings:

- Short gameplay preview videos are downloaded
- Videos play automatically in supported themes

Important considerations:

- Video files consume more storage
- Scraping videos takes longer

If space is limited, scrape images first and add videos later.

<br>


## Fixing Bad Matches

Sometimes scraping matches the wrong game, especially when filenames are messy or regional variants exist.

If a game matches incorrectly:

- Re-scrape that single title
- Choose a different match from the list
- Save the corrected metadata

Taking a minute to fix mismatches makes the library feel polished.

<br>

## Final Thoughts

Scraping is one of the biggest quality-of-life improvements you can make in Batocera. With ScreenScraper, your library transforms from a list of filenames into a clean, visual interface with artwork, descriptions, and video previews.

Once you scrape your systems, browsing becomes faster, more fun, and much more console-like — exactly how a Batocera setup should feel.