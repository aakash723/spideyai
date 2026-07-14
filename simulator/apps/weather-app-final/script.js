(function() {
  var app = document.getElementById('weatherApp');
  var currentCity = localStorage.getItem('weatherCity') || '';
  var refreshInterval = null;

  function getWeatherEmoji(main) {
    var m = (main || '').toLowerCase();
    if (m.indexOf('clear') !== -1) return '☀️';
    if (m.indexOf('cloud') !== -1) return '☁️';
    if (m.indexOf('rain') !== -1 || m.indexOf('drizzle') !== -1) return '🌧';
    if (m.indexOf('thunder') !== -1) return '⛈';
    if (m.indexOf('snow') !== -1) return '🌨';
    if (m.indexOf('mist') !== -1 || m.indexOf('fog') !== -1 || m.indexOf('haze') !== -1) return '🌫';
    if (m.indexOf('overcast') !== -1) return '☁️';
    if (m.indexOf('partly') !== -1) return '⛅';
    return '☀️';
  }

  function isNightTime() {
    var h = new Date().getHours();
    return h < 6 || h > 19;
  }

  function setBg(condition) {
    app.className = 'weather-app';
    if (isNightTime()) { app.classList.add('night-bg'); return; }
    var c = (condition || '').toLowerCase();
    if (c.indexOf('clear') !== -1) app.classList.add('sunny-bg');
    else if (c.indexOf('cloud') !== -1 || c.indexOf('overcast') !== -1) app.classList.add('cloudy-bg');
    else if (c.indexOf('rain') !== -1 || c.indexOf('drizzle') !== -1 || c.indexOf('thunder') !== -1) app.classList.add('rainy-bg');
    else app.classList.add('cloudy-bg');
  }

  function getSpideyInsight(condition, temp, city) {
    var c = (condition || '').toLowerCase();
    var emoji = getWeatherEmoji(condition);
    var insights = [];
    if (c.indexOf('thunder') !== -1) {
      insights = [
        '⚡ Thunderstorm detected! Outdoor patrols not recommended.',
        'Lightning alert! Stay indoors, web-swinging is dangerous.',
        'Storm mode activated. Monitor comms for emergency calls.'
      ];
    } else if (c.indexOf('rain') !== -1 || c.indexOf('drizzle') !== -1) {
      insights = [
        '🌧 Rain makes rooftops slippery. Extra caution advised on patrol.',
        'Criminal activity drops 30%% in rain. But web traction decreases.',
        'Good day for stealth — rain masks sound. Stay sharp.'
      ];
    } else if (c.indexOf('snow') !== -1) {
      insights = [
        '❄️ Snow in the city. Thermal suit recommended for patrol.',
        'Web fluid may freeze at altitude. Keep movements close to ground.',
        'Schools might close — be visible for kids who look up to you.'
      ];
    } else if (c.indexOf('fog') !== -1 || c.indexOf('mist') !== -1 || c.indexOf('haze') !== -1) {
      insights = [
        '🌫 Low visibility. Use spider-sense for navigation.',
        'Fog conceals threats — and helps them too. Stay alert.',
        'Perfect cover for surveillance missions.'
      ];
    } else if (c.indexOf('clear') !== -1 || c.indexOf('sunny') !== -1) {
      insights = [
        '☀️ Perfect day for web-swinging across ' + city + '!',
        'Clear skies, high visibility. Optimal patrol conditions.',
        'Great weather for rooftop training. Work on those flips!'
      ];
    } else if (c.indexOf('cloud') !== -1 || c.indexOf('overcast') !== -1) {
      insights = [
        '☁️ Clouds overhead but crime never rests. Suit up!',
        'Mild conditions. Good day for community patrols.',
        'Keep an eye on the horizon — weather can turn fast.'
      ];
    } else if (c.indexOf('partly') !== -1) {
      insights = [
        '⛅ Mixed skies. A balanced day for both patrol and training.',
        'Not too hot, not too cold. Just right for hero work.',
        'Stay adaptable — like the weather, plans can shift.'
      ];
    } else {
      insights = [
        '🕷️ Whatever the weather, with great power comes great responsibility.',
        'Suit up! ' + city + ' needs its friendly neighborhood Spider-Man.',
        'Another day to make a difference. You got this.'
      ];
    }
    return insights[Math.floor(Math.random() * insights.length)];
  }

  function getSeverity(condition) {
    var c = (condition || '').toLowerCase();
    if (c.indexOf('thunder') !== -1) return 'severe';
    if (c.indexOf('snow') !== -1) return 'warning';
    if (c.indexOf('heavy rain') !== -1) return 'warning';
    return 'normal';
  }

  function storeForHUD(data) {
    var alert = {
      city: data.city,
      temp: Math.round(data.temp),
      condition: data.condition,
      emoji: getWeatherEmoji(data.condition),
      severity: getSeverity(data.condition),
      insight: data.insight,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('spideyWeatherAlert', JSON.stringify(alert));
    try {
      window.parent.postMessage({ type: 'weatherUpdate', data: alert }, '*');
    } catch(e) {}
  }

  function updateTimestamp() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12 || 12;
    var el = document.getElementById('updateTime');
    if (el) el.textContent = 'Updated ' + h12 + ':' + (m < 10 ? '0' + m : m) + ' ' + ampm;
  }

  function applyData(data) {
    document.getElementById('cityName').textContent = data.city;
    document.getElementById('currentTemp').textContent = Math.round(data.temp) + '°';
    document.getElementById('conditionLabel').textContent = data.condition;
    document.getElementById('tempRange').textContent = 'H:' + Math.round(data.high) + '°  L:' + Math.round(data.low) + '°';
    document.getElementById('weatherSummary').textContent = data.description;

    var hScroll = document.getElementById('hourlyScroll');
    hScroll.innerHTML = '';
    data.hourly.forEach(function(h) {
      var div = document.createElement('div');
      div.className = 'hourly-item';
      div.innerHTML = '<span>' + h.time + '</span><span class="weather-icon">' + h.icon + '</span><span>' + Math.round(h.temp) + '°</span>';
      hScroll.appendChild(div);
    });

    var dayList = document.getElementById('tenDayList');
    dayList.innerHTML = '';
    data.daily.forEach(function(d) {
      var range = d.high - d.low;
      var pct = range > 0 ? (range / 30) * 100 : 50;
      if (pct > 95) pct = 95;
      if (pct < 5) pct = 5;
      var offset = Math.max(0, Math.min(90, ((d.low - 20) / 60) * 100));
      var colors = d.icon === '☀️' || d.icon === '🌤' ? 'linear-gradient(90deg, #ffcc00, #ff9500)' :
                   d.icon === '🌧' || d.icon === '🌦' || d.icon === '⛈' ? 'linear-gradient(90deg, #5ac8fa, #007aff)' :
                   'linear-gradient(90deg, #5ac8fa, #ffcc00)';
      var row = document.createElement('div');
      row.className = 'day-row';
      row.innerHTML =
        '<span class="day-name">' + d.day + '</span>' +
        '<span class="day-icon">' + d.icon + '</span>' +
        '<span class="low-temp">' + Math.round(d.low) + '°</span>' +
        '<div class="temp-bar-container"><div class="temp-bar-progress" style="width:' + pct + '%;margin-left:' + offset + '%;background:' + colors + '"></div></div>' +
        '<span class="high-temp">' + Math.round(d.high) + '°</span>';
      dayList.appendChild(row);
    });

    // Spidey insight
    var insight = getSpideyInsight(data.condition, data.temp, data.city);
    var insightEl = document.getElementById('spideyInsight');
    if (insightEl) insightEl.textContent = insight;

    // Store for main HUD
    data.insight = insight;
    storeForHUD(data);

    updateTimestamp();
  }

  function generateMockData(city) {
    var now = new Date();
    var month = now.getMonth();
    var isSummer = month >= 4 && month <= 8;
    var base = isSummer ? 78 : 55;
    var temp = base + Math.round((Math.random() * 20) - 8);
    var conditions = ['Clear', 'Cloudy', 'Partly Cloudy', 'Sunny', 'Overcast'];
    if (!isSummer) conditions = conditions.concat(['Rain', 'Drizzle']);
    var condition = conditions[Math.floor(Math.random() * conditions.length)];
    var condIcon = condition === 'Clear' || condition === 'Sunny' ? '☀️' :
                   condition === 'Partly Cloudy' ? '⛅' :
                   condition === 'Overcast' || condition === 'Cloudy' ? '☁️' :
                   condition === 'Rain' || condition === 'Drizzle' ? '🌧' : '☀️';
    var high = temp + 8 + Math.round(Math.random() * 6);
    var low = temp - 6 - Math.round(Math.random() * 6);
    var dailyIcons = ['☀️', '☀️', '⛅', '☁️', '🌧', '☀️', '⛅', '☀️', '☁️', '🌧'];
    var days = ['Today', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    var daily = days.map(function(d, i) {
      var dl = low + Math.round((Math.random() * 8) - 2);
      var dh = high + Math.round((Math.random() * 8) - 2);
      return { day: d, icon: dailyIcons[i % dailyIcons.length], low: dl, high: dh };
    });
    var hourly = [];
    hourly.push({ time: 'Now', temp: temp, icon: condIcon });
    for (var i = 1; i <= 8; i++) {
      var hh = (now.getHours() + i * 3) % 24;
      var ampm = hh >= 12 ? 'PM' : 'AM';
      var h12 = hh % 12 || 12;
      hourly.push({ time: h12 + ampm, temp: temp + Math.round((Math.random() * 10) - 4), icon: dailyIcons[i % dailyIcons.length] });
    }
    applyData({
      city: city || 'Unknown', temp: temp, condition: condition,
      high: high, low: low,
      description: condition + ' conditions. Feels like ' + (temp - 2) + '°.',
      hourly: hourly, daily: daily
    });
    setBg(condition);
  }

  function parseWttr(data) {
    try {
      var cc = data.current_condition && data.current_condition[0];
      if (!cc) return false;
      var temp = parseInt(cc.temp_F) || 70;
      var desc = cc.weatherDesc && cc.weatherDesc[0] && cc.weatherDesc[0].value || 'Clear';
      var city = data.nearest_area && data.nearest_area[0] && data.nearest_area[0].areaName && data.nearest_area[0].areaName[0] && data.nearest_area[0].areaName[0].value || 'Unknown';
      var high = temp + 10;
      var low = temp - 10;
      var condIcon = getWeatherEmoji(desc);
      var hourly = [];
      hourly.push({ time: 'Now', temp: temp, icon: condIcon });
      if (data.weather) {
        data.weather.forEach(function(w, i) {
          if (i === 0) {
            var h = w.hourly || [];
            h.forEach(function(hr, j) {
              if (j < 5) {
                var t = parseInt(hr.temp_F) || temp;
                hourly.push({ time: (j * 3 + 9) % 12 + 1 + 'PM', temp: t, icon: getWeatherEmoji(hr.weatherDesc && hr.weatherDesc[0] && hr.weatherDesc[0].value || desc) });
              }
            });
          }
        });
      }
      if (hourly.length < 3) {
        for (var i = 0; i < 6; i++) { hourly.push({ time: (i + 1) * 2 + 'PM', temp: temp + Math.round(Math.random() * 6 - 3), icon: condIcon }); }
      }
      var daily = [];
      if (data.weather) {
        data.weather.forEach(function(w) {
          var date = new Date(w.date);
          var dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          daily.push({ day: dayName, icon: getWeatherEmoji(w.hourly && w.hourly[0] && w.hourly[0].weatherDesc && w.hourly[0].weatherDesc[0] && w.hourly[0].weatherDesc[0].value || desc), low: parseInt(w.mintempF) || low, high: parseInt(w.maxtempF) || high });
        });
      }
      while (daily.length < 10) {
        var last = daily[daily.length - 1];
        daily.push({ day: 'Day ' + (daily.length + 1), icon: '☀️', low: last.low - 1, high: last.high + 1 });
      }
      applyData({ city: city, temp: temp, condition: desc, high: daily[0].high, low: daily[0].low, description: desc + '. Humidity: ' + (cc.humidity || '--') + '%.', hourly: hourly, daily: daily });
      setBg(desc);
      return true;
    } catch(e) { return false; }
  }

  function fetchWeather(lat, lon) {
    var url = 'https://wttr.in/' + lat + ',' + lon + '?format=j1&u';
    fetch(url).then(function(r) { return r.json(); }).then(function(data) {
      if (!parseWttr(data)) generateMockData('Current Location');
    }).catch(function() { generateMockData('Current Location'); });
  }

  function fetchByCity(city) {
    currentCity = city;
    localStorage.setItem('weatherCity', city);
    document.querySelector('.location-label').textContent = 'CURRENT WEATHER';
    var url = 'https://wttr.in/' + encodeURIComponent(city) + '?format=j1&u';
    fetch(url).then(function(r) { return r.json(); }).then(function(data) {
      if (!parseWttr(data)) { generateMockData(city); }
    }).catch(function() { generateMockData(city); });
  }

  function startAutoRefresh() {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(function() {
      if (currentCity) fetchByCity(currentCity);
    }, 300000); // every 5 min
  }

  // City name / label click → focus search
  document.getElementById('cityName').addEventListener('click', function() { document.getElementById('citySearch').focus(); });
  document.querySelector('.location-label').addEventListener('click', function() { document.getElementById('citySearch').focus(); });

  // Search bar
  document.getElementById('citySearch').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var val = this.value.trim();
      if (val) fetchByCity(val);
      this.blur();
    }
  });

  // Init
  document.querySelector('.location-label').textContent = currentCity ? 'CURRENT WEATHER' : 'TAP TO SET CITY';

  if (currentCity) {
    fetchByCity(currentCity);
    startAutoRefresh();
  } else {
    fetch('https://ip-api.com/json/?fields=city,lat,lon').then(function(r) { return r.json(); }).then(function(ip) {
      if (ip && ip.city && ip.city !== '') {
        fetchByCity(ip.city);
        startAutoRefresh();
      } else {
        document.getElementById('citySearch').placeholder = 'Enter your city...';
        document.getElementById('citySearch').focus();
      }
    }).catch(function() {
      document.getElementById('citySearch').placeholder = 'Enter your city...';
      document.getElementById('citySearch').focus();
    });
  }
})();
