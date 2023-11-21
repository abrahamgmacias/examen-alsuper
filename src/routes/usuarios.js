const { consultarUsuarioPorId, consultarUsuarioPorNombre, eliminarUsuario, crearUsuario } = require('../controllers/usuarios');
const { revisarToken } = require('../middleware/token');
const express = require('express');

const router = express.Router();

// Consultar usuario por su nombre
router.post('/', revisarToken, async (req, res) => {
    const { nombre, segundo_nombre, apellido_paterno, apellido_materno } = req.body;

    // Validar nombre
    if (!nombre) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }

    const usuarioObject = await consultarUsuarioPorNombre({ nombre, segundo_nombre, apellido_paterno, apellido_materno });

    if (!usuarioObject.success) {
        return res.status(500).send({
            message: usuarioObject.error
        });
    }

    return res.status(200).json(usuarioObject.usuario);
});

// Consultar usuario por su id
router.get('/:id', revisarToken, async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const usuarioObject = await consultarUsuarioPorId(id);

    if (!usuarioObject.success) {
        return res.status(500).send({
            message: usuarioObject.error
        });
    }

    return res.status(200).json(usuarioObject.usuario);
});

// Crear usuario en base a parametros --ignora validaciones de contraseña y correo
// Las contraseñas no están encriptadas
router.post('/crear', revisarToken, async (req, res) => {
    const { nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_de_nacimiento, correo_electronico, contrasena } = req.body;
    
    // Valores not null
    if (!nombre || !apellido_paterno || !fecha_de_nacimiento || !correo_electronico || !contrasena) {
        return res.status(400).send({
            message: "Faltan datos. Compruebe la solicitud."
        });
    }

    const libroObject = await crearUsuario({ nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_de_nacimiento, correo_electronico, contrasena });

    if (!libroObject.success) {
        return res.status(500).send({
            message: libroObject.error
        });
    }

    return res.status(200).send({
        message: "El usuario fue creado con éxito."
    });
});

// Eliminar usuario por su id
router.delete('/eliminar/:id', revisarToken, async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const usuarioResult = await eliminarUsuario(id);

    if (!usuarioResult.success) {
        return res.status(500).send({
            message: usuarioResult.error
        });
    }

    return res.status(200).send({
        message: "El usuario fue eliminado con éxito."
    });
});




module.exports = router;