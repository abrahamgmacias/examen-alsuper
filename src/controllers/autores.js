const { autores } = require("../database/models/index");


// Consultar un autor por su id
async function crearAutor(autorData) {
    try {
        await autores.create({
            ...autorData,
            createdAt: new Date()
            }
        );

    } catch (error) {
        console.log(error);
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
            attributes: ["nombre", "segundo_nombre", "apellido_paterno", "apellido_materno", "fecha_de_nacimiento"],
            where: {
                id,
                deletedAt: null
            }
        });

        if (!autor) {
            return { success: false, error: "No se encontró un autor activo con ese id."}
        }

    } catch (error) {
        return { success: false, error: "Consulta fallida. Revise los parametros de búsqueda."}
    }

    return { success: true, autor };
}

module.exports = { crearAutor, consultarAutor };