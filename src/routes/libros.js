const { crearNuevoLibro, eliminarLibro } = require('../controllers/libros');
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
    });
});

// Paranoid delete
router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Missing or invalid id" });
    }

    const libroResult = await eliminarLibro(id);

    if (!libroResult.success) {
        return res.status(500).send({
            message: libroResult.error
        });
    }

    return res.status(200).send({
        message: "El libro fue eliminado con éxito."
    });
});

module.exports = router;