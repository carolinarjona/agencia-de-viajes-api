const { DataTypes } = require("sequelize");
const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");

const TipoDeViaje = dbAgenciaDeViajes.define("TipoDeViaje", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
});

module.exports = TipoDeViaje;
