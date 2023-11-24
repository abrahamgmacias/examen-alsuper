const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Routers
const navegacionRouter = require('./routes/navegacion');
const usuariosRouter = require('./routes/usuarios');
const autoresRouter = require('./routes/autores');
const librosRouter = require('./routes/libros');
const authRouter = require('./routes/auth');

// App instantiation
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/", navegacionRouter);
app.use("/api/libros", librosRouter);
app.use("/api/autores", autoresRouter);
app.use("/api/usuarios", usuariosRouter);

module.exports = { app };