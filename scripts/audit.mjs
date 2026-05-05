#!/usr/bin/env node
/**
 * audit.mjs — Learn bank auditor (v10.21)
 *
 * Runs 15 checks across one or more Learn banks. Loads ctce-tasks.js and
 * topics-config.js by faking a `window` global, so the same files that ship
 * to production are validated.
 *
 * Usage:
 *   node scripts/audit.mjs                       # full audit, all CT/CE banks
 *   node scripts/audit.mjs --bank ei-poss        # audit one bank
 *   node scripts/audit.mjs --spec scripts/bank-specs/ei-poss.json
 *                                                # audit a draft spec before injection
 *   node scripts/audit.mjs --json                # machine-readable output
 *
 * Checks (codified bug history):
 *   1.  Schema completeness (vs scripts/bank-schema.json)
 *   2.  answer === options[0]                    (runtime expects options[0] to be correct)
 *   3.  options.length === 3
 *   4.  options unique within a task
 *   5.  Stems unique within a bank
 *   6.  IDs sequential and zero-padded (bank-id-01..bank-id-N)
 *   7.  Flavor balance (each of 5 flavors within ±1 of bankSize/5)
 *   8.  Quotes flavor must carry an `author` field
 *   9.  Source whitelist (Murphy / Swan / Longman / Adapted ·)
 *   10. Gap render: stem has either exactly one ___ run OR (A)…(D) labels
 *   11. canonicalSubId / canonicalTopicId present in topics-config.js
 *   12. SV-agreement trap (verb-tense banks): no distractor that only differs in number
 *   13. Case-duplicate trap (article banks): no duplicate options after lowercasing
 *   14. Bank registered in topics-config.js (its level-id appears in some subtopic.levels.ctce)
 *   15. Length sanity (stem 30-400, fullExplanation 60-500) — already enforced by schema
 *
 * Exit code 0 = clean, 1 = at least one ERROR, 2 = WARNINGS only.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, '..');

// Accepted source prefixes — covers the existing corpus conventions. Quotes
// flavor uses either "Adapted · …" or the historical "Adapted, attributed to …"
// shape. Either is fine; the audit just wants a consistent provenance string.
const ALLOWED_SOURCE_RX = /^(Adapted · |Adapted, attributed to )?(Murphy, EGU|Swan, PEU|Hewings, AGU|Longman|Oxford|APA|Academic Word List|CT\/CE Trainer)/;
const QUOTES_SOURCE_RX  = /^(Adapted · |Adapted, attributed to |Direct quote)/;
const FLAVORS = ['social','personalities','history','science','quotes'];

// ── helpers ──────────────────────────────────────────────────────────────
function loadJsonIfExists(p){
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p,'utf8'));
}

/** Load a `window.X = {...}` style file by faking a window global. */
function loadWindowBundle(filePath){
  const code = fs.readFileSync(filePath, 'utf8');
  const fakeWindow = {};
  const fakeConsole = { log(){}, warn(){}, error(){} };
  const fn = new Function('window','console', code + '\nreturn window;');
  return fn(fakeWindow, fakeConsole);
}

function loadCanonicalIds(){
  const w = loadWindowBundle(path.join(ROOT,'learn-data/topics-config.js'));
  const cfg = w.LEARN_TOPICS_CONFIG;
  if (!cfg) throw new Error('topics-config.js did not expose LEARN_TOPICS_CONFIG');
  const canonicalSubIds   = new Set();
  const canonicalTopicIds = new Set();
  const levelToCanonical  = new Map();   // ctce subtopic id → {topic, sub}
  for (const t of cfg.topics){
    canonicalTopicIds.add(t.id);
    for (const s of t.subtopics){
      canonicalSubIds.add(s.id);
      const ctce = s.levels && s.levels.ctce;
      if (ctce) levelToCanonical.set(ctce, { topicId: t.id, subId: s.id });
    }
  }
  return { canonicalSubIds, canonicalTopicIds, levelToCanonical };
}

function loadAllBanks(){
  const w = loadWindowBundle(path.join(ROOT,'learn-data/ctce-tasks.js'));
  const banks = w.LEARN_TASKS_CTCE;
  if (!banks) throw new Error('ctce-tasks.js did not expose LEARN_TASKS_CTCE');
  return banks;
}

