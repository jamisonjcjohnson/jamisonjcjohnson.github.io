---
title: AIDE File Integrity Safeguarding Your Linux System
layout: post
date: '2024-02-20'
description: This blog post will guide you through the installation, configuration, and utilization of AIDE on a Linux system.
intro: "By implementing AIDE as part of your security strategy, you fortify your Linux system against unauthorized changes, providing an additional layer of defense in the ever-evolving landscape of cybersecurity."
lang: en_US
image: "/static/assets/img/blog/2024/aide_file_integrity/aide_file_integrity.jpg"
keywords: aide,security,linux
categories:
- Linux
tags:
- aide
- security
- linux
icon: fa-linux
---


Ensuring the integrity of your operating system and critical applications is a fundamental aspect of cybersecurity. File integrity monitoring (FIM) tools play a crucial role in detecting unauthorized changes to files and directories. In the Linux ecosystem, AIDE (Advanced Intrusion Detection Environment) stands out as a reliable open-source solution for FIM. This blog post will guide you through the installation, configuration, and utilization of AIDE on a Linux system.

<br>

* TOC 
{:toc}

<br>

## Installation:

To get started, install the AIDE package using the package manager:

```bash
sudo dnf install aide -y
```

On older versions of Red Hat, it's advisable to disable prelinking to prevent false positives. Modify the prelink configuration:

```bash
sudo vi /etc/sysconfig/prelink
```

Set `PRELINKING` to no:

```bash
PRELINKING=no
```

<br>

## Configuration:

AIDE's configuration file is located at /etc/aide.conf. This file allows you to define rules for checking permissions, ownership, timestamps, and more. Customize the configuration based on your specific environment.

```bash
sudo vi /etc/aide.conf
```

<br>

## Initialization:

Generate the initial database for your system:

```bash
sudo aide --init
```

After the database is created (stored in /var/lib/aide/aide.db.new.gz), rename and remove the 'new' string:

```bash
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz
```

<br>

## Test Configuration:

Before checking for system changes, simulate alterations by adding a new user and modifying a binary file:

```bash
sudo useradd test
sudo passwd test

sudo rm /usr/bin/sudo
sudo mv /root/fakesudo /usr/bin/sudo
```

Perform an integrity check to identify changes:

```bash
aide --check
```

Review the detailed output to ensure that AIDE detected the modifications.

<br>

## Updating the Database:

After verifying legitimate changes, update AIDE to create a new database:

```bash
aide --update
```

Replace the old configuration with the updated database:


```bash
mv /var/lib/aide/aide.db.gz /var/lib/aide/aide.db.gz-24APR21
mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz
```

<br>

## Final Thoughts:

Automate the monitoring process using cron and consider offloading and centralizing database files for enhanced security.

You may include the `sudo aide --check` command into a cron job and push it to a log file to keep track of the ongoing changes to the system.

**Example :** `sudo aide --check >> /opt/log/aidechecks.log`

By implementing AIDE as part of your security strategy, you fortify your Linux system against unauthorized changes, providing an additional layer of defense in the ever-evolving landscape of cybersecurity.


📝 For more information about RHEL9 AIDE, refer to this [Red Hat Customer Portal Article](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/checking-integrity-with-aide_security-hardening)!


