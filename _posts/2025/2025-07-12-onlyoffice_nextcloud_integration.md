---
title: Integrating OnlyOffice with Nextcloud
layout: post
date: '2025-07-12'
description: Nextcloud is a powerful self-hosted collaboration suite—but by default, it lacks the ability to edit Office documents like Word, Excel, or PowerPoint directly in the browser.
intro: "In this blog post, we’ll walk through the process of integrating a self-hosted OnlyOffice server with a Nextcloud instance." 
lang: en_US
image: "/static/assets/img/blog/2025/onlyoffice_nextcloud_integration/onlyoffice_nextcloud_integration.jpg"
keywords: linux,nextcloud,onlyoffice
categories:
- Linux
tags:
- linux
- nextcloud
- onlyoffice
icon: fa-linux
---

Nextcloud is a powerful self-hosted collaboration suite—but by default, it lacks the ability to edit Office documents like Word, Excel, or PowerPoint directly in the browser. OnlyOffice fills this gap by providing a robust, Microsoft-compatible document editor you can run on your own infrastructure.

In this blog post, we’ll walk through the process of integrating a self-hosted OnlyOffice server with a Nextcloud instance. This guide covers the installation of the OnlyOffice app in Nextcloud and the necessary configuration to link the two systems.

<br>

* TOC 
{:toc}

<br>

## Requirements

- A working **Nextcloud** instance (version 20+ recommended)
- A separate, self-hosted **OnlyOffice Document Server**
- HTTPS certificates on the OnlyOffice server
- Access to both servers via browser and terminal
- Admin privileges in your Nextcloud instance

<br>

## Step 1: Install the OnlyOffice App in Nextcloud

To enable integration between Nextcloud and your OnlyOffice server:

- Log in to your **Nextcloud** web interface as an **admin** user.
- Click your profile picture in the top-right corner, then go to **Apps**.
- In the left-hand menu, click **Tools**.
- Search for **OnlyOffice** using the search bar.
- Click **Download and enable**.

This installs the official OnlyOffice integration app within your Nextcloud system.

<br>

## Step 2: Configure the OnlyOffice Integration

Once the app is installed:

- Go to **Settings > Administration > ONLYOFFICE**.
- Enter the following values:

   - **ONLYOFFICE Docs address**:  
     `https://onlyoffice.domain.org/`

   - **Secret key**:  
     Copy this from your OnlyOffice server’s configuration file:  
     **/etc/onlyoffice/documentserver/local.json**

     Look for the `secret` field under any section (`inbox`, `outbox`, or `session`) — the value is the same in all of them.

   - **Authorization header**:  
     `AuthorizationJWT`

- Click **Save**.

<br>

## Step 3: Verify the Integration

Now that everything is connected:

- Navigate to your **Files** section in Nextcloud.
- Upload a `.docx`, `.xlsx`, or `.pptx` file.
- Click on the file — it should open in the browser using OnlyOffice.

You can now create and edit documents inside of Nextcloud. Without OnlyOffice, this feature is not available.

<br>

## Conclusion

Connecting OnlyOffice to your Nextcloud server enables powerful in-browser editing of Office documents, completely self-hosted and under your control. With just a few steps — installing the app, configuring the connection, and setting the shared secret—you unlock seamless integration between file storage and document editing.

If you're looking for a secure and private Google Docs alternative, this setup is a great place to start.

<br>

📝 For more information about this integration, please review [About the ONLYOFFICE and Nextcloud integration](https://helpcenter.onlyoffice.com/integration/nextcloud.aspx).