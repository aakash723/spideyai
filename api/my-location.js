export default async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
      || req.headers['x-real-ip']
      || req.connection?.remoteAddress
      || '';

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=lat,lon,status`);
    const data = await response.json();

    if (data.status === 'success') {
      return res.json({ lat: data.lat, lon: data.lon });
    }

    return res.json({ error: 'Could not determine location' });
  } catch (err) {
    console.error('Location error:', err.message);
    return res.json({ error: 'Location service unavailable' });
  }
};
