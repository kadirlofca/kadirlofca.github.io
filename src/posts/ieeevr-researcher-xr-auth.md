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

## The Problem With Authenticate-Once

Standard authentication models assume a flat session — you verify once at login and the system trusts you until logout. XR breaks that model. The headset is shared hardware in a shared physical space. A session that stays authenticated after device handoff is a session that can be silently taken over.

The IEEE VR 2023 3DUI Contest theme was "Metaverse Privacy — Authentication Using 3D User Interfaces." We entered a two-layer continuous authentication framework, and won **Best 3DUI Contest Award**.

## The Two-Layer Design

Existing XR auth approaches each solve part of the problem but not all of it. Behavioral biometrics (head-movement patterns, gaze) verify passively but provide no explicit second factor. Hardware tokens and PIN entry provide 2FA but only at session start. Nobody had fused both into a continuous framework.

**Layer 1 — Initial authentication via haptic TOTP:**
A web-connected hardware key generates a time-based one-time password delivered as vibrotactile pulses in Morse Code. The user decodes the haptic pattern and inputs it into the XR UI — no phone, no screen, no break from the headset. The haptic channel is deliberate: in mixed-reality spaces, visual codes on a phone are readable by bystanders. A vibration felt through the hand is not.

**Layer 2 — Continuous session verification via motion matching:**
After login, the system continuously compares gyroscope streams from the HTC Vive controller and the hardware key. If they diverge — the controller is moving but the key is not, or vice versa — the session flags for re-authentication. A legitimate user carrying the key on their body moves with it naturally. An attacker who picks up the headset doesn't have the key.

The attack surface is the window between physical separation and divergence detection. Tuning that threshold was the core engineering tradeoff: tight catches attackers faster but triggers false re-auths on natural movement (reaching, adjusting the headset); loose is more comfortable but widens the takeover window. The threshold was exposed as a configurable parameter rather than hardcoded.

## The Signal Synchronization Problem

The HTC Vive controller and the external IMU are independent hardware devices with independent clocks and different sampling rates. Naive comparison produces false positives — the streams appear divergent because of clock drift and sample timing misalignment, not because the user actually changed.

I built the C# synchronization layer in Unity that normalizes both streams to a common time base, interpolates samples to align timestamps, and computes motion similarity over a sliding window. This ran inside the SteamVR environment alongside the 3D UI, which required careful threading — the motion comparison loop couldn't block the render thread.

## Prior Work and What This Added

| Prior system | Approach | Gap |
|---|---|---|
| VRCAuth (2020) | Head-movement behavioral biometrics | Passive only; no explicit 2FA |
| BlinKey (2020) | Blink rhythm + pupil size on HTC Vive Pro | Eye-tracking hardware required; static session |
| Motion passwords | Mid-air gesture as credential | Knowledge-based only; no continuous verification |
| PIN/virtual keyboard | Standard knowledge factor | Shoulder-surfing vulnerable in shared VR spaces |

The fused approach — explicit 2FA at session start combined with continuous kinetic verification — addressed gaps that each prior approach left open. The work has since been cited in XR authentication surveys and follow-on research at ACM VRST 2025.

**Paper:** [A Continuous Authentication Technique for XR Utilizing Time-Based One Time Passwords, Haptics, and Kinetic Activity](https://ieeexplore.ieee.org/document/10108572/) — IEEE VR 2023, Shanghai. Co-authored with J. Grandi, J. Terrell, C. Ruiz Valencia, R. Kopper (Interactive Realities Lab, UNCG).

**Stack:** C# · Unity · SteamVR · HTC Vive · Custom IMU Hardware
