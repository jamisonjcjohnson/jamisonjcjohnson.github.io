---
title: Configuring Logging with Rsyslog
layout: post
date: '2025-05-24'
description: Centralized logging using Rsyslog is one of the most efficient ways to achieve logging.
intro: "In this blog post, we'll configure `loghost` to receive logs from `web01` using TCP port 514, structure incoming logs by source and service, and confirm that everything works properly." 
lang: en_US
image: "/static/assets/img/blog/2025/configuring_logging_rsyslog/configuring_logging_rsyslog.jpg"
keywords: linux,terminal,logging
categories:
- Linux
tags:
- linux
- terminal
- logging
icon: fa-linux
---

If you're managing multiple Linux systems, consolidating logs from different servers into one place can drastically improve your ability to troubleshoot, audit, and monitor your infrastructure. Centralized logging using Rsyslog is one of the most efficient ways to achieve this.

In this blog post, we'll configure `loghost` to receive logs from `web01` using TCP port 514, structure incoming logs by source and service, and confirm that everything works properly.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

To follow this setup, you’ll need:

- Two Linux machines with Rsyslog installed (commonly pre-installed).
- Sudo/root access on both.
- Basic networking between the machines.

In this example:

- `loghost` is the server that will collect logs.
- `web01` is the server that will send logs to `loghost`.

<br>

## Step 1: Preparing `loghost` (The Logging Receiver)

<br>

### Verify Rsyslog Installation

Check that Rsyslog is installed on `loghost`:

```bash
rsyslogd -v
```

You should see version output. If not, install it using your distro’s package manager.

<br>

### Confirm the Service Is Running
Ensure Rsyslog is active:

```bash
systemctl status rsyslog
```

If it isn’t running, start it:

```bash
sudo systemctl start rsyslog
```

<br>

### Get the IP Address of loghost
You’ll need this for configuration on web01:

```bash
hostname -I
```

Save the IP address for later.

<br>

### Enable TCP Log Reception
Edit the main configuration file on loghost:

```bash
sudo vi /etc/rsyslog.conf
```

Uncomment the following lines under the TCP section:

```bash
module(load="imtcp")
input(type="imtcp" port="514")
```

This enables Rsyslog to receive logs over TCP on port 514.

<br>

### Define a Custom Log Template
Still in the config file, add this at the top:

```bash
$template RemoteLogs,"/var/log/%HOSTNAME%/%PROGRAMNAME%.log"
*.* ?RemoteLogs
& stop
```

This stores logs in folders named after the sending host and log-generating program.

<br>

### Open Port 514 in the Firewall
Allow TCP traffic on port 514:

```bash
sudo firewall-cmd --permanent --add-port=514/tcp
sudo firewall-cmd --reload
```

<br>

### Restart Rsyslog
Apply your changes:

```bash
sudo systemctl restart rsyslog
```

<br>

### Confirm It’s Listening on TCP
Verify that Rsyslog is listening:

```bash
sudo ss -tulnp | grep 514
```

You should see a line indicating TCP port 514 is open and used by rsyslogd.

<br>

## Step 2: Configuring web01 (The Logging Sender)

<br>

### Verify Rsyslog Is Installed
Check on web01:

```bash
rsyslogd -v
```

Confirm version output.

<br>

### Edit the Rsyslog Rule File
On web01, edit the rule file:

```bash
sudo nano /etc/rsyslog.d/50-default.conf
```

<br>

Add the following line to forward all logs to loghost:

```bash
*.* @@loghost.lan:514
```

*Replace `loghost.lan` with the IP address of your logging server if DNS isn’t set up.*

**The `@@` indicates TCP should be used for log forwarding.**

<br>

### Restart Rsyslog on web01
Apply the change:

```bash
sudo systemctl restart rsyslog
```

<br>

### Send a Test Message
Use the logger command to generate a test log:

```bash
logger "Hello from web01"
```

<br>

## Step 3: Verify Logs on loghost
On the loghost, check that logs from web01 are received:

```bash
ls /var/log/web01/
```

<br>

You should see log files categorized by service, e.g., syslog.log, user.log.

Tail the user log to verify:

```bash
sudo tail /var/log/web01/user.log
```

You should see the message: Hello from web01.

<br>

Send another test message:

```bash
logger "Second test from web01"
```

Tail the log again to see the new entry:

```bash
sudo tail /var/log/web01/user.log
```

<br>

## Conclusion

We've successfully set up centralized logging using Rsyslog with `loghost` receiving logs from `web01`. This approach is scalable, easy to manage, and lays the groundwork for deeper log analysis or integration with tools like Logwatch, Splunk, or the ELK stack.

Structured logs make your infrastructure easier to audit and debug. With this simple configuration, your logging is no longer fragmented—it's unified and accessible.

<br>

📝 For more information about `rsyslog`, please review its [man page](https://linux.die.net/man/8/rsyslogd) .