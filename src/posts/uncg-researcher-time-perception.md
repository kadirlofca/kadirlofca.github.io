---
published: true
title: Time Perception in VR
shortDescription: IEEE VR papers on time perception in VR
longDescription: Conducted human-subject VR experiments on time perception and virtual embodiment, co-authored two IEEE VR papers cited by 14+ studies, and built custom Unity tooling to automate trial data collection.
tags:
  - C#
  - Unity
  - VR
  - XR
  - Research
date: 2021-08-01
organization: UNCG
location: Greensboro, NC
role: Researcher
---

## Overview

From August 2021 to August 2023 I worked as a VR Software Engineer and Undergraduate Researcher at the University of North Carolina Greensboro. The lab studied human perception inside virtual environments — how people experience time, embody virtual avatars, and interact with physics simulations. I was responsible for building the software systems that made those experiments run reliably.

## Tracking Accuracy

Achieving research-grade data requires precision. I engineered a controlled physical environment to resolve IR tracking interference, reaching **<1mm tracking accuracy** for VR experiments. Any more error than that and the experimental data becomes unreliable.

For hand interaction, I integrated **Leap Motion** finger tracking and **HTC Vive Trackers** to enable hyper-realistic physical-virtual interaction with **<5ms latency**.

## Custom Unity Tooling

Manual data entry during trials is slow, error-prone, and scales poorly. I built a custom **C# Unity plugin** that automates high-frequency telemetry logging during user trials, eliminating 10+ hours/week of manual data entry. The plugin captured spatial, temporal, and behavioral data at high resolution and wrote it to structured output files ready for statistical analysis.

## Performance

The lab ran experiments on constrained hardware. I optimized rendering pipelines to maintain stable **90fps** by implementing occlusion culling and texture compression in Unity — keeping the experience smooth enough that frame drops didn't contaminate the experimental conditions.

## Human Subjects & Publications

I conducted trials with 20+ participants and analyzed results using R. The research validated hypotheses on human time perception and virtual embodiment, leading to two co-authored papers:

- **IEEE VR 2022** — presented in New Zealand
- **IEEE VR 2023** — presented in Shanghai

Both papers have been cited by 14+ subsequent studies.
