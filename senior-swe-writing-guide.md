# Senior SWE Writing Guide

A distillation of how strong technical writers at the staff/principal level structure project write-ups and case studies — based on analysis of Brandur Leach, Figma Engineering, Squarespace Engineering, StaffEng stories, Sean Goedecke, Charity Majors, and others.

---

## The Core Principle

A senior-level write-up is a **decision narrative**, not a feature list. The reader should be able to follow *why* each choice was made, not just *what* was done. Every structural decision below serves that goal.

---

## Structure

### 1. One Central Story, Not Parallel Sections

The strongest pieces use a **narrative thread** — each section creates the conditions for the next. A reader who skips sections loses the plot.

Weak structure: eight independent sections, each self-contained, all at the same altitude.

Strong structure: a chain. The vendor constraint forced the WebView approach, which forced the singleton, which forced the snapshot cache, which required JS injection, which demanded a binary whitelist. Each decision is an answer to the problem the previous decision created.

**Test:** can a reader skip section 3 and still fully understand section 5? If yes, you have parallel sections, not a story.

### 2. The Opening Does Three Things

1. Establishes the **concrete problem** (not the category — the specific thing)
2. Stakes out **why it's hard** (what makes this non-trivial)
3. Signals **who it's for**

Do not open with "In this post, I will..." or with biography. Open with the problem as protagonist.

### 3. Constraints Before Solutions

List the constraints that shaped the decision space **before naming any solution**. This is what makes a decision look intelligent rather than arbitrary. A solution without visible constraints looks like the first thing that was tried.

Name the constraints that ruled options *out*, not just the ones that ruled the chosen option *in*.

### 4. Alternatives Considered Are Non-Negotiable

Name 2–4 rejected alternatives with brief rejection reasoning for every significant decision. This is the single clearest structural differentiator between junior and senior writing.

Not: "We chose SQS."
But: "A synchronous Lambda would exhaust concurrency on payment batch bursts and tie the caller to FCM's variable latency. EventBridge added orchestration overhead disproportionate to the problem. SQS absorbed the burst while returning 200 immediately."

### 5. End Sections With a Hand-Off, Not a Summary

Each section should close by naming the problem the *next* section solves. This is what pulls readers through instead of letting them browse.

Not: "This approach worked well for our use case."
But: "The snapshot cache worked. But pre-warming required navigating to authenticated routes — which meant we needed to understand exactly how the vendor SPA managed session state."

### 6. Dissolve Retrospective Content Into the Narrative

"What I'd do differently" as a named final section reads as an afterthought. Surface tensions and honest costs *throughout* — mid-story, at the moment they're relevant.

Close on a **permanent tension**, not a lesson. Lessons sound resolved. Permanent tensions are honest.

Not: "In hindsight, we should have established a postMessage contract with the vendor."
But: close the piece with "The correct investment — establishing a small, stable postMessage interface — would eliminate most of the fragility at once. That conversation is harder to have than the code it would replace. It requires treating the vendor relationship as an engineering problem, not just a procurement one."

### 7. Tradeoffs Are Mandatory and Specific

Every significant decision needs a named cost. Generic costs ("adds complexity") are worthless. Specific costs tell the reader what to watch for.

Not: "The tradeoff is added complexity."
But: "The ordering is enforced in code. There is no type-level guarantee that a new contributor won't invert it, and inverting it leaves a live authenticated session behind a logged-out UI."

---

## Scannability

### Headers as Insight Statements

Headers should make a complete point, not label a category.

Weak: "Authentication"
Strong: "Injecting Credentials into a Portal We Don't Own"

A reader who skims only headers should get the story.

### Bold Lead Sentences

Open each paragraph with the point, not the setup. A reader scanning in 3 seconds should extract the decision from the first line.

### No Trailing Summary Sections

If the headers do their job, a summary is redundant. End the piece when the last tension is named.

---

## Honest Failure Is the Credibility Engine

Authentic failure content — debugging dead-ends, timing hacks, decisions made under timeline pressure that became load-bearing — is more credible and more useful than polished success narratives. Strong writers don't editorialize about failure; they describe it plainly and note what the correct fix would have been.

The settle-window example: "This is a timing hack, not a fix. Each retry reloads the full SPA. The correct solution is the vendor SPA emitting a structured postMessage event on session establishment. We never established that contract. The workaround became load-bearing infrastructure."

That paragraph does more credibility work than three paragraphs of success metrics.

---

## Length

- Deep technical case studies: **2,500–5,000 words**
- Opinion / leadership pieces: **1,500–3,000 words**
- Portfolio write-ups: **~750 words (3-minute read)**

Portfolio write-ups are not blog posts. A hiring manager or senior engineer scanning a portfolio will not read 2,000 words — they'll skim for signal and move on. Three minutes is the target: enough to show the decision chain, the tradeoffs, and the honest costs. Not enough to explain every implementation detail.

**The 3-minute rule:** if the piece is longer than 750 words, cut implementation specifics first, then alternatives reasoning (compress to one sentence each), then setup. Never cut the decision, the tradeoff, or the hand-off to the next section — those are the piece.

---

## What Separates Junior from Senior Writing

| Junior | Senior |
|--------|--------|
| Lists what was built | Explains why each decision was made |
| One solution presented | 2–4 alternatives named and rejected |
| Tradeoffs mentioned generically | Tradeoffs named specifically, with observable consequences |
| "What I'd do differently" at the end | Honest costs surfaced throughout |
| Parallel sections | Narrative chain — each section sets up the next |
| Headers as category labels | Headers as insight statements |
| Closes on resolution | Closes on permanent tension |
