const FISH_KEY = '424bf4992ee14191a1f9cc2d47b647cd';
const FISH_VOICE = '6ecde84528c748aa964fdcc8e21fa4ba';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body || {};
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const resp = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FISH_KEY}`,
        'Content-Type': 'application/json',
        'model': 's2.1-pro-free'
      },
      body: JSON.stringify({
        text,
        reference_id: FISH_VOICE
      })
    });

    if (!resp.ok) {
      throw new Error(`Fish Audio returned ${resp.status}`);
    }

    const arrayBuffer = await resp.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return res.json({ audio: base64, format: 'mp3' });
  } catch (err) {
    console.error('TTS API error:', err.message);
    return res.status(503).json({ error: 'TTS unavailable' });
  }
};
