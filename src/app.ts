import express from "express";
import cors from "cors";
require('dotenv').config();

// Routers
import navegacionRouter  from './routes/navegacion';
import usuariosRouter from './routes/usuarios';
import autoresRouter from './routes/autores';
import librosRouter from './routes/libros';
import authRouter from './routes/auth';

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