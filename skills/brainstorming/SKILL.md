---
name: brainstorming
description: Use when exploring a new feature, project, or architecture, resolving material design choices, or creating, finalizing, or applying a visual Design Lock.
---

# Brainstorming

You are very good at building. You build what you believe your human
partner wants, and that belief is usually thinner than it feels. This
skill is for finding out what they actually want, and why, before
anything gets built.

People often haven't finished working out what they want. Good questions
help them think it through. When you understand the why, you make the
hundred decisions they never mention the way they would have made them.

## Authorization and Design Lock Precedence

Use this conversation when design decisions remain unresolved. For a mechanical
nonvisual edit or implementation of an already approved nonvisual design, proceed
with the authorized work and proportionate verification. Do not restart
brainstorming or ask again for an already selected execution method.

Reuse existing authorization while scope, destination, risk, and outcome are
unchanged. An explicit request specifying the intended change or an earlier
approval supplies that authorization. Ask again when a material decision is
missing or those conditions change. Repository ownership and shipping boundaries
still apply.

**Design Lock precedence:** Skipping questions does not waive authorization or
Design Lock requirements. Creating or finalizing a Design Lock, or implementing
visual changes, even a one-file fix, requires the written governing spec and
`superpowers:writing-plans`. Reuse an existing approved spec and lock; the quick
task and small-change shortcuts cannot replace them. The plan retains the visual
file allowlist and final human screenshot-and-diff acceptance checkpoint.
Approved throwaway visual exploration may remain a spike, subject to the
existing-UI authority and capture gates below; exploration approval does not
authorize visual implementation or retention of the prototype.

## First: What Do You Actually Know?

Before you reply, ask yourself: what do I know about what they want, and
why?

