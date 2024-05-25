---
title: Exploring the Watch Command
layout: post
date: '2024-05-23'
description: The watch command can be incredibly useful for monitoring system activity, tracking changes, and observing command output over time.
intro: "The watch command is a versatile tool that can be used for a wide range of monitoring and tracking tasks in Unix-like systems."
lang: en_US
image: "/static/assets/img/blog/2024/exploring_watch_command/exploring_watch_command.jpg"
keywords: redhat,terminal,linux
categories:
- Linux
tags:
- redhat
- terminal
- linux
icon: fa-linux
---

The `watch` command is a powerful utility available in Unix-like operating systems that allows users to execute a command repeatedly at specified intervals and view the output in real-time. This command can be incredibly useful for monitoring system activity, tracking changes, and observing command output over time.

<br>

* TOC 
{:toc}

<br>

## Getting Started with Watch

To use the `watch` command, simply open your terminal and type `watch` followed by the command you want to execute. For example:

```bash
watch date
```

This command will display the current date and time in your terminal, updating every 2 seconds by default. You can customize the update interval by specifying the -n option followed by the desired number of seconds:

```bash
watch -n 5 df -h
```

This command will show disk usage information (df -h) every 5 seconds.

<br>

## Monitoring System Resources

One common use case for the watch command is monitoring system resources such as CPU usage, memory usage, and disk activity. For example, you can use the following commands to monitor CPU and memory usage in real-time:

```bash
watch -n 1 'ps -eo %cpu,%mem,cmd | head -10'
```

This command will display the top 10 processes consuming CPU and memory every second.

<br>

## Tracking File Changes

You can also use the watch command to track changes in files or directories. For example, if you want to monitor changes in a specific file, you can use the cat command along with watch:

```bash
watch -n 2 'cat /var/log/messages | tail -n 5'
```

This command will display the last 5 lines of the `/var/log/messages` file every 2 seconds, allowing you to track new log entries as they occur.

<br>

## Conclusion

The watch command is a versatile tool that can be used for a wide range of monitoring and tracking tasks in Unix-like systems. By leveraging its capabilities, you can keep an eye on system activity, track changes in files, and more, all from the comfort of your terminal.

Experiment with different commands and options to discover how watch can enhance your workflow and help you stay informed about your system's status in real-time.

<br>

📝 For more information about the `watch` command, you can refer to the [Linux Man Page](https://linux.die.net/man/1/watch) for this command!