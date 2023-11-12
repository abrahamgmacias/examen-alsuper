const { crearLibro, eliminarLibro, consultarLibro } = require('../controllers/libros');
const { revisarToken } = require('../middleware/token');
const express = require('express');

const router = express.Router();

// Consultar un libro por su id
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const libroObject = await consultarLibro(id);

    if (!libroObject.success) {
        return res.status(500).send({
            message: libroObject.error
        });
    }

    return res.status(200).json(libroObject.libro);
});

// Crear un libro
router.post('/crear', revisarToken, async (req, res) => {
    const { nombre, fecha_de_publicacion, autor_id, editorial } = req.body;

    // Valores not null
    if (!nombre || !autor_id) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }

    const libroObject = await crearLibro({ nombre, fecha_de_publicacion, autor_id, editorial });

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
router.delete('/eliminar/:id', revisarToken, async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
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