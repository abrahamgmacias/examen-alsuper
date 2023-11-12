const { crearNuevoLibro } = require('../controllers/libros');
const express = require('express');

const router = express.Router();

// Crear un libro
router.post('/crear', async (req, res) => {
    const { nombre, fecha_de_publicacion, autor, editorial } = req.body;

    // Valores not null
    if (!nombre || !autor) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }

    const libroObject = await crearNuevoLibro({ nombre, fecha_de_publicacion, autor, editorial });

    if (!libroObject.success) {
        return res.status(500).send({
            message: libroObject.error
        });
    }

    return res.status(200).send({
        message: "El libro fue creado con éxito."
    })
});

module.exports = router;