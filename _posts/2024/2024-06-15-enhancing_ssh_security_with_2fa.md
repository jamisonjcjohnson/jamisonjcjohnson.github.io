---
title: Enhancing SSH Security with Two-Factor Authentication on RHEL
layout: post
date: '2024-05-10'
description: We'll walk you through the process of setting up two-factor authentication using Google Authenticator and Pluggable Authentication Modules (PAM) in SSH on RHEL.
intro: "By following the steps outlined in this guide, you can enhance the security of your RHEL server infrastructure with 2FA using Google Authenticator and PAM."
lang: en_US
image: "/static/assets/img/blog/2024/enhancing_ssh_security_with_2fa/enhancing_ssh_security_with_2fa.jpg"
keywords: ssh,security,rhel,linux
categories:
- Linux
tags:
- ssh
- security
- rhel
- linux
icon: fa-linux
---

In today's digital landscape, where cyber threats are becoming increasingly sophisticated, securing your server infrastructure is paramount. One of the most effective ways to bolster security is by implementing two-factor authentication (2FA). By requiring users to provide two forms of identification, 2FA adds an extra layer of protection against unauthorized access. The 2FA can be either password & TOTP or ssh-key & TOTP.

In this guide, we'll walk you through the process of setting up two-factor authentication using Google Authenticator and Pluggable Authentication Modules (PAM) in SSH on Red Hat Enterprise Linux (RHEL). Google Authenticator generates time-based one-time passwords (TOTPs), providing an additional level of security beyond traditional password authentication.

<br>

* TOC 
{:toc}

<br>

## Prerequisites

- SSH access to your RHEL server as the root user or with sudo privileges.
- Google Authenticator installed on your mobile device.

## Step 1: Install Google Authenticator

```bash
sudo dnf install google-authenticator -y
```

*The `EPEL repository` must be installed/configured in order to install `google-authenticator`. You may download the EPEL repository by running the following command :*

```bash
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm -y
```

<br>

## Step 2: Configure Google Authenticator for a User

- Log into the server as the user for whom you want to enable 2FA.
- Run `google-authenticator` command.
- Answer the prompts to enable TOTP, disallow multiple uses of the same token, allow time skew, and enable rate-limiting.
    - Do you want authentication tokens to be time-based (y/n) : `y`
    - Initially, if you are prompted for a code from the app, enter : `-1`, to skip
    - You will then be provided with 5 emergency codes, **save those in a safe place**.
    - Do you want me to update your "/root/.google_authenticator" file (y/n) : `y`
    - Do you want to disallow multiple uses of the same authentication token? ..... (y/n) : `y`
    - By default, a new token is generated every 30 seconds by the mobile app. In order to compensate for possible time-skew between the client and the server,....Do you want to do so? (y/n) : `y`
    - If the computer that you are logging into isn't hardened against brute-force login attempts, you can enable rate-limiting for the authentication module. By default, this limits attackers to no more than 3 login attempts every 30s. Do you want to enable rate-limiting? (y/n) : `y`

<br>

## Step 3: Configure SSH to Use Google Authenticator

- Open the SSH PAM configuration file:
```bash
sudo vi /etc/pam.d/sshd
```
- Comment out the `auth     substack    password-auth` line at the top of the file.
- Add the following lines to the bottom of the file:
```bash
auth required pam_google_authenticator.so secret=/home/${USER}/.ssh/.google_authenticatorauth required pam_permit.so
```
- Move the `~/.google_authenticator` directory to `~/.ssh/`
```bash
mv ~/.google_authenticator ~/.ssh/
```

<br>

## Step 4: Configure SSH to Allow 2FA

- Open the SSH server configuration file:
```bash
sudo vi /etc/ssh/sshd_config
```
- Add or modify the following line:
```bash
ChallengeResponseAuthentication yes
AuthenticationMethods publickey,password publickey,keyboard-interactive
```
<br>

## Step 5: Restart SSH Service

```bash
sudo systemctl restart sshd
```
<br>

## Step 6: Test 2FA

Log out of your SSH session and attempt to log back in. You will be prompted for your TOTP code after entering your SSH password. Also, if you are using ssh keys for authentication, you will be prompted for a password, however, the server/machine really wants the TOTP code from Google Authenticator, provide the TOTP code and you will be able to successfully login. 

<br>

## Conclusion

In an era where security breaches are commonplace, implementing robust security measures is essential to safeguard sensitive data and protect against unauthorized access. Two-factor authentication (2FA) offers an additional layer of defense by requiring users to provide two forms of identification before gaining access to a system.

By following the steps outlined in this guide, you can enhance the security of your RHEL server infrastructure with 2FA using Google Authenticator and PAM. By requiring both a password or ssh-key and a time-based one-time password (TOTP), you can significantly reduce the risk of unauthorized access and mitigate the impact of potential security threats.

Investing in robust security measures like 2FA is not only a proactive step towards protecting your organization's assets but also a critical aspect of maintaining trust and credibility with your users. With the threat landscape constantly evolving, implementing strong security practices is more important than ever to ensure the integrity and confidentiality of your data.

<br>

📝 For more information about the 2FA, you can refer to [this Cloudflare article](https://www.cloudflare.com/learning/security/two-factor-authentication/)




