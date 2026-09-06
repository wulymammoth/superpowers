---
name: using-superpowers
description: Use when selecting a Superpowers workflow for substantive design, debugging, implementation, review, or delivery tasks.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute a specific task, ignore this skill.
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
Use skills explicitly requested by the user or materially relevant to the actual task. Do not invoke workflows merely because of a keyword or a speculative chance of relevance.

IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.

This is not negotiable. You cannot rationalize your way out of this.
</EXTREMELY-IMPORTANT>

## The Rule

Read relevant or requested skills before following their workflow. A brief acknowledgement or read-only context check may establish which workflow applies. Skip workflow overhead for self-contained trivial requests.

**Before entering plan mode:** if you haven't already brainstormed, invoke the brainstorming skill first.

Then announce "Using [skill] to [purpose]" and follow the skill exactly. If it has a checklist, create a todo per item.

## Skill Priority

When multiple skills apply, process skills come first — they set the approach, then implementation skills (frontend-design, etc.) carry it out. Brainstorming and systematic-debugging are Superpowers' most common process skills, but the rule holds for any of them.

- "Let's build X" → superpowers:brainstorming first, then implementation skills.
- "Fix this bug" → superpowers:systematic-debugging first, then domain skills.

## Red Flags

These thoughts mean STOP—you're rationalizing:

| Thought | Reality |
|---------|---------|
| "This is just a simple question" | Use a skill only if requested or materially helpful. |
| "I need more context first" | A targeted context check may establish relevance. |
| "Let me explore the codebase first" | A bounded read-only check may establish context; use the relevant workflow before substantive work. |
| "I can check git/files quickly" | Reconcile live Git and task context when relevant; do not add unrelated workflows. |
| "Let me gather information first" | Use relevant research guidance; a context check can determine relevance. |
| "This doesn't need a formal skill" | Use it when explicitly requested or materially relevant. |
| "I remember this skill" | Skills evolve. Read current version. |
| "This doesn't count as a task" | Judge the actual scope; trivial self-contained requests need no workflow overhead. |
| "The skill is overkill" | Use proportionate guidance without skipping applicable requirements. |
| "I'll just do this one thing first" | Context checks are allowed; do not start substantive work before its applicable workflow. |
| "This feels productive" | Undisciplined action wastes time. Skills prevent this. |
| "I know what that means" | Knowing the concept ≠ using the skill. Invoke it. |

## Platform Adaptation

If your harness appears here, read its reference file for special instructions:

- Codex: `references/codex-tools.md`
- Pi: `references/pi-tools.md`
- Antigravity: `references/antigravity-tools.md`
- Hermes Agent: `references/hermes-tools.md`

## User Instructions

User instructions (CLAUDE.md, AGENTS.md, GEMINI.md, etc, direct requests) take precedence over skills, which in turn override default behavior. Apply the relevance rule above. Once a workflow applies, follow its required gates unless higher-priority instructions override them. Design Lock still requires its approved PNG, governing written spec, writing-plans path, and final human acceptance.
