#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

function pendingEntries(inbox) {
  const entries = (inbox && inbox.entries) || [];
  const latest = new Map();
  entries.forEach((e) => {
    if (!e || e.processStatus !== "pending" || !e.noteId) return;
    const prev = latest.get(e.noteId);
    const t = Date.parse(e.updatedAt || "") || 0;
    const pt = prev ? Date.parse(prev.updatedAt || "") || 0 : -1;
    if (t >= pt) latest.set(e.noteId, e);
  });
  return [...latest.values()];
}

function buildPayload(inbox, ref) {
  const pending = pendingEntries(inbox);
  return {
    reason: "planning-inbox",
    ref: ref || "v12",
    pending: pending.map((e) => ({
      noteId: e.noteId,
      type: e.type,
      folder: e.folder,
      updatedAt: e.updatedAt
    }))
  };
}

function main() {
  const file = process.argv[2] || path.join(__dirname, "..", "inbox.json");
  const inbox = JSON.parse(fs.readFileSync(file, "utf8"));
  const payload = buildPayload(inbox, process.env.BOARD_REF || "v12");
  if (process.argv.includes("--json")) {
    process.stdout.write(JSON.stringify(payload) + "\n");
  } else {
    process.stdout.write(String(payload.pending.length) + "\n");
  }
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

module.exports = { pendingEntries, buildPayload };
