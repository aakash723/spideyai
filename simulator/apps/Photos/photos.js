const STORAGE_KEY = 'spidey_photos';

let photos = [];
let currentViewId = null;
let currentTab = 'all';

/* ── Persistence ── */
function loadPhotos() {
  try { photos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { photos = []; }
}
function savePhotos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
}

/* ── Date helpers ── */
function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function formatDateLabel(iso) {
  const d = new Date(iso + 'T00:00:00');
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
  const fmt = (dt) => dt.toISOString().split('T')[0];
  const dateStr = fmt(d);
  if (dateStr === fmt(today)) return 'Today';
  if (dateStr === fmt(yesterday)) return 'Yesterday';
  return d.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

/* ── Grid ── */
function renderGrid() {
  const grid = document.getElementById('photosGrid');
  const filtered = currentTab === 'favorites' ? photos.filter(p => p.favorite) : photos;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="icon">${currentTab === 'favorites' ? '♥' : '📷'}</div>
      <div class="text">${currentTab === 'favorites' ? 'No favorites yet' : 'Tap + to add a photo'}</div>
    </div>`;
    return;
  }

  const groups = {};
  filtered.forEach(p => {
    const key = p.date.split('T')[0];
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  });

  const sortedDates = Object.keys(groups).sort((a, b) => b.localeCompare(a));
  let html = '';
  sortedDates.forEach(dateKey => {
    html += `<div class="date-header">${formatDateLabel(dateKey)}</div><div class="photo-row">`;
    groups[dateKey].forEach(p => {
      html += `<div class="photo-card" data-id="${p.id}">
        <img src="${p.data}" alt="" loading="lazy">
        <span class="photo-time">${formatTime(p.date)}</span>
        ${p.favorite ? '<span class="photo-fav-badge">♥</span>' : ''}
      </div>`;
    });
    html += '</div>';
  });
  grid.innerHTML = html;

  grid.querySelectorAll('.photo-card').forEach(el => {
    el.addEventListener('click', () => openDetail(parseInt(el.dataset.id)));
  });
}

/* ── Add photo ── */
function addPhoto(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    photos.unshift({
      id: Date.now(),
      data: data,
      originalData: data,
      caption: '',
      date: new Date().toISOString(),
      favorite: false
    });
    savePhotos();
    renderGrid();
  };
  reader.readAsDataURL(file);
}

/* ── Detail view ── */
function openDetail(id) {
  currentViewId = id;
  const p = photos.find(x => x.id === id);
  if (!p) return;

  const detail = document.getElementById('photoDetail');
  const img = document.getElementById('detailImg');
  const ts = document.getElementById('detailTimestamp');
  const textarea = document.getElementById('detailCaption');
  const btn = detail.querySelector('.detail-save-btn');
  const favBtn = detail.querySelector('.fav-btn');
  const revertBtn = document.getElementById('revertBtn');

  img.src = p.data;
  ts.textContent = new Date(p.date).toLocaleString([], {
    weekday: 'short', month: 'short', day: 'numeric',
    year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  textarea.value = p.caption || '';
  textarea.disabled = false;
  btn.textContent = 'Save Memory';
  btn.classList.remove('saved');
  favBtn.classList.toggle('fav-active', !!p.favorite);
  revertBtn.classList.toggle('show', p.originalData && p.data !== p.originalData);

  requestAnimationFrame(() => detail.classList.add('open'));
}

function closeDetail() {
  const detail = document.getElementById('photoDetail');
  detail.classList.remove('open');
  currentViewId = null;
}

/* ── Revert to original ── */
function revertPhoto() {
  const p = photos.find(x => x.id === currentViewId);
  if (!p || !p.originalData) return;
  p.data = p.originalData;
  savePhotos();
  document.getElementById('detailImg').src = p.data;
  document.getElementById('revertBtn').classList.remove('show');
  renderGrid();
  showToast('Reverted to original');
}

/* ── Save caption ── */
async function saveCaption() {
  const p = photos.find(x => x.id === currentViewId);
  if (!p) return;
  const textarea = document.getElementById('detailCaption');
  const caption = textarea.value.trim();
  const btn = document.querySelector('.detail-save-btn');
  if (!caption) return;

  p.caption = caption;
  savePhotos();

  try {
    const resp = await fetch('/profile/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: 'default',
        data: {
          memories: [{ caption, date: p.date, type: 'photo_memory' }]
        }
      })
    });
    if (resp.ok) {
      btn.textContent = '✓ Saved to Profile';
      btn.classList.add('saved');
      textarea.disabled = true;
    }
  } catch (e) {
    console.error('Save memory failed:', e);
  }
}

/* ── Favourite toggle ── */
function toggleFavorite() {
  const p = photos.find(x => x.id === currentViewId);
  if (!p) return;
  p.favorite = !p.favorite;
  savePhotos();
  renderGrid();
  document.querySelector('.fav-btn').classList.toggle('fav-active', !!p.favorite);
  showToast(p.favorite ? 'Added to Favorites' : 'Removed from Favorites');
}

/* ── Wallpaper ── */
function setWallpaper() {
  const p = photos.find(x => x.id === currentViewId);
  if (!p) return;
  showToast('Wallpaper set');
  parent.postMessage({ type: 'setWallpaper', data: p.data }, '*');
}

/* ── Delete ── */
function deletePhoto() {
  photos = photos.filter(x => x.id !== currentViewId);
  savePhotos();
  closeDetail();
  renderGrid();
  showToast('Photo deleted');
}

/* ── Edit / Crop ── */
let cropState = null;

function openCrop() {
  const p = photos.find(x => x.id === currentViewId);
  if (!p) return;

  const overlay = document.getElementById('cropOverlay');
  const img = document.getElementById('cropImg');
  img.src = p.data;

  overlay.classList.add('open');
  img.onload = () => {
    const nw = img.naturalWidth, nh = img.naturalHeight;
    const dispW = img.clientWidth || Math.min(nw, window.innerWidth - 40);
    const dispH = img.clientHeight || dispW * (nh / nw);
    const scale = dispW / nw;

    const fw = Math.min(dispW * 0.85, dispW);
    const fh = fw * (nh / nw);
    const fx = (dispW - fw) / 2;
    const fy = (dispH - fh) / 2;

    cropState = { nw, nh, dispW, dispH, scale, fw, fh, fx, fy, dragging: null, handle: null, dragOffX: 0, dragOffY: 0 };
    updateCropFrame();
  };
}

function updateCropFrame() {
  if (!cropState) return;
  const { fw, fh, fx, fy, dispW, dispH } = cropState;
  const frame = document.getElementById('cropFrame');
  frame.style.left = fx + 'px';
  frame.style.top = fy + 'px';
  frame.style.width = fw + 'px';
  frame.style.height = fh + 'px';

  document.getElementById('cropShadeT').style.cssText = `top:0;left:0;right:0;height:${fy}px;background:rgba(0,0,0,0.55)`;
  document.getElementById('cropShadeB').style.cssText = `top:${fy+fh}px;left:0;right:0;height:${dispH-fy-fh}px;background:rgba(0,0,0,0.55)`;
  document.getElementById('cropShadeL').style.cssText = `top:${fy}px;left:0;width:${fx}px;height:${fh}px;background:rgba(0,0,0,0.55)`;
  document.getElementById('cropShadeR').style.cssText = `top:${fy}px;left:${fx+fw}px;width:${dispW-fx-fw}px;height:${fh}px;background:rgba(0,0,0,0.55)`;
}

function applyCrop() {
  if (!cropState) return;
  const { nw, nh, dispW, dispH, scale, fx, fy, fw, fh } = cropState;

  const sx = fx / scale, sy = fy / scale;
  const sw = fw / scale, sh = fh / scale;

  const canvas = document.createElement('canvas');
  canvas.width = sw; canvas.height = sh;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(document.getElementById('cropImg'), sx, sy, sw, sh, 0, 0, sw, sh);

  const p = photos.find(x => x.id === currentViewId);
  if (p) {
    if (!p.originalData) p.originalData = p.data;
    p.data = canvas.toDataURL('image/jpeg', 0.92);
    savePhotos();
    document.getElementById('detailImg').src = p.data;
    document.getElementById('revertBtn').classList.add('show');
    renderGrid();
  }

  closeCrop();
  showToast('Photo cropped');
}

function closeCrop() {
  document.getElementById('cropOverlay').classList.remove('open');
  cropState = null;
}

/* ── Cropping drag/resize handlers ── */
function setupCropDrag() {
  const frame = document.getElementById('cropFrame');

  function getPos(e) {
    const wrapper = document.getElementById('cropWrapper');
    const wr = wrapper.getBoundingClientRect();
    return {
      x: (e.touches ? e.touches[0].clientX : e.clientX) - wr.left,
      y: (e.touches ? e.touches[0].clientY : e.clientY) - wr.top
    };
  }

  function startDrag(e) {
    if (!cropState) return;
    e.preventDefault();
    const target = e.target.closest('.crop-handle');
    const pos = getPos(e);

    if (target) {
      cropState.handle = target.dataset.handle;
      const rect = frame.getBoundingClientRect();
      const wrapper = document.getElementById('cropWrapper');
      const wr = wrapper.getBoundingClientRect();
      cropState.dragOffX = pos.x - (rect.left - wr.left);
      cropState.dragOffY = pos.y - (rect.top - wr.top);
      cropState.dragging = 'resize';
    } else {
      cropState.handle = null;
      cropState.dragOffX = pos.x - cropState.fx;
      cropState.dragOffY = pos.y - cropState.fy;
      cropState.dragging = 'move';
    }
  }

  function doDrag(e) {
    if (!cropState || !cropState.dragging) return;
    e.preventDefault();
    const pos = getPos(e);
    const { dispW, dispH } = cropState;

    if (cropState.dragging === 'move') {
      cropState.fx = Math.max(0, Math.min(pos.x - cropState.dragOffX, dispW - cropState.fw));
      cropState.fy = Math.max(0, Math.min(pos.y - cropState.dragOffY, dispH - cropState.fh));
    } else if (cropState.dragging === 'resize') {
      const h = cropState.handle;
      let { fx, fy, fw, fh } = cropState;
      const min = 40;
      const dx = pos.x - fx, dy = pos.y - fy;

      if (h.includes('e')) { fw = Math.max(min, Math.min(dx, dispW - fx)); }
      if (h.includes('w')) { const nw = Math.max(min, Math.min(fx + fw - pos.x, fx + fw)); fx = fx + fw - nw; fw = nw; }
      if (h.includes('s')) { fh = Math.max(min, Math.min(dy, dispH - fy)); }
      if (h.includes('n')) { const nh = Math.max(min, Math.min(fy + fh - pos.y, fy + fh)); fy = fy + fh - nh; fh = nh; }

      if (fx < 0) fx = 0;
      if (fy < 0) fy = 0;
      if (fx + fw > dispW) fw = dispW - fx;
      if (fy + fh > dispH) fh = dispH - fy;

      cropState.fx = fx; cropState.fy = fy;
      cropState.fw = fw; cropState.fh = fh;
    }

    updateCropFrame();
  }

  function endDrag() { if (cropState) { cropState.dragging = null; cropState.handle = null; } }

  frame.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', endDrag);
  frame.addEventListener('touchstart', startDrag, { passive: false });
  document.addEventListener('touchmove', doDrag, { passive: false });
  document.addEventListener('touchend', endDrag);
}

/* ── Toast ── */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._hide);
  toast._hide = setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ── PostMessage: add photo from parent ── */
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'addPhoto' && e.data.data) {
    photos.unshift({
      id: Date.now(),
      data: e.data.data,
      originalData: e.data.data,
      caption: e.data.caption || '',
      date: new Date().toISOString(),
      favorite: false
    });
    savePhotos();
    renderGrid();
    showToast('Screenshot saved to Photos');
  }
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  loadPhotos();
  renderGrid();

  document.getElementById('photoInput').addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) { addPhoto(e.target.files[0]); e.target.value = ''; }
  });
  document.querySelector('.add-photo-btn').addEventListener('click', () => {
    document.getElementById('photoInput').click();
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      renderGrid();
    });
  });

  document.querySelector('.detail-back').addEventListener('click', closeDetail);
  document.querySelector('.detail-save-btn').addEventListener('click', saveCaption);
  document.querySelector('.fav-btn').addEventListener('click', toggleFavorite);
  document.querySelector('.wall-btn').addEventListener('click', setWallpaper);
  document.getElementById('revertBtn').addEventListener('click', revertPhoto);

  document.querySelector('.del-btn').addEventListener('click', () => {
    let confirm = document.querySelector('.delete-confirm');
    if (!confirm) {
      confirm = document.createElement('div');
      confirm.className = 'delete-confirm';
      confirm.innerHTML = `<div class="del-title">Delete this photo?</div>
        <button class="del-yes">Delete</button>
        <button class="del-no">Cancel</button>`;
      document.body.appendChild(confirm);
      confirm.querySelector('.del-yes').addEventListener('click', () => {
        confirm.classList.remove('open'); deletePhoto();
      });
      confirm.querySelector('.del-no').addEventListener('click', () => confirm.classList.remove('open'));
    }
    confirm.classList.add('open');
  });
  document.querySelector('.edit-btn').addEventListener('click', openCrop);
  document.getElementById('cropCancel').addEventListener('click', closeCrop);
  document.getElementById('cropApply').addEventListener('click', applyCrop);
  setupCropDrag();
});
