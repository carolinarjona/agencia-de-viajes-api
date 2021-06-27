const { DataTypes } = require("sequelize");
const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");

const Cliente = dbAgenciaDeViajes.define("cliente", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  fechaDeNacimiento: {
    type: DataTypes.DATE,
  },
  estadoCivilId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Cliente;
