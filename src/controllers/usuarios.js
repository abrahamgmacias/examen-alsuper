const { usuarios } = require("../database/models/index");

console.log(usuarios);

// La contraseñas no están encriptadas
async function login(correo_electronico, contrasena) {
    userData = await usuarios.findOne({
        where: { correo_electronico }
    });

    // Validar si no existe el usuario o si la contraseña es incorrecta
    if (userData === null || !(userData.dataValues.contrasena === contrasena)) {
        return { success: false, token: null };
    }

    // Token falso pre-JWT
    const token = "PLACEHOLDER_TOKEN";
    const { id, nombre, apellido_paterno } = userData;

    return { success: true, id, token, nombre, apellido_paterno };
}

module.exports = { login };