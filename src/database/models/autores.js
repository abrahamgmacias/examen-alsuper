'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class autores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      autores.hasMany(models.libros);
    }
  }
  autores.init({
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    fecha_de_nacimiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'autores',
  });
  return autores;
};