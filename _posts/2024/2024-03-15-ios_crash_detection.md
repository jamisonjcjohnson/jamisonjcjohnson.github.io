---
title: Utilizing Crash Detection on iOS Devices
layout: post
date: '2024-03-15'
description: The implementation of Crash Detection on iOS devices marks a significant advancement in leveraging technology for emergency assistance during severe car crashes.
intro: "This feature, known as Crash Detection, is designed to work seamlessly on specific iPhone and Apple Watch models."
lang: en_US
image: "/static/assets/img/blog/2024/ios_crash_detection/ios_crash_detection.png"
keywords: ios,apple,macos
categories:
- Macos
tags:
- ios
- apple
- macos
icon: fa-apple
---


In the event of a severe car crash, your iPhone or Apple Watch can play a crucial role in connecting you to emergency services. This feature, known as **Crash Detection**, is designed to work seamlessly on specific iPhone and Apple Watch models. Let's delve into how it operates and the steps to set it up on your devices.

<br>

* TOC 
{:toc}

<br>

## Supported iPhone and Apple Watch Models

Crash Detection is compatible with the following devices:

- iPhone 14 or later (all models) running iOS 16 or later.
- Apple Watch Series 8 or later, Apple Watch SE (2nd generation), and Apple Watch Ultra or later with watchOS 9 or later.

Emergency calls made through Crash Detection utilize either a cellular connection or Wi-Fi Calling, provided there is an internet connection from your Apple Watch or iPhone.

<br>

## How Crash Detection Works

Crash Detection focuses on identifying severe car crashes, including front-impact, side-impact, rear-end collisions, and rollovers, involving various types of passenger vehicles. Here's an overview of how the process unfolds:

- Upon detecting a severe car crash, your iPhone or Apple Watch triggers an alarm and displays an alert.
- If you have your iPhone, it reads the alert aloud for visibility, displaying an Emergency Call slider for quick access to emergency services.
- For Apple Watch users, the device chimes, taps the wrist, and displays an Emergency Call slider on the screen.
- If both devices are present, the Emergency Call slider appears on the Apple Watch, and the call is connected with audio playing through the watch.
- You have the option to call emergency services or dismiss the alert if you are able to respond.
- In case of unresponsiveness, the device automatically initiates a call to emergency services after a 20-second delay.
- If emergency contacts are set up, the device sends a message sharing your location and notifying them of the severe car crash.
- Medical ID information is displayed for emergency responders if previously set up.

It's important to note that Crash Detection won't interfere with any ongoing emergency calls on your iPhone, and it cancels non-emergency calls on both your iPhone and Apple Watch.

<br>

## Setting Up Your Device for Emergencies

By default, Crash Detection is enabled on supported iPhone and Apple Watch models. However, you can take additional steps to ensure your device shares the necessary information with emergency contacts and responders:

- Set up your Medical ID and emergency contacts in the Health app.
- Enable Location Services for Emergency SOS on your iPhone to share your location with emergency contacts.

<br>

## Making an Emergency Call Post-Crash

Your iPhone or Apple Watch can connect you to emergency services even if you're unresponsive. Notably:

- iPhone 14 or later models may use Emergency SOS via satellite when outside of cellular and Wi-Fi coverage.
- If responsive, you can swipe the Emergency Call slider to initiate a call to emergency services and communicate with a responder.
- If unresponsive, the device initiates a countdown with alerts to grab attention before making an automatic call to emergency services.

<br>

## Disabling Crash Detection

If you wish to turn off alerts and automatic emergency calls, follow these steps:

- **On your iPhone:**
  - Open the Settings app.
  - Tap on Emergency SOS.
  - Turn off "Call After Severe Crash."

- **On your Apple Watch:**
  - Open the Apple Watch app on your iPhone.
  - In the My Watch tab, navigate to Emergency SOS.
  - Turn off "Call After Severe Crash."

<br>

## Conclusion

The implementation of Crash Detection on iOS devices marks a significant advancement in leveraging technology for emergency assistance during severe car crashes. With a seamless integration on supported iPhone and Apple Watch models, this feature not only alerts users but also initiates vital connections to emergency services. 

The careful consideration of user privacy, through on-device processing and the optional sharing of data to enhance Crash Detection, underscores Apple's commitment to balancing innovation with user protection. Whether it's the ability to call for help when responsive or the automatic initiation of emergency services when unresponsive, Crash Detection provides a robust safety net. As technology continues to evolve, features like Crash Detection showcase how smart devices can play a pivotal role in enhancing user safety and well-being.

<br>

📝 For more information about the crash detection feature, you can refer to this [Apple Support Article](https://support.apple.com/en-us/104959).
