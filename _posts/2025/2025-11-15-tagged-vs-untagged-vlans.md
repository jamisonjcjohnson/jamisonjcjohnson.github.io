---

title: Tagged vs Untagged VLANs — What They Are and When to Use Them
layout: post
date: '2025-11-15'
description: Understand the difference between tagged and untagged VLANs, how they work on switches, and how to choose the right approach for your network design.
intro: "VLANs are foundational to modern network design, but confusion around tagged versus untagged traffic often leads to misconfigurations. Understanding the difference is critical for building clean, scalable, and secure networks."
lang: en_US
image: "/static/assets/img/blog/2025/tagged-vs-untagged-vlans/tagged-vs-untagged-vlans.jpg"
keywords: vlan,tagged vlan,untagged vlan,802.1q,networking,switching
categories:
- Networking
- SysAdmin
tags:
- vlan
- networking
- switching
- sysadmin
icon: fa-network-wired

---

VLANs (Virtual Local Area Networks) allow you to logically segment a network without requiring separate physical infrastructure. While the concept sounds simple, one area that consistently trips people up is the distinction between **tagged** and **untagged** VLAN traffic.

In this blog post, we will break down what tagged and untagged VLANs are, how they work, and when each should be used in real-world network designs.

<br>

* TOC
{:toc}

<br>

## What a VLAN Actually Does

At a high level, a VLAN separates broadcast domains at Layer 2. Devices on different VLANs behave as if they are on different physical switches, even when they are not.

This segmentation is commonly used for:

* Security isolation
* Traffic management
* Multi-tenant networks
* Separating user, server, voice, and management traffic

The mechanism that enables this separation on Ethernet networks is VLAN tagging.

<br>

## Untagged VLANs Explained

An **untagged VLAN** is exactly what it sounds like: Ethernet frames are sent without any VLAN identifier attached.

Key characteristics:

* Frames contain no VLAN tag
* Switch assigns the traffic to a VLAN based on the ingress port
* Commonly referred to as the **native VLAN** on a port

In practical terms, this is what happens:

* A device sends normal Ethernet traffic
* The switch port receives it
* The switch internally associates that traffic with a specific VLAN

Most end-user devices (desktops, printers, TVs, IoT devices) send untagged traffic by default.

<br>

## Tagged VLANs Explained

A **tagged VLAN** uses the IEEE 802.1Q standard to insert a VLAN identifier into each Ethernet frame.

Key characteristics:

* Frames include a VLAN ID (VID)
* Multiple VLANs can traverse the same physical link
* Receiving devices must understand VLAN tags

Tagged VLANs allow a single interface to carry traffic for many VLANs simultaneously. This is why they are commonly used between network infrastructure devices.

<br>

## Access Ports vs Trunk Ports

Although terminology varies by vendor, the concepts map cleanly:

**Access Port**

* Carries a single VLAN
* Traffic is untagged
* Used for end devices

**Trunk Port**

* Carries multiple VLANs
* Traffic is tagged
* Used between switches, firewalls, hypervisors, and access points

On many platforms, an access port is simply a port with one untagged VLAN, while a trunk port is a port that allows multiple tagged VLANs.

<br>

## Real-World Examples

Here are a few common scenarios:

* A desktop computer plugged into a wall jack → **Untagged VLAN**
* A switch uplink to another switch → **Tagged VLANs**
* A firewall interface handling multiple networks → **Tagged VLANs**
* A wireless access point with multiple SSIDs → **Tagged VLANs**

Each scenario depends on whether the connected device understands VLAN tags.

<br>

## Common Misconfigurations

Many VLAN issues stem from mixing expectations:

* Sending tagged traffic to a device expecting untagged frames
* Forgetting to define a native (untagged) VLAN on a trunk
* Assuming VLANs work at Layer 3 without routing

When troubleshooting VLAN problems, always verify:

* Port VLAN membership
* Tagged vs untagged configuration
* VLAN IDs match on both sides of the link

<br>

## Choosing the Right Approach

A simple rule of thumb:

* Use **untagged VLANs** for end devices
* Use **tagged VLANs** between network infrastructure components

As networks grow, tagged VLANs become essential for scalability and clarity.

<br>

## Final Thoughts

Tagged and untagged VLANs are not competing concepts — they are complementary tools. Untagged VLANs keep edge devices simple, while tagged VLANs provide the flexibility needed to build segmented, scalable networks.

Understanding the distinction helps prevent configuration errors, simplifies troubleshooting, and leads to cleaner network designs overall.
