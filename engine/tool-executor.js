import { EngineBase } from './core.js';
import { store } from './data-store.js';
import { memory } from './memory-engine.js';
import { missionEngine } from './mission-engine.js';
import { hudController } from './hud-controller.js';

export class ToolExecutor extends EngineBase {
  constructor() {
    super('ToolExecutor');
    this.handlers = {
      navigate_to: this._handleNavigate.bind(this),
      create_mission: this._handleCreateMission.bind(this),
      play_media: this._handlePlayMedia.bind(this),
      check_weather: this._handleCheckWeather.bind(this),
      set_reminder: this._handleSetReminder.bind(this),
      add_knowledge: this._handleAddKnowledge.bind(this),
      set_location: this._handleSetLocation.bind(this),
    };
  }

  async execute(tools) {
    if (!tools || tools.length === 0) return [];
    const results = [];
    for (const tool of tools) {
      try {
        const handler = this.handlers[tool.name];
        if (handler) {
          const result = await handler(tool.args);
          results.push({ name: tool.name, success: true, result });
        } else {
          console.warn('No handler for tool:', tool.name);
          results.push({ name: tool.name, success: false, error: 'No handler' });
        }
      } catch (err) {
        console.warn('Tool error:', tool.name, err);
        results.push({ name: tool.name, success: false, error: err.message });
      }
    }
    return results;
  }

  _handleNavigate(args) {
    const location = args.location || args.destination;
    if (!location) return { note: 'No location provided' };

    const savedLocations = store.get('user.locations') || {};
    const coords = store.get('user.currentCoords');
    const locLower = location.toLowerCase().trim();

    if (/^(my )?current location/i.test(locLower)) {
      const dest = { name: 'Your Current Location', time: Date.now(), lat: null, lon: null };
      store.set('map.destination', dest);
      memory.remember(`destination:${Date.now()}`, dest, 0.9, 'system', 'schedule');
      this._navigateToCurrentLocation();
      return { location: 'Current Location', set: true, needsGeolocation: true };
    }

    const saved = savedLocations[locLower] || savedLocations[location];
    const destAddr = saved?.name || location;
    this._routeToDest(location, savedLocations, coords);
    memory.remember(`destination:${Date.now()}`, { name: destAddr, time: Date.now() }, 0.9, 'system', 'schedule');
    return { location: destAddr, set: true };
  }

  _routeToDest(location, savedLocations, coords) {
    const saved = savedLocations[location.toLowerCase().trim()] || savedLocations[location];
    const destAddr = saved?.name || location;

    store.set('map.destination', { name: destAddr, time: Date.now(), lat: null, lon: null });

    // Trigger geocoding + route via the search pipeline (handled in hud-controller)
    this._geocodeAndRoute(destAddr);
  }

  async _geocodeAndRoute(locationName) {
    const savedLocations = store.get('user.locations') || {};
    const saved = savedLocations[locationName.toLowerCase().trim()];
    if (saved?.lat && saved?.lon) {
      store.set('map.destination', { name: locationName, time: Date.now(), lat: saved.lat, lon: saved.lon });
      return;
    }

    // Geocode via server endpoint (scrapes Google Search)
    try {
      const coords = store.get('user.currentCoords');
      let url = `/geocode?q=${encodeURIComponent(locationName)}`;
      if (coords?.lat) url += `&lat=${coords.lat}&lon=${coords.lon}`;
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 3000);
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      if (data?.lat && data?.lon) {
        store.set('map.destination', { name: locationName, time: Date.now(), lat: parseFloat(data.lat), lon: parseFloat(data.lon) });
        return;
      }
    } catch {}

