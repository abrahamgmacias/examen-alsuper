'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usuarios", [
      {
        "nombre": "Abraham",
        "apellido_paterno": "González",
        "fecha_de_nacimiento": String(new Date(1999, 8, 11)),
        "correo_electronico": "abrahamgonzalez@alsuper.com",
        "contrasena": "contrasena"
      },
      {
        "nombre": "Diana",
        "apellido_paterno": "Parada",
        "fecha_de_nacimiento": String(new Date(1997, 9, 11)),
        "correo_electronico": "dianaparada@alsuper.com",
        "contrasena": "contrasena2"
      },
      {
        "nombre": "Isabela",
        "apellido_paterno": "Torres",
        "fecha_de_nacimiento": String(new Date(2004, 10, 11)),
        "correo_electronico": "isabelatorres@alsuper.com",
        "contrasena": "contrasena3"
      },
    ])
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
