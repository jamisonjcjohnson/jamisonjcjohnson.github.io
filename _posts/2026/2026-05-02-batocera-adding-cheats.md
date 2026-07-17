---
title: Batocera - Adding Cheats
layout: post
date: '2026-05-02'
description: Learn how to download, load, enable, save, and troubleshoot cheat codes in Batocera using the RetroArch cheat system.
intro: "Batocera includes support for cheat databases and manually created cheat codes through RetroArch and several standalone emulators. This guide explains how to install the available cheat database, load cheats for a specific game, enable individual codes, and troubleshoot common compatibility problems."
lang: en_US
image: "/static/assets/img/blog/2026/batocera-adding-cheats/batocera-adding-cheats.jpg"
keywords: Batocera cheats, RetroArch cheats, Batocera cheat database, Game Genie, Action Replay, retro gaming, emulation
categories:
- Batocera
tags:
- batocera
- retroarch
- cheats
- emulation
- retrogaming
icon: fa-gamepad
---

Batocera makes it possible to use cheat codes with many classic console games through the cheat system included with RetroArch. Cheats can provide infinite lives, unlimited health, additional currency, unlocked levels, and other game-specific modifications.

The easiest method is to install Batocera's downloadable cheat database and then load the appropriate cheat file from the RetroArch Quick Menu. You can also import your own `.cht` files or manually enter individual codes that are not included in the database.

Cheat support depends on the emulator, selected core, game region, and ROM revision. The process in this guide primarily applies to games running through a Libretro core.

In this blog post, we will walk through downloading the Batocera cheat database, loading cheats for a specific game, enabling individual codes, adding custom cheat files, and troubleshooting common compatibility problems.

<br>

* TOC
{:toc}

<br>

## Before You Begin

Before installing cheats, confirm that Batocera has an active Internet connection.

You should also consider backing up your game saves and save states. Some cheat codes directly modify game memory and may cause:

- Game crashes
- Corrupted save files
- Broken progression
- Unexpected gameplay behavior
- Conflicts with other enabled cheats

Enable one cheat at a time whenever possible. This makes it easier to identify the source of a problem.

Cheats should generally be limited to offline and single-player gameplay.

<br>

## Download the Batocera Cheat Database

Recent Batocera releases distribute the Libretro cheat database through the Content Downloader instead of including the complete database in the operating system image.

From the Batocera home screen:

- Open the **Main Menu**.
- Select **Updates & Downloads**.
- Select **Content Downloader**.
- Scroll to the **Misc** section.
- Locate the available Libretro or RetroArch cheat database.
- Select the package and confirm the installation.

Batocera will download and install the available cheat files.

The package name and category placement may differ slightly depending on the installed Batocera version.

