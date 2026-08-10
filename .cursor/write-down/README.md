# .cursor/write-down/

Private planning board for ЦТ/ЦЭ English Trainer.

| File | Purpose | In git? |
|------|---------|---------|
| `BOARD.md` | Living notes | **No** (gitignored) |
| `BOARD.template.md` | Empty structure | Yes |
| `evidence/` | Screenshots / recordings | **No** (gitignored) |
| `../skills/write-down/` | Agent workflow | Yes |
| `../rules/write-down.mdc` | Auto-trigger on typos | Yes |
| `../commands/write-down.md` | `/write-down` slash command | Yes |

## How to use

In Cursor chat, type **`write-down`** (typos OK) plus your note and/or screenshots.

Or use the slash command **`/write-down`**.

## Phone + PC

Open this project in Cursor and run `write-down`. The board is not on GitHub Pages.

### Does a new agent get my notes?

| How you start | `write-down` command (skill/rule) | Your written `BOARD.md` notes |
|---|---|---|
| **Same local folder** on your PC (Desktop Cursor) | Yes, once this PR is in the branch you use | **Yes** — file is on disk |
| **New Cloud Agent** (fresh VM from GitHub) | Yes, once merged into that branch | **No** — `BOARD.md` is gitignored, so git checkout has no notes |
| **Same Cloud Agent run** (this chat continues) | Yes | **Yes** — same machine |

Privacy vs persistence: keeping the board off the public repo means Cloud Agents do not inherit notes automatically. Local Desktop in the same folder does.
