---

title: Hide Windows User Accounts from the Login Screen
layout: post
date: '2026-03-28'
description: Learn how to hide specific local Windows user accounts from the Windows 10 and Windows 11 sign-in screen without disabling or deleting the account.
intro: "Windows automatically displays local user accounts on the sign-in screen, which isn't always desirable. Whether you've created a local administrator account, a service account, or simply want a cleaner login experience, you can hide individual users while keeping the accounts fully functional. In this blog post, we will walk through how to hide Windows user accounts from the login screen using the Windows Registry."
lang: en_US
image: "/static/assets/img/blog/2026/hide-windows-users-account-login-screen/hide-windows-users-account-login-screen.jpg"
keywords: windows, windows 11, windows 10, login screen, hide user, registry, local user, administrator
categories:
- Windows
tags:
- windows
- registry
- security
- users
icon: fa-user-secret

---

Windows displays all enabled local user accounts on the sign-in screen by default. While this behavior is convenient for most home users, it can clutter the login screen or expose service and administrator accounts that should remain hidden.

Fortunately, Windows provides a simple registry-based method to hide specific accounts without disabling them or affecting their functionality.

In this blog post, we will walk through how to hide individual Windows user accounts from the login screen.

<br>

* TOC
{:toc}

<br>

## Why Hide a User Account?

Hiding an account is useful in several situations:

- Hide local administrator accounts
- Hide service accounts
- Reduce clutter on shared computers
- Improve security by not advertising privileged accounts
- Keep administrative accounts available for remote management while hiding them from casual users

The account continues to function normally—you can still log in manually, use Remote Desktop, run scheduled tasks, or access network resources.

<br>

## Before You Begin

You'll need:

- Administrative privileges
- Registry Editor (`regedit`)
- The exact username of the account you want to hide

It is also recommended to create a System Restore Point before modifying the Windows Registry.

<br>

## Step 1: Open Registry Editor

Press **Win + R**, type:

**regedit**

Then press **Enter**.

<br>

## Step 2: Browse to the Winlogon Key

Navigate to:

**HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon**

If the following keys do not already exist, create them:

- SpecialAccounts
- UserList

Your final path should be:

**HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList**

This registry location is the supported method commonly used to hide individual local user accounts from the sign-in screen.

<br>

## Step 3: Create the User Entry

Inside the **UserList** key:

- Right-click
- Select **New → DWORD (32-bit) Value**
- Name the DWORD exactly the same as the Windows username you want to hide

For example:

- Administrator
- BackupAdmin
- ServiceAccount

The name must exactly match the local account name.

<br>

## Step 4: Set the Value

Double-click the new DWORD and set its value to:

**0**

A value of:

- **0** = Hide the account
- **1** = Show the account

No other registry changes are required.

<br>

## Step 5: Restart Windows

Restart the computer.

After rebooting, the specified account will no longer appear on the Windows login screen.

The account itself still exists and remains fully functional.

<br>

## Restoring the Account

If you later decide to show the account again, simply:

- Change the DWORD value to **1**
- Or delete the DWORD entirely

Restart Windows and the account will once again appear on the sign-in screen.

<br>

## Things to Keep in Mind

Hiding an account does **not**:

- Delete the account
- Disable the account
- Remove permissions
- Prevent remote logins
- Affect scheduled tasks or services

It only removes the account from the graphical sign-in screen.

<br>

## Final Thoughts

Hiding user accounts is a simple way to keep the Windows login screen clean while reducing the visibility of administrative or service accounts. Because the underlying account remains active, this technique works well for system administrators who need dedicated management accounts without exposing them to everyday users.

For additional information, Microsoft's community guidance and other Windows administration resources describe the same registry-based approach for hiding individual local user accounts.

### Additional Resources

- [Microsoft Learn - Remove a User Account from the Windows Logon Screen](https://learn.microsoft.com/en-us/answers/questions/1281830/how-to-remove-user-account-from-windows-logon-scre)
- [Microsoft Windows IT Pro Documentation (GitHub)](https://github.com/MicrosoftDocs/windows-itpro-docs)
- [Microsoft Learn - Windows Documentation](https://learn.microsoft.com/windows/)