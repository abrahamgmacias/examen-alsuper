const { libros } = require("../database/models/index");

async function crearNuevoLibro(bookData) {
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

module.exports = { crearNuevoLibro };