---
name: write-down
description: >
  Core note-taking and planning board for ctcetrainer. Use whenever the user
  says write-down / wright-down / any typo variant, pastes ideas for the board,
  attaches bug screenshots for triage, asks what is on the board, or completes
  a board task and needs confirmation gating. Direct input only (Telegram later).
  Live board: planning/board.json · visual site: planning/
---

# Write-down

**Source of truth:** `planning/board.json` (public, committed)  
**Visual site:** `planning/index.html` → GitHub Pages `/ctcetrainer/planning/`  
**Evidence:** `.cursor/write-down/evidence/` (optional local; prefer `planning/evidence/` if committing)  
**Legacy private draft:** `.cursor/write-down/BOARD.md` (gitignored) — do not use as source of truth

## Trigger forms (all valid)

`write-down`, `writedown`, `write down`, `wright-down`, `wrightdown`, `rite-down`, `wirte-down`, `write-dwon`, `/write-down`, and similar typos. Also clear phrases like “add to the board”.

## What write-down does

### A) Command only (no new note)
1. Open `planning/board.json`.
2. Summarize: by folder, call out items with urgency if set.
3. State what is `in progress` / `awaiting confirmation`.
4. Light candidate next only (one line). Misha locks the decision.

### B) New note(s) in the message (and/or images)
1. Read every note and **every attached image/video** carefully.
2. If it touches product/code, inspect the app until understanding is solid.
3. Ask Misha only if ambiguous, contradictory, or senseless.
4. Place into a folder:
   - `design` — visual/UI/motion bugs and ideas  
   - `structural` — architecture, tooling, env, refactor  
   - `content` — tasks, variants, copy, Learn/Practice, monetization, language  
   - `unsorted` — only if still unclear  
   - `done` — **never** without explicit user confirmation  
5. Assign ID: `D-###`, `S-###`, `C-###`, `U-###` (increment within prefix).
6. Status: `inbox` or `understood` (if fully investigated).
7. **Urgency:** default `null` (no tag). Only set if Misha specifies. Site chips can change it (D2).
8. Append object to `items`, row to `intakeLog`, bump `updatedAt`.
9. Commit `planning/board.json` with a clear message.
10. Reply: what was placed, folder, and optional light candidate next.

### C) Completing work tied to a board item
1. Implement / verify.
2. Set `status` to `awaiting confirmation`.
3. Ask: **Confirm this is finished?**
4. Only on explicit yes → set `folder` to `done`, `status` to `done`.
5. Do not start another board item until he locks the next one.

## Prioritization

Misha locks every decision. At most one light “candidate next” line. Never start a board item until he explicitly chooses.

## D2 urgency

Site patches `urgency` by writing `planning/board.json` on branch `v12` (GitHub Contents API). Token lives in the visitor’s browser via **SET** — never commit a PAT; GitHub revokes tokens in public files. Valid values: `null` / `immediate` / `needed` / `future`. Do not invent other values. Prefer leaving urgency null unless asked.

## D2b drafts (site add/edit)

Site writes raw create/edit drafts to `planning/inbox.json` (and a stub/update on `board.json`). A GitHub Action (`planning-polish.yml`) runs only when that inbox file changes. If any entry is `pending`, it POSTs the Cursor Automation webhook (secrets on the repo). The automation runs this skill against the codebase, writes polished fields back, and must **never** change `urgency` or move notes to `done` without explicit confirmation.

## Out of scope for now

Telegram bot — phase 2.
