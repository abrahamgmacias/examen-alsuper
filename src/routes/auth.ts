import { login } from '../controllers/auth';
import express from 'express';

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { correo, contrasena } = req.body;

    // Validar email y contrasena
    if (!correo || !contrasena) {
        return res.status(401).json({
            message: "Los datos son incorrectos."
        });
    }

    // Consultar informacion de usuario
    const userObject = await login(correo, contrasena);
    
    // No se encontró usuario o los datos son incorrectos
    if (!userObject.success) {
        return res.status(401).json({
            message: "Credenciales no válidas."
        });
    }

    return res.status(200).json({
        userData: userData.userData
    });
});

export default router;