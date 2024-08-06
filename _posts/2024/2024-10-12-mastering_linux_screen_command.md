---
title: Mastering the `screen` Command in Linux
layout: post
date: '2024-08-06'
description: The `screen` command in Linux is a terminal multiplexer that allows you to manage multiple terminal sessions from a single window.
intro: "The `screen` command enables you to create, manage, and navigate between multiple terminal sessions within a single window." 
lang: en_US
image: "/static/assets/img/blog/2024/mastering_linux_screen_command/mastering_linux_screen_command.jpg"
keywords: linux,terminal
categories:
- Linux
tags:
- linux
- terminal
icon: fa-linux
---

The `screen` command in Linux is a terminal multiplexer that allows you to manage multiple terminal sessions from a single window. This powerful utility provides the ability to detach and reattach terminal sessions, making it invaluable for long-running processes, remote work, and multitasking on the command line.

<br>

* TOC 
{:toc}

<br>

## Overview of the `screen` Command

The `screen` command enables you to create, manage, and navigate between multiple terminal sessions within a single window. Each session runs independently, and you can detach from a session and reattach later without interrupting the running processes.

<br>

### Basic Syntax

The basic syntax of the `screen` command is:

```bash
screen [options] [command]
```

**Options**: Various options to control the behavior of screen.
**Command**: Optional command to run within the screen session.

<br>

## Installing screen

Before using the screen command, ensure that it is installed on your system. On most Linux distributions, you can install it using the package manager.

For Red Hat-based systems (RHEL, Fedora, CentOS), use:

```bash
sudo dnf install screen
```

## Common Use Cases

### Starting a New Screen Session

To start a new screen session, simply type:

```bash
screen
```

This will open a new screen session, and you will be placed in a new shell.

### Detaching from a Session

To detach from the current screen session without terminating it, press `Ctrl-A` followed by `Ctrl-D`. You will be returned to the original terminal, and the screen session will continue running in the background.

### Reattaching to a Session

To reattach to a previously detached screen session, use the `-r` option:

```bash
screen -r
```

If you have multiple detached sessions, you can list them with:

```bash
screen -ls
```

Then, reattach to a specific session by its ID:

```bash
screen -r <session_id>
```

### Naming Screen Sessions

To make it easier to manage multiple sessions, you can name them using the `-S` option:

```bash
screen -S mysession
```

You can then reattach to this session by name:

```bash
screen -r mysession
```

### Splitting the Screen
The `screen` command allows you to split the terminal window into multiple regions. To split the screen horizontally, press `Ctrl-A` followed by `S`. To split it vertically, press `Ctrl-A` followed by `|`.

To switch between regions, press `Ctrl-A` followed by `Tab`.

### Creating Windows

You can create multiple windows within a screen session. To create a new window, press `Ctrl-A` followed by `C`. To switch between windows, press `Ctrl-A` followed by the window number (e.g., 0, 1, 2, etc.).

### Closing a Window

To close the current window, simply exit the shell within that window by typing `exit`.


## Example Usage
Here are some practical examples of using the screen command:

**Start a new named screen session:**

```bash
screen -S mysession
```

**Detach from the session:**

Press `Ctrl-A` followed by `D`.

**Reattach to the named session:**

```bash
screen -r mysession
```

**Split the screen horizontally and create a new window:**

Press `Ctrl-A` followed by `S`, then `Ctrl-A` followed by `C`.

**Switch between windows:**

Press `Ctrl-A` followed by the window number.

<br>

## Conclusion

The `screen` command is a versatile tool that enhances your command-line productivity by allowing you to manage multiple terminal sessions within a single window. Whether you need to run long-term processes, work remotely, or multitask efficiently, mastering the `screen` command can greatly improve your Linux experience. By learning how to create, detach, reattach, and manage screen sessions, you can take full advantage of this powerful utility.

<br>

📝 For more information about the `screen` command, review the [screen man page](https://linux.die.net/man/1/screen).
