---
title: Using Vi to Replace Multiple Words in a Linux File
layout: post
date: '2024-08-17'
description: Using Vi to replace words in a file is a quick and powerful way to edit text in Linux.
intro: "In this post, we'll explore how to efficiently replace words using Vi."
lang: en_US
image: "/static/assets/img/blog/2024/replace_multiple_words_with_vi/replace_multiple_words_with_vi.jpg"
keywords: linux,rhel,security
categories:
- Linux
tags:
- linux
- rhel
- security
icon: fa-linux
---

## Introduction

When working with text files in Linux, you might often need to replace multiple instances of a word with another word. One of the most powerful tools for this task is Vi (or Vim), a versatile and widely-used text editor. In this post, we'll explore how to efficiently replace words using Vi.

<br>

## Replacing Words with Vi

Vi provides a powerful search and replace functionality. The command for replacing words throughout the entire file is:

```bash
vim
:%s/oldword/replacementword/g
```

Let's break down this command:

- `:%s` – This part of the command tells Vi to search and replace in the entire file. The % symbol specifies that the operation should be performed on all lines.
- `oldword` – This is the word you want to replace.
- `replacementword` – This is the word that will replace oldword.
- `/g` – This global flag ensures that all occurrences of oldword on each line are replaced. Without this flag, only the first occurrence on each line would be replaced.

<br>

## Step-by-Step Guide

- Open the File in Vi: Start by opening your file in Vi. For example:

```bash
vi filename.txt
```
- Enter Command Mode: Ensure you are in command mode by pressing Esc.

- Execute the Replace Command:

   - Type `:%s/oldword/replacementword/g` and press `Enter`.
   - Vi will then search the entire file and replace every occurrence of `oldword` with `replacementword`.


<br>

### Example
Suppose you have a file example.txt with the following content:

```bash
The `quick` brown fox jumps over the lazy dog.
The `quick` brown fox is very `quick` and very clever.
```

To replace the word `quick` with `swift`, you would:

- Open the file in Vi:

```bash
vi example.txt
```

- Enter command mode by pressing `Esc`.

- Execute the replace command:

```bash
:%s/quick/swift/g
```

After running the command, the file content would be:

```bash
The `swift` brown fox jumps over the lazy dog.
The `swift` brown fox is very `swift` and very clever.
```

<br>

## Additional Tips

- Case Sensitivity: By default, the search is case-sensitive. To perform a **case-insensitive** search and replace, add the `i` flag like this:

```bash
:%s/oldword/replacementword/gi
```

- Confirm Each Replacement: If you want Vi to prompt you for confirmation before each replacement, add the `c` flag:

```bash
:%s/oldword/replacementword/gc
```

- Specific Line Range: You can limit the replace operation to a specific range of lines by specifying the range. For example, to replace words only in lines 10 to 20:

```bash
:10,20s/oldword/replacementword/g
```

<br>

## Conclusion

Using Vi to replace words in a file is a quick and powerful way to edit text in Linux. The `:%s/oldword/replacementword/g` command allows you to perform global replacements efficiently. With additional flags and options, you can customize the search and replace functionality to suit your needs.

<br>

📝 For more information and specific details about the `vi` command, refer to [vi man page](https://linux.die.net/man/1/vi).
