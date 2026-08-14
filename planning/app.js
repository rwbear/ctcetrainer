(() => {
  'use strict';

  const FOLDERS = [
    { id: 'design', label: 'Design', short: 'des' },
    { id: 'structural', label: 'Structural', short: 'str' },
    { id: 'content', label: 'Content', short: 'cnt' },
    { id: 'unsorted', label: 'Unsorted', short: 'raw' },
    { id: 'done', label: 'Done', short: 'done' }
  ];

  const URGENCY = [
    { id: 'none', title: 'No tag' },
    { id: 'immediate', title: 'Immediate' },
    { id: 'needed', title: 'Needed' },
    { id: 'future', title: 'Future' }
  ];

  const STORAGE_TOKEN = 'wd_planning_token';
  const STORAGE_REF = 'wd_planning_ref';
  const REPO = { owner: 'rwbear', repo: 'ctcetrainer' };

  const els = {
    body: document.body,
    carousel: document.getElementById('carousel'),
    stage: document.getElementById('stage'),
    dock: document.getElementById('dock'),
    toast: document.getElementById('toast'),
    setupBtn: document.getElementById('setupBtn'),
    setupDialog: document.getElementById('setupDialog'),
    setupForm: document.getElementById('setupForm'),
    tokenInput: document.getElementById('tokenInput'),
    refInput: document.getElementById('refInput'),
    setupClear: document.getElementById('setupClear')
  };

  const state = {
    board: null,
    index: 0,
    dragX: 0,
    dragging: false,
    openNoteId: null,
    pending: new Set(),
    reduceMotion: matchMedia('(prefers-reduced-motion: reduce)').matches
  };

  /* ── helpers ─────────────────────────────────────────────── */
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add('is-on');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => els.toast.classList.remove('is-on'), 2400);
  }

  function getToken() {
    return localStorage.getItem(STORAGE_TOKEN)
      || (window.WRITE_DOWN_SYNC && window.WRITE_DOWN_SYNC.token)
      || '';
  }
  function getRef() {
    return localStorage.getItem(STORAGE_REF)
      || (window.WRITE_DOWN_SYNC && window.WRITE_DOWN_SYNC.ref)
      || 'v12';
  }

  function folderItems(folderId) {
    return (state.board.items || []).filter(i => i.folder === folderId);
  }

  function urgencyValue(u) {
    return u == null || u === 'none' ? null : u;
  }

  /* ── render ──────────────────────────────────────────────── */
  function glyph(id) {
    const paths = {
      design: '<rect x="4" y="4" width="10" height="10" rx="1.5"/><path d="M8 14v3M6 17h4"/>',
      structural: '<path d="M4 16V7l6-3 6 3v9"/><path d="M4 7l6 3 6-3M10 10v9"/>',
      content: '<path d="M5 5h10v14H5z"/><path d="M8 9h4M8 12h4M8 15h2"/>',
      unsorted: '<circle cx="7" cy="8" r="1.2"/><circle cx="12" cy="8" r="1.2"/><circle cx="9.5" cy="13" r="1.2"/>',
      done: '<path d="M5 10.5l3 3 7-7"/>'
    };
    return `<span class="dock-glyph" aria-hidden="true"><svg viewBox="0 0 20 20">${paths[id] || ''}</svg></span>`;
  }

  function renderDock() {
    els.dock.innerHTML = '';

    const now = document.createElement('div');
    now.className = 'dock-now';
    now.id = 'dockNow';
    now.textContent = FOLDERS[state.index].short;
    els.dock.appendChild(now);

    const keys = document.createElement('div');
    keys.className = 'dock-keys';
    FOLDERS.forEach((f, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dock-key' + (i === state.index ? ' is-active' : '');
      btn.dataset.index = String(i);
      btn.setAttribute('aria-label', f.label);
      btn.innerHTML = glyph(f.id);
      btn.addEventListener('click', () => goTo(i, true));
      keys.appendChild(btn);
    });
    els.dock.appendChild(keys);
  }

  function syncDockIndicator() {
    const now = document.getElementById('dockNow');
    if (now) now.textContent = FOLDERS[state.index].short;
    [...els.dock.querySelectorAll('.dock-key')].forEach((btn, i) => {
      btn.classList.toggle('is-active', i === state.index);
    });
  }

  function noteCard(item, staggerIndex) {
    const u = item.urgency || 'none';
    const open = state.openNoteId === item.id;
    const pending = state.pending.has(item.id);
    const chips = URGENCY.map(opt => {
      const on = (opt.id === 'none' ? u === 'none' || !item.urgency : item.urgency === opt.id);
      return `<button type="button" class="chip${on ? ' is-on' : ''}${pending && on ? ' is-pending' : ''}" data-u="${opt.id}" data-id="${item.id}" title="${opt.title}" aria-label="${opt.title}"></button>`;
    }).join('');

    return `
      <li class="note${open ? ' is-open' : ''}" data-id="${item.id}" style="animation-delay:${Math.min(staggerIndex, 8) * 45}ms">
        <div class="note-top">
          <span class="note-id">${escapeHtml(item.id)}</span>
          <span class="note-status">${escapeHtml(item.status || 'inbox')}</span>
        </div>
        <h3 class="note-title" data-toggle="${item.id}">${escapeHtml(item.title)}</h3>
        <p class="note-preview">${escapeHtml(item.notes || '')}</p>
        <div class="note-body"><div class="note-body-inner">
          <p class="note-notes">${escapeHtml(item.notes || '')}</p>
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
      const list = items.map((it, idx) => noteCard(it, idx)).join('');
      return `
        <section class="folder-panel" data-folder="${f.id}">
          <div class="folder-sleeve">
            <div class="folder-head">
              <h2 class="folder-name">${escapeHtml(f.label)}</h2>
              <span class="folder-meta">${items.length} note${items.length === 1 ? '' : 's'}</span>
            </div>
            <ul class="note-list">${list}</ul>
          </div>
        </section>`;
    }).join('');

    els.carousel.querySelectorAll('.note-title').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-toggle');
        state.openNoteId = state.openNoteId === id ? null : id;
        renderCarousel();
        applyCarouselTransform();
        markActivePanel();
      });
    });

    els.carousel.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        setUrgency(chip.getAttribute('data-id'), chip.getAttribute('data-u'));
      });
    });

    els.carousel.querySelectorAll('.folder-panel').forEach((panel, i) => {
      panel.addEventListener('click', (e) => {
        if (i === state.index) return;
        if (e.target.closest('.note, .chip')) return;
        goTo(i, true);
      });
    });

    markActivePanel();
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function markActivePanel() {
    els.carousel.querySelectorAll('.folder-panel').forEach((panel, i) => {
      panel.classList.toggle('is-active', i === state.index);
    });
  }

  function applyCarouselTransform() {
    const panels = els.carousel.querySelectorAll('.folder-panel');
    if (!panels.length) return;
    const cardW = panels[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(els.carousel).gap) || 0;
    const stageW = els.stage.clientWidth;
    const cardCenter = state.index * (cardW + gap) + cardW / 2;
    const x = stageW / 2 - cardCenter + (state.dragging ? state.dragX : 0);
    els.carousel.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  function snapCarousel(withMotion) {
    if (!withMotion) els.carousel.classList.add('is-dragging');
    applyCarouselTransform();
    if (!withMotion) {
      void els.carousel.offsetWidth;
      els.carousel.classList.remove('is-dragging');
    }
  }

  function goTo(index, userInitiated) {
    const next = Math.max(0, Math.min(FOLDERS.length - 1, index));
    const changed = next !== state.index;
    state.index = next;
    state.dragX = 0;
    state.dragging = false;
    els.carousel.classList.remove('is-dragging');
    snapCarousel(!!userInitiated && !state.reduceMotion);
    markActivePanel();
    syncDockIndicator();
    els.body.dataset.folder = FOLDERS[state.index].id;
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', getComputedStyle(document.body).backgroundColor || '#F3EBE0');
    if (changed && userInitiated && !state.reduceMotion) {
      const active = els.carousel.querySelector('.folder-panel.is-active .note-list');
      if (active) {
        active.querySelectorAll('.note').forEach((n, i) => {
          n.style.animation = 'none';
          void n.offsetWidth;
          n.style.animation = '';
          n.style.animationDelay = `${Math.min(i, 8) * 40}ms`;
        });
      }
    }
  }

  /* ── swipe ───────────────────────────────────────────────── */
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
      els.carousel.classList.add('is-dragging');
    };

    const onMove = (x, y, e) => {
      if (!state.dragging) return;
      const dx = x - startX;
      const dy = y - startY;
      if (!axis) {
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        if (axis === 'y') {
          state.dragging = false;
          els.carousel.classList.remove('is-dragging');
          return;
        }
      }
      if (axis === 'x') {
        if (e && e.cancelable) e.preventDefault();
        const atStart = state.index === 0 && dx > 0;
        const atEnd = state.index === FOLDERS.length - 1 && dx < 0;
        state.dragX = (atStart || atEnd) ? dx * 0.35 : dx;
        applyCarouselTransform();
      }
    };

    const onUp = () => {
      if (!els.carousel.classList.contains('is-dragging') && !state.dragging) return;
      const w = els.stage.clientWidth || 1;
      const threshold = Math.min(72, w * 0.18);
      let next = state.index;
      if (state.dragX <= -threshold) next += 1;
      else if (state.dragX >= threshold) next -= 1;
      state.dragging = false;
      els.carousel.classList.remove('is-dragging');
      goTo(next, true);
    };

    els.stage.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      onDown(t.clientX, t.clientY);
    }, { passive: true });

    els.stage.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      onMove(t.clientX, t.clientY, e);
    }, { passive: false });

    els.stage.addEventListener('touchend', onUp);
    els.stage.addEventListener('touchcancel', onUp);

    let mouse = false;
    els.stage.addEventListener('mousedown', (e) => {
      mouse = true;
      onDown(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => {
      if (!mouse) return;
      onMove(e.clientX, e.clientY, e);
    });
    window.addEventListener('mouseup', () => {
      if (!mouse) return;
      mouse = false;
      onUp();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') goTo(state.index + 1, true);
      if (e.key === 'ArrowLeft') goTo(state.index - 1, true);
    });
  }

  /* ── urgency D2 write-back ───────────────────────────────── */
  async function setUrgency(id, urgencyId) {
    const item = (state.board.items || []).find(i => i.id === id);
    if (!item) return;

    const next = urgencyValue(urgencyId);
    const prev = item.urgency == null ? null : item.urgency;
    if (prev === next) return;

    item.urgency = next;
    item.updatedAt = new Date().toISOString();
    state.board.updatedAt = item.updatedAt;
    state.pending.add(id);
    renderCarousel();
    applyCarouselTransform();

    const token = getToken();
    if (!token) {
      state.pending.delete(id);
      renderCarousel();
      applyCarouselTransform();
      toast('Add a sync key to save tags');
      // keep optimistic local change visible; revert warning only
      return;
    }

    try {
      await dispatchUrgency(id, next == null ? 'none' : next, token);
      toast(`Saved ${id}`);
    } catch (err) {
      item.urgency = prev;
      console.error(err);
      toast('Sync failed — check token / branch');
    } finally {
      state.pending.delete(id);
      renderCarousel();
      applyCarouselTransform();
    }
  }

  async function dispatchUrgency(id, urgency, token) {
    const ref = getRef();
    const url = `https://api.github.com/repos/${REPO.owner}/${REPO.repo}/dispatches`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event_type: 'planning-urgency',
        client_payload: { id, urgency, ref }
      })
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || res.statusText);
    }
  }

  /* ── setup sheet ─────────────────────────────────────────── */
  function bindSetup() {
    els.setupBtn.addEventListener('click', () => {
      els.tokenInput.value = getToken();
      els.refInput.value = getRef();
      els.setupDialog.showModal();
    });

    els.setupForm.addEventListener('submit', (e) => {
      const submitter = e.submitter;
      if (submitter && submitter.value === 'cancel') return;
      const token = els.tokenInput.value.trim();
      const ref = els.refInput.value.trim() || 'v12';
      if (token) localStorage.setItem(STORAGE_TOKEN, token);
      localStorage.setItem(STORAGE_REF, ref);
      toast(token ? 'Sync key saved on this device' : 'Branch saved');
    });

    els.setupClear.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_TOKEN);
      els.tokenInput.value = '';
      toast('Sync key cleared');
    });
  }

  /* ── boot ────────────────────────────────────────────────── */
  async function loadBoard() {
    const url = new URL('board.json', window.location.href);
    url.searchParams.set('t', String(Date.now()));
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load board.json');
    state.board = await res.json();
  }

  async function boot() {
    // Prefer first non-empty folder for initial view
    try {
      await loadBoard();
    } catch (e) {
      console.error(e);
      document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif">Could not load board.json</p>';
      return;
    }

    let start = FOLDERS.findIndex(f => f.id === 'content');
    if (start < 0) start = 0;
    if (!folderItems(FOLDERS[start].id).length) {
      const nonempty = FOLDERS.findIndex(f => folderItems(f.id).length);
      if (nonempty >= 0) start = nonempty;
    }
    state.index = start;

    renderDock();
    renderCarousel();
    goTo(state.index, false);
    bindSwipe();
    bindSetup();
    window.addEventListener('resize', () => snapCarousel(false));
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => snapCarousel(false));
    }
    requestAnimationFrame(() => snapCarousel(false));

    // Hash deep-link: #content or #C-001
    const hash = (location.hash || '').replace(/^#/, '');
    if (hash) {
      const fi = FOLDERS.findIndex(f => f.id === hash);
      if (fi >= 0) goTo(fi, false);
      else {
        const item = (state.board.items || []).find(i => i.id === hash);
        if (item) {
          const fi2 = FOLDERS.findIndex(f => f.id === item.folder);
          if (fi2 >= 0) {
            state.openNoteId = item.id;
            renderCarousel();
            goTo(fi2, false);
          }
        }
      }
    }
  }

  boot();
})();
