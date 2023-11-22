import express from "express";
import cors from "cors";
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
const corsOptions = {
    origin: 'http://localhost:3000',
    // optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/", navegacionRouter);
app.use("/api/libros", librosRouter);
app.use("/api/autores", autoresRouter);
app.use("/api/usuarios", usuariosRouter);

export default app;