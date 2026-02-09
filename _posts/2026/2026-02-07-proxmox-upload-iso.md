---

title: How to Upload ISO Files to Proxmox Servers
layout: post
date: '2026-02-07'
description: Learn reliable methods to upload ISO files to Proxmox VE servers when the web GUI upload gets stuck, using SCP or WinSCP.
intro: "Uploading ISO files is a routine task in Proxmox Virtual Environment, but the web interface upload can occasionally hang or fail. In this blog post, we will walk through a reliable alternative method to upload ISO files directly to your Proxmox server."
lang: en_US
image: "/static/assets/img/blog/2026/proxmox-upload-iso/proxmox-upload-iso.jpg"
keywords: proxmox,proxmox ve,iso upload,virtualization,scp,winscp
categories:

- Linux
tags:
- proxmox
- virtualization
- storage
- howto
icon: fa-server

---

Proxmox Virtual Environment (Proxmox VE) is a powerful and flexible platform for running virtual machines and containers. One of the most common setup tasks is uploading ISO files so they can be used to install new virtual machines.

In some environments, however, the **GUI-based ISO upload** can become slow, stall indefinitely, or fail altogether. When that happens, using a direct file transfer method is often faster and more reliable.

<br>

* TOC
  {:toc}

<br>

## The Proxmox GUI Upload Issue

The Proxmox web interface allows ISO uploads directly through the browser. While convenient, this method can sometimes:

* Stall during large uploads
* Fail silently with no clear error
* Be interrupted by browser or network issues

When reliability matters, transferring the ISO directly to the server filesystem avoids these problems.

<br>

## Where Proxmox Stores ISO Files

By default, Proxmox stores ISO images in the following directory:

```
/var/lib/vz/template/iso/
```

Any ISO placed in this directory automatically becomes available in the Proxmox web interface under the local storage view.

<br>

## Method 1: Uploading ISOs with SCP (Command Line)

This method works on Linux, macOS, and Windows systems with an SCP-capable terminal.

### Step 1: Prepare the ISO

Ensure the ISO file is accessible on your local system, external drive, or network share.

<br>

### Step 2: Transfer the ISO

From your local machine, run:

```
scp /path/to/your/iso/your-file.iso username@proxmox-ip:/var/lib/vz/template/iso/
```

You will be prompted to enter your Proxmox user password. Once complete, the file will be copied directly to the ISO storage directory.

<br>

## Method 2: Uploading ISOs with WinSCP (Graphical)

If you prefer a graphical interface, WinSCP is a popular option for Windows users.

### Step 1: Connect to Proxmox

* Install WinSCP
* Create a new session using:

  * Protocol: SCP or SFTP
  * Hostname: Proxmox server IP
  * Username and password

<br>

### Step 2: Transfer the ISO

* In the remote panel, navigate to:

```
/var/lib/vz/template/iso/
```

* In the local panel, locate your ISO file
* Drag and drop the ISO into the remote directory

The transfer will begin immediately.

<br>

## Verifying the Upload

After the transfer completes:

* Confirm the file exists in **/var/lib/vz/template/iso/**
* Open the Proxmox web interface
* Navigate to **Datacenter → Node → local → ISO Images**

The uploaded ISO should now be visible and ready for use.

<br>

## Conclusion

Uploading ISO files is a critical part of managing virtual machines in Proxmox VE. When the web interface upload fails or becomes unreliable, transferring ISO files directly via SCP or WinSCP provides a fast and dependable alternative.

By placing ISOs directly into Proxmox’s ISO directory, you can avoid browser-related issues and keep your virtualization workflow moving smoothly.

For more detailed and official documentation, refer to the [Proxmox VE Documentation Index](https://pve.proxmox.com/pve-docs/).
