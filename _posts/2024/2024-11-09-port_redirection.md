---
title: Port Redirection on RHEL Servers
layout: post
date: '2024-11-09'
description: Port redirection is a powerful tool for managing network traffic.
intro: "This post will explore why port redirection is important, when it should be configured, and how to do so using `firewalld`." 
lang: en_US
image: "/static/assets/img/blog/2024/port_redirection/port_redirection.jpg"
keywords: linux,security,terminal
categories:
- Linux
tags:
- linux
- security
- terminal
icon: fa-linux
---

In a Red Hat Enterprise Linux (RHEL) environment, port redirection is a powerful tool for managing network traffic. By redirecting ports, you can control how traffic is routed to services on your server, enhancing both security and flexibility. This post will explore why port redirection is important, when it should be configured, and how to do so using `firewalld`.

<br>

* TOC 
{:toc}

<br>

## What is Port Redirection?

Port redirection, also known as port forwarding or port mapping, involves rerouting network traffic from one port to another. This technique is commonly used to allow services running on non-standard ports to be accessible through standard ports, or to redirect traffic for load balancing or security purposes.

For example, you might want to redirect traffic from port 80 (HTTP) to port 8080, where your web server is actually running. Or, you might forward traffic from a high, unprivileged port to a lower, privileged port that requires elevated permissions to bind to.

<br>

## Why is Port Redirection Important?

Port redirection is crucial for several reasons:

<br>

### 1. **Security**

By redirecting traffic from well-known ports to non-standard ports, you can obscure your services from attackers who often target common ports. This security-by-obscurity approach can be an additional layer in your defense strategy.

<br>

### 2. **Resource Management**

Some services may need to run on privileged ports, but due to security or configuration constraints, they are configured to run on higher, non-privileged ports. Port redirection allows these services to be accessible on their expected ports without compromising the system’s integrity.

<br>

### 3. **Compliance**

In some cases, compliance with organizational policies or industry standards may require services to be accessible on specific ports. Port redirection can help meet these requirements without having to reconfigure the services themselves.

<br>

### 4. **Load Balancing and Traffic Management**

Port redirection can be used to distribute traffic across multiple servers or services, helping to balance the load and improve performance. By redirecting traffic based on port, you can efficiently manage where and how traffic is handled on your network.

<br>

## When Should Port Redirection be Configured Using `firewalld`?

`firewalld` is a dynamic firewall management tool in RHEL that supports network/firewall zones to define the trust level of network connections or interfaces. Configuring port redirection using `firewalld` is appropriate in several scenarios:

<br>

### 1. **Simplifying Firewall Rules**

When managing complex firewall configurations, `firewalld` allows you to set up port redirection within its zone-based framework, making it easier to manage and visualize the flow of traffic.

<br>

### 2. **Persistent and Dynamic Rules**

`firewalld` supports both permanent and runtime configurations. This means you can set up port redirection rules that persist across reboots or only apply them temporarily, depending on your needs.

<br>

### 3. **Zone-Based Security**

With `firewalld`, you can apply port redirection rules specific to particular zones. This is useful when different parts of your network have varying security requirements, allowing you to tailor your redirection rules accordingly.

<br>

### 4. **Integration with Other Services**

`firewalld` integrates well with other services and tools on RHEL, such as SELinux and NetworkManager. This makes it easier to manage port redirection in a way that’s consistent with your overall security posture.

<br>

## How to Configure Port Redirection Using `firewalld`

Configuring port redirection with `firewalld` is straightforward. Here’s how you can set it up:

<br>

### 1. **Redirecting a Port**

To redirect traffic from one port to another, use the `--add-forward-port` option. For example, to redirect traffic from `port 80` to `port 8080`:

```bash
sudo firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=8080
```
<br>

### 2. Making the Configuration Permanent
If you want the port redirection rule to persist after a reboot, add the --permanent flag:

```bash
sudo firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=8080 --permanent
```

After making the change permanent, reload firewalld to apply the configuration:

```bash
sudo firewall-cmd --reload
```

<br>

### 3. Redirecting Traffic to a Different IP Address
You can also redirect traffic to a different IP address. For example, to redirect traffic from port 80 to port 8080 on IP address 192.168.1.100:

```bash
sudo firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toaddr=192.168.1.100:toport=8080 --permanent
sudo firewall-cmd --reload
```

<br>

### 4. Viewing and Removing Port Redirection Rules
To view the current port redirection rules, use:

```bash
sudo firewall-cmd --zone=public --list-forward-ports
```

To remove a port redirection rule, use the `--remove-forward-port` option:

```bash
sudo firewall-cmd --zone=public --remove-forward-port=port=80:proto=tcp:toport=8080 --permanent
sudo firewall-cmd --reload
```

<br>


## Conclusion
Port redirection is an essential tool for managing and securing network traffic on RHEL servers. By using firewalld to configure port redirection, you gain a flexible, integrated, and manageable way to control how traffic flows to and from your services. Whether for security, resource management, or compliance, understanding and implementing port redirection can help you maintain a secure and efficient server environment.

📝 For more information about port redirection, review this [official RedHat documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_firewalls_and_packet_filters/using-and-configuring-firewalld_firewall-packet-filters#redirecting-traffic-from-a-non-standard-port-to-make-the-web-service-accessible-on-a-standard-port_assembly_configuring-nat-using-firewalld).
