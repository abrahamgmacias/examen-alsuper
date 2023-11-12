'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("libros", [
      {
        "nombre": "El Mito de Sísifo",
        "fecha_de_publicacion": "1942-08",
        "editorial": "Alianza",
        "autor_id": 1
      },
      {
        "nombre": "La Peste",
        "fecha_de_publicacion": "1942-07-10",
        "editorial": "Anágrama",
        "autor_id": 1
      },
      {
        "nombre": "El Extranjero",
        "fecha_de_publicacion": "1942",
        "editorial": "Alfaguara",
        "autor_id": 1
      },

      {
        "nombre": "El Fin de la Infancia",
        "fecha_de_publicacion": "1953",
        "editorial": "Anágrama",
        "autor_id": 2
      },
      {
        "nombre": "2001: Odisea del Espacio",
        "fecha_de_publicacion": "1968",
        "editorial": "Anágrama",
        "autor_id": 2
      }

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
