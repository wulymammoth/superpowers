# Design Lock artifacts

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
