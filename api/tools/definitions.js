export const toolDefinitions = [
  {
    name: 'navigate_to',
    description: 'Set a navigation destination on the map',
    parameters: {
      location: { type: 'string', description: 'Destination name or address' },
    },
  },
  {
    name: 'create_mission',
    description: 'Create a new mission or task for the user',
    parameters: {
      title: { type: 'string', description: 'Mission title' },
      description: { type: 'string', description: 'What the mission involves' },
      eta: { type: 'string', description: 'When it\'s due (e.g. tomorrow 2pm)' },
      xp: { type: 'number', description: 'XP reward for completing' },
    },
  },
  {
    name: 'play_media',
    description: 'Play or search for media on YouTube',
    parameters: {
      query: { type: 'string', description: 'Search query for the video' },
      platform: { type: 'string', description: 'Platform (youtube)' },
    },
  },
  {
    name: 'check_weather',
    description: 'Check the current weather',
    parameters: {},
  },
  {
    name: 'set_reminder',
    description: 'Set a reminder for something',
    parameters: {
      text: { type: 'string', description: 'Reminder text' },
      time: { type: 'string', description: 'When to remind (e.g. 3pm)' },
    },
  },
  {
    name: 'add_knowledge',
    description: 'Add information to knowledge base',
    parameters: {
      topic: { type: 'string', description: 'Topic name' },
      content: { type: 'string', description: 'Information to store' },
    },
  },
];

export const toolMap = {};
for (const t of toolDefinitions) {
  toolMap[t.name] = t;
}
