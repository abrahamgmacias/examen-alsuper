const { libros } = require("../database/models/index");
import { bookObj } from "../util/objects";


export async function crearLibro(bookData: bookObj) {
    try {
        await libros.create({
            ...bookData,
            createdAt: new Date()
            }
        );

    } catch (error) {
        return {
            success: false, error: "No se pudo crear el libro con éxito. Revise los datos."
        }
    }

    return { success: true };
}

export async function eliminarLibro(id: number) {
    try {
        await libros.destroy({
            where: { id }
        });

    } catch (error) {
        return { success: false, error: "Eliminación fallida. No se encontró un libro activo con ese id."}
    }
    
    return { success: true };
}

// Consultar libro por id
export async function consultarLibroPorId(id: number) {
    let libro; 
    try {
        libro = await libros.findOne({
            attributes: ["id", "nombre", "fecha_de_publicacion", "autor_id", "editorial"],
            where: {
                id,
                deletedAt: null
            }
        });

        if (!libro) {
            return { success: false, error: "No se encontró un libro activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    return { success: true, libro };
}

// Consultar libro por nombre
export async function consultarLibroPorNombre(nombre: string) {
    let libro; 
    try {
        libro = await libros.findOne({
            attributes: ["id", "nombre", "fecha_de_publicacion", "autor_id", "editorial"],
            where: {
                nombre,
                deletedAt: null
            }
        });

        if (!libro) {
            return { success: false, error: "No se encontró un libro activo con ese nombre."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    return { success: true, libro };
}