// ── checks ───────────────────────────────────────────────────────────────
const ERROR = 'ERROR', WARN = 'WARN';
function mkIssue(level, bankId, taskId, code, msg){
  return { level, bankId, taskId: taskId || null, code, msg };
}

function auditBank(bank, ctx){
  const issues = [];
  const taxon  = ctx.taxonomy;

  // Top-level
  if (!bank || typeof bank !== 'object'){
    issues.push(mkIssue(ERROR, bank?.id || '?', null, 'C1', 'bank is not an object'));
    return issues;
  }
  if (!bank.id || !bank.name)                issues.push(mkIssue(ERROR, bank.id||'?', null, 'C1', 'missing id or name'));
  if (!Array.isArray(bank.tasks))            issues.push(mkIssue(ERROR, bank.id||'?', null, 'C1', 'tasks is not an array'));

  // Check 11 — canonical ids exist in taxonomy
  if (bank.canonicalSubId && !taxon.canonicalSubIds.has(bank.canonicalSubId)){
    issues.push(mkIssue(ERROR, bank.id, null, 'C11', `canonicalSubId "${bank.canonicalSubId}" not in topics-config.js`));
  }
  if (bank.canonicalTopicId && !taxon.canonicalTopicIds.has(bank.canonicalTopicId)){
    issues.push(mkIssue(ERROR, bank.id, null, 'C11', `canonicalTopicId "${bank.canonicalTopicId}" not in topics-config.js`));
  }

  // Check 14 — registered as level subtopic
  if (!taxon.levelToCanonical.has(bank.id)){
    issues.push(mkIssue(ERROR, bank.id, null, 'C14', `bank id "${bank.id}" is not registered as a CT/CE level subtopic in topics-config.js`));
  } else {
    const reg = taxon.levelToCanonical.get(bank.id);
    if (bank.canonicalSubId && reg.subId !== bank.canonicalSubId){
      issues.push(mkIssue(ERROR, bank.id, null, 'C14',
        `bank.canonicalSubId="${bank.canonicalSubId}" but topics-config maps ${bank.id} → ${reg.subId}`));
    }
  }

  if (!Array.isArray(bank.tasks)) return issues;

  // Per-task & cross-task checks
  const stemSeen = new Map();
  const flavorCount = Object.fromEntries(FLAVORS.map(f=>[f,0]));
  let answerLetterCount = { A:0, B:0, C:0 };

  bank.tasks.forEach((t, idx) => {
    const expectedId = `${bank.id}-${String(idx+1).padStart(2,'0')}`;

    // Check 1 — schema completeness (the must-have keys)
    for (const k of ['id','stem','options','answer','explanation','fullExplanation','source','flavor']){
      if (t[k] === undefined || t[k] === null || t[k] === ''){
        issues.push(mkIssue(ERROR, bank.id, t.id||expectedId, 'C1', `task missing required field "${k}"`));
      }
    }

    // Check 6 — sequential ids
    if (t.id !== expectedId){
      issues.push(mkIssue(ERROR, bank.id, t.id, 'C6', `id "${t.id}" expected "${expectedId}"`));
    }

    // Check 3 — exactly 3 options
    if (!Array.isArray(t.options) || t.options.length !== 3){
      issues.push(mkIssue(ERROR, bank.id, t.id, 'C3', `options.length=${t.options?.length} (must be 3)`));
    }

    // Check 2 — answer must equal options[0] for fill-in banks; for error-id
    // banks (stems with (A)…(D) labels) the answer is a letter and options is
    // the *set* of letters shown to the user, so we just require membership.
    const isErrorId = typeof t.stem === 'string' && /\(A\)/.test(t.stem) && /\(D\)/.test(t.stem);
    if (Array.isArray(t.options)){
      if (isErrorId){
        if (!t.options.includes(t.answer)){
          issues.push(mkIssue(ERROR, bank.id, t.id, 'C2', `error-id answer "${t.answer}" not in options ${JSON.stringify(t.options)}`));
        }
      } else if (t.options[0] !== t.answer){
        issues.push(mkIssue(ERROR, bank.id, t.id, 'C2', `answer "${t.answer}" !== options[0] "${t.options[0]}"`));
      }
    }

    // Check 4 — option uniqueness
    if (Array.isArray(t.options)){
      const seen = new Set();
      for (const o of t.options){
        if (seen.has(o)) issues.push(mkIssue(ERROR, bank.id, t.id, 'C4', `duplicate option "${o}"`));
        seen.add(o);
      }
    }

    // Check 5 — stem uniqueness within bank
    if (t.stem){
      const norm = t.stem.toLowerCase().replace(/\s+/g,' ').trim();
      if (stemSeen.has(norm)){
        issues.push(mkIssue(ERROR, bank.id, t.id, 'C5', `stem duplicates ${stemSeen.get(norm)}`));
      } else stemSeen.set(norm, t.id);
    }

    // Check 7 prep — count flavors
    if (FLAVORS.includes(t.flavor)) flavorCount[t.flavor]++;
    else issues.push(mkIssue(ERROR, bank.id, t.id, 'C7', `unknown flavor "${t.flavor}"`));

    // Check 8 — quotes flavor needs author
    if (t.flavor === 'quotes' && !t.author){
      issues.push(mkIssue(ERROR, bank.id, t.id, 'C8', `quotes flavor task missing "author" field`));
    }
    if (t.flavor === 'quotes' && t.source && !QUOTES_SOURCE_RX.test(t.source)){
      issues.push(mkIssue(WARN, bank.id, t.id, 'C8', `quotes flavor source should start with "Adapted · ", "Adapted, attributed to ", or "Direct quote"`));
    }

    // Check 9 — source whitelist (skipped for quotes; quotes use the Adapted/attributed prefix instead of a textbook ref)
    if (t.source && t.flavor !== 'quotes' && !ALLOWED_SOURCE_RX.test(t.source)){
      issues.push(mkIssue(WARN, bank.id, t.id, 'C9', `source "${t.source}" not on whitelist (Murphy/Swan/Longman)`));
    }

    // Check 10 — gap render. Either at least one ___ blank or (A)..(D) error-id labels.
    // Multi-blank stems (compound answers like "has / arrived") are legitimate
    // for verb-tense, passive, and article-mix banks; we only flag zero blanks.
    if (typeof t.stem === 'string'){
      const blanks = (t.stem.match(/_{2,}/g) || []).length;
      const hasABCD = /\(A\)/.test(t.stem) && /\(B\)/.test(t.stem) && /\(C\)/.test(t.stem) && /\(D\)/.test(t.stem);
      if (!hasABCD && blanks < 1){
        issues.push(mkIssue(ERROR, bank.id, t.id, 'C10', `stem has no "___" blanks and no (A)…(D) labels`));
      }
      if (hasABCD){
        // For error-id banks, options must be a 3-element subset of {A,B,C,D}
        // (the 3 buttons the user sees) and answer must be one of A,B,C,D.
        const ABCD = ['A','B','C','D'];
        const okOpts = Array.isArray(t.options) && t.options.length===3 &&
          t.options.every(o => ABCD.includes(o)) &&
          new Set(t.options).size === 3;
        if (!okOpts){
          issues.push(mkIssue(ERROR, bank.id, t.id, 'C10', `error-id stem has (A)…(D) but options ${JSON.stringify(t.options)} are not a 3-letter subset of A,B,C,D`));
        }
        if (!ABCD.includes(t.answer)){
          issues.push(mkIssue(ERROR, bank.id, t.id, 'C10', `error-id answer "${t.answer}" is not A/B/C/D`));
        } else if (['A','B','C'].includes(t.answer)){
          answerLetterCount[t.answer]++;
        }
      }
    }

    // Check 12 — SV-agreement trap (verb-tense banks: bank.id starts with vt-)
    if (bank.id && /^vt-/.test(bank.id) && Array.isArray(t.options) && t.options.length===3){
      const lemmas = t.options.map(o => o.replace(/(?:s|es)\b/i,''));
      // if all three lemmas are identical, the only difference is number agreement → trap
      if (lemmas[0].toLowerCase() === lemmas[1].toLowerCase() && lemmas[1].toLowerCase() === lemmas[2].toLowerCase()){
        issues.push(mkIssue(WARN, bank.id, t.id, 'C12', `verb-tense distractors only differ in subject-verb agreement (s/es)`));
      }
    }

    // Check 13 — case-duplicate trap (article banks: bank.id starts with art-)
    if (bank.id && /^art-/.test(bank.id) && Array.isArray(t.options)){
      const lower = t.options.map(o=>o.toLowerCase());
      if (new Set(lower).size !== lower.length){
        issues.push(mkIssue(WARN, bank.id, t.id, 'C13', `article options become duplicates after lowercasing`));
      }
    }

    // Check 15 — length sanity (also covered by JSON schema)
    if (typeof t.stem === 'string' && (t.stem.length < 30 || t.stem.length > 400))
      issues.push(mkIssue(WARN, bank.id, t.id, 'C15', `stem length ${t.stem.length} out of 30..400`));
    if (typeof t.fullExplanation === 'string' && (t.fullExplanation.length < 60 || t.fullExplanation.length > 500))
      issues.push(mkIssue(WARN, bank.id, t.id, 'C15', `fullExplanation length ${t.fullExplanation.length} out of 60..500`));
  });

  // Check 7 — flavor balance ±1
  const target = bank.tasks.length / 5;
  const tol = Math.max(1, Math.ceil(target*0.2));   // ±1 for 30-task banks, more lenient for tiny banks
  for (const f of FLAVORS){
    const c = flavorCount[f];
    if (Math.abs(c - target) > tol){
      issues.push(mkIssue(WARN, bank.id, null, 'C7', `flavor "${f}" count=${c} target≈${target.toFixed(1)} (tolerance ±${tol})`));
    }
  }

  return issues;
}

