import { EngineBase } from './core.js';
import { store } from './data-store.js';
import { missionEngine } from './mission-engine.js';
import { habitEngine } from './habit-engine.js';
import { predictionEngine } from './prediction-engine.js';
import { toolEngine } from './tool-engine.js';
import { decisionEngine } from './decision-engine.js';

const LEVELS = {
  1: 'Newcomer', 2: 'Sidekick', 3: 'Hero in Training',
  4: 'Neighborhood Watch', 5: 'Friendly Hero', 6: 'City Protector',
  7: 'Wall Crawler', 8: 'Web Slinger', 9: 'Amazing Spider',
  10: 'Superior Spider', 15: 'Ultimate Spider', 20: 'Spider-Verse',
};

function getLevelTitle(level) {
  let title = 'Friendly Neighborhood Hero';
  for (const [lvl, t] of Object.entries(LEVELS)) {
    if (level >= parseInt(lvl)) title = t;
  }
  return title;
}

function getXPForLevel(level) {
  return level * 1000;
}

const TILE_LAYERS = {
  street: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    label: 'Street',
    attr: '&copy; OpenStreetMap',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    label: 'Dark',
    attr: '&copy; OpenStreetMap &copy; CARTO',
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    label: 'Satellite',
    attr: '&copy; Esri',
  },
};

export class HUDController extends EngineBase {
  constructor() {
    super('HUDController');
    this._map = null;
    this._layers = null;
    this._tileLayer = null;
    this._geoCache = {};
    this._subscribed = false;
    this._timerInterval = null;
  }

  init() {
    if (this._subscribed) return;

    store.subscribe('*', () => this.refresh());
    missionEngine.on('mission-created', () => this.refresh());
    missionEngine.on('mission-completed', (data) => this._onMissionComplete(data));
    missionEngine.on('achievement', (data) => this._showAchievement(data));
    missionEngine.on('quests-generated', () => this._renderQuests());

    this.refresh();
    this._subscribed = true;
    this._startTimerTick();
    // Initial suggestion run
    decisionEngine.suggestMission().then(() => this._renderSuggestions());

    this._obtainLocation();

    // Geofence: auto-complete mission when user is within 100m of destination
    this._geofenceInterval = setInterval(() => this._checkGeofence(), 10000);

    setInterval(async () => {
      predictionEngine.predict();
      this._updateInsights();
      await decisionEngine.suggestMission();
      this._renderSuggestions();
    }, 10000);
  }

  _obtainLocation() {
    const applyCoords = (lat, lon) => {
      toolEngine.setLocation(lat, lon);
      store.set('user.currentCoords', { lat, lon });
      if (this._map) {
        this._map.setView([lat, lon], 14);
        this._updateMapMarkers();
      }
    };

    let resolved = false;

    if (navigator.geolocation) {
      const onSuccess = (pos) => {
        if (resolved) return;
        resolved = true;
        applyCoords(pos.coords.latitude, pos.coords.longitude);
      };
      const opts = { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 };
      navigator.geolocation.getCurrentPosition(onSuccess, () => {}, opts);
    }

    setTimeout(async () => {
      if (resolved) return;
      try {
        const res = await fetch('/api/my-location');
        const data = await res.json();
        if (data.lat) {
          applyCoords(data.lat, data.lon);
          resolved = true;
        }
      } catch (e) {}
    }, 3000);
  }

  refresh() {
    this._renderLevel();
    this._renderMission();
    this._renderMap();
    this._renderQuests();
    this._renderProgress();
    this._renderStreaks();
    this._renderStats();
    this._renderSuggestions();
    this._updateInsights();
  }

  _renderLevel() {
    const xp = store.get('user.xp') || 0;
    const level = store.get('user.level') || 1;
    const maxXp = getXPForLevel(level);
    const pct = Math.min((xp / maxXp) * 100, 100);

    const levelEl = document.querySelector('.level-num');
    const titleEl = document.querySelector('.level-title');
    const xpEl = document.getElementById('xpCurrent');
    const xpMaxEl = document.getElementById('xpMax');
    const xpFill = document.getElementById('xpBarFill');

    if (levelEl) levelEl.textContent = `LEVEL ${level}`;
    if (titleEl) titleEl.textContent = getLevelTitle(level);
    if (xpEl) xpEl.textContent = Math.round(xp);
    if (xpMaxEl) xpMaxEl.textContent = maxXp;
    if (xpFill) xpFill.style.width = pct + '%';
  }

