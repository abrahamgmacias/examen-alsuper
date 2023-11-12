'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      segundo_nombre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      apellido_paterno: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido_materno: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fecha_de_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo_electronico: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};