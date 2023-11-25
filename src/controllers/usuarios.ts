const { usuarios } = require("../database/models/index");
import { usuarioObj } from "../util/objects";

// Consultar usuario por id
export async function consultarUsuarioPorId(id: number) {
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

// Consultar usuario por nombre
export async function consultarUsuarioPorNombre(nombreData: usuarioObj) {
    // Crear condiciones de nombres
    const nameOptions = Object.fromEntries(
        Object.entries(nombreData)
          .filter(([_, value]) => value !== undefined && value !== null)
    ) as Partial<usuarioObj>;

    let usuario; 
    try {
        usuario = await usuarios.findOne({
            attributes: ["id", "nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            where: {
                ...nameOptions,
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

export async function eliminarUsuario(id: string) {
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

export async function crearUsuario(userData: usuarioObj) {
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