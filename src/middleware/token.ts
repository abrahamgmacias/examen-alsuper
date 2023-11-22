import { validarSessionJWT } from "../util/jwt";
import { Request, Response } from "express";

// Valida que la solicitud lleve un bearer token 
export default () => {
    return async (req: Request, res: Response, next: () => unknown) => {
        const tokenMessage = "Token de sesión inexistente o inválido. Pruebe iniciando sesión.";
        const token = req.headers.authorization;
    
        // Revisa si el token fue enviado en la consulta
        if (!token || !token.startsWith("Bearer")) {
            return res.status(401).json({
                message: tokenMessage
            });
        }
    
        // Extraer el tokenn
        const tokenInfo = validarSessionJWT(token.split(" ")[1]);
    
        if (!tokenInfo.isValid) {
            return res.status(401).json({ message: tokenMessage });
        }
    
        next();
    }
}