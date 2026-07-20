// Practice 12: Enhancing Deployment with Environment Variables
// Created by Umar Mohammed for INFO 350

const express = require("express");
const app = express();

// Render provides its own port when deployed.
// The app uses 3000 when running locally.
const PORT = process.env.PORT || 3000;

// GREETING is an environment variable.
// If GREETING is not set, the app uses the default message below.
const greeting = process.env.GREETING || "Hello from your deployed app!";

// Middleware that allows Express to read JSON data
app.use(express.json());

// Home route to confirm the app is running
app.get("/", (req, res) => {
    res.send("Umar's Express API is live and using environment variables!");
});

// API route that returns a message from the GREETING environment variable
app.get("/api/message", (req, res) => {
    res.json({
        message: greeting
    });
});

// POST route from previous practice
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