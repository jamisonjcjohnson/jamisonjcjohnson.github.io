---
title: Enabling Line Numbers in Vim
layout: post
date: '2024-01-09'
description: Vim, a powerful text editor, offers various customization options to suit users' preferences. Enabling line numbers can significantly aid navigation and reference while editing files.
intro: "Customizing Vim settings can significantly enhance your editing experience. Enabling line numbers by default is a practical configuration for better navigation and reference while working with multiple files."
lang: en_US
image: "/static/assets/img/blog/2024/enabling_vim_line_numbers/enabling_vim_line_numbers.png"
keywords: texteditor,rhel,linux
categories:
- Linux
tags:
- texteditor
- rhel
- linux
icon: fa-linux
---

Vim, a powerful text editor, offers various customization options to suit users' preferences. Enabling line numbers can significantly aid navigation and reference while editing files. Here's how to set up Vim to display line numbers automatically.

<br>

* TOC 
{:toc}

<br>

## Enabling Line Numbers in Vim by Default

To have line numbers displayed by default in Vim, follow these steps:

<br>

### Editing the Vim Configuration File

**Locate the `/etc/vimrc` File:**
   ```bash
   sudo vim /etc/vimrc
   ```
**Add Line Number Configuration:**

Within the `/etc/vimrc` file, add the following line : 

   ```bash
    set nu
```
This command tells Vim to always display line numbers when you open files in the editor.

Save the changes and either restart Vim or open a new file to see line numbers enabled by default.

<br>

## Enabling Line Numbers Temporarily

You can also enable line numbers temporarily within the Vim editor by entering the following command within Vim:
  ```bash
    :set numbers
```

This command enables line numbers for the current session but doesn't save the setting for future use.

<br>

## Conclusion

Customizing Vim settings can significantly enhance your editing experience. Enabling line numbers by default is a practical configuration for better navigation and reference while working with multiple files. Utilize this method to streamline your workflow and increase productivity within the Vim text editor.

<br>

📝 For more information about Vi/Vim, refer to the  [Vi Man Page](https://linux.die.net/man/1/vi).


