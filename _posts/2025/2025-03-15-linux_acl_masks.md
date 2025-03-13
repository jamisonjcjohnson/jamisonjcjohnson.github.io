---
title: How ACL Masks Let You Fine-Tune File Permissions in Linux
layout: post
date: '2025-03-12'
description: Let's dive into this important concept by taking a look at what they are and how they interact with Linux file system permissions.
intro: "This blog post will break down ACL masks and how they are important with Linux file system permissions." 
lang: en_US
image: "static/assets/img/blog/2025/linux_acl_masks/linux_acl_masks.jpg"
keywords: linux,acls,permissions
categories:
- Linux
tags:
- linux
- acls
- permissions
icon: fa-linux
---
Are you using Access Control Lists (ACLs) but are confused about the concept of masks? You're not alone. Let's dive into this important concept by taking a look at what they are and how they interact with Linux file system permissions.

This blog post will break down ACL masks and how they are important with Linux file system permissions.

<br>

* TOC 
{:toc}

<br>

Are you using Access Control Lists (ACLs) but are confused about the concept of masks? You're not alone. Let's dive into this important concept by taking a look at what they are and how they interact with Linux file system permissions.

## What Are ACL Masks?

ACL masks ensure permissions interoperability with programs and utilities that aren't ACL-aware.

An ACL mask on a file or directory represents the maximum permissions allowed to any user or group object that isn’t the owning user, group, or "other" class. Essentially, it translates ACL entries into POSIX permissions for backward compatibility.

Let's examine a newly created file we'll be working with: `securedfile.txt`.

```sh
ls -l securedfile.txt
```

<br>

You'll see something like this:

```sh
-rw-r--r--. 1 user group 0 Aug 23 12:34 securedfile.txt
```

<br>

Notice the `dot (.)` after the permissions. This indicates an **SELinux context**, which is unrelated to ACLs or ACL masks.

To check the ACL entries for the file, use:

```sh
getfacl securedfile.txt
```

This will output:

```sh
# file: securedfile.txt
# owner: user
# group: group
user::rw-
group::r--
other::r--
```

This is a "minimal ACL," meaning there are no extended ACL entries.

<br>

## Adding a User to ACL and Understanding Masks

Let's grant a user named manager read permissions:

```sh
setfacl -m u:manager:r securedfile.txt
ls -l securedfile.txt
getfacl securedfile.txt
```

<br>

You'll now see a `+ sign` in the `ls -l` output, indicating ACLs are present:

```sh
-rw-r--r--+ 1 user group 0 Aug 23 12:34 securedfile.txt
```

The `getfacl` output now includes:

```sh
user::rw-
user:manager:r--
group::r--
mask::r--
other::r--
```

The `mask::r--`line represents the maximum permissions allowed to named users or groups.

<br>

## Adding Another User and Modifying the Mask

Now, let's add another user, `developer`, with read and write permissions:

```sh
setfacl -m u:developer:rw securedfile.txt
getfacl securedfile.txt
```

<br>

This changes the ACL:

```sh
user::rw-
user:manager:r--
user:developer:rw-
group::r--
mask::rw-
other::r--
```

Since we gave `developer` write permissions, the `mask` updated to `rw-`, allowing up to read and write for named ACL users.

<br>

## Effective Permissions and Mask Adjustment

We can manually adjust the mask to restrict effective permissions. Let’s set the mask to `r--` (read-only):

```sh
setfacl -m m::r securedfile.txt
getfacl securedfile.txt
```

Now, the `developer` entry shows:

```sh
user:developer:rw- #effective:r--
```

Even though `developer` was granted `rw-`, the mask limits them to `r--`. The `ls -l` output reflects this by showing:

```sh
-rw-r--r--+ 1 user group 0 Aug 23 12:34 securedfile.txt
```

To add a user while respecting the mask, use `-n`:

```sh
setfacl -n -m u:williams:rwx securedfile.txt
getfacl securedfile.txt
```

The output will show:

```sh
user:williams:rwx #effective:r--
```

Since the mask is `r--`, `williams` only gets read permissions.

<br>

## Default Masks for Directories

To apply default ACL masks for all new files in a directory:

```sh
mkdir secureddirectory
setfacl -d -m m::rX secureddirectory/
getfacl secureddirectory/
mkdir secureddirectory/securedsubdirectory/
getfacl secureddirectory/securedsubdirectory/
```

This ensures new files inherit the specified mask settings.







## **Conclusion**

ACL masks ensure ACL security while maintaining compatibility with non-ACL-aware applications. They help enforce permissions boundaries effectively, ensuring system consistency while providing fine-grained access control.
 <br>

Understanding and using ACL masks effectively allows you to manage file permissions with precision, ensuring both security and flexibility.

<br>

📝 For more information about Linux ACLs, please review this [RedHat Blog](https://www.redhat.com/en/blog/linux-access-control-lists).