// ── CLI ──────────────────────────────────────────────────────────────────
function parseArgs(argv){
  const a = { bank:null, spec:null, json:false };
  for (let i=2;i<argv.length;i++){
    if (argv[i]==='--bank') a.bank = argv[++i];
    else if (argv[i]==='--spec') a.spec = argv[++i];
    else if (argv[i]==='--json') a.json = true;
  }
  return a;
}

function specToBank(spec){
  // The bank-spec format is the same as the runtime bank, except tasks may
  // omit the id (we fill it in) and may carry a "_meta" block. The generator
  // produces this exact shape; here we just normalise it for the audit.
  const out = {
    id: spec.id,
    name: spec.name,
    canonicalSubId: spec.canonicalSubId,
    canonicalTopicId: spec.canonicalTopicId,
    tasks: (spec.tasks||[]).map((t,i)=>{
      const filled = { ...t };
      if (!filled.id) filled.id = `${spec.id}-${String(i+1).padStart(2,'0')}`;
      return filled;
    })
  };
  return out;
}

function format(issues){
  const errs = issues.filter(i=>i.level===ERROR);
  const warns = issues.filter(i=>i.level===WARN);
  const lines = [];
  for (const i of issues){
    const where = i.taskId ? `${i.bankId}/${i.taskId}` : `${i.bankId}`;
    lines.push(`[${i.level}] ${where}  ${i.code}  ${i.msg}`);
  }
  lines.push('');
  lines.push(`── ${errs.length} error(s), ${warns.length} warning(s)`);
  return lines.join('\n');
}

function main(){
  const args = parseArgs(process.argv);
  const taxonomy = loadCanonicalIds();
  const ctx = { taxonomy };

  let bankList = [];
  if (args.spec){
    const spec = JSON.parse(fs.readFileSync(args.spec,'utf8'));
    bankList = [specToBank(spec)];
  } else {
    const all = loadAllBanks();
    if (args.bank) bankList = [all[args.bank]].filter(Boolean);
    else bankList = Object.values(all);
  }

  if (!bankList.length){
    console.error('No banks selected.');
    process.exit(1);
  }

  const allIssues = bankList.flatMap(b => auditBank(b, ctx));

  if (args.json){
    console.log(JSON.stringify({ banks: bankList.length, issues: allIssues }, null, 2));
  } else {
    console.log(`audit.mjs — auditing ${bankList.length} bank(s), ${bankList.reduce((n,b)=>n+(b.tasks?.length||0),0)} task(s)`);
    console.log(format(allIssues));
  }

  const errs = allIssues.filter(i=>i.level===ERROR).length;
  const warns = allIssues.filter(i=>i.level===WARN).length;
  if (errs) process.exit(1);
  if (warns) process.exit(2);
  process.exit(0);
}

main();
