---
title: Zero-Typing SSH on macOS — Connect Using Only Hostnames
layout: post
date: '2025-10-25'
description: Learn how to configure macOS so typing just a hostname automatically opens an SSH session with proper agent forwarding and security controls.
intro: "If you SSH all day, even typing 'ssh -A' starts to feel like friction. With a small zsh tweak and proper SSH configuration, you can connect by typing just the hostname — fast, clean, and secure."
lang: en_US
image: "/static/assets/img/blog/2025/zero-typing-ssh/zero-typing-ssh.jpg"
keywords: ssh,macos,zsh,agent forwarding,system administration,productivity
categories:
- Linux
- macOS
tags:
- ssh
- zsh
- productivity
- sysadmin
icon: fa-terminal
---

If you manage servers all day, SSH becomes muscle memory. But even muscle memory has friction — typing **ssh -A hostname** hundreds of times per week adds up. Fortunately, macOS and zsh give us a clean, elegant way to eliminate that overhead entirely.

In this blog post, we will configure your Mac so typing **only the hostname** automatically initiates an SSH session, while still maintaining strict control over SSH agent forwarding.

<br>

* TOC 
{:toc}

<br>

## The Goal

Instead of typing:

**ssh -A server1**

You simply type:

**server1**

…and you are immediately connected via SSH.

No aliases. No wrappers. No bad habits.

<br>

## Why This Is Not Built Into SSH

SSH itself is just a command-line tool. It executes only when explicitly called. Your shell (zsh on modern macOS) is responsible for deciding what happens when you type a word and press Enter.

By default, zsh follows this logic:

- If the word matches a command in your PATH, it executes it
- If it does not, zsh throws a "command not found" error

We are going to intercept that failure case and reinterpret it as:

> "This is probably a hostname — initiate SSH."

<br>

## Step 1: Configure Agent Forwarding the Right Way

Before automating anything, we define *where* SSH agent forwarding is allowed. This ensures speed without sacrificing security.

Edit your SSH configuration:

**vi ~/.ssh/config**

Add the following:

**Host server1 server2 server3** <br>
ForwardAgent yes

This setup enforces:

- Agent forwarding disabled by default
- Explicit opt-in for trusted hosts
- Compatibility with bastions, jump hosts, Git, Ansible, and scp

<br>

## Step 2: Teach zsh to Auto-SSH Unknown Commands

Now we configure zsh to treat unknown commands as SSH targets.

Edit your shell configuration:

**vi ~/.zshrc**

Add the following function:

```
ssh() {
  command ssh -A "$@"
}

function command_not_found_handler() {
  command ssh -A "$1"
}
```

Reload your shell:

**source ~/.zshrc**

<br>

## How It Works Behind the Scenes

When you type:

**server1**

zsh attempts to locate a command named `server1`.

- No executable is found
- zsh invokes `command_not_found_handler`
- The handler runs **ssh server1**
- SSH applies per-host configuration from `~/.ssh/config`

The result is a seamless SSH experience with zero extra typing.

<br>

## Verifying Agent Forwarding

Once connected, verify forwarding with:

**ssh-add -l**

- Keys listed: forwarding active
- Authentication agent error: forwarding disabled

This validation is critical when working across multiple trust boundaries.

<br>

## Why This Setup Is Ideal for Administrators

- Zero keystroke overhead
- No fragile shell aliases
- Security-first defaults
- Works cleanly with jump hosts
- Scales across laptops and long-lived admin environments

This approach balances speed and discipline — exactly what experienced administrators need.

<br>

## Final Thoughts

This is a small change that delivers an outsized productivity gain. Once your muscle memory adapts to typing only hostnames, it becomes difficult to imagine going back.

By combining zsh’s extensibility with SSH’s configuration model, you get a fast, elegant, and secure workflow — one that scales with both your environment and your responsibilities.

