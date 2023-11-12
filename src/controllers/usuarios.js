const { usuarios } = require("../database/models/index");
const { createSessionJWT } = require("../util/jwt");

// La contraseñas no están encriptadas
async function login(correo_electronico, contrasena) {
    userData = await usuarios.findOne({
        where: { correo_electronico }
    });

    // Validar si no existe el usuario o si la contraseña es incorrecta
    if (userData === null || !(userData.dataValues.contrasena === contrasena)) {
        return { success: false, token: null };
    }

    // Crear token de sesión
    const token = createSessionJWT({
        id: userData.dataValues.id,
        name: userData.dataValues.name
    });

    const { id, nombre, apellido_paterno } = userData;

    return { success: true, id, token, nombre, apellido_paterno };
}

module.exports = { login };