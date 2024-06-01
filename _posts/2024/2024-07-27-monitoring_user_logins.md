---
title: Monitoring User Logins on a RHEL Server
layout: post
date: '2024-05-31'
description: Keeping track of user login activities on your Red Hat Enterprise Linux (RHEL) server is essential for maintaining security and accountability.
intro: "Monitoring these logs regularly helps in identifying unauthorized access attempts and maintaining overall system security."
lang: en_US
image: "/static/assets/img/blog/2024/monitoring_user_logins/monitoring_user_logins.jpg"
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

As a system administrator, keeping track of user login activities on your Red Hat Enterprise Linux (RHEL) server is essential for maintaining security and accountability. RHEL provides several commands that allow you to monitor and review login sessions, both successful and failed. This blog post will guide you through some of the most useful commands for tracking user logins on your RHEL server.

<br>

* TOC 
{:toc}

<br>

## Commands to Track User Logins

<br>

### 1. `last` Command

The `last` command displays a list of the most recent login sessions on the system. This includes information such as the username, terminal, IP address, date, and duration of the session.

```bash
last
```

To see a specific number of recent logins, you can limit the output by using the -n option followed by the number of entries you want to display.

```bash
last -n 10
```

<br>

### 2. `lastb` Command

The lastb command is similar to last, but it shows failed login attempts. This can be useful for identifying unauthorized login attempts.

```bash
lastb
```

<br>

### 3. `who` Command
The who command shows who is currently logged into the system.

```bash
who
```

<br>

### 4. `w` Command
The `w` command displays information about the users currently logged in and their processes. This includes the login name, terminal, remote host, login time, idle time, JCPU, PCPU, and the command being executed.

```bash
w
```

<br>

### 5. `journalctl` Command
If your system uses systemd, you can use `journalctl` to review logs for login activities.

```bash
journalctl -u sshd
```

This command will display logs related to the SSH daemon, which handles SSH logins. You can also filter logs for a specific time frame.

```bash
journalctl -u sshd --since "2023-05-30" --until "2023-06-01"
```

<br>

### 6. Checking /var/log/secure
The /var/log/secure file logs authentication-related messages, including successful and failed login attempts.

To find lines indicating when a session was opened for a user, you can use the grep command:

```bash
grep "session opened for user" /var/log/secure
```

<br>

## Conclusion

By using these commands, you can gather comprehensive information about user login activities on your RHEL server. Monitoring these logs regularly helps in identifying unauthorized access attempts and maintaining overall system security. Implement these practices to ensure your server remains secure and to keep an audit trail of login activities for accountability.

Understanding and utilizing these tools effectively allows you to manage user access and detect potential security threats, thereby enhancing the security posture of your RHEL server.

<br>

📝 For more information and specific details about monitoring user logins, refer to this [Redhat article](https://www.redhat.com/sysadmin/monitor-users-linux).
