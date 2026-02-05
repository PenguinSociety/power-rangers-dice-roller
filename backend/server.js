const express = require('express');
const app = express();

app.use(express.json());

// Enable CORS for local development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// In-memory storage for rooms
const rooms = {};

// Helper function to generate random room IDs
function generateRoomId() {
  return Math.random().toString(36).substring(2, 8);
}

// Test route
app.get('/', (req, res) => {
  res.send('Dice Roller Backend is running!');
});

// Create a new room
app.post('/api/create-room', (req, res) => {
  const { webhookUrl } = req.body;
  
  if (!webhookUrl) {
    return res.status(400).json({ error: 'Webhook URL is required' });
  }
  
  const roomId = generateRoomId();
  rooms[roomId] = webhookUrl;
  
  console.log(`Room created: ${roomId}`);
  
  res.json({ roomId });
});

// Forward roll to Discord
app.post('/api/roll', async (req, res) => {
  const { roomId, rollData } = req.body;
  
  if (!roomId || !rollData) {
    return res.status(400).json({ error: 'Missing roomId or rollData' });
  }
  
  const webhookUrl = rooms[roomId];
  
  if (!webhookUrl) {
    return res.status(404).json({ error: 'Room not found' });
  }
  
  // Send to Discord
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: rollData.message
      })
    });
    
    if (!response.ok) {
      throw new Error('Discord webhook failed');
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error posting to Discord:', error);
    res.status(500).json({ error: 'Failed to post to Discord' });
  }
});

app.listen(3000, () => {
  console.log('Server is live on port 3000');
});