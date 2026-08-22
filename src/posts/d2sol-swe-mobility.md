---
published: true
title: Government Mobile App
descriptionHead: Flutter apps serving hundreds of millions of government users
descriptionTail: " across multiple US states via a unified, mission-critical mobile codebase."
tags:
  - Flutter
  - Dart
  - AWS
  - Mobile
  - iOS
  - Android
  - Backend
date: 2025-06-01
organization: D2Sol
location: Research Triangle Park
role: SWE
---

## The Constraint That Started Everything

A large third-party enterprise system manages benefits programs for some governments. The vendor owns it and we cannot modify the codebase, the auth flow, or negotiate APIs on any reasonable timeline. Their citizen portal is desktop-first.

Hundreds of millions of citizens expect native mobile: push notifications, biometric login, millisecond response times.

Every decision below answers that gap. And because each forces the next, start at the first. This isn't one app for one state — it's a platform serving multiple US state governments from a single codebase, which adds a constraint: everything must be configurable per client without a new app release.

---

## OTA Config Keeps the Platform from Forking

State governments need different feature sets, endpoint URLs, and session policies. Shipping a new binary for each client change requires App Store review — weeks, not hours. And the vendor portal's URLs change on vendor timelines, not ours.

A Config Server (Lambda + S3) serves JSON config files scoped by `clientCode` and language. The app fetches `prelogin.json` before `runApp()` to initialize theme colors and feature flags, then `postlogin.json` after login. Session timeout thresholds, feature flags, endpoint URLs — all OTA-configurable by updating an S3 file, not shipping a binary.

Hardcoding per-client values in the binary was the alternative. That means a release per client per change — untenable at multi-state scale.

Tradeoff: app startup always costs a network round-trip before rendering. Config fetch failure falls back to defaults and the app still launches, but a corrupt config can silently degrade behavior rather than fail loudly.

Config fetch also requires an API token — before the user has logged in. That required a second auth layer the mobile story alone doesn't show.

---

## Two Auth Layers Before the User Sees Anything

There are actually two separate auth systems running before a user reaches the portal.

First, machine-to-machine: the app authenticates as a service via OAuth 2.0 client credentials through Cognito to get a JWT for the config API. No user credentials involved. This happens before `runApp()`.

Second, the credential bridge into the vendor portal: the portal has no auth API. The app handles login UX natively, then injects credentials into the vendor WebView — installing a temporary navigation delegate, navigating to the vendor login URL, injecting JS to fill and submit the form, and watching for the success URL pattern. Native reimplementation of the vendor's auth logic drifts with every vendor upgrade; negotiating a proper API takes months on a government contract.

Tradeoff: the bridge depends on the vendor's internal DOM staying stable. We verify manually on every portal update — there's no way to automate that without a contract the vendor doesn't offer.

But before the bridge could work, there needed to be a portal to bridge into.

---

## Wrap the Portal, Don't Rewrite It

Rewriting the portal natively means maintaining two implementations of every feature in lockstep with vendor upgrades, indefinitely. That cost compounds without limit.

Instead: a mobile shell hosting the vendor's portal inside it. New features land in mobile the day they deploy on the web. The vendor owns domain logic; we own the native layer.

Cost: lower performance ceiling than fully native, some per-OS handling required. These are bounded. Permanent dual implementation is not.

But hosting the portal in a mobile shell exposed the next hard constraint: iOS treats embedded browsers as OS processes — and closing one costs several seconds.

---

## The Browser That Could Never Close

The obvious approach — a browser instance per tab — tears down an OS process on every switch, producing a blank screen and several seconds of reload. One browser instance, never closed. Tab switches are page navigations on the same instance; the portal's session persists across tabs without bridging code.

This forced a logout ordering constraint: the server session must close before local state clears, or they diverge. The ordering is a code convention, not a type-safe contract. Inverting it doesn't produce an immediate error.

Tab switches still showed blank frames while pages re-rendered.

---

## Hiding the Seams

Screenshot each tab on leave, display it instantly on return while the browser reloads behind it. A loading spinner was tried first — it felt broken, not transitional. Screenshots sidestep the need for a vendor-side ready signal entirely.

Cache is empty at launch, so we pre-warm: silently cycle through every tab at startup, capture snapshots, return home. The hard part: each tab requires an active session established before each step. Pre-warming is disabled in certain auth modes entirely — cycling pages triggers server checks that can invalidate the login.

The vendor session model's behavior at auth boundaries is where things got uncomfortable — starting with login itself.

---

## A Workaround That Became Load-Bearing

The portal checks session validity immediately after login — before the session is fully committed. It reads an invalid state and bounces the user back to login milliseconds after success.

We chose a settle window: wait a fixed interval, recheck, retry up to a limit. A proper completion signal from the vendor is the correct fix, but that requires a contract negotiation nobody started. The workaround became load-bearing, and nobody wants to tighten the window.

The same root cause showed up in logout.

---

## Notifications Required a Full Pipeline

Native push notifications were the core promise of going mobile. The vendor portal can't send them.

A push notification Lambda enqueues to SQS and returns 200 immediately. A processor Lambda, triggered by SQS, stores the record in DynamoDB, looks up the user's device tokens, and calls Firebase FCM. Tokens are registered at login, deregistered at logout.

A synchronous Lambda would tie the caller to FCM's variable latency and exhaust concurrency under batch sends. EventBridge added orchestration overhead disproportionate to this problem. SQS absorbed the burst and returned the caller immediately.

Tradeoff: delivery is async — the caller gets a 200 before FCM confirms. A DLQ catches failures after 3 retries; a CloudWatch alarm fires when depth exceeds zero. Failures are visible, not silent.

---

## Two Logouts, One Browser

Hard logout: server session still active, must close server-side first. Soft logout: server already closed it, local cleanup comes first. Same surface, different sequences.

A unified path either skips the server call when needed, or makes it when it's guaranteed to fail. Two code paths, callers must know which. The wrong choice surfaces as confused state, not an immediate error.

---

## The Fragility Has One Source

The bridge fragility, the login workaround, the logout sequencing — all trace back to the same source: the vendor portal gives us no formal interface.

A small set of signals from the vendor would eliminate most of this. That conversation is harder to have than the code it would replace — it requires treating the vendor relationship as an engineering problem, not a procurement one.

---

## Stack

Flutter · Dart · AWS (Lambda, API Gateway, SQS, DynamoDB, S3, Cognito, CloudFormation) · Firebase (FCM, App Check) · OAuth 2.0 · Python 3.13 · iOS · Android
