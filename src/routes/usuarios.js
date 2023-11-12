const { consultarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { revisarToken } = require('../middleware/token');
const express = require('express');

const router = express.Router();

// Consultar usuario por su id
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Validar id type
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).json({ message: "Id inexistente o inválido." });
    }

    const usuarioObject = await consultarUsuario(id);

    if (!usuarioObject.success) {
        return res.status(500).send({
            message: usuarioObject.error
        });
    }

    return res.status(200).json(usuarioObject.usuario);
});

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