'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("autores", [
      {
        "id": 1,
        "nombre": "Albert",
        "apellido_paterno": "Camus",
        "fecha_de_nacimiento": "1913-11-07"
      },
      {
        "id": 2,
        "nombre": "Arthur",
        "segundo_nombre": "Charles",
        "apellido_paterno": "Clarke",
        "fecha_de_nacimiento": "1917-12-17"
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
