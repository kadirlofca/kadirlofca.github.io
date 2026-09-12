---
published: true
title: Statistics Tracker for Competitive Game
descriptionHead: 300+ weekly active users within 3 months
descriptionTail: " — open-source stats platform for the tactical shooter Spectre Divide."
tags:
  - TypeScript
  - React
  - Next.js
  - PostgreSQL
  - Redis
  - Backend
  - Frontend
date: 2024-09-01
endDate: 2025-03-01
organization: Santai.gg
location: Remote
role: SWE
---

[Santai.GG](https://santai.gg) was the primary community statistics platform for Spectre Divide — a Shroud-backed tactical shooter with $60M in development funding that launched in September 2024 and shut down in April 2025. We built leaderboards, player stat profiles, sponsor analytics, and tournament tracking for a game that briefly hit 30,000 concurrent players on Steam.

I founded the project, led frontend development, and drove the product roadmap from launch through the game's end-of-life.

---

## The Data Problem Nobody Solved First

Spectre Divide had no public stats API. The only way to get match data was to be inside the game's session layer — so we built a service called Pulsefinder that maintained a pool of game accounts with persistent connections to the game servers. It handled friend requests, lobby invites, and real-time game state, and exposed an internal REST API that the rest of the stack consumed. The public-facing API layer (Smokeshift) sat in front of that.

This architecture was built and owned by my collaborator Brandon. I consumed it from the frontend and shaped what data the product actually surfaced to players.

---

## The Frontend Problem Was a Type Problem

The frontend had accumulated implicit `any` at the API boundary — response shapes from Smokeshift were untyped and the assumptions propagated inward. A field rename or shape change on the backend silently broke the client at runtime. Code review couldn't catch an entire class of bugs mechanically.

I enforced strict TypeScript from the API boundary inward: typed all Smokeshift responses, introduced shared model types across the `adrenalink` frontend codebase, and eliminated the `any` escape hatches. This made regressions visible at compile time and accelerated feature iteration — new pages could be built against known types rather than runtime exploration.

Later, the standalone `adrenalink` frontend was folded into a Turborepo monorepo with shared `packages/database` models and a `packages/ui` component library. The type discipline established early made that migration straightforward.

---

## What Drove Growth

**300+ weekly active users within 3 months** of launch. The features that moved that number weren't technically interesting — they were the ones players asked for in Discord: leaderboard filtering by rank tier and region, per-player historical stat breakdowns, and sponsor analytics (pick rates, win rates, K/D/A by sponsor kit across all tracked players).

Feature prioritization was player-feedback-driven, not assumption-driven. The platform was prominent enough that the official `@SpectreDivide` account tweeted about using it.

---

## Context

The game shut down on April 17, 2025, one week after the studio announced it was closing. Last commits to the repo are dated March 5, 2025 — one week before the announcement. The platform went offline with the game.

---

**Stack:** TypeScript · Next.js 15 · React 19 · ElysiaJS · Bun · Supabase (PostgreSQL) · Upstash Redis · Turborepo · Railway
