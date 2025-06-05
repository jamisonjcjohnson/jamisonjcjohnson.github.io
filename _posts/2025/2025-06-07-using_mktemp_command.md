---
title: Using `mktemp` to Safely Create Temporary Files and Directories
layout: post
date: '2025-06-01'
description: mktemp safely creates unique and secure temoprary files and directories.
intro: "This post reviews the `mktemp` command, how it works, and why it should be your default choice for temporary file handling." 
lang: en_US
image: "/static/assets/img/blog/2025/using_mktemp_command/using_mktemp_command.jpg"
keywords: linux,terminal,scripting
categories:
- Linux
tags:
- linux
- terminal
- scripting
icon: fa-linux
---

Whether you’re writing a shell script or working in the terminal, creating temporary files can be risky if done incorrectly. If multiple processes or users are working in the same directory, name collisions or security risks can arise. That’s where the `mktemp` command comes in — it safely creates **unique, secure** temporary files or directories.

This post reviews the `mktemp` command, how it works, and why it should be your default choice for temporary file handling.

<br>

* TOC 
{:toc}

<br>

## What `mktemp` Does

The `mktemp` command generates a unique temporary filename or directory. It avoids race conditions by ensuring the file or directory does **not already exist**, and it uses secure permissions by default.

It’s especially useful in:

- Shell scripts
- One-liners involving temp data
- Situations where file collisions would cause bugs or expose sensitive data

<br>

## Basic Usage: Create a Temporary File

The simplest way to use `mktemp` is:

**`mktemp`**

This creates a file like:

```bash
/tmp/tmp.ABcD1234
```

By default, it’s created in /tmp with 0600 permissions (read/write by owner only).

<br>

## Customize the Filename Template

You can control the format using a custom template:

`mktemp /tmp/mytemp.XXXXXX`

**Note:** The Xs are required — they get replaced with random characters. If you don’t include at least six Xs, mktemp will throw an error.

Example result:

```bash
/tmp/mytemp.n9gLXa
```

<br>

## Create a Temporary Directory

To create a temp directory instead of a file:

`mktemp -d`

Or with a template:

`mktemp -d /tmp/mydir.XXXXXX`

This will return a unique directory path and create it immediately.

<br>

## Assign the Path to a Variable

When scripting, you’ll often store the result of mktemp:

```bash
TMPFILE=$(mktemp)
echo "Temporary file is: $TMPFILE"
```

Or for directories:

```bash
TMPDIR=$(mktemp -d)
echo "Temporary dir is: $TMPDIR"
```

<br>

## Clean Up
Remember to remove temp files and dirs when you’re done:

```bash
rm "$TMPFILE"
rm -r "$TMPDIR"
```

You can also use trap in a script to auto-clean on exit:

```bash
TMPFILE=$(mktemp)
trap "rm -f $TMPFILE" EXIT
```

<br>

## Use Case: Writing to a Temp File Then Moving It

One common pattern is writing to a temporary file, then moving it into place:

```bash
TMP=$(mktemp)
/usr/bin/generate_config > "$TMP"
mv "$TMP" /etc/myapp/config.conf
```

This helps avoid leaving a broken or partial file behind if the script fails mid-write.

<br>

## Conclusion

`mktemp` is a small but powerful command that solves a very real problem: safely and predictably handling temporary files. By always using it instead of hardcoded filenames like `/tmp/foo`, you avoid name collisions and boost security — especially in multi-user or automated environments.

Next time you're building a shell script, don't reinvent the wheel — use `mktemp` for all your temporary file needs.
<br>

📝 For more information about Proxmox configurations, please review the [Proxmox VE Documentation Index](https://pve.proxmox.com/pve-docs/).