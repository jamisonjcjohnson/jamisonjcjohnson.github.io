---
title: Understanding firewall-cmd Rich Rules
layout: post
date: '2023-12-22'
description: Let's delve into mastering `firewall-cmd` rich rules to fortify your system's defenses.
intro: "Mastering `firewall-cmd` rich rules grants you unparalleled control over network traffic, allowing you to enforce precise security measures. Leveraging the flexibility of rich rules, you can create intricate firewall configurations tailored to your system's specific needs."
lang: en_US
image: "/static/assets/img/blog/2023/understanding_firewallcmd_rich_rules/understanding_firewallcmd_rich_rules.jpg"
keywords: firewall,security,rhel,linux
categories:
- Linux
tags:
- firewall
- security
- rhel
- linux
icon: fa-linux
---


Securing your system's network connectivity is paramount, and `firewall-cmd` provides a robust set of tools to manage firewall configurations. Among its powerful features, rich rules stand out for their flexibility and fine-grained control. Let's delve into mastering `firewall-cmd` rich rules to fortify your system's defenses.

<br>

* TOC 
{:toc}

<br>

## Understanding Rich Rules

`firewall-cmd` allows the creation of custom firewall rules using rich rules. These rules offer granular control over traffic by specifying various criteria such as source and destination IP addresses, ports, protocols, and more.

<br>

### Basic Syntax

The basic syntax of a rich rule is structured as follows:

```bash
firewall-cmd --add-rich-rule='RULE'
```

Here, `RULE` represents the specific criteria and actions you wish to define.

<br>

## Common Usage Examples

<br>

### 1. Accepting Traffic

Allowing incoming traffic on a specific port (e.g., port 80 for HTTP):

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" port port=80 protocol=tcp accept'
```

<br>

### 2. Rejecting Traffic

Rejecting traffic from a specific IP address:

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" source address="IPADDRESS" reject'
```

Here, `IPADDRESS` represents the specific IPADDRESS that you want to reject.

<br>

### 3. Filtering Based on Interfaces

Filtering based on network interfaces (e.g., allowing traffic from a specific interface):

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" source interface="eth0" accept'
```

<br>

### 4. Limiting Access to Specific Services

Restricting access to SSH from a specific subnet:

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" service name="ssh" source address="192.168.x.x/24" accept'
```

<br>

### 5. Time-Based Rules

Creating rules based on time (e.g., allowing traffic during specific hours):

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" source address="192.168.x.x" service name="ssh" accept time="08:00-17:00" day="Mon,Tue,Wed,Thu,Fri"' --permanent
```

*This command allows SSH traffic from the specified source IP (192.168.x.x) during the time frame from 8:00 AM to 5:00 PM, Monday-Friday. Adjust the service name (ssh) and the time range to fit your specific requirements.*

<br>

### 6. Combining Multiple Conditions

Combining conditions (e.g., allowing traffic from a specific subnet and rejecting traffic from another):

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" source address="192.168.x.x/24" accept' --add-rich-rule='rule family="ipv4" source address="10.0.x.x/24" reject'
```

<br>

## Modifying and Removing Rules

<br>

### Modifying Rules

To modify an existing rule, specify the new rule and use the `--permanent` flag to make it persistent:

```bash
firewall-cmd --add-rich-rule='rule family="ipv4" port port=443 protocol=tcp accept' --permanent
```

### Removing Rules

Removing rules can be achieved using the `--remove-rich-rule` option followed by the rule to be removed:

```bash
firewall-cmd --remove-rich-rule='rule family="ipv4" port port=80 protocol=tcp accept'
```

Don't forget to reload the firewall to apply the changes:

```bash
firewall-cmd --reload
```

<br>

## Conclusion

Mastering `firewall-cmd` rich rules grants you unparalleled control over network traffic, allowing you to enforce precise security measures. Leveraging the flexibility of rich rules, you can create intricate firewall configurations tailored to your system's specific needs.

These examples serve as a starting point to explore the capabilities of `firewall-cmd` rich rules. Experiment, adapt, and refine these rules to fortify your system's defenses against potential threats.

<br>

📝 For detailed firewall-cmd commands and advanced usage, refer to the  [Firewall-cmd Manual Pages](https://firewalld.org/documentation/man-pages/firewall-cmd.html).

