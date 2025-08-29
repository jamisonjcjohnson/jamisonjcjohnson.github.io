---
title: Synology NAS UPS Configuration
layout: post
date: '2025-09-13'
description: Protecting your Synology NAS with a UPS (Uninterruptible Power Supply) is critical to preventing data loss and corruption during power outages. 
intro: "In this blog post, we will cover the physical setup, DSM configuration, verification methods, and best practices to keep your NAS protected." 
lang: en_US
image: "/static/assets/img/blog/2025/synology-ups-configuration/synology-ups-configuration.jpg"
keywords: synology,networking,ups
categories:
- Other
tags:
- synology
- networking
- ups
icon: fa-server
---

Protecting your Synology NAS with a UPS (Uninterruptible Power Supply) is critical to preventing data loss and corruption during power outages. In this guide, we’ll walk through connecting, configuring, and verifying a **CyberPower CP1000AVRLCD** UPS with a Synology NAS such as the **DS1019+**, ensuring safe shutdowns and better power management.

In this blog post, we will cover the physical setup, DSM configuration, verification methods, and best practices to keep your NAS protected.

<br>

* TOC 
{:toc}

<br>

## Equipment Used

* **UPS:** CyberPower CP1000AVRLCD  
* **NAS:** Synology DS1019+ or DS1522+ (DSM 7.2.2+)  
* **Connection Type:** USB (data cable, not just power)  

<br>

## Step 1: Physical Connections

1. **Power on your NAS** using the battery-protected outlets on the UPS.  
2. **Connect the USB data cable** from the **USB port on the UPS** to the **rear USB port on the Synology NAS**.  
   * Avoid USB hubs or extenders for best reliability.  
3. If using an external USB backup drive, connect it to the **front USB port** of the Synology NAS.  

<br>

## Step 2: Verify DSM Detects the UPS

1. Log into DSM.  
2. Go to: **Control Panel → Hardware & Power → UPS**  
3. If connected properly, you should see:  

   > **"USB UPS detected on Local UPS device"**  

If it still says **"UPS is not connected"**, reseat the cable or try another USB port/cable.  

<br>

## Step 3: CLI Verification (Optional)

You can also verify UPS detection via SSH. Run:  

```bash
**lsusb**  
```

Look for a line identifying your UPS.  

<br>

## Step 4: Enable UPS Support

Once detected, configure DSM:  

1. Check **“Enable UPS support”**  
2. Set standby/shutdown behavior (e.g., standby after 15 minutes on battery, then shut down)  
3. (Optional) Enable **“UPS server”** to share UPS signals with other Synology devices on the network  
4. Under **General**, enable: **“Restart automatically when power supply issue is fixed”**  

<br>

## Notes and Best Practices

* Using only **UPS power** means the NAS will stay on battery but DSM won’t know when to shut down.  
* Using both **USB data + power** enables DSM to monitor and gracefully shut down during outages.  
* Only one USB port is required for UPS connection. Reserve the other for backup drives.  

<br>

## Additional Tips

* Keep UPS firmware updated via PC if possible.  
* Test UPS behavior with simulated outages occasionally.  
* Schedule regular USB backups in DSM via **Hyper Backup**.  

<br>

## Example Layout

| Device        | Port Used         |  
|---------------|-------------------|  
| UPS Power     | NAS Power Plug    |  
| UPS USB Data  | NAS Rear USB Port |  
| USB Backup HD | NAS Front USB Port|  

<br>

## Alerts & Monitoring

Configure DSM notifications for UPS status changes:  

> **Control Panel → Notification**  

Set up email or push alerts to stay informed.  

<br>

## Without the USB Cable

Without the USB data connection:  

* DSM cannot detect the UPS  
* No graceful shutdowns — leading to risk of **data corruption**  

<br>

## Conclusion

To fully integrate your UPS with a Synology NAS, always use both the **power connection** and the **USB data cable**. This ensures DSM can monitor, log, and gracefully shut down your NAS during power events — protecting both your data and your hardware investment.


📝 For more information about this Synology UPS configurations, please review this [Synology Products Compatibility List](https://www.synology.com/en-us/compatibility?search_by=category&category=upses).