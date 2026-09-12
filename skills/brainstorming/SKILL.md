---
name: brainstorming
description: Use when exploring a new feature or architecture, resolving material design choices, or creating, finalizing, or applying a visual Design Lock.
---

# Brainstorming Ideas Into Designs

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

Use this workflow when design decisions remain unresolved. For a mechanical
nonvisual edit or implementation of an already approved nonvisual design, proceed with
the authorized work and proportionate verification. Do not restart brainstorming.
For approved visual work, reuse the design through the Design Lock route below.

## Authorization

Before implementing an unresolved design, present the proposed behavior and
obtain your human partner's approval. An explicit request that already specifies
the intended change, or approval earlier in the conversation, supplies that
authorization. Reuse it while scope, destination, risk, and outcome are unchanged.
Ask again when a material decision is missing or those conditions change.
Repository ownership and shipping boundaries still apply. Approval to implement
does not replace the final human acceptance required by a visual Design Lock.

## Three Paths

**Design Lock routing:** Creating or finalizing a Design Lock, or implementing
visual changes, takes the architectural path below, even for a one-file fix.
Use the written governing spec and `superpowers:writing-plans`; an existing
approved spec may be reused. The plan must retain the visual file allowlist
and final human screenshot-and-diff acceptance checkpoint. The bounded path's
no-document shortcut does not apply to this work. Throwaway visual exploration
may remain a spike, subject to the existing-UI authority and capture gates below;
exploration approval does not authorize visual implementation.

Choose the path from the actual work:

- **Spike:** Investigate a feasibility question and report evidence and limits.
  State a short probe plan and proceed with authorized read-only or disposable
  local work. Obtain approval for actions outside that scope. Keeping prototype
  code as a product change requires implementation authorization.
- **Bounded:** For unresolved behavior in an existing flow, inspect the relevant
  code, ask only material questions, and present a short design with verification.
  Obtain approval if the proposed change is not already authorized, then implement.
  Nonvisual bounded work does not need a separate spec or plan document.
- **Architectural:** For a new project, subsystem, or material interface change,
  compare useful approaches, settle the design with your human partner, and write
  the governing spec. Review it for gaps, obtain approval of unresolved decisions,
  then use `superpowers:writing-plans`. Reuse an already approved governing spec.

Hidden complexity warrants reassessing the plan. Pause dependent work when it
introduces a material unapproved decision; continue independent authorized work.

## Completion

Carry the selected path through its outcome: an evidence-backed answer for a
spike, verified implementation for approved bounded work, or an approved spec
and implementation plan for architectural design. When implementation is already
authorized, continue into its execution workflow without another approval.
Continue through failures
caused by the change within the authorized workflow. Report a concrete blocker
or remaining approval boundary when completion is unavailable.

## The Process

The subsections below serve the bounded and architectural paths (a
spike ends with an evidence-backed recommendation). Sections from
**Exploring approaches** onward are architectural-path depth — for
bounded work, context plus a few questions plus a short in-chat design
is the whole process.

**Understanding the idea:**

- Check out the current project state first (files, docs, recent commits)
- Before asking detailed questions, assess scope: if the request describes multiple independent subsystems (e.g., "build a platform with chat, file storage, billing, and analytics"), flag this immediately. Don't spend questions refining details of a project that needs to be decomposed first.
- If the project is too large for a single spec, help the user decompose into sub-projects: what are the independent pieces, how do they relate, what order should they be built? Then brainstorm the first sub-project through the normal design flow. Each sub-project gets its own spec → plan → implementation cycle.
- Ask questions when the answer materially changes the design
- Prefer multiple choice questions when possible, but open-ended is fine too
- Focus on understanding: purpose, constraints, success criteria

**Exploring approaches:**

- Propose 2-3 different approaches with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why
- YAGNI ruthlessly - remove unnecessary features from every approach and design

**Presenting the design:**

- Once you believe you understand what you're building, present the design
- Scale each section to its complexity: a few sentences if straightforward, up to 200-300 words if nuanced
- Ask for decisions on unresolved trade-offs; reuse approvals already given
- Cover: architecture, components, data flow, error handling, testing
- Be ready to go back and clarify if something doesn't make sense

**Design for isolation and clarity:**

- Break the system into smaller units that each have one clear purpose, communicate through well-defined interfaces, and can be understood and tested independently
- For each unit, you should be able to answer: what does it do, how do you use it, and what does it depend on?
- Can someone understand what a unit does without reading its internals? Can you change the internals without breaking consumers? If not, the boundaries need work.
- Smaller, well-bounded units are also easier for you to work with - you reason better about code you can hold in context at once, and your edits are more reliable when files are focused. When a file grows large, that's often a signal that it's doing too much.

**Working in existing codebases:**

