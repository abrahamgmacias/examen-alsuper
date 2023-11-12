const jwt = require("jsonwebtoken");

const loginAudience = "session";

// Crear un token de inicio de sesión
function crearSessionJWT(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        audience: loginAudience
    });
}

// Validar el token
function validarSessionJWT(token) {
    try {
        return {
            isValid: true,
            payload: jwt.verify(token, process.env.JWT_SECRET, {
                audience: loginAudience,
                algorithms: ["HS256"]
            })
        } 
    } catch {
        return { isValid: false, payload: undefined }
    }
}

module.exports = { crearSessionJWT, validarSessionJWT };