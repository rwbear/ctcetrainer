#!/usr/bin/env node
/**
 * generate.mjs — Learn bank generator (v10.21)
 *
 * Reads a bank-spec JSON file (scripts/bank-specs/<bank>.json) and emits a
 * JS bank block in the exact style of learn-data/ctce-tasks.js, ready to be
 * pasted in (or auto-injected by --inject).
 *
 * Usage:
 *   node scripts/generate.mjs --spec scripts/bank-specs/ei-poss.json
 *   node scripts/generate.mjs --spec scripts/bank-specs/ei-poss.json --inject
 *
 * The "flavor" of a bank is the surface texture of its tasks: famous people,
 * historical facts, social situations, science/discovery, quotes. The
 * generator never invents content — it only:
 *   1. Fills task IDs sequentially (bank-id-01, bank-id-02, …)
 *   2. Sorts tasks by spec-defined order (or by flavor-balance if requested)
 *   3. Emits the canonical JS-object string that ctce-tasks.js uses
 *   4. Optionally re-writes ctce-tasks.js, inserting the new bank just before
 *      the closing `};` and updating the header comment counts.
 *
 * The generator is intentionally dumb: spec is the single source of truth.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, '..');
const TASKS_FILE = path.join(ROOT,'learn-data/ctce-tasks.js');

function parseArgs(argv){
  const a = { spec:null, inject:false, dryRun:false };
  for (let i=2;i<argv.length;i++){
    if (argv[i]==='--spec') a.spec = argv[++i];
    else if (argv[i]==='--inject') a.inject = true;
    else if (argv[i]==='--dry-run') a.dryRun = true;
  }
  if (!a.spec){ console.error('--spec <path> required'); process.exit(1); }
  return a;
}

// ── string emission (must match existing ctce-tasks.js style) ──────────
function jsStr(s){
  // Use double-quoted JS string with safe escapes. Existing file uses double-quoted
  // strings with no fancy interpolation; keep the same.
  return JSON.stringify(s);
}
function jsArr(arr){
  return '[' + arr.map(jsStr).join(', ') + ']';
}

function emitTask(t, indent='      '){
  const lines = [];
  lines.push(indent + '{');
  lines.push(indent + '  id: ' + jsStr(t.id) + ',');
  lines.push(indent + '  stem: ' + jsStr(t.stem) + ',');
  lines.push(indent + '  options: ' + jsArr(t.options) + ',');
  lines.push(indent + '  answer: ' + jsStr(t.answer) + ',');
  lines.push(indent + '  explanation: ' + jsStr(t.explanation) + ',');
  lines.push(indent + '  fullExplanation: ' + jsStr(t.fullExplanation) + ',');
  lines.push(indent + '  source: ' + jsStr(t.source) + ',');
  // Optional fields, emitted in canonical order
  if (t.hint != null) lines.push(indent + '  hint: ' + jsStr(t.hint) + ',');
  // flavor is required, then optional author
  let last = indent + '  flavor: ' + jsStr(t.flavor);
  if (t.author != null) last += ',';
  lines.push(last);
  if (t.author != null) lines.push(indent + '  author: ' + jsStr(t.author));
  lines.push(indent + '}');
  return lines.join('\n');
}

function emitBank(spec){
  const lines = [];
  lines.push('  ' + jsStr(spec.id) + ': {');
  lines.push('    id: ' + jsStr(spec.id) + ',');
  lines.push('    name: ' + jsStr(spec.name) + ',');
  lines.push('    canonicalSubId: ' + jsStr(spec.canonicalSubId) + ',');
  lines.push('    canonicalTopicId: ' + jsStr(spec.canonicalTopicId) + ',');
  lines.push('    tasks: [');
  const taskBlocks = spec.tasks.map((t,i) => {
    const filled = { ...t };
    if (!filled.id) filled.id = `${spec.id}-${String(i+1).padStart(2,'0')}`;
    return emitTask(filled);
  });
  lines.push(taskBlocks.join(',\n'));
  lines.push('    ]');
  lines.push('  }');
  return lines.join('\n');
}

function loadSpec(p){
  const raw = JSON.parse(fs.readFileSync(p,'utf8'));
  if (!raw.id || !raw.tasks) throw new Error(`spec at ${p} missing id or tasks`);
  return raw;
}

function injectIntoTasksFile(blockText, spec){
  const src = fs.readFileSync(TASKS_FILE,'utf8');
  // Sanity: make sure the bank id isn't already present.
  const bankRx = new RegExp(`^\\s+"${spec.id}":\\s*\\{`, 'm');
  if (bankRx.test(src)){
    throw new Error(`bank "${spec.id}" already exists in ctce-tasks.js — refusing to inject duplicate`);
  }
  // The file ends with:
  //   ...
  //         author: "Naval Ravikant"
  //       }]
  //   }
  // };
  //
  // We need to find the trailing `\n};\n` and insert before it, also adding a
  // comma after the previous bank's closing `}`. Strategy: find the last
  // occurrence of `\n  }\n};` (closing of last bank + closing of object).
  const tailIdx = src.lastIndexOf('\n  }\n};');
  if (tailIdx < 0){
    throw new Error('could not find tail "\\n  }\\n};" in ctce-tasks.js');
  }
  // Position right after the last bank's "  }" (i.e. at `\n};`)
  const insertAt = tailIdx + '\n  }'.length;
  // Insert: ",\n" + blockText (which itself starts with "  \"id\": {") + ...
  // The previous bank now needs a trailing comma; we add one before our block.
  const before = src.slice(0, insertAt);
  const after  = src.slice(insertAt);          // begins with `\n};`
  const out = before + ',\n' + blockText + after;
  return out;
}

function updateHeaderCounts(src){
  // Count banks and tasks in the current src and rewrite the header comment.
  const bankRx = /^\s+"[a-z0-9-]+":\s*\{$/gm;
  const taskRx = /^\s+id:\s+"[a-z0-9-]+-\d{2}",$/gm;
  const banks = (src.match(bankRx) || []).length;
  const tasks = (src.match(taskRx) || []).length;
  // Rewrite first matching line: "   <N> subtopics, <M> tasks"
  const headerRx = /(\d+)\s+subtopics,\s+(\d+)\s+tasks/;
  if (headerRx.test(src)){
    src = src.replace(headerRx, `${banks} subtopics, ${tasks} tasks`);
  }
  // Bump phase tag
  src = src.replace(/CTCE TASK BANK — v[\d.]+ Phase [\d.]+/, 'CTCE TASK BANK — v11.1 Phase 13.1');
  return src;
}

function main(){
  const args = parseArgs(process.argv);
  const spec = loadSpec(args.spec);

  const block = emitBank(spec);

  if (args.dryRun){
    console.log(block);
    return;
  }

  if (args.inject){
    let src = injectIntoTasksFile(block, spec);
    src = updateHeaderCounts(src);
    fs.writeFileSync(TASKS_FILE, src, 'utf8');
    console.log(`✓ injected bank "${spec.id}" (${spec.tasks.length} tasks) into ctce-tasks.js`);
  } else {
    console.log(block);
  }
}

main();
