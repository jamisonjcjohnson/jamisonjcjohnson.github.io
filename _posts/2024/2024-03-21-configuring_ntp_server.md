---
title: Configuring a NTP Server and Synchronizing Time with a Client
layout: post
date: '2024-03-21'
description: we will walk through the process of configuring a Network Time Protocol (NTP) server on a RHEL 9 system.
intro: "Proper time synchronization is crucial for various system operations, log management, and security protocols."
lang: en_US
image: "/static/assets/img/blog/2024/configuring_ntp_server/configuring_ntp_server.jpg"
keywords: ntp,time,linux,rhel
categories:
- Linux
tags:
- ntp
- time
- linux
- rhel
icon: fa-linux
---

## Introduction

In this guide, we will walk through the process of configuring a Network Time Protocol (NTP) server on a RHEL 9 system and then demonstrate how to connect a RHEL 9 client to this server to synchronize time.

<br>

* TOC 
{:toc}

<br>

## Configuring NTP Server

<br>

### Step 1: Install Chrony Package

First, ensure that the chrony package is installed on your server:

```bash
sudo dnf install chrony
```

<br>

### Step 2: Configure NTP

Edit the NTP configuration file at `/etc/chrony.conf`:

```bash
sudo vi /etc/chrony.conf
```

 Add NTP server entries, or modify existing ones, to point to reliable time servers. For example:

```bash
server time.nist.gov iburst
```

Comment out the existing server entry. By default, it will be set to the public servers from the `pool.ntp.org` project.

Uncomment the **allow IP** section to allow clients on your local network to connect to your time server. **NOTE:** If client instances reside on a different subnet or IP address range, you’ll need to specify it here (below). For this example, our client instances all reside on the 192.168.1.0/24 subnet.

```bash
# Allow NTP client access from local network.
allow 192.168.1.0/24
```

<br>

### Step 3: Start and Enable chronyd Service

Start the chronyd service and enable it to start on boot:

```bash
sudo systemctl start chronyd
sudo systemctl enable chronyd
```

<br>

#### Step 4: Configuring the firewall for chronyd

Using the firewall-cmd command, allow network access for the ntp and ptp services.

```bash
sudo firewall-cmd --permanent --add-service=ntp --add-service=ptp
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

<br>

## Synchronizing Time on RHEL 9 Client

<br>

### Step 1: Install Chrony Package

Ensure that the `chrony` package is installed on your RHEL 9 client:

```bash
sudo dnf install chrony
```

## Step 2: Configure Chrony

Edit the Chrony configuration file at `/etc/chrony.conf`:

```bash
sudo vi /etc/chrony.conf
```

Specify your NTP server under the `server` directive:

```bash
server your_ntp_server iburst
```

<br>

### Step 3: Start and Enable Chrony Service

Start the Chrony service and enable it to start on boot:

```bash
sudo systemctl start chronyd
sudo systemctl enable chronyd
```

<br>

### Step 4: Verify Time Synchronization

Check the synchronization status on both the server and client:

```bash
sudo chronyc sources
```

This command should display the NTP sources and indicate if synchronization is successful.

<br>

## Conclusion

Configuring an NTP server on RHEL 9 and synchronizing time on a client ensures accurate timekeeping across your systems. Proper time synchronization is crucial for various system operations, log management, and security protocols.

<br>

📝 For more information about using Chrony for NTP configurations, you can refer to the official [RedHat Customer Portal Documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_basic_system_settings/configuring-time-synchronization_configuring-basic-system-settings).
