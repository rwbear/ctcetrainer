#!/usr/bin/env node
// Diagnose word-formation banks for:
//   1. answer === hint (base word is the answer — type-in bug)
//   2. answer === CAPS base in stem (case-insensitive) — same bug
//   3. hint not present in stem
//   4. answer does not contain hint root at all (semantic mismatch sniff test)
//   5. "Adapted:" or "Adapted · " or "Adapted, attributed to" leaking into stem
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../learn-data/ctce-tasks.js', import.meta.url), 'utf8');
// Strip the IIFE wrapper so we can eval the object. The file assigns window.LEARN_TASKS_CTCE or similar.
// Easier: parse the file as a JS module by regex-extracting individual task blocks.
// Actually, simpler — eval in a sandbox.

// Create a fake window and run
const sandbox = {};
const fn = new Function('window', src + '\nreturn window;');
fn(sandbox);
const banks = sandbox.LEARN_TASKS_CTCE || sandbox.CTCE_TASKS || {};

const bankIds = Object.keys(banks).filter(k => k.startsWith('wf-'));
console.log('wf-* banks found:', bankIds.join(', '));

const issues = [];
for (const bid of bankIds) {
  const bank = banks[bid];
  for (const t of bank.tasks) {
    const hint = (t.hint || '').toLowerCase().trim();
    const stem = t.stem || '';
    const answer = (t.answer || '').toLowerCase().trim();
    const capsMatch = stem.match(/\(([A-Z][A-Z\- ]*)\)/);
    const caps = capsMatch ? capsMatch[1].toLowerCase().trim() : null;

    // Bug 1: answer === hint
    if (hint && answer === hint) {
      issues.push({ bid, id: t.id, kind: 'ANSWER_EQ_HINT', hint, answer, stem: stem.slice(0,100) });
    }
    // Bug 2: answer === caps base AND hint also reveals it (critical type-in bug)
    // If hint is gone, this is an intentional zero-derivation task — not a bug.
    if (caps && answer === caps && hint && hint === answer) {
      issues.push({ bid, id: t.id, kind: 'ANSWER_EQ_CAPS_WITH_HINT', caps, answer, stem: stem.slice(0,100) });
    }
    // Bug 3: hint not present as caps in stem (for wf banks, CAPS should usually match hint)
    if (hint && caps && hint !== caps) {
      issues.push({ bid, id: t.id, kind: 'HINT_NE_CAPS', hint, caps, stem: stem.slice(0,100) });
    }
    // Bug 4: stem has no CAPS base at all (mandatory for wf pattern)
    if (!caps) {
      issues.push({ bid, id: t.id, kind: 'NO_CAPS_BASE', stem: stem.slice(0,100) });
    }
    // Bug 5: answer missing hint root (length > 3, shared >= 3 chars) - sniff semantic mismatch
    if (hint && caps && hint === caps) {
      // Does answer share first 3 letters of hint?
      if (hint.length >= 3 && answer.length >= 3) {
        const root = hint.slice(0, Math.min(4, hint.length - 1));
        if (!answer.toLowerCase().includes(root.slice(0,3))) {
          issues.push({ bid, id: t.id, kind: 'ANSWER_ROOT_MISMATCH', hint, answer, stem: stem.slice(0,100) });
        }
      }
    }
    // Bug 6: "Adapted" leaking into stem (from quotes attribution)
    if (/Adapted[:\.,·]/.test(stem)) {
      issues.push({ bid, id: t.id, kind: 'ADAPTED_IN_STEM', stem: stem.slice(0,120) });
    }
  }
}

console.log(`\n=== ${issues.length} issues found ===\n`);
const grouped = {};
for (const i of issues) {
  (grouped[i.kind] = grouped[i.kind] || []).push(i);
}
for (const kind of Object.keys(grouped)) {
  console.log(`\n── ${kind} (${grouped[kind].length}) ──`);
  for (const i of grouped[kind]) {
    console.log(`  [${i.bid}/${i.id}] hint=${i.hint||'-'} caps=${i.caps||'-'} answer=${i.answer||'-'}`);
    console.log(`    stem: ${i.stem}`);
  }
}

// Now across ALL banks, scan for Adapted leak in stem
console.log('\n\n=== Scanning ALL banks for Adapted-in-stem leak ===\n');
let adaptedCount = 0;
for (const bid of Object.keys(banks)) {
  for (const t of banks[bid].tasks) {
    if (/Adapted[:\.,·]|attributed to/i.test(t.stem || '')) {
      adaptedCount++;
      console.log(`  [${bid}/${t.id}] stem: ${t.stem.slice(0,150)}`);
    }
  }
}
console.log(`\nTotal 'Adapted' in stem: ${adaptedCount}`);
