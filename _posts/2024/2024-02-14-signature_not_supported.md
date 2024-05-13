---
title: Unraveling the "Signature not supported. Hash algorithm SHA1 not available" Error
layout: post
date: '2024-02-14'
description: This blog post aims to shed light on the causes behind this error and provides a detailed guide on how to resolve it.
intro: "Resolving the `Signature not supported. Hash algorithm SHA1 not available` error involves identifying and removing the incompatible GPG key. This process ensures that the RPM packages from third-party repositories align with the hash algorithms supported by your system."
lang: en_US
image: "/static/assets/img/blog/2024/signature_not_supported/signature_not_supported.jpg"
keywords: rhel,linux,dnf,hash,package_manager
categories:
- Linux
tags:
- rhel
- linux
- dnf
- hash
- package_management
icon: fa-linux
---


Encountering errors in  software installations can be both perplexing and frustrating. One such error that users often face, especially when dealing with RPM packages, is the `Signature not supported. Hash algorithm SHA1 not available"` warning. This blog post aims to shed light on the causes behind this error and provides a detailed guide on how to resolve it.

<br>

* TOC 
{:toc}

<br>

## Understanding the Error:

The warning suggests that the GPG signature of an RPM package is not compatible with the available hash algorithms, specifically SHA1. This commonly occurs when dealing with third-party repositories that might use outdated or less secure signing methods.

<br>

## Identifying GPG Keys:

Before diving into the resolution, it's crucial to identify the GPG keys currently present on the system. Execute the following command to view a list of GPG public keys:

```bash
rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\t%{SUMMARY}\n'
```

This command provides a detailed summary of the GPG keys installed, including their names, versions, releases, and summaries.

<br>

## Resolving the Issue

<br>

### Locate the Undesirable GPG Key:
Identify the GPG key associated with the error, which usually corresponds to a **third-party repository**.

<br>

### Remove the Undesirable GPG Key:
Use the following command to remove the undesired GPG key, replacing `xxxxxxxx-xxxxxxxx` with the actual key:


```bash
sudo rpm -e --allmatches gpg-pubkey-xxxxxxxx-xxxxxxxx
```
This command removes all occurrences of the specified GPG key.

<br>

## Conclusion

Resolving the `Signature not supported. Hash algorithm SHA1 not available` error involves identifying and removing the incompatible GPG key. This process ensures that the RPM packages from third-party repositories align with the hash algorithms supported by your system.

Remember, **<span style="color: red;">CAUTION </span>** should be exercised when removing GPG keys, especially if they are associated with critical repositories. Always ensure that you are comfortable with the origin of the key before proceeding with removal. In other words, make sure you know how to get the key back if necessary.

By following these steps, users can navigate through this error, enhancing the overall stability and security of their RPM-based systems.

<br>

📝 For more information about SHA-1's deprecation, refer to this [Red Hat Blog Article](https://www.redhat.com/en/blog/rhel-security-sha-1-package-signatures-distrusted-rhel-9).


