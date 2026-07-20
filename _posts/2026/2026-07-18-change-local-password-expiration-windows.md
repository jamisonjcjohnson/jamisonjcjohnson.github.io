---
title: Change Local Password Expiration in Windows
layout: post
date: '2026-07-18'
description: Learn how to enable, disable, and verify password expiration for local Windows user accounts.
intro: "Windows allows administrators to control whether a local user password expires and how long passwords remain valid. In this blog post, we will change password expiration settings for individual local accounts and the computer's overall password policy."
lang: en_US
image: "/static/assets/img/blog/2026/change-local-password-expiration-windows/change-local-password-expiration-windows.jpg"
keywords: Windows password expiration, local user password, password never expires, Set-LocalUser, net accounts
categories:
- Windows
tags:
- windows
- local-users
- passwords
- powershell
icon: fa-windows
---

Windows local accounts can be configured so their passwords expire according to the computer's password policy or never expire.

These settings apply to local accounts stored on the computer. Domain accounts are normally controlled through Active Directory and Group Policy.

In this blog post, we will change password expiration settings for individual local accounts and the computer's overall password policy.

<br>

* TOC
{:toc}

<br>

## Use Local Users and Groups

Open the Run dialog and enter:

**lusrmgr.msc**

Then:

- Select **Users**.
- Double-click the local account.
- Select or clear **Password never expires**.
- Select **Apply**.
- Select **OK**.

Selecting **Password never expires** prevents that account's password from expiring.

Clearing it allows the account to follow the computer's maximum password age policy.

If the Local Users and Groups console is unavailable, use PowerShell instead.

<br>

## Change Expiration with PowerShell

Open PowerShell as Administrator.

Prevent a specific local user's password from expiring:

**Set-LocalUser -Name "username" -PasswordNeverExpires $true**

Re-enable password expiration:

**Set-LocalUser -Name "username" -PasswordNeverExpires $false**

Replace `username` with the actual local account name.

Verify the setting:

**Get-LocalUser -Name "username" | Select-Object Name, PasswordExpires**

A blank `PasswordExpires` value normally indicates that the password is configured not to expire.

<br>

## Change the Maximum Password Age

Use the following command to review the computer's current local password policy:

**net accounts**

Set local account passwords to expire after 90 days:

**net accounts /maxpwage:90**

Disable the system-wide maximum password age:

**net accounts /maxpwage:unlimited**

The maximum password age applies to local accounts that are not individually configured with **Password never expires**.

<br>

## Important Considerations

Before disabling password expiration:

- Confirm that organizational security policies allow it.
- Use a long and unique password or passphrase.
- Protect administrative accounts carefully.
- Avoid sharing local account credentials.
- Review local accounts regularly.
- Disable accounts that are no longer required.

Password expiration and account expiration are separate settings. Disabling password expiration does not prevent the local user account itself from being disabled or assigned an account expiration date.

<br>

## Conclusion

Windows provides graphical and command-line methods for managing local password expiration.

Use **Set-LocalUser** to control expiration for a specific account and **net accounts** to configure the maximum password age for the computer. Verify organizational security requirements before setting passwords to never expire, particularly for privileged local accounts.

<br>

## Additional Resources

- [Microsoft Set-LocalUser Documentation](https://learn.microsoft.com/powershell/module/microsoft.powershell.localaccounts/set-localuser)
- [Microsoft Net Accounts Documentation](https://learn.microsoft.com/troubleshoot/windows-server/networking/net-commands-on-operating-systems)
- [Microsoft Net User Documentation](https://learn.microsoft.com/windows-server/administration/windows-commands/net-user)