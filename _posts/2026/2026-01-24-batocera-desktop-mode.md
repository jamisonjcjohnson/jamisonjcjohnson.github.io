---
title: How to Add Desktop Mode Using Batocera Add-ons
layout: post
date: '2026-01-17'
description: Learn how to add a full Linux desktop mode to Batocera using the BUA add-on, including install steps, desktop options, and performance tips.
intro: "Batocera is best known as a console-style retro gaming OS, but with the BUA add-on you can unlock a full desktop Linux environment directly on the same system — even on devices like Raspberry Pi."
lang: en_US
image: "/static/assets/img/blog/2026/batocera-desktop-mode/batocera-desktop-mode.jpg"
keywords: batocera,desktop mode,bua,linux desktop,emulation
categories:
- Batocera
tags:
- batocera
- bua
- desktop
- customization
icon: fa-gamepad
---

Batocera is typically used as a dedicated gaming interface, but it can be extended far beyond that. With the **BUA (Batocera Unofficial Add-ons)** project, you can install a full Linux desktop that runs alongside Batocera and shares the same filesystem.

In this blog post, we will walk through what desktop mode is, how to install it using BUA, and why it can dramatically expand what your Batocera system can do.

<br>

* TOC
{:toc}

<br>

## What Is Desktop Mode in Batocera?

Desktop mode adds a traditional Linux desktop environment to Batocera. This allows you to:

- Use a file manager
- Download and extract files locally
- Transfer ROMs without another computer
- Browse the web or watch videos
- Manage Batocera files directly

The desktop and Batocera share access to the same files, making them tightly integrated rather than separate systems.

<br>

## What Is BUA?

BUA is an add-on system developed by community contributors that allows Batocera to install applications and services not included by default.

BUA acts as the framework that makes desktop mode possible.

<br>

## Prerequisites

Before installing desktop mode:

- Ensure Batocera is connected to the internet
- Have sufficient free storage (desktop installs can use up to ~2 GB)
- A keyboard is recommended, at least for installation

<br>

## Installing BUA

To install BUA:

- Press **F1** to open the file manager
- Navigate to **Applications**
- Open **xterm**

If BUA is not already installed, run the installation command provided by the BUA project. Once installation completes, type **exit** to close the terminal.

After installation, BUA becomes available from the file manager.

<br>

## Installing Desktop Mode

To install the desktop environment:

- Open **BUA** from the file manager
- Navigate to **System Utilities → Desktop**
- Start the desktop installation process

You will be prompted to choose:

- A Linux base (Alpine, Ubuntu, Fedora, Arch, or Debian)
- A desktop environment (such as KDE Plasma)

Once confirmed, BUA downloads and installs the selected environment. Install time depends on your internet speed and selected options.

<br>

## Accessing the Desktop

After installation completes:

- Exit BUA
- Return to the Batocera main interface
- Navigate to **Ports**

You will now see a new **Batocera Desktop** entry. Launching it opens the desktop environment.

<br>

## Practical Use Cases

Desktop mode enables several workflows that are difficult in standard Batocera:

- Downloading ROM backups directly to correct folders
- Extracting archives locally
- Editing configuration files
- Managing media and artwork

This can eliminate the need for a second computer entirely.

<br>

## Performance and Resource Tips

On lower-powered systems, desktop mode may impact performance.

If Batocera feels sluggish:

- Open **Main Menu → System Settings → Services**
- Disable the **Docker** service

This temporarily disables desktop mode until re-enabled.

<br>

## Audio and Input Notes

Inside desktop mode:

- Audio may need to be enabled using the desktop volume icon
- Keyboard and mouse provide the best experience

These are normal desktop behaviors rather than Batocera-specific issues.

<br>

## Remote Access to the Desktop

In addition to browser-based access, Batocera desktop mode can be accessed securely and smoothly from another machine using **Tailscale**, **Sunshine**, and **Moonlight**. This setup works well from macOS and allows full remote control of the Batocera GUI.

<br>

## Remote Access Setup (Mac + Tailscale + Sunshine)

### 1. Install and Approve Tailscale

- Install Tailscale on Batocera (already completed using your existing script)
- In the Tailscale admin console, approve Batocera as a device
- From your Mac, verify connectivity:

**ping 192.168.1.x**

**ping 100.x.y.z**

This confirms both LAN and Tailscale connectivity.

<br>

### 2. Install Sunshine on Batocera

- Open a terminal in Batocera (press **F1**, then open a terminal)
- Download the Sunshine AppImage:

**curl -L -o /userdata/system/sunshine.AppImage https://github.com/LizardByte/Sunshine/releases/download/v2025.122.141614/sunshine.AppImage**

- Make it executable:

**chmod +x /userdata/system/sunshine.AppImage**

- Start Sunshine:

**/userdata/system/sunshine.AppImage > /var/log/sunshine.log 2>&1 &**

- Open the Sunshine Web UI in a browser:

**https://192.168.1.x:47990**

or

**https://100.x.y.z:47990**

- Accept the security warning and set a username and password
- If pairing issues occur, use **WebUI → Troubleshooting → Force Close & Restart**

<br>

### 3. Pair Moonlight on macOS

- Install Moonlight for macOS
- Open Moonlight and add a new PC manually
- Use Batocera’s LAN IP or Tailscale IP
- Moonlight displays a PIN
- Log into the Sunshine Web UI and enter the PIN to approve pairing

<br>

### 4. Control Batocera Remotely

Once paired:

- Batocera appears as a streaming target in Moonlight
- Launch it to control the Batocera frontend remotely
- Keyboard, mouse, and controller inputs are forwarded in real time

<br>

### 5. Practical Tips

- Exit Moonlight cleanly with **CTRL + ALT + Shift + Q**
- To auto-start Sunshine at boot, add this line to **/userdata/system/custom.sh**:

**/userdata/system/sunshine.AppImage > /var/log/sunshine.log 2>&1 &**

- View Sunshine logs with:

**tail -f /var/log/sunshine.log**

- Always use a strong Sunshine password, especially when accessible over Tailscale

<br>


## Final Thoughts

Desktop mode transforms Batocera from a dedicated gaming appliance into a flexible, all-in-one system. With BUA handling the heavy lifting, the setup is surprisingly accessible and integrates cleanly with existing Batocera workflows.

If you frequently manage files, downloads, or configurations, desktop mode is one of the most powerful Batocera enhancements available.

