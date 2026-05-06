#!/usr/bin/env node
// v10.24 patch — fixes 89 task-integrity bugs in learn-data/ctce-tasks.js
//   Category A: 30 wf-* quote tasks 25–30 (NO_CAPS_BASE + ANSWER_EQ_HINT)
//   Category B: 8 HINT_NE_CAPS  (hint not the lowercase of CAPS base)
//   Category C: 4 ANSWER_EQ_CAPS (remove redundant hint that equals answer)
//   Category D: 18 ADAPTED_IN_STEM (strip "Adapted:" prefix from stems)
import fs from "node:fs";
import path from "node:path";

const FILE = path.resolve(process.cwd(), "learn-data/ctce-tasks.js");
let src = fs.readFileSync(FILE, "utf8");
let totalChanges = 0;

function replaceOnce(label, oldText, newText) {
  const count = src.split(oldText).length - 1;
  if (count !== 1) {
    console.error(`  FAIL [${label}]: pattern matched ${count} times (expected 1)`);
    process.exit(1);
  }
  src = src.replace(oldText, newText);
  totalChanges++;
  console.log(`  OK   [${label}]`);
}

// ─────────────────────────────────────────────────────────
// CATEGORY B — 8 HINT_NE_CAPS fixes
// Strategy: change `hint: "wrong"` → `hint: "right"` within each task's exact line.
// Use a unique 2-line anchor (id + ... + hint line) to keep the match unique.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category B: HINT_NE_CAPS (8 hint corrections) ===");

const hintFixes = [
  ["wf-adj-16", `(ARIDITY) climate`,        `hint: "arid"`,        `hint: "aridity"`],
  ["wf-adv-10", `(SKILL) used mathematics`, `hint: "skilful"`,     `hint: "skill"`],
  ["wf-neg-10", `(REPLACE) loss`,           `hint: "replaceable"`, `hint: "replace"`],
  ["wf-neg-14", `(ENFORCE) without`,        `hint: "enforceable"`, `hint: "enforce"`],
  ["wf-neg-17", `(ACCEPT) in his time`,     `hint: "acceptable"`,  `hint: "accept"`],
  ["wf-neg-18", `(DESCRIBE) suffering`,     `hint: "describable"`, `hint: "describe"`],
  ["wf-neg-21", `(COMPARE) to any other`,   `hint: "comparable"`,  `hint: "compare"`],
  ["wf-neg-23", `(SATISFY) with the service`,`hint: "satisfied"`,  `hint: "satisfy"`],
];
for (const [id, capsAnchor, oldH, newH] of hintFixes) {
  // Each anchor occurs once; the (CAPS_TOKEN) marker uniquely identifies the stem.
  // We replace the surrounding hint pair using a multiline window.
  const idx = src.indexOf(capsAnchor);
  if (idx === -1) { console.error(`  FAIL ${id}: anchor "${capsAnchor}" missing`); process.exit(1); }
  // Move forward to the next `hint:` line within ~600 chars
  const windowEnd = idx + 800;
  const window = src.slice(idx, windowEnd);
  if (!window.includes(oldH)) { console.error(`  FAIL ${id}: ${oldH} not found near ${capsAnchor}`); process.exit(1); }
  const before = src.slice(0, idx);
  const after  = src.slice(idx);
  // Replace only the FIRST occurrence after idx
  const replacedAfter = after.replace(oldH, newH);
  if (replacedAfter === after) { console.error(`  FAIL ${id}: nothing replaced`); process.exit(1); }
  src = before + replacedAfter;
  totalChanges++;
  console.log(`  OK   [${id}] ${oldH} → ${newH}`);
}

// ─────────────────────────────────────────────────────────
// CATEGORY C — 4 ANSWER_EQ_CAPS, remove redundant hint
// Pattern: `hint: "X",\n        flavor: ...`  →  `flavor: ...`
// (the hint duplicates the answer and the CAPS in stem already shows base)
// ─────────────────────────────────────────────────────────
console.log("\n=== Category C: ANSWER_EQ_CAPS (4 hint removals) ===");

const removeHintFixes = [
  ["wf-mixed-11", `(COMFORT)`,    `        hint: "comfort",\n`],
  ["wf-mixed-16", `(TRANSFORM)`,  `        hint: "transform",\n`],
  ["wf-mixed-17", `(PERFECT)`,    `        hint: "perfect",\n`],
  ["wf-mixed-24", `(DATE)`,       `        hint: "date",\n`],
];
for (const [id, anchor, hintLine] of removeHintFixes) {
  const idx = src.indexOf(anchor);
  if (idx === -1) { console.error(`  FAIL ${id}: anchor missing`); process.exit(1); }
  const before = src.slice(0, idx);
  const after  = src.slice(idx);
  if (!after.includes(hintLine)) { console.error(`  FAIL ${id}: hint line missing`); process.exit(1); }
  const replacedAfter = after.replace(hintLine, "");
  src = before + replacedAfter;
  totalChanges++;
  console.log(`  OK   [${id}] removed redundant hint`);
}

// ─────────────────────────────────────────────────────────
// CATEGORY D — 18 ADAPTED_IN_STEM fixes
// Strip "Adapted: '...'" wrapper from stems while keeping the meaningful text.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category D: ADAPTED_IN_STEM (18 stem cleanups) ===");

