const { login } = require('../controllers/auth');
const express = require('express');

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

    const { userData } = userObject;

    return res.status(200).json({
        ...userData
    });
});

module.exports = router;