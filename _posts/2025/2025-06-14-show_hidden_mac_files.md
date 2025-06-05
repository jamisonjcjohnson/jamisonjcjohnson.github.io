---
title: How to Show Hidden Files on a Mac
layout: post
date: '2025-06-01'
description: Hidden files on your Mac contain the nuts and bolts necessary for running macOS—think system settings, configuration files, and cache storage.
intro: "In this blog post, we will show you three effective ways to reveal hidden files on your Mac safely." 
lang: en_US
image: "/static/assets/img/blog/2025/show_hidden_mac_files/show_hidden_mac_files.jpg"
keywords: macos,terminal
categories:
- Macos
tags:
- macos
- terminal
icon: fa-apple
---

Hidden files on your Mac contain the nuts and bolts necessary for running macOS—think system settings, configuration files, and cache storage. These files are intentionally concealed to prevent users from accidentally deleting or altering something critical. But there are times you *do* need to access them—like when troubleshooting, cleaning up disk space, or customizing system behavior.

In this blog post, we will show you three effective ways to reveal hidden files on your Mac safely.

<br>

* TOC 
{:toc}

<br>

## Method 1: Use Finder

The simplest way to access hidden files is through the Finder. Here’s how:

1. Click the **Finder** icon in your dock to open a Finder window.
2. Navigate to the folder where you want to see hidden files.
3. Press **Command + Shift + .** (period key).

Hidden files will immediately become visible. To hide them again, press **Command + Shift + .** once more. This shortcut also works on the Desktop.

<br>

## Method 2: Use Terminal

For those comfortable with the command line, Terminal gives you deeper control.

1. Open **Terminal** using Spotlight (press **Command + Space** and type "Terminal") or go to **Applications > Utilities > Terminal**.
2. To show hidden files, type the following and press **Enter**:

   **`defaults write com.apple.Finder AppleShowAllFiles true`**

3. Then restart Finder with this command:

   **`killall Finder`**

You’ll now see hidden files system-wide.

**To hide them again**, repeat the above steps but use `false` instead of `true` in Step 2:

**`defaults write com.apple.Finder AppleShowAllFiles false`**

<br>

## Method 3: Use Third-Party Software

If you're a power user or frequently need to reveal hidden files, consider one of these tools:

### [Funter](https://nektony.com/funter)

Funter is a lightweight tool designed for one task: toggling hidden files. Great for quickly viewing and hiding files without using Terminal commands.

### [ForkLift](https://binarynights.com) *(Paid - $20 Lifetime)* 

Forklift is a full-fledged file manager with support for cloud storage, syncing, and hidden file toggling. If you manage lots of files or need extra capabilities, this tool’s worth considering.

<br>

## Why Are Files Hidden in macOS?

Hidden files exist for your protection. macOS hides configuration and system-level files to prevent users from tampering with them. Deleting or modifying these files can cause serious performance issues or make your system unstable.

Think of it like storing cleaning chemicals on a high shelf—necessary, but not something you want mishandled.

<br>

## How to Hide Files on a Mac

Whether you're trying to clean up your desktop or conceal sensitive files, you can also *hide* files yourself.

1. Open **Terminal**.
2. Use the following command:

   **`chflags hidden`**

3. Then drag the file or folder you want to hide into the Terminal window. Press **Enter**.

To *unhide* the file, use:

**`chflags nohidden`**

Again, drag the hidden file into Terminal and hit **Enter**. The file will reappear.

<br>

## Conclusion

Revealing hidden files on a Mac can be useful—but it should be done carefully. Whether you use Finder, Terminal, or a third-party app, be sure you understand what you're doing before modifying anything.

Most importantly: if you don't recognize a file, **leave it alone.**