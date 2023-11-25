const { autores, libros } = require("../database/models/index");
import { authorObj } from "../util/objects";

// Consultar un autor por su id
export async function crearAutor(autorData: authorObj) {
    try {
        await autores.create({
            ...autorData,
            createdAt: new Date()
            }
        );

    } catch (error) {
        return {
            success: false, error: "No se pudo crear el autor con éxito. Revise los datos."
        }
    }

    return { success: true };
}

// Consultar autor con id
export async function consultarAutorPorId(id: number) {
    let autor; 
    try {
        autor = await autores.findOne({
            attributes: ["id", "nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            where: {
                id,
                deletedAt: null
            },
            include: [{
                model: libros,
                attributes: ["id", "nombre", "fecha_de_publicacion", "editorial"]
            }]
        });

        if (!autor) {
            return { success: false, error: "No se encontró un autor activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    // agregarTotalLibros([autor]);

    return { success: true, autor };
}

// Consultar autor por nombre
export async function consultarAutorPorNombre(autorData: authorObj) {
    // Crear condiciones de nombre
    const nameOptions = Object.fromEntries(
        Object.entries(autorData)
          .filter(([_, value]) => value !== undefined && value !== null)
    ) as Partial<authorObj>;
    
    let autor; 
    try {
        autor = await autores.findOne({
            attributes: ["id", "nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            where: {
                ...nameOptions,
                deletedAt: null
            },
            include: [{
                model: libros,
                attributes: ["id", "nombre", "fecha_de_publicacion", "editorial"]
            }]
        });

        if (!autor) {
            return { success: false, error: "No se encontró un autor activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    // agregarTotalLibros([autor]);

    return { success: true, autor };
}

export async function consultarTodosAutores() {
    let autoresTotal; 
    try {
        autoresTotal = await autores.findAll({
            attributes: ["id", "nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            include: [{
                model: libros,
                attributes: ["id", "nombre", "fecha_de_publicacion", "editorial"]
            }]
        });

        if (!autoresTotal) {
            return { success: false, error: "No se encontró un autor activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    // agregarTotalLibros(autoresTotal)


    return { success: true, autores: autoresTotal};
}

// Agregar parametro de total de libros
// export function agregarTotalLibros(autoresArray: authorObj[]) {
//     autoresArray.map((autorObject) => {
//         const autorValues = autorObject.dataValues;
//         const libros = autorValues.libros;
//         autorValues.total_de_libros = libros.length;
        
//     });
// }

// Paranoid delete autor por su id
export async function eliminarAutor(id: number) {
    let autor;
    try {
        autor = await autores.destroy({
            where: { id }
        });
        
        if (!autor) {
            return { success: false, error: "No se encontró usuario con esa id."}
        }

    } catch (error) {
        return { success: false, error: "Eliminación fallida. Revisar parametros de consulta."}
    }
    
    return { success: true };
}