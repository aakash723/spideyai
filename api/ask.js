const GROQ_API_KEY = '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';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
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
        + "12. NEVER output raw function call syntax like `<function=...>` or ```function`. If you need to use a tool, just use it. If the system handles the tool call, don't also describe it in text. Just speak naturally."
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
                steps: { type: 'array', items: { type: 'string' }, description: '3-6 actionable sub-steps that break the mission down' },
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

    responseText = responseText.replace(/<function[^>]*>.*?<\/function>/gs, '');
    responseText = responseText.replace(/<function[^>]*\/>/g, '');
    responseText = responseText.replace(/\n?```function\n[\s\S]*?```\n?/g, '');
    responseText = responseText.trim();

    const tools = toolCalls.map(tc => ({
      name: tc.function.name,
      args: JSON.parse(tc.function.arguments || '{}')
    }));

    return res.json({ response: responseText || "Got it!", tools });
  } catch (err) {
    console.error('AI API error:', err.message);
    return res.json({
      response: "Hey, my AI connection's on the fritz — but I'm still here! Ask me to set missions, check weather, or just chat.",
      tools: []
    });
  }
};
