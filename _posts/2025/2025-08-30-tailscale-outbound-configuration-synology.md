---
title: Tailscale Outbound Configuration for Synology DSM 7
layout: post
date: '2025-08-30'
description: Enabling outbound Tailscale connections on Synology NAS devices is essential when using services like **Snapshot Replication** or **Hyper Backup** over Tailscale IPs. 
intro: "In this blog post, we will walk through why this configuration is needed, the commands required, and how to apply the setup so it persists across reboots." 
lang: en_US
image: "/static/assets/img/blog/2025/tailscale-outbound-configuration-synology/tailscale-outbound-configuration-synology.png"
keywords: synology,networking,tailscale
categories:
- Other
tags:
- synology
- networking
- tailscale
icon: fa-server
---

Enabling outbound Tailscale connections on Synology NAS devices is essential when using services like **Snapshot Replication** or **Hyper Backup** over Tailscale IPs. By default, DSM 7 has limitations that prevent outbound traffic from working properly. This guide shows how to fix the issue using Tailscale’s supported method so replication works seamlessly.

In this blog post, we will walk through why this configuration is needed, the commands required, and how to apply the setup so it persists across reboots.

<br>

* TOC 
{:toc}

<br>

## Why This Is Needed

By default, Synology DSM 7 does **not** allow outbound Tailscale traffic for replication services due to missing kernel interface permissions and capabilities. This results in snapshot replication or backups failing when using Tailscale IPs.  

The updated method provided by Tailscale:

* Fixes this issue cleanly  
* Avoids manual device configuration with `/dev/net/tun`  
* Persists through reboots and DSM updates  
* Uses Tailscale’s **officially supported tool**  

## Recommended Setup

On **each NAS** participating in Tailscale-based replication, run the following command once to enable outbound support:

**Command:**  

```bash
sudo /var/packages/Tailscale/target/bin/tailscale configure-host; sudo synosystemctl restart pkgctl-Tailscale.service
```

This command performs the following:

* Grants `cap_net_admin` privileges to the Tailscale process (`tailscaled`)  
* Ensures the TUN interface is prepared  
* Restarts the Tailscale service cleanly  

> **Note**: A **TUN device** (short for network TUNnel) is a virtual network kernel device used to create point-to-point tunnels. It operates at Layer 3 (Network Layer) of the OSI model and is used by VPN software like Tailscale, WireGuard, and OpenVPN to securely route traffic.

## Configure Tailscale for Outbound Support at Boot

To make sure outbound support is reapplied after every reboot, configure a **boot-time scheduled task** in DSM:

1. Open **Control Panel > Task Scheduler**  
2. Click **Create > Triggered Task > User-defined script**  
3. Name it: `Tailscale Bootup Script`  
4. **Event**: Boot-up  
5. **User**: `root`  
6. **Task Settings > Run Command**:  

   ```
   sleep 3m
   /var/packages/Tailscale/target/bin/tailscale configure-host
   synosystemctl restart pkgctl-Tailscale.service
   ```

   *The `sleep 3m` delay gives DSM time to fully boot before restarting Tailscale.*  

7. (Optional) Configure **Task Settings > Email** with an address like `support@yourdomain.com` for alerts.

If you’re interested in the details, you can review the [configure-host code on GitHub](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/configure-synology.go).

## Apply on Both Devices

If you’re using **Snapshot Replication** or **Hyper Backup** between two NAS units, you must configure outbound support on **both** the **source** and **destination** devices. This ensures that whichever side initiates the replication has full Tailscale connectivity.

## Notes

* This configuration method is documented in the official Tailscale knowledge base: [Synology Outbound Guide](https://tailscale.com/kb/1131/synology-outbound/)  
* Best used in setups where the NAS acts as an **initiator** of replication or backups.  
* Works seamlessly across reboots and DSM updates without requiring manual intervention.  

## Conclusion

Outbound configuration is a must-have if you want to use Tailscale IPs for Synology **Snapshot Replication** or **Hyper Backup**. By running the supported `configure-host` command and scheduling it at boot, you can ensure replication traffic flows securely and reliably. This method is simple, persistent, and officially supported—making it the best way to enable cross-site NAS backups with Tailscale.
