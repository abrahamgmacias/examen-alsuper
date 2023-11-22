const usuarios = require("../database/models/index");
import { crearSessionJWT, validarSessionJWT } from "../util/jwt";

// La contraseñas no están encriptadas
export async function login(correo_electronico: string, contrasena: string) {
    const userData = await usuarios.findOne({
        where: { correo_electronico }
    });

    // Validar si no existe el usuario o si la contraseña es incorrecta
    if (userData === null || !(userData.dataValues.contrasena === contrasena)) {
        return { success: false, token: null };
    }

    // Crear token de sesión
    const token = crearSessionJWT({
        id: userData.dataValues.id,
        name: userData.dataValues.name
    });

    const { id, nombre, apellido_paterno } = userData;

    return { success: true, id, userData: { token, nombre, apellido_paterno } };
}