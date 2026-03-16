---
title: Uptime Kuma with Authelia Integration
layout: post
date: '2026-03-15'
description: Learn how to place Uptime Kuma behind Authelia to provide centralized Active Directory or LDAP authentication through a reverse proxy.
intro: "Uptime Kuma is a lightweight monitoring platform, but it does not natively provide enterprise-friendly AD or LDAP authentication. A common solution is to place it behind Authelia and a reverse proxy so access can be controlled centrally."
lang: en_US
image: "/static/assets/img/blog/2026/uptime-kuma-authelia-integration/uptime-kuma-authelia-integration.jpg"
keywords: uptime kuma,authelia,ldap,active directory,authentication,monitoring,reverse proxy
categories:
- Linux
tags:
- uptime-kuma
- authelia
- ldap
- active-directory
- authentication
- monitoring
icon: fa-desktop

---

Uptime Kuma is a great self-hosted monitoring tool, but its native authentication model is not ideal for organizations that want centralized login tied to Active Directory or LDAP. A practical and proven approach is to place Uptime Kuma behind Authelia, then let Authelia handle authentication against your directory service through a reverse proxy. In this blog post, we will summarize how to configure Uptime Kuma with Authelia for AD/LDAP-backed access, while keeping the setup clean and maintainable.

<br>

* TOC
  {:toc}

<br>

## Why Put Uptime Kuma Behind Authelia?

Uptime Kuma is commonly deployed behind a reverse proxy, and its own documentation specifically calls out reverse proxy usage and the need to handle WebSocket headers correctly. Authelia is designed to sit in front of applications through supported proxy integrations and can authenticate users against LDAP, including Active Directory.

This model gives you:

- Centralized AD/LDAP authentication
- Group-based access control
- Optional MFA later
- A cleaner security boundary in front of Uptime Kuma

<br>

## High-Level Architecture

The flow is straightforward:

- User browses to the Uptime Kuma URL
- Reverse proxy checks authentication with Authelia
- Authelia validates credentials against LDAP or Active Directory
- Authenticated users are allowed through to Uptime Kuma

At a minimum, the stack includes:

- Uptime Kuma
- Authelia
- A reverse proxy such as Nginx, Caddy, or Traefik
- Active Directory or another LDAP directory

Helpful references:

- https://github.com/louislam/uptime-kuma
- https://github.com/louislam/uptime-kuma/wiki
- https://github.com/louislam/uptime-kuma/wiki/Reverse-Proxy
- https://www.authelia.com/docs/
- https://www.authelia.com/integration/proxies/introduction/
- https://www.authelia.com/configuration/first-factor/ldap/
- https://www.authelia.com/integration/ldap/activedirectory/

<br>

## Step 1: Deploy Uptime Kuma

Start by deploying Uptime Kuma normally and confirm it works before adding authentication.

Verify:

- The web UI loads locally
- Monitors are functioning
- The built-in admin account is configured
- You know which hostname or URL will be protected by Authelia

<br>

## Step 2: Deploy Authelia

Deploy Authelia as the authentication layer.

Ensure:

- A working configuration.yml
- Session storage configured
- Storage backend configured
- LDAP or AD connectivity working
- Reverse proxy in place

<br>

## Step 3: Configure LDAP / Active Directory

Configure Authelia to authenticate against your directory.

Typical items:

- LDAP or LDAPS server address
- Base DN
- Bind DN and password
- User search filter
- Group search filter
- Attribute mappings
- TLS requirements

<br>

## Step 4: Configure the Reverse Proxy

Authelia requires a supported proxy to enforce authentication.

Common choices:

- Nginx
- Traefik
- Caddy

Ensure:

- Authentication checks are enabled
- Headers are forwarded properly
- WebSocket support is enabled for Uptime Kuma
- TLS termination is configured

<br>

## Step 5: Protect the Uptime Kuma URL

Create access control rules in Authelia to protect the application.

You can restrict access to:

- Any authenticated user
- Specific AD groups
- Users requiring MFA (optional)

Reference:

- https://www.authelia.com/configuration/security/access-control/

<br>

## Step 6: Test the Authentication Flow

Verify end-to-end operation:

- Browse to the Uptime Kuma URL
- Confirm redirect to Authelia login
- Authenticate with AD/LDAP credentials
- Confirm redirect back to Uptime Kuma
- Ensure dashboard loads normally

Troubleshoot using:

- Authelia logs
- Reverse proxy logs
- LDAP connectivity checks
- DNS and TLS validation

<br>

## Optional Security Enhancements

Authelia supports additional protections:

- Multi-factor authentication
- Session expiration policies
- Trusted devices
- Network-based access rules

Security documentation:

- https://www.authelia.com/overview/security/measures/

<br>

## Summary Review

Benefits:

- Centralized authentication using AD/LDAP
- Supports MFA and enterprise policies
- Works with many self-hosted apps
- Keeps Uptime Kuma simple
- Enables consistent login experience

Considerations:

- Requires reverse proxy infrastructure
- Adds configuration complexity
- Authentication depends on Authelia availability

<br>

## Final Thoughts

Integrating Uptime Kuma with Authelia provides a secure, enterprise-ready authentication solution using existing Active Directory or LDAP infrastructure. While the setup involves multiple components, the result is centralized access control, improved security, and a consistent authentication experience across services. This approach is especially effective for organizations that want strong identity management without modifying the underlying application.
