import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const brainstorming = read('skills/brainstorming/SKILL.md');
const companion = read('skills/brainstorming/visual-companion.md');
const planning = read('skills/writing-plans/SKILL.md');
const verification = read('skills/verification-before-completion/SKILL.md');

test('visual implementation requires an approved PNG and approved governing spec', () => {
  for (const [name, content] of [
    ['brainstorming', brainstorming],
    ['visual companion', companion],
  ]) {
    assert.match(
      content,
      /visual implementation must not\s+begin[^.]*approved PNG[^.]*approved governing\s+spec/is,
      `${name} must state the implementation prerequisite`,
    );
  }
});

test('plans restrict visual implementation to an exhaustive named-file allowlist', () => {
  assert.match(planning, /Visual file allowlist/i);
  assert.match(
    planning,
    /exhaustive[^.]*repository-relative[^.]*files[^.]*may modify/is,
  );
  assert.match(
    planning,
    /outside (?:the|that) allowlist[^.]*stop[^.]*explicit approval/is,
  );
});

test('plans end with one human screenshot and diff acceptance checkpoint', () => {
  assert.match(planning, /final runtime screenshot/i);
  assert.match(planning, /diff[^.]*visual file allowlist/is);
  assert.match(planning, /one final human review/i);
  assert.match(planning, /explicitly accepts[^.]*screenshot[^.]*diff/is);
});

test('visual completion cannot be claimed unattended', () => {
  assert.match(verification, /Visual completion claims/i);
  assert.match(
    verification,
    /must not claim[^.]*visually complete[^.]*human[^.]*explicitly accepted/is,
  );
  assert.match(verification, /unattended visual completion\s+claim/i);
});
