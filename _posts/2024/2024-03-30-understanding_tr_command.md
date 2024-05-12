---
title: Understanding the tr Command
layout: post
date: '2024-03-30'
description: The tr command in Linux is a powerful tool used for translating or deleting characters.
intro: "The tr command is a versatile tool for manipulating text in Linux. By mastering its usage and understanding its options, you can perform a wide range of text transformation tasks efficiently."
lang: en_US
image: "/static/assets/img/blog/2024/understanding_tr_command/understanding_tr_command.jpg"
keywords: rhel,linux,terminal
categories:
- Linux
tags:
- rhel
- linux
- terminal
icon: fa-linux
---

The `tr` command in Linux is a powerful tool used for translating or deleting characters. It stands for "translate" or "transliterate." With `tr`, you can perform various text transformation tasks, such as replacing characters, converting lowercase to uppercase (and vice versa), deleting specific characters, and more.

<br>

* TOC 
{:toc}

<br>

## Basic Syntax

The basic syntax of the `tr` command is as follows:

```bash
tr [options] SET1 [SET2]
```

- `SET1`: Specifies the set of characters to be replaced or deleted.
- `SET2`: Specifies the set of characters to replace `SET1` with.

<br>

## Common Options

Here are some common options used with the `tr` command:

- `-d`: Deletes characters in `SET1`.
- `-s`: Squeezes repeated occurrences of characters in `SET1` to a single occurrence.
- `-c`: Complements `SET1`; replaces characters not in `SET1`.
- `-t`: Truncate `SET1` to the length of `SET2` if `SET2` is shorter.

<br>

## Examples

<br>

### Example 1: Translating Characters

To convert all lowercase characters in a file to uppercase, you can use the following command:

```bash
tr [:lower:] [:upper:] < input.txt > output.txt
```

<br>

### Example 2: Deleting Characters

To remove all digits from a text file, you can use the following command:

```bash
tr -d 0-9 < input.txt > output.txt
```

<br>

### Example 3: Squeezing Repeated Characters

To squeeze repeated occurrences of whitespace characters into a single space, you can use the following command:

```bash
tr -s ' ' < input.txt > output.txt
```
<br>


## Conclusion

The `tr` command is a versatile tool for manipulating text in Linux. By mastering its usage and understanding its options, you can perform a wide range of text transformation tasks efficiently. Whether you need to translate characters, delete specific characters, or squeeze repeated occurrences, the `tr` command has got you covered.

<br>

📝 For more information about the `tr` command, you can refer to the [tr man page](https://linux.die.net/man/1/tr).
