---
title: Beszel Configuration
layout: post
date: '2025-09-20'
description: Beszel is a a simple, self-hosted monitoring tool that is easy to deploy, uses minimal system resources, and works across Linux and Windows environments. 
intro: "In this blog post, we’ll explore Beszel’s hub-and-agent model, configuration process, and why it might be a great fit for your environment." 
lang: en_US
image: "/static/assets/img/blog/2025/beszel-configuration/beszel-configuration.jpg"
keywords: beszel,networking,monitoring
categories:
- Other
tags:
- beszel
- networking
- monitoring
icon: fa-server
---

In today’s world of IT infrastructure, monitoring is a critical requirement. Large-scale monitoring stacks like Prometheus, Grafana, Telegraf, and InfluxDB are powerful, but they can be heavy, complex, and overkill for smaller environments. Sometimes, all you want is a **lightweight monitoring solution** that shows you the essentials: CPU usage, memory, disk space, and system temperatures.  

That’s where **Beszel** comes in. It’s a simple, self-hosted monitoring tool that is easy to deploy, uses minimal system resources, and works across Linux and Windows environments. 

In this blog post, we’ll explore Beszel’s hub-and-agent model, configuration process, and why it might be a great fit for your environment.

<br>

* TOC 
{:toc}

<br>

## What is Beszel?

Beszel is an open-source monitoring platform designed to be **lightweight and easy to configure**. Unlike heavier stacks, it focuses on simplicity while still offering powerful features such as:

* Monitoring Linux and Windows systems  
* GPU and disk temperature reporting  
* Low resource consumption (~8MB RAM per agent)  
* Integration with notification platforms (Slack, Discord, Telegram, Email, etc.)  
* OIDC authentication support (can integrate with Tailscale or other identity providers)  

The Beszel architecture is built around a **hub-and-agent model**:  
* **Hub** – A central server that collects and displays monitoring data  
* **Agents** – Installed on each host to send data back to the hub  

<br>

## Beszel Hub Setup

The **hub** can be run inside Docker, a VM, or even an LXC container. Because it is lightweight, it doesn’t require enterprise-grade hardware.  

A common setup is to deploy the Beszel hub in Docker with Tailscale for secure networking. This allows you to connect remote systems across the globe without opening firewall ports.  

High-level steps for hub setup:  
* Deploy a small VM or container (Ubuntu/Debian recommended)  
* Install Docker and Tailscale  
* Configure hub deployment with a `docker-compose.yaml` file  
* Enable Tailscale Serve for automatic TLS certificates and reverse proxy support  

Once deployed, the hub will be accessible securely via your Tailscale tailnet.  

<br>

## Beszel Clients (Agents)

Beszel agents can be installed on:  
* Linux hosts (binary or Docker-based)  
* Proxmox nodes  
* Windows (compiled Go binary or via WSL2)  
* Even Home Assistant as an add-on  

On Linux, installation is as simple as running a one-line install script and providing the SSH key from your Beszel hub. Windows setups can be trickier, but running the agent as a service via tools like **NSSM** makes it persistent and reliable.  

Once installed, the agent reports back system metrics like CPU load, memory usage, disk usage, GPU power draw, and network throughput.  

<br>

## Real-World Example

A key strength of Beszel is **multi-site monitoring**. For example, you could:  
* Run a Beszel hub in North America  
* Install agents on Proxmox hosts in Europe  
* Securely connect everything with Tailscale  

Within minutes, you’d have real-time monitoring of remote infrastructure with **no firewall changes** required.  

<br>

## Notifications & Integrations

Beszel integrates with multiple platforms to send alerts, including:  
* Slack  
* Discord  
* Telegram  
* Email  
* Mattermost  
* If-This-Then-That (IFTTT)  

This means you can get notified instantly if a server overheats, disk usage spikes, or a host goes offline.  

<br>

## Conclusion

Beszel is not meant to replace large enterprise monitoring stacks, but it fills a valuable niche: **lightweight, secure, and easy-to-deploy monitoring for smaller environments**. Its integration with [Tailscale](https://tailscale.com/blog/video-beszel) makes it especially appealing for distributed environments where remote monitoring without firewall headaches is a must.  

If you’re looking for a middle ground between uptime checkers and full-blown Grafana dashboards, **Beszel is a fantastic option** to explore for 2025 and beyond.  

📝 For more information about Beszel, please review this [official documentation](https://beszel.dev/guide/getting-started). Also, [this](https://www.youtube.com/watch?v=O_9wT-5LoHM) is a great youtube video about Beszel.