---
published: true
title: XR Kinetic Authentication 🔒
description: A novel method of authentication for extended reality devices that
  uses 'something you do' factor.
tags:
  - C#
  - Unity
  - Cybersecurity
date: 2025-03-10
---
In the fast-evolving field of Extended Reality (XR), ensuring secure user authentication while maintaining an immersive experience is a challenge. To address this issue, we developed a continuous authentication technique that combines **Time-Based One-Time Passwords (TOTP)**, **haptic feedback**, and **kinetic activity**.

We won the **IEEE VR 2023 Best 3DUI Contest Award!**

## Concept and Design

The concept behind our authentication technique is rooted in the need for continuous user verification during an XR session. Traditional authentication methods can become cumbersome. Our approach, while still requiring manual entry of a TOTP, continuously authenticates the user by matching the XR device's movements to a second device attached to the user.

**The Key**

The novelty of this approach comes from _the key,_ a device that the user owns and carries on their body. The key is able to output vibrations and analyze movements using a gyroscope.

### Time-Based One-Time Passwords (TOTP)

Initially, the user is asked to enter a TOTP through their XR device. The TOTP code presents itself as morse code vibrations outputted by the key. The user feels the vibrations and inputs them to a user interface in their XR display. A nice side affect of using vibrations for the TOTP is that it makes shoulder surfing harder for attackers.

### Kinetic Activity

After the TOTP authentication, the user is continuously authenticated by checking if the XR device movements match movements of the key. When there is a mismatch in their movements, the user is taken out of the experience and prompted to re-authenticate.

## IEEE VR 3DUI Contest Award

Our project stood out in the IEEE VR 3DUI Contest due to its innovative approach to solving the problem of continuous authentication in XR environments. We were recognized for the novelty of our technique, the user-centric design, and the seamless integration of TOTP, haptic feedback, and kinetic activity. The award was a testament to the hard work and creativity that went into designing a solution that enhances both security and user experience in immersive virtual spaces.

## Conclusion

By combining modern authentication techniques with haptic and motion-based interaction, we have demonstrated that secure authentication can coexist with the immersive nature of XR. The IEEE VR 3DUI Contest Award is a proud acknowledgment of the innovation and effort put into this project, which has the potential to shape the future of authentication in XR technologies.