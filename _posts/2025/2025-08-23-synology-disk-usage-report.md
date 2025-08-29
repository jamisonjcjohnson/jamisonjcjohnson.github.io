---
title: Generating a Disk Usage Report in Storage Analyzer (Synology NAS)
layout: post
date: '2025-08-23'
description: Monitoring storage utilization on your Synology NAS is essential for maintaining performance and ensuring you don’t run into space issues. 
intro: "In this blog post, we will walk through how to install and configure Storage Analyzer, create scheduled tasks, and export detailed disk usage reports." 
lang: en_US
image: "/static/assets/img/blog/2025/synology-disk-usage-report/synology-disk-usage-report.png"
keywords: synology,networking,backup,reports
categories:
- Other
tags:
- synology
- networking
- backup
- reports
icon: fa-server
---

Monitoring storage utilization on your Synology NAS is essential for maintaining performance and ensuring you don’t run into space issues. The **Storage Analyzer** package makes this easy by generating disk usage reports that provide insights into which folders, file types, or users are consuming the most space.  

In this blog post, we will walk through how to install and configure Storage Analyzer, create scheduled tasks, and export detailed disk usage reports.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

* Synology NAS with DSM 6.2 or 7.x installed  
* Storage Analyzer package installed  
* User account with administrative privileges  

<br>

## Step 1: Install the Storage Analyzer Package

1. Log into DSM using your browser.  
2. Open **Package Center**.  
3. Search for **Storage Analyzer**.  
4. Click **Install** (or **Open** if already installed).  

<br>

## Step 2: Open Storage Analyzer

1. Go to **Main Menu** → **Storage Analyzer**.  
2. If it’s your first time, it will prompt you to **create a report task**.  

<br>

## Step 3: Create a Disk Usage Report Task

1. Click **Create** (or “Create Task”).  
2. **Task Name**: Name it something descriptive like `Weekly Disk Usage`.  
3. **Select Report Type**:  
   * Choose **Volume usage**, **Shared folder usage**, or both depending on what you want to track.  
4. **Select Volumes or Shared Folders**:  
   * Pick which volume(s) or shared folder(s) you want to analyze.  
5. **Schedule**:  
   * Set how often you want the report generated (e.g., Daily, Weekly).  
   * Choose a **start time** (e.g., Mondays at 7:00 AM).  
6. **Email Settings (Optional)**:  
   * If email notifications are configured in DSM, you can choose to send the report to your email.  
7. **Permissions**:  
   * Choose who can view the report (the admin user is sufficient).  

Click **Done** when finished.  

**Note**: Reports are saved locally (e.g., `/Volume1/Data/Reports/`).  

<br>

## Step 4: View the Disk Usage Report

After the task runs:  

1. Go to **Storage Analyzer**.  
2. Click the **Reports** tab.  
3. Choose your report (e.g., “Weekly Disk Usage”).  
4. You’ll see:  
   * Pie charts of disk space usage  
   * Top 10 largest shared folders  
   * File types consuming the most space  
   * Reports by size, age, owner, etc.  

You can click into each section for more detail.  

<br>

## Step 5: Export the Report (Optional)

1. While viewing a report, click **Export** in the top-right.  
2. Choose format: PDF, CSV, etc.  
3. Save it locally or attach it to emails for tracking.  

<br>

## Step 6: Edit or Delete a Report Task

* Go to the **Task List** tab in Storage Analyzer.  
* Click the **3-dot menu** next to the task.  
* Choose **Edit** or **Delete**.  

<br>

## Best Practices

* Schedule weekly reports for consistent monitoring.  
* Set email notifications if you're not logging in daily.  
* Periodically clean up large or old files based on the report.  
* Combine this with **Storage Manager** alerts for low disk warnings.  

<br>

## Conclusion

By configuring Storage Analyzer on your Synology NAS, you gain a powerful way to track disk usage, identify storage bottlenecks, and manage space proactively. Regular reporting not only helps keep your NAS organized but also prevents unexpected capacity issues before they disrupt workflows.  
