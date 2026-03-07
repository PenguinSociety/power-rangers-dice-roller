const express = require("express");
const app = express();

const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const crypto = require('crypto');

async function initializeDatabase() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS rooms (
      id SERIAL PRIMARY KEY,
      room_id TEXT UNIQUE NOT null,
      webhook_url TEXT NOT null,
      created_at TIMESTAMP DEFAULT NOW()
      );`);
  } catch (error) {
    console.error("Error creating table", error);
  }
}

app.use(express.json());

// Enable CORS for local development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// Helper function to generate random room IDs
function generateRoomId() {
  return crypto.randomBytes(16).toString('hex');
};

// Test route
app.get("/", (req, res) => {
  res.send("Dice Roller Backend is running!");
});

// Create a new room
app.post("/api/create-room", async (req, res) => {
  const { webhookUrl } = req.body;

  if (!webhookUrl) {
    return res.status(400).json({ error: "Webhook URL is required" });
  }

  const roomId = generateRoomId();
  try {
    await pool.query(
      "INSERT INTO rooms (room_id, webhook_url) VALUES ($1, $2);",
      [roomId, webhookUrl],
    );
  } catch (error) {
    console.log("Error creating the room", error);
    return res
      .status(500)
      .json({ error: "Unable to create room, please try again." });
  }
  console.log(`Room created: ${roomId}`);

  res.json({ roomId });
});

// Forward roll to Discord
app.post("/api/roll", async (req, res) => {
  const { roomId, rollData } = req.body;

  if (!roomId || !rollData) {
    return res.status(400).json({ error: "Missing roomId or rollData" });
  }

  try {
    const result = await pool.query(
      "SELECT webhook_url FROM rooms WHERE room_id = $1;",
      [roomId],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Room not found" });
    };
    // Send to Discord
    const response = await fetch(result.rows[0].webhook_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: rollData.message,
        }),
      });
      if (!response.ok) {
        throw new Error("Discord webhook failed");
      }
      res.json({ success: true });
    } catch (error) {
    console.log("Cannot locate room ID", error);
    return res
      .status(500)
      .json({ error: "Unable to locate room, please try again." });
  }
});

app.listen(process.env.PORT || 3000, async () => {
  console.log("Server is live on port 3000");
  await initializeDatabase();
});
