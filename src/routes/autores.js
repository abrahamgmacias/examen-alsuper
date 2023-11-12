const { crearAutor } = require('../controllers/autores');

const express = require('express');

const router = express.Router();

// Crear un autor
router.post('/crear', async (req, res) => {
    const { nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_de_nacimiento } = req.body;
    
    // Valores not null
    if (!apellido_paterno || !nombre) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }

    const autorObject = await crearAutor({ nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_de_nacimiento });

    if (!autorObject. success) {
        return res.status(500).send({
            message: autorObject.error
        });
    } 

    return res.status(200).send({
        message: "El autor fue creado con éxito."
    });
});

module.exports = router;