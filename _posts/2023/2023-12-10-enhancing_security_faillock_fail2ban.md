---
title: Enhancing Security with faillock and fail2ban
layout: post
date: '2023-12-10'
description: In this guide, we'll delve into the functionalities of these commands, their configurations, and when to use each for optimal security.
intro: "In RHEL, `faillock` and `fail2ban` are powerful tools to bolster system security. While `faillock` focuses on managing user account lockouts, `fail2ban` offers a broader approach, protecting against multiple types of attacks by dynamically updating firewall rules."
lang: en_US
image: "/static/assets/img/blog/2023/enhancing_security_faillock_fail2ban/enhancing_security_faillock_fail2ban.jpg"
keywords: rhel,linux,security,ssh,faillock,fail2ban
categories:
- Linux
tags:
- rhel
- linux
- security
- ssh
- faillock
- fail2ban
icon: fa-linux
---

Enhancing security in a Red Hat Enterprise Linux (RHEL) environment is crucial, and tools like `faillock` and `fail2ban` offer valuable features to mitigate unauthorized access attempts. In this guide, we'll delve into the functionalities of these commands, their configurations, and when to use each for optimal security.

<br>

* TOC 
{:toc}

<br>

## Understanding faillock

<br>

### Features of faillock

`faillock` is a command-line utility in RHEL that tracks and manages failed login attempts. Here are its key features:

- **Locking User Accounts**: faillock can lock user accounts after a specified number of failed login attempts, preventing further login attempts.
- **Displaying Lockout Information**: It shows details about locked user accounts, including when the lockout occurred and how many failed attempts were made.
- **Resetting Failures**: Administrators can reset the failure count manually using the faillock command.

<br>

### Using faillock

<br>

#### Locking and Unlocking User Accounts

To lock a user account after a certain number of failed attempts:

```bash
faillock --user <username> --lock
```

To unlock a previously locked user account:

```bash
faillock --user <username> --reset
```

<br>

## Understanding fail2ban

<br>

### Features of fail2ban

`fail2ban` is a more comprehensive solution that goes beyond locking user accounts. Its features include:

- **Dynamic Firewall Rules**: fail2ban dynamically updates firewall rules to block IP addresses of hosts exhibiting suspicious behavior.
- **Multiple Service Support**: It can monitor various services like SSH, FTP, and more, detecting and responding to suspicious activities across multiple services.
- **Customizable Actions**: Administrators can configure custom actions for different scenarios, such as banning IP addresses for a specific duration.

<br>

### Using fail2ban

<br>

#### Installation and Configuration

1. **Installation**: Install fail2ban using the package manager (yum or dnf):
```bash
sudo dnf install fail2ban -y
```
*The `EPEL repository` must be installed/configured in order to install `fail2ban`. You may download the EPEL repository by running the following commands :*

```bash
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y
```
2. **Configuration**: Configure fail2ban by editing the `jail.conf` file located in `/etc/fail2ban/`. Customize settings such as ban duration, threshold for failed attempts, and more.
3. **Starting fail2ban**: Start the fail2ban service:
```bash
sudo systemctl start fail2ban
```

<br>

#### Automatic IP Ban Example

To automatically ban an IP address after 3 failed login attempts, configure a jail in the `jail.conf` file:


This configuration seems to be designed to drop connections or packets from an offending IP address. Add the below to the top of the config file, after the initial set of commented information : 

```bash
[blocktype]
returntype = DROP
action = %(action_)s[blocktype=%(blocktype)s,returntype=%(returntype)s, actionstart_on_demand=false, actionrepair_on_unban=true]
bantime = 1h
maxretry = 1
findtime = 1
```


| Parameter    | Description                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------|
| [blocktype]  | Section header defining a jail for a particular type of block or behavior.                                    |
| returntype   | Specifies the action taken when a match is found. Here it's set to DROP, meaning packets from the banned IP will be dropped. |
| action       | Defines the action parameters for the jail, including banning an IP and including specific metadata about the ban. |
| bantime      | Sets the duration an IP address will be banned after reaching the maxretry limit. Set here to 1 hour (1h).     |
| maxretry     | Specifies the number of failures or matches within the findtime before an action is taken. Set to 1.           |
| findtime     | Defines the time window within which maxretry failures or matches are counted. Set to 1 (possibly 1 second or 1 minute). |





