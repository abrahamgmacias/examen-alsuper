const { consultarUsuario } = require('../controllers/usuarios');
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



module.exports = router;