---
title: Streamlining Remote Script Execution with SSH and Bash
layout: post
date: '2024-10-17'
description: SSH and bash together can create some powerful tools. We will streamline a great process in this blog post.
intro: "This guide will explain how the following command works to run a script on a remote machine without copying the script." 
lang: en_US
image: "/static/assets/img/blog/2024/streamlining_remote_script_execution/streamlining_remote_script_execution.jpg"
keywords: linux,ssh,bash,script
categories:
- Linux
tags:
- linux
- ssh
- bash
- script
icon: fa-linux
---

In system administration, there are often situations where you need to execute scripts on remote machines. A common approach involves copying the script to the remote machine, then executing it. However, there's a more streamlined way to do this without having to copy the script over first. This is where the power of `ssh` and command redirection come into play.

This guide will explain how the following command works to run a script on a remote machine without copying the script:

```bash
ssh user@remote_host 'bash -s' < /my/desired/directory/myscript.sh
```

<br>

* TOC 
{:toc}

<br>

## Prerequisites

For this method to work, passwordless SSH authentication should already be set up between your local machine and the remote host. If SSH key-based authentication isn’t configured, the command will still prompt for a password each time you run it, which could hinder automation.

<br>

### Steps for SSH Key Authentication (Optional)

**Generate SSH Keys:**
If you haven't set up SSH keys, you can generate a key pair using the following command:

```bash
ssh-keygen -t ecdsa -b 384
```

**Copy the Public Key to the Remote Host:**
You can then copy the public key to the remote host:

```bash
ssh-copy-id user@remote_host
```

**Test the Connection:**
Ensure that you can log in without a password by running:

```bash
ssh user@remote_host
```

*If you authenticate without being prompted for a password, you're all set.*

<br>

## Understanding the Command

Let's break down the key components of the command and explain how they work:

<br>

### Command Breakdown

```bash
ssh user@remote_host 'bash -s' < /my/desired/directory/myscript.sh
```

**ssh user@remote_host:**
- The `ssh` command is used to establish a secure connection to a remote host.
- Replace `user` with your remote username and `remote_host` with the hostname or IP address of the machine you're targeting.

**'bash -s':**
- This part tells the remote machine to run a `bash` shell in a non-interactive mode (`-s` flag).
- The `-s` flag allows `bash` to read from standard input, meaning it will receive the script content piped from the local machine.

**< /my/desired/directory/myscript.sh:**
- The `<` operator redirects the content of the script located on the local machine (in this case, `/my/desired/directory/myscript.sh`) as input to the `ssh` command.
- Essentially, it sends the script content over the SSH connection for execution on the remote machine.

<br>

### What Happens Internally?
- The script `myscript.sh` from your local machine is not copied to the remote machine.
- Instead, it's streamed over the SSH connection, where it's immediately executed by the remote host's `bash` shell.

Think of it like this: the local script's content is passed as if it were typed directly into the terminal session on the remote machine.

<br>

## Why Use This Method?

**No Need to Transfer Files:**
There's no need to use tools like scp to copy the script to the remote machine first. This saves time and avoids cluttering the remote system with temporary script files.

**Quick and Efficient:**
Ideal for running quick tasks or maintenance scripts on multiple remote machines without leaving any trace of the script behind.

**Automation-Friendly:**
Since the script is executed directly from your local machine, you can easily integrate this method into larger automation workflows where you need to run scripts across multiple servers.

<br>

## Use Cases

This command is particularly useful in the following scenarios:

- **Routine Maintenance:** Running simple scripts like updates or service restarts across many servers.
- **Ad-hoc Tasks:** Executing a one-off command on a remote system without the hassle of uploading the script.
- **Multi-server Management:** Ideal when managing a fleet of servers, allowing you to quickly execute commands on several systems in succession by changing the target host in your SSH command.

<br>

## Example: Running a Disk Check Remotely

Let's say you have a script called check_disk.sh that checks for disk space usage, and you want to run it on a remote server.

Your local script might look like this:

```bash
#!/bin/bash
df -h
```

To run this on the remote server `192.168.1.50`, use the following command:

```bash
ssh user@192.168.1.50 'bash -s' < /path/to/check_disk.sh
```

The `check_disk.sh` script is executed directly on the remote machine, and you’ll see the output of the `df -h` command displayed in your local terminal.

<br>

**NOTE:**

You may also run the below command to get the same results of `df -h`, however, this is just an example. This script can be much more in depth, and it will still execute successfully on the remote machine.

```bash
ssh user@192.168.1.50 'df -h'
```

<br>

## Conclusion

The `ssh user@remote_host 'bash -s' < /my/desired/directory/myscript.sh` command is a simple but powerful tool for executing local scripts on remote systems without copying files. Whether you're managing a handful of machines or a large infrastructure, this method can greatly simplify your workflow, saving you time and avoiding unnecessary file transfers.

Remember, this approach relies on having SSH key-based authentication set up between the machines. Once that's in place, you're ready to efficiently manage remote systems with just a few commands!
<br>

📝 For more information about this `bash` command, review this [bash man page](https://linux.die.net/man/1/bash).
