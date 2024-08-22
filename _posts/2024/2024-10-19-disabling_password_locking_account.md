---
title: Securing SSH Access - Disabling Password Authentication vs. Locking User Accounts
layout: post
date: '2024-10-19'
description: When it comes to securing SSH access on a Linux system, two effective methods are disabling password authentication and locking user accounts.
intro: "When it comes to securing SSH access on a Linux system, two effective methods are disabling password authentication and locking user accounts." 
lang: en_US
image: "/static/assets/img/blog/2024/disabling_password_locking_account/disabling_password_locking_account.jpg"
keywords: linux,security,ssh,authentication
categories:
- Linux
tags:
- linux
- security
- ssh
- authentication
icon: fa-linux
---

When it comes to securing SSH access on a Linux system, two effective methods are disabling password authentication and locking user accounts. Each approach offers distinct advantages and considerations. In this blog post, we'll break down both methods to help you choose the best option for your security needs.

<br>

* TOC 
{:toc}

<br>

## Disabling Password Authentication

### Pros

- **Increased Security**: By setting `PasswordAuthentication no` in your SSH configuration, you ensure that only key-based authentication is allowed. This significantly reduces the risk of brute force attacks and password guessing attacks, as there are no passwords to be exploited.
- **Compliance**: Many security policies and best practices mandate disabling password authentication to meet stricter security standards. Key-based authentication is considered more secure and is often required for compliance.

<br>

### Cons

- **Initial Setup Required**: Before disabling password authentication, you must ensure that all users have their SSH keys set up properly. Failure to do so may lock out legitimate users who rely on password authentication.
- **Recovery Challenges**: If you lose access to your SSH keys or forget them, you may face difficulties regaining access to the server. Physical access or a recovery method will be necessary to restore access.

<br>

### Details

To disable password authentication, follow these steps:

1. **Edit the SSH Configuration File**:

    ```bash
    sudo nano /etc/ssh/sshd_config
    ```

    Locate the `PasswordAuthentication` directive and set it to `no`:

    ```bash
    PasswordAuthentication no
    ```

2. **Reload SSHD**:

    After making the change, reload or restart the SSH service for the changes to take effect:

    ```bash
    sudo systemctl reload sshd
    ```

    or

    ```bash
    sudo systemctl restart sshd
    ```

<br>

## Locking User Accounts

### Pros

- **User Account Control**: Locking a user account prevents that user from logging in, regardless of the authentication method. This is useful for temporarily or permanently disabling an account.
- **Granular Control**: This method provides more fine-grained control over individual user accounts and their login abilities.

<br>

### Cons

- **Not SSH Specific**: Locking the user account affects **ALL** types of login, not just SSH. If your goal is solely to restrict SSH access, this method might be overkill.
- **Requires User Management**: Each user account needs to be managed individually. This can be cumbersome if you need to manage multiple users.

<br>

### Details

To lock a user account:

1. **Disable Password and Account Expiry**:

    Set the account to expire immediately and disable password aging using `chage`:

    ```bash
    sudo chage -I -1 -M -1 -E -1 USERNAME
    ```

2. **Lock the User Account**:

    Use `usermod` to lock the account, preventing login:

    ```bash
    sudo usermod -L USERNAME
    ```

3. **Reversing Changes**:

    To unlock the user, you can use `usermod -U USERNAME` and adjust password expiry settings with `chage`.

<br>

## Conclusion

- **Disabling Password Authentication**: This method focuses on securing SSH access by enforcing key-based authentication, which enhances security against password-based attacks. It is often the preferred choice for SSH-specific security.

- **Locking User Accounts**: This approach restricts login for specific users regardless of the authentication method, offering broader account management. It is useful for managing user access more comprehensively.

Choosing between these methods depends on your specific security requirements and administrative preferences. For a targeted approach to securing SSH, disabling password authentication is generally recommended. For more comprehensive user management, account locking may be more suitable.


<br>

📝 For more information about the `usermod` and `chage` commands described above, review the [usermod](https://linux.die.net/man/8/usermod) and the [chage](https://linux.die.net/man/1/chage) man pages .