  _renderMission() {
    const mission = store.get('missions.current');
    const pending = store.get('missions.pending') || [];
    const allMissions = mission ? [mission, ...pending] : [...pending];

    const container = document.getElementById('activeMissionCard');
    if (!container) return;

    const header = container.querySelector('.card-header');
    container.innerHTML = '';
    if (header) container.appendChild(header);

    if (allMissions.length === 0) {
      container.innerHTML += `
        <div class="mission-name">No active mission</div>
        <div class="mission-details">
          <div class="mission-detail"><span class="detail-label">STATUS</span><span class="detail-val">Standing by</span></div>
        </div>
        <div class="mission-progress">
          <div class="mission-progress-track">
            <div class="mission-progress-fill" id="missionProgressFill" style="width:0%"></div>
          </div>
          <span class="mission-progress-label">IDLE</span>
        </div>
      `;
      return;
    }

    allMissions.slice(0, 10).forEach((m, i) => {
      const isCurrent = i === 0 && !!mission;
      const isChallenge = m.type === 'challenge';
      const timerActive = m.timer?.active;
      const timerPaused = m.timer && !m.timer.active && m.timer.remaining > 0 && m.timer.remaining < m.timer.duration;
      const timerRemaining = m.timer?.remaining || 0;
      const timerDisplay = timerRemaining > 0 ? this._formatTime(timerRemaining) : '';
      const isSelected = store.get('map.selectedMissionId') === m.id;

      const card = document.createElement('div');
      card.className = 'mission-subcard' + (isSelected ? ' mission-selected' : '');
      card.dataset.missionId = m.id;

      const pip = missionEngine.getPipelineProgress(m);
      const pipStr = pip.total > 0 ? `${pip.done}/${pip.total} steps` : '';
      const isExpanded = store.get(`pipeline.expanded.${m.id}`) || false;

      card.innerHTML = `
        <div class="mission-subcard-header">
          <span class="mission-subcard-title">${m.title}</span>
          <span class="mission-subcard-badge ${isChallenge ? 'badge-challenge' : 'badge-mission'}">${isChallenge ? 'CHALLENGE' : 'MISSION'}</span>
          ${pipStr ? `<span class="pipeline-progress-label">${pipStr}</span>` : ''}
        </div>
        ${m.notes ? `<div class="mission-notes">${m.notes}</div>` : ''}
        ${timerDisplay ? `<div class="mission-timer" data-mission-id="${m.id}">⏱ ${timerDisplay}</div>` : ''}
        <div class="mission-details">
          <div class="mission-detail"><span class="detail-label">STATUS</span><span class="detail-val">${isCurrent ? (timerActive ? 'ACTIVE' : (timerPaused ? 'PAUSED' : 'READY')) : 'QUEUED'}</span></div>
          <div class="mission-detail"><span class="detail-label">REWARD</span><span class="detail-val reward">+${m.xp || 100} XP</span></div>
        </div>
        ${isCurrent ? `
        <div class="mission-progress">
          <div class="mission-progress-track">
            <div class="mission-progress-fill" style="width:${m.progress || 0}%"></div>
          </div>
          <span class="mission-progress-label">${timerActive ? 'RUNNING' : timerPaused ? 'PAUSED' : 'READY'}</span>
        </div>` : ''}
        ${m.comic ? `<img class="mission-subcard-comic" src="${m.comic}" alt="" loading="lazy">` : ''}
        <div class="pipeline-steps ${isExpanded ? 'pipeline-open' : ''}" data-mission-id="${m.id}">
          ${(m.pipeline || []).map(s => `
            <label class="pipeline-step ${s.done ? 'step-done' : ''}">
              ${isCurrent ? `<input type="checkbox" class="pipeline-checkbox" data-step-id="${s.id}" ${s.done ? 'checked disabled' : ''}>` : `<span class="pipeline-step-bullet">${s.done ? '✓' : '○'}</span>`}
              <span class="step-title">${s.title}</span>
              <span class="step-check">${s.done ? '✓' : ''}</span>
            </label>
          `).join('')}
        </div>
        <div class="mission-details" style="margin-top:4px;">
          <div class="mission-detail"><span class="detail-label">LOCATION</span><span class="detail-val">${m.location || 'None'}</span></div>
        </div>
        <div class="mission-subcard-actions">
          ${isCurrent ? (timerActive ? `<button class="mission-pause-sm">⏸ Pause</button>` : `<button class="mission-start-sm">▶ Start</button>`) : ''}
          ${isCurrent ? `<button class="mission-confirm-sm">✓ Complete</button>` : ''}
          <button class="mission-remove-sm">✕ Remove</button>
        </div>
      `;

      container.appendChild(card);

      // Click card header/title → toggle pipeline or select mission
      const headerEl = card.querySelector('.mission-subcard-header');
      headerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const newVal = !store.get(`pipeline.expanded.${m.id}`);
        store.set(`pipeline.expanded.${m.id}`, newVal);
        this._renderMission();
      });

      // Click elsewhere on card (not header, not buttons) → select mission for map
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        if (e.target.closest('.mission-subcard-header')) return;
        if (e.target.closest('.pipeline-step')) return;
        this._selectMission(m.id);
      });

      // Pipeline checkbox clicks
      card.querySelectorAll('.pipeline-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
          e.stopPropagation();
          const stepId = cb.dataset.stepId;
          const result = missionEngine.completePipelineStep(m.id, stepId);
          if (result && !result.completed) {
            store.set(`pipeline.expanded.${m.id}`, true);
            this._showAchievement({ title: 'Step Complete', text: `+${result.stepXp} XP · ${result.doneSteps}/${result.totalSteps}`, sub: m.pipeline.find(s => s.id === stepId)?.title || '' });
          }
          this.refresh();
        });
      });

      const removeBtn = card.querySelector('.mission-remove-sm');
      if (removeBtn) removeBtn.addEventListener('click', (e) => { e.stopPropagation(); this._removeMission(m.id); });

      const confirmBtn = card.querySelector('.mission-confirm-sm');
      if (confirmBtn) confirmBtn.addEventListener('click', (e) => { e.stopPropagation(); this._completeCurrentMission(m); });

      const startBtn = card.querySelector('.mission-start-sm');
      if (startBtn) startBtn.addEventListener('click', (e) => { e.stopPropagation(); this._startMissionTimer(m); });

      const pauseBtn = card.querySelector('.mission-pause-sm');
      if (pauseBtn) pauseBtn.addEventListener('click', (e) => { e.stopPropagation(); this._pauseMissionTimer(m); });
    });
  }

  _startTimerTick() {
    if (this._timerInterval) return;
    this._timerInterval = setInterval(() => {
      const mission = store.get('missions.current');
      if (!mission?.timer?.active) return;
      const elapsed = Date.now() - (mission.timer._lastTick || Date.now());
      mission.timer._lastTick = Date.now();
      mission.timer.remaining = Math.max(0, mission.timer.remaining - elapsed);
      mission.progress = Math.min(100, ((mission.timer.duration - mission.timer.remaining) / mission.timer.duration) * 100);
      if (mission.timer.remaining <= 0) {
        mission.timer.active = false;
        mission.status = 'failed';
        this._showAchievement({ title: 'TIME UP!', text: 'Challenge failed', sub: mission.title });
      }
      store.set('missions.current', { ...mission });
    }, 250);
  }

  _startMissionTimer(mission) {
    if (!mission.timer) return;
    mission.timer.active = true;
    mission.timer._lastTick = Date.now();
    mission.status = 'active';
    store.set('missions.current', { ...mission });
  }

  _pauseMissionTimer(mission) {
    if (!mission.timer) return;
    mission.timer.active = false;
    mission.status = 'paused';
    store.set('missions.current', { ...mission });
  }

  _formatTime(ms) {
    const totalSec = Math.ceil(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }

  _renderMap() {
    if (!this._map) this._initLeafletMap();
    this._updateMapMarkers();

    const mapStatus = document.getElementById('mapStatus');
    const selectedId = store.get('map.selectedMissionId');
    const currentMission = store.get('missions.current');
    const pending = store.get('missions.pending') || [];
    const allM = currentMission ? [currentMission, ...pending] : [...pending];
    const selected = selectedId ? allM.find(m => m.id === selectedId) : null;

    if (mapStatus) {
      if (selected) {
        mapStatus.textContent = `📍 ${selected.title} @ ${selected.location || 'Unknown'}`;
      } else if (currentMission?.location) {
        mapStatus.textContent = `📍 ${currentMission.title} @ ${currentMission.location}`;
      } else if (currentMission) {
        mapStatus.textContent = `🎯 ${currentMission.title}`;
      } else {
        mapStatus.textContent = 'Standing by';
      }
    }
  }

  _initLeafletMap() {
    const el = document.getElementById('leafletMap');
    if (!el || this._map) return;

    this._map = L.map(el, {
      zoomControl: true,
      attributionControl: false,
      center: [20, 0],
      zoom: 2,
    });

    const saved = store.get('map.tileLayer') || 'street';
    this._switchTileLayer(saved);

    setTimeout(() => { if (this._map) this._map.invalidateSize(); }, 150);

    this._layers = {
      user: L.layerGroup().addTo(this._map),
      missions: L.layerGroup().addTo(this._map),
      quests: L.layerGroup().addTo(this._map),
      destinations: L.layerGroup().addTo(this._map),
      route: L.layerGroup().addTo(this._map),
    };

    this._geoCache = {};

    const coords = store.get('user.currentCoords');
    if (coords?.lat) this._map.setView([coords.lat, coords.lon], 14);

    // Wire map toggle buttons
    document.querySelectorAll('.map-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        this._switchTileLayer(btn.dataset.layer);
      });
    });
  }

  _switchTileLayer(key) {
    if (this._tileLayer) this._map.removeLayer(this._tileLayer);
    const cfg = TILE_LAYERS[key];
    if (!cfg) return;
    this._tileLayer = L.tileLayer(cfg.url, {
      maxZoom: 19,
      attribution: cfg.attr,
    }).addTo(this._map);
    store.set('map.tileLayer', key);
    // Update legend button active state
    document.querySelectorAll('.map-toggle').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.layer === key);
    });
  }

  _updateMapMarkers() {
    if (!this._map || !this._layers) return;

    this._layers.user.clearLayers();
    this._layers.missions.clearLayers();
    this._layers.quests.clearLayers();
    this._layers.destinations.clearLayers();
    this._layers.route.clearLayers();

    const selectedId = store.get('map.selectedMissionId');
    const coords = store.get('user.currentCoords');

    // 1. User dot
    if (coords?.lat && coords?.lon) {
      this._layers.user.addLayer(
        L.marker([coords.lat, coords.lon], {
          icon: L.icon({
            iconUrl: '/spidey-marker.png',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16],
          }),
          zIndexOffset: 1000,
        })
      );
      this._layers.user.addLayer(
        L.circleMarker([coords.lat, coords.lon], {
          radius: 8, color: '#ff3b30', fillColor: '#ff3b30', fillOpacity: 1,
          weight: 2, opacity: 0.8, zIndexOffset: 1001,
        })
      );
    }

    // 2. Mission markers
    const current = store.get('missions.current');
    const pending = store.get('missions.pending') || [];
    const allMissions = current ? [current, ...pending] : [...pending];

    allMissions.forEach((m) => {
      if (!m.location) return;
      const placeMarker = (lat, lon) => {
        if (!this._isValidCoord(lat, lon)) return;
        const highlight = selectedId === m.id;
        const marker = L.marker([lat, lon], {
          icon: L.icon({
            iconUrl: '/mission-marker.png',
            iconSize: highlight ? [40, 40] : [32, 32],
            iconAnchor: highlight ? [20, 20] : [16, 16],
            popupAnchor: [0, -20],
          }),
        });
        marker.bindPopup(`
          <div class="popup-mission-title">${highlight ? '▶ ' : ''}${m.title}</div>
          <div class="popup-mission-desc">${m.notes || ''}</div>
          <div class="popup-mission-xp">+${m.xp || 100} XP${m.type === 'challenge' ? ' · CHALLENGE' : ''}</div>
        `);
        marker.on('click', () => this._selectMission(m.id));
        this._layers.missions.addLayer(marker);

        // If this mission is selected, draw route to it
        if (highlight && coords?.lat && coords?.lon) {
          this._drawRoute(lat, lon);
          this._map.setView([coords.lat, coords.lon], 14);
        }
      };

      if (m.locationCoords?.lat && m.locationCoords?.lon && this._isValidCoord(m.locationCoords.lat, m.locationCoords.lon)) {
        placeMarker(m.locationCoords.lat, m.locationCoords.lon);
      } else {
        this._geocodeAndPlace(m.location, placeMarker);
      }
    });

    // 3. Side quest markers
    const quests = store.get('sideQuests') || [];
    quests.filter(q => !q.completed && q.location).forEach((q) => {
      const placeQuest = (lat, lon) => {
        const marker = L.marker([lat, lon], {
          icon: L.icon({
            iconUrl: '/sidequest-marker.png',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16],
          }),
        });
        marker.bindPopup(`<div class="popup-mission-title" style="color:#5ce1ff;">Side Quest</div><div class="popup-mission-desc">${q.title}</div><div class="popup-mission-xp">+${q.xp || 50} XP</div>`);
        this._layers.quests.addLayer(marker);
      };
      if (q.locationCoords?.lat && q.locationCoords?.lon) {
        placeQuest(q.locationCoords.lat, q.locationCoords.lon);
      } else {
        this._geocodeAndPlace(q.location, placeQuest);
      }
    });
  }

  async _routeToSearch(mission, locationName) {
    const apiKey = '6a5127e664440025278592cen839f1f';
    this._geocodeAndPlace(locationName, (lat, lon) => {
      const dest = store.get('map.destination');
      if (dest) {
        dest.lat = lat;
        dest.lon = lon;
        store.set('map.destination', dest);
      }
    });
  }

  async _drawRoute(destLat, destLon) {
    this._layers.route.clearLayers();
    const coords = store.get('user.currentCoords');
    if (!coords?.lat || !coords?.lon) return;

    const origin = [coords.lat, coords.lon];
    const dest = [destLat, destLon];

    // Try OSRM for road-following route
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${dest[1]},${dest[0]}?geometries=geojson&overview=full`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.code === 'Ok' && data.routes?.[0]?.geometry?.coordinates) {
        const pts = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
        this._layers.route.addLayer(
          L.polyline(pts, { color: '#ff6b00', weight: 3, opacity: 0.7 })
        );
        this._map.fitBounds(L.latLngBounds(origin, dest), { padding: [40, 40] });
        return;
      }
    } catch {}

    // Fallback: straight line
    this._layers.route.addLayer(
      L.polyline([origin, dest], { color: '#ff6b00', weight: 3, opacity: 0.7, dashArray: '8, 8' })
    );
    this._map.fitBounds(L.latLngBounds(origin, dest), { padding: [40, 40] });
  }

  _isValidCoord(lat, lon) {
    if (lat === 0 && lon === 0) return false;
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return false;
    const coords = store.get('user.currentCoords');
    if (coords?.lat && coords?.lon) {
      const dist = Math.sqrt((lat - coords.lat) ** 2 + (lon - coords.lon) ** 2);
      if (dist > 90) return false; // More than ~10,000km from user is suspicious
    }
    return true;
  }

  async _routeToMission(m) {
    const mapStatus = document.getElementById('mapStatus');
    if (mapStatus) mapStatus.textContent = `🔍 ${m.title} @ ${m.location}...`;

    const coords = store.get('user.currentCoords');

    if (coords?.lat && coords?.lon) {
      this._geocodeAndPlace(m.location, (lat, lon) => {
        store.set('map.destination', { name: m.location, time: Date.now(), lat, lon });
        this._drawRoute(lat, lon);
      });
    } else if (navigator.geolocation) {
      this._geocodeAndPlace(m.location, (lat, lon) => {
        store.set('map.destination', { name: m.location, time: Date.now(), lat, lon });
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            store.set('user.currentCoords', { lat: latitude, lon: longitude });
            this._drawRoute(lat, lon);
          },
          () => { this._map?.setView([lat, lon], 14); }
        );
      });
    } else {
      this._geocodeAndPlace(m.location, (lat, lon) => {
        store.set('map.destination', { name: m.location, time: Date.now(), lat, lon });
        this._map?.setView([lat, lon], 14);
      });
    }
  }

  async _geocode(query, callback) {
    const cached = this._geoCache[query];
    if (cached) { callback(cached.lat, cached.lon); return; }

    const coords = store.get('user.currentCoords');
    let url = `/geocode?q=${encodeURIComponent(query)}`;
    if (coords?.lat) url += `&lat=${coords.lat}&lon=${coords.lon}`;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      const data = await res.json();
      if (data?.lat && data?.lon) {
        const lat = parseFloat(data.lat);
        const lon = parseFloat(data.lon);
        this._geoCache[query] = { lat, lon };
        callback(lat, lon);
        return;
      }
    } catch {}
    // Fallback: map center
    const center = this._map ? this._map.getCenter() : { lat: 20, lng: 78 };
    this._geoCache[query] = { lat: center.lat, lon: center.lng };
    callback(center.lat, center.lng);
  }

  _geocodeAndPlace(query, callback) {
    const cached = this._geoCache[query];
    if (cached) { callback(cached.lat, cached.lon); return; }
    this._geocode(query, callback);
  }

  _checkGeofence() {
    const mission = store.get('missions.current');
    const selectedId = store.get('map.selectedMissionId');
    const coords = store.get('user.currentCoords');
    if (!mission || !selectedId || !coords?.lat || !coords?.lon) return;

    const pending = store.get('missions.pending') || [];
    const allM = [mission, ...pending];
    const selected = allM.find(m => m.id === selectedId);
    if (!selected?.locationCoords?.lat || !selected?.locationCoords?.lon) return;

    const R = 6371000;
    const toRad = (d) => d * Math.PI / 180;
    const dLat = toRad(selected.locationCoords.lat - coords.lat);
    const dLon = toRad(selected.locationCoords.lon - coords.lon);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(coords.lat)) * Math.cos(toRad(selected.locationCoords.lat)) * Math.sin(dLon / 2) ** 2;
    const dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    if (dist < 100) {
      missionEngine.completeMission(selected.id);
      if (store.get('map.selectedMissionId') === selected.id) {
        store.set('map.selectedMissionId', null);
      }
      const pendingList = store.get('missions.pending') || [];
      if (pendingList.length > 0) {
        const next = pendingList.shift();
        store.set('missions.current', next);
        store.set('missions.pending', pendingList);
      } else {
        store.set('missions.current', null);
      }
      this._showAchievement({ title: 'LOCATION REACHED!', text: `+${selected.xp || 100} XP`, sub: selected.title });
    }
  }

  _renderQuests() {
    const quests = store.get('sideQuests') || [];
    const container = document.getElementById('questList');
    if (!container) return;

    if (quests.length === 0 || quests.every(q => q.completed)) {
      container.innerHTML = '<div style="font-size:11px;color:rgba(255,255,255,0.4);">No quests — chat with Spidey to generate some!</div>';
      return;
    }

    container.innerHTML = quests.map(q => `
      <label class="quest-item ${q.completed ? 'completed' : ''}" data-quest-id="${q.id}">
        <input type="checkbox" ${q.completed ? 'checked' : ''}>
        <span class="quest-text">${q.title}${q.recurring ? ` <span class="quest-badge-recur">${q.frequency === 'daily' ? 'DAILY' : q.frequency === 'weekdays' ? 'WEEKDAY' : 'WEEKLY'}</span>` : ''}</span>
        <span class="quest-xp">+${q.xp}XP</span>
      </label>
    `).join('');

    container.querySelectorAll('.quest-item input').forEach(cb => {
      cb.addEventListener('change', function() {
        const id = this.closest('.quest-item').dataset.questId;
        if (this.checked) missionEngine.completeQuest(id);
      });
    });
  }

  _renderProgress() {
    const completed = store.get('missions.completed') || [];
    const catMap = { productivity: 0, creativity: 0, fitness: 0, learning: 0, fun: 0 };
    const catTotal = { productivity: 3, creativity: 3, fitness: 3, learning: 3, fun: 3 };

    for (const m of completed) {
      const cat = m.category || 'productivity';
      if (catMap[cat] !== undefined) catMap[cat]++;
    }

    const categoryKeys = Object.keys(catMap);
    const fills = document.querySelectorAll('.cat-fill');
    const pcts = document.querySelectorAll('.cat-pct');

    categoryKeys.forEach((cat, i) => {
      const pct = Math.round((catMap[cat] / catTotal[cat]) * 100);
      if (fills[i]) fills[i].style.width = Math.min(pct, 100) + '%';
      if (pcts[i]) pcts[i].textContent = Math.min(pct, 100) + '%';
    });
  }

  _renderStreaks() {
    const categories = ['productivity', 'creativity', 'fitness', 'learning', 'fun'];
    const emojiMap = { productivity: '⚡', creativity: '🎨', fitness: '💪', learning: '📚', fun: '🎮' };
    const streaksList = document.querySelector('.streaks-list');
    if (!streaksList) return;

    const active = [];
    for (const cat of categories) {
      const streak = habitEngine.getStreaks(cat);
      if (streak.current > 0) {
        active.push({ category: cat, days: streak.current, emoji: emojiMap[cat] || '📌' });
      }
    }

    if (active.length === 0) {
      streaksList.innerHTML = '<div style="font-size:11px;color:rgba(255,255,255,0.4);">No streaks yet. Start a routine!</div>';
      return;
    }

    const top3 = active.sort((a, b) => b.days - a.days).slice(0, 3);
    streaksList.innerHTML = top3.map(s => `
      <div class="streak-item">
        <span class="streak-emoji">${s.emoji}</span>
        <span class="streak-name">${s.category.charAt(0).toUpperCase() + s.category.slice(1)}</span>
        <span class="streak-count">${s.days} Days</span>
      </div>
    `).join('');
  }

  _renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;

    const completed = store.get('missions.completed') || [];
    const failed = store.get('missions.failed') || [];
    const level = store.get('user.level') || 1;

    const period = store.get('stats.period') || 'today';
    const internal = store.get('stats.internal') || 0; // offset for week/month nav

    function dateKey(d) {
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    }
    function inRange(d, start, end) {
      return d >= start && d <= end;
    }
    function getWeekDates(offset) {
      const now = new Date();
      const day = now.getDay();
      const diff = now.getDate() - day + (day === 0 ? -6 : 1) - offset * 7;
      const mon = new Date(now);
      mon.setDate(diff);
      const sun = new Date(mon);
      sun.setDate(mon.getDate() + 6);
      return { start: mon, end: sun };
    }
    function getMonthDates(offset) {
      const now = new Date();
      const d = new Date(now.getFullYear(), now.getMonth() - offset, 1);
      const start = d;
      const end = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      return { start, end };
    }

    let filtered, periodLabel, prevLabel, nextLabel, rangeStart, rangeEnd;
    const now = new Date();
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    if (period === 'today') {
      const todayKey = dateKey(now);
      filtered = completed.filter(m => m.completedAt && dateKey(new Date(m.completedAt)) === todayKey);
      periodLabel = 'Today';
      rangeStart = new Date(now); rangeStart.setHours(0,0,0,0);
      rangeEnd = new Date(now); rangeEnd.setHours(23,59,59,999);
    } else if (period === 'week') {
      const w = getWeekDates(internal);
      rangeStart = w.start; rangeEnd = w.end;
      periodLabel = dateKey(rangeStart) + ' &ndash; ' + dateKey(rangeEnd);
      prevLabel = '‹ Last Week';
      nextLabel = 'Next Week ›';
      filtered = completed.filter(m => m.completedAt && inRange(new Date(m.completedAt), rangeStart, rangeEnd));
    } else {
      const m = getMonthDates(internal);
      rangeStart = m.start; rangeEnd = m.end;
      periodLabel = monthNames[rangeStart.getMonth()] + ' ' + rangeStart.getFullYear();
      prevLabel = '‹ ' + monthNames[(rangeStart.getMonth() - 1 + 12) % 12];
      nextLabel = monthNames[(rangeStart.getMonth() + 1) % 12] + ' ›';
      filtered = completed.filter(m => m.completedAt && inRange(new Date(m.completedAt), rangeStart, rangeEnd));
    }

    const periodXp = filtered.reduce((sum, m) => sum + (m.xp || 0), 0);
    const periodCount = filtered.length;
    const periodFailed = failed.filter(m => m.completedAt && inRange(new Date(m.completedAt), rangeStart, rangeEnd)).length;
    const periodRate = (periodCount + periodFailed) > 0 ? Math.round((periodCount / (periodCount + periodFailed)) * 100) : 0;

    // Bar chart for selected period
    const bars = [];
    if (period === 'today') {
      for (let h = 0; h < 24; h++) {
        const xp = filtered.filter(m => {
          if (!m.completedAt) return false;
          const md = new Date(m.completedAt);
          return md.getHours() === h;
        }).reduce((s, m) => s + (m.xp || 0), 0);
        bars.push({ label: h + 'h', xp });
      }
    } else if (period === 'week') {
      const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
      for (let i = 0; i < 7; i++) {
        const d = new Date(rangeStart);
        d.setDate(d.getDate() + i);
        const key = dateKey(d);
        const xp = filtered.filter(m => m.completedAt && dateKey(new Date(m.completedAt)) === key).reduce((s, m) => s + (m.xp || 0), 0);
        bars.push({ label: days[i], xp });
      }
    } else {
      const daysInMonth = new Date(rangeStart.getFullYear(), rangeStart.getMonth() + 1, 0).getDate();
      const step = Math.max(1, Math.floor(daysInMonth / 7));
      for (let i = 0; i < daysInMonth; i += step) {
        const d = new Date(rangeStart);
        d.setDate(d.getDate() + i);
        const e = new Date(rangeStart);
        e.setDate(Math.min(d.getDate() + step - 1, daysInMonth));
        let xp = 0;
        for (let j = d.getDate(); j <= e.getDate(); j++) {
          const k = dateKey(new Date(rangeStart.getFullYear(), rangeStart.getMonth(), j));
          xp += filtered.filter(m => m.completedAt && dateKey(new Date(m.completedAt)) === k).reduce((s, m) => s + (m.xp || 0), 0);
        }
        bars.push({ label: d.getDate() + '/' + (rangeStart.getMonth()+1), xp });
      }
    }
    const maxBar = Math.max(...bars.map(b => b.xp), 1);
    const barsHtml = bars.map(b => `
      <div class="stats-bar-col">
        <div class="stats-bar" style="height:${(b.xp / maxBar) * 100}%"></div>
        <span class="stats-bar-label">${b.label}</span>
      </div>
    `).join('');

    const circ = 2 * Math.PI * 28;
    const offset = circ - (periodRate / 100) * circ;

    // Show day detail if a day is selected
    const selectedDateKey = store.get('stats.selectedDay');
    const missionsOnDay = selectedDateKey
      ? completed.filter(m => m.completedAt && dateKey(new Date(m.completedAt)) === selectedDateKey)
      : [];

    // Keep heatmap as 28-day static, cells are clickable
    const heatmapDays = [];
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = dateKey(d);
      const hasActivity = completed.some(m => m.completedAt && dateKey(new Date(m.completedAt)) === key);
      const habits = store.get('habits.detected') || [];
      const dayOfWeek = d.getDay();
      heatmapDays.push({ key, active: hasActivity || habits.some(h => h.days?.includes(dayOfWeek)) ? 1 : 0 });
    }
    const heatmapHtml = heatmapDays.map((v, i) => `
      <span class="heatmap-cell ${v.active ? 'heatmap-active' : ''} ${selectedDateKey === v.key ? 'heatmap-current' : ''}" data-date="${v.key}" style="grid-column:${(i%7)+1};grid-row:${Math.floor(i/7)+1}"></span>
    `).join('');
    const bestStreak = Math.max(...(store.get('habits.detected') || []).map(s => s.days || 0), 0);
    const totalMissions = completed.length + (store.get('missions.pending') || []).length + (store.get('missions.current') ? 1 : 0);

    const periodButtons = `
      <div class="stats-period-bar">
        <button class="stats-period-btn ${period === 'today' ? 'active' : ''}" data-period="today">Today</button>
        <button class="stats-period-btn ${period === 'week' ? 'active' : ''}" data-period="week">Week</button>
        <button class="stats-period-btn ${period === 'month' ? 'active' : ''}" data-period="month">Month</button>
      </div>
    `;

    const navHtml = (period !== 'today') ? `
      <div class="stats-nav-bar">
        ${prevLabel ? `<span class="stats-nav-btn" data-dir="-1">${prevLabel}</span>` : '<span></span>'}
        <span class="stats-nav-label">${periodLabel}</span>
        ${nextLabel ? `<span class="stats-nav-btn" data-dir="1">${nextLabel}</span>` : '<span></span>'}
      </div>
    ` : '';

    el.innerHTML = `
      ${periodButtons}
      ${navHtml}
      <div class="stats-row">
        <div class="stats-chart">
          <div class="stats-chart-title">XP (${period === 'today' ? '24h' : period === 'week' ? '7d' : periodLabel})</div>
          <div class="stats-bar-chart">${barsHtml}</div>
        </div>
        <div class="stats-ring">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5"/>
            <circle cx="36" cy="36" r="28" fill="none" stroke="#5ce1ff" stroke-width="5"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
              stroke-linecap="round" transform="rotate(-90,36,36)"/>
            <text x="36" y="36" text-anchor="middle" dominant-baseline="central"
              fill="#fff" font-family="Orbitron" font-size="14" font-weight="700">${periodRate}%</text>
          </svg>
          <div class="stats-ring-label">Complete</div>
        </div>
      </div>
      <div class="stats-row">
        <div class="stats-period-info">
          <div class="stats-period-stat"><span class="stats-period-num">${periodXp}</span> XP</div>
          <div class="stats-period-stat"><span class="stats-period-num">${periodCount}</span> Done</div>
          <div class="stats-period-stat"><span class="stats-period-num">${bestStreak}d</span> Streak</div>
        </div>
      </div>
      <div class="stats-row">
        <div class="stats-heatmap">
          <div class="stats-chart-title">Activity (28d)</div>
          <div class="heatmap-grid">${heatmapHtml}</div>
        </div>
        <div class="stats-summary">
          <div class="stats-summary-line">${totalMissions} missions · Level ${level}</div>
        </div>
      </div>
      ${selectedDateKey ? `
      <div class="stats-day-detail">
        <div class="stats-day-header">
          <span>${selectedDateKey}</span>
          <span class="stats-day-close" data-close-day>✕</span>
        </div>
        ${missionsOnDay.length === 0 ? '<div class="stats-day-empty">No missions</div>' : missionsOnDay.map(m => `
          <div class="stats-day-mission">
            <span class="stats-day-title">${m.title}</span>
            <span class="stats-day-xp">+${m.xp || 100} XP</span>
          </div>
        `).join('')}
      </div>
      ` : ''}
    `;

    // Event listeners
    el.querySelectorAll('.stats-period-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        store.set('stats.period', btn.dataset.period);
        store.set('stats.internal', 0);
        store.set('stats.selectedDay', null);
        this._renderStats();
      });
    });
    el.querySelectorAll('.stats-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cur = store.get('stats.internal') || 0;
        store.set('stats.internal', cur + parseInt(btn.dataset.dir));
        store.set('stats.selectedDay', null);
        this._renderStats();
      });
    });
    el.querySelectorAll('.heatmap-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const key = cell.dataset.date;
        store.set('stats.selectedDay', key === store.get('stats.selectedDay') ? null : key);
        this._renderStats();
      });
    });
    el.querySelector('[data-close-day]')?.addEventListener('click', () => {
      store.set('stats.selectedDay', null);
      this._renderStats();
    });
  }

  _renderSuggestions() {
    const el = document.getElementById('suggestContent');
    if (!el) return;
    const list = store.get('suggestions.list') || [];
    if (list.length === 0) {
      el.innerHTML = '<span class="suggest-idle">Waiting for opportunity...</span>';
      return;
    }
    el.innerHTML = list.map(s => `
      <div class="suggest-item" data-id="${s.id}">
        <div class="suggest-title">${s.title}</div>
        <div class="suggest-notes">${s.notes}</div>
        <div class="suggest-footer">
          <span class="suggest-xp">+${s.xp} XP</span>
          <span class="suggest-reason">${s.reason || ''}</span>
        </div>
        <div class="suggest-actions">
          <button class="suggest-accept" data-suggest-id="${s.id}">✓ Accept</button>
          <button class="suggest-dismiss" data-suggest-id="${s.id}">✕ Dismiss</button>
        </div>
      </div>
    `).join('');

    el.querySelectorAll('.suggest-accept').forEach(btn => {
      btn.addEventListener('click', () => {
        decisionEngine.acceptSuggestion(btn.dataset.suggestId);
        this._renderSuggestions();
        this.refresh();
      });
    });
    el.querySelectorAll('.suggest-dismiss').forEach(btn => {
      btn.addEventListener('click', () => {
        decisionEngine.dismissSuggestion(btn.dataset.suggestId);
        this._renderSuggestions();
      });
    });
  }

  _updateInsights() {
    const insights = store.get('insights') || [];
    const el = document.getElementById('insightContent');
    if (!el || insights.length === 0) return;
    let idx = 0;

    const rotate = () => {
      idx = (idx + 1) % insights.length;
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = insights[idx];
        el.style.opacity = '1';
      }, 500);
    };

    if (!this._insightInterval) {
      el.textContent = insights[0];
      this._insightInterval = setInterval(rotate, 8000);
    }
  }

  _selectMission(id) {
    const prevId = store.get('map.selectedMissionId');
    const newId = prevId === id ? null : id;
    store.set('map.selectedMissionId', newId);
    this._renderMap();
    this._renderMission();
  }

  async _completeCurrentMission(mission) {
    // Read fresh state from store to get latest timer values
    const fresh = store.get('missions.current');
    if (!fresh || fresh.id !== mission.id) return;
    if (fresh.timer) {
      fresh.timer.active = false;
      if (fresh.timer.remaining <= 0) {
        this._showAchievement({ title: 'TIME UP!', text: 'Challenge expired', sub: fresh.title });
        return;
      }
      const bonus = Math.floor(fresh.timer.remaining / 1000) * 2;
      fresh.xp = (fresh.xp || 250) + bonus;
    }
    await missionEngine.completeMission(fresh.id);
    if (store.get('map.selectedMissionId') === fresh.id) {
      store.set('map.selectedMissionId', null);
    }
    const pending = store.get('missions.pending') || [];
    if (pending.length > 0) {
      const next = pending.shift();
      store.set('missions.current', next);
      store.set('missions.pending', pending);
    }
    this.refresh();
  }

  _removeMission(id) {
    let current = store.get('missions.current');
    let pending = store.get('missions.pending') || [];

    if (current && current.id === id) {
      current = pending.length > 0 ? pending.shift() : null;
      store.set('missions.current', current);
      store.set('missions.pending', pending);
    } else {
      pending = pending.filter(m => m.id !== id);
      store.set('missions.pending', pending);
    }

    // Clear selection if the removed mission was selected
    if (store.get('map.selectedMissionId') === id) {
      store.set('map.selectedMissionId', null);
    }

    this.refresh();
  }

  _onMissionComplete(data) {
    this._showAchievement({
      title: 'MISSION COMPLETE',
      text: `+${data.xp} XP`,
      sub: 'Mission completed successfully!'
    });
    this.refresh();
  }

  _showAchievement(data) {
    const toast = document.getElementById('achievementToast');
    if (!toast) return;
    toast.querySelector('.toast-header').textContent = data.title || 'ACHIEVEMENT';
    toast.querySelector('.toast-xp').textContent = data.text || '';
    toast.querySelector('.toast-achievement').textContent = data.sub || data.achievement || '';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }
}

export const hudController = new HUDController();
