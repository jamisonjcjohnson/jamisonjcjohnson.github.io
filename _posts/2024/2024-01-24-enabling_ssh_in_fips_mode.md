---
title: Enabling SSH While FIPS Mode is Enabled on RHEL
layout: post
date: '2024-01-24'
description: In the realm of secure communication between systems, generating SSH keys plays a pivotal role. The `ssh-keygen` command allows users to create cryptographic keys used for authenticating and securing connections.
intro: "Enforcing FIPS mode can bolster security, but it sometimes restricts remote access, including SSH connections."
lang: en_US
image: "/static/assets/img/blog/2024/enabling_ssh_in_fips_mode/enabling_ssh_in_fips_mode.jpg"
keywords: ssh,security,rhel,linux
categories:
- Linux
tags:
- ssh
- security
- rhel
- linux
icon: fa-linux
---

Maintaining stringent security measures without hindering accessibility is a paramount concern, especially in environments employing Federal Information Processing Standards (FIPS). Enforcing FIPS mode can bolster security, but it sometimes restricts remote access, including SSH connections.

In the realm of secure communication between systems, generating SSH keys plays a pivotal role. The `ssh-keygen` command allows users to create cryptographic keys used for authenticating and securing connections.

<br>

* TOC 
{:toc}

<br>

## Understanding the ECDSA Key Generation

When it comes to SSH key generation, specifying the right algorithm and key size is crucial for robust security. The command `ssh-keygen -t ecdsa -b 384` is significant in this context. It generates an Elliptic Curve Digital Signature Algorithm (ECDSA) key of 384 bits.

- `-t ecdsa`: Specifies the key type as ECDSA.
- `-b 384`: Sets the key size to 384 bits.

<br>

### The Importance of Key Size

The key size directly impacts security. Larger key sizes usually mean stronger security but might require more computational resources. The ECDSA algorithm with a 384-bit key size is considered secure and robust, providing a balance between computational efficiency and security.

<br>

### Why ECDSA Keys?

ECDSA keys are based on elliptic curve cryptography, offering resilience against potential attacks, including those from quantum computers. These keys provide a high level of security for data transmission and user authentication.

<br>

## Significance of Generating the ECDSA Key

The ECDSA key generated using `ssh-keygen -t ecdsa -b 384` comprises a public-private key pair. The private key remains with the user, while the public key is shared across systems. This pair is integral to secure communication:

- **Authentication:** The public key is stored on servers or systems to authenticate the user attempting to access them.
- **Encryption:** The private key encrypts data, ensuring secure communication between systems.

<br>

## Disabling FIPS on the Remote Machine

When encountering issues with SSH while FIPS is enabled, temporarily disabling FIPS facilitates remote access. Here are the steps:

- **Disable FIPS:**
   ```bash
   sudo fips-mode-setup --disable
   ```
- **Reboot:**
   ```bash
   sudo reboot
   ```

<br>

## Generating SSH Key and Enabling FIPS Again

With FIPS temporarily disabled, proceed to generate an SSH key for the remote host and copy it to the inaccessible machine:

- **Generate SSH Key for Remote Host:**
   ```bash
   ssh-keygen -t ecdsa -b 384
   ```

- **Copy SSH Key to the Remote Machine:**
   ```bash
   ssh-copy-id -i ~/.ssh/id_ecdsa.pub admin@IPADDRESS/HOSTNAME
   ```

<br>

## Re-Enabling FIPS and Accessing via SSH

Now, re-enable FIPS on the remote machine to reinstate heightened security:

- **Enable FIPS:**
   ```bash
   sudo fips-mode-setup --enable
   ```

- **Reboot:**
   ```bash
   reboot
   ```

- **SSH Into the Machine:**
   ```bash
   ssh username@IPADDRESS/HOSTNAME
   ```

<br>

## Confirming FIPS Status

To ensure FIPS mode is reactivated post-access restoration:

- **Enable FIPS:**
   ```bash
   sudo fips-mode-setup --check
   ```

<br>

## Conclusion

Creating an ECDSA key with `ssh-keygen -t ecdsa -b 384` is crucial for establishing secure connections. The chosen algorithm and key size significantly impact the level of security and resilience against potential threats, making it a fundamental step in ensuring secure communication in a networked environment. Taking this step will allow you to securing SSH into a machine while FIPS mode is enabled.


<br>

📝 For more information about ECDSA, refer to [this](https://ecdsa.readthedocs.io/en/latest/) article!
