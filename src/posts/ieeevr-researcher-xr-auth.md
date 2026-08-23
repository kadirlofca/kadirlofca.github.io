---
published: true
title: Biometric Authentication for XR
descriptionHead: Won Best 3DUI Authentication Method at IEEE VR Shanghai
descriptionTail: " by engineering a novel continuous 2FA framework for XR using motion-matched hardware keys and Morse Code OTP input"
tags:
  - C#
  - Unity
  - VR
  - XR
  - Security
date: 2022-10-01
endDate: 2022-10-01
organization: IEEE
location: Shanghai, China
role: Researcher
---

## Overview

We won **Best 3DUI Authentication Method** at the IEEE VR Shanghai 3DUI Contest. The project was a novel Two-Factor Authentication framework designed specifically for XR — addressing the problem that traditional authentication is disruptive and insecure inside immersive VR sessions.

## The Problem

Authenticating in XR is awkward. Typing a password breaks immersion, shoulder surfing is easier in shared physical spaces, and most session-based systems only authenticate at login — leaving sessions vulnerable to device takeover after the fact.

## The Solution: Continuous Kinetic Authentication

Our system authenticates the user *continuously* throughout the session, not just at login. The key component is a custom-built hardware security device — **the Key** — that the user carries on their body.

**Initial authentication — Morse Code OTP:**
The Key outputs a Time-Based One-Time Password (TOTP) as haptic vibrations in Morse Code. The user feels the vibrations and inputs the pattern into a UI inside their XR display. Using vibrations instead of a visible code makes shoulder surfing significantly harder for attackers.

**Continuous authentication — Motion Matching:**
After the initial TOTP, the system continuously compares the motion of the XR controller against the motion of the Key using gyroscope data. If they diverge — meaning the controller and the Key are no longer moving together — the user is prompted to re-authenticate. A legitimate user carrying the Key moves with it naturally; an attacker who grabbed the headset won't have the Key.

## Engineering

I developed the C# algorithms in Unity that synchronize the disparate hardware data streams from the HTC Vive controller and the external sensor, handling clock drift and sampling rate differences to produce accurate motion comparisons. I also programmed the motion-tracking hardware to interface with the SteamVR environment and designed the Morse Code OTP input method within the 3D UI.

## Recognition

The IEEE VR 3DUI Contest recognized the project for the novelty of the continuous verification approach, the user-centric design, and the seamless integration of TOTP, haptic feedback, and kinetic activity in an XR context.
