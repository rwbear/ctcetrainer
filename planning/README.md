# Write-down planning board (live)

Public ops board for ctcetrainer.

- **Data:** `board.json` (source of truth for notes + urgency)
- **UI:** this folder on GitHub Pages → `/ctcetrainer/planning/`
- **Intake:** Cursor only — type `write-down` (notes are investigated and placed)
- **Urgency tags:** optional chips on the site (default = none). Chips commit straight to `board.json` on branch `v12`

## One-time D2 sync setup (you)

GitHub **deletes** any token committed in a public file. Do not put a PAT in `write-key.js`.

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained token**
2. Resource owner: you · Repository: **only** `rwbear/ctcetrainer`
3. Permissions: **Contents: Read and write**
4. Open the planning site → **SET** → paste the token. It stays in **this browser only** (localStorage). Repeat on each device.

Chips then GET `planning/board.json` and PUT the patched file on branch `v12`.

## Branch

Production board branch: **`v12`** (Pages). Set `ref` in SET if you ever change that.

## Folders / palettes

| Folder | Feel |
|---|---|
| Design | Gentle Paw |
| Structural | Velvet Collar |
| Content | Leaf Green |
| Unsorted | Tranquil Sky |
| Done | Mahogany Bark |

Urgency chips: none · Rustic Tail · Golden Fur · Tranquil Sky

## Type

Hero type is **Doto** (OFL), self-hosted in `fonts/` with axis `ROND=100` (round dots). Do not load the static Google CSS instances — they drop the ROND axis and the letters stop looking dotted.
