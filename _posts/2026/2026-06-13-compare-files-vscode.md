---
title: How to Compare Files in Visual Studio Code
layout: post
date: '2026-06-13'
description: Learn how to compare two files in Visual Studio Code using the Explorer, Command Palette, Source Control panel, and command line.
intro: "Visual Studio Code includes a built-in diff editor that highlights differences between files without requiring an additional extension. In this blog post, we will explain how to compare files in Visual Studio Code using several quick and practical methods."
lang: en_US
image: "/static/assets/img/blog/2026/compare-files-vscode/compare-files-vscode.png"
keywords: compare files in VSCode, VSCode diff, Visual Studio Code compare files, code diff, Git file comparison
categories:
- Other
tags:
- vscode
- file-comparison
- diff
- git
icon: fa-code
---

Visual Studio Code includes a built-in file comparison tool that displays two files side by side and highlights their differences. This is useful when reviewing configuration changes, troubleshooting code, comparing document revisions, or checking modifications before committing them to Git.

No extension is required because the diff editor is included with Visual Studio Code.

In this blog post, we will explain how to compare files in Visual Studio Code using the Explorer, Command Palette, Source Control panel, and command line.

<br>

* TOC
{:toc}

<br>

## Compare Two Files from the Explorer

The Explorer is the quickest way to compare two files in the same project.

- Open the folder containing the files in Visual Studio Code.
- Right-click the first file.
- Select **Select for Compare**.
- Right-click the second file.
- Select **Compare with Selected**.

VSCode opens both files in the diff editor.

You can also select two files using **Ctrl** on Windows or Linux, or **Command** on macOS, right-click the selection, and select **Compare Selected**.

<br>

## Understand the Diff Editor

The diff editor normally displays the original file on the left and the compared file on the right.

Changes are highlighted to show:

- Added lines
- Removed lines
- Modified text
- Unchanged sections

You can scroll through both files together and use the navigation arrows in the editor toolbar to move between changes.

The view can also be changed between side-by-side and inline comparisons through the diff editor menu.

<br>

## Compare an Open File with Another File

To compare the currently open file with another file:

- Open the first file.
- Press **Ctrl+Shift+P** on Windows or Linux.
- Press **Command+Shift+P** on macOS.
- Search for **File: Compare Active File With...**
- Select the second file.

The comparison opens immediately in the diff editor.

<br>

## Compare a File with Its Saved Version

VSCode can compare unsaved changes with the last saved version of a file.

With the modified file open, use:

**Ctrl+K D**

On macOS, use:

**Command+K D**

You can also open the Command Palette and select:

**File: Compare Active File with Saved**

This is useful when reviewing changes before saving the file.

<br>

## Compare a File with Clipboard Content

To compare an open file with text copied to the clipboard:

- Copy the text you want to compare.
- Open the file in VSCode.
- Open the Command Palette.
- Select **File: Compare Active File with Clipboard**.

The keyboard shortcut on Windows and Linux is:

**Ctrl+K C**

This method is useful when comparing a configuration, script, or code sample without creating another file.

<br>

## Compare Files from the Command Line

VSCode can launch a file comparison directly from a terminal.

Use:

**code --diff first-file second-file**

For example:

**code --diff original.conf updated.conf**

The `code` command must be available in your terminal path.

On macOS, open the Command Palette and run:

**Shell Command: Install 'code' command in PATH**

<br>

## Compare Git Changes

When working in a Git repository:

- Open the **Source Control** panel.
- Locate the modified file under **Changes**.
- Select the file.

VSCode opens a comparison between the repository version and the current working copy.

This makes it easy to review changes before staging or committing them.

<br>

## Conclusion

Visual Studio Code provides several convenient methods for comparing files without installing an extension. The Explorer context menu is the fastest option for two project files, while the Command Palette supports comparisons with saved files, clipboard content, and files outside the current view.

The `code --diff` command is useful for terminal-based workflows, and the Source Control panel provides an immediate comparison of Git changes. Together, these tools make VSCode a practical option for reviewing code, configurations, and document revisions.

<br>

## Additional Resources

- [Visual Studio Code File Comparison Documentation](https://code.visualstudio.com/docs/editing/codebasics#_compare-files)
- [Visual Studio Code Source Control](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [VSCode.one File Comparison Guide](https://vscode.one/diff-vscode/)