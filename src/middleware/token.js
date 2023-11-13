const { validarSessionJWT } = require("../util/jwt");

// Valida que la solicitud lleve un bearer token 
const revisarToken = (req, res, next) => {
    const tokenMessage = "Token de sesión inexistente o inválido. Pruebe iniciando sesión.";
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