const { autores } = require("../database/models/index");


// Consultar un autor por su id
async function crearAutor(autorData) {
    console.log(autorData);

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

module.exports = { crearAutor };