- Explore the current structure before proposing changes. Follow existing patterns.
- Where existing code has problems that affect the work (e.g., a file that's grown too large, unclear boundaries, tangled responsibilities), include targeted improvements as part of the design - the way a good developer improves code they're working in.
- Don't propose unrelated refactoring. Stay focused on what serves the current goal.

## After the Design (architectural path)

**Documentation:**

- Write the validated design (spec) to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
  - (User preferences for spec location override this default)
- If the visual companion was used and designs were locked, include a **Design Lock** section in the spec:
  - **Artifact table** — screen, state, theme, approved viewport, actual PNG pixel dimensions, committed PNG path, and capture tool family
  - **Fidelity decision** — "match the approved screenshot as rendered" or a precisely bounded adaptation, naming the actual design-system sources
  - **Authoritative sources** — repository paths plus the resolution of material conflicts between documentation, source tokens, generated output, and implementation
  - **Load-bearing properties** — 3–7 plain-language bullets per screenshot naming what must survive implementation
  - **Approval statement** — confirmation that the saved PNG itself was presented and approved
- Use elements-of-style:writing-clearly-and-concisely skill if available
- Include approved PNG artifacts under `docs/superpowers/specs/assets/`; commit
  the design and artifacts when the delivery authorization includes commits.

**Spec Self-Review:**
After writing the spec document, look at it with fresh eyes:

1. **Placeholder scan:** Any "TBD", "TODO", incomplete sections, or vague requirements? Fix them.
2. **Internal consistency:** Do any sections contradict each other? Does the architecture match the feature descriptions?
3. **Scope check:** Is this focused enough for a single implementation plan, or does it need decomposition?
4. **Ambiguity check:** Could any requirement be interpreted two different ways? If so, pick one and make it explicit.
5. **Design lock check:** If the spec has a Design Lock section, does every required PNG exist and open, do recorded image dimensions match, is every load-bearing viewport represented, are source paths valid, is the artifact safe to commit, and was the saved PNG itself approved? New locks must not cite HTML visual artifacts.

Fix any issues inline. No need to re-review — just fix and move on.

**User Review Gate:**
Present the written spec for approval when its decisions have not already been
approved. If your human partner requests changes, revise and check it again.
An existing approved spec need not be approved again unless its scope or material
decisions change. A newly finalized visual Design Lock still requires approval
of the saved PNG itself and its governing spec.

**Implementation:**

- Invoke the writing-plans skill to create a detailed implementation plan
- Do NOT invoke any other skill. writing-plans is the next step.

## Visual Companion

A browser-based companion for showing mockups, diagrams, and visual options during brainstorming. Available as a tool — not a mode. Accepting the companion means it's available for questions that benefit from visual treatment; it does NOT mean every question goes through the browser.

**Offering the companion (just-in-time):** Do NOT offer it upfront. Wait until a question would genuinely be clearer shown than told — a real mockup / layout / diagram question, not merely a UI *topic*. The first time that happens, offer it then, as its own message:
> "This next part might be easier if I show you — I can put together mockups, diagrams, and comparisons in a browser tab as we go. It's still new and can be token-intensive. Want me to? I'll open it for you."

**This offer MUST be its own message.** Only the offer — no clarifying question, summary, or other content. Wait for the user's response. If they accept, start the server with `--open` so their browser opens to the first screen automatically. If they decline, continue text-only and don't offer again unless they raise it.

**Per-question decision:** Even after the user accepts, decide FOR EACH QUESTION whether to use the browser or the terminal. The test: **would the user understand this better by seeing it than reading it?**

- **Use the browser** for content that IS visual — mockups, wireframes, layout comparisons, architecture diagrams, side-by-side visual designs
- **Use the terminal** for content that is text — requirements questions, conceptual choices, tradeoff lists, A/B/C/D text options, scope decisions

A question about a UI topic is not automatically a visual question. "What does personality mean in this context?" is a conceptual question — use the terminal. "Which wizard layout works better?" is a visual question — use the browser.

If they agree to the companion, read the detailed guide before proceeding:
`skills/brainstorming/visual-companion.md`

**Existing-UI authority hard gate:** Before generating, pushing, showing, or
describing a mockup as ready for a project with an existing UI, follow the
detailed guide's existing-design-system discovery contract. If human-authored
guidance, source tokens or generators, generated output, component or theme
surfaces, or the live implementation materially disagree, STOP: describe the
conflict and ask your human partner which source governs. Do not choose for them
because a source is labeled `canonical`, `source of truth`, `generated`, or
`stale`, or because it appears newer or earlier in the inspection order. No
visual output or readiness claim occurs until your human partner resolves the
conflict.

**Design Lock capture hard gate:** A selected or rendered HTML mockup is not a
completed Design Lock. Completing the lock requires equivalent screenshot
capture and rendering validation under the detailed guide. If either is
unavailable, STOP: the lock remains incomplete. Present exactly two choices and
ask your human partner to choose: enable equivalent screenshot capture and
validation and complete the lock, or continue exploration and planning without
visual implementation. Do not choose for them, manufacture a PNG, use HTML as
the lock artifact, describe screenshots as optional, or offer another fallback.

**Supervised visual implementation hard gate:** Visual implementation must not
begin until the exact approved PNG and human-approved governing spec are
available in the repository. Permission to explore or plan without a completed
Design Lock never authorizes visual implementation. The implementation plan must
also name the complete visual-file scope and retain the final human
screenshot-and-diff acceptance checkpoint described in
`superpowers:writing-plans`.
