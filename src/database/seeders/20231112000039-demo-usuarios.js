'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usuarios", [
      {
        "nombre": "Abraham",
        "apellido_paterno": "González",
        "fecha_de_nacimiento": "1999-08-11",
        "correo_electronico": "abrahamgonzalez@alsuper.com",
        "contrasena": "contrasena"
      },
      {
        "nombre": "Diana",
        "apellido_paterno": "Parada",
        "fecha_de_nacimiento": "1997-09-11",
        "correo_electronico": "dianaparada@alsuper.com",
        "contrasena": "contrasena2"
      },
      {
        "nombre": "Isabela",
        "apellido_paterno": "Torres",
        "fecha_de_nacimiento": "2004-10-11",
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
