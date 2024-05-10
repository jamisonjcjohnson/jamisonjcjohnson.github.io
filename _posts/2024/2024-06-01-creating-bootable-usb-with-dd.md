---
title: Creating a Bootable USB Drive with dd Command on MacOS
layout: post
date: '2024-06-01'
description: We'll walk you through the process step by step using the `dd` command on MacOS.
intro: "By following the steps outlined in this guide, you can confidently create bootable USB drives from ISO files with ease."
lang: en_US
image: "/static/assets/img/blog/2024/creating-bootable-usb-with-dd/creating-bootable-usb-with-dd.jpg"
keywords: terminal,linux,macos
categories:
- Macos
tags:
- terminal
- linux
- macos
icon: fa-apple
---

If you need to create a bootable USB drive from an ISO file on your macOS system, you're in the right place. In this guide, we'll walk you through the process step by step using the `dd` command on MacOS. This method is commonly used on Unix-like systems like macOS to create bootable USB drives.

<br>

* TOC 
{:toc}

<br>

## Preparing the USB Drive

Before we start, ensure you have the following:

- The ISO file of the operating system you want to create a bootable USB drive for.
- A USB drive with sufficient storage capacity.
- Access to a macOS system.

Now, let's dive into the process:

<br>

### 1. Verify the USB Device Path

First, you need to identify the path to your USB device. Open Terminal and use the `diskutil` command to list all disks:

```bash
diskutil list
```

Look for your USB device in the list, usually listed as /dev/disk#.

<br>

### 2. Unmount the USB Device

Once you've identified the USB device path, unmount it using the following command (replace disk# with your USB device number):

```bash
diskutil unmountDisk /dev/disk#
```

<br>

### 3. Create the Disk Image

Navigate to the directory containing the ISO file in Terminal. Then, use the dd command to create the disk image. Replace `rhel-9.4-x86_64-boot.iso` with the name of your ISO file, and `/dev/rdisk#` with your USB device path:

```bash
sudo dd bs=1m if=rhel-9.4-x86_64-boot.iso of=/dev/rdisk#
```

**Note:** Ensure you replace `/dev/rdisk#` with the correct path to your USB device. You can verify this using the `diskutil list` command.

<br>

### 4. Eject the USB Device
After the `dd` command completes, eject the USB device using either of the following methods:

Using the `diskutil` command:

```bash
diskutil eject /dev/disk#
```

Or, you may be presented with a GUI prompt to safely eject the USB device once the dd command has finished.

That's it! Your bootable USB drive is now ready for use. You can use it to install or boot into the operating system from any compatible device.

<br>

## Conclusion

Creating a bootable USB drive on macOS using the dd command is a reliable method for preparing installation media or bootable disks, but remember to double-check the device paths to avoid accidental data loss. By following the steps outlined in this guide, you can confidently create bootable USB drives from ISO files with ease. Remember to verify the USB device path and exercise caution when using the dd command to avoid any unintended data loss. With this knowledge, you're ready to tackle any bootable USB drive creation task efficiently.

<br>

📝 For more information about the `dd` command, you can refer to the [dd man page](https://linux.die.net/man/1/dd).




