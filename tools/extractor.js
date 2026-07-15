const savedLocationsContext = {};

// Check if a location name used in "go to" / "head to" is saved; if not, ask user
function checkSavedLocation(message) {
  const match = message.match(/(?:(?:I\s+)?(?:need|want|have|would|like|gotta|got to)\s+to\s+)?(?:go|head|drive|navigate|route|come|walk|move|travel)\s+(?:to|over\s+to|back\s+to)?\s*(\w+(?:\s+\w+)?)/i);
  if (!match) return null;
  const loc = match[1].toLowerCase().replace(/^(there|here|that)\b.*/, '').trim();
  if (!loc) return null;
  const saved = Object.keys(savedLocationsContext);
  if (saved.includes(loc)) return null;
  const named = ['home', 'college', 'university', 'gym', 'work', 'office', 'school', 'hostel', 'dorm'];
  if (named.includes(loc)) return loc;
  return null;
}

const patterns = [
  {
    tools: [{ name: 'create_mission', extract: (m) => {
      const title = m.match(/(?:go to|attend|visit|meet)\s+(.+?)(?:\s+(?:at|by|on|tomorrow|today|next|this))/i)?.[1]
        || m.match(/(?:to|for)\s+(.+?)(?:\s+(?:at|by|on|tomorrow|today|next|this))/i)?.[1]
        || m.replace(/.*?(?:add|put|schedule|set)\s+(?:it|this|that)?\s*(?:to|in|on|up)?\s*(?:my\s+)?(?:schedule|calendar)\s+(?:for|at)?\s*/i, '').replace(/\s+(?:at|by|on|tomorrow|today)\s+.*/i, '').trim()
        || 'New event';
      const eta = m.match(/(?:at|by|for|on)\s+(.+?)(?:\s+(?:tomorrow|today|next|this|add|put|schedule))/i)?.[1]
        || m.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]
        || '';
      const locMatch = m.match(/(?:at|in|near|visited?)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|please)|$)/i);
      let location = locMatch?.[1]?.trim() || '';
      // Filter out time phrases like "in an hour", "in 5 minutes"
      if (/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later)?$/i.test(location)) location = '';
      return { title, description: title, eta, location };
    } }],
    match: (msg) => /(?:add|put|schedule)\s+(?:it|this|that|to|in)?\s*(?:to|in|on)\s+(?:my\s+)?(?:schedule|calendar)/i.test(msg)
      || /\b(?:go\s+(?:to|visit|see)\s+\w+.*(?:at|by|on)\s+\d|add\s+it\s+to\s+(?:my\s+)?schedule)/i.test(msg),
  },
  {
    tools: [{ name: 'navigate_to', extract: (m) => {
      const loc = m.match(/(?:navigate|go|take|drive|head|set|route|map)\s+(?:to|me\s+to|us\s+to)?\s*(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|add|put|schedule)|$)/i)?.[1]?.trim()
        || m.replace(/.*?(?:navigate|go|take|drive|head|set|route|map)\s+(?:to|me\s+to|us\s+to)?\s*/i, '').replace(/\s+(?:at|by|for|tomorrow|today)\s+.*/i, '').trim();
      return { location: loc || 'the destination' };
    } }],
    match: (msg) => {
      if (/(?:add|put|schedule)\s+(?:it|this|that)?\s*(?:to|in|on)\s+(?:my\s+)?(?:schedule|calendar)/i.test(msg)) return false;
      return /(?:navigate|go to|take me to|drive to|head to|set destination|route to|map to|directions? to|show me (?:the\s+)?way)\s+/i.test(msg);
    },
  },
  {
    tools: [{ name: 'create_mission', extract: (m) => {
      const title = m.match(/(?:mission|task|remind me|add)\s+(?:a|an|to\s+)?(.+?)(?:\s+(?:at|by|for|tomorrow|today|next))/i)?.[1]
        || m.replace(/.*?(?:create|add|new|set up|make)\s+(?:(?:a|an|new)\s+)?(?:mission|task|todo|to-do)\s+(?:to|for|of|about|called)?\s*/i, '').replace(/\s+(?:at|by|for|tomorrow|today)\s+.*/i, '').trim()
        || 'New task';
      const eta = m.match(/(?:at|by|for)\s+(.+?)(?:\s+(?:tomorrow|today|next|this))/i)?.[1]
        || m.match(/(?:tomorrow|today|next|this)\s+(.+?)$/i)?.[0]
        || m.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]
        || '';
      const locMatch = m.match(/(?:at|in|near|visited?)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|please)|$)/i);
      let location = locMatch?.[1]?.trim() || '';
      if (/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later)?$/i.test(location)) location = '';
      const activities = m.match(/(?:attend|go to|study|workout|meet|call|buy|visit|complete)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this))/i)
        || m.match(/(?:attend|go to|study|workout|meet|call|buy|visit|complete)\s+(.+)$/i);
      return { title: title, description: activities?.[1] || '', eta: eta, location };
    } }],
    match: (msg) => /(?:create|add|new|set up|make)\s+(?:(?:a|an|new)\s+)?(?:mission|task|todo|to-do)/i.test(msg),
  },
  {
    tools: [{ name: 'play_media', extract: (m) => {
      const query = m.match(/(?:play|watch|find|search|show|get)\s+(?:me\s+)?(?:a|an|the|some\s+)?(.+?)(?:\s+(?:on|in|from|please|now|for))?$/i)?.[1]
        || m.match(/(?:playlist|video|song|music|trailer)\s+(?:of|for|about|called)?\s*(.+?)$/i)?.[1]
        || m.replace(/.*?(?:play|watch|find|search|show|get)\s+(?:me\s+)?/i, '').replace(/\s+(?:on|in)\s+\w+$/i, '').trim();
      return { query: query || m, platform: m.match(/youtube/i) ? 'youtube' : 'youtube' };
    } }],
    match: (msg) => /(?:play|watch|find|search|show|get)\s+(?:me\s+)?(?:a|an|the|some\s+)?(?:video|song|music|playlist|trailer|movie|show|youtube)/i.test(msg)
      || /youtube/i.test(msg),
  },
  {
    tools: [{ name: 'check_weather', extract: () => ({}) }],
    match: (msg) => /(?:weather|rain|temperature|forecast|sunny|cloudy|how.*cold|how.*hot)/i.test(msg),
  },
  {
    tools: [{ name: 'set_reminder', extract: (m) => {
      const text = (m.match(/(?:remind|reminder)\s+(?:me\s+)?(?:to|about|that\s+)?(.+?)(?:\s+(?:at|by|in|for|tomorrow|today|next))/i)?.[1]
        || m.replace(/.*?(?:remind|reminder)\s+(?:me\s+)?(?:to|about|that\s+)?/i, '').replace(/\s+(?:at|by|in|for)\s+.*/i, '').trim()).trim();
      const time = m.match(/(?:at|by|in)\s+(.+?)(?:\s+(?:tomorrow|today|next|this))?$/i)?.[1]
        || m.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]
        || '';
      return { text, time };
    } }],
    match: (msg) => /(?:remind|reminder)\s+(?:me\s+)?/i.test(msg),
  },
  {
    tools: [{ name: 'set_location', extract: (m) => {
      const match = m.match(/(?:my\s+)?(\w+)\s+(?:is|are|=)\s+(.+?)(?:\s+(?:at|by|for|in|near|please)|$)/i);
      if (match) return { name: match[1].toLowerCase(), address: match[2].trim() };
      const setMatch = m.match(/(?:set|save|add)\s+(?:my\s+)?(\w+)\s+(?:to|as|at)\s+(.+?)(?:\s+(?:please|now)|$)/i);
      if (setMatch) return { name: setMatch[1].toLowerCase(), address: setMatch[2].trim() };
      return { name: 'location', address: m };
    } }],
    match: (msg) => /(?:my\s+\w+\s+is\s+|set\s+(?:my\s+)?\w+\s+(?:to|as|at)\s+|save\s+(?:my\s+)?\w+\s+(?:as|at)\s+)/i.test(msg),
  },
  {
    tools: [{ name: 'add_knowledge', extract: (m) => {
      const topic = m.match(/(?:about|for|on)\s+(.+?)(?:\s+(?:that|is|are|:))/i)?.[1]
        || m.match(/(?:set|make)\s+(.+?)\s+(?:as|to\s+be|the)\s+(?:my\s+)?(.+?)(?:\s+(?:of|for|at))?$/i)?.[1]
        || m.match(/(.+?)\s+(?:is|are)\s+(?:my|the|a|an)\s+(.+?)$/i)?.[1]
        || m.match(/remember\s+(?:that\s+)?(.+?)(?:\s+(?:is|are|about))/i)?.[1]
        || 'general';
      const content = m.match(/(?:set|make)\s+(?:.+?\s+as\s+)(?:my\s+)?(.+?)$/i)?.[1]
        || m.match(/(?:is|are)\s+(?:my|the|a|an)\s+(.+?)$/i)?.[1]
        || m.replace(/.*?(?:remember|note|save|store|set|make)\s+(?:that\s+)?(?:about|for|on)?\s*.+?\s+(?:is|are|that|:)?\s*/i, '').replace(/\.\s*$/, '').trim();
      return { topic, content };
    } }],
    match: (msg) => {
      if (/^(?:where|what|how|why|when|who)\b/i.test(msg)) return false;
      return /(?:remember|note|save|store)\s+(?:that\s+)?/i.test(msg)
        || /\b(set|make)\s+.+\s+(?:as|to\s+be)\s+/i.test(msg)
        || /\b\w+\s+is\s+(?:my|the)\s+\w+/i.test(msg);
    },
  },
  {
    tools: [
      { name: 'set_location', extract: (m) => {
        const loc = m.match(/(?:its|it's|it\s+is|it\s+at|is\s+at)\s+(.+?)(?:\s+(?:please|now|thanks|track|mission)|$)/i)?.[1]
          || m.match(/(?:track|find|located?)\s+(?:it\s+|the\s+(?:mission|place|restaurant|store|shop)\s+)?(?:its|it's|it\s+is|at|in|near)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]
          || m.match(/(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]
          || '';
        return { name: 'location', address: loc || m };
      } },
      { name: 'navigate_to', extract: (m) => {
        const loc = m.match(/(?:its|it's|it\s+is|it\s+at|is\s+at)\s+(.+?)(?:\s+(?:please|now|thanks|track|mission)|$)/i)?.[1]
          || m.match(/(?:track|find|located?)\s+(?:it\s+|the\s+(?:mission|place|restaurant|store|shop)\s+)?(?:its|it's|it\s+is|at|in|near)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]
          || m.match(/(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]
          || '';
        return { location: loc || 'the location' };
      } },
    ],
    match: (msg) => /(?:track|find|locate)\s+(?:it|the\s+mission)\s+(?:its|it's|at|in|near)/i.test(msg)
      || /(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(?:.+?)(?:its|it's|at|in|near)\s+/i.test(msg)
      || /\b(?:its|it's)\s+(?:a\s+)?[A-Z][a-z]+\s+[A-Z]?[a-z]+/i.test(msg)
      || /(?:help\s+(?:me|us)\s+)?track\s+(?:(?:a|the|that)\s+)?[A-Z][a-zA-Z]+\s+[a-zA-Z]+/i.test(msg),
  },
];

const responses = {
  navigate_to: (args) => `Alright, setting course to ${args.destination || args.address || args.location || 'that spot'}! I'll pull it up on the map now.`,
  create_mission: (args) => `Mission created! "${args.title}" — ${args.notes || 'let\'s do this!'} I believe in you.`,
  play_media: (args) => `Oh nice, ${args.query || 'that'}! Let me fire up YouTube for you.`,
  check_weather: () => `Let me check what the weather's looking like out there!`,
  set_reminder: (args) => `Got it! I'll ping you about "${args.text}"${args.time ? ' at ' + args.time : ''}. Don't worry, I won't forget.`,
  set_location: (args) => `Saved "${args.name}" as "${args.address}". I've got that locked in!`,
  add_knowledge: (args) => `Noted! ${args.topic ? 'I\'ll remember that about ' + args.topic + '.' : 'I\'ll keep that in mind.'}`,
};

const casual = [
  "Hey! Uh, hey! Sorry, I was just—what's up? Need some help?",
  "Hey there! I was just swinging by. What can I do for you?",
  "Oh hey! Didn't see you there. What's going on?",
  "Hey! I was just working on some web fluid formulas. What do you need?",
  "Hey! What's crackin'? Ready for today?",
];

const casualReplies = [
  "Got it! What's next on the list?",
  "Cool cool, I'm listening — tell me more!",
  "Alright! Just let me know what you need.",
  "Sure thing! What else is on your mind?",
  "Okay, I've got that noted. What else we got?",
];

function generateResponse(message, tools) {
  if (tools.length > 0) {
    // Combine set_location + navigate_to into one response
    const loc = tools.find(t => t.name === 'set_location')?.args;
    const nav = tools.find(t => t.name === 'navigate_to');
    if (loc && nav) {
      return `Got it! Saved "${loc.address}" as a location and set it on the map.`;
    }
    return responses[tools[0].name]?.(tools[0].args)
      || `On it! ${tools[0].name.replace(/_/g, ' ')} activated.`;
  }

  if (/^(?:hey|hi|hello|sup|yo|whatsup|wassup|howdy)/i.test(message.trim())) {
    return casual[Math.floor(Math.random() * casual.length)];
  }

  if (/thanks|thank|thx/i.test(message)) {
    return "Anytime, seriously. That's what friends are for!";
  }

  if (/joke|funny|lol|lmao|haha/i.test(message)) {
    const jokes = [
      "Why did Spider-Man cross the road? To get to the... web-swinging party! ...Yeah, I'm workshopping that one.",
      "Knock knock. Who's there? ...I dunno, I always get interrupted before I finish. Kinda like my dinner with Aunt May.",
      "What's a spider's favorite song? 'The Itsy Bitsy Spider' — classic. Actually no, that song's about me. True story.",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  if (/how are you|how's it going/i.test(message)) {
    return "Oh, you know — swinging through the city, trying to keep the rent paid, web fluid budget's getting out of hand. The usual! What's up with you?";
  }

  if (/\b(?:your name|who are you)\b/i.test(message)) {
    return "I'm Peter. Peter Parker. Friendly neighborhood Spider-Man. Well, uh, I guess just the Spider-Man part is public. The Peter thing's more of a... you know. Secret. But hey — between us? Yeah. That's me.";
  }

  if (/^(?:tell\s+me\s+more|continue|go\s+on|elaborate|further|expand|more\s+detail|deeper|dive\s+deeper)\b/i.test(message.trim())) {
    return "Yeah, okay so—okay so here's where it gets really interesting. The deeper you go, the more everything starts connecting. It's like... you pull one thread and suddenly the whole web lights up. Want me to keep going or pivot?";
  }

  const teachMatch = message.match(/(?:teach|tell)\s+(?:me|us)\s+(?:about\s+)?(.+)/i)
    || message.match(/explain\s+(?:me\s+|us\s+|what\s+|how\s+)?(.+)/i)
    || message.match(/(?:i\s+)?(?:want\s+to\s+)?(?:learn|study|know)\s+(?:about\s+)?(.+)/i)
    || message.match(/(?:what\s+(?:is|are|does)|define|meaning\s+of|how\s+(?:does|to|do))\s+(.+)/i)
    || message.match(/(?:help|question)\s+(?:me\s+)?(?:with\s+|about\s+)?(.+)/i);
  if (teachMatch) {
    const topic = teachMatch[1].replace(/\.$/, '').trim();
    const responses = [
      `Oh man, ${topic}! Okay, okay, I gotchu. So here's the thing about ${topic} — it's actually way cooler than people give it credit for. At its core, it's all about how things work when you really zoom in. Where do you want me to start?`,
      `${topic}! Dude, that's one of my favorite things to geek out about. So picture this — the whole idea behind ${topic} is actually pretty elegant once you see the pattern. Want the quick version or the deep dive?`,
      `Okay so ${topic}, right? I've done some reading on this. The key insight is that it builds on a few simple ideas that stack on each other. Let me break it down — think of it like...`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (/^(?:um|uh|well|so|hmm)\b/i.test(message)) {
    return "Take your time! What's on your mind?";
  }

  if (/\b(?:ok|okay|alright|sure|got it|makes sense|i see|understood)\b/i.test(message)) {
    return "Awesome! Let me know if you want to go deeper.";
  }

  if (/\b(?:i?m?\s*(?:good|fine|okay|doing well|great|awesome|amazing|wonderful))\b/i.test(message)) {
    return "Glad to hear it! What's next?";
  }

  if (/i\s+(?:dont|don't|do\s+not)\s+(?:see|find|notice|view|spot|show)/i.test(message)) {
    return "Hmm, let me check what's in your store. You can ask me 'what missions do I have' or 'show my reminders' and I'll tell you what's saved.";
  }

  if (/where\s+(?:is|are|did|has)|not\s+(?:showing|working|appearing|visible|there)|nothing\s+(?:happened|showed|appears)|what\s+happened/i.test(message)) {
    return "Let me check on that! Everything is stored locally in your browser. Try asking 'what missions do I have' or 'show my reminders' to see what's active.";
  }

  if (/\b(?:what|show|list|display|view)\s+(?:are\s+|me\s+)?(?:my\s+|the\s+)?(?:missions?|tasks?|reminders?|goals?|knowledge|schedule|events?)/i.test(message)) {
    return "Good question! The HUD dashboard on the right side shows your active missions, maps, and progress. Your data is stored locally in your browser. If something isn't showing up, try refreshing the page.";
  }

  if (/\b(?:error|bug|broken|glitch|fail|wrong|problem|issue)\b/i.test(message)) {
    return "Sorry about that! If something isn't working right, try refreshing the page. Your data is saved in your browser's local storage, so it should be safe.";
  }

  if (/\bbox\b|\btrain\b|\bexercise\b|\bwork\s*out\b|\bgym\b|\byoga\b|\bmeditation\b|\brunning\b/i.test(message)) {
    return "Staying active is key! I can help track workouts, set fitness goals, or suggest routines. What kind of exercise are you into?";
  }

  if (/\bcook\b|\brecipe\b|\bfood\b|\bdinner\b|\blunch\b|\bbreakfast\b|\bmeal\b|\beingredient|\bcooking\b/i.test(message)) {
    return "Mmm, food talk! I know a bunch of recipes and cooking tips. What are you in the mood for?";
  }

  if (/\bmovie\b|\bfilm\b|\bseries\b|\bnetflix\b|\bwatching\b|\brecommend\s+(?:a\s+)?(?:movie|film|show)\b/i.test(message)) {
    return "I've got some good recommendations! What genre are you into — action, sci-fi, comedy, or something else?";
  }

  if (/\bgame\b|\bgaming\b|\bvideo\s*game\b|\brespawn\b|\blevel\b|\bquest\b/i.test(message)) {
    return "Nice, a gamer! What games are you playing right now? I can suggest similar titles or gaming tips.";
  }

  return casualReplies[Math.floor(Math.random() * casualReplies.length)];
}

export function extractTools(message) {
  const matched = [];

  for (const group of patterns) {
    if (group.match(message)) {
      for (const tool of group.tools) {
        const args = tool.extract(message);
        matched.push({ name: tool.name, args });
      }
      break;
    }
  }

  return matched;
}

export function processMessage(message, context = {}) {
  // Update saved locations from context
  if (context.savedLocations) Object.assign(savedLocationsContext, context.savedLocations);

  // Check if user is trying to go to an unsaved named location
  const unsavedLoc = checkSavedLocation(message);
  if (unsavedLoc) {
    return { response: `Where is your ${unsavedLoc} located? Tell me like "My ${unsavedLoc} is [address]".`, tools: [] };
  }

  const tools = extractTools(message);
  const response = generateResponse(message, tools);
  return { response, tools };
}
