module.exports = async (req, res) => {
  const q = req.query?.q;
  const nearLat = req.query?.lat;
  const nearLon = req.query?.lon;

  if (!q) return res.json({ lat: null, lon: null });

  try {
    if (nearLat && nearLon) {
      try {
        const revUrl = `https://nominatim.openstreetmap.org/reverse?lat=${nearLat}&lon=${nearLon}&format=json&zoom=10`;
        const revResp = await fetch(revUrl, {
          headers: { 'User-Agent': 'SpideyAI/1.0' }
        });
        const revData = await revResp.json();
        const city = revData?.address?.city || revData?.address?.town || revData?.address?.county || revData?.address?.state_district;
        if (city) {
          const gwUrl = `https://www.google.com/search?tbm=map&q=${encodeURIComponent(q + ' ' + city)}`;
          const gwResp = await fetch(gwUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
          });
          const text = await gwResp.text();
          const match = text.match(/\[\d+\.\d+,(-?\d+\.\d+),(-?\d+\.\d+)\]/);
          if (match) {
            const lon = parseFloat(match[1]);
            const lat = parseFloat(match[2]);
            if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180 && !(lat === 0 && lon === 0)) {
              return res.json({ lat, lon });
            }
          }
        }
      } catch {}
    }

    const url = `https://www.google.com/search?tbm=map&q=${encodeURIComponent(q)}`;
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    const text = await resp.text();
    const match = text.match(/\[\d+\.\d+,(-?\d+\.\d+),(-?\d+\.\d+)\]/);
    if (match) {
      const lon = parseFloat(match[1]);
      const lat = parseFloat(match[2]);
      if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180 && !(lat === 0 && lon === 0)) {
        return res.json({ lat, lon });
      }
    }
  } catch {}

  res.json({ lat: null, lon: null });
};