More information about the downloader is available in the [Batocera Content Downloader documentation](https://wiki.batocera.org/content_downloader).

<br>

## Update an Existing Cheat Database

Batocera can also update previously installed Content Downloader packages.

To update your cheat database:

- Open **Main Menu**.
- Select **Updates & Downloads**.
- Open **Content Downloader**.
- Scroll to the bottom of the package list.
- Select **Update Installed Content**.

Updating the database may add cheat files for additional games or correct existing codes.

<br>

## Launch the Game

After installing the cheat database, return to your game collection and launch the game you want to modify.

For the most consistent results, the game should use a Libretro emulator core. You can review or change the selected emulator by opening the game's advanced settings from the Batocera interface.

Allow the game to load completely before opening the RetroArch menu.

<br>

## Open the RetroArch Quick Menu

While the game is running, press:

**Hotkey + South Button**

The south button is normally:

- **B** on an Xbox-style controller
- **Cross** on a PlayStation-style controller
- **A** on a Nintendo-style controller

The exact button labels depend on the controller and how it was mapped in Batocera.

This shortcut should open the RetroArch Quick Menu. Batocera documents this shortcut as the hotkey combined with the controller's south face button.

For additional shortcuts, see the [Batocera Hotkey documentation](https://wiki.batocera.org/basic_commands).

<br>

## Open the Cheats Menu

From the RetroArch Quick Menu:

- Select **Cheats**.
- Select **Load Cheat File (Replace)**.

The **Replace** option clears any cheats currently loaded and replaces them with the selected cheat file.

Some RetroArch versions also provide **Load Cheat File (Append)**. The **Append** option adds another cheat file without removing cheats that are already loaded.

<br>

## Select the Game's Cheat File

After selecting **Load Cheat File (Replace)**, browse through the cheat database.

The directory structure is normally organized by gaming system or emulator.

For example, you may see folders for:

- Nintendo Entertainment System
- Super Nintendo Entertainment System
- Game Boy
- Game Boy Advance
- Sega Genesis
- PlayStation
- Arcade systems

Open the appropriate system folder and locate the cheat file that matches your game.

Pay close attention to:

- Game title
- Region
- Revision
- Language
- Platform

A cheat created for a North American release may not work with a European or Japanese release of the same game. Different revisions of a game can also use different memory addresses.

<br>

## Enable Individual Cheats

After loading the file, return to the **Cheats** menu. The available codes should now appear in the list.

To enable a code:

- Select the cheat description.
- Change **Enabled** to **On**.
- Return to the main Cheats menu.
- Select **Apply Changes**.

Resume the game and test the cheat.

Some codes take effect immediately. Others require you to:

- Restart the level.
- Lose or gain a life.
- Enter another area.
- Open an inventory screen.
- Reset the game.
- Reload a save.

Avoid enabling a large group of cheats simultaneously. Multiple codes may attempt to modify the same memory area and conflict with one another.

<br>

## Automatically Apply Enabled Cheats

Depending on the RetroArch version, the Cheats menu may include options such as:

- **Auto-Apply Cheats During Game Load**
- **Apply After Toggle**
- **Apply Changes**

Enabling automatic application can reduce the need to manually select **Apply Changes** after every adjustment.

Batocera also supports the following advanced RetroArch settings:

`global.retroarch.apply_cheats_after_load=true`

`global.retroarch.apply_cheats_after_toggle=true`

These settings can be added to:

`/userdata/system/batocera.conf`

The first setting applies loaded cheats after the game starts. The second applies changes after a cheat is enabled or disabled.

Review the [Batocera Advanced RetroArch Settings documentation](https://wiki.batocera.org/advanced_retroarch_settings) before modifying `batocera.conf`.

<br>

## Save the Cheat Configuration

Enabled cheats may only remain active for the current gaming session unless the configuration is saved.

Depending on the RetroArch version and core, the Cheats menu may provide options such as:

- **Save Cheat File As**
- **Save Game-Specific Cheat File**
- **Auto-Apply Cheats During Game Load**

Use a game-specific cheat file when available. This helps prevent the selected cheats from being applied to unrelated games that use the same emulator core.

After saving, exit the game normally and launch it again to confirm that the desired codes are loaded and applied.

Menu labels may vary between RetroArch versions.

<br>

## Add a Cheat Code Manually

You can manually create a cheat when the desired code is not included in the downloaded database.

While the game is running:

- Open the RetroArch Quick Menu.
- Select **Cheats**.
- Select **Add New Code to Top** or **Add New Code to Bottom**.
- Open the newly created cheat entry.
- Select **Description** and enter a recognizable name.
- Select **Code** and enter the cheat code.
- Set **Enabled** to **On**.
- Return to the Cheats menu.
- Select **Apply Changes**.

The code format must be supported by the selected emulator core. Codes from Game Genie, Action Replay, GameShark, or other cheat systems are not automatically interchangeable.

Libretro provides additional details in its [RetroArch Cheat and Rumble Codes documentation](https://docs.libretro.com/guides/cheat-codes/).

<br>

## Add Custom Cheat Files

RetroArch cheat files normally use the `.cht` file extension.

Custom files can be stored in Batocera's user-accessible cheats directory:

`/userdata/cheats`

From another Windows computer, the same directory may be available through the Batocera network share:

`\\BATOCERA\share\cheats`

You can organize the files into subdirectories for each system.

After copying a cheat file:

- Launch the game.
- Open the RetroArch Quick Menu.
- Select **Cheats**.
- Select **Load Cheat File (Replace)**.
- Browse to `/userdata/cheats`.
- Select the appropriate `.cht` file.
- Enable the desired codes.
- Select **Apply Changes**.

If the Batocera hostname does not resolve from Windows, replace `BATOCERA` with the system's IP address.

<br>

## Locate the Batocera IP Address

To view the Batocera IP address:

- Open the **Main Menu**.
- Select **Network Settings**.
- Locate the current IP address.

You can then access the network share from Windows using an address similar to:

`\\192.168.1.50\share\cheats`

Your actual IP address will be different.

<br>

## Search for a Cheat Using Memory Values

RetroArch can search the active game's memory to help create new cheats.

This is useful when you know a value such as:

- Current number of lives
- Health points
- Ammunition
- Currency
- Experience points
- Inventory quantity

The general process is:

- Start the game.
- Open **Quick Menu > Cheats**.
- Select **Start or Continue Cheat Search**.
- Choose an appropriate memory size.
- Begin the search.
- Return to the game and change the value.
- Search for values that are higher, lower, equal, or different.
- Repeat the process until only a small number of matches remain.
- Add the remaining matches to the cheat list.
- Test each result individually.

Memory searching is an advanced process and may require several attempts before identifying the correct address.

Save your progress before experimenting because an incorrect memory modification can freeze or crash the emulator.

<br>

## Libretro Cores Versus Standalone Emulators

The procedure in this guide primarily applies to Libretro cores running through RetroArch.

Standalone emulators may use completely separate cheat systems. Examples include:

- Dolphin
- PCSX2
- PPSSPP
- RPCS3
- Cemu
- Xemu

For these emulators, the RetroArch Cheats menu will not be available because the game is not running inside RetroArch.

You may need to:

- Enable cheats in Batocera's advanced game options.
- Open the standalone emulator's configuration interface.
- Add a platform-specific cheat file.
- Enable Action Replay, Gecko, patch, or emulator-specific codes.
- Place cheat files in the emulator's configuration directory.

Always confirm which emulator and core Batocera is using before troubleshooting.

<br>

## Troubleshooting Missing Cheats

If no cheat files appear, verify the following:

- Batocera is connected to the Internet.
- The cheat database was installed from Content Downloader.
- The database installation completed successfully.
- The correct console directory was selected.
- The game is running through a Libretro core.
- The `.cht` files exist under `/userdata/cheats`.
- Batocera has been restarted after installing the database.

You can also return to Content Downloader and select **Update Installed Content**.

<br>

## Troubleshooting Cheats That Do Not Work

A cheat may appear in the list but fail to affect the game.

Common causes include:

- The cheat was not enabled.
- **Apply Changes** was not selected.
- The cheat requires a game restart.
- The code is for a different region.
- The code is for a different game revision.
- The selected emulator core does not support the code.
- Another enabled cheat conflicts with it.
- The game is running through a standalone emulator.
- The cheat database contains an outdated or incorrect code.

Disable all other cheats and test the code by itself.

You can also try another Libretro core when Batocera provides multiple compatible cores for the same platform.

<br>

## Troubleshooting RetroArch Menu Access

If **Hotkey + South Button** does not open RetroArch:

- Confirm that the game uses a Libretro core.
- Verify the controller's hotkey assignment.
- Test the shortcut using player one's controller.
- Review the controller mapping in Batocera.
- Try another compatible emulator core.

Batocera's hotkey shortcuts are not supported identically by every emulator.

<br>

## Cheat Safety Recommendations

Follow these practices when using cheats:

- Back up important save files.
- Create a save state before enabling a code.
- Enable one code at a time.
- Avoid saving while an unstable cheat is active.
- Do not mix codes from different game regions.
- Disable cheats before troubleshooting normal gameplay problems.
- Keep a copy of custom `.cht` files.
- Test downloaded codes before relying on them.

A cheat that works during one section of a game may cause problems later, especially when it modifies inventory, progression, or scripted events.

<br>

## Conclusion

Batocera provides a straightforward method for adding cheats to games running through RetroArch. The recommended approach is to install the cheat database through Content Downloader, launch the game with a Libretro core, open the RetroArch Cheats menu, load the correct game file, and enable only the codes you need.

Custom `.cht` files and manually entered codes provide additional flexibility when a game is missing from the database. However, compatibility depends heavily on the game region, revision, emulator, and selected core.

Back up your saves, test one code at a time, and remember that standalone emulators may require a completely different configuration process.

<br>

## Additional Resources

- [Batocera Content Downloader](https://wiki.batocera.org/content_downloader)
- [Batocera Hotkey Shortcuts](https://wiki.batocera.org/basic_commands)
- [Batocera Advanced RetroArch Settings](https://wiki.batocera.org/advanced_retroarch_settings)
- [RetroArch Cheat and Rumble Codes](https://docs.libretro.com/guides/cheat-codes/)
- [Libretro Cheat Database](https://github.com/libretro/libretro-database/tree/master/cht)
- [Batocera Official Website](https://batocera.org/)