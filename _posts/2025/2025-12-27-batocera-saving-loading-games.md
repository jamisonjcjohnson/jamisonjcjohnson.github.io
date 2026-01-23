---
title: How to Save and Load Games in Batocera Using Save States
layout: post
date: '2025-12-27'
description: Learn how to save and load games in Batocera using emulator save states, including hotkeys and save slot selection.
intro: "Batocera makes retro gaming easy, but saving and loading games can be confusing if you are new to emulator save states. Fortunately, Batocera provides a simple and consistent method using hotkeys and save slots."
lang: en_US
image: "/static/assets/img/blog/2025/batocera-saving-loading-games/batocera-saving-loading-games.jpg"
keywords: batocera,save states,retro gaming,emulation
categories:
- Batocera
tags:
- batocera
- emulation
- retro gaming
- howto
icon: fa-gamepad
---

Saving games in Batocera does not always work the same way as it did on original consoles. Instead of relying on in-game save menus, Batocera uses **emulator save states**, which allow you to save and load your game at almost any moment.

In this blog post, we will walk through how to **save and load games in Batocera using the default emulator controls**, including how to choose and manage save slots.

<br>

* TOC
{:toc}

<br>

## Starting a Game

Begin by launching any game from your Batocera system. Once the game is running, all save and load actions are handled through the emulator hotkeys.

<br>

## The Hotkey Button

Batocera uses a designated **Hotkey** button on your controller. This is usually mapped during initial controller setup and is commonly:

- The **Select** button on many controllers
- Or a dedicated hotkey button if configured

All save and load actions are performed by holding the Hotkey button and pressing another button.

<br>

## Saving a Game (Quick Save)

To quickly save your game:

- Hold the **Hotkey** button
- Press **X**

This creates a save state in the currently selected slot. Batocera will briefly indicate that the game has been saved.

<br>

## Loading a Game (Quick Load)

To load a previously saved game:

- Hold the **Hotkey** button
- Press **Y**

The game will immediately load from the current save slot.

<br>

## Choosing a Save Slot

Batocera supports multiple save state slots, allowing you to keep different progress points.

To select a save slot:

- Hold the **Hotkey** button
- Press **A** to open the emulator menu
- Navigate to **State Slot**
- Select the desired slot (for example, Slot 0 or Slot 1)
- Go back to the game

Once selected, all saves and loads will use that slot until you change it again.

<br>

## Example Process

A typical save and load workflow looks like this:

- Start the game
- Open the menu with **Hotkey + A**
- Select **State Slot 1**
- Return to the game
- Save progress with **Hotkey + X**
- Later, load that save with **Hotkey + Y**

You can switch between slots at any time using the same menu.

<br>

## Important Notes About Save States

- Save states are emulator-specific
- They may not be compatible across different emulators or versions
- They are separate from in-game saves

For best results, avoid mixing save states between different emulator cores.

<br>

## Final Thoughts

Save states are one of the most powerful features in Batocera. Once you understand the hotkey combinations and save slot system, saving and loading games becomes fast and effortless.

Whether you are playing casually or experimenting with different progress points, Batocera’s save state system gives you full control over your gameplay experience.
