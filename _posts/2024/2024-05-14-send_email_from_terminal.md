---
title: Sending Email from Terminal in RHEL 9
layout: post
date: '2024-05-14'
description: We will show you a step-by-step guide to configure and use Postfix for sending emails from your RHEL 9 terminal.
intro: "Sending emails from the terminal in RHEL 9 using Postfix is a straightforward process that can be accomplished by following a few simple steps."
lang: en_US
image: "/static/assets/img/blog/2024/send_email_from_terminal/send_email_from_terminal.jpg"
keywords: linux,rhel,terminal,email
categories:
- Linux
tags:
- linux
- rhel
- terminal
- email
icon: fa-linux
---

Sending emails from the terminal in Red Hat Enterprise Linux 9 (RHEL 9) can be achieved using the Postfix service, which is the default SMTP server for Red Hat or CentOS systems. Postfix is a powerful program that can send and receive emails using the SMTP protocol. In this post, we will show you a step-by-step guide to configure and use Postfix for sending emails from your RHEL 9 terminal.

<br>

* TOC 
{:toc}

<br>

## Installing Postfix

First, you need to install the Postfix package by running the following command in your terminal:

```bash
sudo dnf install postfix
```

<br>

## Configuring Postfix

After installing Postfix, you need to configure it by editing the `/etc/postfix/main.cf` file. Append or modify the following parameters according to your SMTP server settings:

- `myhostname`: Set the hostname of your server, such as `example.com`. This should typically be the fully qualified domain name of the server.
- `relayhost`: Specify the IP address or hostname of the relay server you want to use, such as `[smtp.gmail.com]:587`.
- `smtp_use_tls`: Set it to `yes` if your relay server supports TLS encryption, or `no` otherwise.
- `smtp_sasl_auth_enable`: Set it to `yes` if your relay server requires SASL authentication, or `no` otherwise.
- `smtp_sasl_password_maps`: Specify the file containing the username and password for your relay server, such as `hash:/etc/postfix/sasl_passwd`.
- `smtp_sasl_security_options`: Set it to `noanonymous` to prevent anonymous authentication.

For example:

```bash
myhostname = example.com
relayhost = [smtp.gmail.com]:587
smtp_use_tls = yes
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
```

Next, create the `/etc/postfix/sasl_passwd` file and enter your relay server's credentials in the following format:

```bash
[smtp.gmail.com]:587 username@gmail.com:password
```

<br>

## Updating Configuration and Restarting Postfix
Once you've configured Postfix and added your relay server's credentials, update the Postfix configuration and restart the service by running the following commands:

```bash
sudo postmap /etc/postfix/sasl_passwd
sudo chmod 600 /etc/postfix/sasl_passwd /etc/postfix/sasl_passwd.db
sudo systemctl restart postfix
```

<br>

## Sending a Test Email
To verify that Postfix is working properly, you can use the `s-nail` command to send a test email from your terminal. For example:

```bash
echo “This is a test email” | s-nail -s “Test” recipient@example.com
```

You should receive the test email in your recipient's inbox shortly. If not, check the `/etc/postfix/sasl_passwd` file for any errors or warnings.

<br>

## Conclusion

In conclusion, sending emails from the terminal in RHEL 9 using Postfix is a straightforward process that can be accomplished by following a few simple steps. By configuring Postfix with the appropriate SMTP server settings and relay server credentials, you can quickly set up your system to send emails efficiently.

Postfix offers a reliable and powerful solution for handling email delivery, making it a valuable tool for system administrators and developers alike. With its ability to integrate seamlessly with various SMTP servers and support for authentication and encryption, Postfix provides a flexible and secure email delivery mechanism.

By mastering the process of sending emails from the terminal in RHEL 9, you can enhance your productivity and streamline your workflow. Whether you're sending notifications, alerts, or reports, having the ability to send emails directly from your terminal can be a valuable asset in your toolkit.