---
title: Obtaining a Red Hat Developer Subscription and Activating RHEL9
layout: post
date: '2023-12-13'
description: This guide walks you through the process of acquiring the subscription, downloading the official RHEL9 ISO, registering your machine, and activating it for updates.
intro: "If you're a developer looking to access RHEL9 and receive updates, obtaining a Red Hat Developer Subscription is the first step."
lang: en_US
image: "/static/assets/img/blog/2023/redhat_developer_subscription/redhat_developer_subscription1.png"
keywords: rhel,linux,security,developer
categories:
- Linux
tags:
- rhel
- linux
- security
- developer
icon: fa-linux
---


Red Hat Enterprise Linux (RHEL) is a powerful operating system known for its robustness and security features. If you're a developer looking to access RHEL9 and receive updates, obtaining a Red Hat Developer Subscription is the first step. This guide walks you through the process of acquiring the subscription, downloading the official RHEL9 ISO, registering your machine, and activating it for updates.

<br>

* TOC 
{:toc}

<br>

## Obtaining a Red Hat Developer Subscription

<br>

### Sign Up for a Red Hat Account

**Create a Red Hat Account**: Visit the [Red Hat Developer Program](https://developers.redhat.com/about) and sign up for a new account if you don't have one already.

<br>

## Downloading RHEL9 ISO

<br>

### Accessing the RHEL9 ISO

1. **Navigate to Downloads**: After activating your subscription, go to the [Red Hat Developer Downloads](https://developers.redhat.com/products/rhel/download) page.
2. **Select RHEL9**: Locate RHEL9 in the list of available versions and select it.
3. **Download the ISO**: Choose the appropriate architecture (x86_64, ARM64, etc.) and download the RHEL9 ISO file to your local machine.

<br>

## Registering and Activating RHEL9

<br>

### Registering the Machine

Once the machine/server has been imaged/configured with the ISO that was downloaded, do the following : 

**Open Terminal**: Access the terminal on your RHEL9 system.

**Register the System**: Use the following command to register your machine with Red Hat using your Red Hat account credentials:

   ```bash
   sudo subscription-manager register --username <your_username>
   ```

   - *You will be prompted for a password, enter your RedHat Developers Account Password*
   - You will be registered to `subscription.rhsm.redhat.com:443/subscription` after you enter your RedHat Developer password.
   - You will receive a message in the terminal stating that **The system has been registed with ID** : `RANDOM SET of CHARACTERS`. The registered system name is : `HOSTNAME`


**Attach the Subscription**: After successful registration, attach the machine to your active subscription to receive updates:


```bash
sudo subscription-manager attach --auto
```

This command automatically detects available subscriptions and attaches the system to the appropriate one.


<br>

## Conclusion

Congratulations! You've successfully obtained a Red Hat Developer Subscription, downloaded the official RHEL9 ISO, registered your machine, and activated it for updates. RHEL9 is now ready for use, and you'll receive regular updates to ensure its security and functionality!

<br>

📝 For more detailed instructions and information, you can refer to the official [RedHat documentation](https://developers.redhat.com/articles/getting-red-hat-developer-subscription-what-rhel-users-need-know?source=sso#updated_development_tools__red_hat_software_collections). 