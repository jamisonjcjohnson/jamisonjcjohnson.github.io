---
title: Adding Active Directory Computer Accounts
layout: post
date: '2023-11-25'
description: In Active Directory management, adding computer accounts is essential for proper network organization.
intro: "This guide demonstrates two methods for adding Active Directory computer accounts: using the GUI (Graphical User Interface) and PowerShell commands."
lang: en_US
image: "/static/assets/img/blog/2023/adding_active_directory_computer_accounts/install_ad_ds0.png"
keywords: windows,active_directory,account_management
categories:
- Windows
tags:
- windows
- active_directory
- account_management
icon: fa-windows
---


In Active Directory management, adding computer accounts is essential for proper network organization. This guide demonstrates two methods for adding Active Directory computer accounts: using the GUI (Graphical User Interface) and PowerShell commands.

<br>

* TOC 
{:toc}

<br>

## Add Active Directory Computer Account via GUI

Launch `Active Directory Users and Computers`

Right click on your `Computers` on the left tree and select `New` then `Computer`

![add_computer_gui0](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_gui0.png)

Input any computer name, this example was `JPCserver`, then click `OK`

![add_computer_gui1](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_gui1.png)

The new computer has now been added to the `Computers` group

<br>

## Add Active Directory Computer Account via PowerShell

Launch PowerShell as admin

Show the current list of AD computers

```powershell
Get-ADComputer -Filter * | Format-Table DistinguishedName
```

![add_computer_powershell0](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_powershell0.png)

Add a new computer called `JPCserver2`

```powershell
New-ADComputer -Name JPCserver2
```

![add_computer_powershell1](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_powershell1.png)

Verify the newly added computer

```powershell
Get-ADComputer -Filter * | Format-Table DistinguishedName
```

![add_computer_powershell2](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_powershell2.png)


Deleting computer accounts


```powershell
Remove-ADComputer -Identity “CN=JPCserver2,CN=Computers,DC=srv,DC=world”
```

- Choose `yes` when prompted.

![add_computer_powershell3](/static/assets/img/blog/2023/adding_active_directory_computer_accounts/add_computer_powershell3.png)


## Conclusion

Adding computer accounts to your Active Directory is a fundamental task for maintaining an organized and efficient network environment. The choice between the GUI and PowerShell methods depends on your specific needs.

The GUI provides simplicity and ease of use for single or occasional additions. PowerShell is ideal for managing large numbers of computer accounts or automation.

By using these methods, you can effectively manage and maintain your computer accounts in Active Directory, ensuring your network operates smoothly and efficiently!