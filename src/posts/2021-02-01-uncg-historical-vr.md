---
published: true
title: Historical VR Environment at UNCG
description: Built a historically accurate digital replica of a real-world building in Unity, achieving stable 90fps on consumer hardware through aggressive optimization.
tags:
  - C#
  - Unity
  - VR
  - 3D
date: 2021-02-01
organization: UNC Greensboro
location: Greensboro, NC
role: VR Engineer
---

## Overview

From February to August 2021, I collaborated with subject matter experts at UNCG to build a historically accurate digital replica of a real-world building in Unity. The deliverable was a walkable VR environment that researchers and students could explore — accurate enough to serve as a scholarly reference.

## Collaboration & Specification

Three subject matter experts provided architectural and historical requirements. I translated those requirements into technical specifications — breaking down spatial accuracy, material fidelity, and interaction model into tasks that could be executed in Unity. Keeping the gap between what the historians described and what ended up in the engine tight required regular review cycles and precise documentation.

## Optimization

Consumer VR hardware in 2021 had strict performance budgets. Dropping below 90fps in VR causes discomfort and breaks immersion. I hit stable 90fps through:

- Aggressive **occlusion culling** to skip rendering geometry the user couldn't see
- Reducing asset poly-counts by 30% in collaboration with the 3D modelers
- Efficient asset integration workflows that cut import errors by 90%

## Audio & Lighting

Beyond geometry, I engineered 3D spatial audio systems and realistic lighting pipelines using C# scripts. Spatial audio was crucial for making a static environment feel inhabited and navigable, especially in VR where audio positioning is a primary spatial cue.
