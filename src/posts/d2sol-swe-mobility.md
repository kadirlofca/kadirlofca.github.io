---
published: true
title: Government Mobile App
shortDescription: Flutter apps serving 300k+ government users
longDescription: Building mission-critical mobile government applications serving 300,000+ citizens across two US states using a unified Flutter codebase.
tags:
  - Flutter
  - Dart
  - AWS
  - Mobile
  - iOS
  - Android
  - Backend
date: 2025-06-01
organization: D2Sol Inc.
location: Research Triangle Park, NC
role: SWE
---

## Overview

At D2Sol, I lead engineering on mobile applications deployed for two US state government agencies. The core challenge: deliver secure, reliable, multi-tenant apps to a citizen base of 300,000+ while keeping the team lean and the codebase maintainable.

## Mobile Architecture

I architected a "Flutter Hosted Server Driven UI" system using a Model-ViewModel-View pattern that decouples presentation logic from business logic entirely. Tenant-specific UI configurations are pushed from the server, meaning a single binary serves multiple government clients with zero per-client rebuilds. This unified Flutter codebase achieves 99% code sharing across iOS, Android, and Web — cutting estimated development costs by 70%.

To hit 60fps on low-end government-issued hardware, I designed a reactive state management architecture that minimizes widget rebuilds by keeping derived state shallow and close to the leaf nodes.

## Security

Government apps demand hardened security at every layer:

- **Biometric Authentication** (FaceID/TouchID) with encrypted Keychain storage reduced average login time by 80% while protecting PII.
- **OAuth 2.0 with PKCE**, Certificate Pinning, and App Attestation prevent man-in-the-middle attacks and unauthorized client access.
- **AWS Cognito Resource Servers** enforce OAuth2 scope validation on all sensitive endpoints.
- A **Hybrid Web-Native bridge** enables zero-friction SSO sessions into legacy government portals.

## Backend & Infrastructure

I architected a serverless Notification Service on AWS Lambda + SQS + DynamoDB that delivers real-time system-wide alerts to 300,000+ devices with negligible latency. A custom "Hot-Update" Remote Configuration engine pushes dynamic UI/UX changes instantly, eliminating 90% of routine App Store update cycles.

All API contracts are defined first via OpenAPI/Swagger specifications, enforcing strict separation between mobile and backend teams.

## Quality & Process

- CI/CD pipeline with automated integration tests for critical flows (Login, Payments)
- Unit and Widget tests integrated into CI for component-level reliability
- Detailed technical documentation including MVVM architecture guides and onboarding materials
- Served as primary technical liaison for two state agency clients

## Stack

Flutter · Dart · AWS (Lambda, SQS, DynamoDB, Cognito) · OAuth 2.0 · OpenAPI · iOS · Android
