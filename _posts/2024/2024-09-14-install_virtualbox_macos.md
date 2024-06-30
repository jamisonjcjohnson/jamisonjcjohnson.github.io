---
title: How to Install VirtualBox on macOS
layout: post
date: '2024-06-30'
description: VirtualBox is a widely-used, cross-platform virtualization software that allows you to create and manage virtual machines (VMs) on your Mac.
intro: "We will guide you through the process of installing VirtualBox on macOS, ensuring you have everything set up for your virtualization needs."
lang: en_US
image: "/static/assets/img/blog/2024/install_virtualbox_macos/install_virtualbox_macos.jpg"
keywords: macos,virtualbox,hypervisor
categories:
- Macos
tags:
- macos
- virtualbox
- hypervisor
icon: fa-apple
---

VirtualBox is a widely-used, cross-platform virtualization software that allows you to create and manage virtual machines (VMs) on your Mac. Running different operating systems simultaneously, VirtualBox is perfect for software testing, development, and running applications in isolated environments. In this blog post, we will guide you through the process of installing VirtualBox on macOS, ensuring you have everything set up for your virtualization needs.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

Before we start, ensure you have:
- A Mac with a 64-bit processor
- Running macOS 10.11 or higher, as of June 2024.

<br>

## Downloading VirtualBox

1. **Visit the VirtualBox Download Page**: Open your web browser and go to the [VirtualBox download page](https://www.virtualbox.org/wiki/Downloads).
2. **Select the Correct Package**: Download the latest available version for your macOS. Ensure you choose the package based on your CPU (Intel or ARM64).

<br>

## Installing VirtualBox

1. **Open the Downloaded File**: The downloaded file will be stored in your Downloads folder. Locate and open the VirtualBox .dmg file.

2. **Start the Installation Process**: Double-click on `VirtualBox.pkg` to begin the installation process.

3. **Follow the Installation Wizard**:
   - Click the `Continue` button on the installation wizard.
   - You can change the installation location by clicking `Change Install Location`. To proceed with the default location, simply click `Install`.

4. **Authorize the Installation**: Enter your admin credentials to authorize the installation and click `Install Software`.

5. **Installation Complete**: On successful installation, the VirtualBox launcher will now be in your Applications folder.

<br>

## Installing VirtualBox Extension Pack

The VirtualBox Extension Pack provides additional features such as support for USB 2.0 and 3.0 devices, webcam access, and VirtualBox Remote Desktop Protocol (VRDP).

1. **Download the Extension Pack**: Visit the [VirtualBox Extension Pack download page](https://www.virtualbox.org/wiki/Downloads) and download the extension pack version matching your VirtualBox version.

2. **Install the Extension Pack**:
   - Open Terminal and run the following command (replace the file name with the actual downloaded file name):
     ```bash
     sudo VBoxManage extpack install ~/Downloads/Oracle_VM_VirtualBox_Extension_Pack.vbox-extpack
     ```
   - Press `Y` to accept the license terms and complete the installation.
   - On successful installation, you will see the message: `Successfully installed "Oracle VM VirtualBox Extension Pack"`.

### Note:
If you receive an error while trying to install the extension pack via the terminal, make sure you give the terminal the necessary permissions:
1. Go to `System Settings` > `Privacy & Security`.
2. Click the `+` (plus sign), then add and enable Terminal.

<br>

## Conclusion

Once VirtualBox is installed, you can create a new virtual machine by clicking the `New` button and following the steps to set up your new machine. Make sure to select the correct operating system version during the setup. This step-by-step guide should help you install VirtualBox on your macOS system smoothly. 

<br>

📝 For more information about the VirtualBox installation on MacOS, review [these alternate instructions](https://www.virtualbox.org/wiki/Mac%20OS%20X%20build%20instructions).
