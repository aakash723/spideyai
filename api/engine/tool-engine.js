import { EngineBase } from './core.js';
import { store } from './data-store.js';

export class ToolEngine extends EngineBase {
  constructor() {
    super('ToolEngine');
    this.weatherCache = null;
    this.weatherCacheTime = 0;
    this.currentLocation = null;
  }

  async getWeather(lat, lon) {
    const now = Date.now();
    if (this.weatherCache && now - this.weatherCacheTime < 600000) {
      return this.weatherCache;
    }
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,precipitation,rain,windspeed_10m&hourly=temperature_2m,precipitation_probability,weathercode&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();
      this.weatherCache = data;
      this.weatherCacheTime = now;
      store.set('weather.current', data);
      this.emit('weather-updated', data);
      return data;
    } catch (e) {
      console.warn('Weather fetch failed:', e);
      return null;
    }
  }

  isRaining(weatherData) {
    if (!weatherData) return false;
    const code = weatherData.current?.weathercode;
    if (code == null) return false;
    return code >= 51 && code <= 67 || code >= 80 && code <= 99;
  }

  getWeatherDescription(code) {
    const map = {
      0: 'Clear', 1: 'Clear', 2: 'Partly cloudy', 3: 'Cloudy',
      45: 'Foggy', 48: 'Foggy',
      51: 'Light rain', 53: 'Moderate rain', 55: 'Heavy rain',
      56: 'Freezing rain', 57: 'Freezing rain',
      61: 'Light rain', 63: 'Moderate rain', 65: 'Heavy rain',
      66: 'Freezing rain', 67: 'Freezing rain',
      71: 'Light snow', 73: 'Moderate snow', 75: 'Heavy snow',
      80: 'Light showers', 81: 'Moderate showers', 82: 'Heavy showers',
      95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
    };
    return map[code] || 'Unknown';
  }

  getTemp(weatherData) {
    return weatherData?.current?.temperature_2m ?? null;
  }

  setLocation(lat, lon) {
    this.currentLocation = { lat, lon };
    store.set('location', { lat, lon });
  }

  updateMapDestination(destLat, destLon, label) {
    store.set('map.destination', { lat: destLat, lon: destLon, label });
    this.emit('map-updated', { destLat, destLon, label });
  }
}

export const toolEngine = new ToolEngine();
