---
title: Adding a Network Interface in Proxmox
layout: post
date: '2025-05-31'
description: Adding an extra network interface card (NIC) to your Proxmox server can help with dedicated traffic handling, VM isolation, or better network performance.
intro: "This blog post walks you through how to add and configure a new NIC using the Proxmox web interface." 
lang: en_US
image: "/static/assets/img/blog/2025/adding_network_interface_proxmox/adding_network_interface_proxmox.jpg"
keywords: virualmachine,proxmox,vm
categories:
- Server
tags:
- virtualmachine
- proxmox
- vm
icon: fa-server
---

Adding an extra network interface card (NIC) to your Proxmox server can help with dedicated traffic handling, VM isolation, or better network performance. 

This blog post walks you through how to add and configure a new NIC using the Proxmox web interface.

<br>

* TOC 
{:toc}

<br>

## Step 1: Shut Down and Install the NIC

Start by powering down your Proxmox server:

**`sudo poweroff`**

Physically install the new NIC into an available PCIe slot. Once installed, power the system back on.

<br>

## Step 2: View Existing Interfaces

Log into the Proxmox web UI and select your Proxmox node.

Navigate to the **Network** tab.

You’ll see a list of your current network interfaces. After booting with the new NIC, the new interface will appear in this list automatically.

<br>

## Step 3: Identify the New Interface

Double-click the new interface entry.

A dialog box will appear—copy the **device name** (e.g., `enp3s0`, `eth1`, etc.).

Close the dialog.

<br>

## Step 4: Create a Linux Bridge

Click the **Create** button in the upper-right corner and select **Linux Bridge**.

Fill in the following fields:

- **Bridge ports**: paste the name of the new NIC (e.g., `enp3s0`)
- **IPv4/CIDR**: assign the desired static IP address (e.g., `192.168.1.100/24`)
- **Gateway (optional)**: set your network gateway if this NIC needs external access

Click **Create**.

<br>

## Step 5: Apply Configuration

After creating the bridge, a message will appear at the bottom of the screen indicating that network changes are pending.

You now have two options:

- Reboot the Proxmox server:  
  **`sudo reboot`**

- Or click the **Apply Configuration** button in the Proxmox web UI.

<br>

## Step 6: Verify Network Interface Status

Once changes are applied, verify that your IP address has been assigned.

You can do this in two ways:

- Use the **Network** tab to see assigned addresses
- Or open the shell and run:

**`ip a`**

You should see your new bridge and assigned IP listed.

<br>

## Step 7: Test Network Connectivity

From the Proxmox shell, test that your new NIC is operational:

**`ping 192.168.1.1`**

Replace `192.168.1.1` with the IP of your gateway or another reachable device on your LAN.

You should receive ping responses indicating successful communication.

<br>

## Step 8: Assign the NIC to a Virtual Machine

To use the new NIC in a VM:

- Select your VM in the Proxmox UI
- Click the **Hardware** tab
- Edit the **Network Device**
- Choose your new bridge interface from the **Bridge** dropdown

Click **OK**, then reboot the VM:

**`sudo reboot`** (inside the VM)

<br>

## Conclusion

Your new network interface is now fully configured and available for use with your virtual machines. By bridging it through Proxmox, you can separate traffic, add redundancy, or assign dedicated interfaces to specific VMs for performance or security.

Adding a NIC in Proxmox is simple once you know the steps. Whether you're scaling your lab or segmenting traffic, this method keeps your setup clean and maintainable.

<br>

📝 For more information about Proxmox configurations, please review the [Proxmox VE Documentation Index](https://pve.proxmox.com/pve-docs/).