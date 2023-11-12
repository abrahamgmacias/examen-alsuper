const { usuarios } = require("../database/models/index");  
const { Request, Response } = require("express");
const { JwtPayload } = require("jsonwebtoken");
const { validarSessionJWT } = require("../util/jwt");


const revisarToken = (req, res, next) => {
    const tokenMessage = "Token de sesión inexistente o inválido.";
    const token = req.headers.authorization;

    // Revisa si el token fue enviado en la consulta
    if (!token || !token.startsWith("Bearer")) {
        return res.status(401).json({
            message: tokenMessage
        });
    }

    // Extraer el token
    const tokenInfo = validarSessionJWT(token.split(" ")[1]);

    if (!tokenInfo.isValid) {
        return res.status(401).json({ message: tokenMessage });
    }

    next();
}

module.exports = { revisarToken };