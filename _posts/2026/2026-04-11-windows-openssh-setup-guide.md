---
title: Windows OpenSSH SSHD Setup Guide
layout: post
date: '2026-04-11'
description: Learn how to install, configure, and secure the built-in OpenSSH Server (SSHD) on Windows 10, Windows 11, and Windows Server.
intro: "Microsoft now includes OpenSSH as an optional Windows feature, making it easy to remotely administer Windows systems using the industry-standard SSH protocol. Whether you're managing a workstation, server, or homelab, enabling SSH provides a secure and efficient alternative to Remote Desktop for command-line administration. In this blog post, we will walk through installing, configuring, and securing the Windows OpenSSH SSHD service."
lang: en_US
image: "/static/assets/img/blog/2026/windows-openssh-setup-guide/windows-openssh-setup-guide.png"
keywords: windows ssh, openssh, sshd, windows server, powershell, remote administration, ssh server
categories:
- Windows
- SysAdmin
tags:
- windows
- openssh
- ssh
- sshd
- powershell
- remote-access
icon: fa-terminal
---

Microsoft has made remote administration significantly easier by including **OpenSSH Server** as an optional Windows feature. Instead of relying solely on Remote Desktop Protocol (RDP), administrators can securely manage Windows systems over SSH using PowerShell, Command Prompt, or even Windows Subsystem for Linux (WSL).

SSH is also compatible with virtually every Linux, macOS, and networking platform, making it an excellent choice for mixed operating system environments.

In this blog post, we will walk through installing, configuring, and securing the Windows OpenSSH SSHD service.

<br>

* TOC
{:toc}

<br>

## Why Use OpenSSH on Windows?

OpenSSH provides a secure encrypted channel for remote administration.

Benefits include:

- Secure remote PowerShell sessions
- Remote Command Prompt access
- File transfers using SCP or SFTP
- Cross-platform administration
- Script automation
- Better firewall compatibility than RDP
- Reduced attack surface compared to exposing Remote Desktop

OpenSSH is included with:

- Windows 10 (1809 and later)
- Windows 11
- Windows Server 2019
- Windows Server 2022
- Windows Server 2025

<br>

## Verify Whether OpenSSH Server Is Installed

Open **PowerShell** as Administrator and run:

**Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH.Server*'**

If installed, you'll see:

```
State : Installed
```

If not installed, continue with the next step.

<br>

## Install OpenSSH Server

Install the Windows capability:

**Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0**

The installation typically completes within a minute.

You can verify installation again with:

**Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH.Server*'**

Official Microsoft documentation:

- [OpenSSH for Windows Overview](https://learn.microsoft.com/windows-server/administration/openssh/openssh-overview)
- [Install OpenSSH Server](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)

<br>

## Start the SSHD Service

Start the service:

**Start-Service sshd**

Configure it to automatically start during boot:

**Set-Service -Name sshd -StartupType Automatic**

Verify its status:

**Get-Service sshd**

Expected output:

```
Status   Name    DisplayName
------   ----    -----------
Running  sshd    OpenSSH SSH Server
```

<br>

## Configure Windows Firewall

Windows normally creates a firewall rule during installation.

Verify it exists:

**Get-NetFirewallRule -Name *ssh***

If necessary, create a new inbound rule:

**New-NetFirewallRule -Name sshd -DisplayName "OpenSSH Server" -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22**

Verify port 22 is listening:

**netstat -ano | findstr :22**

Or:

**Get-NetTCPConnection -LocalPort 22**

<br>

## Test the SSH Connection

From another computer:

**ssh username@hostname**

or

**ssh username@ip-address**

Example:

**ssh administrator@192.168.1.x**

The first connection will prompt you to trust the server's host key.

Once accepted, you'll receive a PowerShell session.

<br>

## Configure the SSHD Configuration File

The primary configuration file is located at:

**C:\ProgramData\ssh\sshd_config**

Common settings administrators modify include:

- Port
- PasswordAuthentication
- PubkeyAuthentication
- PermitRootLogin (not applicable on Windows)
- AllowUsers
- DenyUsers
- AllowGroups

After making changes, restart the service:

**Restart-Service sshd**

Microsoft configuration reference:

- [OpenSSH Configuration Files](https://learn.microsoft.com/windows-server/administration/openssh/openssh-server-configuration)

<br>

## Configure Public Key Authentication

Using SSH keys is significantly more secure than passwords.

Generate a key pair on the client:

**ssh-keygen**

Copy the public key to the Windows server.

For user authentication, place the public key in:

```
C:\Users\<username>\.ssh\authorized_keys
```

Ensure:

- The `.ssh` folder exists.
- File permissions are correct.
- The user owns the file.

Microsoft documentation:

- [OpenSSH Key Management](https://learn.microsoft.com/windows-server/administration/openssh/openssh_keymanagement)

<br>

## Restrict SSH Access

For additional security, consider:

- Disabling password authentication after deploying SSH keys.
- Restricting access to specific users.
- Restricting access to administrator groups.
- Limiting access through Windows Firewall.
- Changing the default SSH port (optional).
- Using VPN access instead of exposing SSH directly to the Internet.

<br>

## Troubleshooting

If SSH isn't working, verify:

- The **sshd** service is running.
- Port 22 is listening.
- Windows Firewall allows inbound TCP/22.
- The client can reach the server over the network.
- The `sshd_config` file contains valid syntax.
- User permissions on `.ssh` and `authorized_keys` are correct.

Useful commands:

**Get-Service sshd**

**Restart-Service sshd**

**Get-NetTCPConnection -LocalPort 22**

**Get-NetFirewallRule -Name *ssh***

<br>

## Final Thoughts

OpenSSH Server has become one of the easiest and most reliable ways to remotely administer Windows systems. Since it is maintained by Microsoft and included with modern Windows releases, there is no longer a need to install third-party SSH servers for most environments.

Whether you're managing a single workstation, a Windows Server, or an enterprise fleet, enabling OpenSSH provides a fast, secure, and cross-platform method for remote administration.

## Additional Resources

- [Microsoft OpenSSH Overview](https://learn.microsoft.com/windows-server/administration/openssh/openssh-overview)
- [Install OpenSSH Server](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)
- [OpenSSH Server Configuration](https://learn.microsoft.com/windows-server/administration/openssh/openssh-server-configuration)
- [OpenSSH Key Management](https://learn.microsoft.com/windows-server/administration/openssh/openssh_keymanagement)
- [OpenSSH GitHub Project](https://github.com/PowerShell/Win32-OpenSSH)