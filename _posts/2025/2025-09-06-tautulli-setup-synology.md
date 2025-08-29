---
title: Tautulli Setup on Synology NAS
layout: post
date: '2025-08-28'
description: Tautulli provides a rich web interface to track Plex activity, receive notifications, and generate reports. 
intro: "In this blog post, we will walk through installing and configuring Tautulli on a Synology NAS using Docker (or Container Manager)." 
lang: en_US
image: "/static/assets/img/blog/2025/tautulli-setup-synology/tautulli-setup-synology.jpg"
keywords: synology,networking,tautulli
categories:
- Other
tags:
- synology
- networking
- tautulli
icon: fa-server
---

Monitoring Plex Media Server activity is a must for home media enthusiasts and administrators. **Tautulli** provides a rich web interface to track Plex activity, receive notifications, and generate reports. Running it inside a Docker container on your Synology NAS makes setup and management simple and reliable.

In this blog post, we will walk through installing and configuring Tautulli on a Synology NAS using Docker (or Container Manager).

<br>

* TOC 
{:toc}

<br>

## Overview

Tautulli is a web app for monitoring Plex Media Server activity. This guide walks you through installing Tautulli as a Docker container (or Container Manager) on your Synology NAS for easy monitoring and notifications.

<br>

## Step 1: Install Container Manager (or Docker)

* **DSM 7+:** Go to **Package Center** → Install **Container Manager**  
* **DSM < 7.2:** Install **Docker**  

<br>

## Step 2: Create Configuration Folder

1. Open **File Station**  
2. Navigate to `/docker` folder  
3. Create a new folder named `tautulli` (lowercase)  

Ensure correct permissions for Docker to write to this folder:  

**sudo chown -R 1026:100 /volume1/docker/tautulli**  
**sudo chmod -R 775 /volume1/docker/tautulli**  

**`1026` and `100` correspond to your Synology Docker user (adjust if needed). Run the `id` command via SSH to confirm your user’s UID and GID.**  

<br>

## Step 3: Set Up Install Task

1. Go to **Control Panel → Task Scheduler → Create → User-defined script**  
2. Name the task (e.g., `Install Tautulli`)  
3. Run as `root`, schedule as "Do not repeat"  
4. Email = youremail@yourdomain.com  
5. Paste the script below (edit to match **YOUR** UID, GID, and timezone):  

```
docker run -d --name=tautulli   -e PUID=1026   -e PGID=100   -e TZ=America/New_York   -v /volume1/docker/tautulli:/config   -v /volume1/Data/Plex:/volume1/Data/Plex   --network host   --restart always   ghcr.io/linuxserver/tautulli:latest
```

<br>

## Step 4: Run the Install Task

* Confirm the password prompt  
* Locate the task in Task Scheduler and click **Run**  

<br>

## Step 5: Access Tautulli

* Open a browser and go to: **http://<synology-ip>:8181**  
* Complete the setup wizard  

<br>

## Notes & Troubleshooting

* If you run into permissions issues, add **SYSTEM** with read/write permissions to the config folder and apply recursively.  
* To map your Plex library directly, re-run the Docker command with an additional volume mount:  

```
-v /volume1/plex/library:/volume1/plex/library
```

<br>

## Conclusion

Setting up Tautulli inside Docker on Synology NAS ensures an efficient, isolated, and easily managed way to monitor Plex Media Server activity. With the steps above, you can quickly deploy and configure Tautulli to track usage, generate insights, and receive alerts about your media streaming environment.


📝 For more information about this Tautulli, please review its [Github Page](https://github.com/Tautulli/Tautulli/wiki/Installation).