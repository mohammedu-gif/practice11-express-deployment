// Practice 11: Deploying Node.js Express Application
// Created by Umar Mohammed for INFO 350

const express = require("express");
const app = express();

// Render will provide its own port when deployed.
// If no port is provided, the app will use 3000 locally.
const PORT = process.env.PORT || 3000;

// Middleware to allow Express to read JSON data
app.use(express.json());

// Home route to confirm the app is running
app.get("/", (req, res) => {
    res.send("Umar's Express API is live and running!");
});

// Practice 9 GET route
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from your first Express API!"
    });
});

// Practice 10 POST route
app.post("/api/notes", (req, res) => {
    const { name, note } = req.body;

    if (!name || !note) {
        return res.status(400).json({
            error: "Both name and note are required."
        });
    }

    res.status(201).json({
        message: "Note received!",
        data: {
            name: name,
            note: note
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});