const adaptedFixes = [
  // prep-noun: simple unwrap, drop wrapping single quotes
  [`stem: "Adapted: 'The secret ___ getting ahead is getting started.'"`,
   `stem: "The secret ___ getting ahead is getting started."`],
  [`stem: "Adapted: 'The future belongs to those who have a real belief ___ the beauty of their dreams.'"`,
   `stem: "The future belongs to those who have a real belief ___ the beauty of their dreams."`],
  [`stem: "Adapted: 'The difference ___ stupidity and genius is that genius has its limits.'"`,
   `stem: "The difference ___ stupidity and genius is that genius has its limits."`],
  [`stem: "Adapted: 'Real knowledge is to know the extent ___ one's own ignorance.'"`,
   `stem: "Real knowledge is to know the extent ___ one's own ignorance."`],
  [`stem: "Adapted: 'The best way to find yourself is to lose yourself in the service ___ others.'"`,
   `stem: "The best way to find yourself is to lose yourself in the service ___ others."`],
  [`stem: "Adapted: 'There is not a liberal America and a conservative America — there is the United States ___ America.'"`,
   `stem: "There is not a liberal America and a conservative America — there is the United States ___ America."`],
  // prep-fixed: restructure to single sentence; keep the blank intact
  [`stem: "Adapted: 'Always do your best — what you plant now, you will harvest later.' Acting ___ haste is rarely the way to do that."`,
   `stem: "Acting ___ haste is rarely the way to do your best, since what you plant now you will harvest later."`],
  [`stem: "Adapted: 'You should never be afraid of failure — every great career is built ___ the back of mistakes.'"`,
   `stem: "You should never be afraid of failure: every great career is built ___ the back of mistakes."`],
  [`stem: "Adapted: 'A leader who governs ___ fear ends up surrounded by people who tell him only what he wants to hear.'"`,
   `stem: "A leader who governs ___ fear ends up surrounded by people who tell him only what he wants to hear."`],
  [`stem: "Adapted: 'I have always thought that the smallest things, done ___ love, are greater than the greatest deeds.'"`,
   `stem: "The smallest things, done ___ love, are greater than the greatest deeds."`],
  [`stem: "Adapted: 'It is in the small daily disciplines that great results are built — not ___ chance.'"`,
   `stem: "Great results are built in the small daily disciplines, not ___ chance."`],
  [`stem: "Adapted: 'A wise person learns from the mistakes of others; a fool insists ___ making them all himself.'"`,
   `stem: "A wise person learns from the mistakes of others; a fool insists ___ making them all himself."`],
  // w2s-action-verbs: unwrap each numbered line
  [`stem: "1) Adapted: 'You don't ___ a second chance to make a first impression.'\\n2) Adapted: 'Most great inventors had to ___ used to failure long before they ever saw success.'"`,
   `stem: "1) You don't ___ a second chance to make a first impression.\\n2) Most great inventors had to ___ used to failure long before they ever saw success."`],
  [`stem: "1) Adapted: 'The older you ___, the more you realise that simplicity is the highest form of intelligence.'\\n2) Adapted: 'When you finally ___ the joke that life is short, every day starts to count.'"`,
   `stem: "1) The older you ___, the more you realise that simplicity is the highest form of intelligence.\\n2) When you finally ___ the joke that life is short, every day starts to count."`],
  [`stem: "1) Adapted: 'A leader is someone who is willing to ___ home last and let the team go first.'\\n2) Adapted: 'You only truly ___ permission to lead from the people who choose to follow you.'"`,
   `stem: "1) A leader is someone who is willing to ___ home last and let the team go first.\\n2) You only truly ___ permission to lead from the people who choose to follow you."`],
  [`stem: "1) Adapted: 'The day you stop learning is the day you start to ___ tired of life.'\\n2) Adapted: 'Every great mind has had to ___ information from sources that disagreed with each other.'"`,
   `stem: "1) The day you stop learning is the day you start to ___ tired of life.\\n2) Every great mind has had to ___ information from sources that disagreed with each other."`],
  [`stem: "1) Adapted: 'When two people ___ married, they should bring out the best in each other, not the worst.'\\n2) Adapted: 'Sometimes the wisest thing a person can do is simply ___ the bus and watch the world go by for an afternoon.'"`,
   `stem: "1) When two people ___ married, they should bring out the best in each other, not the worst.\\n2) Sometimes the wisest thing a person can do is simply ___ the bus and watch the world go by for an afternoon."`],
  [`stem: "1) Adapted: 'It is the mark of an educated mind to ___ a serious thought without immediately accepting it as true.'\\n2) Adapted: 'Words can ___ a real effect on those who are ready to listen carefully.'"`,
   `stem: "1) It is the mark of an educated mind to ___ a serious thought without immediately accepting it as true.\\n2) Words can ___ a real effect on those who are ready to listen carefully."`],
];
for (let i = 0; i < adaptedFixes.length; i++) {
  const [oldS, newS] = adaptedFixes[i];
  replaceOnce(`adapted-${i + 1}`, oldS, newS);
}

console.log(`\n— Categories B/C/D applied: ${totalChanges} changes —`);

fs.writeFileSync(FILE, src, "utf8");
console.log(`\nWrote ${FILE}`);
console.log(`Total changes so far: ${totalChanges}`);
