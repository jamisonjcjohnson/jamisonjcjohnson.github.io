---
title: Using pip3 Package Manager
layout: post
date: '2024-01-03'
description: In this blog post, we'll walk through the steps to install `python3-pip` and explore how to use the `pip3` package manager.
intro: "Installing python3-pip on RHEL 9 allows you to harness the power of the pip3 package manager for managing Python packages. With pip3, you can easily install, upgrade, and manage dependencies, making your Python development workflow more streamlined on RHEL 9."
lang: en_US
image: "/static/assets/img/blog/2024/pip3_package_manager/pip3_package_manager.jpg"
keywords: rhel,linux,python,pip3,package_manager
categories:
- Linux
tags:
- rhel
- linux
- python
- pip3
- package_manager
icon: fa-linux
---


Red Hat Enterprise Linux (RHEL) is a powerful and widely used Linux distribution in enterprise environments. If you're working with Python on RHEL 9, you may need to install the `python3-pip` package to manage Python packages conveniently. In this blog post, we'll walk through the steps to install `python3-pip` and explore how to use the `pip3` package manager.

<br>

* TOC 
{:toc}

<br>

## Installing python3-pip on RHEL 9

To install `python3-pip` on RHEL 9, follow these steps:

```bash
sudo dnf install python3-pip
```

The `sudo` command is used to execute the installation with superuser privileges. `dnf` is the package manager for RHEL, and `install` is the command to install a specified package, in this case, `python3-pip`.

<br>

## Using pip3 Package Manager

Once `python3-pip` is installed, you can use `pip3` to manage Python packages efficiently. 

### Installing a Package
To install a Python package, use the following command:


```bash
pip3 install package_name
```

Replace `package_name` with the name of the Python package you want to install.

### Listing Installed Packages
To view a list of installed packages, use:

```bash
pip3 list
```

This command will display a list of installed Python packages along with their versions.

<br>

### Upgrading a Package
To upgrade a package to the latest version, run:

```bash
pip3 install --upgrade package_name
```

Replace package_name with the name of the package you want to upgrade.

<br>

### Searching for a Package
In the past, we've been able to search for a pip package using the `pip search package_name` command, however, this method is deprecated. Now, to search for pip3 packages, we must vist the [Python Package Index (PyPi)](https://pypi.org).

<br>

## Conclusion

In conclusion, installing python3-pip on RHEL 9 allows you to harness the power of the pip3 package manager for managing Python packages. With pip3, you can easily install, upgrade, and manage dependencies, making your Python development workflow more streamlined on RHEL 9.

By following the simple installation steps and learning the basic pip3 commands, you'll be well-equipped to handle Python package management on RHEL 9.

<br>

📝 For more information about hashing algorithms, refer to this [Python documentation](https://docs.python.org/3/).


