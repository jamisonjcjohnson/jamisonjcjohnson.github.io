---
title: Show Git Branch in Your Terminal Prompt Automatically
layout: post
date: '2025-04-23'
description: Thankfully, there’s a way to enhance your command line interface so you always know which Git branch you’re on—without running `git status` every few minutes.
intro: "In this blog post, we'll update your `.bashrc` file so that your terminal prompt automatically displays the Git repository and active branch." 
lang: en_US
image: "/static/assets/img/blog/2025/show_git_in_terminal/show_git_in_terminal.jpg"
keywords: linux,terminal,git
categories:
- Linux
tags:
- linux
- terminal
- git
icon: fa-linux
---

Working in the terminal with Git often means switching between branches and directories rapidly. It’s easy to lose track of your current branch, especially when juggling multiple features, hotfixes, or code reviews. Thankfully, there’s a way to enhance your command line interface so you always know which Git branch you’re on—without running `git status` every few minutes.

In this blog post, we'll update your `.bashrc` file so that your terminal prompt automatically displays the Git repository and active branch whenever you navigate into a Git-tracked directory.

<br>

* TOC 
{:toc}

<br>

## Why This Matters

Being aware of your current branch reduces mistakes, such as accidentally committing to `main` instead of a feature branch. By showing the branch in your prompt, you stay oriented and reduce mental overhead during development.

<br>

## The Bash Function

First, define a Bash function that grabs the current branch name and wraps it in simple square brackets. This function filters the output of `git branch` to find the currently checked-out branch and applies formatting.

<br>

## Customizing Your PS1 Prompt

Next, you modify your shell prompt (PS1) to include:
- Your username and hostname
- The current working directory
- The Git branch, if inside a Git-tracked directory

The updated prompt uses ANSI color codes to distinguish elements: yellow for the working directory, cyan for the Git branch, and default colors elsewhere.

<br>

## How to Apply It

- Open your `~/.bashrc` file in your preferred text editor.
- Add the function that parses the Git branch.
- Add or modify the PS1 variable to include a call to that function.
- Save and close the file.
- Apply the changes by running `source ~/.bashrc`.

Add the below text to your `~/.bashrc` file : 
```bash
# Function to get the current Git branch name and format it with square brackets
parse_git_branch() {
  git branch 2>/dev/null | grep '*' | sed 's/* /[/' | sed 's/$/]/'
}

# Set the shell prompt to show:
# - username@hostname
# - current working directory
# - current Git branch (if inside a Git repo), shown in [brackets]
export PS1="\u@\h \[\e[33m\]\w \[\e[36m\]\$(parse_git_branch)\[\e[0m\] \$ "
```

After this, your prompt will dynamically update to display the Git branch whenever you are inside a Git repository.

<br>

## Make It Your Own

This is just a starting point. You can take it further by:
- Changing colors to suit your style
- Adding timestamps
- Including the last command's exit code
- Displaying the current Python virtual environment

There are many ways to customize your terminal to match your workflow.

<br>

## Conclusion

This small tweak to your `.bashrc` adds a lot of value to your day-to-day Git operations. Knowing which branch you're on at a glance helps prevent mistakes, keeps you organized, and increases your overall productivity in the terminal.

In future blog posts, we’ll continue diving into tips and tweaks for a more efficient command-line experience.

<br>

📝 For more information about `~/.bashrc` script, please review this [blog article](https://ultahost.com/knowledge-base/bashrc-file-in-linux/) .