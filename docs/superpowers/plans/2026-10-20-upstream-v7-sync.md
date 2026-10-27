# Upstream v7 Synchronization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Integrate stable upstream through `b739a8af570e10a95898f2bdf6cec97467fa6c12` while preserving this fork's Design Lock and authorization behavior.

**Architecture:** Merge upstream history into the maintained startup checkout. Adapt the v7 brainstorming rewrite to the fork's existing semantic requirements; preserve unrelated customizations. Validate locally before requesting publication and installed-plugin refresh.

**Tech Stack:** Git, Markdown skills, Node tests, shell fixtures, Python Hermes tests.

**Spec:** `.Codex-context.md` and `docs/superpowers/specs/2026-08-07-visual-design-lock-v2-design.md` govern preserved behavior; upstream's `docs/superpowers/specs/2026-10-05-brainstorming-rebuild-design.md` governs the new workflow subject to those fork requirements.

## Global Constraints

- Startup root: `/Users/wulymammoth/Desktop/lab/superpowers`; branch `main`; initial HEAD and origin/main `a830ef7ac9a3aa3afc708f12778d2cfeababc6ba`.
- Synchronize stable `upstream/main`; preserve the initial fork HEAD as an ancestor.
- Visual implementation requires approved PNGs, an approved governing written spec, writing-plans, an exhaustive visual file allowlist, and final human screenshot-and-diff acceptance.
- Skipping questions, selecting a small task, or approving a throwaway spike cannot waive Design Lock prerequisites or authorize keeping a prototype.
- Reuse authorization for unchanged scope, destination, risk, and outcome. Preserve proportionate testing and evidence reuse.
- Implement only in the startup checkout. Leave other worktrees, branches, stashes, and installed plugin caches alone during local integration.
- No upstream PR. Push, plugin refresh, full live Quorum runs, and paid/provider actions await separate explicit authorization.

## Review Focus

1. A request to skip questions must not authorize visual implementation without a lock.
2. A one-file visual change must still use the written-spec and writing-plans route.
3. An approved spike must not become retained product code implicitly.
4. An approved nonvisual implementation must proceed without repeated design approval.
5. An autonomous executor must not expand the visual allowlist or replace final human acceptance.

## Task 1: Establish baseline and integrate

**Files:** upstream's 61-file change set; primary compatibility edit in `skills/brainstorming/SKILL.md`; preserve fork edits in `skills/brainstorming/visual-companion.md`, `skills/writing-plans/SKILL.md`, and both execution skills.

**Interfaces:** consumes the two named Git tips; produces a working-tree merge retaining both histories and the fork contract.

- [x] Read both governing designs and applicable execution, skill-testing, and verification instructions in full.
- [x] Reconcile root, branch, HEAD, clean state, and remote tips before mutation. Stop for unexpected changes.
- [x] Run `node --test tests/design-lock-supervised-contract.test.js` as the existing baseline.
- [x] Use fresh read-only review/pressure sessions to exercise the five Review Focus scenarios against upstream v7 with the fork requirements. Record observed choices and limitations; these are not full CLI integration evals.
- [x] Start `git merge --no-commit --no-ff upstream/main`; inspect every conflict and every overlapping customized file.
- [x] Add targeted contract assertions for v7 shortcut precedence before changing skill text; observe meaningful failure, then implement the compatibility rules and rerun.
- [x] Preserve v7 intent discovery, playback, work sizing, and builder check while explicitly retaining fork authorization and Design Lock precedence.

## Task 2: Verify and prepare the local merge checkpoint

**Files:** `tests/design-lock-supervised-contract.test.js`, affected upstream tests, `.Codex-context.md`, `notes/main--2026-10-20.md`.

**Interfaces:** consumes the reconciled merge; produces verification receipts, reviewed diff, and a local merge commit if all required checks pass.

- [x] Run Design Lock tests and Visual Companion tests (`npm test` in `tests/brainstorm-server`).
- [x] Run affected hook, SDD workspace, native executor, Codex sync/marketplace, version-bump, Antigravity manifest/logo, and Hermes fixtures using their documented wrappers and available dependencies. Inspect scripts before running; report unavailable platform checks explicitly.
- [x] Review changed packaging/environment contracts and run the applicable Codex packaging fixture, shell syntax/lint, and `git diff --check`.
- [x] Repeat the same five pressure scenarios with the integrated skills in fresh sessions; report before/after evidence without equating static assertions or instruction simulations with live CLI evals.
- [x] Obtain a fresh read-only review of the quiescent complete diff; resolve findings and rerun only affected verification.
- [x] Update durable compatibility context only for new integration decisions; record exact checks and proof gaps in the milestone note.
- [ ] Refresh origin/main and upstream/main once before completion. If either changed, reconcile before committing; prove both approved tips are retained.
- [ ] Commit the verified local merge and prove ancestry and clean state. Run any committed-HEAD packaging check required by its script.
- [ ] Present the resulting diff and evidence, then request one approval for pushing the exact commit to origin/main and refreshing/verifying the installed plugin. Existing sessions require restart to load refreshed skills.

## Approval and completion boundary

Proposed execution is native implementation in this session with read-only pressure/review workers. Local merge and verification require plan confirmation because the v7 rewrite changes workflow behavior. This plan does not authorize full live Quorum/provider execution. Local readiness requires explicitly reported verification coverage and limitations; do not claim upstream-equivalent behavioral evaluation without running it.

## Recovery checkpoint (2026-10-26)

- The original integration and before/after pressure work were recovered from
  the interrupted session; their unchanged evidence is reused.
- Visual Companion's host run and Hermes completed successfully after the last
  recorded tool response. See `notes/main--2026-10-26.md` for scoped results.
- The repository shell-lint wrapper passes. The one upstream trailing space was
  removed. Version and render-graphs fixtures pass.
- The packaging fixture uses committed HEAD even with `--allow-dirty`; its
  version comparison must pass after the merge commit.
- Fresh remote reconciliation: origin/main is unchanged; upstream/main advanced
  to v7.0.1 (`2ce8aa1`). Complete the approved v7.0.0 checkpoint independently;
  do not claim latest-upstream sync. Extension to v7.0.1 is awaiting confirmation.
