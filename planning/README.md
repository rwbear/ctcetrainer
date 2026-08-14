# Write-down planning board (live)

Public ops board for ctcetrainer.

- **Data:** `board.json` (source of truth for notes + urgency)
- **UI:** this folder on GitHub Pages → `/ctcetrainer/planning/`
- **Intake:** Cursor only — type `write-down` (notes are investigated and placed)
- **Urgency tags:** optional chips on the site (default = none). Chips commit straight to `board.json` on branch `v12`

## One-time D2 sync setup (you)

1. Open https://github.com/settings/personal-access-tokens/new (logged into GitHub).
2. Token name: `write-down`
3. Repository access → Only select repositories → `ctcetrainer`
4. Repository permissions → Contents → **Read and write**
5. Generate token → copy it.
6. On the planning site tap **SET**, paste, Save.

The token stays in that browser only. GitHub deletes tokens that sit in public files — never put it in `write-key.js`.

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
