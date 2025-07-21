---
title: Tracking USB Flash Drive Usage on Windows with Event Viewer  
layout: post
date: '2025-07-26'
description: USB flash drives are incredibly convenient, but they also pose a significant risk to security and data integrity in managed environments.
intro: "In this blog post, we will walk through how to track USB device activity using Event Viewer, identify relevant event IDs, and use filtering techniques to streamline your audits." 
lang: en_US
image: "/static/assets/img/blog/2025/tracking_usb_usage/tracking_usb_usage.png"
keywords: windows,usb,hardware,security
categories:
- Windows
tags:
- windows
- usb
- hardware
- security
icon: fa-windows
---

USB flash drives are incredibly convenient, but they also pose a significant risk to security and data integrity in managed environments. Whether you’re tracking potential data exfiltration or simply need to audit user behavior, knowing how and when a USB device was plugged in or removed can be critical. Fortunately, Windows logs these events in Event Viewer — you just need to know where to look.

In this blog post, we will walk through how to track USB device activity using Event Viewer, identify relevant event IDs, and use filtering techniques to streamline your audits.

<br>

* TOC 
{:toc}

<br>   

## Why Monitor USB Device Usage?

USB drives are frequently used for transferring files, backing up data, or installing software. However, in enterprise or shared systems, unauthorized or unmonitored USB usage can:

* Lead to sensitive data leakage
* Introduce malware or ransomware
* Violate security policies
* Compromise device integrity

Monitoring these actions helps enforce acceptable use policies and provides traceability in forensic investigations.

<br>  

## Event Viewer: The Built-in Audit Tool

Windows logs plug-and-play (PnP) events in the **System** log under the **Microsoft-Windows-Kernel-PnP** provider. These events include device connection, removal, and configuration.

Key Event IDs to look for:

* **Event ID 3003** – Device configured
* **Event ID 3100** – Device started
* **Event ID 3102** – Device removed

You can use these to piece together a timeline of when specific USB devices were connected or disconnected.

<br>  

## How to Track USB Activity Using Event Viewer

To open Event Viewer:

* Click **Start**, type **Event Viewer**, and press **Enter**
* Navigate to: **Windows Logs** > **System**
* Click **Filter Current Log** in the right-hand pane

Filter for the following criteria:

* **Event sources**: `Microsoft-Windows-Kernel-PnP`
* **Event IDs**: `3003`, `3100`, `3102`

Once filtered, browse the logs to look for USB drive insertions and removals. Double-click any event to view detailed information, such as the device’s instance ID, friendly name, and timestamps.

<br>  

## Example: Using a Command to Pull USB Events

If you want to speed things up, you can use the following command in Command Prompt or PowerShell to filter and extract relevant USB events directly:

**wevtutil qe System /q:"*[System[Provider[@Name='Microsoft-Windows-Kernel-PnP'] and (EventID=3003 or EventID=3100 or EventID=3102)]]" /f:text**

This provides a quick overview of matching log entries without navigating through the GUI.

<br>  

## Final Thoughts

Monitoring USB device activity is an essential part of maintaining operational security and understanding how endpoints are being used. While Event Viewer offers a native, no-cost solution, it’s often underutilized. By understanding how to filter the System logs for relevant Event IDs, you can quickly gain insight into the physical interaction between users and the systems they access.

For environments with stricter security requirements, consider layering this approach with endpoint management solutions or Group Policy to block unauthorized USB usage altogether.