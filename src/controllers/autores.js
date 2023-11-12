const { autores, libros } = require("../database/models/index");

// Consultar un autor por su id
async function crearAutor(autorData) {
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

async function consultarAutor(id) {
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

    agregarTotalLibros([autor]);

    return { success: true, autor };
}

async function consultarTodosAutores() {
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

    agregarTotalLibros(autoresTotal)


    return { success: true, autores: autoresTotal};
}

// Agregar parametro de total de libros
function agregarTotalLibros(autoresArray) {
    autoresArray.map((autorObject) => {
        const autorValues = autorObject.dataValues;
        const libros = autorValues.libros;
        autorValues.total_de_libros = libros.length;
        
    });
}

// Paranoid delete autor por su id
async function eliminarAutor(id) {
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

module.exports = { crearAutor, consultarAutor, consultarTodosAutores, eliminarAutor };