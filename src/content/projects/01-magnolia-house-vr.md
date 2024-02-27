---
name: "Magnolia House VR 🏠"
description: "A virtual reality tour of the Historic Magnolia House."
tech: "C#, Unity, Blender"
slug: "magnolia-house-vr"
isPublished: true
isSelected: true
---

An interior architecture student (Hannah), two professors, and I worked together for 7 months to create this virtual reality tour that immerses users in the 1950's Magnolia House.

![The solarium in the virtual Historic Magnolia House](../images/magnolia/04-magnolia-solarium.gif)

On January 11 2021, I sent an email to a professor, saying I was interested in working with him on this project. He asked me to create a traffic system in Unity as an assessment. I installed Unity for the first time and programmed a traffic system on a small level. The professor liked what I made and we started working together on the Magnolia House VR project. 

## Project Requirements
- 3D model of the house and immersive audio
- Navigate in virtual reality with teleportation
- Quit the application through a menu
- Run on Meta Quest 2

## What I Did
After meeting with the client and understanding the project, Hannah and I started working.
While Hannah was modeling the house, I was developing the virtual reality features.

### NavMesh and Teleportation
Virtual reality is great, but it comes with motion sickness. Motion sickness is the body reacting to the visual perception of movement not matching the sense of balance. To stay away from motion sickness, we try not to use continuous movement, instead we teleport the player around (this isn't the only solution but I'm keeping it simple). 

I developed teleportation controls that utilize a NavMesh system popular in game development. The idea is to use a 3D model to define where the user can teleport to. When the user pushes the controller stick forward, this model will become visible, and the user will teleport by pointing where they want to be and releasing the stick.

![The NavMesh model in the virtual Historic Magnolia House](../images/magnolia/02-magnolia-navmesh.gif)

Because there was only one level, I decided to hand model the NavMesh, this way I was able to customize it more than a generated one. I created a transparent blue material for it to separate it from the house.

### Fixed Horrible Performance
After I imported the house model and created shaders and lighting, there was a huge problem with the project - performance. The Oculus (Meta) Quest 2 was oscillating between 30 and 90 frames per second. This is not acceptable as it will create motion sickness on the user.

![Shader graph from the Magnolia House VR project](../images/magnolia/03-magnolia-shader.gif)

To increase the frame rate, I first analyzed what caused the drop in performance. I used Unity's performance profiler tool and quickly noticed that the number of triangles being rendered at once was astronomical. So I imported the model to Blender and removed an INSANE amount of triangles that the user would not see. The performance was better, but not by much.

After some research, I learned that Unity projects don't have culling enabled by default. I implemented occlusion and frustum culling, and the performance reached my target of 90 frames per second.

![Culling from the Magnolia House VR project](../images/magnolia/01-magnolia-culling.gif)

### Quit Button
I programmed a floating menu window that follows the user. This menu can be opened by pressing a button on the controller. The menu collides with the environment so that it's not intersecting with geometry and is visible. 

After opening the menu, the user can point the controller to the quit button and click to exit the application.

[multae requirit primi]

[multae requirit primi]: http://heu.io/
