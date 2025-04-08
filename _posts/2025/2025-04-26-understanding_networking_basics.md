---
title: Understanding Networking Basics
layout: post
date: '2025-04-26'
description: The Nest WiFi Pro targets users looking for a no-fuss upgrade to their existing home network.
intro: "In this blog post, we will discuss the key features, performance, pros and cons, and ideal use cases for the Nest WiFi Pro to help you decide if it’s the right mesh solution for your home." 
lang: en_US
image: "/static/assets/img/blog/2025/understanding_networking_basics/understanding_networking_basics.jpg"
keywords: google,networking,wifi,reviews
categories:
- Reviews
tags:
- google
- networking
- wifi
- reviews
icon: fa-server
---

Networking is the backbone of modern computing, whether you’re running a homelab, managing enterprise infrastructure, or just trying to understand how your devices talk to each other. Before you dive into VLANs, firewalls, or mesh Wi-Fi, it’s crucial to grasp the fundamentals — the “language” your network speaks.

Concepts like IP addresses, subnetting, and gateways might sound intimidating at first, but once you break them down, they’re surprisingly approachable. These foundational ideas are what make everything from web browsing to remote access possible.

In this blog post, we’ll walk through the basics of networking — including what IP addresses are, how subnetting works, and why gateways matter — so you can start building smarter, more secure networks from the ground up.

<br>

* TOC 
{:toc}

## What Is a Local Area Network (LAN)?

Imagine your home or a school. You have:

- Laptops
- Phones
- Printers
- Smart devices (IoT Devices)

They’re all connected together — that’s your **Local Area Network (LAN)**.

In our school analogy:
- The **school** is the LAN.
- **Students** are the devices (laptops, printers, etc).
- **Roll numbers** are the **IP addresses** assigned to each student/device.

> IP address is like a unique roll number to identify a device in the network.

If a student (device) wants to send a file to another student (device), they simply send it to the specific roll number (IP address). This all happens **within the same school building (LAN)**.

<br>

## What Is a Wide Area Network (WAN)?

Now imagine a student wants to contact someone from **another school**. That's **outside the local network**.

There’s a **security guard** at the gate — this is your **router** or **gateway**. The student must:
1. Ask the guard for permission.
2. Tell them who they want to contact.
3. Let the guard pass the message to the outside world.

> The **gateway** connects your LAN to the **internet** — the WAN (Wide Area Network).

So, just like you need permission to leave school, your **devices need a gateway/router to access the internet**.

<br>

## Understanding IP Address Translation (NAT)

Devices inside your school have **private roll numbers (IP addresses)**. But once they step out (go online), these roll numbers don’t work.

This is where **NAT (Network Address Translation)** comes in.

NAT is like the **receptionist** at the front desk who changes your name (IP address) to something that works outside.

So:
- Your laptop (192.168.x.x) wants to visit Google.
- NAT translates your IP to a public one.
- Google replies.
- NAT maps the reply back to your device.

> NAT protects your private devices and helps them communicate with the outside world using a shared public IP.

<br>

## What is a Gateway?

A **gateway** is both the **entry** and **exit point** for your LAN. It routes all communication **between your network and the internet**.

Think of it as:
- The **main school gate**.
- Managed by a **security guard (router)**.
- No student (device) can talk to outsiders without passing through it.

<br>

## What Is Port Forwarding?

Sometimes a guest wants to directly meet a student inside. Maybe someone wants to connect to your home server or IP camera.

How will they reach the correct student?

This is where **Port Forwarding** helps.

The router acts like:
- A receptionist.
- Knows which student to call based on the port number.

For example:
- Port 80 → Web server (HTTP)
- Port 22 → SSH
- Port 3389 → Remote Desktop

> You can configure your router to **forward requests to specific devices** based on port numbers.

<br>

## What Is a DMZ?

DMZ stands for **Demilitarized Zone** — a special area of your network that is **semi-public**.

Imagine a **guest area** in your school where outsiders can come in without entering classrooms.

DMZ is used for:
- Hosting public servers.
- Keeping internal devices safe from external traffic.

If you don’t want to create a DMZ, you can just use **port forwarding** to expose only specific services.

<br>

## Key Takeaways

| Concept | School Analogy | Real World Meaning |
|--------|----------------|--------------------|
| LAN | One school building | Local network of connected devices |
| WAN | Another school / internet | The broader internet |
| IP Address | Roll number | Unique device ID in a network |
| Gateway | Main school gate | Router connecting LAN to internet |
| NAT | Receptionist | Changes internal IP to public IP |
| Port Forwarding | Receptionist routing guests | Sends external requests to correct device |
| DMZ | Guest zone | Safe area for public-facing servers |

<br>

## Conclusion
Understanding the fundamentals of networking doesn’t just make you sound smarter — it empowers you to make better decisions when designing, troubleshooting, or expanding your own network. Whether you're setting up a homelab, configuring VLANs, or just trying to get a better handle on how your devices communicate, these core concepts are the building blocks for everything that comes next.

Now that you’ve got a handle on IP addresses, subnetting, and gateways, you’re in a much better position to dive deeper — whether that’s into routing, firewall rules, or network segmentation.

Stay tuned for future posts where we’ll break down more advanced topics and continue building your networking toolkit, one layer at a time.