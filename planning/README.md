# Write-down planning board (live)

Public ops board for ctcetrainer.

- **Data:** `board.json` (source of truth for notes + urgency)
- **UI:** this folder on GitHub Pages → `/ctcetrainer/planning/`
- **Intake:** type in the site (New / edit) or Cursor `write-down`
- **Urgency tags:** chips commit live to `board.json` on `v12` (does **not** wake polish)
- **Polish:** drafts go to `inbox.json` → GitHub Action → Cursor Automation (only when something is pending)

## One-time D2 sync setup (you)

1. Open https://github.com/settings/personal-access-tokens/new (logged into GitHub).
2. Token name: `write-down`
3. Repository access → Only select repositories → `ctcetrainer`
4. Repository permissions → Contents → **Read and write**
5. Generate token → copy it.
6. On the planning site tap **SET**, paste, Save.

The token stays in that browser only. GitHub deletes tokens that sit in public files — never put it in `write-key.js`.

## One-time polish automation (you)

Drafts should wake Cursor only when `inbox.json` changes — not on a timer.

1. In Cursor: [cursor.com/automations](https://cursor.com/automations) → new automation.
2. Trigger: **Webhook**. Repo: `ctcetrainer`. Branch: `v12`.
3. Paste the prompt from `.cursor/automations/write-down-polish.md`.
4. Save — copy the webhook URL and API key.
5. GitHub repo → Settings → Secrets and variables → Actions → add:
   - `CURSOR_AUTOMATION_WEBHOOK_URL`
   - `CURSOR_AUTOMATION_API_KEY`

Until those secrets exist, the Action still runs but **does not call Cursor** (no crash, no wasted agent).

## Branch

Production board branch: **`v12`** (Pages). Set `ref` in SET if you ever change that.

## Folders / palettes

| Folder | Field (bone ivory on…) |
|---|---|
| Done | Golden Fur `#9D7B48` |
| Unsorted | Leaf Green `#70735E` |
| Design | Mahogany Bark `#6B342C` |
| Structural | Velvet Collar `#413237` |
| Content | Gentle Paw `#8E8874` |

Chin / Safari toolbar: TRACKS chassis `#C9C8C3` (does not change with folder).

Urgency chips: none · play orange · Golden Fur · Tranquil Sky

## Type

Hero type is **Doto** (OFL), self-hosted in `fonts/` with axis `ROND=100` (round dots). Do not load the static Google CSS instances — they drop the ROND axis and the letters stop looking dotted.
