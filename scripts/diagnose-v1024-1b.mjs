#!/usr/bin/env node
// Bug G: (CAPS) marker dislocation
// In every wf-* task, the (CAPS) base marker should sit IMMEDIATELY adjacent
// to the ___ gap (e.g. "___ (PASSION)" or "(PASSION) ___"). When the marker
// is far from the gap, the user reads the sentence with CAPS substituted in
// place and gets confused — see screenshot of wf-noun-25 (PASSIONATE)
// next to "attachment" while gap is mid-sentence later.
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../learn-data/ctce-tasks.js', import.meta.url), 'utf8');
const sandbox = {};
const fn = new Function('window', src + '\nreturn window;');
fn(sandbox);
const banks = sandbox.LEARN_TASKS_CTCE || sandbox.CTCE_TASKS || {};

const dislocated = [];
for (const bid of Object.keys(banks)) {
  if (!bid.startsWith('wf-')) continue;
  for (const t of banks[bid].tasks) {
    const stem = t.stem || '';
    const capsRx = /\(([A-Z][A-Z\- ]*)\)/g;
    const gapIdx = stem.indexOf('___');
    if (gapIdx === -1) continue;
    let m;
    let adjacent = false;
    let allMatches = [];
    while ((m = capsRx.exec(stem)) !== null) {
      const start = m.index;
      const end = m.index + m[0].length;
      allMatches.push({start, end, text: m[0]});
      // Adjacent = within 4 chars of "___" (allowing space, punctuation)
      const distBefore = gapIdx - end; // marker before gap
      const distAfter = start - (gapIdx + 3); // marker after gap
      if ((distBefore >= 0 && distBefore <= 3) || (distAfter >= 0 && distAfter <= 3)) {
        adjacent = true;
      }
    }
    if (allMatches.length && !adjacent) {
      dislocated.push({ bid, id: t.id, stem: stem.slice(0,180), gapIdx, marks: allMatches });
    }
  }
}

console.log(`\n=== Bug G: (CAPS) marker dislocated from ___ gap: ${dislocated.length} ===`);
for (const i of dislocated) {
  console.log(`  [${i.bid}/${i.id}]`);
  console.log(`    stem: ${i.stem}`);
}
