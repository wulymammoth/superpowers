---
name: verification-before-completion
description: Use when reporting implementation complete, a bug fixed, or checks passing, and before an authorized commit or pull request.
---

# Verification Before Completion

Claims must match observed evidence for the code and environment being reported.

## Evidence and scope

1. Identify the smallest sufficient check for the claim and task risk. A focused
   suite supports a focused claim; a full-suite claim needs the full suite.
2. Run missing checks and inspect the completed output and exit status. Reuse
   observed results while relevant code, inputs, dependencies, and environment
   remain unchanged. A new message or unchanged checkpoint alone needs no rerun.
3. Rerun affected checks after changes, failures, or new uncertainty. If state
   cannot be established after resume, verify again rather than assume.
4. Fix failures caused by the requested change within the authorized workflow.
   Report unrelated failures or unavailable checks without claiming a pass.
5. Report what passed, what it proves, and material gaps. Confirm the requested
   outcome, not just test success. A disclosed gap does not satisfy a required
   acceptance check; that outcome remains incomplete. Repository base/mergeability
   checks still apply.

A linter does not prove a build, a passing mock does not prove installed runtime,
and an agent's success report does not replace inspecting its changes and evidence.
For a bug fix, exercise the original symptom. Demonstrate the regression fails
without the fix and passes with it when practical; preserve unrelated work while
making any temporary reversal. State explicitly when that proof is unavailable.

Existing authorization covers continuing through appropriate local verification;
it does not authorize deployment, shared-runtime use, or other external actions.

## Visual Completion Claims

When an approved Design Lock governs the work, applicable observed command
output is necessary but not sufficient. Evidence reuse follows the rules above.
Before requesting acceptance:

1. Confirm the human-approved governing spec and exact approved PNG are present.
2. Confirm every changed path is inside the plan's visual file allowlist.
3. Capture the final runtime screenshot under the locked conditions.
4. Present that screenshot beside the approved PNG and present the diff limited
   to the visual file allowlist.

You must not claim the implementation is visually complete until the human has
explicitly accepted the final screenshot and diff. Until then, report the work
as awaiting visual acceptance even when every automated check passes. Any agent
success wording that bypasses this checkpoint is an unattended visual completion
claim and violates the gate.
