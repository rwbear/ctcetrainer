(() => {
  "use strict";

  const FOLDERS = [
    { id: "design", label: "Design", hero: "DESIGN" },
    { id: "structural", label: "Structural", hero: "STRUCTURAL" },
    { id: "content", label: "Content", hero: "CONTENT" },
    { id: "unsorted", label: "Unsorted", hero: "UNSORTED" },
    { id: "done", label: "Done", hero: "DONE" }
  ];

  const URGENCY = [
    { id: "none", title: "No tag" },
    { id: "immediate", title: "Immediate" },
    { id: "needed", title: "Needed" },
    { id: "future", title: "Future" }
  ];

  const STORAGE_TOKEN = "wd_planning_token";
  const STORAGE_REF = "wd_planning_ref";
  const STORAGE_BOARD = "wd_planning_board_v1";
  const REPO = { owner: "rwbear", repo: "ctcetrainer" };
  const BOARD_PATH = "planning/board.json";

  const els = {
    body: document.body,
    browse: document.getElementById("browse"),
    carousel: document.getElementById("carousel"),
    stage: document.getElementById("stage"),
    dock: document.getElementById("dock"),
    sheet: document.getElementById("sheet"),
    sheetBack: document.getElementById("sheetBack"),
    sheetId: document.getElementById("sheetId"),
    sheetStatus: document.getElementById("sheetStatus"),
    sheetProcess: document.getElementById("sheetProcess"),
    sheetTitle: document.getElementById("sheetTitle"),
    sheetNotes: document.getElementById("sheetNotes"),
    sheetUrgency: document.getElementById("sheetUrgency"),
    toast: document.getElementById("toast"),
    setupBtn: document.getElementById("setupBtn"),
    setupDialog: document.getElementById("setupDialog"),
    setupForm: document.getElementById("setupForm"),
    tokenInput: document.getElementById("tokenInput"),
    refInput: document.getElementById("refInput"),
    setupClear: document.getElementById("setupClear")
  };

  const state = {
    board: null,
    boardSha: null,
    index: 0,
    dragX: 0,
    dragging: false,
    mode: "browse",
    openNoteId: null,
    pending: new Set(),
    reduceMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    writeChain: Promise.resolve(),
    flushPromise: null,
    queued: Object.create(null)
  };

  function toast(msg, ms) {
    els.toast.textContent = msg;
    els.toast.classList.add("is-on");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => els.toast.classList.remove("is-on"), ms || 2600);
  }

  function getToken() {
    return localStorage.getItem(STORAGE_TOKEN)
      || (window.WRITE_DOWN_SYNC && window.WRITE_DOWN_SYNC.token)
      || "";
  }
  function getRef() {
    return localStorage.getItem(STORAGE_REF)
      || (window.WRITE_DOWN_SYNC && window.WRITE_DOWN_SYNC.ref)
      || "v12";
  }

  function folderItems(folderId) {
    return (state.board.items || []).filter((i) => i.folder === folderId);
  }

  function urgencyValue(u) {
    return u == null || u === "none" ? null : u;
  }

  function githubHeaders(token) {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    };
    if (token) headers.Authorization = "Bearer " + token;
    return headers;
  }

  function decodeBase64Utf8(b64) {
    const bin = atob(String(b64 || "").replace(/\n/g, ""));
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function encodeBase64Utf8(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin);
  }

  function cacheBoardLocally(board) {
    if (!board) return;
    try {
      localStorage.setItem(STORAGE_BOARD, JSON.stringify({
        savedAt: Date.now(),
        ref: getRef(),
        board: board
      }));
    } catch (e) { /* quota / private mode */ }
  }

  function readLocalBoardCache() {
    try {
      const raw = localStorage.getItem(STORAGE_BOARD);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.board) return null;
      if (parsed.ref && parsed.ref !== getRef()) return null;
      return parsed.board;
    } catch (e) {
      return null;
    }
  }

  function itemTime(item) {
    const t = Date.parse((item && item.updatedAt) || "") || 0;
    return t;
  }

  /** Prefer per-item fields that were updated more recently (local mid-save vs remote CDN). */
  function mergeBoards(remote, local) {
    if (!remote) return local ? JSON.parse(JSON.stringify(local)) : null;
    if (!local) return JSON.parse(JSON.stringify(remote));
    const next = JSON.parse(JSON.stringify(remote));
    const localItems = local.items || [];
    (next.items || []).forEach((item) => {
      const mine = localItems.find((i) => i.id === item.id);
      if (!mine) return;
      if (itemTime(mine) >= itemTime(item)) {
        item.urgency = mine.urgency == null ? null : mine.urgency;
        item.updatedAt = mine.updatedAt || item.updatedAt;
      }
    });
    const remoteTs = Date.parse(remote.updatedAt || "") || 0;
    const localTs = Date.parse(local.updatedAt || "") || 0;
    if (localTs > remoteTs) next.updatedAt = local.updatedAt;
    return next;
  }

  function urgencyDiffPatches(fromBoard, toBoard) {
    const patches = Object.create(null);
    const fromItems = (fromBoard && fromBoard.items) || [];
    ((toBoard && toBoard.items) || []).forEach((item) => {
      const prev = fromItems.find((i) => i.id === item.id);
      const a = prev ? (prev.urgency == null ? null : prev.urgency) : null;
      const b = item.urgency == null ? null : item.urgency;
      if (a !== b) patches[item.id] = b;
    });
    return patches;
  }

  function findItem(id) {
    return (state.board.items || []).find((i) => i.id === id);
  }

  function processLabel(item) {
    const s = item && item.processStatus;
    if (s === "pending") return "Queued for polish";
    if (s === "processing") return "Polishing…";
    if (s === "error") return "Polish failed — will retry";
    return "";
  }

  function fitTitle() {
    const el = els.sheetTitle;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.max(el.scrollHeight, 36) + "px";
  }

  function renderSheetUrgency(item) {
    const u = item.urgency || "none";
    els.sheetUrgency.innerHTML = '<span class="urgency-label">tag</span>' + URGENCY.map((opt) => {
      const on = (opt.id === "none" ? u === "none" || !item.urgency : item.urgency === opt.id);
      return `<button type="button" class="chip${on ? " is-on" : ""}" data-u="${opt.id}" data-id="${item.id}" title="${opt.title}" aria-label="${opt.title}"></button>`;
    }).join("");
    els.sheetUrgency.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        setUrgency(chip.getAttribute("data-id"), chip.getAttribute("data-u"));
      });
    });
  }

  function renderSheet() {
    const item = findItem(state.openNoteId);
    if (!item || !els.sheet) return;
    const folder = FOLDERS.find((f) => f.id === item.folder) || FOLDERS[state.index];
    els.sheetBack.textContent = "←  " + folder.hero;
    els.sheetId.textContent = item.id;
    els.sheetStatus.textContent = item.status || "inbox";
    const proc = processLabel(item);
    els.sheetProcess.hidden = !proc;
    els.sheetProcess.textContent = proc;
    if (proc) els.sheetProcess.setAttribute("data-state", item.processStatus);
    else els.sheetProcess.removeAttribute("data-state");
    els.sheetTitle.value = item.title || "";
    els.sheetNotes.value = item.notes || "";
    renderSheetUrgency(item);
    els.sheet.setAttribute("aria-hidden", "false");
    fitTitle();
  }

  function openNote(id, instant) {
    const item = findItem(id);
    if (!item) return;
    const fi = FOLDERS.findIndex((f) => f.id === item.folder);
    if (fi >= 0 && fi !== state.index) goTo(fi, false, { keepNote: true });
    state.openNoteId = id;
    state.mode = "note";
    if (els.browse) els.browse.hidden = false;
    renderSheet();
    if (instant) els.body.classList.add("is-note-instant");
    els.body.classList.add("is-note");
    clearTimeout(openNote._hideBrowse);
    const hideMs = instant || state.reduceMotion ? 0 : 540;
    openNote._hideBrowse = setTimeout(() => {
      if (state.mode === "note" && els.browse) els.browse.hidden = true;
    }, hideMs);
    if (instant) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => els.body.classList.remove("is-note-instant"));
      });
    }
    try {
      history.replaceState(null, "", "#" + id);
    } catch (e) {}
  }

  function closeNote() {
    if (state.mode !== "note") return;
    if (els.sheetTitle) els.sheetTitle.blur();
    if (els.sheetNotes) els.sheetNotes.blur();
    clearTimeout(openNote._hideBrowse);
    if (els.browse) els.browse.hidden = false;
    state.mode = "browse";
    state.openNoteId = null;
    els.body.classList.remove("is-note", "is-note-instant");
    if (els.sheet) els.sheet.setAttribute("aria-hidden", "true");
    try {
      history.replaceState(null, "", "#" + FOLDERS[state.index].id);
    } catch (e) {}
    renderCarousel();
    snapCarousel(false);
  }

  function bindSheet() {
    els.sheetBack.addEventListener("click", () => closeNote());
    els.sheetTitle.addEventListener("input", () => {
      const item = findItem(state.openNoteId);
      if (!item) return;
      item.title = els.sheetTitle.value;
      item.updatedAt = new Date().toISOString();
      fitTitle();
    });
    els.sheetNotes.addEventListener("input", () => {
      const item = findItem(state.openNoteId);
      if (!item) return;
      item.notes = els.sheetNotes.value;
      item.updatedAt = new Date().toISOString();
    });
  }

  function glyph(id) {
    const paths = {
      design: '<path d="M3.8 5h12.4v9.2H3.8zm3.4 9.2v2.2h5.6v-2.2z"/>',
      structural: '<path d="M2.8 16.4V7.6L10 3.4l7.2 4.2v8.8z"/>',
      content: '<path d="M5 3.2h10v13.6H5z"/>',
      unsorted: '<circle cx="7" cy="8" r="1.55"/><circle cx="13" cy="8" r="1.55"/><circle cx="10" cy="13.1" r="1.55"/>',
      done: '<path d="M7.6 13.4 4.2 10l-1.5 1.5 4.9 4.9 9.4-9.4-1.5-1.5z"/>'
    };
    return `<span class="dock-glyph" aria-hidden="true"><svg viewBox="0 0 20 20">${paths[id] || ""}</svg></span>`;
  }

  function renderDock() {
    els.dock.innerHTML = "";

    const set = document.createElement("p");
    set.className = "dock-set";
    set.id = "dockNow";
    set.textContent = FOLDERS[state.index].hero;
    els.dock.appendChild(set);

    const keys = document.createElement("div");
    keys.className = "dock-keys";
    FOLDERS.forEach((f, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dock-key" + (i === state.index ? " is-active" : "");
      btn.dataset.index = String(i);
      btn.setAttribute("aria-label", f.label);
      btn.innerHTML = glyph(f.id);
      bindPressable(btn);
      btn.addEventListener("click", () => goTo(i, true));
      keys.appendChild(btn);
    });
    els.dock.appendChild(keys);
  }

  function syncDockIndicator() {
    const now = document.getElementById("dockNow");
    if (now) now.textContent = FOLDERS[state.index].hero;
    [...els.dock.querySelectorAll(".dock-key")].forEach((btn, i) => {
      btn.classList.toggle("is-active", i === state.index);
    });
  }

  function bindPressable(el) {
    const on = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      el.classList.add("is-pressed");
      try { el.setPointerCapture(e.pointerId); } catch (err) {}
    };
    const off = () => el.classList.remove("is-pressed");
    el.addEventListener("pointerdown", on);
    el.addEventListener("pointerup", off);
    el.addEventListener("pointercancel", off);
    el.addEventListener("lostpointercapture", off);
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function setRowLamp(row, urgency) {
    if (!row) return;
    const u = urgency || "none";
    row.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.toggle("is-on", chip.getAttribute("data-u") === u);
      chip.classList.remove("is-ignite");
    });
  }

  async function playLamp(row, urgency) {
    if (!row) return;
    if (state.reduceMotion) {
      setRowLamp(row, urgency);
      return;
    }
    row.classList.add("is-scanning");
    row.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.remove("is-on", "is-ignite");
    });
    await wait(1680);
    row.classList.remove("is-scanning");
    const target = row.querySelector('.chip[data-u="' + (urgency || "none") + '"]');
    if (target) {
      target.classList.add("is-ignite");
      await wait(780);
      target.classList.remove("is-ignite");
      target.classList.add("is-on");
    } else {
      setRowLamp(row, urgency);
    }
  }

  function noteCard(item, staggerIndex) {
    const u = item.urgency || "none";
    const chips = URGENCY.map((opt) => {
      const on = (opt.id === "none" ? u === "none" || !item.urgency : item.urgency === opt.id);
      return `<button type="button" class="chip${on ? " is-on" : ""}" data-u="${opt.id}" data-id="${item.id}" title="${opt.title}" aria-label="${opt.title}"></button>`;
    }).join("");

    return `
      <li class="note" data-id="${item.id}" style="animation-delay:${Math.min(staggerIndex, 8) * 45}ms">
        <div class="note-top">
          <span class="note-id">${escapeHtml(item.id)}</span>
          <span class="note-status">${escapeHtml(item.status || "inbox")}</span>
        </div>
        <h3 class="note-title" data-open="${item.id}">${escapeHtml(item.title)}</h3>
        <p class="note-preview" data-open="${item.id}">${escapeHtml(item.notes || "")}</p>
        <div class="urgency-row">
          <span class="urgency-label">tag</span>
          ${chips}
        </div>
      </li>`;
  }

  function renderCarousel() {
    els.carousel.innerHTML = FOLDERS.map((f) => {
      const items = folderItems(f.id);
      const list = items.map((it, idx) => noteCard(it, idx)).join("");
      const long = f.hero.length > 8 ? " is-long" : "";
      return `
        <section class="folder-panel" data-folder="${f.id}">
          <h2 class="folder-hero${long}">${escapeHtml(f.hero)}</h2>
          <p class="folder-meta">${String(items.length).padStart(2, "0")} note${items.length === 1 ? "" : "s"} · write-down</p>
          <ul class="note-list">${list || ""}</ul>
        </section>`;
    }).join("");

    els.carousel.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openNote(el.getAttribute("data-open"));
      });
    });

    els.carousel.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        setUrgency(chip.getAttribute("data-id"), chip.getAttribute("data-u"));
      });
    });

    els.carousel.querySelectorAll(".folder-panel").forEach((panel, i) => {
      panel.addEventListener("click", (e) => {
        if (i === state.index) return;
        if (e.target.closest(".note, .chip")) return;
        goTo(i, true);
      });
    });

    markActivePanel();
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function markActivePanel() {
    els.carousel.querySelectorAll(".folder-panel").forEach((panel, i) => {
      panel.classList.toggle("is-active", i === state.index);
    });
  }

  function applyCarouselTransform() {
    const panels = els.carousel.querySelectorAll(".folder-panel");
    if (!panels.length) return;
    const cardW = panels[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(els.carousel).gap) || 0;
    const stageW = els.stage.clientWidth;
    const cardCenter = state.index * (cardW + gap) + cardW / 2;
    const x = stageW / 2 - cardCenter + (state.dragging ? state.dragX : 0);
    els.carousel.style.transform = "translateX(" + x + "px)";
  }

  function snapCarousel(withMotion) {
    if (!withMotion) els.carousel.classList.add("is-dragging");
    applyCarouselTransform();
    if (!withMotion) {
      void els.carousel.offsetWidth;
      els.carousel.classList.remove("is-dragging");
    }
  }

  function syncTopChrome() {
    // Safari status bar (top) follows theme-color / page background = folder field.
    // Safari bottom toolbar samples the fixed chin (#C9C8C3) sitting under it.
    const bg = getComputedStyle(document.body).backgroundColor;
    const theme = document.getElementById("themeColor")
      || document.querySelector('meta[name="theme-color"]');
    if (theme && bg) theme.setAttribute("content", bg);
  }

  function goTo(index, userInitiated, opts) {
    if (state.mode === "note" && userInitiated && !(opts && opts.keepNote)) closeNote();
    const next = Math.max(0, Math.min(FOLDERS.length - 1, index));
    const changed = next !== state.index;
    state.index = next;
    state.dragX = 0;
    state.dragging = false;
    els.carousel.classList.remove("is-dragging");
    snapCarousel(!!userInitiated && !state.reduceMotion);
    markActivePanel();
    syncDockIndicator();
    els.body.dataset.folder = FOLDERS[state.index].id;
    syncTopChrome();
    try {
      history.replaceState(null, "", "#" + FOLDERS[state.index].id);
    } catch (e) {}
    if (changed && userInitiated && !state.reduceMotion) {
      const active = els.carousel.querySelector(".folder-panel.is-active .note-list");
      if (active) {
        active.querySelectorAll(".note").forEach((n, i) => {
          n.style.animation = "none";
          void n.offsetWidth;
          n.style.animation = "";
          n.style.animationDelay = `${Math.min(i, 8) * 40}ms`;
        });
      }
    }
  }

  function bindSwipe() {
    let startX = 0;
    let startY = 0;
    let axis = null;

    const onDown = (x, y) => {
      if (state.mode === "note") return;
      startX = x;
      startY = y;
      axis = null;
      state.dragging = true;
      state.dragX = 0;
      els.carousel.classList.add("is-dragging");
    };

    const onMove = (x, y, e) => {
      if (!state.dragging) return;
      const dx = x - startX;
      const dy = y - startY;
      if (!axis) {
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        if (axis === "y") {
          state.dragging = false;
          els.carousel.classList.remove("is-dragging");
          return;
        }
      }
      if (axis === "x") {
        if (e && e.cancelable) e.preventDefault();
        const atStart = state.index === 0 && dx > 0;
        const atEnd = state.index === FOLDERS.length - 1 && dx < 0;
        state.dragX = (atStart || atEnd) ? dx * 0.35 : dx;
        applyCarouselTransform();
      }
    };

    const onUp = () => {
      if (!els.carousel.classList.contains("is-dragging") && !state.dragging) return;
      const w = els.stage.clientWidth || 1;
      const threshold = Math.min(72, w * 0.18);
      let next = state.index;
      if (state.dragX <= -threshold) next += 1;
      else if (state.dragX >= threshold) next -= 1;
      state.dragging = false;
      els.carousel.classList.remove("is-dragging");
      goTo(next, true);
    };

    els.stage.addEventListener("touchstart", (e) => {
      if (e.target.closest(".chip, [data-open]")) return;
      const t = e.touches[0];
      onDown(t.clientX, t.clientY);
    }, { passive: true });

    els.stage.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      onMove(t.clientX, t.clientY, e);
    }, { passive: false });

    els.stage.addEventListener("touchend", onUp);
    els.stage.addEventListener("touchcancel", onUp);

    let mouse = false;
    els.stage.addEventListener("mousedown", (e) => {
      if (e.target.closest(".chip, [data-open]")) return;
      mouse = true;
      onDown(e.clientX, e.clientY);
    });
    window.addEventListener("mousemove", (e) => {
      if (!mouse) return;
      onMove(e.clientX, e.clientY, e);
    });
    window.addEventListener("mouseup", () => {
      if (!mouse) return;
      mouse = false;
      onUp();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.mode === "note") {
        e.preventDefault();
        closeNote();
        return;
      }
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      if (state.mode === "note") return;
      if (e.key === "ArrowRight") goTo(state.index + 1, true);
      if (e.key === "ArrowLeft") goTo(state.index - 1, true);
    });
  }

  function taggedError(code, message) {
    const err = new Error(message || code);
    err.code = code;
    return err;
  }

  async function fetchRemoteBoard(token) {
    const ref = getRef();
    const url = `https://api.github.com/repos/${REPO.owner}/${REPO.repo}/contents/${BOARD_PATH}?ref=${encodeURIComponent(ref)}`;
    const res = await fetch(url, {
      headers: githubHeaders(token),
      cache: "no-store"
    });
    const body = await res.json().catch(() => ({}));
    if (res.status === 401 || res.status === 403) {
      throw taggedError("bad-token", body.message || "Token rejected");
    }
    if (!res.ok) {
      throw new Error(body.message || `Could not read board.json (${res.status})`);
    }
    return {
      sha: body.sha,
      json: JSON.parse(decodeBase64Utf8(body.content))
    };
  }

  async function putBoard(token, json, sha, message, opts) {
    const ref = getRef();
    const res = await fetch(
      `https://api.github.com/repos/${REPO.owner}/${REPO.repo}/contents/${BOARD_PATH}`,
      {
        method: "PUT",
        headers: Object.assign({ "Content-Type": "application/json" }, githubHeaders(token)),
        body: JSON.stringify({
          message,
          content: encodeBase64Utf8(JSON.stringify(json, null, 2) + "\n"),
          sha,
          branch: ref
        }),
        keepalive: !!(opts && opts.keepalive)
      }
    );
    const body = await res.json().catch(() => ({}));
    if (res.status === 401 || res.status === 403) {
      throw taggedError("bad-token", body.message || "Token rejected");
    }
    if (res.status === 409 || res.status === 422) {
      throw taggedError("conflict", body.message || "Board changed");
    }
    if (!res.ok) {
      throw new Error(body.message || `Save failed (${res.status})`);
    }
    const newSha = body.content && body.content.sha;
    return { json, sha: newSha || null };
  }

  function applyPatchesToBoard(board, patches) {
    const next = board;
    const now = new Date().toISOString();
    const ids = Object.keys(patches);
    ids.forEach((id) => {
      const item = (next.items || []).find((i) => i.id === id);
      if (!item) throw new Error("Item " + id + " is not on the live board.");
      item.urgency = patches[id];
      item.updatedAt = now;
    });
    next.updatedAt = now;
    return { next, ids, now };
  }

  function reapplyQueuedOptimism(board) {
    Object.keys(state.queued).forEach((id) => {
      const item = (board.items || []).find((i) => i.id === id);
      if (item) item.urgency = state.queued[id];
    });
  }

  async function commitPatches(token, patches) {
    const ids = Object.keys(patches);
    if (!ids.length) return state.board;

    let lastErr = null;
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        let sha = state.boardSha;
        let remote = state.board;
        if (!sha || !remote || attempt > 0) {
          const fetched = await fetchRemoteBoard(token);
          sha = fetched.sha;
          remote = fetched.json;
        }
        const working = JSON.parse(JSON.stringify(remote));
        const { next, ids: touched } = applyPatchesToBoard(working, patches);
        const label = touched.length === 1
          ? "planning: set " + touched[0] + " urgency to " + (patches[touched[0]] || "none")
          : "planning: set urgency on " + touched.join(", ");
        const saved = await putBoard(token, next, sha, label);
        state.board = saved.json;
        state.boardSha = saved.sha;
        // A successful PUT can wipe optimistic values still waiting in the queue
        reapplyQueuedOptimism(state.board);
        cacheBoardLocally(state.board);
        return saved.json;
      } catch (err) {
        lastErr = err;
        state.boardSha = null;
        if (err && err.code === "conflict") continue;
        throw err;
      }
    }
    throw lastErr || taggedError("conflict", "Board kept changing — try again");
  }

  function enqueueWrite(job) {
    const run = state.writeChain.then(job, job);
    state.writeChain = run.catch(() => {});
    return run;
  }

  function takeQueuedPatches() {
    const patches = Object.create(null);
    Object.keys(state.queued).forEach((id) => {
      patches[id] = state.queued[id];
      delete state.queued[id];
    });
    return patches;
  }

  /**
   * One shared flush: every tap awaits the same in-flight drain.
   * Batches all pending note urgencies into as few PUTs as possible.
   */
  function flushUrgencyQueue(token) {
    if (state.flushPromise) return state.flushPromise;

    state.flushPromise = enqueueWrite(async () => {
      try {
        for (;;) {
          const patches = takeQueuedPatches();
          if (!Object.keys(patches).length) {
            // Let any same-turn taps land before we declare the drain done
            await Promise.resolve();
            if (!Object.keys(state.queued).length) return;
            continue;
          }
          await commitPatches(token, patches);
        }
      } finally {
        state.flushPromise = null;
      }
    });

    return state.flushPromise;
  }

  function openSetup() {
    els.tokenInput.value = getToken();
    els.refInput.value = getRef();
    if (typeof els.setupDialog.showModal === "function") els.setupDialog.showModal();
    else els.setupDialog.setAttribute("open", "");
  }

  function noteRow(id) {
    if (state.mode === "note" && state.openNoteId === id) return els.sheetUrgency;
    const note = els.carousel.querySelector('.note[data-id="' + id + '"]');
    return note && note.querySelector(".urgency-row");
  }

  async function persistUrgency(token, id, value) {
    // Drain until this note is no longer waiting, then confirm the board matches
    // (guards against a rare race where a flush ends just as another tap queues).
    for (let guard = 0; guard < 6; guard++) {
      await flushUrgencyQueue(token);
      if (state.queued[id] !== undefined) continue;
      const local = (state.board.items || []).find((i) => i.id === id);
      if (local && local.urgency === value) return;
      // Lost the race — put it back and drain again
      state.queued[id] = value;
    }
    throw new Error("Save did not stick — tap once more");
  }

  async function setUrgency(id, urgencyId) {
    const item = (state.board.items || []).find((i) => i.id === id);
    if (!item) return;

    const next = urgencyValue(urgencyId);
    const prev = item.urgency == null ? null : item.urgency;
    if (prev === next && state.queued[id] === undefined) return;

    const token = getToken().trim();
    if (!token) {
      toast("Set a GitHub token first — tap SET.", 4200);
      openSetup();
      return;
    }

    // Latest requested value for this note (rapid re-taps + multi-note batching)
    state.queued[id] = next;
    item.urgency = next;
    item.updatedAt = new Date().toISOString();
    state.board.updatedAt = item.updatedAt;
    cacheBoardLocally(state.board);
    state.pending.add(id);

    const row = noteRow(id);
    if (row) row.classList.add("is-locked");
    const lamp = playLamp(row, next);

    try {
      await persistUrgency(token, id, next);
      toast("Saved", 900);
    } catch (err) {
      console.error(err);
      // Only revert if nothing newer is queued for this note
      if (state.queued[id] === undefined) {
        item.urgency = prev;
        setRowLamp(row, prev);
      }
      if (err && err.code === "bad-token") {
        localStorage.removeItem(STORAGE_TOKEN);
        openSetup();
        toast("Token rejected — paste a new one in SET.", 5200);
      } else if (err && err.code === "conflict") {
        toast("Busy — tap once more.", 2800);
      } else {
        toast(err.message || "Save failed", 4200);
      }
    } finally {
      state.pending.delete(id);
      if (row) row.classList.remove("is-locked");
      void lamp;
    }
  }

  function bindSetup() {
    els.setupBtn.addEventListener("click", () => openSetup());

    els.setupForm.addEventListener("submit", (e) => {
      const submitter = e.submitter;
      if (submitter && submitter.value === "cancel") return;
      const token = els.tokenInput.value.trim();
      const ref = els.refInput.value.trim() || "v12";
      if (token) localStorage.setItem(STORAGE_TOKEN, token);
      else localStorage.removeItem(STORAGE_TOKEN);
      localStorage.setItem(STORAGE_REF, ref);
      toast(token ? "Token stored in this browser only." : "Token cleared. Branch saved.", 3200);
    });

    els.setupClear.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_TOKEN);
      els.tokenInput.value = "";
      toast("Token cleared");
    });
  }

  async function warmBoardSha(token) {
    if (state.boardSha) return;
    try {
      const remote = await fetchRemoteBoard(token);
      if (!state.boardSha && remote && remote.json && state.board
          && remote.json.updatedAt === state.board.updatedAt) {
        state.boardSha = remote.sha;
      }
    } catch (e) {
      /* first save will fetch SHA itself */
    }
  }

  async function fetchBoardFromCdnFallbacks() {
    const ref = getRef();
    const bust = String(Date.now());
    const candidates = [
      `https://raw.githubusercontent.com/${REPO.owner}/${REPO.repo}/${encodeURIComponent(ref)}/${BOARD_PATH}?t=${bust}`,
      `./board.json?t=${bust}`
    ];
    let lastErr = null;
    for (let i = 0; i < candidates.length; i++) {
      try {
        const res = await fetch(candidates[i], { cache: "no-store" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        return { json: await res.json(), sha: null };
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error("Failed to load board.json");
  }

  async function syncAheadOfRemote(token, remoteBoard, mergedBoard) {
    if (!token) return;
    const patches = urgencyDiffPatches(remoteBoard, mergedBoard);
    const ids = Object.keys(patches);
    if (!ids.length) return;
    ids.forEach((id) => { state.queued[id] = patches[id]; });
    try {
      await flushUrgencyQueue(token);
      toast("Synced local changes", 1600);
    } catch (err) {
      console.error(err);
    }
  }

  async function loadBoard() {
    const token = getToken().trim();
    let remote = null;
    let sha = null;
    let lastErr = null;

    // Contents API is authoritative (no Fastly/Pages lag). Public repos allow unauthenticated GET.
    try {
      const fetched = await fetchRemoteBoard(token || "");
      remote = fetched.json;
      sha = fetched.sha;
    } catch (err) {
      lastErr = err;
      if (err && err.code === "bad-token" && token) {
        // Token broken for write, but try public read once more without it
        try {
          const fetched = await fetchRemoteBoard("");
          remote = fetched.json;
          sha = fetched.sha;
          lastErr = null;
        } catch (err2) {
          lastErr = err2;
        }
      }
    }

    if (!remote) {
      try {
        const fallback = await fetchBoardFromCdnFallbacks();
        remote = fallback.json;
        sha = null;
      } catch (err) {
        lastErr = err;
      }
    }

    if (!remote) {
      const localOnly = readLocalBoardCache();
      if (localOnly) {
        state.board = localOnly;
        state.boardSha = null;
        return;
      }
      throw lastErr || new Error("Failed to load board.json");
    }

    const local = readLocalBoardCache();
    const merged = mergeBoards(remote, local);
    state.board = merged;
    state.boardSha = sha;
    cacheBoardLocally(state.board);

    const patches = urgencyDiffPatches(remote, merged);
    if (token && Object.keys(patches).length) {
      // Local was ahead of GitHub (F5 mid-save) — push the missing urgencies
      void syncAheadOfRemote(token, remote, merged);
    } else if (token && !sha) {
      void warmBoardSha(token);
    }
  }

  function bindUnloadGuard() {
    window.addEventListener("beforeunload", (e) => {
      const busy = state.pending.size
        || Object.keys(state.queued).length
        || !!state.flushPromise;
      if (!busy) return;
      e.preventDefault();
      e.returnValue = "";
    });
  }

  async function boot() {
    document.addEventListener("dblclick", (e) => {
      if (e.target && (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")) return;
      e.preventDefault();
    });

    try {
      await loadBoard();
    } catch (e) {
      console.error(e);
      document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif">Could not load board.json</p>';
      return;
    }

    let start = FOLDERS.findIndex((f) => f.id === "content");
    if (start < 0) start = 0;
    if (!folderItems(FOLDERS[start].id).length) {
      const nonempty = FOLDERS.findIndex((f) => folderItems(f.id).length);
      if (nonempty >= 0) start = nonempty;
    }
    state.index = start;

    const hash = (location.hash || "").replace(/^#/, "");
    if (hash) {
      const fi = FOLDERS.findIndex((f) => f.id === hash);
      if (fi >= 0) state.index = fi;
      else {
        const item = (state.board.items || []).find((i) => i.id === hash);
        if (item) {
          const fi2 = FOLDERS.findIndex((f) => f.id === item.folder);
          if (fi2 >= 0) {
            state.openNoteId = item.id;
            state.mode = "note";
            state.index = fi2;
          }
        }
      }
    }

    renderDock();
    renderCarousel();
    goTo(state.index, false);
    bindSwipe();
    bindSetup();
    bindSheet();
    bindUnloadGuard();
    if (state.mode === "note" && state.openNoteId) openNote(state.openNoteId, true);
    window.addEventListener("resize", () => {
      snapCarousel(false);
      if (state.mode === "note") fitTitle();
    });
    window.addEventListener("hashchange", () => {
      const name = (location.hash || "").replace(/^#/, "");
      const fi = FOLDERS.findIndex((f) => f.id === name);
      if (fi >= 0) {
        goTo(fi, true);
        return;
      }
      const item = (state.board.items || []).find((i) => i.id === name);
      if (item) openNote(item.id);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => snapCarousel(false));
    }
    requestAnimationFrame(() => snapCarousel(false));
  }

  boot();
})();
