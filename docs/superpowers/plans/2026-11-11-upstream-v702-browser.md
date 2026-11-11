# Upstream 7.0.2 and existing Chrome implementation plan

> Execute inline with superpowers:executing-plans; use writing-skills for behavioral instruction evaluation.

**Goal:** Integrate stable upstream 22f0b46 and open the companion in normal Chrome on macOS, preserving supervised Design Lock.
**Authority:** User approved the preceding recommendation with "let's do it". Local integration and verification only; no publication or installed-plugin refresh.
**Architecture:** Retain upstream workflows plus existing fork gates. Extend the existing platform launcher to select an installed Chrome application through macOS open, without a new instance/profile flag. Preserve default-browser fallback and explicit launcher override. Guide browser inspection toward an existing browser connection; do not change global automation configuration.
**Startup checkout:** /Users/wulymammoth/Desktop/lab/superpowers, main, 1295906. Single writer, no orchestration descriptor. All edits remain here.
**Spec:** Accepted conversation scope and .Codex-context.md Design Lock contract.

## Tasks
- [x] Integrate upstream 7.0.2, resolving brainstorming conflicts while preserving authorization reuse and visual gates. Run existing Design Lock checks and independent instruction simulations.
- [x] Add failing browser launcher tests for Chrome selection, default fallback, URL preservation; implement minimal selection and existing-browser guidance. Test first-screen auto-open behavior with server integration suite.
- [ ] Verify affected upstream helpers, bootstrap and packaging contracts, shell lint, skill size/layout and browser suites. Inspect complete diff; record evidence and limitations.
- [ ] Refresh stable base, complete local checkpoint commits, and report publication/plugin refresh boundary.

## Review focus
- Visual shortcuts never bypass PNG/spec/planning/allowlist/final acceptance.
- Existing nonvisual approval remains reusable.
- Chrome absent: default browser still opens. Non-macOS behavior unchanged.
- URL key remains one argv value; no shell interpolation or new profile flags.
- A browser tool connecting early must not suppress the human-facing tab accidentally; retain evidence if full desktop integration cannot run.

## Evidence
Checks and pressure simulation receipts recorded in notes/main--2026-11-11.md. Source tests do not prove the reported blank window is resolved in an installed plugin.
