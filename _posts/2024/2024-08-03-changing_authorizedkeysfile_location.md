---
title: Changing the Default Location of the AuthorizedKeysFile
layout: post
date: '2024-06-07'
description: Changing the default location of the AuthorizedKeysFile can significantly enhance the security of your SSH setup by making it more difficult for attackers to locate and manipulate the file.
intro: "This blog post will explain how to change the default location of the `AuthorizedKeysFile` and why doing so can enhance the security of your server."
lang: en_US
image: "/static/assets/img/blog/2024/changing_authorizedkeysfile_location/changing_authorizedkeysfile_location.jpg"
keywords: linux,rhel,security,monitoring
categories:
- Linux
tags:
- linux
- rhel
- security
- monitoring
icon: fa-linux
---


## Introduction

In SSH (Secure Shell) configurations, the `AuthorizedKeysFile` is a critical file that specifies the location of public keys used for user authentication. By default, this file is located in the user's home directory under `.ssh/authorized_keys`. However, for security reasons, you might want to change the default location of this file. This blog post will explain how to change the default location of the `AuthorizedKeysFile` and why doing so can enhance the security of your server.

<br>

## Why Change the Default Location?

The default location of the `AuthorizedKeysFile` is widely known, which can be a potential security risk. Attackers who gain access to a user's home directory can easily locate and tamper with the `.ssh/authorized_keys` file. Changing the location of this file can obscure its presence, adding an additional layer of security. Here are some key reasons to consider changing the default location:

1. **Obfuscation**: By moving the `AuthorizedKeysFile`, you make it harder for an attacker to find and manipulate it.
2. **Custom Security Policies**: In environments with strict security policies, placing the `AuthorizedKeysFile` in a more secure or less obvious location can help comply with those policies.
3. **Centralized Management**: On systems with multiple users, it might be beneficial to store all `AuthorizedKeysFile` entries in a central location for easier management and monitoring.

<br>

## Steps to Change the Default Location

<br>

### 1. Edit the SSH Daemon Configuration

First, you need to edit the SSH daemon configuration file, typically located at `/etc/ssh/sshd_config`.

```bash
sudo nano /etc/ssh/sshd_config
```

<br>

### 2. Modify the AuthorizedKeysFile Directive
Locate the AuthorizedKeysFile directive in the configuration file. By default, it looks like this:

```bash
#AuthorizedKeysFile .ssh/authorized_keys
```

Uncomment the line and change the path to your desired location. For example:

```bash
AuthorizedKeysFile /etc/ssh/keys/%u/authorized_keys
```

In this example, `%u` is a placeholder for the username. This configuration stores each user's authorized keys in a separate directory under `/etc/ssh/keys/`.

<br>

### 3. Create the New Directory Structure
Create the new directory structure and set appropriate permissions. For example:

```bash
sudo mkdir -p /etc/ssh/keys
sudo mkdir -p /etc/ssh/keys/yourusername
sudo chown yourusername:yourusername /etc/ssh/keys/yourusername
sudo chmod 700 /etc/ssh/keys/yourusername
```

<br>

### 4. Move Existing Authorized Keys
Move the existing authorized_keys file to the new location:

```bash
sudo mv /home/yourusername/.ssh/authorized_keys /etc/ssh/keys/yourusername/
sudo chown yourusername:yourusername /etc/ssh/keys/yourusername/authorized_keys
sudo chmod 600 /etc/ssh/keys/yourusername/authorized_keys
```

<br>

### 5. Restart the SSH Service
Finally, restart the SSH service to apply the changes:

```bash
sudo systemctl restart sshd
```

<br>

### 6. Verify the Configuration
Test the configuration by attempting to log in with SSH to ensure that the new AuthorizedKeysFile location is being used correctly.

<br>

## Conclusion

Changing the default location of the AuthorizedKeysFile can significantly enhance the security of your SSH setup by making it more difficult for attackers to locate and manipulate the file. This simple change, combined with other security best practices, can help protect your server from unauthorized access. Implement this strategy to add an extra layer of security to your SSH configuration and reduce the risk of compromise.

By taking proactive steps to secure your authentication files, you can maintain a robust security posture and safeguard your server from potential threats.
