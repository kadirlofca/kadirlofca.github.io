---
published: true
title: Quick Character 🏃
description: A flexible character movement state framework that helps game
  developers quickly create unique and robust movement mechanics.
tags:
  - C#
  - Unity
  - Documentation
  - Dev Tool
date: 2025-03-10
---
Quick Character is a flexible and easy-to-use character movement framework for Unity. It's designed to simplify the implementation of high-quality character movement mechanics, allowing you to focus more on the game design and less on the complex physics and movement logic.

### The Problem

When developing games, I often found myself spending too much time creating and refining character movement systems. I needed a faster way to implement fluid and responsive movement without starting from scratch every time.

### The Solution

Quick Character is a state machine framework that handles character movement in a modular way. I designed it to provide Unity developers with a set of simple, plug-and-play components to build and control characters' movements quickly.

### Features

1\. **Framework**: At its core, Quick Character provides a base class called `QuickCharacter.cs` that simplifies character movement by controlling transitions between different movement modes (e.g., ground, air, and wall movement).

2\. **Movement States**: The movement is organized into a state machine, allowing for easy addition of new movement behaviors, such as double jumps, wall climbing, and other advanced features.

3\. **Physics Control**: The system uses Unity's `Rigidbody` and `CapsuleComponent` to manage character physics, giving you full control over forces applied during movement.

4\. **Movement Modes**: By default, Quick Character supports `ground`, `air`, and `wall` movement modes. You can easily extend this by adding more movement types to the `MoveMedium` enum in `QuickLibrary.cs`.

### File Structure

\- **Core**: Contains the essential scripts (`QuickCharacter.cs` and `QuickLibrary.cs`) responsible for the core functionality of the movement system.

\- **Examples**: A folder showcasing examples of different character movement setups, including basic and advanced movement with prefabs like `AdvancedCharacter` and `SimpleCharacter`.

\- **Player Input**: The system works with Unity’s new input system, enabling easy player input integration.

### Conclusions

Quick Character was built with flexibility and ease of use in mind. I wanted to make it as simple as possible for developers to integrate high-quality character movement into their projects. By organizing everything into clear folders, regions, and functions, I’ve ensured that the system is both easy to understand and extend.

If you’re looking for a powerful yet simple character movement framework for Unity, I hope Quick Character helps you get your projects moving!