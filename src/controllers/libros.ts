const { libros } = require("../database/models/index");

async function crearLibro(bookData) {
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

async function eliminarLibro(id) {
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
async function consultarLibroPorId(id) {
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
async function consultarLibroPorNombre(nombre) {
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

module.exports = { crearLibro, eliminarLibro, consultarLibroPorId, consultarLibroPorNombre };