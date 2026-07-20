---
title: Add Multiple SSH Keys to Your Profile
layout: post
date: '2026-06-27'
description: Learn how to add multiple SSH keys to your local user profile and configure OpenSSH to use the correct key for each server or service.
intro: "Using a separate SSH key for different servers, organizations, or Git accounts can improve security and simplify access management. OpenSSH supports multiple private keys through the local `.ssh` directory, SSH agent, and client configuration file. In this blog post, we will add multiple SSH keys to a local user profile and configure SSH to select the correct key for each connection."
lang: en_US
image: "/static/assets/img/blog/2026/add-multiple-ssh-keys-to-profile/add-multiple-ssh-keys-to-profile.jpg"
keywords: multiple SSH keys, SSH config, ssh-agent, ssh-add, IdentityFile, OpenSSH, local user profile
categories:
- Linux
- Windows
- Macos
tags:
- linux
- ssh
- openssh
- ssh-keys
icon: fa-key
---

OpenSSH stores user-specific keys and configuration inside the `.ssh` directory in the user's home folder.

Common locations include:

- Linux and macOS: `~/.ssh`
- Windows: `%USERPROFILE%\.ssh`

Multiple private keys can be stored in this directory and assigned to specific servers through the SSH client configuration file.

In this blog post, we will add multiple SSH keys to a local user profile and configure SSH to select the correct key for each connection.

<br>

* TOC
{:toc}

<br>

## Review Existing SSH Keys

List the existing files in your SSH directory:

**ls -la ~/.ssh**

Common key files include:

- `id_ed25519`
- `id_ed25519.pub`
- `id_rsa`
- `id_rsa.pub`
- `config`
- `known_hosts`

Files ending in `.pub` are public keys. Files without `.pub` are private keys and should never be shared.

<br>

## Generate an Additional SSH Key

Generate a separate Ed25519 key with a descriptive filename:

**ssh-keygen -t ed25519 -C "work-server" -f ~/.ssh/id_ed25519_work**

Enter a strong passphrase when prompted.

This creates:

- `~/.ssh/id_ed25519_work`
- `~/.ssh/id_ed25519_work.pub`

Use descriptive names such as:

- `id_ed25519_work`
- `id_ed25519_personal`
- `id_ed25519_github`
- `id_ed25519_servername`

<br>

## Set the File Permissions

On Linux or macOS, configure restrictive permissions:

**chmod 700 ~/.ssh**

**chmod 600 ~/.ssh/id_ed25519_work**

**chmod 644 ~/.ssh/id_ed25519_work.pub**

Private keys should only be readable by the local user who owns them.

<br>

## Add the Key to SSH Agent

Start SSH agent when necessary:

**eval "$(ssh-agent -s)"**

Add the new private key:

**ssh-add ~/.ssh/id_ed25519_work**

Display the currently loaded keys:

**ssh-add -l**

Remove a specific key with:

**ssh-add -d ~/.ssh/id_ed25519_work**

<br>

## Configure the SSH Client

Create or edit the local SSH configuration file:

**vi ~/.ssh/config**

Add a separate host entry for each key:

```text
Host work-server
    HostName server.example.com
    User admin
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes

Host personal-server
    HostName personal.example.com
    User jamison
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

Set the configuration file permissions:

**chmod 600 ~/.ssh/config**

The important settings are:

- `Host` creates a local connection alias.
- `HostName` specifies the actual server address.
- `User` specifies the remote username.
- `IdentityFile` specifies the private key.
- `IdentitiesOnly yes` prevents SSH from trying unrelated keys loaded in SSH agent.

<br>

## Connect Using the Host Alias

After creating the configuration, connect using the alias:

**ssh work-server**

OpenSSH automatically uses the hostname, username, and private key defined for that alias.

You can still specify a private key manually:

**ssh -i ~/.ssh/id_ed25519_work admin@server.example.com**

The SSH configuration file is more convenient for frequently accessed systems.

<br>

## Configure SSH Agent on Windows

Open PowerShell as Administrator and enable the OpenSSH Authentication Agent:

**Set-Service -Name ssh-agent -StartupType Automatic**

**Start-Service ssh-agent**

Add the private key:

**ssh-add $HOME\.ssh\id_ed25519_work**

List loaded keys:

**ssh-add -l**

The Windows SSH configuration file is stored at:

`%USERPROFILE%\.ssh\config`

It uses the same `Host`, `IdentityFile`, and `IdentitiesOnly` settings as Linux and macOS.

<br>

## Install the Public Key Remotely

The corresponding public key must be added to the remote server or service.

For a Linux server with `ssh-copy-id` available, run:

**ssh-copy-id -i ~/.ssh/id_ed25519_work.pub admin@server.example.com**

The public key is normally added to the remote user's:

`~/.ssh/authorized_keys`

Services such as GitHub, GitLab, Bitbucket, and Gitea provide an account setting where the contents of the `.pub` file can be added.

Never upload or copy the private key.

<br>

## Troubleshooting

Display detailed connection information with:

**ssh -v work-server**

Confirm that the expected key appears after:

`Offering public key`

If SSH tries too many keys or displays **Too many authentication failures**, confirm that the host entry contains:

```text
IdentitiesOnly yes
```

Also verify:

- The correct private key is referenced.
- The public key exists on the remote account.
- The local key permissions are restrictive.
- The remote username is correct.
- SSH agent contains the expected key.
- The `Host` alias matches the connection command.

<br>

## Conclusion

OpenSSH can manage multiple private keys from the same local user profile. Each key should use a descriptive filename and be assigned to the appropriate server through `~/.ssh/config`.

Using `IdentityFile` with `IdentitiesOnly yes` ensures that SSH presents the correct key instead of attempting every identity loaded in SSH agent. This creates a cleaner and more reliable setup for accessing multiple servers, Git accounts, and organizations.

<br>

## Additional Resources

- [OpenSSH SSH Client Configuration](https://man.openbsd.org/ssh_config)
- [OpenSSH ssh-add Documentation](https://man.openbsd.org/ssh-add)
- [Microsoft OpenSSH Key Management](https://learn.microsoft.com/windows-server/administration/openssh/openssh_keymanagement)
- [GitHub Managing Multiple Accounts](https://docs.github.com/account-and-profile/how-tos/account-management/managing-multiple-accounts)