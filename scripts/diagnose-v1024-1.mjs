#!/usr/bin/env node
// v10.24.1 — Two new bug classes spotted from in-app screenshots:
//   E. ZERO-DERIVATION TYPE-IN BUG: any wf-* task where lowercase(CAPS in stem) === answer.
//      The (CAPS) marker in the stem IS effectively a hint chip in type-in mode,
//      so the answer is given away regardless of whether `hint` field is present.
//      Removing the `hint` field (the v10.24 fix) was insufficient.
//   F. SOURCE-LEAK INTO ATTRIBUTION: tasks whose `source` begins with
//      "Adapted, attributed to X" cause the byline to render "Adapted — X",
//      which is fine, BUT v10.24 only scrubbed in-stem leaks. Check no stems still leak.
// Also confirm we don't have plain "(CAPS)" === answer leaks across non-wf banks.
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../learn-data/ctce-tasks.js', import.meta.url), 'utf8');
const sandbox = {};
const fn = new Function('window', src + '\nreturn window;');
fn(sandbox);
const banks = sandbox.LEARN_TASKS_CTCE || sandbox.CTCE_TASKS || {};

const zeroDerivation = [];
const adaptedStem = [];

for (const bid of Object.keys(banks)) {
  for (const t of banks[bid].tasks) {
    const stem = t.stem || '';
    const answer = (t.answer || '').toLowerCase().trim();
    const capsMatch = stem.match(/\(([A-Z][A-Z\- ]*)\)/);
    const caps = capsMatch ? capsMatch[1].toLowerCase().trim() : null;
    // Bug E: zero-derivation in any wf-* / word-formation bank
    if (bid.startsWith('wf-') && caps && answer === caps) {
      zeroDerivation.push({ bid, id: t.id, caps, answer, stem: stem.slice(0,140), hint: t.hint || null });
    }
    // Bug F: stem still has Adapted leak after v10.24 cleanup
    if (/Adapted[:\.,·]|attributed to/i.test(stem)) {
      adaptedStem.push({ bid, id: t.id, stem: stem.slice(0,160) });
    }
  }
}

console.log(`\n=== E. Zero-derivation wf-* type-in bugs: ${zeroDerivation.length} ===`);
for (const i of zeroDerivation) {
  console.log(`  [${i.bid}/${i.id}] CAPS=${i.caps} answer=${i.answer} hint=${i.hint}`);
  console.log(`    stem: ${i.stem}`);
}

console.log(`\n=== F. Adapted leaking into stem: ${adaptedStem.length} ===`);
for (const i of adaptedStem) {
  console.log(`  [${i.bid}/${i.id}]`);
  console.log(`    stem: ${i.stem}`);
}
