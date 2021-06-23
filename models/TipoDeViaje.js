const { DataTypes } = require("sequelize");
const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");

const TipoDeViaje = dbAgenciaDeViajes.define("tipoDeViaje", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

module.exports = TipoDeViaje;
