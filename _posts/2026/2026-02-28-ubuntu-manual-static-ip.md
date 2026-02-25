---

title: Set a Manual Static IP on Ubuntu Server
layout: post
date: '2026-02-28'
description: Learn how to configure a permanent static IPv4 address on Ubuntu Server using Netplan and prevent cloud-init from overwriting your network settings.
intro: "Ubuntu Server uses Netplan for network configuration, and in many cloud-based installs, cloud-init can overwrite your settings on reboot. In this blog post, we will walk through how to set a permanent static IPv4 address and prevent cloud-init from reverting your configuration."
lang: en_US
image: "/static/assets/img/blog/2026/ubuntu-manual-static-ip/ubuntu-manual-static-ip.jpg"
keywords: ubuntu,netplan,cloud-init,static ip,linux networking
categories:

- Linux
tags:
- ubuntu
- networking
- netplan
- cloud-init
icon: fa-network-wired

---

Setting a manual static IP on Ubuntu Server ensures predictable networking, which is critical for servers, firewalls, DNS systems, and virtualization hosts.

This guide configures a permanent static IPv4 address using Netplan and disables cloud-init network management to prevent changes on reboot.

<br>

* TOC
{:toc}

<br>

## Example Values Used

* Interface: ens18
* Static IP: 192.168.9.112
* Netmask: 255.255.255.0 (CIDR: /24)
* Gateway: 192.168.9.1
* DNS servers:

  * 192.168.9.111
  * 192.168.9.113
  * 8.8.8.8

Adjust these values for your environment.

<br>

## 1 Identify Your Network Interface

Run:

```bash
ip -br link
ip -br addr
```

Locate the interface that currently has your IPv4 address. In this example, it is ens18.

<br>

## 2 Locate Your Netplan File

Run:

```bash
ls -lah /etc/netplan/
```

On many template or cloud-based installs, you will see a file named:

* 50-cloud-init.yaml

<br>

## 3 Backup the Existing Netplan File

Before modifying anything, create a backup:

```bash
sudo cp -a /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bk
```

<br>

## 4 Edit Netplan and Set the Static IP

Open the file:


```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

Replace the contents with the following (update ens18 if needed):

```bash
network:
version: 2
renderer: networkd
ethernets:
ens18:
dhcp4: no
addresses:
- 192.168.9.112/24
routes:
- to: default
via: 192.168.9.1
nameservers:
addresses:
- 192.168.9.111
- 192.168.9.113
- 8.8.8.8
```

Notes:

* 192.168.9.112/24 corresponds to netmask 255.255.255.0.
* If you want to disable DHCPv6 as well, add: dhcp6: no under dhcp4: no.

<br>

## 5 Prevent cloud-init From Overwriting Networking

If your file is named `50-cloud-init.yaml`, cloud-init may regenerate it on reboot unless networking is disabled.

Run:

```bash
sudo mkdir -p /etc/cloud/cloud.cfg.d
echo 'network: {config: disabled}' | sudo tee /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

This prevents cloud-init from managing network configuration.

<br>

## 6 Apply the Configuration Safely

If connected via SSH, use:

```bash
sudo netplan try
```

* If connectivity remains stable, press Enter to confirm.
* If connectivity breaks, the configuration automatically rolls back.

If you are on local console access, you may instead use:

```bash
sudo netplan apply
```

<br>

## 7 Verify the New Network Settings

Run:

```bash
ip -br addr show ens18
ip route
resolvectl status | sed -n '1,120p'
```

You should see:

* ens18 with 192.168.9.112/24
* Default route via 192.168.9.1
* DNS servers set correctly

<br>

## Troubleshooting

### IP Conflict

Ensure 192.168.9.112 is not already in use and not inside an active DHCP pool unless properly reserved.

### Recover Quickly

If networking breaks and you have console access, restore the backup:

```bash
sudo cp -a /etc/netplan/50-cloud-init.yaml.bk /etc/netplan/50-cloud-init.yaml
sudo netplan apply
```

<br>

## Final Thoughts

Using `Netplan` with `cloud-init` properly disabled ensures your Ubuntu Server retains its static IP configuration permanently. This approach is reliable, audit-friendly, and appropriate for production environments where predictable networking is required.
