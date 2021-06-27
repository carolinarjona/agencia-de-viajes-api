const { DataTypes } = require("sequelize");
const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");

const EstadoCivil = dbAgenciaDeViajes.define("estadoCivil", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  estadoCivilDesc: {
    type: DataTypes.STRING,
  },
});

module.exports = EstadoCivil;
