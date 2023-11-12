const express = require('express');
const cors = require('cors');
require('dotenv').config();

const navegacionRouter = require('./routes/navegacion');
const usuariosRouter = require('./routes/usuarios');
const autoresRouter = require('./routes/autores');
const librosRouter = require('./routes/libros');

// App instantiation
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", navegacionRouter);
app.use("/auth", usuariosRouter);
app.use("/libros", librosRouter);
app.use("/autores", autoresRouter);

module.exports = { app };