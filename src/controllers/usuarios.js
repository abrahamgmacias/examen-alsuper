const { usuarios } = require("../database/models/index");

async function consultarUsuario(id) {
    let usuario; 
    try {
        usuario = await usuarios.findOne({
            attributes: ["id", "nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            where: {
                id,
                deletedAt: null
            }
        });

        if (!usuario) {
            return { success: false, error: "No se encontró un usuario activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    return { success: true, usuario };
}

async function eliminarUsuario(id) {
    let usuario;
    try {
        usuario = await usuarios.destroy({
            where: { id }
        });

        if (!usuario) {
            return { success: false, error: "No se encontró un usuario activo con esa id."}
        }

    } catch (error) {
        return { success: false, error: "Eliminación fallida. Revise los parametros de consulta."}
    }
    
    return { success: true };
}

async function crearUsuario(userData) {
    try {
        await usuarios.create({
            ...userData,
            createdAt: new Date()
            }
        );

    } catch (error) {
        return {
            success: false, error: "No se pudo crear el usuario con éxito. Revise los datos."
        }
    }

    return { success: true };
}


module.exports = { consultarUsuario, eliminarUsuario, crearUsuario }