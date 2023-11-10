const express = require('express');
const cors = require('cors');
require('dotenv').config();

// App instantiation
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Sample route");
});

module.exports = { app };