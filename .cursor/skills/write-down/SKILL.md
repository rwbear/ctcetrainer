---
name: write-down
description: >
  Core note-taking and planning board for ctcetrainer. Use whenever the user
  says write-down / wright-down / any typo variant, pastes ideas for the board,
  attaches bug screenshots for triage, asks what is on the board, or completes
  a board task and needs confirmation gating. Direct input only (Telegram later).
---

# Write-down

Private board path: `.cursor/write-down/BOARD.md`  
Evidence path: `.cursor/write-down/evidence/`  
Template if board missing: `.cursor/write-down/BOARD.template.md`

## Trigger forms (all valid)

`write-down`, `writedown`, `write down`, `wright-down`, `wrightdown`, `rite-down`, `wirte-down`, `write-dwon`, `/write-down`, and similar typos. Also clear phrases like “add to the board”.

## What write-down does

### A) Command only (no new note)
1. Open `BOARD.md`.
2. Summarize the board: Immediate (🔴) first, then by section.
3. State what is `in progress` / `awaiting confirmation`.

### B) New note(s) in the message (and/or images)
1. Read every note and **every attached image/video** carefully. Images are evidence — extract UI state, copy, layout, theme, device clues, exact bug symptoms. Do not skim.
2. If the note touches product/code behavior, **inspect the app/codebase** until understanding is solid (not guessed).
3. Ask Misha only if the note is ambiguous, contradictory, or does not make sense. Skip questions when investigation is enough.
4. Place each item:
   - **1. Design and animation** — visual/UI/motion bugs and ideas  
   - **2. Structural changes** — architecture, tooling, env, refactor  
   - **3. Content changes and improvements** — tasks, variants, copy, Learn/Practice content, monetization copy, language  
   - **4. Unsorted** — only if area is still unclear after investigation  
   - **5. Done** — **never** without explicit user confirmation  
5. Assign urgency:
   - 🔴 Immediate attention  
   - 🟠 Needs to be done  
   - 🔵 Future updates  
6. Assign ID: `D-###` (design), `S-###` (structural), `C-###` (content), `U-###` (unsorted). Increment within section.
7. Status starts as `inbox` or `understood` (if fully investigated).
8. Save evidence files under `evidence/` when images are provided; reference them from the item.
9. Append a row to **Intake log**.
10. Reply: what was placed, where, urgency, and any open clarification (only if needed).

### C) Completing work tied to a board item
1. Implement / verify the fix.
2. Set item status to `awaiting confirmation`.
3. Tell the user what was done and ask: **Confirm this is finished?**
4. Only on explicit yes → move to **5. Done**, set status `done`, note confirmation date.
5. Do not start the next board item as “officially next” until confirmation is settled (unless the user already directed otherwise).

## Prioritization (default)

Propose an order from urgency + dependencies (🔴 first, blockers before polish). **Do not start a new board item as the active task until Misha agrees** — he owns the final call; the agent recommends.

## Privacy

`BOARD.md` and `evidence/*` are gitignored. Do not commit them to the public repo. Workflow files (this skill, rule, command, template) may be committed.

## Out of scope for now

Telegram bot / Telegram sync — phase 2.
