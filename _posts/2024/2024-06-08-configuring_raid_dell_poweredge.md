---
title: Configuring RAID on Dell PowerEdge Servers
layout: post
date: '2024-05-09'
description: We'll walk through the process of creating a RAID configuration on a 13th generation PowerEdge server.
intro: "Configuring RAID on Dell PowerEdge servers is crucial for data integrity and system performance."
lang: en_US
image: "/static/assets/img/blog/2024/configuring_raid_dell_poweredge/configuring_raid_dell_poweredge.jpg"
keywords: dell,raid,server
categories:
- Other
tags:
- dell
- raid
- server
icon: fa-server
---

If you're setting up a Dell PowerEdge server, configuring RAID is an essential step to ensure data redundancy and performance. In this guide, we'll walk through the process of creating a RAID configuration on a 13th generation PowerEdge server using the Device Settings menu.

<br>

* TOC 
{:toc}

<br>

## Step-by-Step Guide

### 1. Access Device Settings
- Press the **F2** key during POST to enter the System Setup Menu.
- Alternatively, press **F10** during POST, select **System Setup**, then **Hardware Settings** from the LifeCycle Controller menu.
- Click on **Device Settings**.

<br>

### 2. Choose RAID Controller
- Select the RAID controller you want to configure.

<br>

### 3. Create Virtual Disk
- Click on **Main Menu**.
- Click on **Configuration Management**.
- Select **Create Virtual Disk**.
- Choose RAID level and physical disks configuration.
- Choose Physical Disks From "typically Unconfigured Capacity"
- Click **Select Physical Disk**.
- Choose media type, select interface type, and locial section size.
- Next, choose which physical disks will be used to configure the RAID.
- Click **Apply Changes**.
- Click **OK**.
- Enter virtual disk name, then confirm the disk size, and other options.
- Click **Create Virtual Disk**.
- <span style="color:red;">**When creating a virtual disk, ALL DATA will be wiped from ALL DRIVES!!!**</span>
- Confirm and click **Yes**.

<br>

### 4. Verify or Change Configuration
- Click **Virtual Disk Management**.
- Verify the virtual disk summary including name, size, and status.
- Click on any virtual disk to verify or change its configuration details.
- You can change the name and other settings under **Advanced**.
- Click **Apply Changes** after making any modifications.

<br>

## Conclusion

Configuring RAID on Dell PowerEdge servers is crucial for data integrity and system performance. By following these steps, you can create a RAID configuration that meets your specific requirements and ensures the reliability of your server storage.

For more detailed instructions and troubleshooting tips, refer to the official documentation provided by Dell.

<br>

📝 For more information about the RAID configurations, you can refer to this [Dell Knowledge Base Article](https://www.dell.com/support/kbdoc/en-us/000128635/dell-servers-what-are-the-raid-levels-and-their-specifications#:~:text=If%20one%20disk%20fails%2C%20the,the%20failure%20of%20one%20disk.).




