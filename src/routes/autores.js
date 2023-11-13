const { crearAutor, consultarAutorPorId, consultarAutorPorNombre, consultarTodosAutores, eliminarAutor } = require('../controllers/autores');
const { revisarToken } = require('../middleware/token');

const express = require('express');

const router = express.Router();

// Consultar autor por su nombre
router.get('/', revisarToken, async (req, res) => {
    const { nombre, segundo_nombre, apellido_paterno, apellido_materno } = req.body;

    // Validar nombre
    if (!nombre) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }
 
    const autorObject = await consultarAutorPorNombre({ nombre, segundo_nombre, apellido_paterno, apellido_materno });

    if (!autorObject.success) {
        return res.status(500).send({
            message: autorObject.error
        });
    }

    return res.status(200).json(autorObject.autor);
});

// Consultar autor y sus libros por su id 
router.get('/:id', revisarToken, async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const autorObject = await consultarAutorPorId(id);

    if (!autorObject.success) {
        return res.status(500).send({
            message: autorObject.error
        });
    }

    return res.status(200).json(autorObject.autor);
});

// Consulta a todos los autores, sus libros y la cantidad de libros
router.get('/todos', revisarToken, async (req, res) => {
    const autoresObject = await consultarTodosAutores();

    if (!autoresObject.success) {
        return res.status(500).send({
            message: autoresObject.error
        });
    }

    return res.status(200).json(autoresObject.autores);
});

// Crear un autor
router.post('/crear', revisarToken, async (req, res) => {
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


// Paranoid delete autor por su id
router.delete('/eliminar/:id', revisarToken, async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const autorResult = await eliminarAutor(id);

    if (!autorResult.success) {
        return res.status(500).send({
            message: autorResult.error
        });
    }

    return res.status(200).send({
        message: "El autor fue eliminado con éxito."
    });
});



module.exports = router;