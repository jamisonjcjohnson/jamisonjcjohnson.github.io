---
title: TP-Link USB Wi-Fi Adapter Configuration on Ubuntu 24.04 LTS
layout: post
date: '2025-06-18'
description: Getting a TP-Link USB Wi-Fi adapter working on Ubuntu 24.04 LTS isn't always as plug-and-play as you’d hope.
intro: "In this blog post, we’ll walk through installing and configuring drivers for TP-Link Wi-Fi adapters using two reliable GitHub repositories and Ubuntu’s build tools." 
lang: en_US
image: "/static/assets/img/blog/2025/tplink_adapter_configuration_ubuntu/tplink_adapter_configuration_ubuntu.jpg"
keywords: linux,terminal,networking
categories:
- Linux
tags:
- linux
- terminal
- networking
icon: fa-linux
---

Getting a TP-Link USB Wi-Fi adapter working on Ubuntu 24.04 LTS isn't always as plug-and-play as you’d hope. Newer versions of Ubuntu often drop in new kernels faster than driver maintainers can keep up, which means users of Realtek-based adapters (like many TP-Link models) may find themselves temporarily offline.

Fortunately, with the right drivers and a few terminal commands, you can quickly get your wireless adapter operational.

In this blog post, we’ll walk through installing and configuring drivers for TP-Link Wi-Fi adapters using two reliable GitHub repositories and Ubuntu’s build tools.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

Before diving into driver installation, make sure your system is up to date and has the necessary build tools.

**`sudo apt update -y`**

**`sudo apt install build-essential dkms git -y`**

This ensures you have everything needed to compile and install kernel modules.

<br>

## Cloning and Building the Driver

There are two GitHub repositories known to work reliably with TP-Link Wi-Fi adapters using Realtek chipsets.

<br>

### Option 1: [aircrack-ng/rtl8812au](https://github.com/aircrack-ng/rtl8812au.git)

This repository supports many popular adapters and is updated fairly regularly. Run the following commands.

**`git clone https://github.com/aircrack-ng/rtl8812au.git`**

**`cd rtl8812au`**

**`make`**

**`sudo make install`**

**`sudo reboot`**

After rebooting, your Wi-Fi adapter should be recognized and ready for use.

<br>

### Option 2: [morrownr/8821au-20210708](https://github.com/morrownr/8821au-20210708.git)


If you have trouble with the aircrack-ng version or if your chipset is specifically RTL8821AU, this repository is another reliable choice. Run the following commands.

**`git clone https://github.com/morrownr/8821au-20210708.git`**

**`cd 8821au-20210708`**

**`make`**

**`sudo make install`**

**`sudo reboot`**

Again, after rebooting, your adapter should be functional.

<br>

## Verifying the Installation

To confirm that the driver is installed and your adapter is recognized:

- **`ip a`** – Look for a new wireless interface like `wlan0`.
- **`iwconfig`** – Shows wireless interfaces and status.
- **`lsusb`** – Confirms the adapter is being detected at the hardware level.
- **`dmesg | grep usb`** – Useful for troubleshooting if the adapter isn’t working after install.

<br>

## Conclusion

Ubuntu 24.04 LTS continues to push forward with kernel improvements, but that sometimes comes at the cost of breaking compatibility with proprietary or community-supported Wi-Fi drivers. Thankfully, both the **[aircrack-ng](https://github.com/aircrack-ng/rtl8812au.git)** and **[morrownr](https://github.com/morrownr/8821au-20210708.git)** GitHub repositories provide solid driver options for TP-Link USB Wi-Fi adapters.

If you're running into issues with wireless connectivity, these steps should help you get back online quickly—without waiting for an official package or kernel patch.








