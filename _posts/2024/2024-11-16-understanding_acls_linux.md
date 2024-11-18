---
title: Understanding ACLs in Linux
layout: post
date: '2024-11-16'
description: Traditional file permissions (read, write, execute) may not always provide the fine-grained access control you need, especially in shared environments.
intro: "This post outlines how to use these commands to better manage access permissions on your Linux system." 
lang: en_US
image: "/static/assets/img/blog/2024/understanding_acls_linux/understanding_acls_linux.jpg"
keywords: linux,security
categories:
- Linux
tags:
- linux
- security
icon: fa-linux
---

In Linux, file permissions play a vital role in controlling access to files and directories. Traditional file permissions (read, write, execute) may not always provide the fine-grained access control you need, especially in shared environments. This is where Access Control Lists (ACLs) come in, allowing you to set more specific permissions for individual users or groups.

Two important commands for managing ACLs are `setfacl` and `getfacl`. This post outlines how to use these commands to better manage access permissions on your Linux system.

<br>

* TOC 
{:toc}

<br>

## What Are ACLs?

Access Control Lists (ACLs) provide an additional, more flexible permission mechanism for file systems. Unlike standard permissions (owner, group, others), ACLs allow you to set specific permissions for multiple users or groups on a per-file or per-directory basis. This enables more granular control of file access, making ACLs especially useful in complex environments with multiple users and groups.

For example, you can grant read access to one user, write access to another, and full control to a third, all on the same file or directory.

<br>

## What is setfacl?

The `setfacl` command is used to modify the ACLs of files and directories. With setfacl, you can add, modify, or remove specific users or group permissions without affecting the standard owner-group-other permission scheme.

<br>

### Syntax

The basic syntax of setfacl is:

```bash
setfacl [options] ACL file
```

<br>

Where ACL defines the access control list entries, and file is the file or directory to which you are applying the ACL.

### Common Options:
`-m or --modify`: Modify an ACL entry. <br>
`-x or --remove`: Remove an ACL entry. <br>
`-b or --remove-all`: Remove all ACL entries. <br>
`-d or --default`: Set a default ACL for new files and directories within a directory.

<br>

### Examples of setfacl Usage:

<br>

#### 1. Granting Read Permission to a Specific User
If you want to give a user named jane read permission to a file called example.txt, run the following command:

```bash
setfacl -m u:jane:r example.txt
```

Here, `u:jane:r` specifies that user **jane** should have **read** (r) access to the file.

<br>

#### 2. Granting Write Permission to a Group
To **give** write permissions to a group named **devgroup** for a file called **project.txt**, use the following command:

```bash
setfacl -m g:devgroup:w project.txt
```

<br>

#### 3. Removing an ACL Entry
To **remove** the **read** permission for user **jane** from **example.txt**:

```bash
setfacl -x u:jane example.txt
```

This removes the ACL entry for user jane on example.txt.

<br>

#### 4. Setting Default ACLs on a Directory

To set default ACLs on a directory so that all new files created within it inherit the ACL permissions, use the `-d` option:

```bash
setfacl -d -m u:jane:rwx /shared/directory
```

This will give jane read, write, and execute (rwx) permissions on all new files created inside /shared/directory.

<br>

## What is getfacl?

The `getfacl` command is used to retrieve and display the ACLs of files and directories. It shows both the traditional owner-group-other permissions and any additional ACL entries.

<br>

### Syntax

The basic syntax of getfacl is:

```bash
getfacl [options] file
```

Where `file` is the file or directory whose ACLs you want to view.

<br>

### Common Options:
`--omit-header`: Omit the comment header from the output. <br>
`-R or --recursive`: Recursively display ACLs for all files in a directory. <br>

<br>

### Examples of getfacl Usage:

<br>

#### 1. Displaying ACLs for a File

To view the ACLs for a file called example.txt, run the following command:

```bash
getfacl example.txt
```

<br>

The output will look something like this:

```bash
file: example.txt
owner: root
group: root
user::rw-
user:jane:r--
group::r--
mask::r--
other::r--
```

This shows the ACLs for the file, including the standard owner (root), group (root), and other permissions, as well as the specific ACL entry for user jane.

<br>

#### 2. Displaying ACLs for a Directory Recursively
To display ACLs for all files in a directory, including subdirectories:

```bash
getfacl -R /shared/directory
```

This will list the ACLs for every file and subdirectory under `/shared/directory`.

<br>

## Removing ACLs

If you no longer need ACLs on a file or directory, you can **remove** them entirely using setfacl with the **-b** option:

```bash
setfacl -b example.txt
```

This **removes** all ACLs from **example.txt**, leaving only the standard file permissions in place.

<br>

## Conclusion:

ACLs provide fine-grained control over file and directory permissions, allowing you to grant or restrict access to specific users or groups. `setfacl` is used to modify ACLs, allowing you to set, modify, or remove permissions for specific users and groups. `getfacl` retrieves and displays the ACLs of a file or directory, providing insight into who has access and what type of access they have. Default ACLs can be set for directories to ensure that new files created inside the directory inherit predefined ACLs. By using setfacl and getfacl, you can achieve more granular and flexible control over file access in shared environments, enhancing security and collaboration on Linux systems.

<br>

📝 For more information about `setfacl`, review this [setfacl man page](https://linux.die.net/man/1/setfacl), and for more information about `getfacl`, review this [getfacl man page](https://linux.die.net/man/1/getfacl).
