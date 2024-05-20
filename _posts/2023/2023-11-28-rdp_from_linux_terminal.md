---
title: Connect to a Remote Windows System from Linux Terminal using xfreerdp
layout: post
date: '2023-11-28'
description: In this tutorial, we will show you how to use the xfreerdp package to establish a remote desktop connection to a Windows machine from your Linux terminal.
intro: "Using the xfreerdp package, you can easily connect to a remote Windows system from your Linux terminal. This is a convenient way to manage Windows machines when you're primarily working in a Linux environment."
lang: en_US
image: "/static/assets/img/blog/2023/rdp_from_linux_terminal/rdp_from_linux_terminal1.jpg"
keywords: rhel,linux,centos,rdp,terminal
categories:
- Linux
tags:
- rhel
- linux
- centos
- rdp
- terminal
icon: fa-linux
---


Are you a Linux user who needs to access a remote Windows system from your command line? Look no further! In this tutorial, we will show you how to use the xfreerdp package to establish a remote desktop connection to a Windows machine from your Linux terminal.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

Before we get started, you'll need to make sure you have the following:

- A Linux system with xfreerdp installed.
- Credentials for the Windows machine you want to connect to.
- A working internet connection.

<br>

## Install xfreerdp

Run the following command : 

```bash
yum install freerdp
```

Press `Y` and then `Enter` to allow the installation to complete. 

![rdp_from_linux_terminal2](/static/assets/img/blog/2023/rdp_from_linux_terminal/rdp_from_linux_terminal2.png)

<br>

## Steps to Connect to a Remote Windows System

Now, let's dive into the steps for connecting to a remote Windows system from your Linux command line.

1. Open your terminal.
2. Use the `xfreerdp` command with the following syntax:

```bash
xfreerdp /u:<username> /v:<remote_windows_ip_or_hostname>
```

Replace `username` with your Windows username and `remote_windows_ip_or_hostname` with the IP address or hostname of the remote Windows machine. **For example:**

```bash
xfreerdp /u:user1 /v:192.168.1.113
```

After entering the command, you will be prompted to enter your Windows password. Provide your password and press `Enter`.

You may be prompted to `trust the above certificate` press `Y` then `Enter`

If the credentials are correct, you will be connected to the remote Windows machine, and the Windows desktop will appear within your Linux terminal.

![rdp_from_linux_terminal3](/static/assets/img/blog/2023/rdp_from_linux_terminal/rdp_from_linux_terminal3.png)

<br>

## Additional Options

You can customize your connection by adding various options to the xfreerdp command. Some common options include:

- /f: Full-screen mode.
- /multimon: Multi-monitor support.
- /audio-mode: Audio playback options.
- /sec: Set the security level.

For a complete list of options, you can refer to the xfreerdp documentation or use the `man xfreerdp` command.

<br>

## Disconnecting from the Remote Windows System

To disconnect from the remote Windows system, you can use the following key combination:

`Ctrl + Alt + Enter` : This will toggle between full-screen and windowed modes.

`Ctrl + Alt + Delete` : This will open the Windows Security dialog, where you can lock the remote machine or log out.

<br>

## Conclusion

Using the xfreerdp package, you can easily connect to a remote Windows system from your Linux terminal. This is a convenient way to manage Windows machines when you're primarily working in a Linux environment. With the right credentials and a few simple commands, you can access the remote Windows desktop seamlessly.

<br>

📝 For more information about xfreerdp, visit the [xfreerdp man page](https://linux.die.net/man/1/xfreerdp)