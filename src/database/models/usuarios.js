'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nombre: DataTypes.STRING,
    segundo_nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    fecha_de_nacimiento: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'usuarios',
    paranoid: true
  });
  return usuarios;
};