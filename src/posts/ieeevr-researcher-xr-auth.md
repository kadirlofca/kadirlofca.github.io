---
published: true
title: Award Winning XR Auth
descriptionHead: Keeping XR sessions secure
descriptionTail: " via motion-matching and morse code"
tags:
  - C#
  - Unity
  - VR
  - XR
  - Security
date: 2022-10-01
endDate: 2023-03-29
organization: UNCG
location: Shanghai, China
role: Researcher
---

Existing XR authentication methods verify users once at login and trust the session until logout. In shared physical spaces, that model breaks: anyone who picks up a headset inherits an active session. The IEEE VR 2023 3DUI Contest asked teams to rethink authentication for the metaverse.

We designed and built a two-layer continuous authentication framework for XR. The first layer handles initial login through a hardware key that delivers a one-time password as haptic pulses, keeping the user in-headset and eliminating the shoulder-surfing risk of a visible code. The second layer verifies the session continuously: the key and the controller are compared in motion, and if they diverge, the session flags for re-authentication. A legitimate user wearing the key moves with it naturally. Someone who grabs the headset does not have the key.

The work won Best 3DUI Contest Award at IEEE VR 2023 and has since been cited in XR authentication surveys and follow-on research.

**Paper:** [A Continuous Authentication Technique for XR Utilizing Time-Based One Time Passwords, Haptics, and Kinetic Activity](https://ieeexplore.ieee.org/document/10108572/) — IEEE VR 2023.

**Stack:** C# · Unity · SteamVR · HTC Vive · Custom IMU Hardware
