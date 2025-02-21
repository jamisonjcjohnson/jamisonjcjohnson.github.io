---
title: Setting Cygwin as the Default Shell for SSH on Windows Server
layout: post
date: '2025-02-21'
description: Configuring Cygwin properly ensures a more UNIX-like environment for remote management.
intro: "In this post, we will show you a step-by-step process to configure Cygwin as the default shell." 
lang: en_US
image: "/static/assets/img/blog/2025/setting_cygwin_default_shell/setting_cygwin_default_shell.png"
keywords: windows,shell,cygwin
categories:
- Windows
tags:
- windows
- shell
- cygwin
icon: fa-windows
---
If you have **Cygwin** installed on a Windows Server, you may want to use it as the **default terminal** when connecting via SSH. By default, Windows may use **OpenSSH**, but configuring Cygwin properly ensures a more UNIX-like environment for remote management.

In this post, we will show you a step-by-step process to configure Cygwin as the default shell.

<br>

* TOC 
{:toc}

<br>

## 1. Configure `ssh-host-config` in Cygwin

First, navigate to the Cygwin binaries directory and run the SSH host configuration command.

```sh
cd /cygdrive/c/cygwin64/bin
ssh-host-config
```

<br>

## 2. Follow the SSH Configuration Prompts
During the configuration, you will be prompted with several options. Select the following:

- Should privilege separation be used?
   - Yes
- Do you want to install sshd as a service?
   - Yes
- Enter the value of CYGWIN for the daemon: **ntsec**
   - Press Enter (leaving it as the default)

This will configure Cygwin’s OpenSSH daemon **cygsshd** to run as a Windows service.

<br>

## 3. Manage Windows Services
Next, ensure that the correct SSH service is running.

- Open the Windows Services Application **services.msc**.
- Disable the OpenSSH SSH Server service (if installed).
- Ensure that the Cygwin **cygsshd** service is running.
   - This should have been automatically configured during the installation of the OpenSSH package in Cygwin.

<br>


## Final Verification
Once these steps are completed, test SSH access to the server. When you connect, it should launch a Cygwin shell instead of the default Windows command prompt.

<br>

## Conclusion

By configuring Cygwin as the default shell for SSH, you create a **more UNIX-like environment** on your Windows Server, making remote management easier and more consistent for users familiar with Linux-based systems. This setup ensures that **Cygwin’s OpenSSH daemon `cygsshd`** handles incoming SSH connections instead of Windows' built-in OpenSSH service, preventing conflicts and providing access to the full suite of Cygwin tools. 

With this configuration in place, administrators can leverage **Cygwin’s shell, utilities, and scripting capabilities** seamlessly over SSH, improving workflow efficiency and compatibility with Linux-based automation. Always verify that the correct SSH service is running and periodically check for any service disruptions to maintain a smooth experience.


<br>

📝 For more information about Cygwin, please review their official [Cygwin Documentation](https://www.cygwin.com/docs.html).
