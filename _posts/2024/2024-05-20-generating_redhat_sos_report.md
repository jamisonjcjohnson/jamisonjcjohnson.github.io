---
title: Generating a SOS Report for RedHat Support
layout: post
date: '2024-05-09'
description: We'll walk you through the steps to generate an SOS report for RedHat Support.
intro: "Generating a System Overview Snapshot (SOS) report can provide valuable information for troubleshooting and seeking support from RedHat."
lang: en_US
image: "/static/assets/img/blog/2024/generating_redhat_sos_report/generating_redhat_sos_report.jpg"
keywords: redhat,linux,sosreport
categories:
- Linux
tags:
- redhat
- linux
- sosreport
icon: fa-linux
---

When encountering issues with your RedHat system, generating a System Overview Snapshot (SOS) report can provide valuable information for troubleshooting and seeking support from RedHat. An SOS report captures system configuration, logs, and diagnostic information, helping RedHat Support engineers analyze the problem efficiently.

In this guide, we'll walk you through the steps to generate an SOS report for RedHat Support.

<br>

* TOC 
{:toc}

<br>

## Step 1: Access Terminal

To generate an SOS report, you'll need to access the terminal on your RedHat system. You can do this by opening the Terminal application or using SSH to connect remotely.

<br>

## Step 2: Run the SOS Command

Once you're in the terminal, run the following command to generate the SOS report:

```bash
sudo sosreport
```

You may be prompted to enter your password. Once entered, the SOS report generation process will begin.

<br>

## Step 3: Follow the Prompts
During the SOS report generation, you may encounter prompts asking for additional information. Answer the prompts accordingly to provide context for the report. You will be asked to enter a case id that you are generating this report for, this is optional.

## Step 4: Wait for the Report to Generate
The SOS report generation process may take some time, depending on the size and complexity of your system. Be patient and allow the command to complete its execution.

<br>

## Step 5: Locate the Generated Report
Once the SOS report is generated, you'll receive a message indicating the location of the report file. Typically, the report is saved in the `/var/tmp` directory.

<br>

## Step 6: Share the Report with RedHat Support
After locating the SOS report file, you can share it with RedHat Support for analysis and assistance. You can upload the report to the RedHat Customer Portal or attach it to your support ticket.

<br>

## Conclusion
Generating an SOS report is a crucial step in troubleshooting issues on your RedHat system. By providing comprehensive system information, logs, and diagnostics, the SOS report empowers RedHat Support engineers to diagnose and resolve problems effectively.

We hope this guide has been helpful in guiding you through the process of generating an SOS report for RedHat Support. If you encounter any issues or have questions, don't hesitate to reach out to RedHat Support for assistance.

<br>

📝 For more information about RedHat SOS Reports, you can refer to this [RedHat Knowledgebase Article](https://access.redhat.com/solutions/3592). 