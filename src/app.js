const express = require('express');
const cors = require('cors');
require('dotenv').config();

const navegacionRouter = require('./routes/navegacion');

// App instantiation
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", navegacionRouter);


module.exports = { app };