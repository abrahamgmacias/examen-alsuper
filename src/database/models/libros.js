'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      libros.belongsTo(models.autores, { foreignKey: "autor_id", allowNull: false });
    }
  }
  libros.init({
    nombre: DataTypes.STRING,
    fecha_de_publicacion: DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'libros',
    paranoid: true
  });
  return libros;
};