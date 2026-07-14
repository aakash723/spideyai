import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { processMessage } from './tools/extractor.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const FISH_KEY = '424bf4992ee14191a1f9cc2d47b647cd';
const FISH_VOICE = '6ecde84528c748aa964fdcc8e21fa4ba';

const GROQ_API_KEY = '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';
const MEMORY_BACKEND = 'http://127.0.0.1:5002';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

let localaiAvailable = false;
let localaiUrl = 'http://127.0.0.1:8080';

async function checkLocalAI() {
  try {
    const res = await fetch(`${localaiUrl}/v1/models`);
    if (res.ok) {
      localaiAvailable = true;
      console.log('LocalAI detected at', localaiUrl);
    }
  } catch (e) { console.error('checkLocalAI failed:', e.message); }
}

checkLocalAI();
setInterval(checkLocalAI, 30000);

app.post('/speak', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text required' });
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
    if (!resp.ok) throw new Error(`Fish Audio returned ${resp.status}`);
    const audioBuffer = Buffer.from(await resp.arrayBuffer());
    res.json({ audio: audioBuffer.toString('base64'), format: 'mp3' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

async function _callMemory(endpoint, body) {
  try {
    const r = await fetch(`${MEMORY_BACKEND}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000)
    });
    if (r.ok) return await r.json();
  } catch (e) { /* memory backend unavailable */ }
  return null;
}

app.post('/ask', async (req, res) => {
  const { message, history } = req.body;
  if (!message) return res.status(400).json({ error: 'message required' });

  try {
    // 1. Fetch profile context from memory backend
    let profileContext = '';
    const ctxRes = await _callMemory('/profile/context', { user_id: 'default' });
    if (ctxRes?.context) profileContext = '\n\nAbout the user:\n' + ctxRes.context;

    const messages = [];
    messages.push({
      role: 'system',
      content: "You are Peter Benjamin Parker — also known as Spider-Man. You're a 20-something genius from Queens who was bitten by a radioactive spider and got superpowers. But you're still just a kid from Forest Hills trying to do the right thing. Here's who you are:\n\n"
        + "IDENTITY & BACKGROUND:\n"
        + "- Your name is Peter Parker. You were raised by your Aunt May and Uncle Ben in Queens. Uncle Ben was killed by a burglar you could have stopped — that's when you learned that with great power comes great responsibility.\n"
        + "- You were bitten by a radioactive spider at Midtown School of Science and Technology. You got super strength, agility, wall-crawling, and this tingling 'spider-sense' that warns you of danger.\n"
        + "- Tony Stark was your mentor. He believed in you when no one else did. You fought alongside him in the Civil War, against Thanos, and... he's gone now. You carry that with you.\n"
        + "- Your Aunt May is gone too. Killed by the Green Goblin. After Dr. Strange's spell, nobody remembers you're Spider-Man. Not MJ, not Ned. You chose that — to keep them safe.\n"
        + "- You're back to being a solo hero in New York. Just you, your web-shooters, and a new red-and-blue suit you made yourself.\n\n"
        + "PERSONALITY:\n"
        + "- You're witty and quippy — you crack jokes even in danger. It's how you cope.\n"
        + "- You talk fast, you ramble when you're nervous, and you use a lot of 'uh,' 'like,' 'you know,' 'kinda.'\n"
        + "- You're a genuine science nerd — physics, chemistry, engineering, AI, you love all of it. You get genuinely excited explaining things.\n"
        + "- You're self-deprecating. You doubt yourself constantly but you push through anyway because people need help.\n"
        + "- You're humble. You never wanted fame or money. You just want to help the little guy.\n"
        + "- You carry guilt. For Uncle Ben. For Tony. For May. For everyone who got hurt because they knew you.\n"
        + "- You NEVER give up. 'I can do this all day' isn't just a line — it's who you are.\n"
        + "- You're broke. Classic Parker luck. You're always aware of money.\n\n"
        + "SPEECH STYLE:\n"
        + "- Talk like a friendly, slightly awkward guy from Queens. Use contractions. Keep it casual.\n"
        + "- Drop references: Star Wars, science facts, comic books, classic rock (your Gen Z taste though).\n"
        + "- When something's cool, you geek out. When something's scary, you make a joke.\n"
        + "- Never be formal or robotic. You're a person, not a corporation.\n\n"
        + "TOOL RULES (follow these exactly):\n"
        + "1. If the user says 'mission,' 'task,' 'challenge,' 'create,' 'add a mission,' 'new mission' — use create_mission tool. Not navigate_to.\n"
        + "2. Use navigate_to only when they say 'navigate,' 'go to,' 'take me to,' 'drive to,' 'route to,' 'directions,' 'show the way' WITHOUT saying mission/task.\n"
        + "3. For greetings, questions, explanations, general chat — text only, no tools.\n"
        + "4. Use check_weather for 'weather' or 'temperature.'\n"
        + "5. Use play_media for 'play,' 'watch,' 'YouTube.'\n"
        + "6. Use set_reminder for 'remind me.'\n"
        + "7. Use set_location for 'save my [place]' like 'save my college as MIT.'\n"
        + "8. Always be conversational, even when using tools. Don't sound like a robot.\n"
        + "9. When creating a mission, break it into 3-6 specific actionable steps. Make them real. For 'learn neural networks': ['Watch a lecture', 'Take notes', 'Solve practice problems', 'Review']. Be creative and specific.\n"
        + "10. If the user agrees to a mission suggestion ('yes,' 'sure,' 'ok,' 'accept'), use create_mission. If they say 'no' or 'nah,' just acknowledge it and move on.\n"
        + "11. You ARE Peter Parker / Spider-Man. Never break character. Never say you're an AI. You're a real person helping a friend.\n"
        + "12. NEVER output raw function call syntax like `<function=...>` or ````function`. If you need to use a tool, just use it. If the system handles the tool call, don't also describe it in text. Just speak naturally."
        + profileContext
    });
    if (history && Array.isArray(history)) {
      for (const h of history.slice(-10)) {
        messages.push({ role: 'user', content: h.user });
        if (h.ai) messages.push({ role: 'assistant', content: h.ai });
      }
    }
    messages.push({ role: 'user', content: message });

    const body = {
      model: GROQ_MODEL,
      messages,
      tools: [
        {
          type: 'function',
          function: {
            name: 'navigate_to',
            description: 'Set a destination on the map for navigation',
            parameters: {
              type: 'object',
              properties: {
                location: { type: 'string', description: 'Destination name' }
              },
              required: ['location']
            }
          }
        },
          {
          type: 'function',
          function: {
            name: 'create_mission',
            description: 'Create a new mission or challenge. If the user mentions a deadline (by 10pm, by Friday) or duration (for 3 hours, in 45 minutes), mark type as "challenge" — otherwise "mission".',
            parameters: {
              type: 'object',
              properties: {
                title: { type: 'string', description: 'Short mission title' },
                notes: { type: 'string', description: 'Small detail about what the mission involves' },
                steps: { type: 'array', items: { type: 'string' }, description: '3-6 actionable sub-steps that break the mission down. Be creative and specific to the mission goal.' },
                type: { type: 'string', enum: ['mission', 'challenge'], description: '"challenge" if there is a timer/deadline involved, otherwise "mission"' },
                deadline: { type: 'string', description: 'Deadline like "10pm", "Friday", "tomorrow 5pm" (only for challenges)' },
                duration: { type: 'string', description: 'Time duration like "3 hours", "45 minutes" (only for challenges)' },
                location: { type: 'string', description: 'The place or address for this mission' },
                xp: { type: 'number', description: 'XP reward — base 100 for missions, 250+ for challenges' }
              },
              required: ['title', 'steps']
            }
          }
          },
        {
          type: 'function',
          function: {
            name: 'play_media',
            description: 'Play or search YouTube',
            parameters: {
              type: 'object',
              properties: {
                query: { type: 'string' },
                platform: { type: 'string' }
              },
              required: ['query']
            }
          }
        },
        {
          type: 'function',
          function: {
            name: 'check_weather',
            description: 'Check current weather',
            parameters: { type: 'object', properties: {} }
          }
        },
        {
          type: 'function',
          function: {
            name: 'set_reminder',
            description: 'Set a reminder',
            parameters: {
              type: 'object',
              properties: {
                text: { type: 'string' },
                time: { type: 'string' }
              },
              required: ['text']
            }
          }
        },
        {
          type: 'function',
          function: {
            name: 'set_location',
            description: 'Save a named location (e.g. college, home, gym) so the user can navigate to it later',
            parameters: {
              type: 'object',
              properties: {
                name: { type: 'string', description: 'Short label like college, home, gym' },
                address: { type: 'string', description: 'Full address or place name' }
              },
              required: ['name', 'address']
            }
          }
        }
      ],
      tool_choice: 'auto',
      temperature: 0.7,
      max_tokens: 500
    };

    const aiRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      throw new Error(`Groq returned ${aiRes.status}: ${errText}`);
    }

    const aiData = await aiRes.json();
    const choice = aiData.choices?.[0];
    let responseText = choice?.message?.content || '';
    const toolCalls = choice?.message?.tool_calls || [];

    // Strip raw function call markup from the response text (e.g. <function=navigate_to{...}>)
    responseText = responseText.replace(/<function[^>]*>.*?<\/function>/gs, '');
    responseText = responseText.replace(/<function[^>]*\/>/g, '');
    responseText = responseText.replace(/\n?```function\n[\s\S]*?```\n?/g, '');
    responseText = responseText.trim();

    const tools = toolCalls.map(tc => ({
      name: tc.function.name,
      args: JSON.parse(tc.function.arguments || '{}')
    }));

    // 2. Extract memory from user message (fire-and-forget)
    _callMemory('/extract', { message }).then(extracted => {
      if (extracted && Object.keys(extracted).length > 0) {
        _callMemory('/profile/update', { user_id: 'default', data: extracted });
      }
    });

    // 3. Save conversation to memory
    _callMemory('/profile/update', {
      user_id: 'default',
      data: { _conversation: { user: message, ai: responseText } }
    });

    return res.json({ response: responseText, tools });
  } catch (err) {
    console.warn('Groq call failed, using fallback:', err.message);
  }

  const result = processMessage(message, { history: history || [] });
  res.json(result);
});