    store.set('map.destination', { name: locationName, time: Date.now(), lat: null, lon: null });
  }

  _navigateToCurrentLocation(onSuccess) {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        store.set('user.currentCoords', { lat: latitude, lon: longitude });
        if (onSuccess) onSuccess();
      },
      () => {},
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }

  async _handleCreateMission(args) {
    const title = args.title || 'New Mission';
    const notes = args.notes || '';
    const type = args.type === 'challenge' ? 'challenge' : 'mission';
    const missionLocation = (args.location || '').trim();

    // Strip time phrases mistakenly extracted as location
    const cleanLoc = missionLocation.replace(/^(?:in|for|at|by)\s+/i, '').trim();
    if (/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later|ago)?$/i.test(cleanLoc)) {
      args.location = '';
    }

    // Resolve saved location keys (home → actual address)
    const savedLocations = store.get('user.locations') || {};
    const locLower = missionLocation.toLowerCase().trim();
    const saved = missionLocation ? savedLocations[locLower] : null;
    const resolvedLocation = saved ? saved.name : missionLocation;

    // Timer logic for challenges
    let timer = null;
    if (type === 'challenge') {
      const now = Date.now();
      if (args.deadline) {
        // Parse deadline like "10pm", "Friday 5pm" — store as target timestamp
        const deadlineMs = this._parseDeadline(args.deadline);
        if (deadlineMs > now) {
          timer = { deadline: deadlineMs, duration: deadlineMs - now, remaining: deadlineMs - now, active: false, unit: 'deadline' };
        }
      } else if (args.duration) {
        const durMs = this._parseDuration(args.duration);
        if (durMs > 0) {
          timer = { deadline: now + durMs, duration: durMs, remaining: durMs, active: false, unit: 'duration' };
        }
      }
      // If no valid timer, treat as regular mission
      if (!timer) args.xp = args.xp || 100;
    }

    // XP: challenges get 250+, missions 100
    const xp = timer ? (args.xp || 250) : (args.xp || 100);

    const id = `mission_${Date.now()}`;
    const comics = [
      '/comics/comic_1.jpg', '/comics/comic_2.jpg', '/comics/comic_3.jpg',
      '/comics/comic_4.jpg', '/comics/comic_5.jpg', '/comics/comic_6.jpg',
      '/comics/comic_7.jpg', '/comics/comic_8.jpg', '/comics/comic_9.jpg',
      '/comics/comic_10.jpg', '/comics/comic_11.jpg', '/comics/comic_12.jpg',
      '/comics/comic_13.jpg',
    ];
    // Infer category from title keywords
    const lower = title.toLowerCase();
    let category = 'productivity';
    if (/study|learn|read|course|class|lecture|exam|neural|math|science|history|lesson/i.test(lower)) category = 'learning';
    else if (/gym|workout|run|jog|exercise|sport|basketball|fitness|stretch|yoga/i.test(lower)) category = 'fitness';
    else if (/draw|sketch|paint|write|music|guitar|piano|photo|creative|art|doodle|journal|poem/i.test(lower)) category = 'creativity';
    else if (/game|play|movie|watch|netflix|fun|party|hang|coffee|walk|park|social/i.test(lower)) category = 'fun';
    else if (/code|program|project|work|clean|organize|errand|meditate|productivity|task|chore/i.test(lower)) category = 'productivity';

    // Build pipeline from AI-generated steps, or auto-generate based on mission
    const rawSteps = args.steps || [];
    const pipeline = rawSteps.length > 0
      ? rawSteps.map((s, i) => ({ id: `step_${i}`, title: s, done: false }))
      : this._generateSteps(title, lower, notes).map((s, i) => ({ id: `step_${i}`, title: s, done: false }));

    const mission = {
      id,
      title,
      notes,
      pipeline,
      type,
      timer,
      xp,
      status: 'pending',
      progress: 0,
      created: Date.now(),
      category,
      comic: comics[Math.floor(Math.random() * comics.length)],
      location: resolvedLocation || '',
      locationKey: missionLocation || '',
    };

    const current = store.get('missions.current');
    const pending = store.get('missions.pending') || [];
    if (current) pending.unshift(current);
    store.set('missions.pending', pending);
    store.set('missions.current', mission);

    // If location is set, try to geocode it
    if (mission.location) {
      this._geocodeMission(mission);
    }

    memory.remember(`mission:${mission.id}`, mission, 1, 'system', 'mission');
    missionEngine.emit('mission-created', mission);
    hudController.refresh();

    return { id: mission.id, title, type, xp };
  }

  _parseDeadline(str) {
    const now = new Date();
    const lower = str.toLowerCase();
    // Try "10pm", "10:30pm"
    const timeMatch = lower.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/);
    if (timeMatch) {
      let h = parseInt(timeMatch[1]);
      const m = parseInt(timeMatch[2] || '0');
      if (timeMatch[3] === 'pm' && h < 12) h += 12;
      if (timeMatch[3] === 'am' && h === 12) h = 0;
      now.setHours(h, m, 0, 0);
      if (now.getTime() < Date.now()) now.setDate(now.getDate() + 1);
      return now.getTime();
    }
    // Try "Friday", "tomorrow" etc
    const days = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };
    for (const [day, idx] of Object.entries(days)) {
      if (lower.includes(day)) {
        const diff = (idx - now.getDay() + 7) % 7 || 7;
        now.setDate(now.getDate() + diff);
        now.setHours(23, 59, 59, 0);
        return now.getTime();
      }
    }
    if (lower.includes('tomorrow')) {
      now.setDate(now.getDate() + 1);
      now.setHours(23, 59, 59, 0);
      return now.getTime();
    }
    return 0;
  }

  _parseDuration(str) {
    const lower = str.toLowerCase();
    const hMatch = lower.match(/(\d+)\s*hours?/);
    const mMatch = lower.match(/(\d+)\s*minutes?/);
    let ms = 0;
    if (hMatch) ms += parseInt(hMatch[1]) * 3600000;
    if (mMatch) ms += parseInt(mMatch[1]) * 60000;
    return ms || 0;
  }

  async _geocodeMission(mission) {
    try {
      const coords = store.get('user.currentCoords');
      let url = `/geocode?q=${encodeURIComponent(mission.location)}`;
      if (coords?.lat) url += `&lat=${coords.lat}&lon=${coords.lon}`;
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 3000);
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      if (data?.lat && data?.lon) {
        mission.locationCoords = { lat: parseFloat(data.lat), lon: parseFloat(data.lon) };
        store.set(`missions.current`, { ...store.get('missions.current') });
      }
    } catch {}
  }

  _handlePlayMedia(args) {
    const query = args.query || args.search || '';
    const platform = args.platform || 'youtube';

    if (platform === 'youtube' && query) {
      setTimeout(() => {
        window.open(`https://m.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
      }, 1500);
      return { opened: true, query, platform };
    }
    return { opened: false, note: 'No query provided' };
  }

  async _handleCheckWeather() {
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,weathercode&timezone=auto');
      const data = await res.json();
      if (data?.current) {
        store.set('weather.current', data);
        hudController.refresh();
        return { temp: data.current.temperature_2m, code: data.current.weathercode };
      }
    } catch {}
    return { error: 'Could not fetch weather' };
  }

  _handleSetReminder(args) {
    const text = args.text || '';
    const time = args.time || '';

    if (!text) return { note: 'No reminder text' };

    const reminder = { text, time, created: Date.now() };
    const reminders = store.get('reminders') || [];
    reminders.push(reminder);
    store.set('reminders', reminders);
    memory.remember(`reminder:${Date.now()}`, reminder, 0.8, 'system', 'schedule');
    hudController.refresh();

    return { text, time };
  }

  _handleAddKnowledge(args) {
    const topic = args.topic || 'general';
    const content = args.content || '';

    if (!content) return { note: 'No content' };

    const knowledge = store.get('rag.knowledge') || {};
    if (!knowledge[topic]) knowledge[topic] = [];
    knowledge[topic].push({ content, added: Date.now() });
    store.set('rag.knowledge', knowledge);

    memory.remember(`knowledge:${topic}:${Date.now()}`, { topic, content }, 0.9, 'system', 'knowledge');
    hudController.refresh();

    return { topic, stored: true };
  }

  _handleSetLocation(args) {
    const name = args.name?.toLowerCase().trim();
    const address = args.address || args.location;
    if (!name || !address) return { note: 'Name and address required' };

    const savedLocations = store.get('user.locations') || {};
    savedLocations[name] = { name: address, lat: null, lon: null };
    store.set('user.locations', savedLocations);

    memory.remember(`location:${name}`, { name, address }, 0.9, 'system', 'schedule');
    hudController.refresh();
    return { name, address, saved: true };
  }

  _generateSteps(title, lower, notes) {
    const n = (notes || '').toLowerCase();

    if (/study|learn|read|course|class|lecture|exam|neural|math|science|history|lesson/i.test(lower)) {
      return [
        `Gather study materials for ${title}`,
        `Read and take notes on key concepts`,
        `Solve practice problems or write a summary`,
        `Review and revise weak areas`,
        `Test yourself or explain to someone else`
      ];
    }
    if (/gym|workout|run|jog|exercise|sport|basketball|fitness|stretch|yoga/i.test(lower)) {
      return [
        `Warm up with light cardio and stretching`,
        `Main workout: ${title}`,
        `Cool down with static stretches`,
        `Log your reps and progress`,
        `Hydrate and refuel`
      ];
    }
    if (/draw|sketch|paint|write|music|guitar|piano|photo|creative|art|doodle|journal|poem/i.test(lower)) {
      return [
        `Set up your workspace and tools`,
        `Brainstorm and plan the creative piece`,
        `Create the first draft / rough version`,
        `Refine and add details`,
        `Review and share your work`
      ];
    }
    if (/code|program|project|build|develop|app|website|feature|bug|fix/i.test(lower)) {
      return [
        `Plan the architecture and requirements`,
        `Set up the project structure`,
        `Implement core functionality`,
        `Test and debug edge cases`,
        `Commit, document, and deploy`
      ];
    }
    if (/clean|organize|declutter|tidy|arrange/i.test(lower)) {
      return [
        `Sort items into keep / donate / trash piles`,
        `Clean surfaces and storage areas`,
        `Organize and label everything`,
        `Dispose of trash and recyclables`,
        `Maintain the new system`
      ];
    }
    if (/cook|bake|recipe|kitchen|dinner|lunch|breakfast|meal|food/i.test(lower)) {
      return [
        `Read the recipe and gather ingredients`,
        `Prep: wash, chop, measure everything`,
        `Cook each component step by step`,
        `Plate and garnish`,
        `Enjoy and clean up`
      ];
    }
    if (/write|essay|report|blog|article|paper|document|draft/i.test(lower)) {
      return [
        `Research and outline key points`,
        `Write the first draft`,
        `Revise for clarity and flow`,
        `Proofread for grammar and typos`,
        `Format and submit / publish`
      ];
    }
    if (/date|hang|meet|party|movie|dinner|coffee|friend|social|go out/i.test(lower)) {
      return [
        `Get ready and dress appropriately`,
        `Travel to the meeting spot`,
        `Enjoy the activity together`,
        `Take photos or capture memories`,
        `Follow up and plan the next one`
      ];
    }
    // Generic fallback: break into chapters or phases
    if (/chapter|unit|module|section|part|week|day \d/i.test(lower + ' ' + n)) {
      const parts = (n.match(/(\d+)/) || [])[1];
      const count = Math.min(parseInt(parts) || 5, 10);
      return Array.from({ length: count }, (_, i) =>
        i === count - 1 ? `Review and master ${title}` : `Complete ${title} — part ${i + 1}`
      );
    }
    // Default: 5 generic actionable steps
    return [
      `Plan and prepare for: ${title}`,
      `Start working on ${title}`,
      `Take a break and review progress`,
      `Continue and complete the work`,
      `Review results and wrap up`
    ];
  }
}

export const toolExecutor = new ToolExecutor();
