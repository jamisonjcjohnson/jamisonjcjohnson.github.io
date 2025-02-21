---
title: Troubleshooting VLAN and Interface Synchronization Issues in pfSense HA
layout: post
date: '2025-02-22'
description: Troubleshooting high availability issues with pfSense firewalls.
intro: "In this post, we will explore how to address a pfSense high availability configuration issue between two firewalls." 
lang: en_US
image: "/static/assets/img/blog/2025/troubleshooting_highavailability_pfsense_issues/troubleshooting_highavailability_pfsense_issues.jpg"
keywords: linux,terminal,networking,server,pfsense
categories:
- Linux
tags:
- linux
- terminal
- networking
- server
- pfsense
icon: fa-server
---

While configuring **High Availability (HA)** between two pfSense firewalls (**jpcfw1** and **jpcfw2**), we encountered a synchronization issue with the **SERVER** interface and VLAN. If **jpcfw1** were to go down, the SERVER interface would **not function properly on jpcfw2**. The issue presented itself in the following ways:

- **DHCP Server settings on jpcfw2 were being overwritten by jpcfw1**, effectively disabling the DHCP server on jpcfw2.
- The **SERVER VLAN and interface settings remained intact on jpcfw2**, but DHCP settings failed to synchronize.
- Manual configuration of DHCP settings on jpcfw2 was not persisting.

This indicated a deeper issue with interface assignments within pfSense HA. In this post, we will explore how to address a pfSense high availability configuration issue between two firewalls.

<br>

* TOC 
{:toc}

<br>

## Root Cause

After further investigation, we discovered that the **SERVER interface was being incorrectly assigned to `opt1` on jpcfw2**, rather than `opt6` as intended. This mismatch caused **interface conflicts**, preventing proper synchronization between jpcfw1 and jpcfw2.

<br>

### Why Did This Happen?

It is likely that **jpcfw1 previously had an opt1 interface that was later removed**. However, because pfSense HA synchronizes certain configurations, **jpcfw2 still attempted to mirror this missing opt1 assignment**, causing a conflict with the correct SERVER interface settings. Since jpcfw1 no longer had an opt1 interface, this mismatch prevented proper synchronization of DHCP and interface settings.

<br>

### Verifying the Issue

To confirm the issue, we navigated to:

- **Status > Interfaces** on jpcfw2: It showed the **SERVER** interface assigned to `opt1` instead of `opt6`.
- **Status > DHCP Leases** on jpcfw1: The **failover state was incorrect**, further proving the misconfiguration.

<br>

## Solution

Once the problem was identified, we implemented the following workaround to correctly assign the **SERVER** interface to `opt6` on jpcfw2.

<br>

### **Step-by-Step Fix**

1. **Remove Existing VLAN and Interface Assignment**
   - Navigate to **Interfaces > Assignments > VLANs**.
   - Delete the existing **SERVER VLAN** and interface assignment on **jpcfw2**.

2. **Create a Temporary Interface**
   - Under **Interfaces > Interface Assignments**, create a new temporary VLAN and interface named **"TESTING"**.
   - pfSense automatically assigned this new interface to **opt1**, confirming that it was reserving opt1 improperly.

3. **Recreate the SERVER VLAN and Interface**
   - After assigning "TESTING" to opt1, we then **recreated the SERVER VLAN and interface**.
   - This time, pfSense **correctly assigned the SERVER interface to opt6**, resolving the mismatch.

4. **Reconfigure Network Settings**
   - After the correct interface was assigned, we reconfigured:
     - **NAT settings**
     - **Virtual IP addresses**
     - **DHCP Server settings**
   - Ensured they aligned with **jpcfw1**.

<br>

## Final Verification

To confirm the issue was resolved:

- Navigated to **Status > DHCP Leases** on jpcfw1.
- Verified that all **failover groups** appeared normal.
- Tested HA failover by manually disabling jpcfw1 and ensuring **SERVER** traffic switched over seamlessly to jpcfw2.

<br>

## Conclusion

This issue was likely caused by **an old opt1 interface that was previously removed on jpcfw1**. While the change may have seemed minor, pfSense HA continued to recognize **opt1** on jpcfw2, causing an interface mismatch that disrupted synchronization. 

By using a **temporary VLAN assignment trick**, we were able to force pfSense to correctly map the **SERVER interface to opt6**, resolving the problem. After reconfiguring DHCP and NAT settings, failover functionality was restored, ensuring that **jpcfw2 could seamlessly take over in the event of a failure**.

This case highlights the importance of **interface consistency across HA firewalls**. When making changes to a primary firewall, it’s crucial to verify that the backup firewall is correctly synchronized, especially when removing or reassigning interfaces. Future interface modifications should be planned carefully to avoid similar issues.

<br>

📝 For more information about pfsense configurations, please review their official [pfSense Documentation](https://docs.netgate.com/pfsense/en/latest/) from Netgate Docs.