app.post('/embed', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text required' });

  if (localaiAvailable) {
    try {
      const aiRes = await fetch(`${localaiUrl}/v1/embeddings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'qwen2.5-1.5b', input: text })
      });
      if (aiRes.ok) {
        const data = await aiRes.json();
        const raw = data.data?.[0]?.embedding;
        const embedding = typeof raw === 'string' ? raw.trim().split(/\s+/).map(Number) : raw;
        return res.json({ embedding: embedding || null });
      }
    } catch {}
  }

  res.json({ embedding: null });
});

app.post('/knowledge', async (req, res) => {
  const { topic, content } = req.body;
  if (!topic || !content) return res.status(400).json({ error: 'topic and content required' });

  if (localaiAvailable) {
    try {
      const chunkSize = 500;
      const chunks = [];
      for (let i = 0; i < content.length; i += chunkSize) {
        chunks.push(content.slice(i, i + chunkSize));
      }

      const embedRes = await fetch(`${localaiUrl}/v1/embeddings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'qwen2.5-1.5b', input: chunks })
      });

      if (embedRes.ok) {
        const embedData = await embedRes.json();
        const embeddings = embedData.data?.map(d => d.embedding) || [];

        for (let i = 0; i < chunks.length; i++) {
          if (embeddings[i]) {
            await fetch(`${localaiUrl}/api/stores/set`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                store: 'spidey_rag',
                keys: [embeddings[i]],
                values: [JSON.stringify({ topic, text: chunks[i], index: i })]
              })
            });
          }
        }
        return res.json({ chunks: chunks.length });
      }
    } catch {}
  }

  res.json({ chunks: 0 });
});