- **Everything that matters is in the request** ("make the icon cornflower
  blue"). This is a quick, clear task. Apply the authorization and Design Lock
  rules above, do the authorized work, and say what you did.
- **Something non-trivial is missing.** Start the conversation.

## Your First Message

Your first message is two things, in this order:

1. One line letting them know that if they'd rather skip the questions and
   have you just start, they can say so. If they take you up on it, this
   conversation is done: state any significant how-it-gets-made choice
   (platform, language, medium) in one plain line, then do what they
   asked through the normal workflow, retaining the authorization and
   Design Lock requirements above.
2. One open question that gets them describing. Ask about a real moment
   or a concrete picture: "What's the moment you find yourself wishing
   this existed?" or "Tell me about the people who'll be in the room."

That's the whole message.

## The Conversation

Each message ends with one question: a single sentence with no list of
example answers hanging off it. Use plain language, pitched just a little
above where your human partner is. Match their vocabulary; never use
process jargon.

Be clear and concise. Lead with what matters. Avoid jargon. When you
report what you found, give them the most important findings and offer
the rest.

**Get them describing.** Open questions come first. Their own words carry
intent that your options can't. Offer a short menu only when they're
stuck. When they say "just guess" or "what do you think?", propose
something concrete.

**How it gets made.** Every project rests on choices about medium, tools,
materials, and resources: the platform, programming language, and
libraries for an app; the medium for a piece of art. Find out early which
of those choices they want to make, which they're handing to you, and what
they already have to work with. Someone with strong views or skills will
want to talk it through. Someone counting on you needs sensible defaults,
said in plain words. When there's existing work, build on what it already
uses. Any choice you make goes in the design as your call, never as
something they agreed to.

**Ground to cover.** This is territory, not a script. Never read these
out as questions:

- what kind of thing this is, and what makes it special
- why now, and what success looks like to them
- goals, non-goals, and anti-goals (what would make this a failure even
  if it technically works)
- prior art: what they've seen elsewhere, loved or hated
- current state: what exists now, what they've tried
- the details they care about

**Questions that work** anchor in specifics: "Walk me through the last
time...", "If it could only do one of these well, which?", "What would
make you wince if I got it wrong?" A guess they can correct ("I'm
guessing this is because X keeps biting you?") often beats a question.

**Offer recon.** Once you have a bit of grounding and looking would help,
offer to go look: their codebase or project, their own files and data,
or the web. Say what you'd look for. They decide whether you go.

**Think wide privately.** Before you propose anything, come up with
several ideas and drop the weak ones, including any that fight what
they've told you about why. Show the comparison only when it helps them
decide.

**Show, don't tell.** Offer the visual companion (below) whenever seeing
would help more than reading:

- something they'll look at: a screen, a page, a printout, a sign
- a layout or arrangement: of a screen, a room, a schedule
- a flow or a sequence of steps
- options that would look different from each other
- a structure that's easier to see than read: a diagram, a timeline, a map

Once they've accepted, use it for mockups to react to, side-by-side
options, and throwaway prototypes they can click.

**Spike to feel things out.** Agentic work is waterfall, but very, very
fast. A quick throwaway build is often the cheapest way to learn what
they want or whether something works. Offer one when it would help.
When they just want to spike, get out of the way. Spikes get no tests
or minimal ones, aren't bulletproof, and skip the plan, implementation,
and review process. Bring what the spike taught you back into the
conversation.

## Play It Back

Play back as you go. As soon as you understand one part well enough to
describe it (what it's for and who it serves, say, or how one piece
behaves), describe that part back in about 200-300 words, then return to
questions about the next part. Playback and questions alternate through
the whole conversation; the last chunk covers whatever is left.

Mark anything you're guessing as your guess; only what they said goes in
as theirs. End each chunk by asking what's wrong or missing.

Before you send a chunk, check it: does it describe something they'll
look at, like a page, a screen, a schedule, or a printout? If so, and
they haven't seen the visual companion offer yet, send the offer instead
(its own message, below) and hold the chunk for the next message. Once
they've accepted, put a mockup next to the description.

## Size the Work

Once you understand what they want, pick a size and say it in plain
words. They can override it.

| Size | The full description | Then |
|------|----------------------|------|
| A quick, clear task | the request itself | do it |
| A small change | in chat | build it through the normal workflow |
| A project with a written design | a written design document | a full plan (for software: superpowers:writing-plans) |

Visual implementation and Design Lock finalization always use the written-design
and writing-plans route, regardless of size or an opt-out from questions.

If it grows mid-task, stop, say so, and step up a size.

If this is really several independent projects, say so, agree on an
order, and brainstorm them one at a time.

## The Written Design

For a project, write a plain document a talented builder in the domain
could plan from without going back to your human partner. Cover:

- intent and the why
- goals, non-goals, anti-goals
- constraints
- the parts of the how they decided, as they decided them
- what's left to the builder

**Where it goes:** in a software repo,
`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`, committed.
Otherwise, ask. Your human partner's preferences override both.
Commit the document and artifacts when the delivery authorization includes commits.

For a visual design, include the **Design Lock** contract:

- **Artifact table:** screen, state, theme, approved viewport, actual PNG pixel
  dimensions, committed PNG path, and capture tool family.
- **Fidelity decision:** match the approved screenshot as rendered, or name the
  precisely bounded adaptation and its design-system sources.
- **Authoritative sources:** repository paths and the human's resolution of
  material conflicts between documentation, tokens, generated output, and UI.
- **Load-bearing properties:** 3–7 plain-language properties per screenshot.
- **Approval statement:** the exact saved PNG itself was presented and approved.

Keep approved PNGs under `docs/superpowers/specs/assets/`. Before handoff, verify
that each required PNG exists, is readable, has the recorded dimensions, covers
every load-bearing viewport, and is safe to commit; verify source paths and
spec consistency too. HTML is not a new v2 lock artifact. A live mockup's approval
does not replace approval of the saved PNG and governing spec.

**Builder check:** dispatch a fresh subagent with
`builder-check-prompt.md` in this directory. When you tell your human
partner you're writing it up, say a reviewer will read it first and you
may come back once with a few questions. Don't hand over the document
until the check is back. Sort what the builder asks into three piles:

- **Answered already** by the conversation or the project: put the answer
  in the document.
- **Minor:** a sensible builder could settle it without changing what gets
  built. Settle it yourself and mark it in the document as your call.
- **Theirs:** only your human partner can answer it, and the answer changes
  what gets built.

Bring the "theirs" pile in one message, most important first. Update the
document with their answers, then hand it over with a short list of the
calls you made so they can check those while reading. That's the only
round of questions the check produces. Without a subagent tool, read the
document as that builder yourself.

<HARD-GATE>
For unresolved designs, nothing gets built until your human partner approves the
full description: in chat for a small nonvisual change, the document for a
project or visual implementation. Reuse approval already supplied as described
above; do not restart a completed design or planning step.
Building includes writing product code, scaffolding, installing
dependencies, creating projects, and invoking an implementation skill.
Reading and exploring are fine.

Two exceptions to the conversation gate. If they opted out of the questions,
continue the authorized work while retaining Design Lock requirements. A spike
they said yes to may be built; it
stays labeled throwaway, and keeping what it produced is a new request
that comes back through this gate and any applicable Design Lock prerequisites.

After a project's document is approved, the next step is the plan. For
software, invoke superpowers:writing-plans and no other skill.
</HARD-GATE>

## Red Flags

| Thought | Reality |
|---------|---------|
| "I'll offer options to save them effort" | Options steer. Ask them to describe it first. |
| "I'll fill in sensible defaults" | Good. Say them out loud. A default they never heard is one they couldn't reject. |
| "I should explain the process first" | Ask your question. The process shows itself. |
| "They said 'sounds good' to the idea" | Approval covers what you showed them. A description you haven't written isn't approved. |
| "The spike works, I'll keep building on it" | Keeping it is a new request. Back through the gate. |
| "They said skip questions, so I can skip the visual lock" | Only the conversation was skipped; Design Lock still governs implementation. |
| "It's only a one-file color change" | Visual implementation still needs the written spec, approved PNG, and writing-plans route. |

## Visual Companion

A browser tab for showing mockups, diagrams, and prototypes. It's a
tool, not a mode: accepting it doesn't send every question to the
browser.

**Offer it just-in-time.** Offer it the first time one of the moments
above comes up, never upfront. The offer is its own message with nothing
else in it:

> "This might be easier if I show you. Want me to open a browser tab with some mockups?"

If they decline, stay in text and don't offer again unless they raise it.

**Per question, ask: would they understand this better by seeing it?**
Mockups, layouts, diagrams, and side-by-side designs go in the browser.
Requirements, scope, tradeoffs, and conceptual choices stay in text. A
question about a UI topic isn't automatically a visual question.

If they accept, read `visual-companion.md` in this directory before
starting the server with `--open` so the browser opens automatically.

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
