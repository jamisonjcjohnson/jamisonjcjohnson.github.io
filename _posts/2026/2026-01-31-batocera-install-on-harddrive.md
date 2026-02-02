---
title: How to Install Batocera on a Hard Drive
layout: post
date: '2026-01-31'
description: Learn how to install Batocera directly to an internal SSD/HDD or an external hard drive using Batocera’s built-in installer.
intro: "Many people start Batocera from a USB flash drive, but for better performance and long-term use, installing Batocera to an internal or external hard drive is the preferred approach. Batocera includes a built-in installer that makes this process simple and reliable."
lang: en_US
image: "/static/assets/img/blog/2026/batocera-install-on-harddrive/batocera-install-on-harddrive.jpg"
keywords: batocera,install batocera,ssd,hdd,external drive,emulation
categories:
- Batocera
tags:
- batocera
- installation
- storage
- howto
icon: fa-gamepad
---

Running Batocera from a USB flash drive is great for testing, but installing it to a dedicated hard drive or SSD offers better performance, more storage, and a cleaner setup.

In this blog post, we will walk through how to install Batocera to an **internal drive or external hard drive** using Batocera’s built-in installer — without dual-booting or modifying an existing operating system.

<br>

* TOC
{:toc}

<br>

## Important Notes Before You Start

This guide assumes:

- You are installing Batocera to a **clean drive**
- The target drive does **not** contain another operating system
- You are **not** dual-booting or multi-booting

Installing Batocera will **erase the target drive completely**.

<br>

## Choosing a Drive

Batocera works well on many types of storage:

- Internal HDDs (mechanical drives)
- Internal SSDs (recommended)
- External USB hard drives or SSDs

A 240 GB to 500 GB drive is more than sufficient for most setups, but larger drives can be used if supported by your system.

<br>

## Booting into Batocera

To install Batocera to another drive, you must first boot into Batocera itself.

- Flash Batocera to a USB drive (temporary boot media)
- Boot your system from that USB drive
- Ensure the system is connected to the internet (Ethernet or Wi-Fi)

An internet connection is required because Batocera downloads the installer image during the process.

<br>

## Installing Batocera to a New Drive

Once Batocera is running:

- Press **Start** on your controller
- Go to **System Settings**
- Scroll to the bottom and select **Install Batocera – New Disk**

Configure the installer options:

- **Target Device**: Select the drive you want to install Batocera to
- **Target Architecture**: Match your system (for example, x86_64 for most PCs)
- **Validation**: Set to **Yes, I’m sure**

Double-check the selected drive before proceeding.

Select **Install** to begin the process. Batocera will download and write everything to the target disk.

<br>

## Completing the Installation

When installation finishes:

- Press **OK** at the completion prompt
- Shut down the system
- Remove the USB drive you originally booted from

<br>

## Booting from the Installed Drive

After removing the USB drive:

- Power on the system
- Enter your BIOS or UEFI boot menu if necessary
- Set the newly installed drive as the primary boot device

The first boot may take longer than usual. Subsequent boots will be faster.

<br>

## External Drive Alternative

If you prefer:

- You can install Batocera to an **external USB hard drive or SSD**
- The steps are identical — simply select the external drive as the target device

This is a good option if you want a portable Batocera setup that can move between systems.

<br>

## Final Thoughts

Installing Batocera to a dedicated hard drive or SSD is one of the best upgrades you can make. It improves performance, increases storage capacity, and removes the limitations of running from a USB flash drive.

As long as you verify the target disk before installing, Batocera’s built-in installer makes the process straightforward and safe.