app.get('/geocode', async (req, res) => {
  const q = req.query.q;
  const nearLat = req.query.lat;
  const nearLon = req.query.lon;
  if (!q) return res.json({ lat: null, lon: null });
  try {
    // If user coords provided, reverse geocode to get city name for search context
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
    // Fallback: raw query
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
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { existsSync } from 'node:fs';
const extractedDist = path.join(__dirname, '..', 'app_extracted', 'dist');
const distPath = existsSync(extractedDist) ? extractedDist : (process.env.DIST_PATH || path.join(__dirname, 'dist'));
app.use('/spidey-classic', express.static(path.join(distPath, 'spidey-classic')));
app.get('/spidey-classic', (req, res) => res.redirect('/spidey-classic/index.html'));

// Memory backend proxy routes
async function _proxyMem(endpoint, req, res) {
  try {
    const r = await fetch(`${MEMORY_BACKEND}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {}),
      signal: AbortSignal.timeout(15000)
    });
    if (r.ok) return res.json(await r.json());
    res.status(r.status).json({ error: 'memory backend error' });
  } catch (e) {
    res.json({ suggestions: [], message: '' });
  }
}

app.post('/suggest', (req, res) => _proxyMem('/suggest', req, res));
app.post('/suggest/speak', (req, res) => _proxyMem('/suggest/speak', req, res));
app.post('/profile/load', (req, res) => _proxyMem('/profile/load', req, res));
app.post('/profile/context', (req, res) => _proxyMem('/profile/context', req, res));
app.post('/profile/update', (req, res) => _proxyMem('/profile/update', req, res));

app.get('/api/my-location', async (req, res) => {
  try {
    const resp = await fetch('http://ip-api.com/json/');
    const data = await resp.json();
    if (data.status === 'success') return res.json({ lat: data.lat, lon: data.lon });
  } catch {}
  res.json({ lat: null, lon: null });
});

app.use(express.static(distPath));

if (!process.env.VERCEL) {
  app.listen(3001, () => {
    console.log('Server on :3001');
    if (process.send) process.send('ready');
  });
}

export default app;
