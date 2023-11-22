import jwt from "jsonwebtoken";

const loginAudience = "session";

// Crear un token de inicio de sesión
export function crearSessionJWT(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        audience: loginAudience
    });
}

// Validar el token
export function validarSessionJWT(token: string) {
    try {
        return {
            isValid: true,
            payload: jwt.verify(token, process.env.JWT_SECRET!, {
                audience: loginAudience,
                algorithms: ["HS256"]
            })
        } 
    } catch {
        return { isValid: false, payload: undefined }
    }
}