Then we will add the below to the bottom of the config file : 

```bash
[automatic-ban]
enabled = true
filter = <filter-name>
action = iptables[name=<filter-name>, port=<port>, protocol=<protocol>]
logpath = <path/to/logfile>
maxretry = 3
bantime = 3600
```

Replace `filter-name`, `port`, `protocol`, and `path/to/logfile` with appropriate values for your system.


This configuration will monitor the `/var/log/secure` log file for SSH-related authentication failure events (using the `sshd` filter). If an IP address fails to authenticate three times within the specified time frame, Fail2Ban will block access to the SSH port for that IP address for one hour using an IPTables rule (`iptables` action).

Below is an example using sample/default information for configuring a fail2ban jail in the `jail.conf` configuration file : 

```bash
[automatic-ban]
enabled = true
filter = sshd
action = iptables[name=automatic-ban, port=ssh, protocol=tcp]
logpath = /var/log/secure
maxretry = 3
bantime = 3600
```
Always ensure the `logpath` points to the correct log file for the service you intend to monitor. Customize the `maxretry` (number of allowed failed attempts) and `bantime` (ban duration) based on your security requirements.


| Parameter              | Description                                                                                                                     |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| [automatic-ban]        | Section header defining the jail.                                                                                                |
| enabled = true         | Indicates that this jail is active and will be used by Fail2Ban to monitor and respond to incoming events.                     |
| filter = sshd          | Specifies the filter to be used for this jail, filtering the SSH service using the `sshd` filter.                                |
| action = iptables[name=automatic-ban, port=ssh, protocol=tcp] | Defines the action taken when a match is found, adding an IPTables rule to block SSH access for a defined duration. |
| logpath = /var/log/secure | Specifies the log file path to monitor for patterns defined in the `sshd` filter.                                               |
| maxretry = 3           | Sets the maximum number of retries or failed login attempts allowed before triggering the defined action.                        |
| bantime = 3600         | Defines the duration for which an IP address will be banned (in seconds).                                                        |



After making changes in the `jail.conf` file, remember to restart fail2ban for the configurations to take effect:
```bash
sudo systemctl restart fail2ban
```

<br>

## How to Confirm an IP Address Ban

If you suspect that an IP address is banned, do the following to confirm

```bash
sudo fail2ban-client status <name_of_jail>
```
In this example the name of the jail is `automatic-ban` so the command would be 
```bash
sudo fail2ban-client status automatic-ban
```

This commnand will display various information about the ban, including how many IPs are currently banned and a list of all IPs that are banned. 


![Enhancing Security with faillock and fail2ban2](/static/assets/img/blog/2023/enhancing_security_faillock_fail2ban/enhancing_security_faillock_fail2ban2.jpg)

<br>

## How to Remove an IP Address Ban

To remove an IP Address ban, run the below command. Once this command is executed properly, the ban will be removed and you will be able to successfully ssh into that machine/server again from that IP address. 

```bash
sudo fail2ban-client set automatic-ban unbanip 192.168.1.174
```

<br>

## When to Use Each Command

- `faillock` is suitable for managing user account lockouts and tracking individual user login failures.
- `fail2ban` is more extensive, providing protection against various types of attacks by dynamically banning potential malicious hosts.

<br>

## Conclusion

In RHEL, `faillock` and `fail2ban` are powerful tools to bolster system security. While `faillock` focuses on managing user account lockouts, `fail2ban` offers a broader approach, protecting against multiple types of attacks by dynamically updating firewall rules.

For detailed configurations and advanced settings, refer to the official RHEL documentation. Implement these tools to fortify your system against unauthorized access attempts and enhance overall security.

<br>

📝 For more detailed instructions and information, you can refer to the official [Faillock documentation](https://linux.die.net/man/8/faillock) and the [Fail2ban documentation](https://linux.die.net/man/8/fail2ban). 