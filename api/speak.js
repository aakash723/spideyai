const TTS_API_URL = process.env.TTS_API_URL || 'https://api.openai.com/v1/audio/speech';
const TTS_API_KEY = process.env.TTS_API_KEY || process.env.AI_API_KEY || '';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body || {};

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  if (!TTS_API_KEY) {
    return res.status(503).json({ error: 'TTS not configured — browser fallback will be used' });
  }

  try {
    const response = await fetch(TTS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TTS_API_KEY}`
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: 'alloy',
        response_format: 'mp3'
      })
    });

    if (!response.ok) {
      throw new Error(`TTS API returned ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return res.json({ audio: base64 });
  } catch (err) {
    console.error('TTS API error:', err.message);
    return res.status(503).json({ error: 'TTS unavailable' });
  }
};
