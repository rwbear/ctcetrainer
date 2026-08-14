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
  const REPO = { owner: "rwbear", repo: "ctcetrainer" };
  const BOARD_PATH = "planning/board.json";

  const els = {
    body: document.body,
    carousel: document.getElementById("carousel"),
    stage: document.getElementById("stage"),
    dock: document.getElementById("dock"),
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
    index: 0,
    dragX: 0,
    dragging: false,
    openNoteId: null,
    pending: new Set(),
    reduceMotion: matchMedia("(prefers-reduced-motion: reduce)").matches
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
    return {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + token,
      "X-GitHub-Api-Version": "2022-11-28"
    };
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

  function noteCard(item, staggerIndex) {
    const u = item.urgency || "none";
    const open = state.openNoteId === item.id;
    const pending = state.pending.has(item.id);
    const chips = URGENCY.map((opt) => {
      const on = (opt.id === "none" ? u === "none" || !item.urgency : item.urgency === opt.id);
      return `<button type="button" class="chip${on ? " is-on" : ""}${pending && on ? " is-pending" : ""}" data-u="${opt.id}" data-id="${item.id}" title="${opt.title}" aria-label="${opt.title}"></button>`;
    }).join("");

    return `
      <li class="note${open ? " is-open" : ""}" data-id="${item.id}" style="animation-delay:${Math.min(staggerIndex, 8) * 45}ms">
        <div class="note-top">
          <span class="note-id">${escapeHtml(item.id)}</span>
          <span class="note-status">${escapeHtml(item.status || "inbox")}</span>
        </div>
        <h3 class="note-title" data-toggle="${item.id}">${escapeHtml(item.title)}</h3>
        <p class="note-preview">${escapeHtml(item.notes || "")}</p>
        <div class="note-body"><div class="note-body-inner">
          <p class="note-notes">${escapeHtml(item.notes || "")}</p>
        </div></div>
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

    els.carousel.querySelectorAll(".note-title").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-toggle");
        state.openNoteId = state.openNoteId === id ? null : id;
        renderCarousel();
        applyCarouselTransform();
        markActivePanel();
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
    els.carousel.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  function snapCarousel(withMotion) {
    if (!withMotion) els.carousel.classList.add("is-dragging");
    applyCarouselTransform();
    if (!withMotion) {
      void els.carousel.offsetWidth;
      els.carousel.classList.remove("is-dragging");
    }
  }

  function goTo(index, userInitiated) {
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
    const chin = getComputedStyle(document.documentElement).getPropertyValue("--chin").trim() || "#C9C8C3";
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", chin);
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
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
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
    const res = await fetch(url, { headers: githubHeaders(token) });
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

  async function putBoard(token, json, sha, message) {
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
        })
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
    return json;
  }

  async function patchUrgencyOnGitHub(id, urgency, token) {
    const apply = async () => {
      const remote = await fetchRemoteBoard(token);
      const next = remote.json;
      const item = (next.items || []).find((i) => i.id === id);
      if (!item) throw new Error("Item " + id + " is not on the live board.");
      item.urgency = urgency;
      item.updatedAt = new Date().toISOString();
      next.updatedAt = item.updatedAt;
      await putBoard(
        token,
        next,
        remote.sha,
        "planning: set " + id + " urgency to " + (urgency || "none")
      );
      return next;
    };

    try {
      return await apply();
    } catch (err) {
      if (err && err.code === "conflict") return await apply();
      throw err;
    }
  }

  function openSetup() {
    els.tokenInput.value = getToken();
    els.refInput.value = getRef();
    if (typeof els.setupDialog.showModal === "function") els.setupDialog.showModal();
    else els.setupDialog.setAttribute("open", "");
  }

  async function setUrgency(id, urgencyId) {
    const item = (state.board.items || []).find((i) => i.id === id);
    if (!item) return;

    const next = urgencyValue(urgencyId);
    const prev = item.urgency == null ? null : item.urgency;
    if (prev === next) return;

    const token = getToken().trim();
    if (!token) {
      toast("Set a GitHub token first — GitHub deletes keys saved in public files.", 4800);
      openSetup();
      return;
    }

    item.urgency = next;
    item.updatedAt = new Date().toISOString();
    state.board.updatedAt = item.updatedAt;
    state.pending.add(id);
    renderCarousel();
    applyCarouselTransform();
    toast("Saving…", 1800);

    try {
      const remote = await patchUrgencyOnGitHub(id, next, token);
      state.board = remote;
      toast("Saved " + id + " → " + (next || "none"));
    } catch (err) {
      item.urgency = prev;
      console.error(err);
      if (err && err.code === "bad-token") {
        localStorage.removeItem(STORAGE_TOKEN);
        openSetup();
        toast("Token was rejected. GitHub deletes keys committed to public repos — paste a new one here.", 5200);
      } else if (err && err.code === "conflict") {
        toast("Board changed at the same time. Tap the chip again.", 4200);
      } else {
        toast(err.message || "Save failed", 4200);
      }
    } finally {
      state.pending.delete(id);
      renderCarousel();
      applyCarouselTransform();
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

  async function loadBoard() {
    const url = new URL("board.json", window.location.href);
    url.searchParams.set("t", String(Date.now()));
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load board.json");
    state.board = await res.json();
  }

  async function boot() {
    document.addEventListener("dblclick", (e) => e.preventDefault());

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
    window.addEventListener("resize", () => snapCarousel(false));
    window.addEventListener("hashchange", () => {
      const name = (location.hash || "").replace(/^#/, "");
      const fi = FOLDERS.findIndex((f) => f.id === name);
      if (fi >= 0) goTo(fi, true);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => snapCarousel(false));
    }
    requestAnimationFrame(() => snapCarousel(false));
  }

  boot();
})();
