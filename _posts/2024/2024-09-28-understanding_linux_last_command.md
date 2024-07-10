---
title: Understanding Linux Last Command
layout: post
date: '2024-09-28'
description: The `last` command in Linux is a simple yet powerful tool used to display the login history of users on a system.
intro: "The `last` command offers a detailed view of login sessions and system reboot."
lang: en_US
image: "/static/assets/img/blog/2024/understanding_linux_last_command/understanding_linux_last_command.jpg"
keywords: linux,authentication
categories:
- Linux
tags:
- linux
- authentication
icon: fa-linux
---

The `last` command in Linux is a simple yet powerful tool used to display the login history of users on a system. It reads data from the `/var/log/wtmp` file and shows a list of all the users who have logged in and out since that file was created. This command is invaluable for system administrators who need to track user activity and diagnose potential security issues. With various options to filter and format the output, the `last` command offers a detailed view of login sessions and system reboots.

<br>

* TOC 
{:toc}

<br>

## Overview of the `last` Command

The primary purpose of the `last` command is to track user logins and reboots. By default, it shows the most recent entries first, allowing system administrators to quickly see who has accessed the system and when.

<br>

### Basic Syntax

The basic syntax of the `last` command is as follows:

```bash
last [options] [username] [tty]
```
- **Options:** Various options to filter and format the output.
- **Username:** Optional. Specify a particular user to see their login history.
- **TTY:** Optional. Specify a particular terminal to see logins from that terminal.

<br>

## Common Use Cases

<br>

### Displaying All Login Records
To display all login records, simply run the last command without any options:

```bash
last
```

This command will output a list of all users who have logged into the system, along with their login times, durations, and the IP addresses (if applicable).

<br>

### Displaying Login Records for a Specific User
To see the login history of a specific user, you can specify the username:

```bash
last username
```

Replace `username` with the actual username. This will filter the output to show only the login records for that particular user.

<br>

## Useful Options

<br>

### Limiting the Number of Entries
To limit the output to a specific number of entries, use the `-n` option followed by the number:

```bash
last -n 10
```

This command will display the 10 most recent login records.

<br>

### Showing Reboots
To include system reboots in the output, use the `-x` option:

```bash
last -x
```

This is particularly useful for tracking system reboots and understanding system uptime.

<br>

### Excluding IP Addresses
To exclude IP addresses from the output, use the `-i` option:

```bash
last -i
```

This can make the output cleaner and more focused on the login times and durations.

<br>

### Displaying Only IP Addresses
Conversely, to display only the IP addresses without hostnames, use the `-d` option:

```bash
last -d
```

<br>

## Example Usage

Here are some practical examples of using the `last` command:


Display all login records:

```bash
last
```

Display login records for user `john`:

```bash
last john
```

Display the last 5 login records:

```bash
last -n 5
```

<br>

## Conclusion

The `last` command is an essential tool for system administrators to monitor user logins and system reboots. Its simplicity and versatility make it easy to quickly gather important information about who has accessed the system and when. By leveraging the various options available, you can customize the output to meet your specific needs and maintain better control over your Linux environment.

<br>

📝 For more information about the last command, review the [last man page](https://linux.die.net/man/1/last).
