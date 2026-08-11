# Write-down planning board (live)

Public ops board for ctcetrainer.

- **Data:** `board.json` (source of truth for notes + urgency)
- **UI:** this folder on GitHub Pages → `/ctcetrainer/planning/`
- **Intake:** Cursor only — type `write-down` (notes are investigated and placed)
- **Urgency tags:** optional chips on the site (default = none). D2 write-back commits to `board.json`

## One-time D2 sync setup (you)

So a public link can save tags without login:

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained token**
2. Resource owner: you · Repository: **only** `rwbear/ctcetrainer`
3. Permissions: **Contents: Read and write** (needed so `repository_dispatch` is authorized; the workflow itself only patches urgency fields)
4. Copy the token into `planning/write-key.js`:

```js
window.WRITE_DOWN_SYNC = {
  token: "github_pat_…",
  ref: "v12"
};
```

5. Commit & push. Open the planning URL on phone/PC — chips sync via GitHub Action `planning-urgency`.

Or: open the site → ⚙ → paste token once per browser (localStorage). Committed `write-key.js` is better for “just open the link” on every device.

## Branch

Production board branch: **`v12`** (Pages). Set `ref` accordingly in `write-key.js` / ⚙ sheet.

## Folders / palettes

| Folder | Feel |
|---|---|
| Design | Gentle Paw |
| Structural | Velvet Collar |
| Content | Leaf Green |
| Unsorted | Tranquil Sky |
| Done | Mohogany Bark |

Urgency chips: none · Rustic Tail · Golden Fur · Tranquil Sky
