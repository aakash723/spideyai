const AI_API_URL = process.env.AI_API_URL || 'https://api.openai.com/v1/chat/completions';
const AI_API_KEY = process.env.AI_API_KEY || '';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!AI_API_KEY) {
    return res.json({
      response: "I'm running in offline mode. My AI brain needs an API key to work — talk to the developer about setting one up! For now, I can still help with local commands.",
      tools: []
    });
  }

  try {
    const messages = [
      { role: 'system', content: 'You are Spider-Man (Peter Parker). You are a friendly neighborhood superhero AI assistant. You are witty, energetic, and supportive. Keep responses concise (1-3 sentences). You help users with productivity, missions, and daily tasks.' },
      ...(history || []).slice(-10).map(h => [
        { role: 'user', content: h.user },
        { role: 'assistant', content: h.ai }
      ]).flat(),
      { role: 'user', content: message }
    ];

    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 200,
        temperature: 0.8
      })
    });

    if (!response.ok) {
      throw new Error(`AI API returned ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content?.trim() || "Got it!";

    return res.json({ response: text, tools: [] });
  } catch (err) {
    console.error('AI API error:', err.message);
    return res.json({
      response: "Hey, my AI connection's on the fritz — but I'm still here! Ask me to set missions, check weather, or just chat.",
      tools: []
    });
  }
};
